"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OsqueryPlugin = void 0;

var _create_config = require("./create_config");

var _routes = require("./routes");

var _osquery = require("./search_strategy/osquery");

var _saved_objects = require("./saved_objects");

var _osquery_app_context_services = require("./lib/osquery_app_context_services");

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

class OsqueryPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;

    _defineProperty(this, "logger", void 0);

    _defineProperty(this, "context", void 0);

    _defineProperty(this, "osqueryAppContextService", new _osquery_app_context_services.OsqueryAppContextService());

    this.context = initializerContext;
    this.logger = initializerContext.logger.get();
  }

  setup(core, plugins) {
    this.logger.debug('osquery: Setup');
    const config = (0, _create_config.createConfig)(this.initializerContext);

    if (!config.enabled) {
      return {};
    }

    const router = core.http.createRouter();
    const osqueryContext = {
      logFactory: this.context.logger,
      service: this.osqueryAppContextService,
      config: () => config
    };
    (0, _saved_objects.initSavedObjects)(core.savedObjects, osqueryContext);
    (0, _routes.defineRoutes)(router, osqueryContext);
    core.getStartServices().then(([, depsStart]) => {
      const osquerySearchStrategy = (0, _osquery.osquerySearchStrategyProvider)(depsStart.data);
      plugins.data.search.registerSearchStrategy('osquerySearchStrategy', osquerySearchStrategy);
    });
    return {};
  }

  start(core, plugins) {
    var _plugins$fleet;

    this.logger.debug('osquery: Started');
    const registerIngestCallback = (_plugins$fleet = plugins.fleet) === null || _plugins$fleet === void 0 ? void 0 : _plugins$fleet.registerExternalCallback;
    this.osqueryAppContextService.start({ ...plugins.fleet,
      // @ts-expect-error update types
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      config: this.config,
      logger: this.logger,
      registerIngestCallback
    });
    return {};
  }

  stop() {
    this.logger.debug('osquery: Stopped');
    this.osqueryAppContextService.stop();
  }

}

exports.OsqueryPlugin = OsqueryPlugin;