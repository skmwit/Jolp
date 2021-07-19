"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTupleDuplicateErrorsAndUniqueRules = exports.getDuplicates = exports.transformOrImportError = exports.transformOrBulkError = exports.transform = exports.transformFindAlerts = exports.transformAlertsToRules = exports.transformAlertToRule = exports.transformTags = exports.getIdBulkError = exports.getIdError = void 0;

var _fp = require("lodash/fp");

var _uuid = _interopRequireDefault(require("uuid"));

var _constants = require("../../../../../common/constants");

var _types = require("../../rules/types");

var _utils = require("../utils");

var _rule_converters = require("../../schemas/rule_converters");

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


const getIdError = ({
  id,
  ruleId
}) => {
  if (id != null) {
    return {
      message: `id: "${id}" not found`,
      statusCode: 404
    };
  } else if (ruleId != null) {
    return {
      message: `rule_id: "${ruleId}" not found`,
      statusCode: 404
    };
  } else {
    return {
      message: 'id or rule_id should have been defined',
      statusCode: 404
    };
  }
};

exports.getIdError = getIdError;

const getIdBulkError = ({
  id,
  ruleId
}) => {
  if (id != null && ruleId != null) {
    return (0, _utils.createBulkErrorObject)({
      id,
      ruleId,
      statusCode: 404,
      message: `id: "${id}" and rule_id: "${ruleId}" not found`
    });
  } else if (id != null) {
    return (0, _utils.createBulkErrorObject)({
      id,
      statusCode: 404,
      message: `id: "${id}" not found`
    });
  } else if (ruleId != null) {
    return (0, _utils.createBulkErrorObject)({
      ruleId,
      statusCode: 404,
      message: `rule_id: "${ruleId}" not found`
    });
  } else {
    return (0, _utils.createBulkErrorObject)({
      statusCode: 404,
      message: `id or rule_id should have been defined`
    });
  }
};

exports.getIdBulkError = getIdBulkError;

const transformTags = tags => {
  return tags.filter(tag => !tag.startsWith(_constants.INTERNAL_IDENTIFIER));
}; // Transforms the data but will remove any null or undefined it encounters and not include
// those on the export


exports.transformTags = transformTags;

const transformAlertToRule = (alert, ruleActions, ruleStatus) => {
  return (0, _rule_converters.internalRuleToAPIResponse)(alert, ruleActions, ruleStatus);
};

exports.transformAlertToRule = transformAlertToRule;

const transformAlertsToRules = alerts => {
  return alerts.map(alert => transformAlertToRule(alert));
};

exports.transformAlertsToRules = transformAlertsToRules;

const transformFindAlerts = (findResults, ruleActions, ruleStatuses) => {
  if (!ruleStatuses && (0, _types.isAlertTypes)(findResults.data)) {
    return {
      page: findResults.page,
      perPage: findResults.perPage,
      total: findResults.total,
      data: findResults.data.map((alert, idx) => transformAlertToRule(alert, ruleActions[idx]))
    };
  } else if ((0, _types.isAlertTypes)(findResults.data) && (0, _types.isRuleStatusFindTypes)(ruleStatuses)) {
    return {
      page: findResults.page,
      perPage: findResults.perPage,
      total: findResults.total,
      data: findResults.data.map((alert, idx) => transformAlertToRule(alert, ruleActions[idx], ruleStatuses[idx].saved_objects[0]))
    };
  } else {
    return null;
  }
};

exports.transformFindAlerts = transformFindAlerts;

const transform = (alert, ruleActions, ruleStatus) => {
  if ((0, _types.isAlertType)(alert)) {
    return transformAlertToRule(alert, ruleActions, (0, _types.isRuleStatusSavedObjectType)(ruleStatus) ? ruleStatus : undefined);
  }

  return null;
};

exports.transform = transform;

const transformOrBulkError = (ruleId, alert, ruleActions, ruleStatus) => {
  if ((0, _types.isAlertType)(alert)) {
    if ((0, _types.isRuleStatusFindType)(ruleStatus) && (ruleStatus === null || ruleStatus === void 0 ? void 0 : ruleStatus.saved_objects.length) > 0) {
      var _ruleStatus$saved_obj;

      return transformAlertToRule(alert, ruleActions, (_ruleStatus$saved_obj = ruleStatus === null || ruleStatus === void 0 ? void 0 : ruleStatus.saved_objects[0]) !== null && _ruleStatus$saved_obj !== void 0 ? _ruleStatus$saved_obj : ruleStatus);
    } else {
      return transformAlertToRule(alert, ruleActions);
    }
  } else {
    return (0, _utils.createBulkErrorObject)({
      ruleId,
      statusCode: 500,
      message: 'Internal error transforming'
    });
  }
};

exports.transformOrBulkError = transformOrBulkError;

const transformOrImportError = (ruleId, alert, existingImportSuccessError) => {
  if ((0, _types.isAlertType)(alert)) {
    return (0, _utils.createSuccessObject)(existingImportSuccessError);
  } else {
    return (0, _utils.createImportErrorObject)({
      ruleId,
      statusCode: 500,
      message: 'Internal error transforming',
      existingImportSuccessError
    });
  }
};

exports.transformOrImportError = transformOrImportError;

const getDuplicates = (ruleDefinitions, by) => {
  const mappedDuplicates = (0, _fp.countBy)(by, ruleDefinitions.filter(r => r[by] != null));
  const hasDuplicates = Object.values(mappedDuplicates).some(i => i > 1);

  if (hasDuplicates) {
    return Object.keys(mappedDuplicates).filter(key => mappedDuplicates[key] > 1);
  }

  return [];
};

exports.getDuplicates = getDuplicates;

const getTupleDuplicateErrorsAndUniqueRules = (rules, isOverwrite) => {
  const {
    errors,
    rulesAcc
  } = rules.reduce((acc, parsedRule) => {
    if (parsedRule instanceof Error) {
      acc.rulesAcc.set(_uuid.default.v4(), parsedRule);
    } else {
      const {
        rule_id: ruleId
      } = parsedRule;

      if (acc.rulesAcc.has(ruleId) && !isOverwrite) {
        acc.errors.set(_uuid.default.v4(), (0, _utils.createBulkErrorObject)({
          ruleId,
          statusCode: 400,
          message: `More than one rule with rule-id: "${ruleId}" found`
        }));
      }

      acc.rulesAcc.set(ruleId, parsedRule);
    }

    return acc;
  }, // using map (preserves ordering)
  {
    errors: new Map(),
    rulesAcc: new Map()
  });
  return [Array.from(errors.values()), Array.from(rulesAcc.values())];
};

exports.getTupleDuplicateErrorsAndUniqueRules = getTupleDuplicateErrorsAndUniqueRules;