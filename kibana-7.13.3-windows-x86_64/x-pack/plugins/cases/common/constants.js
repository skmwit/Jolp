"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENABLE_CASE_CONNECTOR = exports.MAX_GENERATED_ALERTS_PER_SUB_CASE = exports.MAX_ALERTS_PER_SUB_CASE = exports.SUPPORTED_CONNECTORS = exports.RESILIENT_ACTION_TYPE_ID = exports.JIRA_ACTION_TYPE_ID = exports.SERVICENOW_SIR_ACTION_TYPE_ID = exports.SERVICENOW_ITSM_ACTION_TYPE_ID = exports.ACTION_TYPES_URL = exports.ACTION_URL = exports.CASE_USER_ACTIONS_URL = exports.CASE_TAGS_URL = exports.CASE_STATUS_URL = exports.CASE_REPORTERS_URL = exports.CASE_PUSH_URL = exports.CASE_COMMENT_DETAILS_URL = exports.CASE_COMMENTS_URL = exports.SUB_CASE_USER_ACTIONS_URL = exports.SUB_CASE_DETAILS_URL = exports.SUB_CASES_URL = exports.SUB_CASES_PATCH_DEL_URL = exports.CASE_CONFIGURE_CONNECTORS_URL = exports.CASE_CONFIGURE_URL = exports.CASE_DETAILS_URL = exports.CASES_URL = exports.APP_ID = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const APP_ID = 'cases';
/**
 * Case routes
 */

exports.APP_ID = APP_ID;
const CASES_URL = '/api/cases';
exports.CASES_URL = CASES_URL;
const CASE_DETAILS_URL = `${CASES_URL}/{case_id}`;
exports.CASE_DETAILS_URL = CASE_DETAILS_URL;
const CASE_CONFIGURE_URL = `${CASES_URL}/configure`;
exports.CASE_CONFIGURE_URL = CASE_CONFIGURE_URL;
const CASE_CONFIGURE_CONNECTORS_URL = `${CASE_CONFIGURE_URL}/connectors`;
exports.CASE_CONFIGURE_CONNECTORS_URL = CASE_CONFIGURE_CONNECTORS_URL;
const SUB_CASES_PATCH_DEL_URL = `${CASES_URL}/sub_cases`;
exports.SUB_CASES_PATCH_DEL_URL = SUB_CASES_PATCH_DEL_URL;
const SUB_CASES_URL = `${CASE_DETAILS_URL}/sub_cases`;
exports.SUB_CASES_URL = SUB_CASES_URL;
const SUB_CASE_DETAILS_URL = `${CASE_DETAILS_URL}/sub_cases/{sub_case_id}`;
exports.SUB_CASE_DETAILS_URL = SUB_CASE_DETAILS_URL;
const SUB_CASE_USER_ACTIONS_URL = `${SUB_CASE_DETAILS_URL}/user_actions`;
exports.SUB_CASE_USER_ACTIONS_URL = SUB_CASE_USER_ACTIONS_URL;
const CASE_COMMENTS_URL = `${CASE_DETAILS_URL}/comments`;
exports.CASE_COMMENTS_URL = CASE_COMMENTS_URL;
const CASE_COMMENT_DETAILS_URL = `${CASE_DETAILS_URL}/comments/{comment_id}`;
exports.CASE_COMMENT_DETAILS_URL = CASE_COMMENT_DETAILS_URL;
const CASE_PUSH_URL = `${CASE_DETAILS_URL}/connector/{connector_id}/_push`;
exports.CASE_PUSH_URL = CASE_PUSH_URL;
const CASE_REPORTERS_URL = `${CASES_URL}/reporters`;
exports.CASE_REPORTERS_URL = CASE_REPORTERS_URL;
const CASE_STATUS_URL = `${CASES_URL}/status`;
exports.CASE_STATUS_URL = CASE_STATUS_URL;
const CASE_TAGS_URL = `${CASES_URL}/tags`;
exports.CASE_TAGS_URL = CASE_TAGS_URL;
const CASE_USER_ACTIONS_URL = `${CASE_DETAILS_URL}/user_actions`;
/**
 * Action routes
 */

exports.CASE_USER_ACTIONS_URL = CASE_USER_ACTIONS_URL;
const ACTION_URL = '/api/actions';
exports.ACTION_URL = ACTION_URL;
const ACTION_TYPES_URL = '/api/actions/list_action_types';
exports.ACTION_TYPES_URL = ACTION_TYPES_URL;
const SERVICENOW_ITSM_ACTION_TYPE_ID = '.servicenow';
exports.SERVICENOW_ITSM_ACTION_TYPE_ID = SERVICENOW_ITSM_ACTION_TYPE_ID;
const SERVICENOW_SIR_ACTION_TYPE_ID = '.servicenow-sir';
exports.SERVICENOW_SIR_ACTION_TYPE_ID = SERVICENOW_SIR_ACTION_TYPE_ID;
const JIRA_ACTION_TYPE_ID = '.jira';
exports.JIRA_ACTION_TYPE_ID = JIRA_ACTION_TYPE_ID;
const RESILIENT_ACTION_TYPE_ID = '.resilient';
exports.RESILIENT_ACTION_TYPE_ID = RESILIENT_ACTION_TYPE_ID;
const SUPPORTED_CONNECTORS = [SERVICENOW_ITSM_ACTION_TYPE_ID, SERVICENOW_SIR_ACTION_TYPE_ID, JIRA_ACTION_TYPE_ID, RESILIENT_ACTION_TYPE_ID];
/**
 * Alerts
 */
// this value is from x-pack/plugins/security_solution/common/constants.ts

exports.SUPPORTED_CONNECTORS = SUPPORTED_CONNECTORS;
const DEFAULT_MAX_SIGNALS = 100;
const MAX_ALERTS_PER_SUB_CASE = 5000;
exports.MAX_ALERTS_PER_SUB_CASE = MAX_ALERTS_PER_SUB_CASE;
const MAX_GENERATED_ALERTS_PER_SUB_CASE = MAX_ALERTS_PER_SUB_CASE / DEFAULT_MAX_SIGNALS;
/**
 * This flag governs enabling the case as a connector feature. It is disabled by default as the feature is not complete.
 */

exports.MAX_GENERATED_ALERTS_PER_SUB_CASE = MAX_GENERATED_ALERTS_PER_SUB_CASE;
const ENABLE_CASE_CONNECTOR = false;
exports.ENABLE_CASE_CONNECTOR = ENABLE_CASE_CONNECTOR;