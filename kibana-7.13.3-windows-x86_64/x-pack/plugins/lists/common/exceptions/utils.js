"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasNestedEntry = exports.hasLargeValueList = exports.hasLargeValueItem = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const hasLargeValueItem = exceptionItems => {
  return exceptionItems.some(exceptionItem => hasLargeValueList(exceptionItem.entries));
};

exports.hasLargeValueItem = hasLargeValueItem;

const hasLargeValueList = entries => {
  const found = entries.filter(({
    type
  }) => type === 'list');
  return found.length > 0;
};

exports.hasLargeValueList = hasLargeValueList;

const hasNestedEntry = entries => {
  const found = entries.filter(({
    type
  }) => type === 'nested');
  return found.length > 0;
};

exports.hasNestedEntry = hasNestedEntry;