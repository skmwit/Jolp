"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSavedQueryRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _types = require("../../../common/types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const deleteSavedQueryRoute = router => {
  router.delete({
    path: '/internal/osquery/saved_query',
    validate: {
      body: _configSchema.schema.object({}, {
        unknowns: 'allow'
      })
    }
  }, async (context, request, response) => {
    const savedObjectsClient = context.core.savedObjects.client; // @ts-expect-error update types

    const {
      savedQueryIds
    } = request.body;
    await Promise.all(savedQueryIds.map( // @ts-expect-error update types
    async savedQueryId => await savedObjectsClient.delete(_types.savedQuerySavedObjectType, savedQueryId, {
      refresh: 'wait_for'
    })));
    return response.ok({
      body: savedQueryIds
    });
  });
};

exports.deleteSavedQueryRoute = deleteSavedQueryRoute;