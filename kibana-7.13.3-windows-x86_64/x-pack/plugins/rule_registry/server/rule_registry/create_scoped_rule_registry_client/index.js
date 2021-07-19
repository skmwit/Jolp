"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createScopedRuleRegistryClient = createScopedRuleRegistryClient;

var _Either = require("fp-ts/lib/Either");

var _PathReporter = require("io-ts/lib/PathReporter");

var _lodash = require("lodash");

var _server = require("../../../../../../src/plugins/data/server");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createPathReporterError = either => {
  const error = new Error(`Failed to validate alert event`);
  error.stack += '\n' + _PathReporter.PathReporter.report(either).join('\n');
  return error;
};

function createScopedRuleRegistryClient({
  ruleUuids,
  scopedClusterClient,
  clusterClientAdapter,
  indexAliasName,
  indexTarget,
  logger,
  registry,
  ruleData
}) {
  const fieldmapType = registry.getFieldMapType();
  const defaults = ruleData ? {
    'rule.uuid': ruleData.rule.uuid,
    'rule.id': ruleData.rule.id,
    'rule.name': ruleData.rule.name,
    'rule.category': ruleData.rule.category,
    'kibana.rac.producer': ruleData.producer,
    tags: ruleData.tags
  } : {};
  const client = {
    search: async searchRequest => {
      var _searchRequest$body, _searchRequest$body2;

      const fields = ['rule.id', ...((_searchRequest$body = searchRequest.body) !== null && _searchRequest$body !== void 0 && _searchRequest$body.fields ? (0, _lodash.castArray)(searchRequest.body.fields) : [])];
      const response = await scopedClusterClient.asInternalUser.search({ ...searchRequest,
        index: indexTarget,
        body: { ...searchRequest.body,
          query: {
            bool: {
              filter: [{
                terms: {
                  'rule.uuid': ruleUuids
                }
              }, ...(0, _lodash.compact)([(_searchRequest$body2 = searchRequest.body) === null || _searchRequest$body2 === void 0 ? void 0 : _searchRequest$body2.query])]
            }
          },
          fields
        }
      });
      return {
        body: response.body,
        events: (0, _lodash.compact)(response.body.hits.hits.map(hit => {
          var _registryOfType$getFi;

          const ruleTypeId = hit.fields['rule.id'][0];
          const registryOfType = registry.getRegistryByRuleTypeId(ruleTypeId);

          if (ruleTypeId && !registryOfType) {
            logger.warn(`Could not find type ${ruleTypeId} in registry, decoding with default type`);
          }

          const type = (_registryOfType$getFi = registryOfType === null || registryOfType === void 0 ? void 0 : registryOfType.getFieldMapType()) !== null && _registryOfType$getFi !== void 0 ? _registryOfType$getFi : fieldmapType;
          const validation = type.decode(hit.fields);

          if ((0, _Either.isLeft)(validation)) {
            const error = createPathReporterError(validation);
            logger.error(error);
            return undefined;
          }

          return type.encode(validation.right);
        }))
      };
    },
    getDynamicIndexPattern: async () => {
      const indexPatternsFetcher = new _server.IndexPatternsFetcher(scopedClusterClient.asInternalUser);
      const fields = await indexPatternsFetcher.getFieldsForWildcard({
        pattern: indexTarget
      });
      return {
        fields,
        timeFieldName: '@timestamp',
        title: indexTarget
      };
    },
    index: doc => {
      const validation = fieldmapType.decode({ ...doc,
        ...defaults
      });

      if ((0, _Either.isLeft)(validation)) {
        throw createPathReporterError(validation);
      }

      clusterClientAdapter.indexDocument({
        body: validation.right,
        index: indexAliasName
      });
    },
    bulkIndex: docs => {
      const validations = docs.map(doc => {
        return fieldmapType.decode({ ...doc,
          ...defaults
        });
      });
      const errors = (0, _lodash.compact)(validations.map(validation => (0, _Either.isLeft)(validation) ? createPathReporterError(validation) : null));
      errors.forEach(error => {
        logger.error(error);
      });
      const operations = (0, _lodash.compact)(validations.map(validation => (0, _Either.isRight)(validation) ? validation.right : null)).map(doc => ({
        body: doc,
        index: indexAliasName
      }));
      return clusterClientAdapter.indexDocuments(operations);
    }
  }; // @ts-expect-error: We can't use ScopedRuleRegistryClient<BaseRuleFieldMap>
  // when creating the client, due to #41693 which will be fixed in 4.2

  return client;
}