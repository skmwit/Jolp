"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPackRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _types = require("../../../common/types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createPackRoute = router => {
  router.post({
    path: '/internal/osquery/pack',
    validate: {
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

    const references = queries.map(savedQuery => ({
      type: _types.savedQuerySavedObjectType,
      id: savedQuery.id,
      name: savedQuery.name
    })); // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const {
      attributes,
      references: _,
      ...restSO
    } = await savedObjectsClient.create(_types.packSavedObjectType, {
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
      references
    });
    return response.ok({
      body: { ...restSO,
        ...attributes,
        queries
      }
    });
  });
};

exports.createPackRoute = createPackRoute;