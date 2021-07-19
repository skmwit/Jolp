"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransactionsPerMinute = getTransactionsPerMinute;

var _transaction_types = require("../../../common/transaction_types");

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _queries = require("../../../server/utils/queries");

var _aggregated_transactions = require("../helpers/aggregated_transactions");

var _calculate_throughput = require("../helpers/calculate_throughput");

var _with_apm_span = require("../../utils/with_apm_span");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function getTransactionsPerMinute({
  setup,
  bucketSize,
  searchAggregatedTransactions
}) {
  return (0, _with_apm_span.withApmSpan)('observability_overview_get_transactions_per_minute', async () => {
    const {
      apmEventClient,
      start,
      end
    } = setup;
    const {
      aggregations
    } = await apmEventClient.search({
      apm: {
        events: [(0, _aggregated_transactions.getProcessorEventForAggregatedTransactions)(searchAggregatedTransactions)]
      },
      body: {
        size: 0,
        query: {
          bool: {
            filter: (0, _queries.rangeQuery)(start, end)
          }
        },
        aggs: {
          transactionType: {
            terms: {
              field: _elasticsearch_fieldnames.TRANSACTION_TYPE
            },
            aggs: {
              timeseries: {
                date_histogram: {
                  field: '@timestamp',
                  fixed_interval: bucketSize,
                  min_doc_count: 0
                },
                aggs: {
                  throughput: {
                    rate: {
                      unit: 'minute'
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!aggregations || !aggregations.transactionType.buckets) {
      return {
        value: undefined,
        timeseries: []
      };
    }

    const topTransactionTypeBucket = aggregations.transactionType.buckets.find(({
      key: transactionType
    }) => transactionType === _transaction_types.TRANSACTION_REQUEST || transactionType === _transaction_types.TRANSACTION_PAGE_LOAD) || aggregations.transactionType.buckets[0];
    return {
      value: (0, _calculate_throughput.calculateThroughput)({
        start,
        end,
        value: (topTransactionTypeBucket === null || topTransactionTypeBucket === void 0 ? void 0 : topTransactionTypeBucket.doc_count) || 0
      }),
      timeseries: (topTransactionTypeBucket === null || topTransactionTypeBucket === void 0 ? void 0 : topTransactionTypeBucket.timeseries.buckets.map(bucket => ({
        x: bucket.key,
        y: bucket.throughput.value
      }))) || []
    };
  });
}