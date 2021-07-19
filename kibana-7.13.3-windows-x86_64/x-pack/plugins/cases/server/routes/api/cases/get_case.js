"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initGetCaseApi = initGetCaseApi;

var _configSchema = require("@kbn/config-schema");

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _utils = require("../utils");

var _constants = require("../../../../common/constants");

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


function initGetCaseApi({
  router,
  logger
}) {
  router.get({
    path: _constants.CASE_DETAILS_URL,
    validate: {
      params: _configSchema.schema.object({
        case_id: _configSchema.schema.string()
      }),
      query: _configSchema.schema.object({
        includeComments: _configSchema.schema.boolean({
          defaultValue: true
        }),
        includeSubCaseComments: _configSchema.schema.maybe(_configSchema.schema.boolean({
          defaultValue: false
        }))
      })
    }
  }, async (context, request, response) => {
    try {
      if (!_constants.ENABLE_CASE_CONNECTOR && request.query.includeSubCaseComments !== undefined) {
        throw _boom.default.badRequest('The `subCaseId` is not supported when the case connector feature is disabled');
      }

      const casesClient = context.cases.getCasesClient();
      const id = request.params.case_id;
      return response.ok({
        body: await casesClient.get({
          id,
          includeComments: request.query.includeComments,
          includeSubCaseComments: request.query.includeSubCaseComments
        })
      });
    } catch (error) {
      logger.error(`Failed to retrieve case in route case id: ${request.params.case_id} \ninclude comments: ${request.query.includeComments} \ninclude sub comments: ${request.query.includeSubCaseComments}: ${error}`);
      return response.customError((0, _utils.wrapError)(error));
    }
  });
}