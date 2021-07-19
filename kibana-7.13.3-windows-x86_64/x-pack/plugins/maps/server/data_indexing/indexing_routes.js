"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initIndexingRoutes = initIndexingRoutes;

var _configSchema = require("@kbn/config-schema");

var _constants = require("../../common/constants");

var _create_doc_source = require("./create_doc_source");

var _index_data = require("./index_data");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function initIndexingRoutes({
  router,
  logger,
  dataPlugin
}) {
  router.post({
    path: `/${_constants.INDEX_SOURCE_API_PATH}`,
    validate: {
      body: _configSchema.schema.object({
        index: _configSchema.schema.string(),
        mappings: _configSchema.schema.any()
      })
    },
    options: {
      body: {
        accepts: ['application/json']
      }
    }
  }, async (context, request, response) => {
    const {
      index,
      mappings
    } = request.body;
    const indexPatternsService = await dataPlugin.indexPatterns.indexPatternsServiceFactory(context.core.savedObjects.client, context.core.elasticsearch.client.asCurrentUser);
    const result = await (0, _create_doc_source.createDocSource)(index, mappings, context.core.elasticsearch.client, indexPatternsService);

    if (result.success) {
      return response.ok({
        body: result
      });
    } else {
      var _result$error;

      if (result.error) {
        logger.error(result.error);
      }

      return response.custom({
        body: result === null || result === void 0 ? void 0 : (_result$error = result.error) === null || _result$error === void 0 ? void 0 : _result$error.message,
        statusCode: 500
      });
    }
  });
  router.post({
    path: `/${_constants.GIS_API_PATH}/feature`,
    validate: {
      body: _configSchema.schema.object({
        index: _configSchema.schema.string(),
        data: _configSchema.schema.any()
      })
    },
    options: {
      body: {
        accepts: ['application/json'],
        maxBytes: _constants.MAX_DRAWING_SIZE_BYTES
      }
    }
  }, async (context, request, response) => {
    const result = await (0, _index_data.writeDataToIndex)(request.body.index, request.body.data, context.core.elasticsearch.client.asCurrentUser);

    if (result.success) {
      return response.ok({
        body: result
      });
    } else {
      logger.error(result.error);
      return response.custom({
        body: result.error.message,
        statusCode: 500
      });
    }
  });
}