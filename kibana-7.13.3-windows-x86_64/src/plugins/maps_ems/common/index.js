"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TMS_IN_YML_ID: true,
  ORIGIN: true
};
Object.defineProperty(exports, "ORIGIN", {
  enumerable: true,
  get: function () {
    return _origin.ORIGIN;
  }
});
exports.TMS_IN_YML_ID = void 0;

var _ems_defaults = require("./ems_defaults");

Object.keys(_ems_defaults).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ems_defaults[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ems_defaults[key];
    }
  });
});

var _origin = require("./origin");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const TMS_IN_YML_ID = 'TMS in config/kibana.yml';
exports.TMS_IN_YML_ID = TMS_IN_YML_ID;