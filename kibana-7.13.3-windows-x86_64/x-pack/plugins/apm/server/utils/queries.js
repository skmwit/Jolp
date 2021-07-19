"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.environmentQuery = environmentQuery;
Object.defineProperty(exports, "kqlQuery", {
  enumerable: true,
  get: function () {
    return _server.kqlQuery;
  }
});
Object.defineProperty(exports, "rangeQuery", {
  enumerable: true,
  get: function () {
    return _server.rangeQuery;
  }
});

var _elasticsearch_fieldnames = require("../../common/elasticsearch_fieldnames");

var _environment_filter_values = require("../../common/environment_filter_values");

var _server = require("../../../observability/server");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function environmentQuery(environment) {
  if (!environment || environment === _environment_filter_values.ENVIRONMENT_ALL.value) {
    return [];
  }

  if (environment === _environment_filter_values.ENVIRONMENT_NOT_DEFINED.value) {
    return [{
      bool: {
        must_not: {
          exists: {
            field: _elasticsearch_fieldnames.SERVICE_ENVIRONMENT
          }
        }
      }
    }];
  }

  return [{
    term: {
      [_elasticsearch_fieldnames.SERVICE_ENVIRONMENT]: environment
    }
  }];
}