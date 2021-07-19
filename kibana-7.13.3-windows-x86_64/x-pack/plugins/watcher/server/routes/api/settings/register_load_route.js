"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerLoadRoute = registerLoadRoute;

var _index = require("../../../models/settings/index");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// @ts-ignore


function fetchClusterSettings(client) {
  return client.callAsInternalUser('cluster.getSettings', {
    includeDefaults: true,
    filterPath: '**.xpack.notification'
  });
}

function registerLoadRoute({
  router,
  license,
  lib: {
    isEsError
  }
}) {
  router.get({
    path: '/api/watcher/settings',
    validate: false
  }, license.guardApiRoute(async (ctx, request, response) => {
    try {
      const settings = await fetchClusterSettings(ctx.watcher.client);
      return response.ok({
        body: _index.Settings.fromUpstreamJson(settings).downstreamJson
      });
    } catch (e) {
      // Case: Error from Elasticsearch JS client
      if (isEsError(e)) {
        return response.customError({
          statusCode: e.statusCode,
          body: e
        });
      } // Case: default


      throw e;
    }
  }));
}