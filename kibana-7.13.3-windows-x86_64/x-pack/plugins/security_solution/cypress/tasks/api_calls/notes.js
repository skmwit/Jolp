"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNoteToTimeline = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const addNoteToTimeline = (note, timelineId) => cy.request({
  method: 'PATCH',
  url: '/api/note',
  body: {
    noteId: null,
    version: null,
    note: {
      note,
      timelineId
    }
  },
  headers: {
    'kbn-xsrf': 'cypress-creds'
  }
});

exports.addNoteToTimeline = addNoteToTimeline;