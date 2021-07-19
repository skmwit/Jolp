"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createActionRoute = void 0;

var _uuid = _interopRequireDefault(require("uuid"));

var _moment = _interopRequireDefault(require("moment"));

var _parse_agent_groups = require("../../lib/parse_agent_groups");

var _route_validation = require("../../utils/build_validation/route_validation");

var _create_action_request_body_schema = require("../../../common/schemas/routes/action/create_action_request_body_schema");

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


const createActionRoute = (router, osqueryContext) => {
  router.post({
    path: '/internal/osquery/action',
    validate: {
      body: (0, _route_validation.buildRouteValidation)(_create_action_request_body_schema.createActionRequestBodySchema)
    }
  }, async (context, request, response) => {
    const esClient = context.core.elasticsearch.client.asCurrentUser;
    const soClient = context.core.savedObjects.client;
    const {
      agentSelection
    } = request.body;
    const selectedAgents = await (0, _parse_agent_groups.parseAgentSelection)(esClient, soClient, osqueryContext, agentSelection);

    if (!selectedAgents.length) {
      return response.badRequest({
        body: new Error('No agents found for selection')
      });
    }

    const action = {
      action_id: _uuid.default.v4(),
      '@timestamp': (0, _moment.default)().toISOString(),
      expiration: (0, _moment.default)().add(1, 'days').toISOString(),
      type: 'INPUT_ACTION',
      input_type: 'osquery',
      agents: selectedAgents,
      data: {
        id: _uuid.default.v4(),
        query: request.body.query
      }
    };
    const actionResponse = await esClient.index({
      index: '.fleet-actions',
      body: action
    });
    return response.ok({
      body: {
        response: actionResponse,
        actions: [action]
      }
    });
  });
};

exports.createActionRoute = createActionRoute;