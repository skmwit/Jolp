"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupIngestManager = setupIngestManager;
exports.ensureDefaultEnrollmentAPIKeysExists = ensureDefaultEnrollmentAPIKeysExists;

var _constants = require("../constants");

var _app_context = require("./app_context");

var _agent_policy = require("./agent_policy");

var _preconfiguration = require("./preconfiguration");

var _output = require("./output");

var _api_keys = require("./api_keys");

var _ = require(".");

var _setup_utils = require("./setup_utils");

var _agents = require("./agents");

var _fleet_server = require("./fleet_server");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function setupIngestManager(soClient, esClient) {
  return (0, _setup_utils.awaitIfPending)(async () => createSetupSideEffects(soClient, esClient));
}

async function createSetupSideEffects(soClient, esClient) {
  var _appContextService$ge;

  const [defaultOutput] = await Promise.all([_output.outputService.ensureDefaultOutput(soClient), _.settingsService.settingsSetup(soClient)]);
  await (0, _fleet_server.awaitIfFleetServerSetupPending)();
  const {
    agentPolicies: policiesOrUndefined,
    packages: packagesOrUndefined
  } = (_appContextService$ge = _app_context.appContextService.getConfig()) !== null && _appContextService$ge !== void 0 ? _appContextService$ge : {};
  const policies = policiesOrUndefined !== null && policiesOrUndefined !== void 0 ? policiesOrUndefined : [];
  let packages = packagesOrUndefined !== null && packagesOrUndefined !== void 0 ? packagesOrUndefined : []; // Ensure that required packages are always installed even if they're left out of the config

  const preconfiguredPackageNames = new Set(packages.map(pkg => pkg.name));
  packages = [...packages, ..._constants.REQUIRED_PACKAGES.filter(pkg => !preconfiguredPackageNames.has(pkg.name))];
  const {
    nonFatalErrors
  } = await (0, _preconfiguration.ensurePreconfiguredPackagesAndPolicies)(soClient, esClient, policies, packages, defaultOutput);
  await ensureDefaultEnrollmentAPIKeysExists(soClient, esClient);
  await (0, _agents.ensureAgentActionPolicyChangeExists)(soClient, esClient);
  return {
    isInitialized: true,
    nonFatalErrors
  };
}

async function ensureDefaultEnrollmentAPIKeysExists(soClient, esClient, options) {
  const security = _app_context.appContextService.getSecurity();

  if (!security) {
    return;
  }

  if (!(await security.authc.apiKeys.areAPIKeysEnabled())) {
    return;
  }

  const {
    items: agentPolicies
  } = await _agent_policy.agentPolicyService.list(soClient, {
    perPage: _constants.SO_SEARCH_LIMIT
  });
  await Promise.all(agentPolicies.map(async agentPolicy => {
    const hasKey = await (0, _api_keys.hasEnrollementAPIKeysForPolicy)(esClient, agentPolicy.id);

    if (hasKey) {
      return;
    }

    return (0, _api_keys.generateEnrollmentAPIKey)(soClient, esClient, {
      name: `Default`,
      agentPolicyId: agentPolicy.id,
      forceRecreate: true // Always generate a new enrollment key when Fleet is being set up

    });
  }));
}