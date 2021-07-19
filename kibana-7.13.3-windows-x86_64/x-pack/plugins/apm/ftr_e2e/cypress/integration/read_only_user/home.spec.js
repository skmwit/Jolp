"use strict";

var _url = _interopRequireDefault(require("url"));

var _archives_metadata = _interopRequireDefault(require("../../fixtures/es_archiver/archives_metadata"));

var _es_archiver = require("../../tasks/es_archiver");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const {
  start,
  end
} = _archives_metadata.default['apm_8.0.0'];
const servicesPath = '/app/apm/services';

const baseUrl = _url.default.format({
  pathname: servicesPath,
  query: {
    rangeFrom: start,
    rangeTo: end
  }
});

describe('Home page', () => {
  before(() => {
    (0, _es_archiver.esArchiverLoad)('apm_8.0.0');
  });
  after(() => {
    (0, _es_archiver.esArchiverUnload)('apm_8.0.0');
  });
  beforeEach(() => {
    cy.loginAsReadOnlyUser();
  });
  it('Redirects to service page with rangeFrom and rangeTo added to the URL', () => {
    cy.visit('/app/apm');
    cy.url().should('include', 'app/apm/services?rangeFrom=now-15m&rangeTo=now');
    cy.get('.euiTabs .euiTab-isSelected').contains('Services');
  });
  it('includes services with only metric documents', () => {
    cy.visit(`${baseUrl}&kuery=not%2520(processor.event%2520%253A%2522transaction%2522%2520)`);
    cy.contains('opbeans-python');
    cy.contains('opbeans-java');
    cy.contains('opbeans-node');
  });
  describe('navigations', () => {
    it('navigates to service overview page with transaction type', () => {
      const kuery = encodeURIComponent('transaction.name : "taskManager markAvailableTasksAsClaimed"');
      cy.visit(`${baseUrl}&kuery=${kuery}`);
      cy.contains('taskManager');
      cy.contains('kibana').click();
      cy.get('[data-test-subj="headerFilterTransactionType"]').should('have.value', 'taskManager');
    });
  });
});