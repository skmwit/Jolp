"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCorrelationsForFailedTransactions = getCorrelationsForFailedTransactions;
exports.getErrorRateTimeSeries = getErrorRateTimeSeries;

var _lodash = require("lodash");

var _event_outcome = require("../../../../common/event_outcome");

var _process_significant_term_aggs = require("../process_significant_term_aggs");

var _elasticsearch_fieldnames = require("../../../../common/elasticsearch_fieldnames");

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


async function getCorrelationsForFailedTransactions(options) {
  return (0, _with_apm_span.withApmSpan)('get_correlations_for_failed_transactions', async () => {
    var _response$aggregation;

    const {
      fieldNames,
      setup
    } = options;
    const {
      apmEventClient
    } = setup;
    const filters = (0, _get_filters.getCorrelationsFilters)(options);
    const params = {
      apm: {
        events: [_processor_event.ProcessorEvent.transaction]
      },
      track_total_hits: true,
      body: {
        size: 0,
        query: {
          bool: {
            filter: filters
          }
        },
        aggs: {
          failed_transactions: {
            filter: {
              term: {
                [_elasticsearch_fieldnames.EVENT_OUTCOME]: _event_outcome.EventOutcome.failure
              }
            },
            // significant term aggs
            aggs: fieldNames.reduce((acc, fieldName) => {
              return { ...acc,
                [fieldName]: {
                  significant_terms: {
                    size: 10,
                    field: fieldName,
                    background_filter: {
                      bool: {
                        filter: filters,
                        must_not: {
                          term: {
                            [_elasticsearch_fieldnames.EVENT_OUTCOME]: _event_outcome.EventOutcome.failure
                          }
                        }
                      }
                    }
                  }
                }
              };
            }, {})
          }
        }
      }
    };
    const response = await apmEventClient.search(params);

    if (!response.aggregations) {
      return {
        significantTerms: []
      };
    }

    const sigTermAggs = (0, _lodash.omit)((_response$aggregation = response.aggregations) === null || _response$aggregation === void 0 ? void 0 : _response$aggregation.failed_transactions, 'doc_count');
    const topSigTerms = (0, _process_significant_term_aggs.processSignificantTermAggs)({
      sigTermAggs
    });
    return getErrorRateTimeSeries({
      setup,
      filters,
      topSigTerms
    });
  });
}

async function getErrorRateTimeSeries({
  setup,
  filters,
  topSigTerms
}) {
  return (0, _with_apm_span.withApmSpan)('get_error_rate_timeseries', async () => {
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

    if ((0, _lodash.isEmpty)(topSigTerms)) {
      return {
        significantTerms: []
      };
    }

    const timeseriesAgg = (0, _transaction_error_rate.getTimeseriesAggregation)(start, end, intervalString);
    const perTermAggs = topSigTerms.reduce((acc, term, index) => {
      acc[`term_${index}`] = {
        filter: {
          term: {
            [term.fieldName]: term.fieldValue
          }
        },
        aggs: {
          timeseries: timeseriesAgg
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
    const response = await apmEventClient.search(params);
    const {
      aggregations
    } = response;

    if (!aggregations) {
      return {
        significantTerms: []
      };
    }

    return {
      significantTerms: topSigTerms.map((topSig, index) => {
        const agg = aggregations[`term_${index}`];
        return { ...topSig,
          timeseries: (0, _transaction_error_rate.getTransactionErrorRateTimeSeries)(agg.timeseries.buckets)
        };
      })
    };
  });
}