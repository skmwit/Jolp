"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCasesClientWithMockSavedObjectsClient = exports.createExternalCasesClientMock = void 0;

var _mocks = require("../../../../../src/core/server/mocks");

var _services = require("../services");

var _fixtures__ = require("../routes/api/__fixtures__");

var _ = require(".");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createExternalCasesClientMock = () => ({
  addComment: jest.fn(),
  create: jest.fn(),
  get: jest.fn(),
  push: jest.fn(),
  getAlerts: jest.fn(),
  getFields: jest.fn(),
  getMappings: jest.fn(),
  getUserActions: jest.fn(),
  update: jest.fn(),
  updateAlertsStatus: jest.fn()
});

exports.createExternalCasesClientMock = createExternalCasesClientMock;

const createCasesClientWithMockSavedObjectsClient = async ({
  savedObjectsClient,
  badAuth = false,
  omitFromContext = []
}) => {
  const esClient = _mocks.elasticsearchServiceMock.createElasticsearchClient();

  const log = _mocks.loggingSystemMock.create().get('case');

  const auth = badAuth ? _fixtures__.authenticationMock.createInvalid() : _fixtures__.authenticationMock.create();
  const caseService = new _services.CaseService(log, auth);
  const caseConfigureServicePlugin = new _services.CaseConfigureService(log);
  const connectorMappingsServicePlugin = new _services.ConnectorMappingsService(log);
  const caseConfigureService = await caseConfigureServicePlugin.setup();
  const connectorMappingsService = await connectorMappingsServicePlugin.setup();
  const userActionService = {
    getUserActions: jest.fn(),
    postUserActions: jest.fn()
  };
  const alertsService = {
    initialize: jest.fn(),
    updateAlertsStatus: jest.fn(),
    getAlerts: jest.fn()
  };
  const casesClient = (0, _.createExternalCasesClient)({
    savedObjectsClient,
    user: auth.getCurrentUser(),
    caseService,
    caseConfigureService,
    connectorMappingsService,
    userActionService,
    alertsService,
    scopedClusterClient: esClient,
    logger: log
  });
  return {
    client: casesClient,
    services: {
      userActionService,
      alertsService
    },
    esClient
  };
};

exports.createCasesClientWithMockSavedObjectsClient = createCasesClientWithMockSavedObjectsClient;