"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;
exports.inspectableEsQueriesMap = void 0;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var t = _interopRequireWildcard(require("io-ts"));

var _errors = require("@elastic/elasticsearch/lib/errors");

var _elasticApmNode = _interopRequireDefault(require("elastic-apm-node"));

var _lodash = require("lodash");

var _serverRouteRepository = require("@kbn/server-route-repository");

var _ioTsUtils = require("@kbn/io-ts-utils");

var _pick_keys = require("../../../common/utils/pick_keys");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const inspectRt = t.exact(t.partial({
  query: t.exact(t.partial({
    _inspect: _ioTsUtils.jsonRt.pipe(t.boolean)
  }))
}));
const inspectableEsQueriesMap = new WeakMap();
exports.inspectableEsQueriesMap = inspectableEsQueriesMap;

function registerRoutes({
  core,
  repository,
  plugins,
  logger,
  config,
  apmRuleRegistry
}) {
  const routes = repository.getRoutes();
  const router = core.setup.http.createRouter();
  routes.forEach(route => {
    const {
      params,
      endpoint,
      options,
      handler
    } = route;
    const {
      method,
      pathname
    } = (0, _serverRouteRepository.parseEndpoint)(endpoint);
    router[method]({
      path: pathname,
      options,
      validate: _serverRouteRepository.routeValidationObject
    }, async (context, request, response) => {
      if (_elasticApmNode.default.isStarted()) {
        _elasticApmNode.default.addLabels({
          plugin: 'apm'
        });
      } // init debug queries


      inspectableEsQueriesMap.set(request, []);

      try {
        var _validatedParams$quer;

        const runtimeType = params ? (0, _ioTsUtils.mergeRt)(params, inspectRt) : inspectRt;
        const validatedParams = (0, _serverRouteRepository.decodeRequestParams)((0, _pick_keys.pickKeys)(request, 'params', 'body', 'query'), runtimeType);
        const data = await handler({
          request,
          context,
          config,
          logger,
          core,
          plugins,
          params: (0, _lodash.merge)({
            query: {
              _inspect: false
            }
          }, validatedParams),
          apmRuleRegistry
        });

        if (Array.isArray(data)) {
          throw new Error('Return type cannot be an array');
        }

        const body = (_validatedParams$quer = validatedParams.query) !== null && _validatedParams$quer !== void 0 && _validatedParams$quer._inspect ? { ...data,
          _inspect: inspectableEsQueriesMap.get(request)
        } : { ...data
        }; // cleanup

        inspectableEsQueriesMap.delete(request);
        return response.ok({
          body
        });
      } catch (error) {
        logger.error(error);
        const opts = {
          statusCode: 500,
          body: {
            message: error.message,
            attributes: {
              _inspect: inspectableEsQueriesMap.get(request)
            }
          }
        };

        if (_boom.default.isBoom(error)) {
          opts.statusCode = error.output.statusCode;
        }

        if (error instanceof _errors.RequestAbortedError) {
          opts.statusCode = 499;
          opts.body.message = 'Client closed request';
        }

        return response.custom(opts);
      }
    });
  });
}