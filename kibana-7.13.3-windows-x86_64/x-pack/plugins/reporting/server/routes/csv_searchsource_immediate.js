"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerGenerateCsvFromSavedObjectImmediate = registerGenerateCsvFromSavedObjectImmediate;

var _configSchema = require("@kbn/config-schema");

var _execute_job = require("../export_types/csv_searchsource_immediate/execute_job");

var _authorized_user_pre_routing = require("./lib/authorized_user_pre_routing");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const API_BASE_URL_V1 = '/api/reporting/v1';
const API_BASE_GENERATE_V1 = `${API_BASE_URL_V1}/generate`;
/*
 * This function registers API Endpoints for immediate Reporting jobs. The API inputs are:
 * - saved object type and ID
 * - time range and time zone
 * - application state:
 *     - filters
 *     - query bar
 *     - local (transient) changes the user made to the saved object
 */

function registerGenerateCsvFromSavedObjectImmediate(reporting, handleError, parentLogger) {
  const setupDeps = reporting.getPluginSetupDeps();
  const userHandler = (0, _authorized_user_pre_routing.authorizedUserPreRoutingFactory)(reporting);
  const {
    router
  } = setupDeps; // This API calls run the SearchSourceImmediate export type's runTaskFn directly

  router.post({
    path: `${API_BASE_GENERATE_V1}/immediate/csv_searchsource`,
    validate: {
      body: _configSchema.schema.object({
        columns: _configSchema.schema.maybe(_configSchema.schema.arrayOf(_configSchema.schema.string())),
        searchSource: _configSchema.schema.object({}, {
          unknowns: 'allow'
        }),
        browserTimezone: _configSchema.schema.string({
          defaultValue: 'UTC'
        }),
        title: _configSchema.schema.string()
      })
    }
  }, userHandler(async (user, context, req, res) => {
    const logger = parentLogger.clone(['csv_searchsource_immediate']);
    const runTaskFn = (0, _execute_job.runTaskFnFactory)(reporting, logger);

    try {
      const {
        content_type: jobOutputContentType,
        content: jobOutputContent,
        size: jobOutputSize
      } = await runTaskFn(null, req.body, context, req);
      logger.info(`Job output size: ${jobOutputSize} bytes`); // convert null to undefined so the value can be sent to h.response()

      if (jobOutputContent === null) {
        logger.warn('CSV Job Execution created empty content result');
      }

      return res.ok({
        body: jobOutputContent || '',
        headers: {
          'content-type': jobOutputContentType ? jobOutputContentType : [],
          'accept-ranges': 'none'
        }
      });
    } catch (err) {
      logger.error(err);
      return handleError(res, err);
    }
  }));
}