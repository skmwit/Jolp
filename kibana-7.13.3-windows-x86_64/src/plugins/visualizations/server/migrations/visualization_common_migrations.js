"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonRemoveDefaultIndexPatternAndTimeFieldFromTSVBModel = exports.commonHideTSVBLastValueIndicator = exports.commonAddSupportOfDualIndexSelectionModeInTSVB = void 0;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const commonAddSupportOfDualIndexSelectionModeInTSVB = visState => {
  if (visState && visState.type === 'metrics') {
    const {
      params
    } = visState;

    if (typeof (params === null || params === void 0 ? void 0 : params.index_pattern) === 'string') {
      params.use_kibana_indexes = false;
    }
  }

  return visState;
};

exports.commonAddSupportOfDualIndexSelectionModeInTSVB = commonAddSupportOfDualIndexSelectionModeInTSVB;

const commonHideTSVBLastValueIndicator = visState => {
  if (visState && visState.type === 'metrics' && visState.params.type !== 'timeseries') {
    return { ...visState,
      params: { ...visState.params,
        hide_last_value_indicator: true
      }
    };
  }

  return visState;
};

exports.commonHideTSVBLastValueIndicator = commonHideTSVBLastValueIndicator;

const commonRemoveDefaultIndexPatternAndTimeFieldFromTSVBModel = visState => {
  if (visState && visState.type === 'metrics') {
    const {
      params
    } = visState;
    delete params.default_index_pattern;
    delete params.default_timefield;
    return visState;
  }

  return visState;
};

exports.commonRemoveDefaultIndexPatternAndTimeFieldFromTSVBModel = commonRemoveDefaultIndexPatternAndTimeFieldFromTSVBModel;