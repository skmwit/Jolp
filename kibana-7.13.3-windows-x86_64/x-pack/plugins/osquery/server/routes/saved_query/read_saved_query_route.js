"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readSavedQueryRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _types = require("../../../common/types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const readSavedQueryRoute = router => {
  router.get({
    path: '/internal/osquery/saved_query/{id}',
    validate: {
      params: _configSchema.schema.object({}, {
        unknowns: 'allow'
      })
    }
  }, async (context, request, response) => {
    const savedObjectsClient = context.core.savedObjects.client;
    const {
      attributes,
      ...savedQuery
    } = await savedObjectsClient.get(_types.savedQuerySavedObjectType, // @ts-expect-error update types
    request.params.id);
    return response.ok({
      body: { ...savedQuery,
        // @ts-expect-error update types
        ...attributes
      }
    });
  });
};

exports.readSavedQueryRoute = readSavedQueryRoute;