"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAgentStatusById = getAgentStatusById;
exports.getAgentStatusForAgentPolicy = getAgentStatusForAgentPolicy;
exports.getAgentStatus = void 0;

var _pMap = _interopRequireDefault(require("p-map"));

var _constants = require("../../constants");

var _services = require("../../../common/services");

var _server = require("../../../../../../src/plugins/data/server");

var _crud = require("./crud");

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


async function getAgentStatusById(esClient, agentId) {
  const agent = await (0, _crud.getAgentById)(esClient, agentId);
  return _services.AgentStatusKueryHelper.getAgentStatus(agent);
}

const getAgentStatus = _services.AgentStatusKueryHelper.getAgentStatus;
exports.getAgentStatus = getAgentStatus;

function joinKuerys(...kuerys) {
  return kuerys.filter(kuery => kuery !== undefined).reduce((acc, kuery) => {
    if (kuery === undefined) {
      return acc;
    }

    const normalizedKuery = _server.esKuery.fromKueryExpression((0, _crud.removeSOAttributes)(kuery || ''));

    if (!acc) {
      return normalizedKuery;
    }

    return {
      type: 'function',
      function: 'and',
      arguments: [acc, normalizedKuery]
    };
  }, undefined);
}

async function getAgentStatusForAgentPolicy(soClient, esClient, agentPolicyId, filterKuery) {
  const [all, allActive, online, error, offline, updating] = await (0, _pMap.default)([undefined, // All agents, including inactive
  undefined, // All active agents
  _services.AgentStatusKueryHelper.buildKueryForOnlineAgents(), _services.AgentStatusKueryHelper.buildKueryForErrorAgents(), _services.AgentStatusKueryHelper.buildKueryForOfflineAgents(), _services.AgentStatusKueryHelper.buildKueryForUpdatingAgents()], (kuery, index) => (0, _crud.getAgentsByKuery)(esClient, {
    showInactive: index === 0,
    perPage: 0,
    page: 1,
    kuery: joinKuerys(...[kuery, filterKuery, `${_constants.AGENT_SAVED_OBJECT_TYPE}.attributes.active:true`, agentPolicyId ? `${_constants.AGENT_SAVED_OBJECT_TYPE}.policy_id:"${agentPolicyId}"` : undefined])
  }), {
    concurrency: 1
  });
  return {
    total: allActive.total,
    inactive: all.total - allActive.total,
    online: online.total,
    error: error.total,
    offline: offline.total,
    updating: updating.total,
    other: all.total - online.total - error.total - offline.total,

    /* @deprecated Agent events do not exists anymore */
    events: 0
  };
}