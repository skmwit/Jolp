"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEsFilter = getEsFilter;

var _config = require("./local_ui_filters/config");

var _queries = require("../../../utils/queries");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function getEsFilter(uiFilters) {
  const localFilterValues = uiFilters;

  const mappedFilters = _config.localUIFilterNames.filter(name => name in localFilterValues).map(filterName => {
    const field = _config.localUIFilters[filterName];
    const value = localFilterValues[filterName];
    return {
      terms: {
        [field.fieldName]: value
      }
    };
  });

  return [...mappedFilters, ...(0, _queries.environmentQuery)(uiFilters.environment)];
}