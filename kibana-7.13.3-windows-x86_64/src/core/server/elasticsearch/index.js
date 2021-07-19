"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ElasticsearchService: true,
  config: true,
  configSchema: true,
  ElasticsearchConfig: true
};
Object.defineProperty(exports, "ElasticsearchService", {
  enumerable: true,
  get: function () {
    return _elasticsearch_service.ElasticsearchService;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _elasticsearch_config.config;
  }
});
Object.defineProperty(exports, "configSchema", {
  enumerable: true,
  get: function () {
    return _elasticsearch_config.configSchema;
  }
});
Object.defineProperty(exports, "ElasticsearchConfig", {
  enumerable: true,
  get: function () {
    return _elasticsearch_config.ElasticsearchConfig;
  }
});

var _elasticsearch_service = require("./elasticsearch_service");

var _elasticsearch_config = require("./elasticsearch_config");

var _legacy = require("./legacy");

Object.keys(_legacy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _legacy[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _legacy[key];
    }
  });
});