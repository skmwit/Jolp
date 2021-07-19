"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agentConfigurationRouteRepository = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _ioTsUtils = require("@kbn/io-ts-utils");

var _setup_request = require("../../lib/helpers/setup_request");

var _get_service_names = require("../../lib/settings/agent_configuration/get_service_names");

var _create_or_update_configuration = require("../../lib/settings/agent_configuration/create_or_update_configuration");

var _search_configurations = require("../../lib/settings/agent_configuration/search_configurations");

var _find_exact_configuration = require("../../lib/settings/agent_configuration/find_exact_configuration");

var _list_configurations = require("../../lib/settings/agent_configuration/list_configurations");

var _get_environments = require("../../lib/settings/agent_configuration/get_environments");

var _delete_configuration = require("../../lib/settings/agent_configuration/delete_configuration");

var _create_apm_server_route = require("../create_apm_server_route");

var _get_agent_name_by_service = require("../../lib/settings/agent_configuration/get_agent_name_by_service");

var _mark_applied_by_agent = require("../../lib/settings/agent_configuration/mark_applied_by_agent");

var _agent_configuration_intake_rt = require("../../../common/agent_configuration/runtime_types/agent_configuration_intake_rt");

var _aggregated_transactions = require("../../lib/helpers/aggregated_transactions");

var _create_apm_server_route_repository = require("../create_apm_server_route_repository");

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
// get list of configurations


const agentConfigurationRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/settings/agent-configuration',
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const configurations = await (0, _list_configurations.listConfigurations)({
      setup
    });
    return {
      configurations
    };
  }
}); // get a single configuration

const getSingleAgentConfigurationRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/settings/agent-configuration/view',
  params: t.partial({
    query: _agent_configuration_intake_rt.serviceRt
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params,
      logger
    } = resources;
    const {
      name,
      environment
    } = params.query;
    const service = {
      name,
      environment
    };
    const config = await (0, _find_exact_configuration.findExactConfiguration)({
      service,
      setup
    });

    if (!config) {
      logger.info(`Config was not found for ${service.name}/${service.environment}`);
      throw _boom.default.notFound();
    }

    return config._source;
  }
}); // delete configuration

const deleteAgentConfigurationRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'DELETE /api/apm/settings/agent-configuration',
  options: {
    tags: ['access:apm', 'access:apm_write']
  },
  params: t.type({
    body: t.type({
      service: _agent_configuration_intake_rt.serviceRt
    })
  }),
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params,
      logger
    } = resources;
    const {
      service
    } = params.body;
    const config = await (0, _find_exact_configuration.findExactConfiguration)({
      service,
      setup
    });

    if (!config) {
      logger.info(`Config was not found for ${service.name}/${service.environment}`);
      throw _boom.default.notFound();
    }

    logger.info(`Deleting config ${service.name}/${service.environment} (${config._id})`);
    return await (0, _delete_configuration.deleteConfiguration)({
      configurationId: config._id,
      setup
    });
  }
}); // create/update configuration

const createOrUpdateAgentConfigurationRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'PUT /api/apm/settings/agent-configuration',
  options: {
    tags: ['access:apm', 'access:apm_write']
  },
  params: t.intersection([t.partial({
    query: t.partial({
      overwrite: _ioTsUtils.toBooleanRt
    })
  }), t.type({
    body: _agent_configuration_intake_rt.agentConfigurationIntakeRt
  })]),
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params,
      logger
    } = resources;
    const {
      body,
      query
    } = params; // if the config already exists, it is fetched and updated
    // this is to avoid creating two configs with identical service params

    const config = await (0, _find_exact_configuration.findExactConfiguration)({
      service: body.service,
      setup
    }); // if the config exists ?overwrite=true is required

    if (config && !query.overwrite) {
      throw _boom.default.badRequest(`A configuration already exists for "${body.service.name}/${body.service.environment}. Use ?overwrite=true to overwrite the existing configuration.`);
    }

    logger.info(`${config ? 'Updating' : 'Creating'} config ${body.service.name}/${body.service.environment}`);
    await (0, _create_or_update_configuration.createOrUpdateConfiguration)({
      configurationId: config === null || config === void 0 ? void 0 : config._id,
      configurationIntake: body,
      setup
    });
  }
});
const searchParamsRt = t.intersection([t.type({
  service: _agent_configuration_intake_rt.serviceRt
}), t.partial({
  etag: t.string,
  mark_as_applied_by_agent: t.boolean
})]); // Lookup single configuration (used by APM Server)

const agentConfigurationSearchRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'POST /api/apm/settings/agent-configuration/search',
  params: t.type({
    body: searchParamsRt
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const {
      params,
      logger
    } = resources;
    const {
      service,
      etag,
      mark_as_applied_by_agent: markAsAppliedByAgent
    } = params.body;
    const setup = await (0, _setup_request.setupRequest)(resources);
    const config = await (0, _search_configurations.searchConfigurations)({
      service,
      setup
    });

    if (!config) {
      logger.debug(`[Central configuration] Config was not found for ${service.name}/${service.environment}`);
      throw _boom.default.notFound();
    }

    logger.info(`Config was found for ${service.name}/${service.environment}`); // update `applied_by_agent` field
    // when `markAsAppliedByAgent` is true (Jaeger agent doesn't have etags)
    // or if etags match.
    // this happens in the background and doesn't block the response

    if ((markAsAppliedByAgent || etag === config._source.etag) && !config._source.applied_by_agent) {
      (0, _mark_applied_by_agent.markAppliedByAgent)({
        id: config._id,
        body: config._source,
        setup
      });
    }

    return config;
  }
});
/*
 * Utility endpoints (not documented as part of the public API)
 */
// get list of services

const listAgentConfigurationServicesRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/settings/agent-configuration/services',
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    const serviceNames = await (0, _get_service_names.getServiceNames)({
      setup,
      searchAggregatedTransactions
    });
    return {
      serviceNames
    };
  }
}); // get environments for service

const listAgentConfigurationEnvironmentsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/settings/agent-configuration/environments',
  params: t.partial({
    query: t.partial({
      serviceName: t.string
    })
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params
    } = resources;
    const {
      serviceName
    } = params.query;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    const environments = await (0, _get_environments.getEnvironments)({
      serviceName,
      setup,
      searchAggregatedTransactions
    });
    return {
      environments
    };
  }
}); // get agentName for service

const agentConfigurationAgentNameRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/settings/agent-configuration/agent_name',
  params: t.type({
    query: t.type({
      serviceName: t.string
    })
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params
    } = resources;
    const {
      serviceName
    } = params.query;
    const agentName = await (0, _get_agent_name_by_service.getAgentNameByService)({
      serviceName,
      setup
    });
    return {
      agentName
    };
  }
});
const agentConfigurationRouteRepository = (0, _create_apm_server_route_repository.createApmServerRouteRepository)().add(agentConfigurationRoute).add(getSingleAgentConfigurationRoute).add(deleteAgentConfigurationRoute).add(createOrUpdateAgentConfigurationRoute).add(agentConfigurationSearchRoute).add(listAgentConfigurationServicesRoute).add(listAgentConfigurationEnvironmentsRoute).add(agentConfigurationAgentNameRoute);
exports.agentConfigurationRouteRepository = agentConfigurationRouteRepository;