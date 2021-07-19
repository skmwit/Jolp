"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePackRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _types = require("../../../common/types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const updatePackRoute = router => {
  router.put({
    path: '/internal/osquery/pack/{id}',
    validate: {
      params: _configSchema.schema.object({}, {
        unknowns: 'allow'
      }),
      body: _configSchema.schema.object({}, {
        unknowns: 'allow'
      })
    }
  }, async (context, request, response) => {
    const savedObjectsClient = context.core.savedObjects.client; // @ts-expect-error update types

    const {
      name,
      description,
      queries
    } = request.body; // @ts-expect-error update types

    const updatedReferences = queries.map(savedQuery => ({
      type: _types.savedQuerySavedObjectType,
      id: savedQuery.id,
      name: savedQuery.name
    })); // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const {
      attributes,
      references,
      ...restSO
    } = await savedObjectsClient.update(_types.packSavedObjectType, // @ts-expect-error update types
    request.params.id, {
      name,
      description,
      // @ts-expect-error update types
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      queries: queries.map(({
        id,
        query,
        ...rest
      }) => rest)
    }, {
      references: updatedReferences
    });
    return response.ok({
      body: { ...restSO,
        ...attributes,
        // @ts-expect-error update types
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        queries: queries.map(({
          id,
          ...rest
        }) => rest)
      }
    });
  });
};

exports.updatePackRoute = updatePackRoute;