"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observabilityRuleFieldMap = void 0;

var _common = require("../../../rule_registry/common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const observabilityRuleFieldMap = { ...(0, _common.pickWithPatterns)(_common.ecsFieldMap, 'host.name', 'service.name'),
  'kibana.observability.evaluation.value': {
    type: 'scaled_float',
    scaling_factor: 1000
  },
  'kibana.observability.evaluation.threshold': {
    type: 'scaled_float',
    scaling_factor: 1000
  }
};
exports.observabilityRuleFieldMap = observabilityRuleFieldMap;