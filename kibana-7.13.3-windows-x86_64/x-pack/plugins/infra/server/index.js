"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugin = plugin;
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _plugin.config;
  }
});
Object.defineProperty(exports, "InfraConfig", {
  enumerable: true,
  get: function () {
    return _plugin.InfraConfig;
  }
});
Object.defineProperty(exports, "InfraPluginSetup", {
  enumerable: true,
  get: function () {
    return _plugin.InfraPluginSetup;
  }
});
Object.defineProperty(exports, "InfraRequestHandlerContext", {
  enumerable: true,
  get: function () {
    return _types.InfraRequestHandlerContext;
  }
});

var _plugin = require("./plugin");

var _types = require("./types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function plugin(context) {
  return new _plugin.InfraServerPlugin(context);
}