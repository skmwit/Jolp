"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildEventsSearchQuery = void 0;

var _lodash = require("lodash");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const buildEventsSearchQuery = ({
  aggregations,
  index,
  from,
  to,
  filter,
  size,
  searchAfterSortIds,
  sortOrder,
  timestampOverride
}) => {
  const defaultTimeFields = ['@timestamp'];
  const timestamps = timestampOverride != null ? [timestampOverride, ...defaultTimeFields] : defaultTimeFields;
  const docFields = timestamps.map(tstamp => ({
    field: tstamp,
    format: 'strict_date_optional_time'
  }));
  const rangeFilter = timestampOverride != null ? [{
    range: {
      [timestampOverride]: {
        lte: to,
        gte: from,
        format: 'strict_date_optional_time'
      }
    }
  }, {
    bool: {
      filter: [{
        range: {
          '@timestamp': {
            lte: to,
            gte: from,
            // @ts-expect-error
            format: 'strict_date_optional_time'
          }
        }
      }, {
        bool: {
          must_not: {
            exists: {
              field: timestampOverride
            }
          }
        }
      }]
    }
  }] : [{
    range: {
      '@timestamp': {
        lte: to,
        gte: from,
        format: 'strict_date_optional_time'
      }
    }
  }];
  const filterWithTime = [// but tests contain undefined, so I suppose it's desired behaviour
  // @ts-expect-error undefined in not assignable to QueryContainer
  filter, {
    bool: {
      filter: [{
        bool: {
          should: [...rangeFilter],
          minimum_should_match: 1
        }
      }]
    }
  }];
  const searchQuery = {
    allow_no_indices: true,
    index,
    size,
    ignore_unavailable: true,
    body: {
      docvalue_fields: docFields,
      query: {
        bool: {
          filter: [...filterWithTime, {
            match_all: {}
          }]
        }
      },
      fields: [{
        field: '*',
        include_unmapped: true
      }],
      ...(aggregations ? {
        aggregations
      } : {}),
      sort: [...(timestampOverride != null ? [{
        [timestampOverride]: {
          order: sortOrder !== null && sortOrder !== void 0 ? sortOrder : 'asc',
          unmapped_type: 'date'
        }
      }, {
        '@timestamp': {
          order: sortOrder !== null && sortOrder !== void 0 ? sortOrder : 'asc',
          unmapped_type: 'date'
        }
      }] : [{
        '@timestamp': {
          order: sortOrder !== null && sortOrder !== void 0 ? sortOrder : 'asc',
          unmapped_type: 'date'
        }
      }])]
    }
  };

  if (searchAfterSortIds != null && !(0, _lodash.isEmpty)(searchAfterSortIds)) {
    return { ...searchQuery,
      body: { ...searchQuery.body,
        search_after: searchAfterSortIds
      }
    };
  }

  return searchQuery;
};

exports.buildEventsSearchQuery = buildEventsSearchQuery;