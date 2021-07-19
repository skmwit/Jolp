"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FleetPlugin = void 0;

var _operators = require("rxjs/operators");

var _server = require("../../../../src/core/server");

var _constants = require("./constants");

var _saved_objects = require("./saved_objects");

var _routes = require("./routes");

var _services = require("./services");

var _agents = require("./services/agents");

var _register = require("./collectors/register");

var _packages = require("./services/epm/packages");

var _security = require("./routes/security");

var _fleet_server = require("./services/fleet_server");

var _artifacts = require("./services/artifacts");

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

const allSavedObjectTypes = [_constants.OUTPUT_SAVED_OBJECT_TYPE, _constants.AGENT_POLICY_SAVED_OBJECT_TYPE, _constants.PACKAGE_POLICY_SAVED_OBJECT_TYPE, _constants.PACKAGES_SAVED_OBJECT_TYPE, _constants.AGENT_SAVED_OBJECT_TYPE, _constants.ENROLLMENT_API_KEYS_SAVED_OBJECT_TYPE, _constants.PRECONFIGURATION_DELETION_RECORD_SAVED_OBJECT_TYPE];
/**
 * Callbacks supported by the Fleet plugin
 */

class FleetPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;

    _defineProperty(this, "licensing$", void 0);

    _defineProperty(this, "config$", void 0);

    _defineProperty(this, "cloud", void 0);

    _defineProperty(this, "logger", void 0);

    _defineProperty(this, "isProductionMode", void 0);

    _defineProperty(this, "kibanaVersion", void 0);

    _defineProperty(this, "kibanaBranch", void 0);

    _defineProperty(this, "httpSetup", void 0);

    _defineProperty(this, "encryptedSavedObjectsSetup", void 0);

    this.config$ = this.initializerContext.config.create();
    this.isProductionMode = this.initializerContext.env.mode.prod;
    this.kibanaVersion = this.initializerContext.env.packageInfo.version;
    this.kibanaBranch = this.initializerContext.env.packageInfo.branch;
    this.logger = this.initializerContext.logger.get();
  }

  async setup(core, deps) {
    this.httpSetup = core.http;
    this.licensing$ = deps.licensing.license$;
    this.encryptedSavedObjectsSetup = deps.encryptedSavedObjects;
    this.cloud = deps.cloud;
    const config = await this.config$.pipe((0, _operators.first)()).toPromise();
    (0, _saved_objects.registerSavedObjects)(core.savedObjects, deps.encryptedSavedObjects);
    (0, _saved_objects.registerEncryptedSavedObjects)(deps.encryptedSavedObjects); // Register feature
    // TODO: Flesh out privileges

    if (deps.features) {
      deps.features.registerKibanaFeature({
        id: _constants.PLUGIN_ID,
        name: 'Fleet',
        category: _server.DEFAULT_APP_CATEGORIES.management,
        app: [_constants.PLUGIN_ID, 'kibana'],
        catalogue: ['fleet'],
        privileges: {
          all: {
            api: [`${_constants.PLUGIN_ID}-read`, `${_constants.PLUGIN_ID}-all`],
            app: [_constants.PLUGIN_ID, 'kibana'],
            catalogue: ['fleet'],
            savedObject: {
              all: allSavedObjectTypes,
              read: []
            },
            ui: ['show', 'read', 'write']
          },
          read: {
            api: [`${_constants.PLUGIN_ID}-read`],
            app: [_constants.PLUGIN_ID, 'kibana'],
            catalogue: ['fleet'],
            // TODO: check if this is actually available to read user
            savedObject: {
              all: [],
              read: allSavedObjectTypes
            },
            ui: ['show', 'read']
          }
        }
      });
    }

    const router = core.http.createRouter(); // Register usage collection

    (0, _register.registerFleetUsageCollector)(core, config, deps.usageCollection); // Always register app routes for permissions checking

    (0, _routes.registerAppRoutes)(router); // For all the routes we enforce the user to have role superuser

    const routerSuperuserOnly = (0, _security.makeRouterEnforcingSuperuser)(router); // Register rest of routes only if security is enabled

    if (deps.security) {
      (0, _routes.registerSetupRoutes)(routerSuperuserOnly, config);
      (0, _routes.registerAgentPolicyRoutes)(routerSuperuserOnly);
      (0, _routes.registerPackagePolicyRoutes)(routerSuperuserOnly);
      (0, _routes.registerOutputRoutes)(routerSuperuserOnly);
      (0, _routes.registerSettingsRoutes)(routerSuperuserOnly);
      (0, _routes.registerDataStreamRoutes)(routerSuperuserOnly);
      (0, _routes.registerEPMRoutes)(routerSuperuserOnly);
      (0, _routes.registerPreconfigurationRoutes)(routerSuperuserOnly); // Conditional config routes

      if (config.agents.enabled) {
        (0, _routes.registerAgentAPIRoutes)(routerSuperuserOnly, config);
        (0, _routes.registerEnrollmentApiKeyRoutes)(routerSuperuserOnly);
      }
    }
  }

  async start(core, plugins) {
    await _services.appContextService.start({
      elasticsearch: core.elasticsearch,
      data: plugins.data,
      encryptedSavedObjectsStart: plugins.encryptedSavedObjects,
      encryptedSavedObjectsSetup: this.encryptedSavedObjectsSetup,
      security: plugins.security,
      config$: this.config$,
      savedObjects: core.savedObjects,
      isProductionMode: this.isProductionMode,
      kibanaVersion: this.kibanaVersion,
      kibanaBranch: this.kibanaBranch,
      httpSetup: this.httpSetup,
      cloud: this.cloud,
      logger: this.logger
    });

    _services.licenseService.start(this.licensing$);

    const fleetServerSetup = (0, _fleet_server.startFleetServerSetup)();
    return {
      fleetSetupCompleted: () => new Promise(resolve => {
        Promise.all([fleetServerSetup]).finally(() => resolve());
      }),
      esIndexPatternService: new _services.ESIndexPatternSavedObjectService(),
      packageService: {
        getInstalledEsAssetReferences: async (savedObjectsClient, pkgName) => {
          const installation = await (0, _packages.getInstallation)({
            savedObjectsClient,
            pkgName
          });
          return (installation === null || installation === void 0 ? void 0 : installation.installed_es) || [];
        }
      },
      agentService: {
        getAgent: _agents.getAgentById,
        listAgents: _agents.getAgentsByKuery,
        getAgentStatusById: _agents.getAgentStatusById,
        authenticateAgentWithAccessToken: _agents.authenticateAgentWithAccessToken
      },
      agentPolicyService: {
        get: _services.agentPolicyService.get,
        list: _services.agentPolicyService.list,
        getDefaultAgentPolicyId: _services.agentPolicyService.getDefaultAgentPolicyId,
        getFullAgentPolicy: _services.agentPolicyService.getFullAgentPolicy
      },
      packagePolicyService: _services.packagePolicyService,
      registerExternalCallback: (type, callback) => {
        return _services.appContextService.addExternalCallback(type, callback);
      },

      createArtifactsClient(packageName) {
        return new _artifacts.FleetArtifactsClient(core.elasticsearch.client.asInternalUser, packageName);
      }

    };
  }

  async stop() {
    _services.appContextService.stop();

    _services.licenseService.stop();
  }

}

exports.FleetPlugin = FleetPlugin;