"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLatencyTimeseries = getLatencyTimeseries;
exports.getLatencyPeriods = getLatencyPeriods;

var _offset_previous_period_coordinate = require("../../../../common/utils/offset_previous_period_coordinate");

var _elasticsearch_fieldnames = require("../../../../common/elasticsearch_fieldnames");

var _queries = require("../../../../server/utils/queries");

var _aggregated_transactions = require("../../../lib/helpers/aggregated_transactions");

var _get_bucket_size = require("../../../lib/helpers/get_bucket_size");

var _with_apm_span = require("../../../utils/with_apm_span");

var _latency_aggregation_type = require("../../helpers/latency_aggregation_type");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function searchLatency({
  environment,
  kuery,
  serviceName,
  transactionType,
  transactionName,
  setup,
  searchAggregatedTransactions,
  latencyAggregationType,
  start,
  end
}) {
  const {
    apmEventClient
  } = setup;
  const {
    intervalString
  } = (0, _get_bucket_size.getBucketSize)({
    start,
    end
  });
  const filter = [{
    term: {
      [_elasticsearch_fieldnames.SERVICE_NAME]: serviceName
    }
  }, ...(0, _aggregated_transactions.getDocumentTypeFilterForAggregatedTransactions)(searchAggregatedTransactions), ...(0, _queries.rangeQuery)(start, end), ...(0, _queries.environmentQuery)(environment), ...(0, _queries.kqlQuery)(kuery)];

  if (transactionName) {
    filter.push({
      term: {
        [_elasticsearch_fieldnames.TRANSACTION_NAME]: transactionName
      }
    });
  }

  if (transactionType) {
    filter.push({
      term: {
        [_elasticsearch_fieldnames.TRANSACTION_TYPE]: transactionType
      }
    });
  }

  const transactionDurationField = (0, _aggregated_transactions.getTransactionDurationFieldForAggregatedTransactions)(searchAggregatedTransactions);
  const params = {
    apm: {
      events: [(0, _aggregated_transactions.getProcessorEventForAggregatedTransactions)(searchAggregatedTransactions)]
    },
    body: {
      size: 0,
      query: {
        bool: {
          filter
        }
      },
      aggs: {
        latencyTimeseries: {
          date_histogram: {
            field: '@timestamp',
            fixed_interval: intervalString,
            min_doc_count: 0,
            extended_bounds: {
              min: start,
              max: end
            }
          },
          aggs: (0, _latency_aggregation_type.getLatencyAggregation)(latencyAggregationType, transactionDurationField)
        },
        overall_avg_duration: {
          avg: {
            field: transactionDurationField
          }
        }
      }
    }
  };
  return apmEventClient.search(params);
}

function getLatencyTimeseries({
  environment,
  kuery,
  serviceName,
  transactionType,
  transactionName,
  setup,
  searchAggregatedTransactions,
  latencyAggregationType,
  start,
  end
}) {
  return (0, _with_apm_span.withApmSpan)('get_latency_charts', async () => {
    const response = await searchLatency({
      environment,
      kuery,
      serviceName,
      transactionType,
      transactionName,
      setup,
      searchAggregatedTransactions,
      latencyAggregationType,
      start,
      end
    });

    if (!response.aggregations) {
      return {
        latencyTimeseries: [],
        overallAvgDuration: null
      };
    }

    return {
      overallAvgDuration: response.aggregations.overall_avg_duration.value || null,
      latencyTimeseries: response.aggregations.latencyTimeseries.buckets.map(bucket => {
        return {
          x: bucket.key,
          y: (0, _latency_aggregation_type.getLatencyValue)({
            latencyAggregationType,
            aggregation: bucket.latency
          })
        };
      })
    };
  });
}

async function getLatencyPeriods({
  serviceName,
  transactionType,
  transactionName,
  setup,
  searchAggregatedTransactions,
  latencyAggregationType,
  comparisonStart,
  comparisonEnd,
  kuery,
  environment
}) {
  const {
    start,
    end
  } = setup;
  const options = {
    serviceName,
    transactionType,
    transactionName,
    setup,
    searchAggregatedTransactions,
    kuery,
    environment
  };
  const currentPeriodPromise = getLatencyTimeseries({ ...options,
    start,
    end,
    latencyAggregationType: latencyAggregationType
  });
  const previousPeriodPromise = comparisonStart && comparisonEnd ? getLatencyTimeseries({ ...options,
    start: comparisonStart,
    end: comparisonEnd,
    latencyAggregationType: latencyAggregationType
  }) : {
    latencyTimeseries: [],
    overallAvgDuration: null
  };
  const [currentPeriod, previousPeriod] = await Promise.all([currentPeriodPromise, previousPeriodPromise]);
  return {
    currentPeriod,
    previousPeriod: { ...previousPeriod,
      latencyTimeseries: (0, _offset_previous_period_coordinate.offsetPreviousPeriodCoordinates)({
        currentPeriodTimeseries: currentPeriod.latencyTimeseries,
        previousPeriodTimeseries: previousPeriod.latencyTimeseries
      })
    }
  };
}