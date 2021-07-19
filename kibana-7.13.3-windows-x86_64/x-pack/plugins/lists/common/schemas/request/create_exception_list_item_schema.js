"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExceptionListItemSchema = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _schemas = require("../common/schemas");

var _types = require("../types");

var _shared_imports = require("../../shared_imports");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createExceptionListItemSchema = t.intersection([t.exact(t.type({
  description: _schemas.description,
  entries: _types.nonEmptyEntriesArray,
  list_id: _schemas.list_id,
  name: _schemas.name,
  type: _schemas.exceptionListItemType
})), t.exact(t.partial({
  comments: _types.DefaultCreateCommentsArray,
  // defaults to empty array if not set during decode
  item_id: _shared_imports.DefaultUuid,
  // defaults to GUID (uuid v4) if not set during decode
  meta: _schemas.meta,
  // defaults to undefined if not set during decode
  namespace_type: _schemas.namespace_type,
  // defaults to 'single' if not set during decode
  os_types: _schemas.osTypeArrayOrUndefined,
  // defaults to empty array if not set during decode
  tags: _schemas.tags // defaults to empty array if not set during decode

}))]);
exports.createExceptionListItemSchema = createExceptionListItemSchema;