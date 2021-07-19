"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSplits = getSplits;

var _color = _interopRequireDefault(require("color"));

var _calculate_label = require("../../../../common/calculate_label");

var _lodash = _interopRequireDefault(require("lodash"));

var _get_last_metric = require("./get_last_metric");

var _format_key = require("./format_key");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const getTimeSeries = (resp, series) => _lodash.default.get(resp, `aggregations.timeseries`) || _lodash.default.get(resp, `aggregations.${series.id}.timeseries`);

async function getSplits(resp, panel, series, meta, extractFields) {
  if (!meta) {
    meta = _lodash.default.get(resp, `aggregations.${series.id}.meta`);
  }

  const color = new _color.default(series.color);
  const metric = (0, _get_last_metric.getLastMetric)(series);

  const buckets = _lodash.default.get(resp, `aggregations.${series.id}.buckets`);

  const fieldsForSeries = meta.index ? await extractFields({
    id: meta.index
  }) : [];
  const splitByLabel = (0, _calculate_label.calculateLabel)(metric, series.metrics, fieldsForSeries);

  if (buckets) {
    if (Array.isArray(buckets)) {
      return buckets.map(bucket => {
        bucket.id = `${series.id}:${bucket.key}`;
        bucket.splitByLabel = splitByLabel;
        bucket.label = (0, _format_key.formatKey)(bucket.key, series);
        bucket.labelFormatted = bucket.key_as_string ? (0, _format_key.formatKey)(bucket.key_as_string, series) : '';
        bucket.color = color.string();
        bucket.meta = meta;
        return bucket;
      });
    }

    if (series.split_mode === 'filters' && _lodash.default.isPlainObject(buckets)) {
      return series.split_filters.map(filter => {
        const bucket = _lodash.default.get(resp, `aggregations.${series.id}.buckets.${filter.id}`);

        bucket.id = `${series.id}:${filter.id}`;
        bucket.key = filter.id;
        bucket.splitByLabel = splitByLabel;
        bucket.color = filter.color;
        bucket.label = filter.label || filter.filter.query || '*';
        bucket.meta = meta;
        return bucket;
      });
    }
  }

  const timeseries = getTimeSeries(resp, series);
  const mergeObj = {
    timeseries
  };
  series.metrics.filter(m => /_bucket/.test(m.type)).forEach(m => {
    mergeObj[m.id] = _lodash.default.get(resp, `aggregations.${series.id}.${m.id}`);
  });
  return [{
    id: series.id,
    splitByLabel,
    label: series.label || splitByLabel,
    color: color.string(),
    ...mergeObj,
    meta
  }];
}