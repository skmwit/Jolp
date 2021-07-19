"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDocSource = createDocSource;

var _common = require("../../common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const DEFAULT_SETTINGS = {
  number_of_shards: 1
};
const DEFAULT_MAPPINGS = {
  _meta: {
    created_by: _common.INDEX_META_DATA_CREATED_BY
  }
};

async function createDocSource(index, mappings, {
  asCurrentUser
}, indexPatternsService) {
  try {
    await createIndex(index, mappings, asCurrentUser);
    await indexPatternsService.createAndSave({
      title: index
    }, true);
    return {
      success: true
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
}

async function createIndex(indexName, mappings, asCurrentUser) {
  const body = {
    mappings: { ...DEFAULT_MAPPINGS,
      ...mappings
    },
    settings: DEFAULT_SETTINGS
  };
  await asCurrentUser.indices.create({
    index: indexName,
    body
  });
}