"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  buildFrameworkRequest: true,
  escapeHatch: true,
  formatErrors: true,
  throwErrors: true,
  getReadables: true,
  loadData: true,
  TimelineStatusActions: true
};
exports.TimelineStatusActions = exports.loadData = exports.getReadables = exports.throwErrors = exports.formatErrors = exports.escapeHatch = exports.buildFrameworkRequest = void 0;

var _fp = require("@elastic/safer-lodash-set/fp");

var _readline = _interopRequireDefault(require("readline"));

var _fs = _interopRequireDefault(require("fs"));

var _utils = require("@kbn/utils");

var _configSchema = require("@kbn/config-schema");

var _fp2 = require("lodash/fp");

var _compare_timelines_status = require("./compare_timelines_status");

Object.keys(_compare_timelines_status).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _compare_timelines_status[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compare_timelines_status[key];
    }
  });
});

var _timeline_object = require("./timeline_object");

Object.keys(_timeline_object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _timeline_object[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _timeline_object[key];
    }
  });
});

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


const buildFrameworkRequest = async (context, security, request) => {
  const savedObjectsClient = context.core.savedObjects.client;
  const user = await (security === null || security === void 0 ? void 0 : security.authc.getCurrentUser(request));
  return (0, _fp.set)('user', user, (0, _fp.set)('context.core.savedObjects.client', savedObjectsClient, request));
};

exports.buildFrameworkRequest = buildFrameworkRequest;

const escapeHatch = _configSchema.schema.object({}, {
  unknowns: 'allow'
});

exports.escapeHatch = escapeHatch;

const formatErrors = errors => {
  const err = errors.map(error => {
    if (error.message != null) {
      return error.message;
    } else {
      const keyContext = error.context.filter(entry => entry.key != null && !Number.isInteger(+entry.key) && entry.key.trim() !== '').map(entry => entry.key).join(',');
      const nameContext = error.context.find(entry => {
        var _entry$type, _entry$type$name;

        return ((_entry$type = entry.type) === null || _entry$type === void 0 ? void 0 : (_entry$type$name = _entry$type.name) === null || _entry$type$name === void 0 ? void 0 : _entry$type$name.length) > 0;
      });
      const suppliedValue = keyContext !== '' ? keyContext : nameContext != null ? nameContext.type.name : '';
      const value = (0, _fp2.isObject)(error.value) ? JSON.stringify(error.value) : error.value;
      return `Invalid value "${value}" supplied to "${suppliedValue}"`;
    }
  });
  return [...new Set(err)];
};

exports.formatErrors = formatErrors;

const throwErrors = createError => errors => {
  throw createError(formatErrors(errors).join('\n'));
};

exports.throwErrors = throwErrors;

const getReadables = dataPath => new Promise((resolved, reject) => {
  const contents = [];

  const readable = _fs.default.createReadStream(dataPath, {
    encoding: 'utf-8'
  });

  readable.on('data', stream => {
    contents.push(stream);
  });
  readable.on('end', () => {
    const streams = (0, _utils.createListStream)(contents);
    resolved(streams);
  });
  readable.on('error', err => {
    reject(err);
  });
});

exports.getReadables = getReadables;

const loadData = (readStream, bulkInsert, encoding, maxTimelineImportExportSize) => {
  return new Promise((resolved, reject) => {
    let docs = [];
    let isPaused = false;

    const lineStream = _readline.default.createInterface({
      input: readStream
    });

    const onClose = async () => {
      if (docs.length > 0) {
        try {
          let bulkInsertResult;

          if (typeof encoding === 'string' && encoding === 'utf-8') {
            bulkInsertResult = await bulkInsert(docs);
          } else {
            const docstmp = (0, _utils.createListStream)(docs.join('\n'));
            bulkInsertResult = await bulkInsert(docstmp);
          }

          resolved(bulkInsertResult);
        } catch (err) {
          reject(err);
          return;
        }
      }

      reject(new Error('No data provided'));
    };

    const closeWithError = err => {
      lineStream.removeListener('close', onClose);
      lineStream.close();
      reject(err);
    };

    lineStream.on('close', onClose);
    lineStream.on('line', async line => {
      if (line.length === 0 || line.charAt(0) === '/' || line.charAt(0) === ' ') {
        return;
      }

      docs.push(line);

      if (maxTimelineImportExportSize != null && docs.length >= maxTimelineImportExportSize && !isPaused) {
        lineStream.pause();
        const docstmp = (0, _utils.createListStream)(docs.join('\n'));
        docs = [];

        try {
          if (typeof encoding === 'string' && encoding === 'utf-8') {
            await bulkInsert(docs);
          } else {
            await bulkInsert(docstmp);
          }

          lineStream.resume();
        } catch (err) {
          closeWithError(err);
        }
      }
    });
    lineStream.on('pause', async () => {
      isPaused = true;
    });
    lineStream.on('resume', async () => {
      isPaused = false;
    });
  });
};

exports.loadData = loadData;
let TimelineStatusActions;
exports.TimelineStatusActions = TimelineStatusActions;

(function (TimelineStatusActions) {
  TimelineStatusActions["create"] = "create";
  TimelineStatusActions["createViaImport"] = "createViaImport";
  TimelineStatusActions["update"] = "update";
  TimelineStatusActions["updateViaImport"] = "updateViaImport";
})(TimelineStatusActions || (exports.TimelineStatusActions = TimelineStatusActions = {}));