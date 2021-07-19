"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeprecationsFactory = void 0;

var _deprecations_registry = require("./deprecations_registry");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DeprecationsFactory {
  constructor({
    logger
  }) {
    _defineProperty(this, "registries", new Map());

    _defineProperty(this, "logger", void 0);

    _defineProperty(this, "getRegistry", domainId => {
      const existing = this.registries.get(domainId);

      if (existing) {
        return existing;
      }

      const registry = new _deprecations_registry.DeprecationsRegistry();
      this.registries.set(domainId, registry);
      return registry;
    });

    _defineProperty(this, "getDeprecations", async (domainId, dependencies) => {
      const infoBody = await this.getDeprecationsBody(domainId, dependencies);
      return this.createDeprecationInfo(domainId, infoBody).flat();
    });

    _defineProperty(this, "getAllDeprecations", async (dependencies) => {
      const domainIds = [...this.registries.keys()];
      const deprecationsInfo = await Promise.all(domainIds.map(async domainId => {
        const infoBody = await this.getDeprecationsBody(domainId, dependencies);
        return this.createDeprecationInfo(domainId, infoBody);
      }));
      return deprecationsInfo.flat();
    });

    _defineProperty(this, "createDeprecationInfo", (domainId, deprecationInfoBody) => {
      return deprecationInfoBody.flat().filter(Boolean).map(pluginDeprecation => ({ ...pluginDeprecation,
        domainId
      }));
    });

    _defineProperty(this, "getDeprecationsBody", async (domainId, dependencies) => {
      const deprecationsRegistry = this.registries.get(domainId);

      if (!deprecationsRegistry) {
        return [];
      }

      try {
        const settledResults = await deprecationsRegistry.getDeprecations(dependencies);
        return settledResults.flatMap(settledResult => {
          if (settledResult.status === 'rejected') {
            this.logger.warn(`Failed to get deprecations info for plugin "${domainId}".`, settledResult.reason);
            return [{
              message: `Failed to get deprecations info for plugin "${domainId}".`,
              level: 'fetch_error',
              correctiveActions: {
                manualSteps: ['Check Kibana server logs for error message.']
              }
            }];
          }

          return settledResult.value;
        });
      } catch (err) {
        this.logger.warn(`Failed to get deprecations info for plugin "${domainId}".`, err);
        return [];
      }
    });

    this.logger = logger;
  }

}

exports.DeprecationsFactory = DeprecationsFactory;