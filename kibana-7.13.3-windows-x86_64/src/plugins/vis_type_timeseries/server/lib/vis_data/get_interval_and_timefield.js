"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntervalAndTimefield = getIntervalAndTimefield;

var _constants = require("../../../common/constants");

var _fields_utils = require("../../../common/fields_utils");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function getIntervalAndTimefield(panel, index, series) {
  var _index$indexPattern;

  const timeField = (series !== null && series !== void 0 && series.override_index_pattern ? series.series_time_field : panel.time_field) || ((_index$indexPattern = index.indexPattern) === null || _index$indexPattern === void 0 ? void 0 : _index$indexPattern.timeFieldName);

  if (panel.use_kibana_indexes) {
    (0, _fields_utils.validateField)(timeField, index);
  }

  let interval = panel.interval;
  let maxBars = panel.max_bars;

  if (series !== null && series !== void 0 && series.override_index_pattern) {
    interval = series.series_interval || _constants.AUTO_INTERVAL;
    maxBars = series.series_max_bars;
  }

  return {
    maxBars,
    timeField,
    interval: interval || _constants.AUTO_INTERVAL
  };
}