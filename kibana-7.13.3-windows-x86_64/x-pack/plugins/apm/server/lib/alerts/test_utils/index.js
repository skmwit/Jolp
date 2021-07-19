"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRuleTypeMocks = void 0;

var _rxjs = require("rxjs");

var _mocks = require("src/core/server/mocks");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createRuleTypeMocks = () => {
  let alertExecutor;
  const mockedConfig$ = (0, _rxjs.of)({
    /* eslint-disable @typescript-eslint/naming-convention */
    'apm_oss.errorIndices': 'apm-*',
    'apm_oss.transactionIndices': 'apm-*'
    /* eslint-enable @typescript-eslint/naming-convention */

  });
  const loggerMock = {
    debug: jest.fn(),
    warn: jest.fn(),
    error: jest.fn()
  };
  const registry = {
    registerType: ({
      executor
    }) => {
      alertExecutor = executor;
    }
  };
  const scheduleActions = jest.fn();
  const services = {
    scopedClusterClient: _mocks.elasticsearchServiceMock.createScopedClusterClient(),
    scopedRuleRegistryClient: {
      bulkIndex: jest.fn()
    },
    alertInstanceFactory: jest.fn(() => ({
      scheduleActions
    })),
    alertWithLifecycle: jest.fn(),
    logger: loggerMock
  };
  return {
    dependencies: {
      registry,
      config$: mockedConfig$,
      logger: loggerMock
    },
    services,
    scheduleActions,
    executor: async ({
      params
    }) => {
      return alertExecutor({
        services,
        params,
        startedAt: new Date()
      });
    }
  };
};

exports.createRuleTypeMocks = createRuleTypeMocks;