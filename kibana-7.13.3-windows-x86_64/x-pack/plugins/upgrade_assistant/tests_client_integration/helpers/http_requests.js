"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

var _sinon = _interopRequireDefault(require("sinon"));

var _constants = require("../../common/constants");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// Register helpers to mock HTTP Requests


const registerHttpRequestMockHelpers = server => {
  const setLoadStatusResponse = (response, error) => {
    const status = error ? error.statusCode || 400 : 200;
    const body = error ? error : response;
    server.respondWith('GET', `${_constants.API_BASE_PATH}/status`, [status, {
      'Content-Type': 'application/json'
    }, JSON.stringify(body)]);
  };

  const setLoadDeprecationLoggingResponse = (response, error) => {
    const status = error ? error.statusCode || 400 : 200;
    const body = error ? error : response;
    server.respondWith('GET', `${_constants.API_BASE_PATH}/deprecation_logging`, [status, {
      'Content-Type': 'application/json'
    }, JSON.stringify(body)]);
  };

  const setUpdateDeprecationLoggingResponse = (response, error) => {
    const status = error ? error.statusCode || 400 : 200;
    const body = error ? error : response;
    server.respondWith('PUT', `${_constants.API_BASE_PATH}/deprecation_logging`, [status, {
      'Content-Type': 'application/json'
    }, JSON.stringify(body)]);
  };

  const setUpdateIndexSettingsResponse = response => {
    server.respondWith('POST', `${_constants.API_BASE_PATH}/:indexName/index_settings`, [200, {
      'Content-Type': 'application/json'
    }, JSON.stringify(response)]);
  };

  return {
    setLoadStatusResponse,
    setLoadDeprecationLoggingResponse,
    setUpdateDeprecationLoggingResponse,
    setUpdateIndexSettingsResponse
  };
};

const init = () => {
  const server = _sinon.default.fakeServer.create();

  server.respondImmediately = true; // Define default response for unhandled requests.
  // We make requests to APIs which don't impact the component under test, e.g. UI metric telemetry,
  // and we can mock them all with a 200 instead of mocking each one individually.

  server.respondWith([200, {}, 'DefaultMockedResponse']);
  const httpRequestsMockHelpers = registerHttpRequestMockHelpers(server);
  return {
    server,
    httpRequestsMockHelpers
  };
};

exports.init = init;