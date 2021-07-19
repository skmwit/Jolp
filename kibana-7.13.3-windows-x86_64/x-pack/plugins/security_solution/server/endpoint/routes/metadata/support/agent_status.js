"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAgentIDsByStatus = findAgentIDsByStatus;

var _services = require("../../../../../../fleet/common/services");

var _types = require("../../../../../common/endpoint/types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const STATUS_QUERY_MAP = new Map([[_types.HostStatus.HEALTHY.toString(), _services.AgentStatusKueryHelper.buildKueryForOnlineAgents()], [_types.HostStatus.OFFLINE.toString(), _services.AgentStatusKueryHelper.buildKueryForOfflineAgents()], [_types.HostStatus.UNHEALTHY.toString(), _services.AgentStatusKueryHelper.buildKueryForErrorAgents()], [_types.HostStatus.UPDATING.toString(), _services.AgentStatusKueryHelper.buildKueryForUpdatingAgents()], [_types.HostStatus.INACTIVE.toString(), _services.AgentStatusKueryHelper.buildKueryForInactiveAgents()]]);

async function findAgentIDsByStatus(agentService, soClient, esClient, status, pageSize = 1000) {
  const helpers = status.map(s => STATUS_QUERY_MAP.get(s));

  const searchOptions = pageNum => {
    return {
      page: pageNum,
      perPage: pageSize,
      showInactive: true,
      kuery: `(packages : "endpoint" AND (${helpers.join(' OR ')}))`
    };
  };

  let page = 1;
  const result = [];
  let hasMore = true;

  while (hasMore) {
    const agents = await agentService.listAgents(esClient, searchOptions(page++));
    result.push(...agents.agents.map(agent => agent.id));
    hasMore = agents.agents.length > 0;
  }

  return result;
}