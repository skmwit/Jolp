"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServiceErrorGroupMainStatistics = getServiceErrorGroupMainStatistics;

var _elasticsearch_fieldnames = require("../../../../common/elasticsearch_fieldnames");

var _i18n = require("../../../../common/i18n");

var _processor_event = require("../../../../common/processor_event");

var _queries = require("../../../../server/utils/queries");

var _with_apm_span = require("../../../utils/with_apm_span");

var _get_error_name = require("../../helpers/get_error_name");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function getServiceErrorGroupMainStatistics({
  kuery,
  serviceName,
  setup,
  transactionType,
  environment
}) {
  return (0, _with_apm_span.withApmSpan)('get_service_error_group_main_statistics', async () => {
    var _response$aggregation, _response$aggregation2, _response$aggregation3, _response$aggregation4;

    const {
      apmEventClient,
      start,
      end
    } = setup;
    const response = await apmEventClient.search({
      apm: {
        events: [_processor_event.ProcessorEvent.error]
      },
      body: {
        size: 0,
        query: {
          bool: {
            filter: [{
              term: {
                [_elasticsearch_fieldnames.SERVICE_NAME]: serviceName
              }
            }, {
              term: {
                [_elasticsearch_fieldnames.TRANSACTION_TYPE]: transactionType
              }
            }, ...(0, _queries.rangeQuery)(start, end), ...(0, _queries.environmentQuery)(environment), ...(0, _queries.kqlQuery)(kuery)]
          }
        },
        aggs: {
          error_groups: {
            terms: {
              field: _elasticsearch_fieldnames.ERROR_GROUP_ID,
              size: 500,
              order: {
                _count: 'desc'
              }
            },
            aggs: {
              sample: {
                top_hits: {
                  size: 1,
                  _source: [_elasticsearch_fieldnames.ERROR_LOG_MESSAGE, _elasticsearch_fieldnames.ERROR_EXC_MESSAGE, '@timestamp'],
                  sort: {
                    '@timestamp': 'desc'
                  }
                }
              }
            }
          }
        }
      }
    });
    const errorGroups = (_response$aggregation = (_response$aggregation2 = response.aggregations) === null || _response$aggregation2 === void 0 ? void 0 : _response$aggregation2.error_groups.buckets.map(bucket => {
      var _getErrorName, _bucket$sample$hits$h;

      return {
        group_id: bucket.key,
        name: (_getErrorName = (0, _get_error_name.getErrorName)(bucket.sample.hits.hits[0]._source)) !== null && _getErrorName !== void 0 ? _getErrorName : _i18n.NOT_AVAILABLE_LABEL,
        last_seen: new Date((_bucket$sample$hits$h = bucket.sample.hits.hits[0]) === null || _bucket$sample$hits$h === void 0 ? void 0 : _bucket$sample$hits$h._source['@timestamp']).getTime(),
        occurrences: bucket.doc_count
      };
    })) !== null && _response$aggregation !== void 0 ? _response$aggregation : [];
    return {
      is_aggregation_accurate: ((_response$aggregation3 = (_response$aggregation4 = response.aggregations) === null || _response$aggregation4 === void 0 ? void 0 : _response$aggregation4.error_groups.sum_other_doc_count) !== null && _response$aggregation3 !== void 0 ? _response$aggregation3 : 0) === 0,
      error_groups: errorGroups
    };
  });
}