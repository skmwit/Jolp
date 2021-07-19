"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceMapRouteRepository = void 0;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var t = _interopRequireWildcard(require("io-ts"));

var _service_map = require("../../common/service_map");

var _setup_request = require("../lib/helpers/setup_request");

var _get_service_map = require("../lib/service_map/get_service_map");

var _get_service_map_service_node_info = require("../lib/service_map/get_service_map_service_node_info");

var _create_apm_server_route = require("./create_apm_server_route");

var _default_api_types = require("./default_api_types");

var _feature = require("../feature");

var _aggregated_transactions = require("../lib/helpers/aggregated_transactions");

var _license_check = require("../../common/license_check");

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const serviceMapRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/service-map',
  params: t.type({
    query: t.intersection([t.partial({
      serviceName: t.string
    }), _default_api_types.environmentRt, _default_api_types.rangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const {
      config,
      context,
      params,
      logger
    } = resources;

    if (!config['xpack.apm.serviceMapEnabled']) {
      throw _boom.default.notFound();
    }

    if (!(0, _license_check.isActivePlatinumLicense)(context.licensing.license)) {
      throw _boom.default.forbidden(_service_map.invalidLicenseMessage);
    }

    (0, _feature.notifyFeatureUsage)({
      licensingPlugin: context.licensing,
      featureName: 'serviceMaps'
    });
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      query: {
        serviceName,
        environment
      }
    } = params;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return (0, _get_service_map.getServiceMap)({
      setup,
      serviceName,
      environment,
      searchAggregatedTransactions,
      logger
    });
  }
});
const serviceMapServiceNodeRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/service-map/service/{serviceName}',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([_default_api_types.environmentRt, _default_api_types.rangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const {
      config,
      context,
      params
    } = resources;

    if (!config['xpack.apm.serviceMapEnabled']) {
      throw _boom.default.notFound();
    }

    if (!(0, _license_check.isActivePlatinumLicense)(context.licensing.license)) {
      throw _boom.default.forbidden(_service_map.invalidLicenseMessage);
    }

    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      path: {
        serviceName
      },
      query: {
        environment
      }
    } = params;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return (0, _get_service_map_service_node_info.getServiceMapServiceNodeInfo)({
      environment,
      setup,
      serviceName,
      searchAggregatedTransactions
    });
  }
});
const serviceMapRouteRepository = (0, _create_apm_server_route_repository.createApmServerRouteRepository)().add(serviceMapRoute).add(serviceMapServiceNodeRoute);
exports.serviceMapRouteRepository = serviceMapRouteRepository;