"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeprecationsRegistry = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
class DeprecationsRegistry {
  constructor() {
    _defineProperty(this, "deprecationContexts", []);

    _defineProperty(this, "registerDeprecations", deprecationContext => {
      if (typeof deprecationContext.getDeprecations !== 'function') {
        throw new Error(`getDeprecations must be a function in registerDeprecations(context)`);
      }

      this.deprecationContexts.push(deprecationContext);
    });

    _defineProperty(this, "getDeprecations", async (dependencies) => {
      return await Promise.allSettled(this.deprecationContexts.map(async deprecationContext => await deprecationContext.getDeprecations(dependencies)));
    });
  }

}

exports.DeprecationsRegistry = DeprecationsRegistry;