"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEndpointArtifactClientMock = exports.getManifestClientMock = void 0;

var _mocks = require("src/core/server/mocks");

var _manifest_client = require("./manifest_client");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getManifestClientMock = savedObjectsClient => {
  if (savedObjectsClient !== undefined) {
    return new _manifest_client.ManifestClient(savedObjectsClient, 'v1');
  }

  return new _manifest_client.ManifestClient(_mocks.savedObjectsClientMock.create(), 'v1');
};

exports.getManifestClientMock = getManifestClientMock;

const createEndpointArtifactClientMock = () => {
  return {
    createArtifact: jest.fn(),
    getArtifact: jest.fn(),
    deleteArtifact: jest.fn()
  };
};

exports.createEndpointArtifactClientMock = createEndpointArtifactClientMock;