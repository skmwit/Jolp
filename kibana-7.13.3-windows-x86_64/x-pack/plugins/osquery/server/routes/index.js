"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineRoutes = void 0;

var _action = require("./action");

var _saved_query = require("./saved_query");

var _pack = require("./pack");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const defineRoutes = (router, context) => {
  const config = context.config();
  (0, _action.initActionRoutes)(router, context);

  if (config.packs) {
    (0, _pack.initPackRoutes)(router);
  }

  if (config.savedQueries) {
    (0, _saved_query.initSavedQueryRoutes)(router);
  }
};

exports.defineRoutes = defineRoutes;