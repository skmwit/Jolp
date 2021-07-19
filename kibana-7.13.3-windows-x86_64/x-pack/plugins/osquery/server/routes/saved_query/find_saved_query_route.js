"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSavedQueryRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _types = require("../../../common/types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const findSavedQueryRoute = router => {
  router.get({
    path: '/internal/osquery/saved_query',
    validate: {
      query: _configSchema.schema.object({}, {
        unknowns: 'allow'
      })
    }
  }, async (context, request, response) => {
    const savedObjectsClient = context.core.savedObjects.client;
    const savedQueries = await savedObjectsClient.find({
      type: _types.savedQuerySavedObjectType,
      // @ts-expect-error update types
      page: parseInt(request.query.pageIndex, 10) + 1,
      // @ts-expect-error update types
      perPage: request.query.pageSize,
      // @ts-expect-error update types
      sortField: request.query.sortField,
      // @ts-expect-error update types
      sortOrder: request.query.sortDirection
    });
    return response.ok({
      body: savedQueries
    });
  });
};

exports.findSavedQueryRoute = findSavedQueryRoute;