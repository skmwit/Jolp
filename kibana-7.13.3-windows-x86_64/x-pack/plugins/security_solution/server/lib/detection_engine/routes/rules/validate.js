"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformValidateBulkError = exports.newTransformValidate = exports.transformValidate = void 0;

var _request = require("../../../../../common/detection_engine/schemas/request");

var _validate = require("../../../../../common/validate");

var _rules_schema = require("../../../../../common/detection_engine/schemas/response/rules_schema");

var _types = require("../../rules/types");

var _utils = require("../utils");

var _utils2 = require("./utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const transformValidate = (alert, ruleActions, ruleStatus) => {
  const transformed = (0, _utils2.transform)(alert, ruleActions, ruleStatus);

  if (transformed == null) {
    return [null, 'Internal error transforming'];
  } else {
    return (0, _validate.validateNonExact)(transformed, _rules_schema.rulesSchema);
  }
};

exports.transformValidate = transformValidate;

const newTransformValidate = (alert, ruleActions, ruleStatus) => {
  const transformed = (0, _utils2.transform)(alert, ruleActions, ruleStatus);

  if (transformed == null) {
    return [null, 'Internal error transforming'];
  } else {
    return (0, _validate.validateNonExact)(transformed, _request.fullResponseSchema);
  }
};

exports.newTransformValidate = newTransformValidate;

const transformValidateBulkError = (ruleId, alert, ruleActions, ruleStatus) => {
  if ((0, _types.isAlertType)(alert)) {
    if ((0, _types.isRuleStatusFindType)(ruleStatus) && (ruleStatus === null || ruleStatus === void 0 ? void 0 : ruleStatus.saved_objects.length) > 0) {
      var _ruleStatus$saved_obj;

      const transformed = (0, _utils2.transformAlertToRule)(alert, ruleActions, (_ruleStatus$saved_obj = ruleStatus === null || ruleStatus === void 0 ? void 0 : ruleStatus.saved_objects[0]) !== null && _ruleStatus$saved_obj !== void 0 ? _ruleStatus$saved_obj : ruleStatus);
      const [validated, errors] = (0, _validate.validateNonExact)(transformed, _rules_schema.rulesSchema);

      if (errors != null || validated == null) {
        return (0, _utils.createBulkErrorObject)({
          ruleId,
          statusCode: 500,
          message: errors !== null && errors !== void 0 ? errors : 'Internal error transforming'
        });
      } else {
        return validated;
      }
    } else {
      const transformed = (0, _utils2.transformAlertToRule)(alert);
      const [validated, errors] = (0, _validate.validateNonExact)(transformed, _rules_schema.rulesSchema);

      if (errors != null || validated == null) {
        return (0, _utils.createBulkErrorObject)({
          ruleId,
          statusCode: 500,
          message: errors !== null && errors !== void 0 ? errors : 'Internal error transforming'
        });
      } else {
        return validated;
      }
    }
  } else {
    return (0, _utils.createBulkErrorObject)({
      ruleId,
      statusCode: 500,
      message: 'Internal error transforming'
    });
  }
};

exports.transformValidateBulkError = transformValidateBulkError;