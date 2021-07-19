"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findRulesRoute = void 0;

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
// query definition


const querySchema = _configSchema.schema.object({
  per_page: _configSchema.schema.number({
    defaultValue: 10,
    min: 0
  }),
  page: _configSchema.schema.number({
    defaultValue: 1,
    min: 1
  }),
  search: _configSchema.schema.maybe(_configSchema.schema.string()),
  default_search_operator: _configSchema.schema.oneOf([_configSchema.schema.literal('OR'), _configSchema.schema.literal('AND')], {
    defaultValue: 'OR'
  }),
  search_fields: _configSchema.schema.maybe(_configSchema.schema.oneOf([_configSchema.schema.arrayOf(_configSchema.schema.string()), _configSchema.schema.string()])),
  sort_field: _configSchema.schema.maybe(_configSchema.schema.string()),
  sort_order: _configSchema.schema.maybe(_configSchema.schema.oneOf([_configSchema.schema.literal('asc'), _configSchema.schema.literal('desc')])),
  has_reference: _configSchema.schema.maybe( // use nullable as maybe is currently broken
  // in config-schema
  _configSchema.schema.nullable(_configSchema.schema.object({
    type: _configSchema.schema.string(),
    id: _configSchema.schema.string()
  }))),
  fields: _configSchema.schema.maybe(_configSchema.schema.arrayOf(_configSchema.schema.string())),
  filter: _configSchema.schema.maybe(_configSchema.schema.string())
});

const rewriteQueryReq = ({
  default_search_operator: defaultSearchOperator,
  has_reference: hasReference,
  search_fields: searchFields,
  per_page: perPage,
  sort_field: sortField,
  sort_order: sortOrder,
  ...rest
}) => ({ ...rest,
  defaultSearchOperator,
  perPage,
  ...(sortField ? {
    sortField
  } : {}),
  ...(sortOrder ? {
    sortOrder
  } : {}),
  ...(hasReference ? {
    hasReference
  } : {}),
  ...(searchFields ? {
    searchFields
  } : {})
});

const rewriteBodyRes = ({
  perPage,
  data,
  ...restOfResult
}) => {
  return { ...restOfResult,
    per_page: perPage,
    data: data.map(({
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
    }))
  };
};

const findRulesRoute = (router, licenseState) => {
  router.get({
    path: `${_types.BASE_ALERTING_API_PATH}/rules/_find`,
    validate: {
      query: querySchema
    }
  }, router.handleLegacyErrors((0, _lib.verifyAccessAndContext)(licenseState, async function (context, req, res) {
    const alertsClient = context.alerting.getAlertsClient();
    const options = rewriteQueryReq({ ...req.query,
      has_reference: req.query.has_reference || undefined,
      search_fields: searchFieldsAsArray(req.query.search_fields)
    });
    const findResult = await alertsClient.find({
      options
    });
    return res.ok({
      body: rewriteBodyRes(findResult)
    });
  })));
};

exports.findRulesRoute = findRulesRoute;

function searchFieldsAsArray(searchFields) {
  if (!searchFields) {
    return;
  }

  return Array.isArray(searchFields) ? searchFields : [searchFields];
}