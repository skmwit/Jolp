"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUpgradeAssistantStatus = getUpgradeAssistantStatus;

var _constants = require("../../common/constants");

var _es_indices_state_check = require("./es_indices_state_check");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getUpgradeAssistantStatus(dataClient, isCloudEnabled) {
  const {
    body: deprecations
  } = await dataClient.asCurrentUser.migration.deprecations();
  const cluster = getClusterDeprecations(deprecations, isCloudEnabled);
  const indices = getCombinedIndexInfos(deprecations);
  const indexNames = indices.map(({
    index
  }) => index); // If we have found deprecation information for index/indices check whether the index is
  // open or closed.

  if (indexNames.length) {
    const indexStates = await (0, _es_indices_state_check.esIndicesStateCheck)(dataClient.asCurrentUser, indexNames);
    indices.forEach(indexData => {
      indexData.blockerForReindexing = indexStates[indexData.index] === 'closed' ? 'index-closed' : undefined;
    });
  }

  const criticalWarnings = cluster.concat(indices).filter(d => d.level === 'critical');
  return {
    readyForUpgrade: criticalWarnings.length === 0,
    cluster,
    indices
  };
} // Reformats the index deprecations to an array of deprecation warnings extended with an index field.


const getCombinedIndexInfos = deprecations => Object.keys(deprecations.index_settings).reduce((indexDeprecations, indexName) => {
  return indexDeprecations.concat(deprecations.index_settings[indexName].map(d => ({ ...d,
    index: indexName,
    reindex: /Index created before/.test(d.message),
    deprecatedIndexSettings: getIndexSettingDeprecations(d.message)
  })));
}, []);

const getClusterDeprecations = (deprecations, isCloudEnabled) => {
  const combined = deprecations.cluster_settings.concat(deprecations.ml_settings).concat(deprecations.node_settings);

  if (isCloudEnabled) {
    // In Cloud, this is changed at upgrade time. Filter it out to improve upgrade UX.
    return combined.filter(d => d.message !== 'Security realm settings structure changed');
  } else {
    return combined;
  }
};

const getIndexSettingDeprecations = message => {
  const indexDeprecation = Object.values(_constants.indexSettingDeprecations).find(({
    deprecationMessage
  }) => deprecationMessage === message);
  return (indexDeprecation === null || indexDeprecation === void 0 ? void 0 : indexDeprecation.settings) || [];
};