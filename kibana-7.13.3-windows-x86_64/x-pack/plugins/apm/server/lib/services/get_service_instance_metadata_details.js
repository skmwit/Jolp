"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServiceInstanceMetadataDetails = getServiceInstanceMetadataDetails;

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _queries = require("../../utils/queries");

var _with_apm_span = require("../../utils/with_apm_span");

var _aggregated_transactions = require("../helpers/aggregated_transactions");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getServiceInstanceMetadataDetails({
  serviceName,
  serviceNodeName,
  setup,
  searchAggregatedTransactions,
  transactionType,
  environment,
  kuery
}) {
  return (0, _with_apm_span.withApmSpan)('get_service_instance_metadata_details', async () => {
    var _response$hits$hits$;

    const {
      start,
      end,
      apmEventClient
    } = setup;
    const filter = [{
      term: {
        [_elasticsearch_fieldnames.SERVICE_NAME]: serviceName
      }
    }, {
      term: {
        [_elasticsearch_fieldnames.SERVICE_NODE_NAME]: serviceNodeName
      }
    }, {
      term: {
        [_elasticsearch_fieldnames.TRANSACTION_TYPE]: transactionType
      }
    }, ...(0, _queries.rangeQuery)(start, end), ...(0, _queries.environmentQuery)(environment), ...(0, _queries.kqlQuery)(kuery)];
    const response = await apmEventClient.search({
      apm: {
        events: [(0, _aggregated_transactions.getProcessorEventForAggregatedTransactions)(searchAggregatedTransactions)]
      },
      body: {
        terminate_after: 1,
        size: 1,
        query: {
          bool: {
            filter
          }
        }
      }
    });
    const sample = (_response$hits$hits$ = response.hits.hits[0]) === null || _response$hits$hits$ === void 0 ? void 0 : _response$hits$hits$._source;

    if (!sample) {
      return {};
    }

    const {
      agent,
      service,
      container,
      kubernetes,
      host,
      cloud
    } = sample;
    return {
      '@timestamp': sample['@timestamp'],
      agent,
      service,
      container,
      kubernetes,
      host,
      cloud
    };
  });
}