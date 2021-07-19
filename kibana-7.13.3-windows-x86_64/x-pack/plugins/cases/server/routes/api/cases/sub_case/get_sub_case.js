"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initGetSubCaseApi = initGetSubCaseApi;

var _configSchema = require("@kbn/config-schema");

var _api = require("../../../../../common/api");

var _utils = require("../../utils");

var _constants = require("../../../../../common/constants");

var _common = require("../../../../common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function initGetSubCaseApi({
  caseService,
  router,
  logger
}) {
  router.get({
    path: _constants.SUB_CASE_DETAILS_URL,
    validate: {
      params: _configSchema.schema.object({
        case_id: _configSchema.schema.string(),
        sub_case_id: _configSchema.schema.string()
      }),
      query: _configSchema.schema.object({
        includeComments: _configSchema.schema.boolean({
          defaultValue: true
        })
      })
    }
  }, async (context, request, response) => {
    try {
      const client = context.core.savedObjects.client;
      const includeComments = request.query.includeComments;
      const subCase = await caseService.getSubCase({
        client,
        id: request.params.sub_case_id
      });

      if (!includeComments) {
        return response.ok({
          body: _api.SubCaseResponseRt.encode((0, _utils.flattenSubCaseSavedObject)({
            savedObject: subCase
          }))
        });
      }

      const theComments = await caseService.getAllSubCaseComments({
        client,
        id: request.params.sub_case_id,
        options: {
          sortField: 'created_at',
          sortOrder: 'asc'
        }
      });
      return response.ok({
        body: _api.SubCaseResponseRt.encode((0, _utils.flattenSubCaseSavedObject)({
          savedObject: subCase,
          comments: theComments.saved_objects,
          totalComment: theComments.total,
          totalAlerts: (0, _common.countAlertsForID)({
            comments: theComments,
            id: request.params.sub_case_id
          })
        }))
      });
    } catch (error) {
      var _request$query;

      logger.error(`Failed to get sub case in route case id: ${request.params.case_id} sub case id: ${request.params.sub_case_id} include comments: ${(_request$query = request.query) === null || _request$query === void 0 ? void 0 : _request$query.includeComments}: ${error}`);
      return response.customError((0, _utils.wrapError)(error));
    }
  });
}