"use strict";

var _timeline = require("../../objects/timeline");

var _timeline2 = require("../../screens/timeline");

var _timelines = require("../../tasks/api_calls/timelines");

var _common = require("../../tasks/common");

var _login = require("../../tasks/login");

var _timeline3 = require("../../tasks/timeline");

var _timelines2 = require("../../tasks/timelines");

var _navigation = require("../../urls/navigation");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


describe('Timeline notes tab', () => {
  let timelineId;
  before(() => {
    (0, _common.cleanKibana)();
    (0, _login.loginAndWaitForPageWithoutDateRange)(_navigation.TIMELINES_URL);
    (0, _timelines2.waitForTimelinesPanelToBeLoaded)();
    (0, _timelines.createTimeline)(_timeline.timeline).then(response => {
      if (response.body.data.persistTimeline.timeline.savedObjectId == null) {
        cy.log('"createTimeline" did not return expected response');
      }

      timelineId = response.body.data.persistTimeline.timeline.savedObjectId;
      (0, _timelines2.waitForTimelinesPanelToBeLoaded)();
    }).then(() => {
      // TODO: It would be great to add response validation to avoid such things like
      // the bang below and to more easily understand where failures are coming from -
      // client vs server side
      (0, _timeline3.openTimelineById)(timelineId).then(() => {
        (0, _timeline3.addNotesToTimeline)(_timeline.timeline.notes);
      });
    });
  });
  after(() => {
    (0, _timeline3.closeTimeline)();
  });
  it('should contain notes', () => {
    cy.get(_timeline2.NOTES_TEXT).should('have.text', _timeline.timeline.notes);
  });
  it('should render mockdown', () => {
    cy.get(_timeline2.NOTES_TEXT_AREA).should('exist');
  });
});