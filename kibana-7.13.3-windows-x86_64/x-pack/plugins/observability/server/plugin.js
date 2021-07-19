"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObservabilityPlugin = void 0;

var _bootstrap_annotations = require("./lib/annotations/bootstrap_annotations");

var _ui_settings = require("./ui_settings");

var _register_routes = require("./routes/register_routes");

var _get_global_observability_server_route_repository = require("./routes/get_global_observability_server_route_repository");

var _observability_rule_registry_settings = require("../common/rules/observability_rule_registry_settings");

var _observability_rule_field_map = require("../common/rules/observability_rule_field_map");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class ObservabilityPlugin {
  constructor(initContext) {
    this.initContext = initContext;
    this.initContext = initContext;
  }

  setup(core, plugins) {
    const config = this.initContext.config.get();
    let annotationsApiPromise;
    core.uiSettings.register(_ui_settings.uiSettings);

    if (config.annotations.enabled) {
      annotationsApiPromise = (0, _bootstrap_annotations.bootstrapAnnotations)({
        core,
        index: config.annotations.index,
        context: this.initContext
      }).catch(err => {
        const logger = this.initContext.logger.get('annotations');
        logger.warn(err);
        throw err;
      });
    }

    const observabilityRuleRegistry = plugins.ruleRegistry.create({ ..._observability_rule_registry_settings.observabilityRuleRegistrySettings,
      fieldMap: _observability_rule_field_map.observabilityRuleFieldMap
    });
    (0, _register_routes.registerRoutes)({
      core: {
        setup: core,
        start: () => core.getStartServices().then(([coreStart]) => coreStart)
      },
      ruleRegistry: observabilityRuleRegistry,
      logger: this.initContext.logger.get(),
      repository: (0, _get_global_observability_server_route_repository.getGlobalObservabilityServerRouteRepository)()
    });
    return {
      getScopedAnnotationsClient: async (...args) => {
        const api = await annotationsApiPromise;
        return api === null || api === void 0 ? void 0 : api.getScopedAnnotationsClient(...args);
      },
      ruleRegistry: observabilityRuleRegistry
    };
  }

  start() {}

  stop() {}

}

exports.ObservabilityPlugin = ObservabilityPlugin;