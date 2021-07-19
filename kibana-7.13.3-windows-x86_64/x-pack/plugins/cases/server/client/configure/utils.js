"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultMapping = exports.formatFields = void 0;

var _api = require("../../../common/api");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const normalizeJiraFields = jiraFields => Object.keys(jiraFields).reduce((acc, data) => jiraFields[data].schema.type === 'string' ? [...acc, {
  id: data,
  name: jiraFields[data].name,
  required: jiraFields[data].required,
  type: 'text'
}] : acc, []);

const normalizeResilientFields = resilientFields => resilientFields.reduce((acc, data) => (data.input_type === 'textarea' || data.input_type === 'text') && !data.read_only ? [...acc, {
  id: data.name,
  name: data.text,
  required: data.required === 'always',
  type: data.input_type
}] : acc, []);

const normalizeServiceNowFields = snFields => snFields.reduce((acc, data) => [...acc, {
  id: data.element,
  name: data.column_label,
  required: data.mandatory === 'true',
  type: parseFloat(data.max_length) > 160 ? 'textarea' : 'text'
}], []);

const formatFields = (theData, theType) => {
  switch (theType) {
    case _api.ConnectorTypes.jira:
      return normalizeJiraFields(theData);

    case _api.ConnectorTypes.resilient:
      return normalizeResilientFields(theData);

    case _api.ConnectorTypes.serviceNowITSM:
      return normalizeServiceNowFields(theData);

    case _api.ConnectorTypes.serviceNowSIR:
      return normalizeServiceNowFields(theData);

    default:
      return [];
  }
};

exports.formatFields = formatFields;

const getPreferredFields = theType => {
  let title = '';
  let description = '';
  let comments = '';

  if (theType === _api.ConnectorTypes.jira) {
    title = 'summary';
    description = 'description';
    comments = 'comments';
  } else if (theType === _api.ConnectorTypes.resilient) {
    title = 'name';
    description = 'description';
    comments = 'comments';
  } else if (theType === _api.ConnectorTypes.serviceNowITSM || theType === _api.ConnectorTypes.serviceNowSIR) {
    title = 'short_description';
    description = 'description';
    comments = 'work_notes';
  }

  return {
    title,
    description,
    comments
  };
};

const createDefaultMapping = (fields, theType) => {
  const {
    description,
    title,
    comments
  } = getPreferredFields(theType);
  return [{
    source: 'title',
    target: title,
    action_type: 'overwrite'
  }, {
    source: 'description',
    target: description,
    action_type: 'overwrite'
  }, {
    source: 'comments',
    target: comments,
    action_type: 'append'
  }];
};

exports.createDefaultMapping = createDefaultMapping;