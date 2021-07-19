"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeprecationsService = void 0;

var _deprecations_factory = require("./deprecations_factory");

var _routes = require("./routes");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @internal */
class DeprecationsService {
  constructor(coreContext) {
    this.coreContext = coreContext;

    _defineProperty(this, "logger", void 0);

    this.logger = coreContext.logger.get('deprecations-service');
  }

  setup({
    http
  }) {
    this.logger.debug('Setting up Deprecations service');
    const deprecationsFactory = new _deprecations_factory.DeprecationsFactory({
      logger: this.logger
    });
    (0, _routes.registerRoutes)({
      http,
      deprecationsFactory
    });
    this.registerConfigDeprecationsInfo(deprecationsFactory);
    return {
      getRegistry: domainId => {
        const registry = deprecationsFactory.getRegistry(domainId);
        return {
          registerDeprecations: registry.registerDeprecations
        };
      }
    };
  }

  start() {}

  stop() {}

  registerConfigDeprecationsInfo(deprecationsFactory) {
    const handledDeprecatedConfigs = this.coreContext.configService.getHandledDeprecatedConfigs();

    for (const [domainId, deprecationsContexts] of handledDeprecatedConfigs) {
      const deprecationsRegistry = deprecationsFactory.getRegistry(domainId);
      deprecationsRegistry.registerDeprecations({
        getDeprecations: () => {
          return deprecationsContexts.map(({
            message,
            correctiveActions,
            documentationUrl
          }) => {
            return {
              level: 'critical',
              message,
              correctiveActions: correctiveActions !== null && correctiveActions !== void 0 ? correctiveActions : {},
              documentationUrl
            };
          });
        }
      });
    }
  }

}

exports.DeprecationsService = DeprecationsService;