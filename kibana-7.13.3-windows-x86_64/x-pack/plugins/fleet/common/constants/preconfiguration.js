"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REQUIRED_PACKAGES = exports.DEFAULT_PACKAGES = exports.DEFAULT_FLEET_SERVER_AGENT_POLICY = exports.DEFAULT_AGENT_POLICY = exports.PRECONFIGURATION_LATEST_KEYWORD = exports.PRECONFIGURATION_DELETION_RECORD_SAVED_OBJECT_TYPE = void 0;

var _epm = require("./epm");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const PRECONFIGURATION_DELETION_RECORD_SAVED_OBJECT_TYPE = 'fleet-preconfiguration-deletion-record';
exports.PRECONFIGURATION_DELETION_RECORD_SAVED_OBJECT_TYPE = PRECONFIGURATION_DELETION_RECORD_SAVED_OBJECT_TYPE;
const PRECONFIGURATION_LATEST_KEYWORD = 'latest';
exports.PRECONFIGURATION_LATEST_KEYWORD = PRECONFIGURATION_LATEST_KEYWORD;
const DEFAULT_AGENT_POLICY = {
  name: 'Default policy',
  namespace: 'default',
  description: 'Default agent policy created by Kibana',
  package_policies: [{
    name: `${_epm.defaultPackages.System}-1`,
    package: {
      name: _epm.defaultPackages.System
    }
  }],
  is_default: true,
  is_managed: false,
  monitoring_enabled: ['logs', 'metrics']
};
exports.DEFAULT_AGENT_POLICY = DEFAULT_AGENT_POLICY;
const DEFAULT_FLEET_SERVER_AGENT_POLICY = {
  name: 'Default Fleet Server policy',
  namespace: 'default',
  description: 'Default Fleet Server agent policy created by Kibana',
  package_policies: [{
    name: `${_epm.defaultPackages.FleetServer}-1`,
    package: {
      name: _epm.defaultPackages.FleetServer
    }
  }],
  is_default: false,
  is_default_fleet_server: true,
  is_managed: false,
  monitoring_enabled: ['logs', 'metrics']
};
exports.DEFAULT_FLEET_SERVER_AGENT_POLICY = DEFAULT_FLEET_SERVER_AGENT_POLICY;
const DEFAULT_PACKAGES = Object.values(_epm.defaultPackages).map(name => ({
  name,
  version: PRECONFIGURATION_LATEST_KEYWORD
})); // these are currently identical. we can separate if they later diverge

exports.DEFAULT_PACKAGES = DEFAULT_PACKAGES;
const REQUIRED_PACKAGES = DEFAULT_PACKAGES;
exports.REQUIRED_PACKAGES = REQUIRED_PACKAGES;