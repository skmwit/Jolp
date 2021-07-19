"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTrustedAppsSummaryRouteHandler = exports.getTrustedAppsUpdateRouteHandler = exports.getTrustedAppsCreateRouteHandler = exports.getTrustedAppsListRouteHandler = exports.getTrustedAppsGetOneHandler = exports.getTrustedAppsDeleteRouteHandler = void 0;

var _service = require("./service");

var _errors = require("./errors");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getBodyAfterFeatureFlagCheck = (body, endpointAppContext) => {
  const isTrustedAppsByPolicyEnabled = endpointAppContext.experimentalFeatures.trustedAppsByPolicyEnabled;
  return { ...body,
    ...(isTrustedAppsByPolicyEnabled ? body.effectScope : {
      effectSctope: {
        type: 'policy:all'
      }
    })
  };
};

const exceptionListClientFromContext = context => {
  var _context$lists;

  const exceptionLists = (_context$lists = context.lists) === null || _context$lists === void 0 ? void 0 : _context$lists.getExceptionListClient();

  if (!exceptionLists) {
    throw new Error('Exception List client not found');
  }

  return exceptionLists;
};

const errorHandler = (logger, res, error) => {
  if (error instanceof _errors.TrustedAppNotFoundError) {
    logger.error(error);
    return res.notFound({
      body: error
    });
  }

  if (error instanceof _errors.TrustedAppVersionConflictError) {
    logger.error(error);
    return res.conflict({
      body: error
    });
  } // Kibana will take care of `500` errors when the handler `throw`'s, including logging the error


  throw error;
};

const getTrustedAppsDeleteRouteHandler = endpointAppContext => {
  const logger = endpointAppContext.logFactory.get('trusted_apps');
  return async (context, req, res) => {
    try {
      await (0, _service.deleteTrustedApp)(exceptionListClientFromContext(context), req.params);
      return res.ok();
    } catch (error) {
      return errorHandler(logger, res, error);
    }
  };
};

exports.getTrustedAppsDeleteRouteHandler = getTrustedAppsDeleteRouteHandler;

const getTrustedAppsGetOneHandler = endpointAppContext => {
  const logger = endpointAppContext.logFactory.get('trusted_apps');
  return async (context, req, res) => {
    try {
      return res.ok({
        body: await (0, _service.getTrustedApp)(exceptionListClientFromContext(context), req.params.id)
      });
    } catch (error) {
      return errorHandler(logger, res, error);
    }
  };
};

exports.getTrustedAppsGetOneHandler = getTrustedAppsGetOneHandler;

const getTrustedAppsListRouteHandler = endpointAppContext => {
  const logger = endpointAppContext.logFactory.get('trusted_apps');
  return async (context, req, res) => {
    try {
      return res.ok({
        body: await (0, _service.getTrustedAppsList)(exceptionListClientFromContext(context), req.query)
      });
    } catch (error) {
      return errorHandler(logger, res, error);
    }
  };
};

exports.getTrustedAppsListRouteHandler = getTrustedAppsListRouteHandler;

const getTrustedAppsCreateRouteHandler = endpointAppContext => {
  const logger = endpointAppContext.logFactory.get('trusted_apps');
  return async (context, req, res) => {
    try {
      const body = getBodyAfterFeatureFlagCheck(req.body, endpointAppContext);
      return res.ok({
        body: await (0, _service.createTrustedApp)(exceptionListClientFromContext(context), body)
      });
    } catch (error) {
      return errorHandler(logger, res, error);
    }
  };
};

exports.getTrustedAppsCreateRouteHandler = getTrustedAppsCreateRouteHandler;

const getTrustedAppsUpdateRouteHandler = endpointAppContext => {
  const logger = endpointAppContext.logFactory.get('trusted_apps');
  return async (context, req, res) => {
    try {
      const body = getBodyAfterFeatureFlagCheck(req.body, endpointAppContext);
      return res.ok({
        body: await (0, _service.updateTrustedApp)(exceptionListClientFromContext(context), req.params.id, body)
      });
    } catch (error) {
      return errorHandler(logger, res, error);
    }
  };
};

exports.getTrustedAppsUpdateRouteHandler = getTrustedAppsUpdateRouteHandler;

const getTrustedAppsSummaryRouteHandler = endpointAppContext => {
  const logger = endpointAppContext.logFactory.get('trusted_apps');
  return async (context, req, res) => {
    try {
      return res.ok({
        body: await (0, _service.getTrustedAppsSummary)(exceptionListClientFromContext(context))
      });
    } catch (error) {
      return errorHandler(logger, res, error);
    }
  };
};

exports.getTrustedAppsSummaryRouteHandler = getTrustedAppsSummaryRouteHandler;