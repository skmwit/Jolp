"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoleMappingsRoute = registerRoleMappingsRoute;
exports.registerRoleMappingRoute = registerRoleMappingRoute;
exports.registerNewRoleMappingRoute = registerNewRoleMappingRoute;
exports.registerResetRoleMappingRoute = registerResetRoleMappingRoute;
exports.registerRoleMappingsRoutes = void 0;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const roleMappingBaseSchema = {
  rules: _configSchema.schema.recordOf(_configSchema.schema.string(), _configSchema.schema.string()),
  roleType: _configSchema.schema.string(),
  engines: _configSchema.schema.arrayOf(_configSchema.schema.string()),
  accessAllEngines: _configSchema.schema.boolean(),
  authProvider: _configSchema.schema.arrayOf(_configSchema.schema.string())
};

function registerRoleMappingsRoute({
  router,
  enterpriseSearchRequestHandler
}) {
  router.get({
    path: '/api/app_search/role_mappings',
    validate: false
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/role_mappings'
  }));
  router.post({
    path: '/api/app_search/role_mappings',
    validate: {
      body: _configSchema.schema.object(roleMappingBaseSchema)
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/role_mappings'
  }));
}

function registerRoleMappingRoute({
  router,
  enterpriseSearchRequestHandler
}) {
  router.get({
    path: '/api/app_search/role_mappings/{id}',
    validate: {
      params: _configSchema.schema.object({
        id: _configSchema.schema.string()
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/role_mappings/:id'
  }));
  router.put({
    path: '/api/app_search/role_mappings/{id}',
    validate: {
      body: _configSchema.schema.object(roleMappingBaseSchema),
      params: _configSchema.schema.object({
        id: _configSchema.schema.string()
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/role_mappings/:id'
  }));
  router.delete({
    path: '/api/app_search/role_mappings/{id}',
    validate: {
      params: _configSchema.schema.object({
        id: _configSchema.schema.string()
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/role_mappings/:id'
  }));
}

function registerNewRoleMappingRoute({
  router,
  enterpriseSearchRequestHandler
}) {
  router.get({
    path: '/api/app_search/role_mappings/new',
    validate: false
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/role_mappings/new'
  }));
}

function registerResetRoleMappingRoute({
  router,
  enterpriseSearchRequestHandler
}) {
  router.post({
    path: '/api/app_search/role_mappings/reset',
    validate: false
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/role_mappings/reset'
  }));
}

const registerRoleMappingsRoutes = dependencies => {
  registerRoleMappingsRoute(dependencies);
  registerRoleMappingRoute(dependencies);
  registerNewRoleMappingRoute(dependencies);
  registerResetRoleMappingRoute(dependencies);
};

exports.registerRoleMappingsRoutes = registerRoleMappingsRoutes;