"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateField = validateField;
exports.toSanitizedFieldType = exports.extractFieldLabel = exports.FieldNotFoundError = void 0;

var _i18n = require("@kbn/i18n");

var _common = require("../../data/common");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
class FieldNotFoundError extends Error {
  constructor(name) {
    super(_i18n.i18n.translate('visTypeTimeseries.fields.fieldNotFound', {
      defaultMessage: `Field "{field}" not found`,
      values: {
        field: name
      }
    }));
  }

  get name() {
    return this.constructor.name;
  }

  get body() {
    return this.message;
  }

}

exports.FieldNotFoundError = FieldNotFoundError;

const extractFieldLabel = (fields, name, isThrowErrorOnFieldNotFound = true) => {
  if (fields.length && name) {
    const field = fields.find(f => f.name === name);

    if (field) {
      return field.label || field.name;
    }

    if (isThrowErrorOnFieldNotFound) {
      throw new FieldNotFoundError(name);
    }
  }

  return name;
};

exports.extractFieldLabel = extractFieldLabel;

function validateField(name, index) {
  if (name && index.indexPattern) {
    const field = index.indexPattern.fields.find(f => f.name === name);

    if (!field) {
      throw new FieldNotFoundError(name);
    }
  }
}

const toSanitizedFieldType = fields => fields.filter(field => field.aggregatable && !(0, _common.isNestedField)(field)).map(field => {
  var _field$customLabel;

  return {
    name: field.name,
    label: (_field$customLabel = field.customLabel) !== null && _field$customLabel !== void 0 ? _field$customLabel : field.name,
    type: field.type
  };
});

exports.toSanitizedFieldType = toSanitizedFieldType;