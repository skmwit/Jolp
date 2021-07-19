"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSeriesData = getSeriesData;

var _i18n = require("@kbn/i18n");

var _handle_error_response = require("./handle_error_response");

var _get_annotations = require("./get_annotations");

var _handle_response_body = require("./series/handle_response_body");

var _get_request_params = require("./series/get_request_params");

var _get_active_series = require("./helpers/get_active_series");

var _panel_types = require("../../../common/panel_types");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// not typed yet
// @ts-expect-error
async function getSeriesData(requestContext, req, panel, services) {
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
  const meta = {
    type: panel.type,
    uiRestrictions: capabilities.uiRestrictions
  };

  try {
    const bodiesPromises = (0, _get_active_series.getActiveSeries)(panel).map(series => (0, _get_request_params.getSeriesRequestParams)(req, panel, panelIndex, series, capabilities, services));
    const searches = await Promise.all(bodiesPromises);
    const data = await searchStrategy.search(requestContext, req, searches);
    const handleResponseBodyFn = (0, _handle_response_body.handleResponseBody)(panel, req, {
      indexPatternsService: services.indexPatternsService,
      cachedIndexPatternFetcher: services.cachedIndexPatternFetcher,
      searchStrategy,
      capabilities
    });
    const series = await Promise.all(data.map(async resp => await handleResponseBodyFn(resp.rawResponse ? resp.rawResponse : resp)));
    let annotations = null;

    if (panel.type === _panel_types.PANEL_TYPES.TIMESERIES && panel.annotations && panel.annotations.length) {
      annotations = await (0, _get_annotations.getAnnotations)({
        req,
        panel,
        series,
        services: { ...services,
          requestContext,
          searchStrategy,
          capabilities
        }
      });
    }

    return { ...meta,
      [panel.id]: {
        annotations,
        id: panel.id,
        series: series.reduce((acc, s) => acc.concat(s), [])
      }
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