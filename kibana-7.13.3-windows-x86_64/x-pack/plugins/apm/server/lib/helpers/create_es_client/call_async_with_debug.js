"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callAsyncWithDebug = callAsyncWithDebug;
exports.getDebugTitle = exports.getDebugBody = void 0;

var _lodash = require("lodash");

var _chalk = _interopRequireDefault(require("chalk"));

var _register_routes = require("../../../routes/register_routes");

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

/* eslint-disable no-console */


function formatObj(obj) {
  return JSON.stringify(obj, null, 2);
}

async function callAsyncWithDebug({
  cb,
  getDebugMessage,
  debug,
  request,
  requestType,
  requestParams,
  isCalledWithInternalUser
}) {
  if (!debug) {
    return cb();
  }

  const startTime = process.hrtime();
  let res;
  let esError = null;

  try {
    res = await cb();
  } catch (e) {
    // catch error and throw after outputting debug info
    esError = e;
  }

  if (debug) {
    const highlightColor = esError ? 'bgRed' : 'inverse';
    const diff = process.hrtime(startTime);
    const duration = Math.round(diff[0] * 1000 + diff[1] / 1e6); // duration in ms

    const {
      title,
      body
    } = getDebugMessage();
    console.log(_chalk.default.bold[highlightColor](`=== Debug: ${title} (${duration}ms) ===`));
    console.log(body);
    console.log(`\n`);

    const inspectableEsQueries = _register_routes.inspectableEsQueriesMap.get(request);

    if (!isCalledWithInternalUser && inspectableEsQueries) {
      var _esError$response, _esError, _esError2;

      inspectableEsQueries.push({
        response: res,
        duration,
        requestType,
        requestParams: (0, _lodash.omit)(requestParams, 'headers'),
        esError: (_esError$response = (_esError = esError) === null || _esError === void 0 ? void 0 : _esError.response) !== null && _esError$response !== void 0 ? _esError$response : (_esError2 = esError) === null || _esError2 === void 0 ? void 0 : _esError2.message
      });
    }
  }

  if (esError) {
    throw esError;
  }

  return res;
}

const getDebugBody = (params, requestType) => {
  if (requestType === 'search') {
    return `GET ${params.index}/_search\n${formatObj(params.body)}`;
  }

  return `${_chalk.default.bold('ES operation:')} ${requestType}\n${_chalk.default.bold('ES query:')}\n${formatObj(params)}`;
};

exports.getDebugBody = getDebugBody;

const getDebugTitle = request => `${request.route.method.toUpperCase()} ${request.route.path}`;

exports.getDebugTitle = getDebugTitle;