"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleRequest = void 0;

var _i18n = require("@kbn/i18n");

var _common = require("../../../../common");

var _tabify = require("../../tabify");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const handleRequest = async ({
  abortSignal,
  aggs,
  filters,
  indexPattern,
  inspectorAdapters,
  partialRows,
  query,
  searchSessionId,
  searchSourceService,
  timeFields,
  timeRange,
  getNow
}) => {
  var _indexPattern$getTime, _inspectorAdapters$re;

  const forceNow = getNow === null || getNow === void 0 ? void 0 : getNow();
  const searchSource = await searchSourceService.create();
  searchSource.setField('index', indexPattern);
  searchSource.setField('size', 0); // Create a new search source that inherits the original search source
  // but has the appropriate timeRange applied via a filter.
  // This is a temporary solution until we properly pass down all required
  // information for the request to the request handler (https://github.com/elastic/kibana/issues/16641).
  // Using callParentStartHandlers: true we make sure, that the parent searchSource
  // onSearchRequestStart will be called properly even though we use an inherited
  // search source.

  const timeFilterSearchSource = searchSource.createChild({
    callParentStartHandlers: true
  });
  const requestSearchSource = timeFilterSearchSource.createChild({
    callParentStartHandlers: true
  });
  aggs.setTimeRange(timeRange);
  aggs.setTimeFields(timeFields); // For now we need to mirror the history of the passed search source, since
  // the request inspector wouldn't work otherwise.

  Object.defineProperty(requestSearchSource, 'history', {
    get() {
      return searchSource.history;
    },

    set(history) {
      return searchSource.history = history;
    }

  });
  requestSearchSource.setField('aggs', aggs);
  requestSearchSource.onRequestStart((paramSearchSource, options) => {
    return aggs.onSearchRequestStart(paramSearchSource, options);
  }); // If timeFields have been specified, use the specified ones, otherwise use primary time field of index
  // pattern if it's available.

  const defaultTimeField = indexPattern === null || indexPattern === void 0 ? void 0 : (_indexPattern$getTime = indexPattern.getTimeField) === null || _indexPattern$getTime === void 0 ? void 0 : _indexPattern$getTime.call(indexPattern);
  const defaultTimeFields = defaultTimeField ? [defaultTimeField.name] : [];
  const allTimeFields = timeFields && timeFields.length > 0 ? timeFields : defaultTimeFields; // If a timeRange has been specified and we had at least one timeField available, create range
  // filters for that those time fields

  if (timeRange && allTimeFields.length > 0) {
    timeFilterSearchSource.setField('filter', () => {
      return allTimeFields.map(fieldName => (0, _common.getTime)(indexPattern, timeRange, {
        fieldName,
        forceNow
      })).filter(_common.isRangeFilter);
    });
  }

  requestSearchSource.setField('filter', filters);
  requestSearchSource.setField('query', query);
  (_inspectorAdapters$re = inspectorAdapters.requests) === null || _inspectorAdapters$re === void 0 ? void 0 : _inspectorAdapters$re.reset();
  const response = await requestSearchSource.fetch$({
    abortSignal,
    sessionId: searchSessionId,
    inspector: {
      adapter: inspectorAdapters.requests,
      title: _i18n.i18n.translate('data.functions.esaggs.inspector.dataRequest.title', {
        defaultMessage: 'Data'
      }),
      description: _i18n.i18n.translate('data.functions.esaggs.inspector.dataRequest.description', {
        defaultMessage: 'This request queries Elasticsearch to fetch the data for the visualization.'
      })
    }
  }).toPromise();
  const parsedTimeRange = timeRange ? (0, _common.calculateBounds)(timeRange, {
    forceNow
  }) : null;
  const tabifyParams = {
    metricsAtAllLevels: aggs.hierarchical,
    partialRows,
    timeRange: parsedTimeRange ? {
      from: parsedTimeRange.min,
      to: parsedTimeRange.max,
      timeFields: allTimeFields
    } : undefined
  };
  const tabifiedResponse = (0, _tabify.tabifyAggResponse)(aggs, response, tabifyParams);
  return tabifiedResponse;
};

exports.handleRequest = handleRequest;