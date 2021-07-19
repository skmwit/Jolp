"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APMPlugin = void 0;

var _i18n = require("@kbn/i18n");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _lodash = require("lodash");

var _index = require("./index");

var _common = require("../../../../src/plugins/data/common");

var _feature = require("./feature");

var _register_apm_alerts = require("./lib/alerts/register_apm_alerts");

var _apm_telemetry = require("./lib/apm_telemetry");

var _create_apm_event_client = require("./lib/helpers/create_es_client/create_apm_event_client");

var _get_internal_saved_objects_client = require("./lib/helpers/get_internal_saved_objects_client");

var _create_agent_config_index = require("./lib/settings/agent_configuration/create_agent_config_index");

var _get_apm_indices = require("./lib/settings/apm_indices/get_apm_indices");

var _create_custom_link_index = require("./lib/settings/custom_link/create_custom_link_index");

var _saved_objects = require("./saved_objects");

var _elastic_cloud = require("./tutorial/elastic_cloud");

var _ui_settings = require("./ui_settings");

var _register_routes = require("./routes/register_routes");

var _get_global_apm_server_route_repository = require("./routes/get_global_apm_server_route_repository");

var _apm_rule_registry_settings = require("../common/rules/apm_rule_registry_settings");

var _apm_rule_field_map = require("../common/rules/apm_rule_field_map");

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

class APMPlugin {
  constructor(initContext) {
    this.initContext = initContext;

    _defineProperty(this, "currentConfig", void 0);

    _defineProperty(this, "logger", void 0);

    this.initContext = initContext;
  }

  setup(core, plugins) {
    var _plugins$home, _plugins$home2;

    this.logger = this.initContext.logger.get();
    const config$ = this.initContext.config.create();
    const mergedConfig$ = (0, _rxjs.combineLatest)(plugins.apmOss.config$, config$).pipe((0, _operators.map)(([apmOssConfig, apmConfig]) => (0, _index.mergeConfigs)(apmOssConfig, apmConfig)));
    core.savedObjects.registerType(_saved_objects.apmIndices);
    core.savedObjects.registerType(_saved_objects.apmTelemetry);
    core.uiSettings.register(_ui_settings.uiSettings);
    const currentConfig = (0, _index.mergeConfigs)(plugins.apmOss.config, this.initContext.config.get());
    this.currentConfig = currentConfig;

    if (plugins.taskManager && plugins.usageCollection && this.currentConfig['xpack.apm.telemetryCollectionEnabled']) {
      (0, _apm_telemetry.createApmTelemetry)({
        core,
        config$: mergedConfig$,
        usageCollector: plugins.usageCollection,
        taskManager: plugins.taskManager,
        logger: this.logger,
        kibanaVersion: this.initContext.env.packageInfo.version
      });
    }

    const ossTutorialProvider = plugins.apmOss.getRegisteredTutorialProvider();
    (_plugins$home = plugins.home) === null || _plugins$home === void 0 ? void 0 : _plugins$home.tutorials.unregisterTutorial(ossTutorialProvider);
    (_plugins$home2 = plugins.home) === null || _plugins$home2 === void 0 ? void 0 : _plugins$home2.tutorials.registerTutorial(() => {
      const ossPart = ossTutorialProvider({});

      if (this.currentConfig['xpack.apm.ui.enabled'] && ossPart.artifacts) {
        ossPart.artifacts.application = {
          path: '/app/apm',
          label: _i18n.i18n.translate('xpack.apm.tutorial.specProvider.artifacts.application.label', {
            defaultMessage: 'Launch APM'
          })
        };
      }

      return { ...ossPart,
        elasticCloud: (0, _elastic_cloud.createElasticCloudInstructions)(plugins.cloud)
      };
    });
    plugins.features.registerKibanaFeature(_feature.APM_FEATURE);
    (0, _feature.registerFeaturesUsage)({
      licensingPlugin: plugins.licensing
    });
    const apmRuleRegistry = plugins.observability.ruleRegistry.create({ ..._apm_rule_registry_settings.apmRuleRegistrySettings,
      fieldMap: _apm_rule_field_map.apmRuleFieldMap
    });
    (0, _register_routes.registerRoutes)({
      core: {
        setup: core,
        start: () => core.getStartServices().then(([coreStart]) => coreStart)
      },
      logger: this.logger,
      config: currentConfig,
      repository: (0, _get_global_apm_server_route_repository.getGlobalApmServerRouteRepository)(),
      apmRuleRegistry,
      plugins: (0, _lodash.mapValues)(plugins, (value, key) => {
        return {
          setup: value,
          start: () => core.getStartServices().then(services => {
            const [, pluginsStartContracts] = services;
            return pluginsStartContracts[key];
          })
        };
      })
    });

    const boundGetApmIndices = async () => (0, _get_apm_indices.getApmIndices)({
      savedObjectsClient: await (0, _get_internal_saved_objects_client.getInternalSavedObjectsClient)(core),
      config: await mergedConfig$.pipe((0, _operators.take)(1)).toPromise()
    });

    (0, _register_apm_alerts.registerApmAlerts)({
      registry: apmRuleRegistry,
      ml: plugins.ml,
      config$: mergedConfig$,
      logger: this.logger.get('rule')
    });
    return {
      config$: mergedConfig$,
      getApmIndices: boundGetApmIndices,
      createApmEventClient: async ({
        request,
        context,
        debug
      }) => {
        const [indices, includeFrozen] = await Promise.all([boundGetApmIndices(), context.core.uiSettings.client.get(_common.UI_SETTINGS.SEARCH_INCLUDE_FROZEN)]);
        const esClient = context.core.elasticsearch.client.asCurrentUser;
        return (0, _create_apm_event_client.createApmEventClient)({
          debug: debug !== null && debug !== void 0 ? debug : false,
          esClient,
          request,
          indices,
          options: {
            includeFrozen
          }
        });
      },
      ruleRegistry: apmRuleRegistry
    };
  }

  start(core) {
    if (this.currentConfig == null || this.logger == null) {
      throw new Error('APMPlugin needs to be setup before calling start()');
    } // create agent configuration index without blocking start lifecycle


    (0, _create_agent_config_index.createApmAgentConfigurationIndex)({
      client: core.elasticsearch.client.asInternalUser,
      config: this.currentConfig,
      logger: this.logger
    }); // create custom action index without blocking start lifecycle

    (0, _create_custom_link_index.createApmCustomLinkIndex)({
      client: core.elasticsearch.client.asInternalUser,
      config: this.currentConfig,
      logger: this.logger
    });
  }

  stop() {}

}

exports.APMPlugin = APMPlugin;