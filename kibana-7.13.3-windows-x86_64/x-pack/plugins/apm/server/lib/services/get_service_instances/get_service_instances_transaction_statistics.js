"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServiceInstancesTransactionStatistics = getServiceInstancesTransactionStatistics;

var _elasticsearch_fieldnames = require("../../../../common/elasticsearch_fieldnames");

var _event_outcome = require("../../../../common/event_outcome");

var _service_nodes = require("../../../../common/service_nodes");

var _queries = require("../../../utils/queries");

var _aggregated_transactions = require("../../helpers/aggregated_transactions");

var _calculate_throughput = require("../../helpers/calculate_throughput");

var _get_bucket_size = require("../../helpers/get_bucket_size");

var _latency_aggregation_type = require("../../helpers/latency_aggregation_type");

var _with_apm_span = require("../../../utils/with_apm_span");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getServiceInstancesTransactionStatistics({
  environment,
  kuery,
  latencyAggregationType,
  setup,
  transactionType,
  serviceName,
  size,
  searchAggregatedTransactions,
  start,
  end,
  serviceNodeIds,
  numBuckets,
  isComparisonSearch
}) {
  return (0, _with_apm_span.withApmSpan)('get_service_instances_transaction_statistics', async () => {
    var _response$aggregation;

    const {
      apmEventClient
    } = setup;
    const {
      intervalString,
      bucketSize
    } = (0, _get_bucket_size.getBucketSize)({
      start,
      end,
      numBuckets
    });
    const field = (0, _aggregated_transactions.getTransactionDurationFieldForAggregatedTransactions)(searchAggregatedTransactions);
    const subAggs = { ...(0, _latency_aggregation_type.getLatencyAggregation)(latencyAggregationType, field),
      failures: {
        filter: {
          term: {
            [_elasticsearch_fieldnames.EVENT_OUTCOME]: _event_outcome.EventOutcome.failure
          }
        }
      }
    };
    const query = {
      bool: {
        filter: [{
          term: {
            [_elasticsearch_fieldnames.SERVICE_NAME]: serviceName
          }
        }, {
          term: {
            [_elasticsearch_fieldnames.TRANSACTION_TYPE]: transactionType
          }
        }, ...(0, _queries.rangeQuery)(start, end), ...(0, _queries.environmentQuery)(environment), ...(0, _queries.kqlQuery)(kuery), ...(isComparisonSearch && serviceNodeIds ? [{
          terms: {
            [_elasticsearch_fieldnames.SERVICE_NODE_NAME]: serviceNodeIds
          }
        }] : [])]
      }
    };
    const aggs = {
      [_elasticsearch_fieldnames.SERVICE_NODE_NAME]: {
        terms: {
          field: _elasticsearch_fieldnames.SERVICE_NODE_NAME,
          missing: _service_nodes.SERVICE_NODE_NAME_MISSING,
          ...(size ? {
            size
          } : {}),
          ...(isComparisonSearch ? {
            include: serviceNodeIds
          } : {})
        },
        aggs: isComparisonSearch ? {
          timeseries: {
            date_histogram: {
              field: '@timestamp',
              fixed_interval: intervalString,
              min_doc_count: 0,
              extended_bounds: {
                min: start,
                max: end
              }
            },
            aggs: subAggs
          }
        } : subAggs
      }
    };
    const response = await apmEventClient.search({
      apm: {
        events: [(0, _aggregated_transactions.getProcessorEventForAggregatedTransactions)(searchAggregatedTransactions)]
      },
      body: {
        size: 0,
        query,
        aggs
      }
    });
    const bucketSizeInMinutes = bucketSize / 60;
    return ((_response$aggregation = response.aggregations) === null || _response$aggregation === void 0 ? void 0 : _response$aggregation[_elasticsearch_fieldnames.SERVICE_NODE_NAME].buckets.map(serviceNodeBucket => {
      const {
        doc_count: count,
        key
      } = serviceNodeBucket;
      const serviceNodeName = String(key); // Timeseries is returned when isComparisonSearch is true

      if ('timeseries' in serviceNodeBucket) {
        const {
          timeseries
        } = serviceNodeBucket;
        return {
          serviceNodeName,
          errorRate: timeseries.buckets.map(dateBucket => ({
            x: dateBucket.key,
            y: dateBucket.failures.doc_count / dateBucket.doc_count
          })),
          throughput: timeseries.buckets.map(dateBucket => ({
            x: dateBucket.key,
            y: dateBucket.doc_count / bucketSizeInMinutes
          })),
          latency: timeseries.buckets.map(dateBucket => ({
            x: dateBucket.key,
            y: (0, _latency_aggregation_type.getLatencyValue)({
              aggregation: dateBucket.latency,
              latencyAggregationType
            })
          }))
        };
      } else {
        const {
          failures,
          latency
        } = serviceNodeBucket;
        return {
          serviceNodeName,
          errorRate: failures.doc_count / count,
          latency: (0, _latency_aggregation_type.getLatencyValue)({
            aggregation: latency,
            latencyAggregationType
          }),
          throughput: (0, _calculate_throughput.calculateThroughput)({
            start,
            end,
            value: count
          })
        };
      }
    })) || [];
  });
}