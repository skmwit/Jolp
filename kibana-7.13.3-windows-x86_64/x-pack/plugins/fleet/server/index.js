"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FleetSetupContract", {
  enumerable: true,
  get: function () {
    return _plugin.FleetSetupContract;
  }
});
Object.defineProperty(exports, "FleetSetupDeps", {
  enumerable: true,
  get: function () {
    return _plugin.FleetSetupDeps;
  }
});
Object.defineProperty(exports, "FleetStartContract", {
  enumerable: true,
  get: function () {
    return _plugin.FleetStartContract;
  }
});
Object.defineProperty(exports, "ExternalCallback", {
  enumerable: true,
  get: function () {
    return _plugin.ExternalCallback;
  }
});
Object.defineProperty(exports, "apm", {
  enumerable: true,
  get: function () {
    return _elasticApmNode.default;
  }
});
Object.defineProperty(exports, "AgentService", {
  enumerable: true,
  get: function () {
    return _services.AgentService;
  }
});
Object.defineProperty(exports, "ESIndexPatternService", {
  enumerable: true,
  get: function () {
    return _services.ESIndexPatternService;
  }
});
Object.defineProperty(exports, "getRegistryUrl", {
  enumerable: true,
  get: function () {
    return _services.getRegistryUrl;
  }
});
Object.defineProperty(exports, "PackageService", {
  enumerable: true,
  get: function () {
    return _services.PackageService;
  }
});
Object.defineProperty(exports, "AgentPolicyServiceInterface", {
  enumerable: true,
  get: function () {
    return _services.AgentPolicyServiceInterface;
  }
});
Object.defineProperty(exports, "ArtifactsClientInterface", {
  enumerable: true,
  get: function () {
    return _services.ArtifactsClientInterface;
  }
});
Object.defineProperty(exports, "Artifact", {
  enumerable: true,
  get: function () {
    return _services.Artifact;
  }
});
Object.defineProperty(exports, "AgentNotFoundError", {
  enumerable: true,
  get: function () {
    return _errors.AgentNotFoundError;
  }
});
Object.defineProperty(exports, "PackagePolicyServiceInterface", {
  enumerable: true,
  get: function () {
    return _package_policy.PackagePolicyServiceInterface;
  }
});
Object.defineProperty(exports, "relativeDownloadUrlFromArtifact", {
  enumerable: true,
  get: function () {
    return _mappings.relativeDownloadUrlFromArtifact;
  }
});
exports.plugin = exports.config = void 0;

var _configSchema = require("@kbn/config-schema");

var _types = require("./types");

var _plugin = require("./plugin");

var _elasticApmNode = _interopRequireDefault(require("elastic-apm-node"));

var _services = require("./services");

var _errors = require("./errors");

var _package_policy = require("./services/package_policy");

var _mappings = require("./services/artifacts/mappings");

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


const config = {
  exposeToBrowser: {
    epm: true,
    agents: true
  },
  deprecations: ({
    renameFromRoot,
    unused
  }) => [renameFromRoot('xpack.ingestManager', 'xpack.fleet'), renameFromRoot('xpack.fleet.fleet', 'xpack.fleet.agents'), unused('agents.kibana'), unused('agents.maxConcurrentConnections'), unused('agents.agentPolicyRolloutRateLimitIntervalMs'), unused('agents.agentPolicyRolloutRateLimitRequestPerInterval'), unused('agents.pollingRequestTimeout'), unused('agents.tlsCheckDisabled'), unused('agents.fleetServerEnabled')],
  schema: _configSchema.schema.object({
    enabled: _configSchema.schema.boolean({
      defaultValue: true
    }),
    registryUrl: _configSchema.schema.maybe(_configSchema.schema.uri({
      scheme: ['http', 'https']
    })),
    registryProxyUrl: _configSchema.schema.maybe(_configSchema.schema.uri({
      scheme: ['http', 'https']
    })),
    agents: _configSchema.schema.object({
      enabled: _configSchema.schema.boolean({
        defaultValue: true
      }),
      elasticsearch: _configSchema.schema.object({
        host: _configSchema.schema.maybe(_configSchema.schema.string()),
        ca_sha256: _configSchema.schema.maybe(_configSchema.schema.string())
      }),
      fleet_server: _configSchema.schema.maybe(_configSchema.schema.object({
        hosts: _configSchema.schema.maybe(_configSchema.schema.arrayOf(_configSchema.schema.uri({
          scheme: ['http', 'https']
        })))
      }))
    }),
    packages: _types.PreconfiguredPackagesSchema,
    agentPolicies: _types.PreconfiguredAgentPoliciesSchema
  })
};
exports.config = config;

const plugin = initializerContext => {
  return new _plugin.FleetPlugin(initializerContext);
};

exports.plugin = plugin;