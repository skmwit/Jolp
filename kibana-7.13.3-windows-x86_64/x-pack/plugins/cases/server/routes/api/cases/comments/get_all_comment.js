"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initGetAllCommentsApi = initGetAllCommentsApi;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _configSchema = require("@kbn/config-schema");

var _api = require("../../../../../common/api");

var _utils = require("../../utils");

var _constants = require("../../../../../common/constants");

var _common = require("../../../../common");

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


function initGetAllCommentsApi({
  caseService,
  router,
  logger
}) {
  router.get({
    path: _constants.CASE_COMMENTS_URL,
    validate: {
      params: _configSchema.schema.object({
        case_id: _configSchema.schema.string()
      }),
      query: _configSchema.schema.maybe(_configSchema.schema.object({
        includeSubCaseComments: _configSchema.schema.maybe(_configSchema.schema.boolean()),
        subCaseId: _configSchema.schema.maybe(_configSchema.schema.string())
      }))
    }
  }, async (context, request, response) => {
    try {
      var _request$query, _request$query2, _request$query3;

      const client = context.core.savedObjects.client;
      let comments;

      if (!_constants.ENABLE_CASE_CONNECTOR && (((_request$query = request.query) === null || _request$query === void 0 ? void 0 : _request$query.subCaseId) !== undefined || ((_request$query2 = request.query) === null || _request$query2 === void 0 ? void 0 : _request$query2.includeSubCaseComments) !== undefined)) {
        throw _boom.default.badRequest('The `subCaseId` and `includeSubCaseComments` are not supported when the case connector feature is disabled');
      }

      if ((_request$query3 = request.query) !== null && _request$query3 !== void 0 && _request$query3.subCaseId) {
        comments = await caseService.getAllSubCaseComments({
          client,
          id: request.query.subCaseId,
          options: {
            sortField: _common.defaultSortField
          }
        });
      } else {
        var _request$query4;

        comments = await caseService.getAllCaseComments({
          client,
          id: request.params.case_id,
          includeSubCaseComments: (_request$query4 = request.query) === null || _request$query4 === void 0 ? void 0 : _request$query4.includeSubCaseComments,
          options: {
            sortField: _common.defaultSortField
          }
        });
      }

      return response.ok({
        body: _api.AllCommentsResponseRt.encode((0, _utils.flattenCommentSavedObjects)(comments.saved_objects))
      });
    } catch (error) {
      var _request$query5, _request$query6;

      logger.error(`Failed to get all comments in route case id: ${request.params.case_id} include sub case comments: ${(_request$query5 = request.query) === null || _request$query5 === void 0 ? void 0 : _request$query5.includeSubCaseComments} sub case id: ${(_request$query6 = request.query) === null || _request$query6 === void 0 ? void 0 : _request$query6.subCaseId}: ${error}`);
      return response.customError((0, _utils.wrapError)(error));
    }
  });
}