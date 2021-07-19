"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAgentUsage = void 0;

var AgentService = _interopRequireWildcard(require("../services/agents"));

var _fleet_server = require("../services/fleet_server");

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


const getAgentUsage = async (config, soClient, esClient) => {
  // TODO: unsure if this case is possible at all.
  if (!soClient || !esClient || !(await (0, _fleet_server.isFleetServerSetup)())) {
    return {
      total_enrolled: 0,
      healthy: 0,
      unhealthy: 0,
      offline: 0,
      total_all_statuses: 0
    };
  }

  const {
    total,
    inactive,
    online,
    error,
    offline
  } = await AgentService.getAgentStatusForAgentPolicy(soClient, esClient);
  return {
    total_enrolled: total,
    healthy: online,
    unhealthy: error,
    offline,
    total_all_statuses: total + inactive
  };
};

exports.getAgentUsage = getAgentUsage;