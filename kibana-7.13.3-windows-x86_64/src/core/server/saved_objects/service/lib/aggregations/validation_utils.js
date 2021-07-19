"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rewriteObjectTypeAttribute = exports.isObjectTypeAttribute = exports.rewriteRootLevelAttribute = exports.isRootLevelAttribute = void 0;

var _filter_utils = require("../filter_utils");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Returns true if the given attribute path is a valid root level SO attribute path
 *
 * @example
 * ```ts
 * isRootLevelAttribute('myType.updated_at', indexMapping, ['myType']})
 * // => true
 * ```
 */
const isRootLevelAttribute = (attributePath, indexMapping, allowedTypes) => {
  const splits = attributePath.split('.');

  if (splits.length !== 2) {
    return false;
  }

  const [type, fieldName] = splits;

  if (allowedTypes.includes(fieldName)) {
    return false;
  }

  return allowedTypes.includes(type) && (0, _filter_utils.fieldDefined)(indexMapping, fieldName);
};
/**
 * Rewrites a root level attribute path to strip the type
 *
 * @example
 * ```ts
 * rewriteRootLevelAttribute('myType.updated_at')
 * // => 'updated_at'
 * ```
 */


exports.isRootLevelAttribute = isRootLevelAttribute;

const rewriteRootLevelAttribute = attributePath => {
  return attributePath.split('.')[1];
};
/**
 * Returns true if the given attribute path is a valid object type level SO attribute path
 *
 * @example
 * ```ts
 * isObjectTypeAttribute('myType.attributes.someField', indexMapping, ['myType']})
 * // => true
 * ```
 */


exports.rewriteRootLevelAttribute = rewriteRootLevelAttribute;

const isObjectTypeAttribute = (attributePath, indexMapping, allowedTypes) => {
  const error = (0, _filter_utils.hasFilterKeyError)(attributePath, allowedTypes, indexMapping);
  return error == null;
};
/**
 * Rewrites a object type attribute path to strip the type
 *
 * @example
 * ```ts
 * rewriteObjectTypeAttribute('myType.attributes.foo')
 * // => 'myType.foo'
 * ```
 */


exports.isObjectTypeAttribute = isObjectTypeAttribute;

const rewriteObjectTypeAttribute = attributePath => {
  return attributePath.replace('.attributes', '');
};

exports.rewriteObjectTypeAttribute = rewriteObjectTypeAttribute;