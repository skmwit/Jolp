"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLastSuccessfulStepRoute = void 0;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createLastSuccessfulStepRoute = libs => ({
  method: 'GET',
  path: '/api/uptime/synthetics/step/success/',
  validate: {
    query: _configSchema.schema.object({
      monitorId: _configSchema.schema.string(),
      stepIndex: _configSchema.schema.number(),
      timestamp: _configSchema.schema.string(),
      _inspect: _configSchema.schema.maybe(_configSchema.schema.boolean())
    })
  },
  handler: async ({
    uptimeEsClient,
    request,
    response
  }) => {
    const {
      timestamp,
      monitorId,
      stepIndex
    } = request.query;
    return await libs.requests.getStepLastSuccessfulStep({
      uptimeEsClient,
      monitorId,
      stepIndex,
      timestamp
    });
  }
});

exports.createLastSuccessfulStepRoute = createLastSuccessfulStepRoute;