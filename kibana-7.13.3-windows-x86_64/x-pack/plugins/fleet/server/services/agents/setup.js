"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAgentActionPolicyChangeExists = ensureAgentActionPolicyChangeExists;

var _constants = require("../../constants");

var _agent_policy = require("../agent_policy");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * During the migration from 7.9 to 7.10 we introduce a new agent action POLICY_CHANGE per policy
 * this function ensure that action exist for each policy
 *
 * @param soClient
 */


async function ensureAgentActionPolicyChangeExists(soClient, esClient) {
  const {
    items: agentPolicies
  } = await _agent_policy.agentPolicyService.list(soClient, {
    perPage: _constants.SO_SEARCH_LIMIT
  });
  await Promise.all(agentPolicies.map(async agentPolicy => {
    const policyChangeActionExist = !!(await _agent_policy.agentPolicyService.getLatestFleetPolicy(esClient, agentPolicy.id));

    if (!policyChangeActionExist) {
      return _agent_policy.agentPolicyService.createFleetPolicyChangeAction(soClient, agentPolicy.id);
    }
  }));
}