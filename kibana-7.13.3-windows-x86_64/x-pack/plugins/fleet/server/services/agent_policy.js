"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPackageToAgentPolicy = addPackageToAgentPolicy;
exports.agentPolicyService = void 0;

var _lodash = require("lodash");

var _jsYaml = require("js-yaml");

var _v = _interopRequireDefault(require("uuid/v4"));

var _server = require("../../../../../src/core/server");

var _constants = require("../constants");

var _common = require("../../common");

var _errors = require("../errors");

var _packages = require("./epm/packages");

var _agents = require("./agents");

var _package_policy = require("./package_policy");

var _output = require("./output");

var _agent_policy_update = require("./agent_policy_update");

var _settings = require("./settings");

var _saved_object = require("./saved_object");

var _app_context = require("./app_context");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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

const SAVED_OBJECT_TYPE = _constants.AGENT_POLICY_SAVED_OBJECT_TYPE;

class AgentPolicyService {
  constructor() {
    _defineProperty(this, "triggerAgentPolicyUpdatedEvent", async (soClient, esClient, action, agentPolicyId) => {
      return (0, _agent_policy_update.agentPolicyUpdateEventHandler)(soClient, esClient, action, agentPolicyId);
    });
  }

  async _update(soClient, esClient, id, agentPolicy, user, options = {
    bumpRevision: true
  }) {
    const oldAgentPolicy = await this.get(soClient, id, false);

    if (!oldAgentPolicy) {
      throw new Error('Agent policy not found');
    }

    if (oldAgentPolicy.status === _common.agentPolicyStatuses.Inactive && agentPolicy.status !== _common.agentPolicyStatuses.Active) {
      throw new Error(`Agent policy ${id} cannot be updated because it is ${oldAgentPolicy.status}`);
    }

    await soClient.update(SAVED_OBJECT_TYPE, id, { ...agentPolicy,
      ...(options.bumpRevision ? {
        revision: oldAgentPolicy.revision + 1
      } : {}),
      updated_at: new Date().toISOString(),
      updated_by: user ? user.username : 'system'
    });

    if (options.bumpRevision) {
      await this.triggerAgentPolicyUpdatedEvent(soClient, esClient, 'updated', id);
    }

    return await this.get(soClient, id);
  }

  async ensurePreconfiguredAgentPolicy(soClient, esClient, config) {
    const {
      id,
      ...preconfiguredAgentPolicy
    } = (0, _lodash.omit)(config, 'package_policies');
    const newAgentPolicyDefaults = {
      namespace: 'default',
      monitoring_enabled: ['logs', 'metrics']
    };
    const newAgentPolicy = { ...newAgentPolicyDefaults,
      ...preconfiguredAgentPolicy,
      is_preconfigured: true
    };
    let searchParams;

    if (id) {
      searchParams = {
        id: String(id)
      };
    } else if (preconfiguredAgentPolicy.is_default || preconfiguredAgentPolicy.is_default_fleet_server) {
      searchParams = {
        searchFields: [preconfiguredAgentPolicy.is_default_fleet_server ? 'is_default_fleet_server' : 'is_default'],
        search: 'true'
      };
    }

    if (!searchParams) throw new Error('Missing ID');
    return await this.ensureAgentPolicy(soClient, esClient, newAgentPolicy, searchParams);
  }

  async ensureAgentPolicy(soClient, esClient, newAgentPolicy, searchParams) {
    // For preconfigured policies with a specified ID
    if ('id' in searchParams) {
      try {
        const agentPolicy = await soClient.get(_constants.AGENT_POLICY_SAVED_OBJECT_TYPE, searchParams.id);
        return {
          created: false,
          policy: {
            id: agentPolicy.id,
            ...agentPolicy.attributes
          }
        };
      } catch (e) {
        if (_server.SavedObjectsErrorHelpers.isNotFoundError(e)) {
          return {
            created: true,
            policy: await this.create(soClient, esClient, newAgentPolicy, {
              id: searchParams.id
            })
          };
        } else throw e;
      }
    } // For default policies without a specified ID


    const agentPolicies = await soClient.find({
      type: _constants.AGENT_POLICY_SAVED_OBJECT_TYPE,
      ...searchParams
    });

    if (agentPolicies.total === 0) {
      return {
        created: true,
        policy: await this.create(soClient, esClient, newAgentPolicy)
      };
    }

    return {
      created: false,
      policy: {
        id: agentPolicies.saved_objects[0].id,
        ...agentPolicies.saved_objects[0].attributes
      }
    };
  }

  async create(soClient, esClient, agentPolicy, options) {
    var _agentPolicy$is_manag, _options$user;

    await this.requireUniqueName(soClient, agentPolicy);
    const newSo = await soClient.create(SAVED_OBJECT_TYPE, { ...agentPolicy,
      status: 'active',
      is_managed: (_agentPolicy$is_manag = agentPolicy.is_managed) !== null && _agentPolicy$is_manag !== void 0 ? _agentPolicy$is_manag : false,
      revision: 1,
      updated_at: new Date().toISOString(),
      updated_by: (options === null || options === void 0 ? void 0 : (_options$user = options.user) === null || _options$user === void 0 ? void 0 : _options$user.username) || 'system'
    }, options);

    if (!agentPolicy.is_default && !agentPolicy.is_default_fleet_server) {
      await this.triggerAgentPolicyUpdatedEvent(soClient, esClient, 'created', newSo.id);
    }

    return {
      id: newSo.id,
      ...newSo.attributes
    };
  }

  async requireUniqueName(soClient, givenPolicy) {
    const results = await soClient.find({
      type: SAVED_OBJECT_TYPE,
      searchFields: ['name'],
      search: (0, _saved_object.escapeSearchQueryPhrase)(givenPolicy.name)
    });
    const idsWithName = results.total && results.saved_objects.map(({
      id
    }) => id);

    if (Array.isArray(idsWithName)) {
      const isEditingSelf = givenPolicy.id && idsWithName.includes(givenPolicy.id);

      if (!givenPolicy.id || !isEditingSelf) {
        const isSinglePolicy = idsWithName.length === 1;
        const existClause = isSinglePolicy ? `Agent Policy '${idsWithName[0]}' already exists` : `Agent Policies '${idsWithName.join(',')}' already exist`;
        throw new _errors.AgentPolicyNameExistsError(`${existClause} with name '${givenPolicy.name}'`);
      }
    }
  }

  async get(soClient, id, withPackagePolicies = true) {
    const agentPolicySO = await soClient.get(SAVED_OBJECT_TYPE, id);

    if (!agentPolicySO) {
      return null;
    }

    if (agentPolicySO.error) {
      throw new Error(agentPolicySO.error.message);
    }

    const agentPolicy = {
      id: agentPolicySO.id,
      ...agentPolicySO.attributes
    };

    if (withPackagePolicies) {
      agentPolicy.package_policies = (await _package_policy.packagePolicyService.getByIDs(soClient, agentPolicySO.attributes.package_policies || [])) || [];
    }

    return agentPolicy;
  }

  async getByIDs(soClient, ids, options = {}) {
    const objects = ids.map(id => ({ ...options,
      id,
      type: SAVED_OBJECT_TYPE
    }));
    const agentPolicySO = await soClient.bulkGet(objects);
    return agentPolicySO.saved_objects.map(so => ({
      id: so.id,
      version: so.version,
      ...so.attributes
    }));
  }

  async list(soClient, options) {
    const {
      page = 1,
      perPage = 20,
      sortField = 'updated_at',
      sortOrder = 'desc',
      kuery,
      withPackagePolicies = false
    } = options;
    const agentPoliciesSO = await soClient.find({
      type: SAVED_OBJECT_TYPE,
      sortField,
      sortOrder,
      page,
      perPage,
      filter: kuery ? (0, _saved_object.normalizeKuery)(SAVED_OBJECT_TYPE, kuery) : undefined
    });
    const agentPolicies = await Promise.all(agentPoliciesSO.saved_objects.map(async agentPolicySO => {
      const agentPolicy = {
        id: agentPolicySO.id,
        ...agentPolicySO.attributes
      };

      if (withPackagePolicies) {
        const agentPolicyWithPackagePolicies = await this.get(soClient, agentPolicySO.id, withPackagePolicies);

        if (agentPolicyWithPackagePolicies) {
          agentPolicy.package_policies = agentPolicyWithPackagePolicies.package_policies;
        }
      }

      return agentPolicy;
    }));
    return {
      items: agentPolicies,
      total: agentPoliciesSO.total,
      page,
      perPage
    };
  }

  async update(soClient, esClient, id, agentPolicy, options) {
    if (agentPolicy.name) {
      await this.requireUniqueName(soClient, {
        id,
        name: agentPolicy.name
      });
    }

    return this._update(soClient, esClient, id, agentPolicy, options === null || options === void 0 ? void 0 : options.user);
  }

  async copy(soClient, esClient, id, newAgentPolicyProps, options) {
    // Copy base agent policy
    const baseAgentPolicy = await this.get(soClient, id, true);

    if (!baseAgentPolicy) {
      throw new Error('Agent policy not found');
    } // eslint-disable-next-line @typescript-eslint/naming-convention


    const {
      namespace,
      monitoring_enabled
    } = baseAgentPolicy;
    const newAgentPolicy = await this.create(soClient, esClient, {
      namespace,
      monitoring_enabled,
      ...newAgentPolicyProps
    }, options); // Copy all package policies

    if (baseAgentPolicy.package_policies.length) {
      const newPackagePolicies = baseAgentPolicy.package_policies.map(packagePolicy => {
        const {
          id: packagePolicyId,
          version,
          ...newPackagePolicy
        } = packagePolicy;
        return newPackagePolicy;
      });
      await _package_policy.packagePolicyService.bulkCreate(soClient, esClient, newPackagePolicies, newAgentPolicy.id, { ...options,
        bumpRevision: false
      });
    } // Get updated agent policy


    const updatedAgentPolicy = await this.get(soClient, newAgentPolicy.id, true);

    if (!updatedAgentPolicy) {
      throw new Error('Copied agent policy not found');
    }

    await this.createFleetPolicyChangeAction(soClient, newAgentPolicy.id);
    return updatedAgentPolicy;
  }

  async bumpRevision(soClient, esClient, id, options) {
    const res = await this._update(soClient, esClient, id, {}, options === null || options === void 0 ? void 0 : options.user);
    return res;
  }

  async bumpAllAgentPolicies(soClient, esClient, options) {
    const currentPolicies = await soClient.find({
      type: SAVED_OBJECT_TYPE,
      fields: ['revision']
    });
    const bumpedPolicies = currentPolicies.saved_objects.map(policy => {
      policy.attributes = { ...policy.attributes,
        revision: policy.attributes.revision + 1,
        updated_at: new Date().toISOString(),
        updated_by: options !== null && options !== void 0 && options.user ? options.user.username : 'system'
      };
      return policy;
    });
    const res = await soClient.bulkUpdate(bumpedPolicies);
    await Promise.all(currentPolicies.saved_objects.map(policy => this.triggerAgentPolicyUpdatedEvent(soClient, esClient, 'updated', policy.id)));
    return res;
  }

  async assignPackagePolicies(soClient, esClient, id, packagePolicyIds, options = {
    bumpRevision: true
  }) {
    const oldAgentPolicy = await this.get(soClient, id, false);

    if (!oldAgentPolicy) {
      throw new Error('Agent policy not found');
    }

    if (oldAgentPolicy.is_managed && !(options !== null && options !== void 0 && options.force)) {
      throw new _errors.HostedAgentPolicyRestrictionRelatedError(`Cannot update integrations of hosted agent policy ${id}`);
    }

    return await this._update(soClient, esClient, id, {
      package_policies: (0, _lodash.uniq)([...(oldAgentPolicy.package_policies || [])].concat(packagePolicyIds))
    }, options === null || options === void 0 ? void 0 : options.user, {
      bumpRevision: options.bumpRevision
    });
  }

  async unassignPackagePolicies(soClient, esClient, id, packagePolicyIds, options) {
    const oldAgentPolicy = await this.get(soClient, id, false);

    if (!oldAgentPolicy) {
      throw new Error('Agent policy not found');
    }

    if (oldAgentPolicy.is_managed && !(options !== null && options !== void 0 && options.force)) {
      throw new _errors.HostedAgentPolicyRestrictionRelatedError(`Cannot remove integrations of hosted agent policy ${id}`);
    }

    return await this._update(soClient, esClient, id, {
      package_policies: (0, _lodash.uniq)([...(oldAgentPolicy.package_policies || [])].filter(packagePolicyId => !packagePolicyIds.includes(packagePolicyId)))
    }, options === null || options === void 0 ? void 0 : options.user);
  }

  async getDefaultAgentPolicyId(soClient) {
    const agentPolicies = await soClient.find({
      type: _constants.AGENT_POLICY_SAVED_OBJECT_TYPE,
      searchFields: ['is_default'],
      search: 'true'
    });

    if (agentPolicies.saved_objects.length === 0) {
      throw new Error('No default agent policy');
    }

    return agentPolicies.saved_objects[0].id;
  }

  async delete(soClient, esClient, id) {
    const agentPolicy = await this.get(soClient, id, false);

    if (!agentPolicy) {
      throw new Error('Agent policy not found');
    }

    if (agentPolicy.is_managed) {
      throw new _errors.HostedAgentPolicyRestrictionRelatedError(`Cannot delete hosted agent policy ${id}`);
    }

    if (agentPolicy.is_default) {
      throw new Error('The default agent policy cannot be deleted');
    }

    if (agentPolicy.is_default_fleet_server) {
      throw new Error('The default fleet server agent policy cannot be deleted');
    }

    const {
      total
    } = await (0, _agents.getAgentsByKuery)(esClient, {
      showInactive: false,
      perPage: 0,
      page: 1,
      kuery: `${_constants.AGENT_SAVED_OBJECT_TYPE}.policy_id:${id}`
    });

    if (total > 0) {
      throw new Error('Cannot delete agent policy that is assigned to agent(s)');
    }

    if (agentPolicy.package_policies && agentPolicy.package_policies.length) {
      await _package_policy.packagePolicyService.delete(soClient, esClient, agentPolicy.package_policies, {
        skipUnassignFromAgentPolicies: true
      });
    }

    if (agentPolicy.is_preconfigured) {
      await soClient.create(_constants.PRECONFIGURATION_DELETION_RECORD_SAVED_OBJECT_TYPE, {
        id: String(id)
      });
    }

    await soClient.delete(SAVED_OBJECT_TYPE, id);
    await this.triggerAgentPolicyUpdatedEvent(soClient, esClient, 'deleted', id);
    return {
      id,
      name: agentPolicy.name
    };
  }

  async createFleetPolicyChangeAction(soClient, agentPolicyId) {
    const esClient = _app_context.appContextService.getInternalUserESClient();

    const defaultOutputId = await _output.outputService.getDefaultOutputId(soClient);

    if (!defaultOutputId) {
      return;
    }

    await this.createFleetPolicyChangeFleetServer(soClient, esClient, agentPolicyId);
  }

  async createFleetPolicyChangeFleetServer(soClient, esClient, agentPolicyId) {
    const policy = await agentPolicyService.get(soClient, agentPolicyId);
    const fullPolicy = await agentPolicyService.getFullAgentPolicy(soClient, agentPolicyId);

    if (!policy || !fullPolicy || !fullPolicy.revision) {
      return;
    }

    const fleetServerPolicy = {
      '@timestamp': new Date().toISOString(),
      revision_idx: fullPolicy.revision,
      coordinator_idx: 0,
      data: fullPolicy,
      policy_id: fullPolicy.id,
      default_fleet_server: policy.is_default_fleet_server === true
    };
    await esClient.create({
      index: _common.AGENT_POLICY_INDEX,
      body: fleetServerPolicy,
      id: (0, _v.default)(),
      refresh: 'wait_for'
    });
  }

  async getLatestFleetPolicy(esClient, agentPolicyId) {
    const res = await esClient.search({
      index: _common.AGENT_POLICY_INDEX,
      ignore_unavailable: true,
      body: {
        query: {
          term: {
            policy_id: agentPolicyId
          }
        },
        size: 1,
        sort: [{
          revision_idx: {
            order: 'desc'
          }
        }]
      }
    }); // @ts-expect-error value is number | TotalHits

    if (res.body.hits.total.value === 0) {
      return null;
    }

    return res.body.hits.hits[0]._source;
  }

  async getFullAgentPolicy(soClient, id, options) {
    let agentPolicy;
    const standalone = options === null || options === void 0 ? void 0 : options.standalone;

    try {
      agentPolicy = await this.get(soClient, id);
    } catch (err) {
      if (!err.isBoom || err.output.statusCode !== 404) {
        throw err;
      }
    }

    if (!agentPolicy) {
      return null;
    }

    const defaultOutputId = await _output.outputService.getDefaultOutputId(soClient);

    if (!defaultOutputId) {
      throw new Error('Default output is not setup');
    }

    const defaultOutput = await _output.outputService.get(soClient, defaultOutputId);
    const fullAgentPolicy = {
      id: agentPolicy.id,
      outputs: { // TEMPORARY as we only support a default output
        ...[defaultOutput].reduce( // eslint-disable-next-line @typescript-eslint/naming-convention
        (outputs, {
          config_yaml,
          name,
          type,
          hosts,
          ca_sha256,
          api_key
        }) => {
          const configJs = config_yaml ? (0, _jsYaml.safeLoad)(config_yaml) : {};
          outputs[name] = {
            type,
            hosts,
            ca_sha256,
            api_key,
            ...configJs
          };

          if (options !== null && options !== void 0 && options.standalone) {
            delete outputs[name].api_key;
            outputs[name].username = 'ES_USERNAME';
            outputs[name].password = 'ES_PASSWORD';
          }

          return outputs;
        }, {})
      },
      inputs: (0, _common.storedPackagePoliciesToAgentInputs)(agentPolicy.package_policies),
      revision: agentPolicy.revision,
      ...(agentPolicy.monitoring_enabled && agentPolicy.monitoring_enabled.length > 0 ? {
        agent: {
          monitoring: {
            use_output: defaultOutput.name,
            enabled: true,
            logs: agentPolicy.monitoring_enabled.includes(_common.dataTypes.Logs),
            metrics: agentPolicy.monitoring_enabled.includes(_common.dataTypes.Metrics)
          }
        }
      } : {
        agent: {
          monitoring: {
            enabled: false,
            logs: false,
            metrics: false
          }
        }
      })
    }; // Only add permissions if output.type is "elasticsearch"

    fullAgentPolicy.output_permissions = Object.keys(fullAgentPolicy.outputs).reduce((permissions, outputName) => {
      const output = fullAgentPolicy.outputs[outputName];

      if (output && output.type === 'elasticsearch') {
        permissions[outputName] = {};
        permissions[outputName]._fallback = {
          cluster: ['monitor'],
          indices: [{
            names: ['logs-*', 'metrics-*', 'traces-*', '.logs-endpoint.diagnostic.collection-*', 'synthetics-*'],
            privileges: ['auto_configure', 'create_doc']
          }]
        };
      }

      return permissions;
    }, {}); // only add settings if not in standalone

    if (!standalone) {
      let settings;

      try {
        settings = await (0, _settings.getSettings)(soClient);
      } catch (error) {
        throw new Error('Default settings is not setup');
      }

      if (settings.fleet_server_hosts && settings.fleet_server_hosts.length) {
        fullAgentPolicy.fleet = {
          hosts: settings.fleet_server_hosts
        };
      }
    }

    return fullAgentPolicy;
  }

}

const agentPolicyService = new AgentPolicyService();
exports.agentPolicyService = agentPolicyService;

async function addPackageToAgentPolicy(soClient, esClient, packageToInstall, agentPolicy, defaultOutput, packagePolicyName, packagePolicyDescription, transformPackagePolicy) {
  var _agentPolicy$namespac;

  const packageInfo = await (0, _packages.getPackageInfo)({
    savedObjectsClient: soClient,
    pkgName: packageToInstall.name,
    pkgVersion: packageToInstall.version
  });
  const basePackagePolicy = (0, _common.packageToPackagePolicy)(packageInfo, agentPolicy.id, defaultOutput.id, (_agentPolicy$namespac = agentPolicy.namespace) !== null && _agentPolicy$namespac !== void 0 ? _agentPolicy$namespac : 'default', packagePolicyName, packagePolicyDescription);
  const newPackagePolicy = transformPackagePolicy ? transformPackagePolicy(basePackagePolicy) : basePackagePolicy;
  await _package_policy.packagePolicyService.create(soClient, esClient, newPackagePolicy, {
    bumpRevision: false,
    skipEnsureInstalled: true
  });
}