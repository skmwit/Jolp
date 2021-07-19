"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMockVersionInfo = void 0;

var _constants = require("../../../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getMockVersionInfo = () => {
  const currentMajor = _constants.mockKibanaSemverVersion.major;
  return {
    currentVersion: _constants.mockKibanaSemverVersion,
    currentMajor,
    prevMajor: currentMajor - 1,
    nextMajor: currentMajor + 1
  };
};

exports.getMockVersionInfo = getMockVersionInfo;