"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLatencyDistribution = getLatencyDistribution;

var _processor_event = require("../../../../common/processor_event");

var _with_apm_span = require("../../../utils/with_apm_span");

var _get_overall_latency_distribution = require("./get_overall_latency_distribution");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getLatencyDistribution({
  setup,
  filters,
  topSigTerms,
  maxLatency,
  distributionInterval
}) {
  return (0, _with_apm_span.withApmSpan)('get_latency_distribution', async () => {
    const {
      apmEventClient
    } = setup;
    const distributionAgg = (0, _get_overall_latency_distribution.getDistributionAggregation)(maxLatency, distributionInterval);
    const perTermAggs = topSigTerms.reduce((acc, term, index) => {
      acc[`term_${index}`] = {
        filter: {
          term: {
            [term.fieldName]: term.fieldValue
          }
        },
        aggs: {
          distribution: distributionAgg
        }
      };
      return acc;
    }, {});
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
        aggs: perTermAggs
      }
    };
    const response = await (0, _with_apm_span.withApmSpan)('get_terms_distribution', () => apmEventClient.search(params));

    if (!response.aggregations) {
      return [];
    }

    return topSigTerms.map((topSig, index) => {
      // ignore the typescript error since existence of response.aggregations is already checked:
      // @ts-expect-error
      const agg = response.aggregations[`term_${index}`];
      const total = agg.distribution.doc_count;
      const buckets = (0, _get_overall_latency_distribution.trimBuckets)(agg.distribution.dist_filtered_by_latency.buckets);
      return { ...topSig,
        distribution: buckets.map(bucket => ({
          x: bucket.key,
          y: bucket.doc_count / total * 100
        }))
      };
    });
  });
}