"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAPMLifecycleRuleType = void 0;

var _server = require("../../../../rule_registry/server");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createAPMLifecycleRuleType = (0, _server.createLifecycleRuleTypeFactory)();
exports.createAPMLifecycleRuleType = createAPMLifecycleRuleType;