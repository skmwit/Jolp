"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDistributionAggregation = getDistributionAggregation;
exports.getOverallLatencyDistribution = getOverallLatencyDistribution;
exports.trimBuckets = trimBuckets;
exports.INTERVAL_BUCKETS = void 0;

var _lodash = require("lodash");

var _elasticsearch_fieldnames = require("../../../../common/elasticsearch_fieldnames");

var _processor_event = require("../../../../common/processor_event");

var _get_max_latency = require("./get_max_latency");

var _with_apm_span = require("../../../utils/with_apm_span");

var _get_filters = require("../get_filters");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const INTERVAL_BUCKETS = 15;
exports.INTERVAL_BUCKETS = INTERVAL_BUCKETS;

function getDistributionAggregation(maxLatency, distributionInterval) {
  return {
    filter: {
      range: {
        [_elasticsearch_fieldnames.TRANSACTION_DURATION]: {
          lte: maxLatency
        }
      }
    },
    aggs: {
      dist_filtered_by_latency: {
        histogram: {
          // TODO: add support for metrics
          field: _elasticsearch_fieldnames.TRANSACTION_DURATION,
          interval: distributionInterval,
          min_doc_count: 0,
          extended_bounds: {
            min: 0,
            max: maxLatency
          }
        }
      }
    }
  };
}

async function getOverallLatencyDistribution(options) {
  const {
    setup
  } = options;
  const filters = (0, _get_filters.getCorrelationsFilters)(options);
  return (0, _with_apm_span.withApmSpan)('get_overall_latency_distribution', async () => {
    const {
      apmEventClient
    } = setup;
    const maxLatency = await (0, _get_max_latency.getMaxLatency)({
      setup,
      filters
    });

    if (!maxLatency) {
      return {
        maxLatency: null,
        distributionInterval: null,
        overallDistribution: null
      };
    }

    const distributionInterval = Math.floor(maxLatency / INTERVAL_BUCKETS);
    const params = {
      // TODO: add support for metrics
      apm: {
        events: [_processor_event.ProcessorEvent.transaction]
      },
      body: {
        size: 0,
        query: {
          bool: {
            filter: filters
          }
        },
        aggs: {
          // overall distribution agg
          distribution: getDistributionAggregation(maxLatency, distributionInterval)
        }
      }
    };
    const response = await (0, _with_apm_span.withApmSpan)('get_terms_distribution', () => apmEventClient.search(params));

    if (!response.aggregations) {
      return {
        maxLatency,
        distributionInterval,
        overallDistribution: null
      };
    }

    const {
      distribution
    } = response.aggregations;
    const total = distribution.doc_count;
    const buckets = trimBuckets(distribution.dist_filtered_by_latency.buckets);
    return {
      maxLatency,
      distributionInterval,
      overallDistribution: buckets.map(bucket => ({
        x: bucket.key,
        y: bucket.doc_count / total * 100
      }))
    };
  });
} // remove trailing buckets that are empty and out of bounds of the desired number of buckets


function trimBuckets(buckets) {
  return (0, _lodash.dropRightWhile)(buckets, (bucket, index) => bucket.doc_count === 0 && index > INTERVAL_BUCKETS - 1);
}