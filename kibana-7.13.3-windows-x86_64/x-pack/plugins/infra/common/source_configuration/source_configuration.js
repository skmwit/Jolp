"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourceConfigurationSavedObjectRuntimeType = exports.SourceResponseRuntimeType = exports.SourceRuntimeType = exports.SourceStatusRuntimeType = exports.SourceConfigurationRuntimeType = exports.StaticSourceConfigurationRuntimeType = exports.SavedSourceConfigurationRuntimeType = exports.SourceConfigurationRT = exports.SourceConfigurationColumnRuntimeType = exports.SourceConfigurationFieldColumnRuntimeType = exports.SourceConfigurationMessageColumnRuntimeType = exports.SourceConfigurationTimestampColumnRuntimeType = exports.sourceConfigurationConfigFilePropertiesRT = exports.TimestampFromString = void 0;

var _lodash = require("lodash");

var rt = _interopRequireWildcard(require("io-ts"));

var _moment = _interopRequireDefault(require("moment"));

var _pipeable = require("fp-ts/lib/pipeable");

var _Either = require("fp-ts/lib/Either");

var _log_sources = require("../log_sources");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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
 * These are the core source configuration types that represent a Source Configuration in
 * it's entirety. There are then subsets of this configuration that form the Logs Source Configuration
 * and Metrics Source Configuration. The Logs Source Configuration is further expanded to it's resolved form.
 * -> Source Configuration
 *  -> Logs source configuration
 *    -> Resolved Logs Source Configuration
 *  -> Metrics Source Configuration
 */

/* eslint-disable @typescript-eslint/no-empty-interface */


const TimestampFromString = new rt.Type('TimestampFromString', input => typeof input === 'number', (input, context) => (0, _pipeable.pipe)(rt.string.validate(input, context), (0, _Either.chain)(stringInput => {
  const momentValue = (0, _moment.default)(stringInput);
  return momentValue.isValid() ? rt.success(momentValue.valueOf()) : rt.failure(stringInput, context);
})), output => new Date(output).toISOString());
/**
 * Source configuration config file properties.
 * These are properties that can appear in the kibana.yml file.
 * This is a legacy method of providing properties, and will be deprecated in the future (v 8.0.0).
 */

exports.TimestampFromString = TimestampFromString;
const sourceConfigurationConfigFilePropertiesRT = rt.type({
  sources: rt.type({
    default: rt.partial({
      logAlias: rt.string,
      // Cannot be deprecated until 8.0.0. Will be converted to an indexName reference.
      metricAlias: rt.string,
      fields: rt.partial({
        timestamp: rt.string,
        message: rt.array(rt.string),
        tiebreaker: rt.string,
        host: rt.string,
        container: rt.string,
        pod: rt.string
      })
    })
  })
});
exports.sourceConfigurationConfigFilePropertiesRT = sourceConfigurationConfigFilePropertiesRT;
/**
 * Log columns
 */

const SourceConfigurationTimestampColumnRuntimeType = rt.type({
  timestampColumn: rt.type({
    id: rt.string
  })
});
exports.SourceConfigurationTimestampColumnRuntimeType = SourceConfigurationTimestampColumnRuntimeType;
const SourceConfigurationMessageColumnRuntimeType = rt.type({
  messageColumn: rt.type({
    id: rt.string
  })
});
exports.SourceConfigurationMessageColumnRuntimeType = SourceConfigurationMessageColumnRuntimeType;
const SourceConfigurationFieldColumnRuntimeType = rt.type({
  fieldColumn: rt.type({
    id: rt.string,
    field: rt.string
  })
});
exports.SourceConfigurationFieldColumnRuntimeType = SourceConfigurationFieldColumnRuntimeType;
const SourceConfigurationColumnRuntimeType = rt.union([SourceConfigurationTimestampColumnRuntimeType, SourceConfigurationMessageColumnRuntimeType, SourceConfigurationFieldColumnRuntimeType]);
exports.SourceConfigurationColumnRuntimeType = SourceConfigurationColumnRuntimeType;
/**
 * Fields
 */

const SourceConfigurationFieldsRT = rt.type({
  container: rt.string,
  host: rt.string,
  pod: rt.string,
  tiebreaker: rt.string,
  timestamp: rt.string,
  message: rt.array(rt.string)
});
/**
 * Properties that represent a full source configuration, which is the result of merging static values with
 * saved values.
 */

const SourceConfigurationRT = rt.type({
  name: rt.string,
  description: rt.string,
  metricAlias: rt.string,
  logIndices: _log_sources.logIndexReferenceRT,
  inventoryDefaultView: rt.string,
  metricsExplorerDefaultView: rt.string,
  fields: SourceConfigurationFieldsRT,
  logColumns: rt.array(SourceConfigurationColumnRuntimeType),
  anomalyThreshold: rt.number
});
/**
 * Stored source configuration as read from and written to saved objects
 */

exports.SourceConfigurationRT = SourceConfigurationRT;
const SavedSourceConfigurationFieldsRuntimeType = rt.partial((0, _lodash.omit)(SourceConfigurationFieldsRT.props, ['message']));
const SavedSourceConfigurationRuntimeType = rt.intersection([rt.partial((0, _lodash.omit)(SourceConfigurationRT.props, ['fields'])), rt.partial({
  fields: SavedSourceConfigurationFieldsRuntimeType
})]);
exports.SavedSourceConfigurationRuntimeType = SavedSourceConfigurationRuntimeType;
/**
 * Static source configuration, the result of merging values from the config file and
 * hardcoded defaults.
 */

const StaticSourceConfigurationFieldsRuntimeType = rt.partial(SourceConfigurationFieldsRT.props);
const StaticSourceConfigurationRuntimeType = rt.partial({ ...SourceConfigurationRT.props,
  fields: StaticSourceConfigurationFieldsRuntimeType
});
exports.StaticSourceConfigurationRuntimeType = StaticSourceConfigurationRuntimeType;
const SourceConfigurationRuntimeType = rt.type({ ...SourceConfigurationRT.props,
  fields: SourceConfigurationFieldsRT,
  logColumns: rt.array(SourceConfigurationColumnRuntimeType)
});
exports.SourceConfigurationRuntimeType = SourceConfigurationRuntimeType;
/**
 * Source status
 */

const SourceStatusFieldRuntimeType = rt.type({
  name: rt.string,
  type: rt.string,
  searchable: rt.boolean,
  aggregatable: rt.boolean,
  displayable: rt.boolean
});
const SourceStatusRuntimeType = rt.type({
  logIndicesExist: rt.boolean,
  metricIndicesExist: rt.boolean,
  indexFields: rt.array(SourceStatusFieldRuntimeType)
});
exports.SourceStatusRuntimeType = SourceStatusRuntimeType;
/**
 * Source configuration along with source status and metadata
 */

const SourceRuntimeType = rt.intersection([rt.type({
  id: rt.string,
  origin: rt.keyof({
    fallback: null,
    internal: null,
    stored: null
  }),
  configuration: SourceConfigurationRuntimeType
}), rt.partial({
  version: rt.string,
  updatedAt: rt.number,
  status: SourceStatusRuntimeType
})]);
exports.SourceRuntimeType = SourceRuntimeType;
const SourceResponseRuntimeType = rt.type({
  source: SourceRuntimeType
});
exports.SourceResponseRuntimeType = SourceResponseRuntimeType;
/**
 * Saved object type with metadata
 */

const SourceConfigurationSavedObjectRuntimeType = rt.intersection([rt.type({
  id: rt.string,
  attributes: SavedSourceConfigurationRuntimeType
}), rt.partial({
  version: rt.string,
  updated_at: TimestampFromString
})]);
exports.SourceConfigurationSavedObjectRuntimeType = SourceConfigurationSavedObjectRuntimeType;