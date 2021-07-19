"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileUploadRoutes = fileUploadRoutes;

var _configSchema = require("@kbn/config-schema");

var _common = require("../common");

var _error_wrapper = require("./error_wrapper");

var _import_data = require("./import_data");

var _get_time_field_range = require("./get_time_field_range");

var _analyze_file = require("./analyze_file");

var _telemetry = require("./telemetry");

var _schemas = require("./schemas");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function importData(client, id, index, settings, mappings, ingestPipeline, data) {
  const {
    importData: importDataFunc
  } = (0, _import_data.importDataProvider)(client);
  return importDataFunc(id, index, settings, mappings, ingestPipeline, data);
}
/**
 * Routes for the file upload.
 */


function fileUploadRoutes(coreSetup, logger) {
  const router = coreSetup.http.createRouter();
  router.get({
    path: '/internal/file_upload/has_import_permission',
    validate: {
      query: _configSchema.schema.object({
        indexName: _configSchema.schema.maybe(_configSchema.schema.string()),
        checkCreateIndexPattern: _configSchema.schema.boolean(),
        checkHasManagePipeline: _configSchema.schema.boolean()
      })
    }
  }, async (context, request, response) => {
    try {
      var _pluginsStart$securit, _authorizationService;

      const [, pluginsStart] = await coreSetup.getStartServices();
      const {
        indexName,
        checkCreateIndexPattern,
        checkHasManagePipeline
      } = request.query;
      const authorizationService = (_pluginsStart$securit = pluginsStart.security) === null || _pluginsStart$securit === void 0 ? void 0 : _pluginsStart$securit.authz;
      const requiresAuthz = (_authorizationService = authorizationService === null || authorizationService === void 0 ? void 0 : authorizationService.mode.useRbacForRequest(request)) !== null && _authorizationService !== void 0 ? _authorizationService : false;

      if (!authorizationService || !requiresAuthz) {
        return response.ok({
          body: {
            hasImportPermission: true
          }
        });
      }

      const checkPrivilegesPayload = {
        elasticsearch: {
          cluster: checkHasManagePipeline ? ['manage_pipeline'] : [],
          index: indexName ? {
            [indexName]: ['create', 'create_index']
          } : {}
        }
      };

      if (checkCreateIndexPattern) {
        checkPrivilegesPayload.kibana = [authorizationService.actions.savedObject.get('index-pattern', 'create')];
      }

      const checkPrivileges = authorizationService.checkPrivilegesDynamicallyWithRequest(request);
      const checkPrivilegesResp = await checkPrivileges(checkPrivilegesPayload);
      return response.ok({
        body: {
          hasImportPermission: checkPrivilegesResp.hasAllRequested
        }
      });
    } catch (e) {
      logger.warn(`Unable to check import permission, error: ${e.message}`);
      return response.ok({
        body: {
          hasImportPermission: false
        }
      });
    }
  });
  /**
   * @apiGroup FileDataVisualizer
   *
   * @api {post} /internal/file_upload/analyze_file Analyze file data
   * @apiName AnalyzeFile
   * @apiDescription Performs analysis of the file data.
   *
   * @apiSchema (query) analyzeFileQuerySchema
   */

  router.post({
    path: '/internal/file_data_visualizer/analyze_file',
    validate: {
      body: _configSchema.schema.any(),
      query: _schemas.analyzeFileQuerySchema
    },
    options: {
      body: {
        accepts: ['text/*', 'application/json'],
        maxBytes: _common.MAX_FILE_SIZE_BYTES
      },
      tags: ['access:fileUpload:analyzeFile']
    }
  }, async (context, request, response) => {
    try {
      const result = await (0, _analyze_file.analyzeFile)(context.core.elasticsearch.client, request.body, request.query);
      return response.ok({
        body: result
      });
    } catch (e) {
      return response.customError((0, _error_wrapper.wrapError)(e));
    }
  });
  /**
   * @apiGroup FileDataVisualizer
   *
   * @api {post} /internal/file_upload/import Import file data
   * @apiName ImportFile
   * @apiDescription Imports file data into elasticsearch index.
   *
   * @apiSchema (query) importFileQuerySchema
   * @apiSchema (body) importFileBodySchema
   */

  router.post({
    path: '/internal/file_upload/import',
    validate: {
      query: _schemas.importFileQuerySchema,
      body: _schemas.importFileBodySchema
    },
    options: {
      body: {
        accepts: ['application/json'],
        maxBytes: _common.MAX_FILE_SIZE_BYTES
      },
      tags: ['access:fileUpload:import']
    }
  }, async (context, request, response) => {
    try {
      const {
        id
      } = request.query;
      const {
        index,
        data,
        settings,
        mappings,
        ingestPipeline
      } = request.body; // `id` being `undefined` tells us that this is a new import due to create a new index.
      // follow-up import calls to just add additional data will include the `id` of the created
      // index, we'll ignore those and don't increment the counter.

      if (id === undefined) {
        await (0, _telemetry.updateTelemetry)();
      }

      const result = await importData(context.core.elasticsearch.client, id, index, settings, mappings, // @ts-expect-error
      ingestPipeline, data);
      return response.ok({
        body: result
      });
    } catch (e) {
      return response.customError((0, _error_wrapper.wrapError)(e));
    }
  });
  /**
   * @apiGroup FileDataVisualizer
   *
   * @api {post} /internal/file_upload/index_exists ES Field caps wrapper checks if index exists
   * @apiName IndexExists
   */

  router.post({
    path: '/internal/file_upload/index_exists',
    validate: {
      body: _configSchema.schema.object({
        index: _configSchema.schema.string()
      })
    },
    options: {
      tags: ['access:fileUpload:analyzeFile']
    }
  }, async (context, request, response) => {
    try {
      const {
        index
      } = request.body;
      const options = {
        index: [index],
        fields: ['*'],
        ignore_unavailable: true,
        allow_no_indices: true
      };
      const {
        body
      } = await context.core.elasticsearch.client.asCurrentUser.fieldCaps(options);
      const exists = Array.isArray(body.indices) && body.indices.length !== 0;
      return response.ok({
        body: {
          exists
        }
      });
    } catch (e) {
      return response.customError((0, _error_wrapper.wrapError)(e));
    }
  });
  /**
   * @apiGroup FileDataVisualizer
   *
   * @api {post} /internal/file_upload/time_field_range Get time field range
   * @apiName GetTimeFieldRange
   * @apiDescription Returns the time range for the given index and query using the specified time range.
   *
   * @apiSchema (body) getTimeFieldRangeSchema
   *
   * @apiSuccess {Object} start start of time range with epoch and string properties.
   * @apiSuccess {Object} end end of time range with epoch and string properties.
   */

  router.post({
    path: '/internal/file_upload/time_field_range',
    validate: {
      body: _configSchema.schema.object({
        /** Index or indexes for which to return the time range. */
        index: _configSchema.schema.oneOf([_configSchema.schema.string(), _configSchema.schema.arrayOf(_configSchema.schema.string())]),

        /** Name of the time field in the index. */
        timeFieldName: _configSchema.schema.string(),

        /** Query to match documents in the index(es). */
        query: _configSchema.schema.maybe(_configSchema.schema.any())
      })
    },
    options: {
      tags: ['access:fileUpload:analyzeFile']
    }
  }, async (context, request, response) => {
    try {
      const {
        index,
        timeFieldName,
        query
      } = request.body;
      const resp = await (0, _get_time_field_range.getTimeFieldRange)(context.core.elasticsearch.client, index, timeFieldName, query);
      return response.ok({
        body: resp
      });
    } catch (e) {
      return response.customError((0, _error_wrapper.wrapError)(e));
    }
  });
}