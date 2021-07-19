"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSavedQueryRoute = void 0;

var _create_saved_query_request_schema = require("../../../common/schemas/routes/saved_query/create_saved_query_request_schema");

var _types = require("../../../common/types");

var _route_validation = require("../../utils/build_validation/route_validation");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createSavedQueryRoute = router => {
  router.post({
    path: '/internal/osquery/saved_query',
    validate: {
      body: (0, _route_validation.buildRouteValidation)(_create_saved_query_request_schema.createSavedQueryRequestSchema)
    }
  }, async (context, request, response) => {
    const savedObjectsClient = context.core.savedObjects.client;
    const {
      name,
      description,
      platform,
      query
    } = request.body;
    const savedQuerySO = await savedObjectsClient.create(_types.savedQuerySavedObjectType, {
      name,
      description,
      query,
      platform
    });
    return response.ok({
      body: savedQuerySO
    });
  });
};

exports.createSavedQueryRoute = createSavedQueryRoute;