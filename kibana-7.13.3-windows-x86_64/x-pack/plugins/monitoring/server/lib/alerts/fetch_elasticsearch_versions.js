"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchElasticsearchVersions = fetchElasticsearchVersions;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

async function fetchElasticsearchVersions(esClient, clusters, index, size) {
  const params = {
    index,
    filterPath: ['hits.hits._source.cluster_stats.nodes.versions', 'hits.hits._index', 'hits.hits._source.cluster_uuid'],
    body: {
      size: clusters.length,
      sort: [{
        timestamp: {
          order: 'desc',
          unmapped_type: 'long'
        }
      }],
      query: {
        bool: {
          filter: [{
            terms: {
              cluster_uuid: clusters.map(cluster => cluster.clusterUuid)
            }
          }, {
            term: {
              type: 'cluster_stats'
            }
          }, {
            range: {
              timestamp: {
                gte: 'now-2m'
              }
            }
          }]
        }
      },
      collapse: {
        field: 'cluster_uuid'
      }
    }
  };
  const {
    body: response
  } = await esClient.search(params);
  return response.hits.hits.map(hit => {
    var _cluster_stats$nodes$, _cluster_stats, _cluster_stats$nodes;

    const versions = (_cluster_stats$nodes$ = (_cluster_stats = hit._source.cluster_stats) === null || _cluster_stats === void 0 ? void 0 : (_cluster_stats$nodes = _cluster_stats.nodes) === null || _cluster_stats$nodes === void 0 ? void 0 : _cluster_stats$nodes.versions) !== null && _cluster_stats$nodes$ !== void 0 ? _cluster_stats$nodes$ : [];
    return {
      versions,
      clusterUuid: hit._source.cluster_uuid,
      ccs: hit._index.includes(':') ? hit._index.split(':')[0] : undefined
    };
  });
}