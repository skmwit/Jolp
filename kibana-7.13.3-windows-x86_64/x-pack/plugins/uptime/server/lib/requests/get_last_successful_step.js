"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStepLastSuccessfulStep = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const getStepLastSuccessfulStep = async ({
  uptimeEsClient,
  monitorId,
  stepIndex,
  timestamp
}) => {
  var _result$hits;

  const lastSuccessCheckParams = {
    size: 1,
    sort: [{
      '@timestamp': {
        order: 'desc'
      }
    }],
    query: {
      bool: {
        filter: [{
          range: {
            '@timestamp': {
              lte: timestamp
            }
          }
        }, {
          term: {
            'monitor.id': monitorId
          }
        }, {
          term: {
            'synthetics.type': 'step/end'
          }
        }, {
          term: {
            'synthetics.step.status': 'succeeded'
          }
        }, {
          term: {
            'synthetics.step.index': stepIndex
          }
        }]
      }
    }
  };
  const {
    body: result
  } = await uptimeEsClient.search({
    body: lastSuccessCheckParams
  });

  if ((result === null || result === void 0 ? void 0 : (_result$hits = result.hits) === null || _result$hits === void 0 ? void 0 : _result$hits.total.value) < 1) {
    return null;
  }

  const step = result === null || result === void 0 ? void 0 : result.hits.hits[0]._source;
  return { ...step,
    timestamp: step['@timestamp']
  };
};

exports.getStepLastSuccessfulStep = getStepLastSuccessfulStep;