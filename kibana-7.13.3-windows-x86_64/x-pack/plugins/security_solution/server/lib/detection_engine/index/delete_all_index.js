"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAllIndex = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const deleteAllIndex = async (esClient, pattern, maxAttempts = 5) => {
  for (let attempt = 1;; attempt++) {
    if (attempt > maxAttempts) {
      throw new Error(`Failed to delete indexes with pattern [${pattern}] after ${maxAttempts} attempts`);
    } // resolve pattern to concrete index names


    const {
      body: resp
    } = await esClient.indices.getAlias({
      index: pattern
    }, {
      ignore: [404]
    }); // @ts-expect-error status doesn't exist on response

    if (resp.status === 404) {
      return true;
    }

    const indices = Object.keys(resp); // if no indexes exits then we're done with this pattern

    if (!indices.length) {
      return true;
    } // delete the concrete indexes we found and try again until this pattern resolves to no indexes


    await esClient.indices.delete({
      index: indices,
      ignore_unavailable: true
    });
  }
};

exports.deleteAllIndex = deleteAllIndex;