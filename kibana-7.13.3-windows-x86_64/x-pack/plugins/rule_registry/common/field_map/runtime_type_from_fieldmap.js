"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runtimeTypeFromFieldMap = runtimeTypeFromFieldMap;

var _lodash = require("lodash");

var t = _interopRequireWildcard(require("io-ts"));

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


const esFieldTypeMap = {
  keyword: t.string,
  text: t.string,
  date: t.string,
  boolean: t.boolean,
  byte: t.number,
  long: t.number,
  integer: t.number,
  short: t.number,
  double: t.number,
  float: t.number,
  scaled_float: t.number,
  unsigned_long: t.number,
  flattened: t.record(t.string, t.array(t.string))
};

const createCastArrayRt = type => {
  const union = t.union([type, t.array(type)]);
  return new t.Type('castArray', union.is, union.validate, a => Array.isArray(a) ? a : [a]);
};

const createCastSingleRt = type => {
  const union = t.union([type, t.array(type)]);
  return new t.Type('castSingle', union.is, union.validate, a => Array.isArray(a) ? a[0] : a);
};

function runtimeTypeFromFieldMap(fieldMap) {
  function mapToType(fields) {
    return (0, _lodash.mapValues)(fields, field => {
      const type = field.type in esFieldTypeMap ? esFieldTypeMap[field.type] : t.unknown;
      return field.array ? createCastArrayRt(type) : createCastSingleRt(type);
    });
  }

  const required = (0, _lodash.pickBy)(fieldMap, field => field.required);
  return t.intersection([t.exact(t.partial(mapToType(fieldMap))), t.type(mapToType(required))]);
}