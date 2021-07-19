"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStats = void 0;

var _timerange_data_modes = require("../../common/timerange_data_modes");

var _server = require("../../../dashboard/server");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const getStats = async (esClient, soClient, index) => {
  var _esResponse$hits, _esResponse$hits$hits;

  const timeseriesUsage = {
    timeseries_use_last_value_mode_total: 0
  };
  const searchParams = {
    size: 10000,
    index,
    ignoreUnavailable: true,
    filterPath: ['hits.hits._id', 'hits.hits._source.visualization'],
    body: {
      query: {
        bool: {
          filter: {
            term: {
              type: 'visualization'
            }
          }
        }
      }
    }
  };
  const {
    body: esResponse
  } = await esClient.search(searchParams);

  function telemetryUseLastValueMode(visState) {
    if (visState.type === 'metrics' && visState.params.type !== 'timeseries' && (!visState.params.time_range_mode || visState.params.time_range_mode === _timerange_data_modes.TIME_RANGE_DATA_MODES.LAST_VALUE)) {
      timeseriesUsage.timeseries_use_last_value_mode_total++;
    }
  }

  if (esResponse !== null && esResponse !== void 0 && (_esResponse$hits = esResponse.hits) !== null && _esResponse$hits !== void 0 && (_esResponse$hits$hits = _esResponse$hits.hits) !== null && _esResponse$hits$hits !== void 0 && _esResponse$hits$hits.length) {
    for (const hit of esResponse.hits.hits) {
      if (hit._source && 'visualization' in hit._source) {
        const {
          visualization
        } = hit._source;
        let visState = {};

        try {
          var _visualization$visSta;

          visState = JSON.parse((_visualization$visSta = visualization === null || visualization === void 0 ? void 0 : visualization.visState) !== null && _visualization$visSta !== void 0 ? _visualization$visSta : '{}');
        } catch (e) {// invalid visState
        }

        telemetryUseLastValueMode(visState);
      }
    }
  }

  const byValueVisualizations = await (0, _server.findByValueEmbeddables)(soClient, 'visualization');

  for (const item of byValueVisualizations) {
    telemetryUseLastValueMode(item.savedVis);
  }

  return timeseriesUsage.timeseries_use_last_value_mode_total ? timeseriesUsage : undefined;
};

exports.getStats = getStats;