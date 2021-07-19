"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLatestFleetEndpointEvent = exports.getEndpointIntegratedFleetMetadata = exports.AGENT_EVENT_SAVED_OBJECT_TYPE = exports.FLEET_ENDPOINT_PACKAGE_CONSTANT = void 0;

var _common = require("../../../../fleet/common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const FLEET_ENDPOINT_PACKAGE_CONSTANT = _common.defaultPackages.Endpoint;
exports.FLEET_ENDPOINT_PACKAGE_CONSTANT = FLEET_ENDPOINT_PACKAGE_CONSTANT;
const AGENT_EVENT_SAVED_OBJECT_TYPE = 'donotexistsanymore-since-7.13';
exports.AGENT_EVENT_SAVED_OBJECT_TYPE = AGENT_EVENT_SAVED_OBJECT_TYPE;

const getEndpointIntegratedFleetMetadata = async (agentService, esClient) => {
  return agentService === null || agentService === void 0 ? void 0 : agentService.listAgents(esClient, {
    kuery: `(packages : ${FLEET_ENDPOINT_PACKAGE_CONSTANT})`,
    perPage: 10000,
    showInactive: false,
    sortField: 'enrolled_at',
    sortOrder: 'desc'
  });
};
/*
  TODO: AS OF 7.13, this access will no longer work due to the enabling of fleet server. An alternative route will have
  to be discussed to retrieve the policy data we need, as well as when the endpoint was last active, which is obtained
  via the last endpoint 'check in' event that was sent to fleet. Also, the only policy currently tracked is `malware`,
  but the hope is to add more, so a better/more scalable solution would be desirable.
*/


exports.getEndpointIntegratedFleetMetadata = getEndpointIntegratedFleetMetadata;

const getLatestFleetEndpointEvent = async (savedObjectsClient, agentId) => ( // Agent events saved object do not exists in Fleet anymore
{
  total: 0,
  saved_objects: [],
  page: 0,
  per_page: 0
});

exports.getLatestFleetEndpointEvent = getLatestFleetEndpointEvent;