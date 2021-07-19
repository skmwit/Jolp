"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsageCounter = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
class UsageCounter {
  constructor({
    domainId,
    counter$
  }) {
    _defineProperty(this, "domainId", void 0);

    _defineProperty(this, "counter$", void 0);

    _defineProperty(this, "incrementCounter", params => {
      const {
        counterName,
        counterType = 'count',
        incrementBy = 1
      } = params;
      this.counter$.next({
        counterName,
        domainId: this.domainId,
        counterType,
        incrementBy
      });
    });

    this.domainId = domainId;
    this.counter$ = counter$;
  }

}

exports.UsageCounter = UsageCounter;