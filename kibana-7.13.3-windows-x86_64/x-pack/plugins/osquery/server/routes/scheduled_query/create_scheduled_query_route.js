"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createScheduledQueryRoute = void 0;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createScheduledQueryRoute = (router, osqueryContext) => {
  router.post({
    path: '/internal/osquery/scheduled',
    validate: {
      body: _configSchema.schema.object({}, {
        unknowns: 'allow'
      })
    }
  }, async (context, request, response) => {
    const esClient = context.core.elasticsearch.client.asCurrentUser;
    const savedObjectsClient = context.core.savedObjects.client;
    const packagePolicyService = osqueryContext.service.getPackagePolicyService();
    const integration = await (packagePolicyService === null || packagePolicyService === void 0 ? void 0 : packagePolicyService.create(savedObjectsClient, esClient, // @ts-expect-error update types
    request.body));
    return response.ok({
      body: integration
    });
  });
};

exports.createScheduledQueryRoute = createScheduledQueryRoute;