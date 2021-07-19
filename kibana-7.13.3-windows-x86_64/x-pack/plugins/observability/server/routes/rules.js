"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rulesRouteRepository = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _ioTsUtils = require("@kbn/io-ts-utils");

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _create_observability_server_route = require("./create_observability_server_route");

var _create_observability_server_route_repository = require("./create_observability_server_route_repository");

var _get_top_alerts = require("../lib/rules/get_top_alerts");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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


const alertsListRoute = (0, _create_observability_server_route.createObservabilityServerRoute)({
  endpoint: 'GET /api/observability/rules/alerts/top',
  options: {
    tags: []
  },
  params: t.type({
    query: t.intersection([t.type({
      start: _ioTsUtils.isoToEpochRt,
      end: _ioTsUtils.isoToEpochRt
    }), t.partial({
      kuery: t.string,
      size: _ioTsUtils.toNumberRt
    })])
  }),
  handler: async ({
    ruleRegistry,
    context,
    params
  }) => {
    const ruleRegistryClient = await ruleRegistry.createScopedRuleRegistryClient({
      context,
      alertsClient: context.alerting.getAlertsClient()
    });

    if (!ruleRegistryClient) {
      throw _boom.default.failedDependency('xpack.ruleRegistry.unsafe.write.enabled is set to false');
    }

    const {
      query: {
        start,
        end,
        kuery,
        size = 100
      }
    } = params;
    return (0, _get_top_alerts.getTopAlerts)({
      ruleRegistryClient,
      start,
      end,
      kuery,
      size
    });
  }
});
const alertsDynamicIndexPatternRoute = (0, _create_observability_server_route.createObservabilityServerRoute)({
  endpoint: 'GET /api/observability/rules/alerts/dynamic_index_pattern',
  options: {
    tags: []
  },
  handler: async ({
    ruleRegistry,
    context
  }) => {
    const ruleRegistryClient = await ruleRegistry.createScopedRuleRegistryClient({
      context,
      alertsClient: context.alerting.getAlertsClient()
    });

    if (!ruleRegistryClient) {
      throw _boom.default.failedDependency();
    }

    return ruleRegistryClient.getDynamicIndexPattern();
  }
});
const rulesRouteRepository = (0, _create_observability_server_route_repository.createObservabilityServerRouteRepository)().add(alertsListRoute).add(alertsDynamicIndexPatternRoute);
exports.rulesRouteRepository = rulesRouteRepository;