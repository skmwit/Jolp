"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  RowRendererId: true,
  FlowDirection: true
};
exports.FlowDirection = exports.RowRendererId = void 0;

var _events = require("./events");

Object.keys(_events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _events[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _events[key];
    }
  });
});
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

let RowRendererId;
exports.RowRendererId = RowRendererId;

(function (RowRendererId) {
  RowRendererId["alerts"] = "alerts";
  RowRendererId["auditd"] = "auditd";
  RowRendererId["auditd_file"] = "auditd_file";
  RowRendererId["library"] = "library";
  RowRendererId["netflow"] = "netflow";
  RowRendererId["plain"] = "plain";
  RowRendererId["registry"] = "registry";
  RowRendererId["suricata"] = "suricata";
  RowRendererId["system"] = "system";
  RowRendererId["system_dns"] = "system_dns";
  RowRendererId["system_endgame_process"] = "system_endgame_process";
  RowRendererId["system_file"] = "system_file";
  RowRendererId["system_fim"] = "system_fim";
  RowRendererId["system_security_event"] = "system_security_event";
  RowRendererId["system_socket"] = "system_socket";
  RowRendererId["zeek"] = "zeek";
})(RowRendererId || (exports.RowRendererId = RowRendererId = {}));

let FlowDirection;
exports.FlowDirection = FlowDirection;

(function (FlowDirection) {
  FlowDirection["uniDirectional"] = "uniDirectional";
  FlowDirection["biDirectional"] = "biDirectional";
})(FlowDirection || (exports.FlowDirection = FlowDirection = {}));