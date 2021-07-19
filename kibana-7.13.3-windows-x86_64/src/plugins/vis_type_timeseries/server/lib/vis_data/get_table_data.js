"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTableData = getTableData;

var _i18n = require("@kbn/i18n");

var _lodash = require("lodash");

var _build_request_body = require("./table/build_request_body");

var _handle_error_response = require("./handle_error_response");

var _process_bucket = require("./table/process_bucket");

var _fields_fetcher = require("../search_strategies/lib/fields_fetcher");

var _fields_utils = require("../../../common/fields_utils");

var _get_interval_and_timefield = require("./get_interval_and_timefield");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// not typed yet
// @ts-expect-error
// @ts-expect-error
// @ts-expect-error
async function getTableData(requestContext, req, panel, services) {
  const panelIndex = await services.cachedIndexPatternFetcher(panel.index_pattern);
  const strategy = await services.searchStrategyRegistry.getViableStrategy(requestContext, req, panelIndex);

  if (!strategy) {
    throw new Error(_i18n.i18n.translate('visTypeTimeseries.searchStrategyUndefinedErrorMessage', {
      defaultMessage: 'Search strategy was not defined'
    }));
  }

  const {
    searchStrategy,
    capabilities
  } = strategy;
  const extractFields = (0, _fields_fetcher.createFieldsFetcher)(req, {
    indexPatternsService: services.indexPatternsService,
    cachedIndexPatternFetcher: services.cachedIndexPatternFetcher,
    searchStrategy,
    capabilities
  });

  const calculatePivotLabel = async () => {
    var _panelIndex$indexPatt;

    if (panel.pivot_id && (_panelIndex$indexPatt = panelIndex.indexPattern) !== null && _panelIndex$indexPatt !== void 0 && _panelIndex$indexPatt.id) {
      const fields = await extractFields({
        id: panelIndex.indexPattern.id
      });
      return (0, _fields_utils.extractFieldLabel)(fields, panel.pivot_id);
    }

    return panel.pivot_id;
  };

  const buildSeriesMetaParams = async () => {
    let index = panelIndex;
    /** This part of code is required to try to get the default timefield for string indices.
     *  The rest of the functionality available for Kibana indexes should not be active **/

    if (!panel.use_kibana_indexes && index.indexPatternString) {
      index = await services.cachedIndexPatternFetcher(index.indexPatternString, true);
    }

    return (0, _get_interval_and_timefield.getIntervalAndTimefield)(panel, index);
  };

  const meta = {
    type: panel.type,
    uiRestrictions: capabilities.uiRestrictions
  };

  try {
    var _panelIndex$indexPatt2, _panelIndex$indexPatt3;

    const body = await (0, _build_request_body.buildRequestBody)(req, panel, services.esQueryConfig, panelIndex, capabilities, services.uiSettings, buildSeriesMetaParams);
    const [resp] = await searchStrategy.search(requestContext, req, [{
      body: { ...body,
        runtime_mappings: (_panelIndex$indexPatt2 = (_panelIndex$indexPatt3 = panelIndex.indexPattern) === null || _panelIndex$indexPatt3 === void 0 ? void 0 : _panelIndex$indexPatt3.getComputedFields().runtimeFields) !== null && _panelIndex$indexPatt2 !== void 0 ? _panelIndex$indexPatt2 : {}
      },
      index: panelIndex.indexPatternString
    }]);
    const buckets = (0, _lodash.get)(resp.rawResponse ? resp.rawResponse : resp, 'aggregations.pivot.buckets', []);
    const series = await Promise.all(buckets.map((0, _process_bucket.processBucket)(panel, req, searchStrategy, capabilities, extractFields)));
    return { ...meta,
      pivot_label: panel.pivot_label || (await calculatePivotLabel()),
      series
    };
  } catch (err) {
    if (err.body) {
      err.response = err.body;
      return { ...meta,
        ...(0, _handle_error_response.handleErrorResponse)(panel)(err)
      };
    }

    return meta;
  }
}