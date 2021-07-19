"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packType = exports.packSavedObjectMappings = exports.savedQueryType = exports.savedQuerySavedObjectMappings = void 0;

var _types = require("../../../common/types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const savedQuerySavedObjectMappings = {
  properties: {
    description: {
      type: 'text'
    },
    name: {
      type: 'text'
    },
    query: {
      type: 'text'
    },
    created: {
      type: 'date'
    },
    createdBy: {
      type: 'text'
    },
    platform: {
      type: 'keyword'
    },
    updated: {
      type: 'date'
    },
    updatedBy: {
      type: 'text'
    }
  }
};
exports.savedQuerySavedObjectMappings = savedQuerySavedObjectMappings;
const savedQueryType = {
  name: _types.savedQuerySavedObjectType,
  hidden: false,
  namespaceType: 'single',
  mappings: savedQuerySavedObjectMappings
};
exports.savedQueryType = savedQueryType;
const packSavedObjectMappings = {
  properties: {
    description: {
      type: 'text'
    },
    name: {
      type: 'text'
    },
    created: {
      type: 'date'
    },
    createdBy: {
      type: 'text'
    },
    updated: {
      type: 'date'
    },
    updatedBy: {
      type: 'text'
    },
    queries: {
      properties: {
        name: {
          type: 'keyword'
        },
        interval: {
          type: 'text'
        }
      }
    }
  }
};
exports.packSavedObjectMappings = packSavedObjectMappings;
const packType = {
  name: _types.packSavedObjectType,
  hidden: false,
  namespaceType: 'single',
  mappings: packSavedObjectMappings
};
exports.packType = packType;