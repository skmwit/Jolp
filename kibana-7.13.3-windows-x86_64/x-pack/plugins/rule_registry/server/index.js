"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "RuleRegistryPluginSetupContract", {
  enumerable: true,
  get: function () {
    return _plugin.RuleRegistryPluginSetupContract;
  }
});
Object.defineProperty(exports, "createLifecycleRuleTypeFactory", {
  enumerable: true,
  get: function () {
    return _create_lifecycle_rule_type_factory.createLifecycleRuleTypeFactory;
  }
});
Object.defineProperty(exports, "FieldMapOf", {
  enumerable: true,
  get: function () {
    return _types.FieldMapOf;
  }
});
Object.defineProperty(exports, "ScopedRuleRegistryClient", {
  enumerable: true,
  get: function () {
    return _types2.ScopedRuleRegistryClient;
  }
});
exports.plugin = exports.config = void 0;

var _configSchema = require("@kbn/config-schema");

var _plugin = require("./plugin");

var _create_lifecycle_rule_type_factory = require("./rule_registry/rule_type_helpers/create_lifecycle_rule_type_factory");

var _types = require("./types");

var _types2 = require("./rule_registry/create_scoped_rule_registry_client/types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const config = {
  schema: _configSchema.schema.object({
    enabled: _configSchema.schema.boolean({
      defaultValue: true
    }),
    unsafe: _configSchema.schema.object({
      write: _configSchema.schema.object({
        enabled: _configSchema.schema.boolean({
          defaultValue: false
        })
      })
    })
  })
};
exports.config = config;

const plugin = initContext => new _plugin.RuleRegistryPlugin(initContext);

exports.plugin = plugin;