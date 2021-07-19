"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CasesClientHandler", {
  enumerable: true,
  get: function () {
    return _client.CasesClientHandler;
  }
});
Object.defineProperty(exports, "CasesClient", {
  enumerable: true,
  get: function () {
    return _types.CasesClient;
  }
});
exports.createExternalCasesClient = void 0;

var _client = require("./client");

var _types = require("./types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Create a CasesClientHandler to external services (other plugins).
 */


const createExternalCasesClient = clientArgs => {
  const client = new _client.CasesClientHandler(clientArgs);
  return client;
};

exports.createExternalCasesClient = createExternalCasesClient;