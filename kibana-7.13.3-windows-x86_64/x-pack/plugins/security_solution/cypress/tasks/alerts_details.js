"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollJsonViewToBottom = exports.openJsonView = void 0;

var _alerts_details = require("../screens/alerts_details");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const openJsonView = () => {
  cy.get(_alerts_details.JSON_VIEW_TAB).click();
};

exports.openJsonView = openJsonView;

const scrollJsonViewToBottom = () => {
  cy.get(_alerts_details.JSON_CONTENT).click({
    force: true
  });
  cy.get(_alerts_details.JSON_CONTENT).type('{pagedown}{pagedown}{pagedown}');
};

exports.scrollJsonViewToBottom = scrollJsonViewToBottom;