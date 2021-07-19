"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAgentStatus = getAgentStatus;
exports.buildKueryForEnrollingAgents = buildKueryForEnrollingAgents;
exports.buildKueryForUnenrollingAgents = buildKueryForUnenrollingAgents;
exports.buildKueryForOnlineAgents = buildKueryForOnlineAgents;
exports.buildKueryForErrorAgents = buildKueryForErrorAgents;
exports.buildKueryForOfflineAgents = buildKueryForOfflineAgents;
exports.buildKueryForUpgradingAgents = buildKueryForUpgradingAgents;
exports.buildKueryForUpdatingAgents = buildKueryForUpdatingAgents;
exports.buildKueryForInactiveAgents = buildKueryForInactiveAgents;

var _constants = require("../constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function getAgentStatus(agent, now = Date.now()) {
  const {
    last_checkin: lastCheckIn
  } = agent;

  if (!agent.active) {
    return 'inactive';
  }

  if (agent.unenrollment_started_at && !agent.unenrolled_at) {
    return 'unenrolling';
  }

  if (!agent.last_checkin) {
    return 'enrolling';
  }

  const msLastCheckIn = new Date(lastCheckIn || 0).getTime();
  const msSinceLastCheckIn = new Date().getTime() - msLastCheckIn;
  const intervalsSinceLastCheckIn = Math.floor(msSinceLastCheckIn / _constants.AGENT_POLLING_THRESHOLD_MS);

  if (agent.last_checkin_status === 'error') {
    return 'error';
  }

  if (agent.last_checkin_status === 'degraded') {
    return 'degraded';
  }

  if (agent.upgrade_started_at && !agent.upgraded_at) {
    return 'updating';
  }

  if (intervalsSinceLastCheckIn >= 4) {
    return 'offline';
  }

  return 'online';
}

function buildKueryForEnrollingAgents() {
  return 'not (last_checkin:*)';
}

function buildKueryForUnenrollingAgents() {
  return 'unenrollment_started_at:*';
}

function buildKueryForOnlineAgents() {
  return `not (${buildKueryForOfflineAgents()}) AND not (${buildKueryForErrorAgents()}) AND not (${buildKueryForUpdatingAgents()})`;
}

function buildKueryForErrorAgents() {
  return 'last_checkin_status:error or .last_checkin_status:degraded';
}

function buildKueryForOfflineAgents() {
  return `last_checkin < now-${4 * _constants.AGENT_POLLING_THRESHOLD_MS / 1000}s AND not (${buildKueryForErrorAgents()}) AND not ( ${buildKueryForUpdatingAgents()} )`;
}

function buildKueryForUpgradingAgents() {
  return '(upgrade_started_at:*) and not (upgraded_at:*)';
}

function buildKueryForUpdatingAgents() {
  return `(${buildKueryForUpgradingAgents()}) or (${buildKueryForEnrollingAgents()}) or (${buildKueryForUnenrollingAgents()})`;
}

function buildKueryForInactiveAgents() {
  return `active:false`;
}