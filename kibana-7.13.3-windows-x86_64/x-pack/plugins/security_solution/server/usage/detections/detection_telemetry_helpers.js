"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElasticRule = void 0;

var _constants = require("../../../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const isElasticRule = (tags = []) => tags.includes(`${_constants.INTERNAL_IMMUTABLE_KEY}:true`);

exports.isElasticRule = isElasticRule;