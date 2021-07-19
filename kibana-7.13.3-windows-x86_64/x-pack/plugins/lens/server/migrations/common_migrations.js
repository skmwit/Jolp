"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonRenameOperationsForFormula = void 0;

var _lodash = require("lodash");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const commonRenameOperationsForFormula = attributes => {
  const renameMapping = {
    avg: 'average',
    cardinality: 'unique_count',
    derivative: 'differences'
  };

  function shouldBeRenamed(op) {
    return op in renameMapping;
  }

  const newAttributes = (0, _lodash.cloneDeep)(attributes);
  const datasourceLayers = newAttributes.state.datasourceStates.indexpattern.layers || {};
  newAttributes.state.datasourceStates.indexpattern.layers = Object.fromEntries(Object.entries(datasourceLayers).map(([layerId, layer]) => {
    return [layerId, { ...layer,
      columns: Object.fromEntries(Object.entries(layer.columns).map(([columnId, column]) => {
        const copy = { ...column,
          operationType: shouldBeRenamed(column.operationType) ? renameMapping[column.operationType] : column.operationType
        };
        return [columnId, copy];
      }))
    }];
  }));
  return newAttributes;
};

exports.commonRenameOperationsForFormula = commonRenameOperationsForFormula;