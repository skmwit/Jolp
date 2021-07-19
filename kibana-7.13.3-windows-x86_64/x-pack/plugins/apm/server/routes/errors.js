"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorsRouteRepository = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _create_apm_server_route = require("./create_apm_server_route");

var _get_distribution = require("../lib/errors/distribution/get_distribution");

var _get_error_group_sample = require("../lib/errors/get_error_group_sample");

var _get_error_groups = require("../lib/errors/get_error_groups");

var _setup_request = require("../lib/helpers/setup_request");

var _default_api_types = require("./default_api_types");

var _create_apm_server_route_repository = require("./create_apm_server_route_repository");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const errorsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/errors',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.partial({
      sortField: t.string,
      sortDirection: t.union([t.literal('asc'), t.literal('desc')])
    }), _default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const {
      params
    } = resources;
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      serviceName
    } = params.path;
    const {
      environment,
      kuery,
      sortField,
      sortDirection
    } = params.query;
    const errorGroups = await (0, _get_error_groups.getErrorGroups)({
      environment,
      kuery,
      serviceName,
      sortField,
      sortDirection,
      setup
    });
    return {
      errorGroups
    };
  }
});
const errorGroupsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/errors/{groupId}',
  params: t.type({
    path: t.type({
      serviceName: t.string,
      groupId: t.string
    }),
    query: t.intersection([_default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const {
      params
    } = resources;
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      serviceName,
      groupId
    } = params.path;
    const {
      environment,
      kuery
    } = params.query;
    return (0, _get_error_group_sample.getErrorGroupSample)({
      environment,
      groupId,
      kuery,
      serviceName,
      setup
    });
  }
});
const errorDistributionRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/errors/distribution',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.partial({
      groupId: t.string
    }), _default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params
    } = resources;
    const {
      serviceName
    } = params.path;
    const {
      environment,
      kuery,
      groupId
    } = params.query;
    return (0, _get_distribution.getErrorDistribution)({
      environment,
      kuery,
      serviceName,
      groupId,
      setup
    });
  }
});
const errorsRouteRepository = (0, _create_apm_server_route_repository.createApmServerRouteRepository)().add(errorsRoute).add(errorGroupsRoute).add(errorDistributionRoute);
exports.errorsRouteRepository = errorsRouteRepository;