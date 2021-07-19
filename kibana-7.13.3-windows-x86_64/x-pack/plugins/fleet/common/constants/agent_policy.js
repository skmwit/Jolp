"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agentPolicyStatuses = exports.AGENT_POLICY_INDEX = exports.AGENT_POLICY_SAVED_OBJECT_TYPE = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const AGENT_POLICY_SAVED_OBJECT_TYPE = 'ingest-agent-policies';
exports.AGENT_POLICY_SAVED_OBJECT_TYPE = AGENT_POLICY_SAVED_OBJECT_TYPE;
const AGENT_POLICY_INDEX = '.fleet-policies';
exports.AGENT_POLICY_INDEX = AGENT_POLICY_INDEX;
const agentPolicyStatuses = {
  Active: 'active',
  Inactive: 'inactive'
};
exports.agentPolicyStatuses = agentPolicyStatuses;