"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDeleteSubCasesApi = initDeleteSubCasesApi;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _configSchema = require("@kbn/config-schema");

var _helpers = require("../../../../services/user_actions/helpers");

var _utils = require("../../utils");

var _constants = require("../../../../../common/constants");

var _saved_object_types = require("../../../../saved_object_types");

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


function initDeleteSubCasesApi({
  caseService,
  router,
  userActionService,
  logger
}) {
  router.delete({
    path: _constants.SUB_CASES_PATCH_DEL_URL,
    validate: {
      query: _configSchema.schema.object({
        ids: _configSchema.schema.arrayOf(_configSchema.schema.string())
      })
    }
  }, async (context, request, response) => {
    try {
      const client = context.core.savedObjects.client;
      const [comments, subCases] = await Promise.all([caseService.getAllSubCaseComments({
        client,
        id: request.query.ids
      }), caseService.getSubCases({
        client,
        ids: request.query.ids
      })]);
      const subCaseErrors = subCases.saved_objects.filter(subCase => subCase.error !== undefined);

      if (subCaseErrors.length > 0) {
        throw _boom.default.notFound(`These sub cases ${subCaseErrors.map(c => c.id).join(', ')} do not exist. Please check you have the correct ids.`);
      }

      const subCaseIDToParentID = subCases.saved_objects.reduce((acc, subCase) => {
        const parentID = subCase.references.find(ref => ref.type === _saved_object_types.CASE_SAVED_OBJECT);
        acc.set(subCase.id, parentID === null || parentID === void 0 ? void 0 : parentID.id);
        return acc;
      }, new Map());
      await Promise.all(comments.saved_objects.map(comment => caseService.deleteComment({
        client,
        commentId: comment.id
      })));
      await Promise.all(request.query.ids.map(id => caseService.deleteSubCase(client, id))); // eslint-disable-next-line @typescript-eslint/naming-convention

      const {
        username,
        full_name,
        email
      } = await caseService.getUser({
        request
      });
      const deleteDate = new Date().toISOString();
      await userActionService.postUserActions({
        client,
        actions: request.query.ids.map(id => {
          var _subCaseIDToParentID$;

          return (0, _helpers.buildCaseUserActionItem)({
            action: 'delete',
            actionAt: deleteDate,
            actionBy: {
              username,
              full_name,
              email
            },
            // if for some reason the sub case didn't have a reference to its parent, we'll still log a user action
            // but we won't have the case ID
            caseId: (_subCaseIDToParentID$ = subCaseIDToParentID.get(id)) !== null && _subCaseIDToParentID$ !== void 0 ? _subCaseIDToParentID$ : '',
            subCaseId: id,
            fields: ['sub_case', 'comment', 'status']
          });
        })
      });
      return response.noContent();
    } catch (error) {
      logger.error(`Failed to delete sub cases in route ids: ${JSON.stringify(request.query.ids)}: ${error}`);
      return response.customError((0, _utils.wrapError)(error));
    }
  });
}