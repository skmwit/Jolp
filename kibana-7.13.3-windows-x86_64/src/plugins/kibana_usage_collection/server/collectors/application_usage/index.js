"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "registerApplicationUsageCollector", {
  enumerable: true,
  get: function () {
    return _telemetry_application_usage_collector.registerApplicationUsageCollector;
  }
});
Object.defineProperty(exports, "migrateTransactionalDocs", {
  enumerable: true,
  get: function () {
    return _rollups.rollDailyData;
  }
});

var _telemetry_application_usage_collector = require("./telemetry_application_usage_collector");

var _rollups = require("./rollups");