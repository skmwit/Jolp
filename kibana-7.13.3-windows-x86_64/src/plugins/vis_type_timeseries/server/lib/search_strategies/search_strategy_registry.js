"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchStrategyRegistry = void 0;

var _strategies = require("./strategies");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SearchStrategyRegistry {
  constructor() {
    _defineProperty(this, "strategies", []);
  }

  addStrategy(searchStrategy) {
    if (searchStrategy instanceof _strategies.AbstractSearchStrategy) {
      this.strategies.unshift(searchStrategy);
    }

    return this.strategies;
  }

  async getViableStrategy(requestContext, req, fetchedIndexPattern) {
    for (const searchStrategy of this.strategies) {
      const {
        isViable,
        capabilities
      } = await searchStrategy.checkForViability(requestContext, req, fetchedIndexPattern);

      if (isViable) {
        return {
          searchStrategy,
          capabilities
        };
      }
    }
  }

}

exports.SearchStrategyRegistry = SearchStrategyRegistry;