"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStylesheetPaths = exports.getSettingValue = void 0;

var UiSharedDeps = _interopRequireWildcard(require("@kbn/ui-shared-deps"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const getSettingValue = (settingName, settings, convert) => {
  var _settings$user$settin, _settings$user, _settings$user$settin2;

  const value = (_settings$user$settin = (_settings$user = settings.user) === null || _settings$user === void 0 ? void 0 : (_settings$user$settin2 = _settings$user[settingName]) === null || _settings$user$settin2 === void 0 ? void 0 : _settings$user$settin2.userValue) !== null && _settings$user$settin !== void 0 ? _settings$user$settin : settings.defaults[settingName].value;
  return convert(value);
};

exports.getSettingValue = getSettingValue;

const getStylesheetPaths = ({
  themeVersion,
  darkMode,
  basePath,
  buildNum
}) => {
  const regularBundlePath = `${basePath}/${buildNum}/bundles`;
  return [`${regularBundlePath}/kbn-ui-shared-deps/${UiSharedDeps.baseCssDistFilename}`, ...(darkMode ? [themeVersion === 'v7' ? `${regularBundlePath}/kbn-ui-shared-deps/${UiSharedDeps.darkCssDistFilename}` : `${regularBundlePath}/kbn-ui-shared-deps/${UiSharedDeps.darkV8CssDistFilename}`, `${basePath}/node_modules/@kbn/ui-framework/dist/kui_dark.css`, `${basePath}/ui/legacy_dark_theme.css`] : [themeVersion === 'v7' ? `${regularBundlePath}/kbn-ui-shared-deps/${UiSharedDeps.lightCssDistFilename}` : `${regularBundlePath}/kbn-ui-shared-deps/${UiSharedDeps.lightV8CssDistFilename}`, `${basePath}/node_modules/@kbn/ui-framework/dist/kui_light.css`, `${basePath}/ui/legacy_light_theme.css`])];
};

exports.getStylesheetPaths = getStylesheetPaths;