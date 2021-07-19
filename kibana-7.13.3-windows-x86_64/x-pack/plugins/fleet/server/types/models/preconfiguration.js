"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreconfiguredAgentPoliciesSchema = exports.PreconfiguredPackagesSchema = void 0;

var _i18n = require("@kbn/i18n");

var _configSchema = require("@kbn/config-schema");

var _valid = _interopRequireDefault(require("semver/functions/valid"));

var _constants = require("../../constants");

var _agent_policy = require("./agent_policy");

var _package_policy = require("./package_policy");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const varsSchema = _configSchema.schema.maybe(_configSchema.schema.arrayOf(_configSchema.schema.object({
  name: _configSchema.schema.string(),
  type: _configSchema.schema.maybe(_configSchema.schema.string()),
  value: _configSchema.schema.maybe(_configSchema.schema.oneOf([_configSchema.schema.string(), _configSchema.schema.number()])),
  frozen: _configSchema.schema.maybe(_configSchema.schema.boolean())
})));

const PreconfiguredPackagesSchema = _configSchema.schema.arrayOf(_configSchema.schema.object({
  name: _configSchema.schema.string(),
  version: _configSchema.schema.string({
    validate: value => {
      if (value !== _constants.PRECONFIGURATION_LATEST_KEYWORD && !(0, _valid.default)(value)) {
        return _i18n.i18n.translate('xpack.fleet.config.invalidPackageVersionError', {
          defaultMessage: 'must be a valid semver, or the keyword `latest`'
        });
      }
    }
  })
}), {
  defaultValue: _constants.DEFAULT_PACKAGES
});

exports.PreconfiguredPackagesSchema = PreconfiguredPackagesSchema;

const PreconfiguredAgentPoliciesSchema = _configSchema.schema.arrayOf(_configSchema.schema.object({ ..._agent_policy.AgentPolicyBaseSchema,
  namespace: _configSchema.schema.maybe(_package_policy.NamespaceSchema),
  id: _configSchema.schema.maybe(_configSchema.schema.oneOf([_configSchema.schema.string(), _configSchema.schema.number()])),
  is_default: _configSchema.schema.maybe(_configSchema.schema.boolean()),
  is_default_fleet_server: _configSchema.schema.maybe(_configSchema.schema.boolean()),
  package_policies: _configSchema.schema.arrayOf(_configSchema.schema.object({
    name: _configSchema.schema.string(),
    package: _configSchema.schema.object({
      name: _configSchema.schema.string()
    }),
    description: _configSchema.schema.maybe(_configSchema.schema.string()),
    namespace: _configSchema.schema.maybe(_package_policy.NamespaceSchema),
    inputs: _configSchema.schema.maybe(_configSchema.schema.arrayOf(_configSchema.schema.object({
      type: _configSchema.schema.string(),
      enabled: _configSchema.schema.maybe(_configSchema.schema.boolean()),
      keep_enabled: _configSchema.schema.maybe(_configSchema.schema.boolean()),
      vars: varsSchema,
      streams: _configSchema.schema.maybe(_configSchema.schema.arrayOf(_configSchema.schema.object({
        data_stream: _configSchema.schema.object({
          type: _configSchema.schema.maybe(_configSchema.schema.string()),
          dataset: _configSchema.schema.string()
        }),
        enabled: _configSchema.schema.maybe(_configSchema.schema.boolean()),
        keep_enabled: _configSchema.schema.maybe(_configSchema.schema.boolean()),
        vars: varsSchema
      })))
    })))
  }))
}), {
  defaultValue: [_constants.DEFAULT_AGENT_POLICY, _constants.DEFAULT_FLEET_SERVER_AGENT_POLICY]
});

exports.PreconfiguredAgentPoliciesSchema = PreconfiguredAgentPoliciesSchema;