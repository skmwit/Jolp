"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseRuleFieldMap = void 0;

var _ecs_field_map = require("./ecs_field_map");

var _pick_with_patterns = require("../pick_with_patterns");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const baseRuleFieldMap = { ...(0, _pick_with_patterns.pickWithPatterns)(_ecs_field_map.ecsFieldMap, '@timestamp', 'event.kind', 'event.action', 'rule.uuid', 'rule.id', 'rule.name', 'rule.category', 'tags'),
  'kibana.rac.producer': {
    type: 'keyword'
  },
  'kibana.rac.alert.uuid': {
    type: 'keyword'
  },
  'kibana.rac.alert.id': {
    type: 'keyword'
  },
  'kibana.rac.alert.start': {
    type: 'date'
  },
  'kibana.rac.alert.end': {
    type: 'date'
  },
  'kibana.rac.alert.duration.us': {
    type: 'long'
  },
  'kibana.rac.alert.severity.level': {
    type: 'keyword'
  },
  'kibana.rac.alert.severity.value': {
    type: 'long'
  },
  'kibana.rac.alert.status': {
    type: 'keyword'
  }
};
exports.baseRuleFieldMap = baseRuleFieldMap;