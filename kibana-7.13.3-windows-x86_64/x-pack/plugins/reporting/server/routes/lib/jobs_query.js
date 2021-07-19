"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobsQueryFactory = jobsQueryFactory;

var _i18n = require("@kbn/i18n");

var _errors = require("@elastic/elasticsearch/lib/errors");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const defaultSize = 10;

const getUsername = user => user ? user.username : false;

function getSearchBody(body) {
  return {
    _source: {
      excludes: ['output.content']
    },
    sort: [{
      created_at: {
        order: 'desc'
      }
    }],
    size: defaultSize,
    ...body
  };
}

function jobsQueryFactory(reportingCore) {
  function getIndex() {
    const config = reportingCore.getConfig();
    return `${config.get('index')}-*`;
  }

  async function execQuery(callback) {
    try {
      const {
        asInternalUser: client
      } = await reportingCore.getEsClient();
      return await callback(client);
    } catch (error) {
      if (error instanceof _errors.ResponseError && [401, 403, 404].includes(error.statusCode)) {
        return;
      }

      throw error;
    }
  }

  return {
    async list(jobTypes, user, page = 0, size = defaultSize, jobIds) {
      var _response$body$hits$h, _response$body$hits;

      const username = getUsername(user);
      const body = getSearchBody({
        size,
        from: size * page,
        query: {
          constant_score: {
            filter: {
              bool: {
                must: [{
                  terms: {
                    jobtype: jobTypes
                  }
                }, {
                  term: {
                    created_by: username
                  }
                }, ...(jobIds ? [{
                  ids: {
                    values: jobIds
                  }
                }] : [])]
              }
            }
          }
        }
      });
      const response = await execQuery(elasticsearchClient => elasticsearchClient.search({
        body,
        index: getIndex()
      }));
      return (_response$body$hits$h = response === null || response === void 0 ? void 0 : (_response$body$hits = response.body.hits) === null || _response$body$hits === void 0 ? void 0 : _response$body$hits.hits) !== null && _response$body$hits$h !== void 0 ? _response$body$hits$h : [];
    },

    async count(jobTypes, user) {
      var _response$body$count;

      const username = getUsername(user);
      const body = {
        query: {
          constant_score: {
            filter: {
              bool: {
                must: [{
                  terms: {
                    jobtype: jobTypes
                  }
                }, {
                  term: {
                    created_by: username
                  }
                }]
              }
            }
          }
        }
      };
      const response = await execQuery(elasticsearchClient => elasticsearchClient.count({
        body,
        index: getIndex()
      }));
      return (_response$body$count = response === null || response === void 0 ? void 0 : response.body.count) !== null && _response$body$count !== void 0 ? _response$body$count : 0;
    },

    async get(user, id, opts = {}) {
      var _response$body$hits2, _response$body$hits2$;

      if (!id) {
        return;
      }

      const username = getUsername(user);
      const body = { ...(opts.includeContent ? {
          _source: {
            excludes: []
          }
        } : {}),
        query: {
          constant_score: {
            filter: {
              bool: {
                must: [{
                  term: {
                    _id: id
                  }
                }, {
                  term: {
                    created_by: username
                  }
                }]
              }
            }
          }
        },
        size: 1
      };
      const response = await execQuery(elasticsearchClient => elasticsearchClient.search({
        body,
        index: getIndex()
      }));

      if ((response === null || response === void 0 ? void 0 : (_response$body$hits2 = response.body.hits) === null || _response$body$hits2 === void 0 ? void 0 : (_response$body$hits2$ = _response$body$hits2.hits) === null || _response$body$hits2$ === void 0 ? void 0 : _response$body$hits2$.length) !== 1) {
        return;
      }

      return response.body.hits.hits[0];
    },

    async delete(deleteIndex, id) {
      try {
        const {
          asInternalUser: elasticsearchClient
        } = await reportingCore.getEsClient();
        const query = {
          id,
          index: deleteIndex,
          refresh: true
        };
        return await elasticsearchClient.delete(query);
      } catch (error) {
        throw new Error(_i18n.i18n.translate('xpack.reporting.jobsQuery.deleteError', {
          defaultMessage: 'Could not delete the report: {error}',
          values: {
            error: error.message
          }
        }));
      }
    }

  };
}