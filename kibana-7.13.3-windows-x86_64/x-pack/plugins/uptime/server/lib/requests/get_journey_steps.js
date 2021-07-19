"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJourneySteps = exports.formatSyntheticEvents = void 0;

var _as_mutable_array = require("../../../common/utils/as_mutable_array");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const defaultEventTypes = ['step/end', 'cmd/status', 'step/screenshot', 'journey/browserconsole'];

const formatSyntheticEvents = eventTypes => {
  if (!eventTypes) {
    return defaultEventTypes;
  } else {
    return Array.isArray(eventTypes) ? eventTypes : [eventTypes];
  }
};

exports.formatSyntheticEvents = formatSyntheticEvents;

const getJourneySteps = async ({
  uptimeEsClient,
  checkGroup,
  syntheticEventTypes
}) => {
  const params = {
    query: {
      bool: {
        filter: [{
          terms: {
            'synthetics.type': formatSyntheticEvents(syntheticEventTypes)
          }
        }, {
          term: {
            'monitor.check_group': checkGroup
          }
        }]
      }
    },
    sort: (0, _as_mutable_array.asMutableArray)([{
      'synthetics.step.index': {
        order: 'asc'
      }
    }, {
      '@timestamp': {
        order: 'asc'
      }
    }]),
    _source: {
      excludes: ['synthetics.blob']
    },
    size: 500
  };
  const {
    body: result
  } = await uptimeEsClient.search({
    body: params
  });
  const screenshotIndexes = result.hits.hits.filter(h => {
    var _h$_source, _h$_source$synthetics;

    return ((_h$_source = h._source) === null || _h$_source === void 0 ? void 0 : (_h$_source$synthetics = _h$_source.synthetics) === null || _h$_source$synthetics === void 0 ? void 0 : _h$_source$synthetics.type) === 'step/screenshot';
  }).map(h => {
    var _h$_source2, _h$_source2$synthetic, _h$_source2$synthetic2;

    return (_h$_source2 = h._source) === null || _h$_source2 === void 0 ? void 0 : (_h$_source2$synthetic = _h$_source2.synthetics) === null || _h$_source2$synthetic === void 0 ? void 0 : (_h$_source2$synthetic2 = _h$_source2$synthetic.step) === null || _h$_source2$synthetic2 === void 0 ? void 0 : _h$_source2$synthetic2.index;
  });
  return result.hits.hits.filter(h => {
    var _h$_source3, _h$_source3$synthetic;

    return ((_h$_source3 = h._source) === null || _h$_source3 === void 0 ? void 0 : (_h$_source3$synthetic = _h$_source3.synthetics) === null || _h$_source3$synthetic === void 0 ? void 0 : _h$_source3$synthetic.type) !== 'step/screenshot';
  }).map(h => {
    const source = h._source;
    return { ...source,
      timestamp: source['@timestamp'],
      docId: h._id,
      synthetics: { ...source.synthetics,
        screenshotExists: screenshotIndexes.some(i => {
          var _source$synthetics, _source$synthetics$st;

          return i === ((_source$synthetics = source.synthetics) === null || _source$synthetics === void 0 ? void 0 : (_source$synthetics$st = _source$synthetics.step) === null || _source$synthetics$st === void 0 ? void 0 : _source$synthetics$st.index);
        })
      }
    };
  });
};

exports.getJourneySteps = getJourneySteps;