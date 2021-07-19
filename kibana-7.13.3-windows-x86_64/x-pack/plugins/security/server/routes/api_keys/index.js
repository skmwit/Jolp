"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineApiKeysRoutes = defineApiKeysRoutes;

var _create = require("./create");

var _enabled = require("./enabled");

var _get = require("./get");

var _invalidate = require("./invalidate");

var _privileges = require("./privileges");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function defineApiKeysRoutes(params) {
  (0, _enabled.defineEnabledApiKeysRoutes)(params);
  (0, _get.defineGetApiKeysRoutes)(params);
  (0, _create.defineCreateApiKeyRoutes)(params);
  (0, _privileges.defineCheckPrivilegesRoutes)(params);
  (0, _invalidate.defineInvalidateApiKeysRoutes)(params);
}