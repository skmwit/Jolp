"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidatedConfig = getValidatedConfig;
exports.configSchema = exports.EnabledActionTypes = exports.AllowedHosts = void 0;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


let AllowedHosts;
exports.AllowedHosts = AllowedHosts;

(function (AllowedHosts) {
  AllowedHosts["Any"] = "*";
})(AllowedHosts || (exports.AllowedHosts = AllowedHosts = {}));

let EnabledActionTypes;
exports.EnabledActionTypes = EnabledActionTypes;

(function (EnabledActionTypes) {
  EnabledActionTypes["Any"] = "*";
})(EnabledActionTypes || (exports.EnabledActionTypes = EnabledActionTypes = {}));

const preconfiguredActionSchema = _configSchema.schema.object({
  name: _configSchema.schema.string({
    minLength: 1
  }),
  actionTypeId: _configSchema.schema.string({
    minLength: 1
  }),
  config: _configSchema.schema.recordOf(_configSchema.schema.string(), _configSchema.schema.any(), {
    defaultValue: {}
  }),
  secrets: _configSchema.schema.recordOf(_configSchema.schema.string(), _configSchema.schema.any(), {
    defaultValue: {}
  })
});

const configSchema = _configSchema.schema.object({
  enabled: _configSchema.schema.boolean({
    defaultValue: true
  }),
  allowedHosts: _configSchema.schema.arrayOf(_configSchema.schema.oneOf([_configSchema.schema.string({
    hostname: true
  }), _configSchema.schema.literal(AllowedHosts.Any)]), {
    defaultValue: [AllowedHosts.Any]
  }),
  enabledActionTypes: _configSchema.schema.arrayOf(_configSchema.schema.oneOf([_configSchema.schema.string(), _configSchema.schema.literal(EnabledActionTypes.Any)]), {
    defaultValue: [AllowedHosts.Any]
  }),
  preconfiguredAlertHistoryEsIndex: _configSchema.schema.boolean({
    defaultValue: false
  }),
  preconfigured: _configSchema.schema.recordOf(_configSchema.schema.string(), preconfiguredActionSchema, {
    defaultValue: {},
    validate: validatePreconfigured
  }),
  proxyUrl: _configSchema.schema.maybe(_configSchema.schema.string()),
  proxyHeaders: _configSchema.schema.maybe(_configSchema.schema.recordOf(_configSchema.schema.string(), _configSchema.schema.string())),
  proxyRejectUnauthorizedCertificates: _configSchema.schema.boolean({
    defaultValue: true
  }),
  proxyBypassHosts: _configSchema.schema.maybe(_configSchema.schema.arrayOf(_configSchema.schema.string({
    hostname: true
  }))),
  proxyOnlyHosts: _configSchema.schema.maybe(_configSchema.schema.arrayOf(_configSchema.schema.string({
    hostname: true
  }))),
  rejectUnauthorized: _configSchema.schema.boolean({
    defaultValue: true
  }),
  maxResponseContentLength: _configSchema.schema.byteSize({
    defaultValue: '1mb'
  }),
  responseTimeout: _configSchema.schema.duration({
    defaultValue: '60s'
  }),
  cleanupFailedExecutionsTask: _configSchema.schema.object({
    enabled: _configSchema.schema.boolean({
      defaultValue: true
    }),
    cleanupInterval: _configSchema.schema.duration({
      defaultValue: '5m'
    }),
    idleInterval: _configSchema.schema.duration({
      defaultValue: '1h'
    }),
    pageSize: _configSchema.schema.number({
      defaultValue: 100
    })
  })
});

exports.configSchema = configSchema; // It would be nicer to add the proxyBypassHosts / proxyOnlyHosts restriction on
// simultaneous usage in the config validator directly, but there's no good way to express
// this relationship in the cloud config constraints, so we're doing it "live".

function getValidatedConfig(logger, originalConfig) {
  const proxyBypassHosts = originalConfig.proxyBypassHosts;
  const proxyOnlyHosts = originalConfig.proxyOnlyHosts;

  if (proxyBypassHosts && proxyOnlyHosts) {
    logger.warn('The confgurations xpack.actions.proxyBypassHosts and xpack.actions.proxyOnlyHosts can not be used at the same time. The configuration xpack.actions.proxyOnlyHosts will be ignored.');
    const tmp = originalConfig;
    delete tmp.proxyOnlyHosts;
    return tmp;
  }

  return originalConfig;
}

const invalidActionIds = new Set(['', '__proto__', 'constructor']);

function validatePreconfigured(preconfigured) {
  // check for ids that should not be used
  for (const id of Object.keys(preconfigured)) {
    if (invalidActionIds.has(id)) {
      return `invalid preconfigured action id "${id}"`;
    }
  } // in case __proto__ was used as a preconfigured action id ...


  if (Object.getPrototypeOf(preconfigured) !== Object.getPrototypeOf({})) {
    return `invalid preconfigured action id "__proto__"`;
  }
}