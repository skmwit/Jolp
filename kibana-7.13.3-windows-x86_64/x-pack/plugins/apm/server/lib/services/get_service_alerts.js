"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServiceAlerts = getServiceAlerts;

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _queries = require("../../utils/queries");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getServiceAlerts({
  apmRuleRegistryClient,
  start,
  end,
  serviceName,
  environment,
  transactionType
}) {
  const response = await apmRuleRegistryClient.search({
    body: {
      query: {
        bool: {
          filter: [...(0, _queries.rangeQuery)(start, end), ...(0, _queries.environmentQuery)(environment), {
            term: {
              [_elasticsearch_fieldnames.SERVICE_NAME]: serviceName
            }
          }],
          should: [{
            bool: {
              filter: [{
                term: {
                  [_elasticsearch_fieldnames.TRANSACTION_TYPE]: transactionType
                }
              }]
            }
          }, {
            bool: {
              must_not: {
                exists: {
                  field: _elasticsearch_fieldnames.TRANSACTION_TYPE
                }
              }
            }
          }],
          minimum_should_match: 1
        }
      },
      size: 100,
      fields: ['*'],
      collapse: {
        field: 'kibana.rac.alert.uuid'
      },
      sort: {
        '@timestamp': 'desc'
      }
    }
  });
  return response.events;
}