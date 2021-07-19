"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fleetSetupHandler = exports.getFleetStatusHandler = void 0;

var _services = require("../../services");

var _setup = require("../../services/setup");

var _fleet_server = require("../../services/fleet_server");

var _errors = require("../../errors");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getFleetStatusHandler = async (context, request, response) => {
  try {
    const isApiKeysEnabled = await _services.appContextService.getSecurity().authc.apiKeys.areAPIKeysEnabled();
    const isFleetServerSetup = await (0, _fleet_server.hasFleetServers)(_services.appContextService.getInternalUserESClient());
    const missingRequirements = [];

    if (!isApiKeysEnabled) {
      missingRequirements.push('api_keys');
    }

    if (!isFleetServerSetup) {
      missingRequirements.push('fleet_server');
    }

    const body = {
      isReady: missingRequirements.length === 0,
      missing_requirements: missingRequirements
    };
    return response.ok({
      body
    });
  } catch (error) {
    return (0, _errors.defaultIngestErrorHandler)({
      error,
      response
    });
  }
};

exports.getFleetStatusHandler = getFleetStatusHandler;

const fleetSetupHandler = async (context, request, response) => {
  try {
    var _body$nonFatalErrors;

    const soClient = context.core.savedObjects.client;
    const esClient = context.core.elasticsearch.client.asCurrentUser;
    const body = await (0, _setup.setupIngestManager)(soClient, esClient);
    return response.ok({
      body: { ...body,
        nonFatalErrors: (_body$nonFatalErrors = body.nonFatalErrors) === null || _body$nonFatalErrors === void 0 ? void 0 : _body$nonFatalErrors.map(e => {
          var _e$error; // JSONify the error object so it can be displayed properly in the UI


          const error = (_e$error = e.error) !== null && _e$error !== void 0 ? _e$error : e;
          return {
            name: error.name,
            message: error.message
          };
        })
      }
    });
  } catch (error) {
    return (0, _errors.defaultIngestErrorHandler)({
      error,
      response
    });
  }
};

exports.fleetSetupHandler = fleetSetupHandler;