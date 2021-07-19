"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infraSourceConfigurationSavedObjectType = exports.infraSourceConfigurationSavedObjectName = void 0;

var _9_0_add_new_indexing_strategy_index_names = require("./migrations/7_9_0_add_new_indexing_strategy_index_names");

var _13_0_convert_log_alias_to_log_indices = require("./migrations/7_13_0_convert_log_alias_to_log_indices");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const infraSourceConfigurationSavedObjectName = 'infrastructure-ui-source';
exports.infraSourceConfigurationSavedObjectName = infraSourceConfigurationSavedObjectName;
const infraSourceConfigurationSavedObjectType = {
  name: infraSourceConfigurationSavedObjectName,
  hidden: false,
  namespaceType: 'single',
  management: {
    importableAndExportable: true
  },
  mappings: {
    dynamic: false,
    properties: {}
  },
  migrations: {
    '7.9.0': _9_0_add_new_indexing_strategy_index_names.addNewIndexingStrategyIndexNames,
    '7.13.0': _13_0_convert_log_alias_to_log_indices.convertLogAliasToLogIndices
  }
};
exports.infraSourceConfigurationSavedObjectType = infraSourceConfigurationSavedObjectType;