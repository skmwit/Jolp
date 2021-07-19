"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDeprecationsForGlobalSettings = exports.getDeprecationsFor = void 0;

var _config = require("@kbn/config");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function collectDeprecations(provider, settings, path) {
  const deprecations = provider(_config.configDeprecationFactory);
  const deprecationMessages = [];
  const migrated = (0, _config.applyDeprecations)(settings, deprecations.map(deprecation => ({
    deprecation,
    path
  })), () => ({
    message
  }) => deprecationMessages.push(message));
  return {
    messages: deprecationMessages,
    migrated
  };
}

const getDeprecationsFor = ({
  provider,
  settings = {},
  path
}) => {
  return collectDeprecations(provider, {
    [path]: settings
  }, path);
};

exports.getDeprecationsFor = getDeprecationsFor;

const getDeprecationsForGlobalSettings = ({
  provider,
  settings = {}
}) => {
  return collectDeprecations(provider, settings, '');
};

exports.getDeprecationsForGlobalSettings = getDeprecationsForGlobalSettings;