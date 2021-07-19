"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerOrgRoleMappingsRoute = registerOrgRoleMappingsRoute;
exports.registerOrgRoleMappingRoute = registerOrgRoleMappingRoute;
exports.registerOrgNewRoleMappingRoute = registerOrgNewRoleMappingRoute;
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
  groups: _configSchema.schema.arrayOf(_configSchema.schema.string()),
  allGroups: _configSchema.schema.boolean(),
  authProvider: _configSchema.schema.arrayOf(_configSchema.schema.string())
};

function registerOrgRoleMappingsRoute({
  router,
  enterpriseSearchRequestHandler
}) {
  router.get({
    path: '/api/workplace_search/org/role_mappings',
    validate: false
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/ws/org/role_mappings/collection'
  }));
  router.post({
    path: '/api/workplace_search/org/role_mappings',
    validate: {
      body: _configSchema.schema.object(roleMappingBaseSchema)
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/ws/org/role_mappings/collection'
  }));
}

function registerOrgRoleMappingRoute({
  router,
  enterpriseSearchRequestHandler
}) {
  router.get({
    path: '/api/workplace_search/org/role_mappings/{id}',
    validate: {
      params: _configSchema.schema.object({
        id: _configSchema.schema.string()
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/ws/org/role_mappings/:id'
  }));
  router.put({
    path: '/api/workplace_search/org/role_mappings/{id}',
    validate: {
      body: _configSchema.schema.object(roleMappingBaseSchema),
      params: _configSchema.schema.object({
        id: _configSchema.schema.string()
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/ws/org/role_mappings/:id'
  }));
  router.delete({
    path: '/api/workplace_search/org/role_mappings/{id}',
    validate: {
      params: _configSchema.schema.object({
        id: _configSchema.schema.string()
      })
    }
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/ws/org/role_mappings/:id'
  }));
}

function registerOrgNewRoleMappingRoute({
  router,
  enterpriseSearchRequestHandler
}) {
  router.get({
    path: '/api/workplace_search/org/role_mappings/new',
    validate: false
  }, enterpriseSearchRequestHandler.createRequest({
    path: '/ws/org/role_mappings/new'
  }));
}

const registerRoleMappingsRoutes = dependencies => {
  registerOrgRoleMappingsRoute(dependencies);
  registerOrgRoleMappingRoute(dependencies);
  registerOrgNewRoleMappingRoute(dependencies);
};

exports.registerRoleMappingsRoutes = registerRoleMappingsRoutes;