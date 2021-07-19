"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thresholdExecutor = void 0;

var _utils = require("../../../../../common/detection_engine/utils");

var _get_filter = require("../get_filter");

var _get_input_output_index = require("../get_input_output_index");

var _threshold = require("../threshold");

var _utils2 = require("../utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const thresholdExecutor = async ({
  rule,
  tuples,
  exceptionItems,
  ruleStatusService,
  services,
  version,
  logger,
  refresh,
  buildRuleMessage,
  startedAt
}) => {
  let result = (0, _utils2.createSearchAfterReturnType)();
  const ruleParams = rule.attributes.params;

  if ((0, _utils.hasLargeValueItem)(exceptionItems)) {
    await ruleStatusService.partialFailure('Exceptions that use "is in list" or "is not in list" operators are not applied to Threshold rules');
    result.warning = true;
  }

  const inputIndex = await (0, _get_input_output_index.getInputIndex)(services, version, ruleParams.index);

  for (const tuple of tuples) {
    const {
      thresholdSignalHistory,
      searchErrors: previousSearchErrors
    } = await (0, _threshold.getThresholdSignalHistory)({
      indexPattern: [ruleParams.outputIndex],
      from: tuple.from.toISOString(),
      to: tuple.to.toISOString(),
      services,
      logger,
      ruleId: ruleParams.ruleId,
      bucketByFields: ruleParams.threshold.field,
      timestampOverride: ruleParams.timestampOverride,
      buildRuleMessage
    });
    const bucketFilters = await (0, _threshold.getThresholdBucketFilters)({
      thresholdSignalHistory,
      timestampOverride: ruleParams.timestampOverride
    });
    const esFilter = await (0, _get_filter.getFilter)({
      type: ruleParams.type,
      filters: ruleParams.filters ? ruleParams.filters.concat(bucketFilters) : bucketFilters,
      language: ruleParams.language,
      query: ruleParams.query,
      savedId: ruleParams.savedId,
      services,
      index: inputIndex,
      lists: exceptionItems
    });
    const {
      searchResult: thresholdResults,
      searchErrors,
      searchDuration: thresholdSearchDuration
    } = await (0, _threshold.findThresholdSignals)({
      inputIndexPattern: inputIndex,
      from: tuple.from.toISOString(),
      to: tuple.to.toISOString(),
      services,
      logger,
      filter: esFilter,
      threshold: ruleParams.threshold,
      timestampOverride: ruleParams.timestampOverride,
      buildRuleMessage
    });
    const {
      success,
      bulkCreateDuration,
      createdItemsCount,
      createdItems,
      errors
    } = await (0, _threshold.bulkCreateThresholdSignals)({
      someResult: thresholdResults,
      ruleSO: rule,
      filter: esFilter,
      services,
      logger,
      id: rule.id,
      inputIndexPattern: inputIndex,
      signalsIndex: ruleParams.outputIndex,
      startedAt,
      from: tuple.from.toDate(),
      refresh,
      thresholdSignalHistory,
      buildRuleMessage
    });
    result = (0, _utils2.mergeReturns)([result, (0, _utils2.createSearchAfterReturnTypeFromResponse)({
      searchResult: thresholdResults,
      timestampOverride: ruleParams.timestampOverride
    }), (0, _utils2.createSearchAfterReturnType)({
      success,
      errors: [...errors, ...previousSearchErrors, ...searchErrors],
      createdSignalsCount: createdItemsCount,
      createdSignals: createdItems,
      bulkCreateTimes: bulkCreateDuration ? [bulkCreateDuration] : [],
      searchAfterTimes: [thresholdSearchDuration]
    })]);
  }

  return result;
};

exports.thresholdExecutor = thresholdExecutor;