"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findScheduledQueryRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _common = require("../../../common");

var _common2 = require("../../../../fleet/common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const findScheduledQueryRoute = (router, osqueryContext) => {
  router.get({
    path: '/internal/osquery/scheduled_query',
    validate: {
      query: _configSchema.schema.object({}, {
        unknowns: 'allow'
      })
    }
  }, async (context, request, response) => {
    const kuery = `${_common2.PACKAGE_POLICY_SAVED_OBJECT_TYPE}.attributes.package.name: ${_common.OSQUERY_INTEGRATION_NAME}`;
    const packagePolicyService = osqueryContext.service.getPackagePolicyService();
    const policies = await (packagePolicyService === null || packagePolicyService === void 0 ? void 0 : packagePolicyService.list(context.core.savedObjects.client, {
      kuery
    }));
    return response.ok({
      body: policies
    });
  });
};

exports.findScheduledQueryRoute = findScheduledQueryRoute;