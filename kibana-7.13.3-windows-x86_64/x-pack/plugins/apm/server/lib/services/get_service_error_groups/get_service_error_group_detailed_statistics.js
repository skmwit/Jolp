"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServiceErrorGroupDetailedStatistics = getServiceErrorGroupDetailedStatistics;
exports.getServiceErrorGroupPeriods = getServiceErrorGroupPeriods;

var _lodash = require("lodash");

var _offset_previous_period_coordinate = require("../../../../common/utils/offset_previous_period_coordinate");

var _elasticsearch_fieldnames = require("../../../../common/elasticsearch_fieldnames");

var _processor_event = require("../../../../common/processor_event");

var _queries = require("../../../../server/utils/queries");

var _with_apm_span = require("../../../utils/with_apm_span");

var _get_bucket_size = require("../../helpers/get_bucket_size");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getServiceErrorGroupDetailedStatistics({
  kuery,
  serviceName,
  setup,
  numBuckets,
  transactionType,
  groupIds,
  environment,
  start,
  end
}) {
  return (0, _with_apm_span.withApmSpan)('get_service_error_group_detailed_statistics', async () => {
    const {
      apmEventClient
    } = setup;
    const {
      intervalString
    } = (0, _get_bucket_size.getBucketSize)({
      start,
      end,
      numBuckets
    });
    const timeseriesResponse = await apmEventClient.search({
      apm: {
        events: [_processor_event.ProcessorEvent.error]
      },
      body: {
        size: 0,
        query: {
          bool: {
            filter: [{
              terms: {
                [_elasticsearch_fieldnames.ERROR_GROUP_ID]: groupIds
              }
            }, {
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
              size: 500
            },
            aggs: {
              timeseries: {
                date_histogram: {
                  field: '@timestamp',
                  fixed_interval: intervalString,
                  min_doc_count: 0,
                  extended_bounds: {
                    min: start,
                    max: end
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!timeseriesResponse.aggregations) {
      return [];
    }

    return timeseriesResponse.aggregations.error_groups.buckets.map(bucket => {
      const groupId = bucket.key;
      return {
        groupId,
        timeseries: bucket.timeseries.buckets.map(timeseriesBucket => {
          return {
            x: timeseriesBucket.key,
            y: timeseriesBucket.doc_count
          };
        })
      };
    });
  });
}

async function getServiceErrorGroupPeriods({
  kuery,
  serviceName,
  setup,
  numBuckets,
  transactionType,
  groupIds,
  environment,
  comparisonStart,
  comparisonEnd
}) {
  const {
    start,
    end
  } = setup;
  const commonProps = {
    environment,
    kuery,
    serviceName,
    setup,
    numBuckets,
    transactionType,
    groupIds
  };
  const currentPeriodPromise = getServiceErrorGroupDetailedStatistics({ ...commonProps,
    start,
    end
  });
  const previousPeriodPromise = comparisonStart && comparisonEnd ? getServiceErrorGroupDetailedStatistics({ ...commonProps,
    start: comparisonStart,
    end: comparisonEnd
  }) : [];
  const [currentPeriod, previousPeriod] = await Promise.all([currentPeriodPromise, previousPeriodPromise]);
  const firtCurrentPeriod = currentPeriod.length ? currentPeriod[0] : undefined;
  return {
    currentPeriod: (0, _lodash.keyBy)(currentPeriod, 'groupId'),
    previousPeriod: (0, _lodash.keyBy)(previousPeriod.map(errorRateGroup => ({ ...errorRateGroup,
      timeseries: (0, _offset_previous_period_coordinate.offsetPreviousPeriodCoordinates)({
        currentPeriodTimeseries: firtCurrentPeriod === null || firtCurrentPeriod === void 0 ? void 0 : firtCurrentPeriod.timeseries,
        previousPeriodTimeseries: errorRateGroup.timeseries
      })
    })), 'groupId')
  };
}