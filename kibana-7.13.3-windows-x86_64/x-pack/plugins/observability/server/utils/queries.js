"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rangeQuery = rangeQuery;
exports.kqlQuery = kqlQuery;

var _server = require("../../../../../src/plugins/data/server");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function rangeQuery(start, end, field = '@timestamp') {
  return [{
    range: {
      [field]: {
        gte: start,
        lte: end,
        format: 'epoch_millis'
      }
    }
  }];
}

function kqlQuery(kql) {
  if (!kql) {
    return [];
  }

  const ast = _server.esKuery.fromKueryExpression(kql);

  return [_server.esKuery.toElasticsearchQuery(ast)];
}