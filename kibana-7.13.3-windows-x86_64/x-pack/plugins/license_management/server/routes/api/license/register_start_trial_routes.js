"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerStartTrialRoutes = registerStartTrialRoutes;

var _start_trial = require("../../../lib/start_trial");

var _helpers = require("../../helpers");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function registerStartTrialRoutes({
  router,
  plugins: {
    licensing
  }
}) {
  router.get({
    path: (0, _helpers.addBasePath)('/start_trial'),
    validate: false
  }, async (ctx, req, res) => {
    const {
      callAsCurrentUser
    } = ctx.core.elasticsearch.legacy.client;
    return res.ok({
      body: await (0, _start_trial.canStartTrial)(callAsCurrentUser)
    });
  });
  router.post({
    path: (0, _helpers.addBasePath)('/start_trial'),
    validate: false
  }, async (ctx, req, res) => {
    const {
      callAsCurrentUser
    } = ctx.core.elasticsearch.legacy.client;
    return res.ok({
      body: await (0, _start_trial.startTrial)({
        callAsCurrentUser,
        licensing
      })
    });
  });
}