"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initPatchSubCasesApi = initPatchSubCasesApi;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _pipeable = require("fp-ts/lib/pipeable");

var _Either = require("fp-ts/lib/Either");

var _function = require("fp-ts/lib/function");

var _saved_object_types = require("../../../../saved_object_types");

var _api = require("../../../../../common/api");

var _constants = require("../../../../../common/constants");

var _utils = require("../../utils");

var _helpers = require("../helpers");

var _helpers2 = require("../../../../services/user_actions/helpers");

var _common = require("../../../../common");

var _error = require("../../../../common/error");

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


function checkNonExistingOrConflict(toUpdate, fromStorage) {
  const nonExistingSubCases = [];
  const conflictedSubCases = [];

  for (const subCaseToUpdate of toUpdate) {
    const bulkEntry = fromStorage.get(subCaseToUpdate.id);

    if (bulkEntry && bulkEntry.error) {
      nonExistingSubCases.push(subCaseToUpdate);
    }

    if (!bulkEntry || bulkEntry.version !== subCaseToUpdate.version) {
      conflictedSubCases.push(subCaseToUpdate);
    }
  }

  if (nonExistingSubCases.length > 0) {
    throw _boom.default.notFound(`These sub cases ${nonExistingSubCases.map(c => c.id).join(', ')} do not exist. Please check you have the correct ids.`);
  }

  if (conflictedSubCases.length > 0) {
    throw _boom.default.conflict(`These sub cases ${conflictedSubCases.map(c => c.id).join(', ')} has been updated. Please refresh before saving additional updates.`);
  }
}

function getParentIDs({
  subCasesMap,
  subCaseIDs
}) {
  return subCaseIDs.reduce((acc, id) => {
    const subCase = subCasesMap.get(id);

    if (subCase && subCase.references.length > 0) {
      const parentID = subCase.references[0].id;
      acc.ids.push(parentID);
      let subIDs = acc.parentIDToSubID.get(parentID);

      if (subIDs === undefined) {
        subIDs = [];
      }

      subIDs.push(id);
      acc.parentIDToSubID.set(parentID, subIDs);
    }

    return acc;
  }, {
    ids: [],
    parentIDToSubID: new Map()
  });
}

async function getParentCases({
  caseService,
  client,
  subCaseIDs,
  subCasesMap
}) {
  const parentIDInfo = getParentIDs({
    subCaseIDs,
    subCasesMap
  });
  const parentCases = await caseService.getCases({
    client,
    caseIds: parentIDInfo.ids
  });
  const parentCaseErrors = parentCases.saved_objects.filter(so => so.error !== undefined);

  if (parentCaseErrors.length > 0) {
    throw _boom.default.badRequest(`Unable to find parent cases: ${parentCaseErrors.map(c => c.id).join(', ')} for sub cases: ${subCaseIDs.join(', ')}`);
  }

  return parentCases.saved_objects.reduce((acc, so) => {
    const subCaseIDsWithParent = parentIDInfo.parentIDToSubID.get(so.id);
    subCaseIDsWithParent === null || subCaseIDsWithParent === void 0 ? void 0 : subCaseIDsWithParent.forEach(subCaseId => {
      acc.set(subCaseId, so);
    });
    return acc;
  }, new Map());
}

function getValidUpdateRequests(toUpdate, subCasesMap) {
  const validatedSubCaseAttributes = toUpdate.map(updateCase => {
    const currentCase = subCasesMap.get(updateCase.id);
    return currentCase != null ? (0, _helpers.getCaseToUpdate)(currentCase.attributes, { ...updateCase
    }) : {
      id: updateCase.id,
      version: updateCase.version
    };
  });
  return validatedSubCaseAttributes.filter(updateCase => {
    const {
      id,
      version,
      ...updateCaseAttributes
    } = updateCase;
    return Object.keys(updateCaseAttributes).length > 0;
  });
}
/**
 * Get the id from a reference in a comment for a sub case
 */


function getID(comment) {
  var _comment$references$f;

  return (_comment$references$f = comment.references.find(ref => ref.type === _saved_object_types.SUB_CASE_SAVED_OBJECT)) === null || _comment$references$f === void 0 ? void 0 : _comment$references$f.id;
}
/**
 * Get all the alert comments for a set of sub cases
 */


async function getAlertComments({
  subCasesToSync,
  caseService,
  client
}) {
  const ids = subCasesToSync.map(subCase => subCase.id);
  return caseService.getAllSubCaseComments({
    client,
    id: ids,
    options: {
      filter: `${_saved_object_types.CASE_COMMENT_SAVED_OBJECT}.attributes.type: ${_api.CommentType.alert} OR ${_saved_object_types.CASE_COMMENT_SAVED_OBJECT}.attributes.type: ${_api.CommentType.generatedAlert}`
    }
  });
}
/**
 * Updates the status of alerts for the specified sub cases.
 */


async function updateAlerts({
  subCasesToSync,
  caseService,
  client,
  casesClient,
  logger
}) {
  try {
    const subCasesToSyncMap = subCasesToSync.reduce((acc, subCase) => {
      acc.set(subCase.id, subCase);
      return acc;
    }, new Map()); // get all the alerts for all sub cases that need to be synced

    const totalAlerts = await getAlertComments({
      caseService,
      client,
      subCasesToSync
    }); // create a map of the status (open, closed, etc) to alert info that needs to be updated

    const alertsToUpdate = totalAlerts.saved_objects.reduce((acc, alertComment) => {
      if ((0, _utils.isCommentRequestTypeAlertOrGenAlert)(alertComment.attributes)) {
        var _subCasesToSyncMap$ge, _subCasesToSyncMap$ge2;

        const id = getID(alertComment);
        const status = id !== undefined ? (_subCasesToSyncMap$ge = (_subCasesToSyncMap$ge2 = subCasesToSyncMap.get(id)) === null || _subCasesToSyncMap$ge2 === void 0 ? void 0 : _subCasesToSyncMap$ge2.status) !== null && _subCasesToSyncMap$ge !== void 0 ? _subCasesToSyncMap$ge : _api.CaseStatuses.open : _api.CaseStatuses.open;
        acc.push(...(0, _common.createAlertUpdateRequest)({
          comment: alertComment.attributes,
          status
        }));
      }

      return acc;
    }, []);
    await casesClient.updateAlertsStatus({
      alerts: alertsToUpdate
    });
  } catch (error) {
    throw (0, _error.createCaseError)({
      message: `Failed to update alert status while updating sub cases: ${JSON.stringify(subCasesToSync)}: ${error}`,
      logger,
      error
    });
  }
}

async function update({
  client,
  caseService,
  userActionService,
  request,
  casesClient,
  subCases,
  logger
}) {
  const query = (0, _pipeable.pipe)((0, _api.excess)(_api.SubCasesPatchRequestRt).decode(subCases), (0, _Either.fold)((0, _api.throwErrors)(_boom.default.badRequest), _function.identity));

  try {
    const bulkSubCases = await caseService.getSubCases({
      client,
      ids: query.subCases.map(q => q.id)
    });
    const subCasesMap = bulkSubCases.saved_objects.reduce((acc, so) => {
      acc.set(so.id, so);
      return acc;
    }, new Map());
    checkNonExistingOrConflict(query.subCases, subCasesMap);
    const nonEmptySubCaseRequests = getValidUpdateRequests(query.subCases, subCasesMap);

    if (nonEmptySubCaseRequests.length <= 0) {
      throw _boom.default.notAcceptable('All update fields are identical to current version.');
    }

    const subIDToParentCase = await getParentCases({
      client,
      caseService,
      subCaseIDs: nonEmptySubCaseRequests.map(subCase => subCase.id),
      subCasesMap
    }); // eslint-disable-next-line @typescript-eslint/naming-convention

    const {
      username,
      full_name,
      email
    } = await caseService.getUser({
      request
    });
    const updatedAt = new Date().toISOString();
    const updatedCases = await caseService.patchSubCases({
      client,
      subCases: nonEmptySubCaseRequests.map(thisCase => {
        const {
          id: subCaseId,
          version,
          ...updateSubCaseAttributes
        } = thisCase;
        let closedInfo = {
          closed_at: null,
          closed_by: null
        };

        if (updateSubCaseAttributes.status && updateSubCaseAttributes.status === _api.CaseStatuses.closed) {
          closedInfo = {
            closed_at: updatedAt,
            closed_by: {
              email,
              full_name,
              username
            }
          };
        } else if (updateSubCaseAttributes.status && (updateSubCaseAttributes.status === _api.CaseStatuses.open || updateSubCaseAttributes.status === _api.CaseStatuses['in-progress'])) {
          closedInfo = {
            closed_at: null,
            closed_by: null
          };
        }

        return {
          subCaseId,
          updatedAttributes: { ...updateSubCaseAttributes,
            ...closedInfo,
            updated_at: updatedAt,
            updated_by: {
              email,
              full_name,
              username
            }
          },
          version
        };
      })
    });
    const subCasesToSyncAlertsFor = nonEmptySubCaseRequests.filter(subCaseToUpdate => {
      const storedSubCase = subCasesMap.get(subCaseToUpdate.id);
      const parentCase = subIDToParentCase.get(subCaseToUpdate.id);
      return storedSubCase !== undefined && subCaseToUpdate.status !== undefined && storedSubCase.attributes.status !== subCaseToUpdate.status && (parentCase === null || parentCase === void 0 ? void 0 : parentCase.attributes.settings.syncAlerts);
    });
    await updateAlerts({
      caseService,
      client,
      casesClient,
      subCasesToSync: subCasesToSyncAlertsFor,
      logger
    });
    const returnUpdatedSubCases = updatedCases.saved_objects.reduce((acc, updatedSO) => {
      const originalSubCase = subCasesMap.get(updatedSO.id);

      if (originalSubCase) {
        var _updatedSO$version;

        acc.push((0, _utils.flattenSubCaseSavedObject)({
          savedObject: { ...originalSubCase,
            ...updatedSO,
            attributes: { ...originalSubCase.attributes,
              ...updatedSO.attributes
            },
            references: originalSubCase.references,
            version: (_updatedSO$version = updatedSO.version) !== null && _updatedSO$version !== void 0 ? _updatedSO$version : originalSubCase.version
          }
        }));
      }

      return acc;
    }, []);
    await userActionService.postUserActions({
      client,
      actions: (0, _helpers2.buildSubCaseUserActions)({
        originalSubCases: bulkSubCases.saved_objects,
        updatedSubCases: updatedCases.saved_objects,
        actionDate: updatedAt,
        actionBy: {
          email,
          full_name,
          username
        }
      })
    });
    return _api.SubCasesResponseRt.encode(returnUpdatedSubCases);
  } catch (error) {
    const idVersions = query.subCases.map(subCase => ({
      id: subCase.id,
      version: subCase.version
    }));
    throw (0, _error.createCaseError)({
      message: `Failed to update sub cases: ${JSON.stringify(idVersions)}: ${error}`,
      error,
      logger
    });
  }
}

function initPatchSubCasesApi({
  router,
  caseService,
  userActionService,
  logger
}) {
  router.patch({
    path: _constants.SUB_CASES_PATCH_DEL_URL,
    validate: {
      body: _utils.escapeHatch
    }
  }, async (context, request, response) => {
    try {
      const casesClient = context.cases.getCasesClient();
      const subCases = request.body;
      return response.ok({
        body: await update({
          request,
          subCases,
          casesClient,
          client: context.core.savedObjects.client,
          caseService,
          userActionService,
          logger
        })
      });
    } catch (error) {
      logger.error(`Failed to patch sub cases in route: ${error}`);
      return response.customError((0, _utils.wrapError)(error));
    }
  });
}