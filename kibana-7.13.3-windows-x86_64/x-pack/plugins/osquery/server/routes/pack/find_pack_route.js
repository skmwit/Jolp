"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPackRoute = void 0;

var _fp = require("lodash/fp");

var _configSchema = require("@kbn/config-schema");

var _types = require("../../../common/types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const findPackRoute = router => {
  router.get({
    path: '/internal/osquery/pack',
    validate: {
      query: _configSchema.schema.object({}, {
        unknowns: 'allow'
      })
    }
  }, async (context, request, response) => {
    var _request$query$pageIn, _request$query$pageSi, _request$query$sortFi, _request$query$sortDi;

    const savedObjectsClient = context.core.savedObjects.client;
    const soClientResponse = await savedObjectsClient.find({
      type: _types.packSavedObjectType,
      // @ts-expect-error update types
      page: parseInt((_request$query$pageIn = request.query.pageIndex) !== null && _request$query$pageIn !== void 0 ? _request$query$pageIn : 0, 10) + 1,
      // @ts-expect-error update types
      perPage: (_request$query$pageSi = request.query.pageSize) !== null && _request$query$pageSi !== void 0 ? _request$query$pageSi : 20,
      // @ts-expect-error update types
      sortField: (_request$query$sortFi = request.query.sortField) !== null && _request$query$sortFi !== void 0 ? _request$query$sortFi : 'updated_at',
      // @ts-expect-error update types
      sortOrder: (_request$query$sortDi = request.query.sortDirection) !== null && _request$query$sortDi !== void 0 ? _request$query$sortDi : 'desc'
    });
    const packs = soClientResponse.saved_objects.map(({
      attributes,
      references,
      ...rest
    }) => {
      var _attributes$queries$m, _attributes$queries;

      return { ...rest,
        ...attributes,
        queries: (_attributes$queries$m = (_attributes$queries = attributes.queries) === null || _attributes$queries === void 0 ? void 0 : _attributes$queries.map(packQuery => {
          const queryReference = (0, _fp.find)(['name', packQuery.name], references);

          if (queryReference) {
            return { ...packQuery,
              id: queryReference === null || queryReference === void 0 ? void 0 : queryReference.id
            };
          }

          return packQuery;
        })) !== null && _attributes$queries$m !== void 0 ? _attributes$queries$m : []
      };
    });
    const savedQueriesIds = (0, _fp.uniq)( // @ts-expect-error update types
    packs.reduce((acc, savedQuery) => [...acc, ...(0, _fp.map)('id', savedQuery.queries)], []));
    const {
      saved_objects: savedQueries
    } = await savedObjectsClient.bulkGet(savedQueriesIds.map(queryId => ({
      type: _types.savedQuerySavedObjectType,
      id: queryId
    })));
    const packsWithSavedQueriesQueries = packs.map(pack => ({ ...pack,
      // @ts-expect-error update types
      queries: pack.queries.reduce((acc, packQuery) => {
        var _savedQuerySO$attribu; // @ts-expect-error update types


        const savedQuerySO = (0, _fp.find)(['id', packQuery.id], savedQueries); // @ts-expect-error update types

        if (savedQuerySO !== null && savedQuerySO !== void 0 && (_savedQuerySO$attribu = savedQuerySO.attributes) !== null && _savedQuerySO$attribu !== void 0 && _savedQuerySO$attribu.query) {
          return [...acc, { ...packQuery,
            // @ts-expect-error update types
            query: (0, _fp.find)(['id', packQuery.id], savedQueries).attributes.query
          }];
        }

        return acc;
      }, [])
    }));
    return response.ok({
      body: { ...soClientResponse,
        saved_objects: packsWithSavedQueriesQueries
      }
    });
  });
};

exports.findPackRoute = findPackRoute;