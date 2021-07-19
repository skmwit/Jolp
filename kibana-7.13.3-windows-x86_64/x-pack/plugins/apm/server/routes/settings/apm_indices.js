"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apmIndicesRouteRepository = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _create_apm_server_route_repository = require("../create_apm_server_route_repository");

var _create_apm_server_route = require("../create_apm_server_route");

var _get_apm_indices = require("../../lib/settings/apm_indices/get_apm_indices");

var _save_apm_indices = require("../../lib/settings/apm_indices/save_apm_indices");

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
// get list of apm indices and values


const apmIndexSettingsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/settings/apm-index-settings',
  options: {
    tags: ['access:apm']
  },
  handler: async ({
    config,
    context
  }) => {
    const apmIndexSettings = await (0, _get_apm_indices.getApmIndexSettings)({
      config,
      context
    });
    return {
      apmIndexSettings
    };
  }
}); // get apm indices configuration object

const apmIndicesRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/settings/apm-indices',
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const {
      context,
      config
    } = resources;
    return await (0, _get_apm_indices.getApmIndices)({
      savedObjectsClient: context.core.savedObjects.client,
      config
    });
  }
}); // save ui indices

const saveApmIndicesRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'POST /api/apm/settings/apm-indices/save',
  options: {
    tags: ['access:apm', 'access:apm_write']
  },
  params: t.type({
    body: t.partial({
      /* eslint-disable @typescript-eslint/naming-convention */
      'apm_oss.sourcemapIndices': t.string,
      'apm_oss.errorIndices': t.string,
      'apm_oss.onboardingIndices': t.string,
      'apm_oss.spanIndices': t.string,
      'apm_oss.transactionIndices': t.string,
      'apm_oss.metricsIndices': t.string
      /* eslint-enable @typescript-eslint/naming-convention */

    })
  }),
  handler: async resources => {
    const {
      params,
      context
    } = resources;
    const {
      body
    } = params;
    const savedObjectsClient = context.core.savedObjects.client;
    return await (0, _save_apm_indices.saveApmIndices)(savedObjectsClient, body);
  }
});
const apmIndicesRouteRepository = (0, _create_apm_server_route_repository.createApmServerRouteRepository)().add(apmIndexSettingsRoute).add(apmIndicesRoute).add(saveApmIndicesRoute);
exports.apmIndicesRouteRepository = apmIndicesRouteRepository;