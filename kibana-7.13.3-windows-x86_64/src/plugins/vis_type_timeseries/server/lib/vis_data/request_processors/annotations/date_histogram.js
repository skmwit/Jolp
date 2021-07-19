"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateHistogram = dateHistogram;

var _helpers = require("../../helpers");

var _get_bucket_size = require("../../helpers/get_bucket_size");

var _get_timerange = require("../../helpers/get_timerange");

var _server = require("../../../../../../../plugins/data/server");

var _fields_utils = require("../../../../../common/fields_utils");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const {
  dateHistogramInterval
} = _server.search.aggs;

function dateHistogram(req, panel, annotation, esQueryConfig, annotationIndex, capabilities, uiSettings) {
  return next => async doc => {
    var _annotationIndex$inde;

    const barTargetUiSettings = await uiSettings.get(_server.UI_SETTINGS.HISTOGRAM_BAR_TARGET);
    const timeField = annotation.time_field || ((_annotationIndex$inde = annotationIndex.indexPattern) === null || _annotationIndex$inde === void 0 ? void 0 : _annotationIndex$inde.timeFieldName) || '';

    if (panel.use_kibana_indexes) {
      (0, _fields_utils.validateField)(timeField, annotationIndex);
    }

    const {
      bucketSize,
      intervalString
    } = (0, _get_bucket_size.getBucketSize)(req, 'auto', capabilities, barTargetUiSettings);
    const {
      from,
      to
    } = (0, _get_timerange.getTimerange)(req);
    const {
      timezone
    } = capabilities;
    (0, _helpers.overwrite)(doc, `aggs.${annotation.id}.date_histogram`, {
      field: timeField,
      min_doc_count: 0,
      time_zone: timezone,
      extended_bounds: {
        min: from.valueOf(),
        max: to.valueOf() - bucketSize * 1000
      },
      ...dateHistogramInterval(intervalString)
    });
    return next(doc);
  };
}