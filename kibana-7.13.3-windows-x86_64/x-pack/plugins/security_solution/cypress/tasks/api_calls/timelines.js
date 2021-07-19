"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimelineById = exports.deleteTimeline = exports.createTimelineTemplate = exports.createTimeline = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const createTimeline = timeline => cy.request({
  method: 'POST',
  url: 'api/timeline',
  body: {
    timeline: {
      columns: [{
        id: '@timestamp'
      }, {
        id: 'user.name'
      }, {
        id: 'event.category'
      }, {
        id: 'event.action'
      }, {
        id: 'host.name'
      }],
      kqlMode: 'filter',
      kqlQuery: {
        filterQuery: {
          kuery: {
            expression: timeline.query,
            kind: 'kuery'
          }
        }
      },
      dateRange: {
        end: '1577881376000',
        start: '1514809376000'
      },
      description: timeline.description,
      title: timeline.title
    }
  },
  headers: {
    'kbn-xsrf': 'cypress-creds'
  }
});

exports.createTimeline = createTimeline;

const createTimelineTemplate = timeline => cy.request({
  method: 'POST',
  url: 'api/timeline',
  body: {
    timeline: {
      columns: [{
        id: '@timestamp'
      }, {
        id: 'user.name'
      }, {
        id: 'event.category'
      }, {
        id: 'event.action'
      }, {
        id: 'host.name'
      }],
      kqlMode: 'filter',
      kqlQuery: {
        filterQuery: {
          kuery: {
            expression: timeline.query,
            kind: 'kuery'
          }
        }
      },
      dateRange: {
        end: '1577881376000',
        start: '1514809376000'
      },
      description: timeline.description,
      title: timeline.title,
      templateTimelineVersion: 1,
      timelineType: 'template'
    }
  },
  headers: {
    'kbn-xsrf': 'cypress-creds'
  }
});

exports.createTimelineTemplate = createTimelineTemplate;

const deleteTimeline = timelineId => {
  cy.request({
    method: 'POST',
    url: 'api/timeline',
    body: {
      id: [timelineId]
    },
    headers: {
      'kbn-xsrf': 'delete-signals'
    }
  });
};

exports.deleteTimeline = deleteTimeline;

const getTimelineById = timelineId => cy.request({
  method: 'GET',
  url: `api/timeline?id=${timelineId}`,
  headers: {
    'kbn-xsrf': 'timeline-by-id'
  }
});

exports.getTimelineById = getTimelineById;