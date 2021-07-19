"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIndexExists = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const getIndexExists = async (esClient, index) => {
  try {
    const {
      body: response
    } = await esClient.search({
      index,
      size: 0,
      allow_no_indices: true,
      body: {
        terminate_after: 1
      }
    });
    return response._shards.total > 0;
  } catch (err) {
    var _err$body;

    if (((_err$body = err.body) === null || _err$body === void 0 ? void 0 : _err$body.status) === 404) {
      return false;
    } else {
      throw err.body ? err.body : err;
    }
  }
};

exports.getIndexExists = getIndexExists;