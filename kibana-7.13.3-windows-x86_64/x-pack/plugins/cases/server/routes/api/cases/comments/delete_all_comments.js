"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDeleteAllCommentsApi = initDeleteAllCommentsApi;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _configSchema = require("@kbn/config-schema");

var _helpers = require("../../../../services/user_actions/helpers");

var _utils = require("../../utils");

var _constants = require("../../../../../common/constants");

var _api = require("../../../../../common/api");

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


function initDeleteAllCommentsApi({
  caseService,
  router,
  userActionService,
  logger
}) {
  router.delete({
    path: _constants.CASE_COMMENTS_URL,
    validate: {
      params: _configSchema.schema.object({
        case_id: _configSchema.schema.string()
      }),
      query: _configSchema.schema.maybe(_configSchema.schema.object({
        subCaseId: _configSchema.schema.maybe(_configSchema.schema.string())
      }))
    }
  }, async (context, request, response) => {
    try {
      var _request$query, _request$query2;

      if (!_constants.ENABLE_CASE_CONNECTOR && ((_request$query = request.query) === null || _request$query === void 0 ? void 0 : _request$query.subCaseId) !== undefined) {
        throw _boom.default.badRequest('The `subCaseId` is not supported when the case connector feature is disabled');
      }

      const client = context.core.savedObjects.client; // eslint-disable-next-line @typescript-eslint/naming-convention

      const {
        username,
        full_name,
        email
      } = await caseService.getUser({
        request
      });
      const deleteDate = new Date().toISOString();
      const subCaseId = (_request$query2 = request.query) === null || _request$query2 === void 0 ? void 0 : _request$query2.subCaseId;
      const id = subCaseId !== null && subCaseId !== void 0 ? subCaseId : request.params.case_id;
      const comments = await caseService.getCommentsByAssociation({
        client,
        id,
        associationType: subCaseId ? _api.AssociationType.subCase : _api.AssociationType.case
      });
      await Promise.all(comments.saved_objects.map(comment => caseService.deleteComment({
        client,
        commentId: comment.id
      })));
      await userActionService.postUserActions({
        client,
        actions: comments.saved_objects.map(comment => (0, _helpers.buildCommentUserActionItem)({
          action: 'delete',
          actionAt: deleteDate,
          actionBy: {
            username,
            full_name,
            email
          },
          caseId: request.params.case_id,
          subCaseId,
          commentId: comment.id,
          fields: ['comment']
        }))
      });
      return response.noContent();
    } catch (error) {
      var _request$query3;

      logger.error(`Failed to delete all comments in route case id: ${request.params.case_id} sub case id: ${(_request$query3 = request.query) === null || _request$query3 === void 0 ? void 0 : _request$query3.subCaseId}: ${error}`);
      return response.customError((0, _utils.wrapError)(error));
    }
  });
}