"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTopAlerts = getTopAlerts;

var _queries = require("../../utils/queries");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getTopAlerts({
  ruleRegistryClient,
  start,
  end,
  kuery,
  size
}) {
  const response = await ruleRegistryClient.search({
    body: {
      query: {
        bool: {
          filter: [...(0, _queries.rangeQuery)(start, end), ...(0, _queries.kqlQuery)(kuery)]
        }
      },
      fields: ['*'],
      collapse: {
        field: 'kibana.rac.alert.uuid'
      },
      size,
      sort: {
        '@timestamp': 'desc'
      },
      _source: false
    }
  });
  return response.events.map(event => {
    return event;
  });
}