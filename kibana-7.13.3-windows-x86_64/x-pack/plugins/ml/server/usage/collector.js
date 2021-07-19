"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerCollector = registerCollector;

var _alerts = require("../../common/constants/alerts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function registerCollector(usageCollection, kibanaIndex) {
  const collector = usageCollection.makeUsageCollector({
    type: 'ml',
    schema: {
      alertRules: {
        'xpack.ml.anomaly_detection_alert': {
          count_by_result_type: {
            record: {
              type: 'long',
              _meta: {
                description: 'total number of alerting rules using record result type'
              }
            },
            influencer: {
              type: 'long',
              _meta: {
                description: 'total number of alerting rules using influencer result type'
              }
            },
            bucket: {
              type: 'long',
              _meta: {
                description: 'total number of alerting rules using bucket result type'
              }
            }
          }
        }
      }
    },
    isReady: () => !!kibanaIndex,
    fetch: async ({
      esClient
    }) => {
      const result = await esClient.search({
        index: kibanaIndex,
        size: 0,
        body: {
          query: {
            bool: {
              filter: [{
                term: {
                  type: 'alert'
                }
              }, {
                term: {
                  'alert.alertTypeId': _alerts.ML_ALERT_TYPES.ANOMALY_DETECTION
                }
              }]
            }
          },
          aggs: {
            count_by_result_type: {
              terms: {
                field: 'alert.params.resultType',
                size: 3
              }
            }
          }
        }
      });
      const aggResponse = result.body.aggregations;
      const countByResultType = aggResponse.count_by_result_type.buckets.reduce((acc, curr) => {
        acc[curr.key] = curr.doc_count;
        return acc;
      }, {});
      return {
        alertRules: {
          [_alerts.ML_ALERT_TYPES.ANOMALY_DETECTION]: {
            count_by_result_type: countByResultType
          }
        }
      };
    }
  });
  usageCollection.registerCollector(collector);
}