"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHostMetaData = getHostMetaData;
exports.getHostData = getHostData;
exports.mapToHostResultList = mapToHostResultList;
exports.enrichHostMetadata = enrichHostMetadata;
exports.getMetadataRequestHandler = exports.getMetadataListRequestHandler = exports.getLogger = void 0;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _types = require("../../../../common/endpoint/types");

var _query_builders = require("./query_builders");

var _server = require("../../../../../fleet/server");

var _unenroll = require("./support/unenroll");

var _agent_status = require("./support/agent_status");

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


const HOST_STATUS_MAPPING = new Map([['online', _types.HostStatus.HEALTHY], ['offline', _types.HostStatus.OFFLINE], ['inactive', _types.HostStatus.INACTIVE], ['unenrolling', _types.HostStatus.UPDATING], ['enrolling', _types.HostStatus.UPDATING], ['updating', _types.HostStatus.UPDATING], ['warning', _types.HostStatus.UNHEALTHY], ['error', _types.HostStatus.UNHEALTHY], ['degraded', _types.HostStatus.UNHEALTHY]]);
/**
 * 00000000-0000-0000-0000-000000000000 is initial Elastic Agent id sent by Endpoint before policy is configured
 * 11111111-1111-1111-1111-111111111111 is Elastic Agent id sent by Endpoint when policy does not contain an id
 */

const IGNORED_ELASTIC_AGENT_IDS = ['00000000-0000-0000-0000-000000000000', '11111111-1111-1111-1111-111111111111'];

const getLogger = endpointAppContext => {
  return endpointAppContext.logFactory.get('metadata');
};

exports.getLogger = getLogger;

const getMetadataListRequestHandler = function (endpointAppContext, logger, queryStrategyVersion) {
  return async (context, request, response) => {
    var _request$body, _request$body$filters, _request$body$filters2, _request$body2, _request$body2$filter, _endpointAppContext$s, _endpointAppContext$s2;

    const agentService = endpointAppContext.service.getAgentService();

    if (agentService === undefined) {
      throw new Error('agentService not available');
    }

    const metadataRequestContext = {
      esClient: context.core.elasticsearch.client,
      endpointAppContextService: endpointAppContext.service,
      logger,
      requestHandlerContext: context,
      savedObjectsClient: context.core.savedObjects.client
    };
    const unenrolledAgentIds = await (0, _unenroll.findAllUnenrolledAgentIds)(agentService, endpointAppContext.service.getPackagePolicyService(), context.core.savedObjects.client, context.core.elasticsearch.client.asCurrentUser);
    const statusIDs = request !== null && request !== void 0 && (_request$body = request.body) !== null && _request$body !== void 0 && (_request$body$filters = _request$body.filters) !== null && _request$body$filters !== void 0 && (_request$body$filters2 = _request$body$filters.host_status) !== null && _request$body$filters2 !== void 0 && _request$body$filters2.length ? await (0, _agent_status.findAgentIDsByStatus)(agentService, context.core.savedObjects.client, context.core.elasticsearch.client.asCurrentUser, (_request$body2 = request.body) === null || _request$body2 === void 0 ? void 0 : (_request$body2$filter = _request$body2.filters) === null || _request$body2$filter === void 0 ? void 0 : _request$body2$filter.host_status) : undefined;
    const queryStrategy = await ((_endpointAppContext$s = endpointAppContext.service) === null || _endpointAppContext$s === void 0 ? void 0 : (_endpointAppContext$s2 = _endpointAppContext$s.getMetadataService()) === null || _endpointAppContext$s2 === void 0 ? void 0 : _endpointAppContext$s2.queryStrategy(context.core.savedObjects.client, queryStrategyVersion));
    const queryParams = await (0, _query_builders.kibanaRequestToMetadataListESQuery)(request, endpointAppContext, queryStrategy, {
      unenrolledAgentIds: unenrolledAgentIds.concat(IGNORED_ELASTIC_AGENT_IDS),
      statusAgentIDs: statusIDs
    });
    const result = await context.core.elasticsearch.client.asCurrentUser.search(queryParams);
    const hostListQueryResult = queryStrategy.queryResponseToHostListResult(result.body);
    return response.ok({
      body: await mapToHostResultList(queryParams, hostListQueryResult, metadataRequestContext)
    });
  };
};

exports.getMetadataListRequestHandler = getMetadataListRequestHandler;

const getMetadataRequestHandler = function (endpointAppContext, logger, queryStrategyVersion) {
  return async (context, request, response) => {
    const agentService = endpointAppContext.service.getAgentService();

    if (agentService === undefined) {
      throw new Error('agentService not available');
    }

    const metadataRequestContext = {
      esClient: context.core.elasticsearch.client,
      endpointAppContextService: endpointAppContext.service,
      logger,
      requestHandlerContext: context,
      savedObjectsClient: context.core.savedObjects.client
    };

    try {
      var _request$params;

      const doc = await getHostData(metadataRequestContext, request === null || request === void 0 ? void 0 : (_request$params = request.params) === null || _request$params === void 0 ? void 0 : _request$params.id, queryStrategyVersion);

      if (doc) {
        return response.ok({
          body: doc
        });
      }

      return response.notFound({
        body: 'Endpoint Not Found'
      });
    } catch (err) {
      logger.warn(JSON.stringify(err, null, 2));

      if (err.isBoom) {
        return response.customError({
          statusCode: err.output.statusCode,
          body: {
            message: err.message
          }
        });
      }

      throw err;
    }
  };
};

exports.getMetadataRequestHandler = getMetadataRequestHandler;

async function getHostMetaData(metadataRequestContext, id, queryStrategyVersion) {
  var _metadataRequestConte, _metadataRequestConte2, _metadataRequestConte3, _metadataRequestConte4, _metadataRequestConte5, _metadataRequestConte6, _metadataRequestConte7, _metadataRequestConte8;

  if (!metadataRequestContext.esClient && !((_metadataRequestConte = metadataRequestContext.requestHandlerContext) !== null && _metadataRequestConte !== void 0 && _metadataRequestConte.core.elasticsearch.client)) {
    throw _boom.default.badRequest('esClient not found');
  }

  if (!metadataRequestContext.savedObjectsClient && !((_metadataRequestConte2 = metadataRequestContext.requestHandlerContext) !== null && _metadataRequestConte2 !== void 0 && _metadataRequestConte2.core.savedObjects)) {
    throw _boom.default.badRequest('savedObjectsClient not found');
  }

  const esClient = (_metadataRequestConte3 = metadataRequestContext === null || metadataRequestContext === void 0 ? void 0 : metadataRequestContext.esClient) !== null && _metadataRequestConte3 !== void 0 ? _metadataRequestConte3 : (_metadataRequestConte4 = metadataRequestContext.requestHandlerContext) === null || _metadataRequestConte4 === void 0 ? void 0 : _metadataRequestConte4.core.elasticsearch.client;
  const esSavedObjectClient = (_metadataRequestConte5 = metadataRequestContext === null || metadataRequestContext === void 0 ? void 0 : metadataRequestContext.savedObjectsClient) !== null && _metadataRequestConte5 !== void 0 ? _metadataRequestConte5 : (_metadataRequestConte6 = metadataRequestContext.requestHandlerContext) === null || _metadataRequestConte6 === void 0 ? void 0 : _metadataRequestConte6.core.savedObjects.client;
  const queryStrategy = await ((_metadataRequestConte7 = metadataRequestContext.endpointAppContextService) === null || _metadataRequestConte7 === void 0 ? void 0 : (_metadataRequestConte8 = _metadataRequestConte7.getMetadataService()) === null || _metadataRequestConte8 === void 0 ? void 0 : _metadataRequestConte8.queryStrategy(esSavedObjectClient, queryStrategyVersion));
  const query = (0, _query_builders.getESQueryHostMetadataByID)(id, queryStrategy);
  const response = await esClient.asCurrentUser.search(query);
  const hostResult = queryStrategy.queryResponseToHostResult(response.body);
  const hostMetadata = hostResult.result;

  if (!hostMetadata) {
    return undefined;
  }

  return {
    metadata: hostMetadata,
    query_strategy_version: hostResult.queryStrategyVersion
  };
}

async function getHostData(metadataRequestContext, id, queryStrategyVersion) {
  var _metadataRequestConte9;

  if (!metadataRequestContext.savedObjectsClient) {
    throw _boom.default.badRequest('savedObjectsClient not found');
  }

  if (!metadataRequestContext.esClient && !((_metadataRequestConte9 = metadataRequestContext.requestHandlerContext) !== null && _metadataRequestConte9 !== void 0 && _metadataRequestConte9.core.elasticsearch.client)) {
    throw _boom.default.badRequest('esClient not found');
  }

  const hostResult = await getHostMetaData(metadataRequestContext, id, queryStrategyVersion);

  if (!hostResult) {
    return undefined;
  }

  const agent = await findAgent(metadataRequestContext, hostResult.metadata);

  if (agent && !agent.active) {
    throw _boom.default.badRequest('the requested endpoint is unenrolled');
  }

  const metadata = await enrichHostMetadata(hostResult.metadata, metadataRequestContext, hostResult.query_strategy_version);
  return { ...metadata,
    query_strategy_version: hostResult.query_strategy_version
  };
}

async function findAgent(metadataRequestContext, hostMetadata) {
  try {
    var _metadataRequestConte10, _metadataRequestConte11, _metadataRequestConte12, _metadataRequestConte13, _metadataRequestConte14;

    if (!metadataRequestContext.esClient && !((_metadataRequestConte10 = metadataRequestContext.requestHandlerContext) !== null && _metadataRequestConte10 !== void 0 && _metadataRequestConte10.core.elasticsearch.client)) {
      throw new Error('esClient not found');
    }

    const esClient = (_metadataRequestConte11 = metadataRequestContext === null || metadataRequestContext === void 0 ? void 0 : metadataRequestContext.esClient) !== null && _metadataRequestConte11 !== void 0 ? _metadataRequestConte11 : (_metadataRequestConte12 = metadataRequestContext.requestHandlerContext) === null || _metadataRequestConte12 === void 0 ? void 0 : _metadataRequestConte12.core.elasticsearch.client;
    return await ((_metadataRequestConte13 = metadataRequestContext.endpointAppContextService) === null || _metadataRequestConte13 === void 0 ? void 0 : (_metadataRequestConte14 = _metadataRequestConte13.getAgentService()) === null || _metadataRequestConte14 === void 0 ? void 0 : _metadataRequestConte14.getAgent(esClient.asCurrentUser, hostMetadata.elastic.agent.id));
  } catch (e) {
    if (e instanceof _server.AgentNotFoundError) {
      metadataRequestContext.logger.warn(`agent with id ${hostMetadata.elastic.agent.id} not found`);
      return undefined;
    } else {
      throw e;
    }
  }
}

async function mapToHostResultList( // eslint-disable-next-line @typescript-eslint/no-explicit-any
queryParams, hostListQueryResult, metadataRequestContext) {
  var _hostListQueryResult$, _hostListQueryResult$2;

  const totalNumberOfHosts = hostListQueryResult.resultLength;

  if (((_hostListQueryResult$ = (_hostListQueryResult$2 = hostListQueryResult.resultList) === null || _hostListQueryResult$2 === void 0 ? void 0 : _hostListQueryResult$2.length) !== null && _hostListQueryResult$ !== void 0 ? _hostListQueryResult$ : 0) > 0) {
    return {
      request_page_size: queryParams.size,
      request_page_index: queryParams.from,
      hosts: await Promise.all(hostListQueryResult.resultList.map(async entry => enrichHostMetadata(entry, metadataRequestContext, hostListQueryResult.queryStrategyVersion))),
      total: totalNumberOfHosts,
      query_strategy_version: hostListQueryResult.queryStrategyVersion
    };
  } else {
    return {
      request_page_size: queryParams.size,
      request_page_index: queryParams.from,
      total: totalNumberOfHosts,
      hosts: [],
      query_strategy_version: hostListQueryResult.queryStrategyVersion
    };
  }
}

async function enrichHostMetadata(hostMetadata, metadataRequestContext, metadataQueryStrategyVersion) {
  var _hostMetadata$elastic, _hostMetadata$elastic2, _metadataRequestConte17, _metadataRequestConte18, _metadataRequestConte19, _metadataRequestConte20;

  let hostStatus = _types.HostStatus.UNHEALTHY;
  let elasticAgentId = hostMetadata === null || hostMetadata === void 0 ? void 0 : (_hostMetadata$elastic = hostMetadata.elastic) === null || _hostMetadata$elastic === void 0 ? void 0 : (_hostMetadata$elastic2 = _hostMetadata$elastic.agent) === null || _hostMetadata$elastic2 === void 0 ? void 0 : _hostMetadata$elastic2.id;
  const log = metadataRequestContext.logger;

  try {
    var _metadataRequestConte15, _metadataRequestConte16;

    if (!metadataRequestContext.esClient && !((_metadataRequestConte15 = metadataRequestContext.requestHandlerContext) !== null && _metadataRequestConte15 !== void 0 && _metadataRequestConte15.core.elasticsearch.client)) {
      throw new Error('esClient not found');
    }

    if (!metadataRequestContext.savedObjectsClient && !((_metadataRequestConte16 = metadataRequestContext.requestHandlerContext) !== null && _metadataRequestConte16 !== void 0 && _metadataRequestConte16.core.savedObjects)) {
      throw new Error('esSavedObjectClient not found');
    }
  } catch (e) {
    log.error(e);
    throw e;
  }

  const esClient = (_metadataRequestConte17 = metadataRequestContext === null || metadataRequestContext === void 0 ? void 0 : metadataRequestContext.esClient) !== null && _metadataRequestConte17 !== void 0 ? _metadataRequestConte17 : (_metadataRequestConte18 = metadataRequestContext.requestHandlerContext) === null || _metadataRequestConte18 === void 0 ? void 0 : _metadataRequestConte18.core.elasticsearch.client;
  const esSavedObjectClient = (_metadataRequestConte19 = metadataRequestContext === null || metadataRequestContext === void 0 ? void 0 : metadataRequestContext.savedObjectsClient) !== null && _metadataRequestConte19 !== void 0 ? _metadataRequestConte19 : (_metadataRequestConte20 = metadataRequestContext.requestHandlerContext) === null || _metadataRequestConte20 === void 0 ? void 0 : _metadataRequestConte20.core.savedObjects.client;

  try {
    var _metadataRequestConte21, _metadataRequestConte22;
    /**
     * Get agent status by elastic agent id if available or use the endpoint-agent id.
     */


    if (!elasticAgentId) {
      elasticAgentId = hostMetadata.agent.id;
      log.warn(`Missing elastic agent id, using host id instead ${elasticAgentId}`);
    }

    const status = await ((_metadataRequestConte21 = metadataRequestContext.endpointAppContextService) === null || _metadataRequestConte21 === void 0 ? void 0 : (_metadataRequestConte22 = _metadataRequestConte21.getAgentService()) === null || _metadataRequestConte22 === void 0 ? void 0 : _metadataRequestConte22.getAgentStatusById(esClient.asCurrentUser, elasticAgentId));
    hostStatus = HOST_STATUS_MAPPING.get(status) || _types.HostStatus.UNHEALTHY;
  } catch (e) {
    if (e instanceof _server.AgentNotFoundError) {
      log.warn(`agent with id ${elasticAgentId} not found`);
    } else {
      log.error(e);
      throw e;
    }
  }

  let policyInfo;

  try {
    var _metadataRequestConte23, _metadataRequestConte24, _metadataRequestConte25;

    const agent = await ((_metadataRequestConte23 = metadataRequestContext.endpointAppContextService) === null || _metadataRequestConte23 === void 0 ? void 0 : (_metadataRequestConte24 = _metadataRequestConte23.getAgentService()) === null || _metadataRequestConte24 === void 0 ? void 0 : _metadataRequestConte24.getAgent(esClient.asCurrentUser, elasticAgentId));
    const agentPolicy = await ((_metadataRequestConte25 = metadataRequestContext.endpointAppContextService.getAgentPolicyService()) === null || _metadataRequestConte25 === void 0 ? void 0 : _metadataRequestConte25.get(esSavedObjectClient, agent === null || agent === void 0 ? void 0 : agent.policy_id, true));
    const endpointPolicy = ((agentPolicy === null || agentPolicy === void 0 ? void 0 : agentPolicy.package_policies) || []).find(policy => {
      var _policy$package;

      return ((_policy$package = policy.package) === null || _policy$package === void 0 ? void 0 : _policy$package.name) === 'endpoint';
    });
    policyInfo = {
      agent: {
        applied: {
          revision: (agent === null || agent === void 0 ? void 0 : agent.policy_revision) || 0,
          id: (agent === null || agent === void 0 ? void 0 : agent.policy_id) || ''
        },
        configured: {
          revision: (agentPolicy === null || agentPolicy === void 0 ? void 0 : agentPolicy.revision) || 0,
          id: (agentPolicy === null || agentPolicy === void 0 ? void 0 : agentPolicy.id) || ''
        }
      },
      endpoint: {
        revision: (endpointPolicy === null || endpointPolicy === void 0 ? void 0 : endpointPolicy.revision) || 0,
        id: (endpointPolicy === null || endpointPolicy === void 0 ? void 0 : endpointPolicy.id) || ''
      }
    };
  } catch (e) {
    // this is a non-vital enrichment of expected policy revisions.
    // if we fail just fetching these, the rest of the endpoint
    // data should still be returned. log the error and move on
    log.error(e);
  }

  return {
    metadata: hostMetadata,
    host_status: hostStatus,
    policy_info: policyInfo,
    query_strategy_version: metadataQueryStrategyVersion
  };
}