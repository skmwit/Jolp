"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryOrUndefined = exports.query = exports.platformOrUndefined = exports.platform = exports.descriptionOrUndefined = exports.description = exports.agentSelectionOrUndefined = exports.agentSelection = exports.nameOrUndefined = exports.name = void 0;

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


const name = t.string;
exports.name = name;
const nameOrUndefined = t.union([name, t.undefined]);
exports.nameOrUndefined = nameOrUndefined;
const agentSelection = t.type({
  agents: t.array(t.string),
  allAgentsSelected: t.boolean,
  platformsSelected: t.array(t.string),
  policiesSelected: t.array(t.string)
});
exports.agentSelection = agentSelection;
const agentSelectionOrUndefined = t.union([agentSelection, t.undefined]);
exports.agentSelectionOrUndefined = agentSelectionOrUndefined;
const description = t.string;
exports.description = description;
const descriptionOrUndefined = t.union([description, t.undefined]);
exports.descriptionOrUndefined = descriptionOrUndefined;
const platform = t.string;
exports.platform = platform;
const platformOrUndefined = t.union([platform, t.undefined]);
exports.platformOrUndefined = platformOrUndefined;
const query = t.string;
exports.query = query;
const queryOrUndefined = t.union([query, t.undefined]);
exports.queryOrUndefined = queryOrUndefined;