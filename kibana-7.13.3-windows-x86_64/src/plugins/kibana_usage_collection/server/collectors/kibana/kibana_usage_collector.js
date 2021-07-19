"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKibanaUsageCollector = getKibanaUsageCollector;
exports.registerKibanaUsageCollector = registerKibanaUsageCollector;

var _operators = require("rxjs/operators");

var _get_saved_object_counts = require("./get_saved_object_counts");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function getKibanaUsageCollector(usageCollection, legacyConfig$) {
  return usageCollection.makeUsageCollector({
    type: 'kibana',
    isReady: () => true,
    schema: {
      index: {
        type: 'keyword',
        _meta: {
          description: 'The index storing the saved objects'
        }
      },
      dashboard: {
        total: {
          type: 'long',
          _meta: {
            description: 'Total number of dashboard saved objects'
          }
        }
      },
      visualization: {
        total: {
          type: 'long',
          _meta: {
            description: 'Total number of visualization saved objects'
          }
        }
      },
      search: {
        total: {
          type: 'long',
          _meta: {
            description: 'Total number of search saved objects'
          }
        }
      },
      index_pattern: {
        total: {
          type: 'long',
          _meta: {
            description: 'Total number of index_pattern saved objects'
          }
        }
      },
      graph_workspace: {
        total: {
          type: 'long',
          _meta: {
            description: 'Total number of graph_workspace saved objects'
          }
        }
      },
      timelion_sheet: {
        total: {
          type: 'long',
          _meta: {
            description: 'Total number of timelion_sheet saved objects'
          }
        }
      }
    },

    async fetch({
      esClient
    }) {
      const {
        kibana: {
          index
        }
      } = await legacyConfig$.pipe((0, _operators.take)(1)).toPromise();
      return {
        index,
        ...(await (0, _get_saved_object_counts.getSavedObjectsCounts)(esClient, index))
      };
    }

  });
}

function registerKibanaUsageCollector(usageCollection, legacyConfig$) {
  usageCollection.registerCollector(getKibanaUsageCollector(usageCollection, legacyConfig$));
}