"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRuleRoute = void 0;

var _lodash = require("lodash");

var _configSchema = require("@kbn/config-schema");

var _lib = require("./lib");

var _types = require("../types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const paramSchema = _configSchema.schema.object({
  id: _configSchema.schema.string()
});

const rewriteBodyRes = ({
  alertTypeId,
  createdBy,
  updatedBy,
  createdAt,
  updatedAt,
  apiKeyOwner,
  notifyWhen,
  muteAll,
  mutedInstanceIds,
  executionStatus,
  actions,
  scheduledTaskId,
  ...rest
}) => ({ ...rest,
  rule_type_id: alertTypeId,
  created_by: createdBy,
  updated_by: updatedBy,
  created_at: createdAt,
  updated_at: updatedAt,
  api_key_owner: apiKeyOwner,
  notify_when: notifyWhen,
  mute_all: muteAll,
  muted_alert_ids: mutedInstanceIds,
  scheduled_task_id: scheduledTaskId,
  execution_status: executionStatus && { ...(0, _lodash.omit)(executionStatus, 'lastExecutionDate'),
    last_execution_date: executionStatus.lastExecutionDate
  },
  actions: actions.map(({
    group,
    id,
    actionTypeId,
    params
  }) => ({
    group,
    id,
    params,
    connector_type_id: actionTypeId
  }))
});

const getRuleRoute = (router, licenseState) => {
  router.get({
    path: `${_types.BASE_ALERTING_API_PATH}/rule/{id}`,
    validate: {
      params: paramSchema
    }
  }, router.handleLegacyErrors((0, _lib.verifyAccessAndContext)(licenseState, async function (context, req, res) {
    const alertsClient = context.alerting.getAlertsClient();
    const {
      id
    } = req.params;
    const rule = await alertsClient.get({
      id
    });
    return res.ok({
      body: rewriteBodyRes(rule)
    });
  })));
};

exports.getRuleRoute = getRuleRoute;