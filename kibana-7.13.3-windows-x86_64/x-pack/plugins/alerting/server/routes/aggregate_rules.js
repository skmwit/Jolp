"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggregateRulesRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _lib = require("./lib");

var _types = require("../types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// config definition


const querySchema = _configSchema.schema.object({
  search: _configSchema.schema.maybe(_configSchema.schema.string()),
  default_search_operator: _configSchema.schema.oneOf([_configSchema.schema.literal('OR'), _configSchema.schema.literal('AND')], {
    defaultValue: 'OR'
  }),
  search_fields: _configSchema.schema.maybe(_configSchema.schema.arrayOf(_configSchema.schema.string())),
  has_reference: _configSchema.schema.maybe( // use nullable as maybe is currently broken
  // in config-schema
  _configSchema.schema.nullable(_configSchema.schema.object({
    type: _configSchema.schema.string(),
    id: _configSchema.schema.string()
  }))),
  filter: _configSchema.schema.maybe(_configSchema.schema.string())
});

const rewriteQueryReq = ({
  default_search_operator: defaultSearchOperator,
  has_reference: hasReference,
  search_fields: searchFields,
  ...rest
}) => ({ ...rest,
  defaultSearchOperator,
  ...(hasReference ? {
    hasReference
  } : {}),
  ...(searchFields ? {
    searchFields
  } : {})
});

const rewriteBodyRes = ({
  alertExecutionStatus,
  ...rest
}) => ({ ...rest,
  rule_execution_status: alertExecutionStatus
});

const aggregateRulesRoute = (router, licenseState) => {
  router.get({
    path: `${_types.INTERNAL_BASE_ALERTING_API_PATH}/rules/_aggregate`,
    validate: {
      query: querySchema
    }
  }, router.handleLegacyErrors((0, _lib.verifyAccessAndContext)(licenseState, async function (context, req, res) {
    const alertsClient = context.alerting.getAlertsClient();
    const options = rewriteQueryReq({ ...req.query,
      has_reference: req.query.has_reference || undefined
    });
    const aggregateResult = await alertsClient.aggregate({
      options
    });
    return res.ok({
      body: rewriteBodyRes(aggregateResult)
    });
  })));
};

exports.aggregateRulesRoute = aggregateRulesRoute;