"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerListFieldsRoute = registerListFieldsRoute;

var _configSchema = require("@kbn/config-schema");

var _index = require("../../models/fields/index");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// @ts-ignore


const bodySchema = _configSchema.schema.object({
  indexes: _configSchema.schema.arrayOf(_configSchema.schema.string())
});

function fetchFields(dataClient, indexes) {
  const params = {
    index: indexes,
    fields: ['*'],
    ignoreUnavailable: true,
    allowNoIndices: true,
    ignore: 404
  };
  return dataClient.callAsCurrentUser('fieldCaps', params);
}

function registerListFieldsRoute({
  router,
  license,
  lib: {
    isEsError
  }
}) {
  router.post({
    path: '/api/watcher/fields',
    validate: {
      body: bodySchema
    }
  }, license.guardApiRoute(async (ctx, request, response) => {
    const {
      indexes
    } = request.body;

    try {
      const fieldsResponse = await fetchFields(ctx.watcher.client, indexes);
      const json = fieldsResponse.status === 404 ? {
        fields: []
      } : fieldsResponse;

      const fields = _index.Fields.fromUpstreamJson(json);

      return response.ok({
        body: fields.downstreamJson
      });
    } catch (e) {
      // Case: Error from Elasticsearch JS client
      if (isEsError(e)) {
        return response.customError({
          statusCode: e.statusCode,
          body: {
            message: e.message
          }
        });
      } // Case: default


      throw e;
    }
  }));
}