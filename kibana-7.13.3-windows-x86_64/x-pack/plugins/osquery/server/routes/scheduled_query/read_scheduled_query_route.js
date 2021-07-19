"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readScheduledQueryRoute = void 0;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const readScheduledQueryRoute = (router, osqueryContext) => {
  router.get({
    path: '/internal/osquery/scheduled_query/{id}',
    validate: {
      params: _configSchema.schema.object({}, {
        unknowns: 'allow'
      })
    }
  }, async (context, request, response) => {
    const savedObjectsClient = context.core.savedObjects.client;
    const packagePolicyService = osqueryContext.service.getPackagePolicyService(); // @ts-expect-error update types

    const scheduledQuery = await (packagePolicyService === null || packagePolicyService === void 0 ? void 0 : packagePolicyService.get(savedObjectsClient, request.params.id));
    return response.ok({
      // @ts-expect-error update types
      body: scheduledQuery
    });
  });
};

exports.readScheduledQueryRoute = readScheduledQueryRoute;