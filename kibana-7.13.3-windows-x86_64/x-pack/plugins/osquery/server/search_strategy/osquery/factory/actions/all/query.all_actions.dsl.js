"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildActionsQuery = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// import { createQueryFilterClauses } from '../../../../../../common/utils/build_query';

const buildActionsQuery = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filterQuery,
  sort,
  pagination: {
    cursorStart,
    querySize
  }
}) => {
  // const filter = [...createQueryFilterClauses(filterQuery)];
  const dslQuery = {
    allowNoIndices: true,
    index: '.fleet-actions',
    ignoreUnavailable: true,
    body: {
      // query: { bool: { filter } },
      query: {
        term: {
          type: {
            value: 'INPUT_ACTION'
          }
        }
      },
      from: cursorStart,
      size: querySize,
      track_total_hits: true,
      fields: ['*'],
      sort: [{
        [sort.field]: {
          order: sort.direction
        }
      }]
    }
  };
  return dslQuery;
};

exports.buildActionsQuery = buildActionsQuery;