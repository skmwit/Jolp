"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  LegacyClusterClient: true,
  LegacyElasticsearchErrorHelpers: true
};
Object.defineProperty(exports, "LegacyClusterClient", {
  enumerable: true,
  get: function () {
    return _cluster_client.LegacyClusterClient;
  }
});
Object.defineProperty(exports, "LegacyElasticsearchErrorHelpers", {
  enumerable: true,
  get: function () {
    return _errors.LegacyElasticsearchErrorHelpers;
  }
});

var _cluster_client = require("./cluster_client");

var _errors = require("./errors");

var _api_types = require("./api_types");

Object.keys(_api_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _api_types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api_types[key];
    }
  });
});