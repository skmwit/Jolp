"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPolicy = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const setPolicy = async (esClient, policy, body) => {
  return (await esClient.transport.request({
    path: `/_ilm/policy/${policy}`,
    method: 'PUT',
    body
  })).body;
};

exports.setPolicy = setPolicy;