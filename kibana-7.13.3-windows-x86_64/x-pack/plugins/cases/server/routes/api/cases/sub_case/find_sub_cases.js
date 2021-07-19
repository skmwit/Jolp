"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFindSubCasesApi = initFindSubCasesApi;

var _configSchema = require("@kbn/config-schema");

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _pipeable = require("fp-ts/lib/pipeable");

var _Either = require("fp-ts/lib/Either");

var _function = require("fp-ts/lib/function");

var _api = require("../../../../../common/api");

var _utils = require("../../utils");

var _constants = require("../../../../../common/constants");

var _helpers = require("../helpers");

var _ = require("../..");

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


function initFindSubCasesApi({
  caseService,
  router,
  logger
}) {
  router.get({
    path: `${_constants.SUB_CASES_URL}/_find`,
    validate: {
      params: _configSchema.schema.object({
        case_id: _configSchema.schema.string()
      }),
      query: _utils.escapeHatch
    }
  }, async (context, request, response) => {
    try {
      const client = context.core.savedObjects.client;
      const queryParams = (0, _pipeable.pipe)(_api.SubCasesFindRequestRt.decode(request.query), (0, _Either.fold)((0, _api.throwErrors)(_boom.default.badRequest), _function.identity));
      const ids = [request.params.case_id];
      const {
        subCase: subCaseQueryOptions
      } = (0, _helpers.constructQueryOptions)({
        status: queryParams.status,
        sortByField: queryParams.sortField
      });
      const subCases = await caseService.findSubCasesGroupByCase({
        client,
        ids,
        options: {
          sortField: 'created_at',
          page: _.defaultPage,
          perPage: _.defaultPerPage,
          ...queryParams,
          ...subCaseQueryOptions
        }
      });
      const [open, inProgress, closed] = await Promise.all([..._api.caseStatuses.map(status => {
        const {
          subCase: statusQueryOptions
        } = (0, _helpers.constructQueryOptions)({
          status,
          sortByField: queryParams.sortField
        });
        return caseService.findSubCaseStatusStats({
          client,
          options: statusQueryOptions !== null && statusQueryOptions !== void 0 ? statusQueryOptions : {},
          ids
        });
      })]);
      return response.ok({
        body: _api.SubCasesFindResponseRt.encode((0, _utils.transformSubCases)({
          page: subCases.page,
          perPage: subCases.perPage,
          total: subCases.total,
          subCasesMap: subCases.subCasesMap,
          open,
          inProgress,
          closed
        }))
      });
    } catch (error) {
      logger.error(`Failed to find sub cases in route case id: ${request.params.case_id}: ${error}`);
      return response.customError((0, _utils.wrapError)(error));
    }
  });
}