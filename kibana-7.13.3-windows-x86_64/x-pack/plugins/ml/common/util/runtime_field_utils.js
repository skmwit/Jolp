"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRuntimeField = isRuntimeField;
exports.isRuntimeMappings = isRuntimeMappings;

var _object_utils = require("./object_utils");

var _common = require("../../../../../src/plugins/data/common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function isRuntimeField(arg) {
  return ((0, _object_utils.isPopulatedObject)(arg, ['type']) && Object.keys(arg).length === 1 || (0, _object_utils.isPopulatedObject)(arg, ['type', 'script']) && Object.keys(arg).length === 2 && (typeof arg.script === 'string' || (0, _object_utils.isPopulatedObject)(arg.script, ['source']) && Object.keys(arg.script).length === 1 && typeof arg.script.source === 'string')) && _common.RUNTIME_FIELD_TYPES.includes(arg.type);
}

function isRuntimeMappings(arg) {
  return (0, _object_utils.isPopulatedObject)(arg) && Object.values(arg).every(d => isRuntimeField(d));
}