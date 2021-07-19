"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugin = plugin;
Object.defineProperty(exports, "VisTypeTimeseriesSetup", {
  enumerable: true,
  get: function () {
    return _plugin.VisTypeTimeseriesSetup;
  }
});
Object.defineProperty(exports, "TimeseriesVisData", {
  enumerable: true,
  get: function () {
    return _types.TimeseriesVisData;
  }
});
Object.defineProperty(exports, "isVisSeriesData", {
  enumerable: true,
  get: function () {
    return _types.isVisSeriesData;
  }
});
Object.defineProperty(exports, "isVisTableData", {
  enumerable: true,
  get: function () {
    return _types.isVisTableData;
  }
});
exports.config = void 0;

var _config = require("./config");

var _plugin = require("./plugin");

var _types = require("../common/types");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const config = {
  deprecations: ({
    unused,
    renameFromRoot
  }) => [// In Kibana v7.8 plugin id was renamed from 'metrics' to 'vis_type_timeseries':
  renameFromRoot('metrics.enabled', 'vis_type_timeseries.enabled', {
    silent: true
  }), renameFromRoot('metrics.chartResolution', 'vis_type_timeseries.chartResolution', {
    silent: true
  }), renameFromRoot('metrics.minimumBucketSize', 'vis_type_timeseries.minimumBucketSize', {
    silent: true
  }), // Unused properties which should be removed after releasing Kibana v8.0:
  unused('chartResolution'), unused('minimumBucketSize')],
  schema: _config.config
};
exports.config = config;

function plugin(initializerContext) {
  return new _plugin.VisTypeTimeseriesPlugin(initializerContext);
}