"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerResultSettingsRoutes = registerResultSettingsRoutes;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const resultFields = _configSchema.schema.recordOf(_configSchema.schema.string(), _configSchema.schema.object({}, {
  unknowns: 'allow'
}));

function registerResultSettingsRoutes({
  router,
  enterpriseSearchRequestHandler
}) {
  router.get({
    path: '/api/app_search/engines/{engineName}/result_settings/details',
    validate: {
      params: _configSchema.schema.object({
        engineName: _configSchema.schema.string()
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/as/engines/:engineName/result_settings/details'
  }));
  router.put({
    path: '/api/app_search/engines/{engineName}/result_settings',
    validate: {
      params: _configSchema.schema.object({
        engineName: _configSchema.schema.string()
      }),
      body: _configSchema.schema.object({
        result_fields: resultFields
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/as/engines/:engineName/result_settings'
  }));
  router.post({
    path: '/api/app_search/engines/{engineName}/sample_response_search',
    validate: {
      params: _configSchema.schema.object({
        engineName: _configSchema.schema.string()
      }),
      body: _configSchema.schema.object({
        query: _configSchema.schema.string(),
        result_fields: _configSchema.schema.recordOf(_configSchema.schema.string(), _configSchema.schema.object({}, {
          unknowns: 'allow'
        }))
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/as/engines/:engineName/sample_response_search'
  }));
}