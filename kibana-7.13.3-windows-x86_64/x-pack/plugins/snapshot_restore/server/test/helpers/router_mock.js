"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouterMock = void 0;

var _lodash = require("lodash");

var _mocks = require("../../../../../../src/core/server/mocks");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const responseIntercepted = {
  ok(response) {
    return response;
  },

  conflict(response) {
    response.status = 409;
    return response;
  },

  internalError(response) {
    response.status = 500;
    return response;
  },

  notFound(response) {
    response.status = 404;
    return response;
  }

};
/**
 * Create a proxy with a default "catch all" handler to make sure we don't break route handlers that make use
 * of other method on the response object that the ones defined in `responseIntercepted` above.
 */

const responseMock = new Proxy(responseIntercepted, {
  get: (target, prop) => prop in target ? target[prop] : response => response,
  has: () => true
});

class RouterMock {
  constructor() {
    _defineProperty(this, "cacheHandlers", {
      get: {},
      post: {},
      put: {},
      delete: {},
      patch: {}
    });

    _defineProperty(this, "contextMock", {
      core: {
        elasticsearch: {
          client: _mocks.elasticsearchServiceMock.createScopedClusterClient()
        }
      }
    });

    _defineProperty(this, "getRoutes", jest.fn());

    _defineProperty(this, "handleLegacyErrors", jest.fn());

    _defineProperty(this, "routerPath", '');
  }

  get({
    path
  }, handler) {
    this.cacheHandlers.get[path] = handler;
  }

  post({
    path
  }, handler) {
    this.cacheHandlers.post[path] = handler;
  }

  put({
    path
  }, handler) {
    this.cacheHandlers.put[path] = handler;
  }

  delete({
    path
  }, handler) {
    this.cacheHandlers.delete[path] = handler;
  }

  patch({
    path
  }, handler) {
    this.cacheHandlers.patch[path] = handler;
  }

  getMockApiFn(path) {
    return (0, _lodash.get)(this.contextMock.core.elasticsearch.client.asCurrentUser, path);
  }

  runRequest({
    method,
    path,
    ...mockRequest
  }) {
    const handler = this.cacheHandlers[method][path];

    if (typeof handler !== 'function') {
      throw new Error(`No route handler found for ${method.toUpperCase()} request at "${path}"`);
    }

    return handler(this.contextMock, mockRequest, responseMock);
  }

}

exports.RouterMock = RouterMock;