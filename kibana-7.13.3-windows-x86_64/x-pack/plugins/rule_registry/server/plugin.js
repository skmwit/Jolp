"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuleRegistryPlugin = void 0;

var _rule_registry = require("./rule_registry");

var _ilm_policy = require("./rule_registry/defaults/ilm_policy");

var _common = require("../common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class RuleRegistryPlugin {
  constructor(initContext) {
    this.initContext = initContext;
    this.initContext = initContext;
  }

  setup(core, plugins) {
    const globalConfig = this.initContext.config.legacy.get();
    const config = this.initContext.config.get();
    const logger = this.initContext.logger.get();
    const rootRegistry = new _rule_registry.RuleRegistry({
      coreSetup: core,
      ilmPolicy: _ilm_policy.defaultIlmPolicy,
      fieldMap: _common.baseRuleFieldMap,
      kibanaIndex: globalConfig.kibana.index,
      name: 'alerts',
      kibanaVersion: this.initContext.env.packageInfo.version,
      logger: logger.get('root'),
      alertingPluginSetupContract: plugins.alerting,
      writeEnabled: config.unsafe.write.enabled
    });
    return rootRegistry;
  }

  start() {}

  stop() {}

}

exports.RuleRegistryPlugin = RuleRegistryPlugin;