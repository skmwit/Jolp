"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  PLUGIN_ID: true,
  PLUGIN_NAME: true
};
exports.PLUGIN_NAME = exports.PLUGIN_ID = void 0;

var _labs = require("./labs");

Object.keys(_labs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _labs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _labs[key];
    }
  });
});

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const PLUGIN_ID = 'presentationUtil';
exports.PLUGIN_ID = PLUGIN_ID;
const PLUGIN_NAME = 'presentationUtil';
exports.PLUGIN_NAME = PLUGIN_NAME;