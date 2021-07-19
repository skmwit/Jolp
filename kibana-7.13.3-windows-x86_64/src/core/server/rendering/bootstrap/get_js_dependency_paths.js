"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJsDependencyPaths = void 0;

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
const getJsDependencyPaths = (regularBundlePath, bundlePaths) => {
  return [...UiSharedDeps.jsDepFilenames.map(filename => `${regularBundlePath}/kbn-ui-shared-deps/${filename}`), `${regularBundlePath}/kbn-ui-shared-deps/${UiSharedDeps.jsFilename}`, `${regularBundlePath}/core/core.entry.js`, ...[...bundlePaths.values()].map(plugin => plugin.bundlePath)];
};

exports.getJsDependencyPaths = getJsDependencyPaths;