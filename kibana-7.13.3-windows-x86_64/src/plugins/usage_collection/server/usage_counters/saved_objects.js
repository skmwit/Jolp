"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeCounter = exports.serializeCounterKey = exports.registerUsageCountersSavedObjectType = exports.USAGE_COUNTERS_SAVED_OBJECT_TYPE = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const USAGE_COUNTERS_SAVED_OBJECT_TYPE = 'usage-counters';
exports.USAGE_COUNTERS_SAVED_OBJECT_TYPE = USAGE_COUNTERS_SAVED_OBJECT_TYPE;

const registerUsageCountersSavedObjectType = savedObjectsSetup => {
  savedObjectsSetup.registerType({
    name: USAGE_COUNTERS_SAVED_OBJECT_TYPE,
    hidden: false,
    namespaceType: 'agnostic',
    mappings: {
      dynamic: false,
      properties: {
        domainId: {
          type: 'keyword'
        }
      }
    }
  });
};

exports.registerUsageCountersSavedObjectType = registerUsageCountersSavedObjectType;

const serializeCounterKey = ({
  domainId,
  counterName,
  counterType,
  date
}) => {
  const dayDate = (0, _moment.default)(date).format('DDMMYYYY');
  return `${domainId}:${dayDate}:${counterType}:${counterName}`;
};

exports.serializeCounterKey = serializeCounterKey;

const storeCounter = async (counterMetric, internalRepository) => {
  const {
    counterName,
    counterType,
    domainId,
    incrementBy
  } = counterMetric;
  const key = serializeCounterKey({
    date: _moment.default.now(),
    domainId,
    counterName,
    counterType
  });
  return await internalRepository.incrementCounter(USAGE_COUNTERS_SAVED_OBJECT_TYPE, key, [{
    fieldName: 'count',
    incrementBy
  }], {
    upsertAttributes: {
      domainId,
      counterName,
      counterType
    }
  });
};

exports.storeCounter = storeCounter;