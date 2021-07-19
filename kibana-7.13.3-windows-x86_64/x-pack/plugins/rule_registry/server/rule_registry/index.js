"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuleRegistry = void 0;

var _util = require("util");

var _server = require("../../../event_log/server");

var _common = require("../../common");

var _mapping_from_field_map = require("./field_map/mapping_from_field_map");

var _create_scoped_rule_registry_client = require("./create_scoped_rule_registry_client");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class RuleRegistry {
  constructor(options) {
    this.options = options;

    _defineProperty(this, "esAdapter", void 0);

    _defineProperty(this, "children", []);

    _defineProperty(this, "types", []);

    _defineProperty(this, "fieldmapType", void 0);

    const {
      logger,
      coreSetup
    } = options;
    this.fieldmapType = (0, _common.runtimeTypeFromFieldMap)(options.fieldMap);
    const {
      wait,
      signal
    } = (0, _server.createReadySignal)();
    this.esAdapter = new _server.ClusterClientAdapter({
      wait,
      elasticsearchClientPromise: coreSetup.getStartServices().then(([{
        elasticsearch
      }]) => elasticsearch.client.asInternalUser),
      logger: logger.get('esAdapter')
    });

    if (this.options.writeEnabled) {
      this.initialize().then(() => {
        this.options.logger.debug('Bootstrapped alerts index');
        signal(true);
      }).catch(err => {
        logger.error((0, _util.inspect)(err, {
          depth: null
        }));
        signal(false);
      });
    } else {
      logger.debug('Write disabled, indices are not being bootstrapped');
    }
  }

  getEsNames() {
    const base = [this.options.kibanaIndex, this.options.name];
    const indexTarget = `${base.join('-')}*`;
    const indexAliasName = [...base, this.options.kibanaVersion.toLowerCase()].join('-');
    const policyName = [...base, 'policy'].join('-');
    return {
      indexAliasName,
      indexTarget,
      policyName
    };
  }

  async initialize() {
    const {
      indexAliasName,
      policyName
    } = this.getEsNames();
    const ilmPolicyExists = await this.esAdapter.doesIlmPolicyExist(policyName);

    if (!ilmPolicyExists) {
      await this.esAdapter.createIlmPolicy(policyName, this.options.ilmPolicy);
    }

    const templateExists = await this.esAdapter.doesIndexTemplateExist(indexAliasName);
    const mappings = (0, _mapping_from_field_map.mappingFromFieldMap)(this.options.fieldMap);
    const esClient = (await this.options.coreSetup.getStartServices())[0].elasticsearch.client.asInternalUser;

    if (!templateExists) {
      await this.esAdapter.createIndexTemplate(indexAliasName, {
        index_patterns: [`${indexAliasName}-*`],
        settings: {
          number_of_shards: 1,
          auto_expand_replicas: '0-1',
          'index.lifecycle.name': policyName,
          'index.lifecycle.rollover_alias': indexAliasName,
          'sort.field': '@timestamp',
          'sort.order': 'desc'
        },
        mappings
      });
    } else {
      await esClient.indices.putTemplate({
        name: indexAliasName,
        body: {
          index_patterns: [`${indexAliasName}-*`],
          mappings
        },
        create: false
      });
    }

    const aliasExists = await this.esAdapter.doesAliasExist(indexAliasName);

    if (!aliasExists) {
      await this.esAdapter.createIndex(`${indexAliasName}-000001`, {
        aliases: {
          [indexAliasName]: {
            is_write_index: true
          }
        }
      });
    } else {
      const {
        body: aliases
      } = await esClient.indices.getAlias({
        index: indexAliasName
      });
      const writeIndex = Object.entries(aliases).find(([indexName, alias]) => {
        var _alias$aliases$indexA;

        return ((_alias$aliases$indexA = alias.aliases[indexAliasName]) === null || _alias$aliases$indexA === void 0 ? void 0 : _alias$aliases$indexA.is_write_index) === true;
      })[0];
      const {
        body: fieldsInWriteIndex
      } = await esClient.fieldCaps({
        index: writeIndex,
        fields: '*'
      });
      const fieldsNotOrDifferentInIndex = Object.entries(this.options.fieldMap).filter(([fieldName, descriptor]) => {
        return !fieldsInWriteIndex.fields[fieldName] || !fieldsInWriteIndex.fields[fieldName][descriptor.type];
      });

      if (fieldsNotOrDifferentInIndex.length > 0) {
        this.options.logger.debug(`Some fields were not found in write index mapping: ${Object.keys(Object.fromEntries(fieldsNotOrDifferentInIndex)).join(',')}`);
        this.options.logger.info(`Updating index mapping due to new fields`);
        await esClient.indices.putMapping({
          index: indexAliasName,
          body: mappings
        });
      }
    }
  }

  getFieldMapType() {
    return this.fieldmapType;
  }

  getRuleTypeById(ruleTypeId) {
    return this.types.find(type => type.id === ruleTypeId);
  }

  getRegistryByRuleTypeId(ruleTypeId) {
    if (this.getRuleTypeById(ruleTypeId)) {
      return this;
    }

    return this.children.find(child => child.getRegistryByRuleTypeId(ruleTypeId));
  }

  async createScopedRuleRegistryClient({
    context,
    alertsClient
  }) {
    if (!this.options.writeEnabled) {
      return undefined;
    }

    const {
      indexAliasName,
      indexTarget
    } = this.getEsNames();
    const frameworkAlerts = (await alertsClient.find({
      options: {
        perPage: 1000
      }
    })).data;
    return (0, _create_scoped_rule_registry_client.createScopedRuleRegistryClient)({
      ruleUuids: frameworkAlerts.map(frameworkAlert => frameworkAlert.id),
      scopedClusterClient: context.core.elasticsearch.client,
      clusterClientAdapter: this.esAdapter,
      registry: this,
      indexAliasName,
      indexTarget,
      logger: this.options.logger
    });
  }

  registerType(type) {
    const logger = this.options.logger.get(type.id);
    const {
      indexAliasName,
      indexTarget
    } = this.getEsNames();
    this.types.push(type);
    this.options.alertingPluginSetupContract.registerType({ ...type,
      executor: async executorOptions => {
        const {
          services,
          alertId,
          name,
          tags
        } = executorOptions;
        const rule = {
          id: type.id,
          uuid: alertId,
          category: type.name,
          name
        };
        const producer = type.producer;
        return type.executor({ ...executorOptions,
          rule,
          producer,
          services: { ...services,
            logger,
            ...(this.options.writeEnabled ? {
              scopedRuleRegistryClient: (0, _create_scoped_rule_registry_client.createScopedRuleRegistryClient)({
                scopedClusterClient: services.scopedClusterClient,
                ruleUuids: [rule.uuid],
                clusterClientAdapter: this.esAdapter,
                registry: this,
                indexAliasName,
                indexTarget,
                ruleData: {
                  producer,
                  rule,
                  tags
                },
                logger: this.options.logger
              })
            } : {})
          }
        });
      }
    });
  }

  create({
    name,
    fieldMap,
    ilmPolicy
  }) {
    const mergedFieldMap = fieldMap ? (0, _common.mergeFieldMaps)(this.options.fieldMap, fieldMap) : this.options.fieldMap;
    const child = new RuleRegistry({ ...this.options,
      logger: this.options.logger.get(name),
      name: [this.options.name, name].filter(Boolean).join('-'),
      fieldMap: mergedFieldMap,
      ...(ilmPolicy ? {
        ilmPolicy
      } : {})
    });
    this.children.push(child); // @ts-expect-error could be instantiated with a different subtype of constraint

    return child;
  }

}

exports.RuleRegistry = RuleRegistry;