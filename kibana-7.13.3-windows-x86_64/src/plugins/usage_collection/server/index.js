"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Collector", {
  enumerable: true,
  get: function () {
    return _collector.Collector;
  }
});
Object.defineProperty(exports, "USAGE_COUNTERS_SAVED_OBJECT_TYPE", {
  enumerable: true,
  get: function () {
    return _usage_counters.USAGE_COUNTERS_SAVED_OBJECT_TYPE;
  }
});
Object.defineProperty(exports, "serializeCounterKey", {
  enumerable: true,
  get: function () {
    return _usage_counters.serializeCounterKey;
  }
});
Object.defineProperty(exports, "UsageCounter", {
  enumerable: true,
  get: function () {
    return _usage_counters.UsageCounter;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _config.config;
  }
});
exports.plugin = void 0;

var _plugin = require("./plugin");

var _collector = require("./collector");

var _usage_counters = require("./usage_counters");

var _config = require("./config");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const plugin = initializerContext => new _plugin.UsageCollectionPlugin(initializerContext);

exports.plugin = plugin;