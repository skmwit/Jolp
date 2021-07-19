"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDeactivateRoute = registerDeactivateRoute;

var _configSchema = require("@kbn/config-schema");

var _lodash = require("lodash");

var _index = require("../../../models/watch_status/index");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// @ts-ignore


const paramsSchema = _configSchema.schema.object({
  watchId: _configSchema.schema.string()
});

function deactivateWatch(dataClient, watchId) {
  return dataClient.callAsCurrentUser('watcher.deactivateWatch', {
    id: watchId
  });
}

function registerDeactivateRoute({
  router,
  license,
  lib: {
    isEsError
  }
}) {
  router.put({
    path: '/api/watcher/watch/{watchId}/deactivate',
    validate: {
      params: paramsSchema
    }
  }, license.guardApiRoute(async (ctx, request, response) => {
    const {
      watchId
    } = request.params;

    try {
      const hit = await deactivateWatch(ctx.watcher.client, watchId);
      const watchStatusJson = (0, _lodash.get)(hit, 'status');
      const json = {
        id: watchId,
        watchStatusJson
      };

      const watchStatus = _index.WatchStatus.fromUpstreamJson(json);

      return response.ok({
        body: {
          watchStatus: watchStatus.downstreamJson
        }
      });
    } catch (e) {
      // Case: Error from Elasticsearch JS client
      if (isEsError(e)) {
        const body = e.statusCode === 404 ? `Watch with id = ${watchId} not found` : e;
        return response.customError({
          statusCode: e.statusCode,
          body
        });
      } // Case: default


      throw e;
    }
  }));
}