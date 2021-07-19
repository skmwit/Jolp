"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WatcherServerPlugin = void 0;

var _i18n = require("@kbn/i18n");

var _constants = require("../common/constants");

var _settings = require("./routes/api/settings");

var _indices = require("./routes/api/indices");

var _license = require("./routes/api/license");

var _watches = require("./routes/api/watches");

var _watch = require("./routes/api/watch");

var _register_list_fields_route = require("./routes/api/register_list_fields_route");

var _register_load_history_route = require("./routes/api/register_load_history_route");

var _elasticsearch_js_plugin = require("./lib/elasticsearch_js_plugin");

var _shared_imports = require("./shared_imports");

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

async function getCustomEsClient(getStartServices) {
  const [core] = await getStartServices();
  const esConfig = {
    plugins: [_elasticsearch_js_plugin.elasticsearchJsPlugin]
  };
  return core.elasticsearch.legacy.createClient('watcher', esConfig);
}

class WatcherServerPlugin {
  constructor(ctx) {
    _defineProperty(this, "license", void 0);

    _defineProperty(this, "logger", void 0);

    _defineProperty(this, "watcherESClient", void 0);

    this.logger = ctx.logger.get();
    this.license = new _shared_imports.License();
  }

  setup({
    http,
    getStartServices
  }, {
    licensing,
    features
  }) {
    this.license.setup({
      pluginName: _constants.PLUGIN.getI18nName(_i18n.i18n),
      logger: this.logger
    });
    features.registerElasticsearchFeature({
      id: 'watcher',
      management: {
        insightsAndAlerting: ['watcher']
      },
      catalogue: ['watcher'],
      privileges: [{
        requiredClusterPrivileges: ['manage_watcher'],
        requiredIndexPrivileges: {
          [_constants.INDEX_NAMES.WATCHES]: ['read'],
          [_constants.INDEX_NAMES.WATCHER_HISTORY]: ['read']
        },
        ui: []
      }, {
        requiredClusterPrivileges: ['monitor_watcher'],
        requiredIndexPrivileges: {
          [_constants.INDEX_NAMES.WATCHES]: ['read'],
          [_constants.INDEX_NAMES.WATCHER_HISTORY]: ['read']
        },
        ui: []
      }]
    });
    http.registerRouteHandlerContext('watcher', async (ctx, request) => {
      var _this$watcherESClient;

      this.watcherESClient = (_this$watcherESClient = this.watcherESClient) !== null && _this$watcherESClient !== void 0 ? _this$watcherESClient : await getCustomEsClient(getStartServices);
      return {
        client: this.watcherESClient.asScoped(request)
      };
    });
    const router = http.createRouter();
    const routeDependencies = {
      router,
      license: this.license,
      lib: {
        isEsError: _shared_imports.isEsError
      }
    };
    (0, _register_list_fields_route.registerListFieldsRoute)(routeDependencies);
    (0, _register_load_history_route.registerLoadHistoryRoute)(routeDependencies);
    (0, _indices.registerIndicesRoutes)(routeDependencies);
    (0, _license.registerLicenseRoutes)(routeDependencies);
    (0, _settings.registerSettingsRoutes)(routeDependencies);
    (0, _watches.registerWatchesRoutes)(routeDependencies);
    (0, _watch.registerWatchRoutes)(routeDependencies);
  }

  start(core, {
    licensing
  }) {
    this.license.start({
      pluginId: _constants.PLUGIN.ID,
      minimumLicenseType: _constants.PLUGIN.MINIMUM_LICENSE_REQUIRED,
      licensing
    });
  }

  stop() {
    if (this.watcherESClient) {
      this.watcherESClient.close();
    }
  }

}

exports.WatcherServerPlugin = WatcherServerPlugin;