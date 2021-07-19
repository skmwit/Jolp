"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerSynonymsRoutes = registerSynonymsRoutes;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const synonymsSchema = _configSchema.schema.arrayOf(_configSchema.schema.string({
  minLength: 1
}), {
  minSize: 2
});

function registerSynonymsRoutes({
  router,
  enterpriseSearchRequestHandler
}) {
  router.get({
    path: '/api/app_search/engines/{engineName}/synonyms',
    validate: {
      params: _configSchema.schema.object({
        engineName: _configSchema.schema.string()
      }),
      query: _configSchema.schema.object({
        'page[current]': _configSchema.schema.number(),
        'page[size]': _configSchema.schema.number()
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/as/engines/:engineName/synonyms/collection'
  }));
  router.post({
    path: '/api/app_search/engines/{engineName}/synonyms',
    validate: {
      params: _configSchema.schema.object({
        engineName: _configSchema.schema.string()
      }),
      body: _configSchema.schema.object({
        synonyms: synonymsSchema
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/as/engines/:engineName/synonyms/collection'
  }));
  router.put({
    path: '/api/app_search/engines/{engineName}/synonyms/{synonymId}',
    validate: {
      params: _configSchema.schema.object({
        engineName: _configSchema.schema.string(),
        synonymId: _configSchema.schema.string()
      }),
      body: _configSchema.schema.object({
        synonyms: synonymsSchema
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/as/engines/:engineName/synonyms/:synonymId'
  }));
  router.delete({
    path: '/api/app_search/engines/{engineName}/synonyms/{synonymId}',
    validate: {
      params: _configSchema.schema.object({
        engineName: _configSchema.schema.string(),
        synonymId: _configSchema.schema.string()
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/as/engines/:engineName/synonyms/:synonymId'
  }));
}