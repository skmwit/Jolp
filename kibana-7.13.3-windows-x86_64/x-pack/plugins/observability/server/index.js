"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  config: true,
  plugin: true,
  ObservabilityPluginSetup: true,
  createOrUpdateIndex: true,
  Mappings: true,
  ScopedAnnotationsClient: true,
  unwrapEsResponse: true,
  WrappedElasticsearchClientError: true,
  rangeQuery: true,
  kqlQuery: true
};
Object.defineProperty(exports, "ObservabilityPluginSetup", {
  enumerable: true,
  get: function () {
    return _plugin.ObservabilityPluginSetup;
  }
});
Object.defineProperty(exports, "createOrUpdateIndex", {
  enumerable: true,
  get: function () {
    return _create_or_update_index.createOrUpdateIndex;
  }
});
Object.defineProperty(exports, "Mappings", {
  enumerable: true,
  get: function () {
    return _create_or_update_index.Mappings;
  }
});
Object.defineProperty(exports, "ScopedAnnotationsClient", {
  enumerable: true,
  get: function () {
    return _bootstrap_annotations.ScopedAnnotationsClient;
  }
});
Object.defineProperty(exports, "unwrapEsResponse", {
  enumerable: true,
  get: function () {
    return _unwrap_es_response.unwrapEsResponse;
  }
});
Object.defineProperty(exports, "WrappedElasticsearchClientError", {
  enumerable: true,
  get: function () {
    return _unwrap_es_response.WrappedElasticsearchClientError;
  }
});
Object.defineProperty(exports, "rangeQuery", {
  enumerable: true,
  get: function () {
    return _queries.rangeQuery;
  }
});
Object.defineProperty(exports, "kqlQuery", {
  enumerable: true,
  get: function () {
    return _queries.kqlQuery;
  }
});
exports.plugin = exports.config = void 0;

var _configSchema = require("@kbn/config-schema");

var _plugin = require("./plugin");

var _create_or_update_index = require("./utils/create_or_update_index");

var _bootstrap_annotations = require("./lib/annotations/bootstrap_annotations");

var _unwrap_es_response = require("./utils/unwrap_es_response");

var _queries = require("./utils/queries");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const config = {
  exposeToBrowser: {
    unsafe: {
      alertingExperience: {
        enabled: true
      }
    }
  },
  schema: _configSchema.schema.object({
    enabled: _configSchema.schema.boolean({
      defaultValue: true
    }),
    annotations: _configSchema.schema.object({
      enabled: _configSchema.schema.boolean({
        defaultValue: true
      }),
      index: _configSchema.schema.string({
        defaultValue: 'observability-annotations'
      })
    }),
    unsafe: _configSchema.schema.object({
      alertingExperience: _configSchema.schema.object({
        enabled: _configSchema.schema.boolean({
          defaultValue: false
        })
      })
    })
  })
};
exports.config = config;

const plugin = initContext => new _plugin.ObservabilityPlugin(initContext);

exports.plugin = plugin;