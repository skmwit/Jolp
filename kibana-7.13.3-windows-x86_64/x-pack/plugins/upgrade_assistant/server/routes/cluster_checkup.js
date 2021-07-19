"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerClusterCheckupRoutes = registerClusterCheckupRoutes;

var _constants = require("../../common/constants");

var _es_migration_apis = require("../lib/es_migration_apis");

var _es_version_precheck = require("../lib/es_version_precheck");

var _reindex_actions = require("../lib/reindexing/reindex_actions");

var _reindexing = require("../lib/reindexing");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function registerClusterCheckupRoutes({
  cloud,
  router,
  licensing,
  log
}) {
  const isCloudEnabled = Boolean(cloud === null || cloud === void 0 ? void 0 : cloud.isCloudEnabled);
  router.get({
    path: `${_constants.API_BASE_PATH}/status`,
    validate: false
  }, (0, _es_version_precheck.versionCheckHandlerWrapper)(async ({
    core: {
      savedObjects: {
        client: savedObjectsClient
      },
      elasticsearch: {
        client
      }
    }
  }, request, response) => {
    try {
      const status = await (0, _es_migration_apis.getUpgradeAssistantStatus)(client, isCloudEnabled);
      const asCurrentUser = client.asCurrentUser;
      const reindexActions = (0, _reindex_actions.reindexActionsFactory)(savedObjectsClient, asCurrentUser);
      const reindexService = (0, _reindexing.reindexServiceFactory)(asCurrentUser, reindexActions, log, licensing);
      const indexNames = status.indices.filter(({
        index
      }) => typeof index !== 'undefined').map(({
        index
      }) => index);
      await reindexService.cleanupReindexOperations(indexNames);
      return response.ok({
        body: status
      });
    } catch (e) {
      if (e.statusCode === 403) {
        return response.forbidden(e.message);
      }

      throw e;
    }
  }));
}