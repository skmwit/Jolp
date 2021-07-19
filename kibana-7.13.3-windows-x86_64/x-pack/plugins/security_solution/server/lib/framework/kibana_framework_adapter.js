"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapRequest = wrapRequest;
exports.KibanaBackendFrameworkAdapter = void 0;

var _server = require("../../../../../../src/plugins/data/server");

var _types = require("./types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class KibanaBackendFrameworkAdapter {
  async callWithRequest(req, endpoint, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params) {
    const {
      elasticsearch,
      uiSettings
    } = req.context.core;
    const includeFrozen = await uiSettings.client.get(_server.UI_SETTINGS.SEARCH_INCLUDE_FROZEN);
    const maxConcurrentShardRequests = endpoint === 'msearch' ? await uiSettings.client.get(_server.UI_SETTINGS.COURIER_MAX_CONCURRENT_SHARD_REQUESTS) : 0;
    return elasticsearch.legacy.client.callAsCurrentUser(endpoint, { ...params,
      ignore_throttled: !includeFrozen,
      ...(maxConcurrentShardRequests > 0 ? {
        max_concurrent_shard_requests: maxConcurrentShardRequests
      } : {})
    });
  }

  getIndexPatternsService(request) {
    return new _server.IndexPatternsFetcher(request.context.core.elasticsearch.client.asCurrentUser, true);
  }

}

exports.KibanaBackendFrameworkAdapter = KibanaBackendFrameworkAdapter;

function wrapRequest(request, context, user) {
  return {
    [_types.internalFrameworkRequest]: request,
    body: request.body,
    context,
    user
  };
}