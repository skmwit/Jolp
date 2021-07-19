"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metricsSourceConfigurationResponseRT = exports.metricsSourceConfigurationRT = exports.metricsSourceStatusRT = exports.partialMetricsSourceConfigurationPropertiesRT = exports.metricsSourceConfigurationPropertiesRT = void 0;

var rt = _interopRequireWildcard(require("io-ts"));

var _lodash = require("lodash");

var _source_configuration = require("../source_configuration/source_configuration");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Properties specific to the Metrics Source Configuration.
 */


const metricsSourceConfigurationPropertiesRT = rt.strict({
  name: _source_configuration.SourceConfigurationRT.props.name,
  description: _source_configuration.SourceConfigurationRT.props.description,
  metricAlias: _source_configuration.SourceConfigurationRT.props.metricAlias,
  inventoryDefaultView: _source_configuration.SourceConfigurationRT.props.inventoryDefaultView,
  metricsExplorerDefaultView: _source_configuration.SourceConfigurationRT.props.metricsExplorerDefaultView,
  fields: rt.strict((0, _lodash.omit)(_source_configuration.SourceConfigurationRT.props.fields.props, 'message')),
  anomalyThreshold: rt.number
});
exports.metricsSourceConfigurationPropertiesRT = metricsSourceConfigurationPropertiesRT;
const partialMetricsSourceConfigurationPropertiesRT = rt.partial({ ...metricsSourceConfigurationPropertiesRT.type.props,
  fields: rt.partial({ ...metricsSourceConfigurationPropertiesRT.type.props.fields.type.props
  })
});
exports.partialMetricsSourceConfigurationPropertiesRT = partialMetricsSourceConfigurationPropertiesRT;
const metricsSourceConfigurationOriginRT = rt.keyof({
  fallback: null,
  internal: null,
  stored: null
});
const metricsSourceStatusRT = rt.strict({
  metricIndicesExist: _source_configuration.SourceStatusRuntimeType.props.metricIndicesExist,
  indexFields: _source_configuration.SourceStatusRuntimeType.props.indexFields
});
exports.metricsSourceStatusRT = metricsSourceStatusRT;
const metricsSourceConfigurationRT = rt.exact(rt.intersection([rt.type({
  id: rt.string,
  origin: metricsSourceConfigurationOriginRT,
  configuration: metricsSourceConfigurationPropertiesRT
}), rt.partial({
  updatedAt: rt.number,
  version: rt.string,
  status: metricsSourceStatusRT
})]));
exports.metricsSourceConfigurationRT = metricsSourceConfigurationRT;
const metricsSourceConfigurationResponseRT = rt.type({
  source: metricsSourceConfigurationRT
});
exports.metricsSourceConfigurationResponseRT = metricsSourceConfigurationResponseRT;