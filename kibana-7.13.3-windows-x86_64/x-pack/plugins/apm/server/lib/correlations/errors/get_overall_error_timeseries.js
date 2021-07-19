"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverallErrorTimeseries = getOverallErrorTimeseries;

var _processor_event = require("../../../../common/processor_event");

var _get_bucket_size = require("../../helpers/get_bucket_size");

var _transaction_error_rate = require("../../helpers/transaction_error_rate");

var _with_apm_span = require("../../../utils/with_apm_span");

var _get_filters = require("../get_filters");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getOverallErrorTimeseries(options) {
  return (0, _with_apm_span.withApmSpan)('get_error_rate_timeseries', async () => {
    const {
      setup
    } = options;
    const filters = (0, _get_filters.getCorrelationsFilters)(options);
    const {
      start,
      end,
      apmEventClient
    } = setup;
    const {
      intervalString
    } = (0, _get_bucket_size.getBucketSize)({
      start,
      end,
      numBuckets: 15
    });
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
          timeseries: (0, _transaction_error_rate.getTimeseriesAggregation)(start, end, intervalString)
        }
      }
    };
    const response = await apmEventClient.search(params);
    const {
      aggregations
    } = response;

    if (!aggregations) {
      return {
        overall: null
      };
    }

    return {
      overall: {
        timeseries: (0, _transaction_error_rate.getTransactionErrorRateTimeSeries)(aggregations.timeseries.buckets)
      }
    };
  });
}