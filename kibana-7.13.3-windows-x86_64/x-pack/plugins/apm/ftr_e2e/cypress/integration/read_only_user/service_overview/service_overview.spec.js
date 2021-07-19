"use strict";

var _url = _interopRequireDefault(require("url"));

var _archives_metadata = _interopRequireDefault(require("../../../fixtures/es_archiver/archives_metadata"));

var _es_archiver = require("../../../tasks/es_archiver");

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
const serviceOverviewPath = '/app/apm/services/opbeans-node/overview';

const baseUrl = _url.default.format({
  pathname: serviceOverviewPath,
  query: {
    rangeFrom: start,
    rangeTo: end
  }
});

describe('Service Overview', () => {
  before(() => {
    (0, _es_archiver.esArchiverLoad)('apm_8.0.0');
  });
  after(() => {
    (0, _es_archiver.esArchiverUnload)('apm_8.0.0');
  });
  beforeEach(() => {
    cy.loginAsReadOnlyUser();
  });
  it('persists transaction type selected when clicking on Transactions tab', () => {
    cy.visit(baseUrl);
    cy.get('[data-test-subj="headerFilterTransactionType"]').should('have.value', 'request');
    cy.get('[data-test-subj="headerFilterTransactionType"]').select('Worker');
    cy.get('[data-test-subj="headerFilterTransactionType"]').should('have.value', 'Worker');
    cy.get('[data-test-subj="tab_transactions"]').click();
    cy.get('[data-test-subj="headerFilterTransactionType"]').should('have.value', 'Worker');
  });
  it('persists transaction type selected when clicking on View Transactions link', () => {
    cy.visit(baseUrl);
    cy.get('[data-test-subj="headerFilterTransactionType"]').should('have.value', 'request');
    cy.get('[data-test-subj="headerFilterTransactionType"]').select('Worker');
    cy.get('[data-test-subj="headerFilterTransactionType"]').should('have.value', 'Worker');
    cy.contains('View transactions').click();
    cy.get('[data-test-subj="headerFilterTransactionType"]').should('have.value', 'Worker');
  });
});