"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSavedObjects = exports.savedObjectTypes = void 0;

var _saved_object_mappings = require("./lib/saved_query/saved_object_mappings");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const types = [_saved_object_mappings.savedQueryType, _saved_object_mappings.packType];
const savedObjectTypes = types.map(type => type.name);
exports.savedObjectTypes = savedObjectTypes;

const initSavedObjects = (savedObjects, osqueryContext) => {
  const config = osqueryContext.config();

  if (config.savedQueries) {
    savedObjects.registerType(_saved_object_mappings.savedQueryType);
  }

  if (config.packs) {
    savedObjects.registerType(_saved_object_mappings.packType);
  }
};

exports.initSavedObjects = initSavedObjects;