"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = void 0;

var _utils = require("../../routes/api/utils");

var _api = require("../../../common/api");

var _common = require("../../common");

var _error = require("../../common/error");

var _constants = require("../../../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Retrieves a case and optionally its comments and sub case comments.
 */


const get = async ({
  savedObjectsClient,
  caseService,
  id,
  logger,
  includeComments = false,
  includeSubCaseComments = false
}) => {
  try {
    let theCase;
    let subCaseIds = [];

    if (_constants.ENABLE_CASE_CONNECTOR) {
      const [caseInfo, subCasesForCaseId] = await Promise.all([caseService.getCase({
        client: savedObjectsClient,
        id
      }), caseService.findSubCasesByCaseId({
        client: savedObjectsClient,
        ids: [id]
      })]);
      theCase = caseInfo;
      subCaseIds = subCasesForCaseId.saved_objects.map(so => so.id);
    } else {
      theCase = await caseService.getCase({
        client: savedObjectsClient,
        id
      });
    }

    if (!includeComments) {
      return _api.CaseResponseRt.encode((0, _utils.flattenCaseSavedObject)({
        savedObject: theCase,
        subCaseIds
      }));
    }

    const theComments = await caseService.getAllCaseComments({
      client: savedObjectsClient,
      id,
      options: {
        sortField: 'created_at',
        sortOrder: 'asc'
      },
      includeSubCaseComments: _constants.ENABLE_CASE_CONNECTOR && includeSubCaseComments
    });
    return _api.CaseResponseRt.encode((0, _utils.flattenCaseSavedObject)({
      savedObject: theCase,
      comments: theComments.saved_objects,
      subCaseIds,
      totalComment: theComments.total,
      totalAlerts: (0, _common.countAlertsForID)({
        comments: theComments,
        id
      })
    }));
  } catch (error) {
    throw (0, _error.createCaseError)({
      message: `Failed to get case id: ${id}: ${error}`,
      error,
      logger
    });
  }
};

exports.get = get;