"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readPackRoute = void 0;

var _fp = require("lodash/fp");

var _configSchema = require("@kbn/config-schema");

var _types = require("../../../common/types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const readPackRoute = router => {
  router.get({
    path: '/internal/osquery/pack/{id}',
    validate: {
      params: _configSchema.schema.object({}, {
        unknowns: 'allow'
      })
    }
  }, async (context, request, response) => {
    var _attributes$queries$m, _attributes$queries;

    const savedObjectsClient = context.core.savedObjects.client;
    const {
      attributes,
      references,
      ...rest
    } = await savedObjectsClient.get(_types.packSavedObjectType, // @ts-expect-error update types
    request.params.id);
    const queries = (_attributes$queries$m = (_attributes$queries = attributes.queries) === null || _attributes$queries === void 0 ? void 0 : _attributes$queries.map(packQuery => {
      const queryReference = (0, _fp.find)(['name', packQuery.name], references);

      if (queryReference) {
        return { ...packQuery,
          id: queryReference === null || queryReference === void 0 ? void 0 : queryReference.id
        };
      }

      return packQuery;
    })) !== null && _attributes$queries$m !== void 0 ? _attributes$queries$m : [];
    const queriesIds = (0, _fp.map)('id', queries);
    const {
      saved_objects: savedQueries
    } = await savedObjectsClient.bulkGet(queriesIds.map(queryId => ({
      type: _types.savedQuerySavedObjectType,
      id: queryId
    }))); // @ts-expect-error update types

    const queriesWithQueries = queries.reduce((acc, query) => {
      var _querySavedObject$att; // @ts-expect-error update types


      const querySavedObject = (0, _fp.find)(['id', query.id], savedQueries); // @ts-expect-error update types

      if (querySavedObject !== null && querySavedObject !== void 0 && (_querySavedObject$att = querySavedObject.attributes) !== null && _querySavedObject$att !== void 0 && _querySavedObject$att.query) {
        return [...acc, { ...query,
          // @ts-expect-error update types
          query: querySavedObject.attributes.query
        }];
      }

      return acc;
    }, []);
    return response.ok({
      body: { ...rest,
        ...attributes,
        queries: queriesWithQueries
      }
    });
  });
};

exports.readPackRoute = readPackRoute;