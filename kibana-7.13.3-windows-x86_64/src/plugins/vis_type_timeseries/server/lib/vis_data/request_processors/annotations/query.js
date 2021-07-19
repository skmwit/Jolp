"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;

var _get_bucket_size = require("../../helpers/get_bucket_size");

var _get_timerange = require("../../helpers/get_timerange");

var _server = require("../../../../../../data/server");

var _fields_utils = require("../../../../../common/fields_utils");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function query(req, panel, annotation, esQueryConfig, annotationIndex, capabilities, uiSettings) {
  return next => async doc => {
    var _ref, _annotationIndex$inde;

    const barTargetUiSettings = await uiSettings.get(_server.UI_SETTINGS.HISTOGRAM_BAR_TARGET);
    const timeField = (_ref = annotation.time_field || ((_annotationIndex$inde = annotationIndex.indexPattern) === null || _annotationIndex$inde === void 0 ? void 0 : _annotationIndex$inde.timeFieldName)) !== null && _ref !== void 0 ? _ref : '';

    if (panel.use_kibana_indexes) {
      (0, _fields_utils.validateField)(timeField, annotationIndex);
    }

    const {
      bucketSize
    } = (0, _get_bucket_size.getBucketSize)(req, 'auto', capabilities, barTargetUiSettings);
    const {
      from,
      to
    } = (0, _get_timerange.getTimerange)(req);
    doc.size = 0;
    const queries = !annotation.ignore_global_filters ? req.body.query : [];
    const filters = !annotation.ignore_global_filters ? req.body.filters : [];
    doc.query = _server.esQuery.buildEsQuery(annotationIndex.indexPattern, queries, filters, esQueryConfig);
    const timerange = {
      range: {
        [timeField]: {
          gte: from.toISOString(),
          lte: to.subtract(bucketSize, 'seconds').toISOString(),
          format: 'strict_date_optional_time'
        }
      }
    };
    doc.query.bool.must.push(timerange);

    if (annotation.query_string) {
      doc.query.bool.must.push(_server.esQuery.buildEsQuery(annotationIndex.indexPattern, [annotation.query_string], [], esQueryConfig));
    }

    if (!annotation.ignore_panel_filters && panel.filter) {
      doc.query.bool.must.push(_server.esQuery.buildEsQuery(annotationIndex.indexPattern, [panel.filter], [], esQueryConfig));
    }

    if (annotation.fields) {
      const fields = annotation.fields.split(/[,\s]+/) || [];
      fields.forEach(field => {
        doc.query.bool.must.push({
          exists: {
            field
          }
        });
      });
    }

    return next(doc);
  };
}