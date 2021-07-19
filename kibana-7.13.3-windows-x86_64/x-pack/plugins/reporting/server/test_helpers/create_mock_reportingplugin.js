"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMockReportingCore = exports.createMockConfig = exports.createMockConfigSchema = exports.createMockPluginStart = exports.createMockPluginSetup = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var Rx = _interopRequireWildcard(require("rxjs"));

var _mocks = require("src/core/server/mocks");

var _server = require("src/plugins/data/server");

var _mocks2 = require("src/plugins/data/server/mocks");

var _2 = require("../");

var _mocks3 = require("../../../features/server/mocks");

var _browsers = require("../browsers");

var _lib = require("../lib");

var _services = require("../services");

var _create_mock_levellogger = require("./create_mock_levellogger");

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


jest.mock('../routes');
jest.mock('../usage');
jest.mock('../browsers');
jest.mock('../lib/create_queue');

_browsers.initializeBrowserDriverFactory.mockImplementation(() => Promise.resolve({}));

_browsers.chromium.createDriverFactory.mockImplementation(() => ({}));

const createMockPluginSetup = setupMock => {
  return {
    features: _mocks3.featuresPluginMock.createSetup(),
    basePath: {
      set: jest.fn()
    },
    router: setupMock.router,
    security: setupMock.security,
    licensing: {
      license$: Rx.of({
        isAvailable: true,
        isActive: true,
        type: 'basic'
      })
    },
    ...setupMock
  };
};

exports.createMockPluginSetup = createMockPluginSetup;
const logger = (0, _create_mock_levellogger.createMockLevelLogger)();

const createMockReportingStore = () => ({});

const createMockPluginStart = (mockReportingCore, startMock) => {
  const store = mockReportingCore ? new _lib.ReportingStore(mockReportingCore, logger) : createMockReportingStore();
  return {
    browserDriverFactory: startMock.browserDriverFactory,
    esqueue: startMock.esqueue,
    esClient: _mocks.elasticsearchServiceMock.createClusterClient(),
    savedObjects: startMock.savedObjects || {
      getScopedClient: jest.fn()
    },
    uiSettings: startMock.uiSettings || {
      asScopedToClient: () => ({
        get: jest.fn()
      })
    },
    data: startMock.data || _mocks2.dataPluginMock.createStartContract(),
    store,
    ...startMock
  };
};

exports.createMockPluginStart = createMockPluginStart;

const createMockConfigSchema = (overrides = {}) => {
  // deeply merge the defaults and the provided partial schema
  return {
    index: '.reporting',
    encryptionKey: 'cool-encryption-key-where-did-you-find-it',
    ...overrides,
    kibanaServer: {
      hostname: 'localhost',
      port: 80,
      ...overrides.kibanaServer
    },
    capture: {
      browser: {
        chromium: {
          disableSandbox: true
        }
      },
      ...overrides.capture
    },
    queue: {
      indexInterval: 'week',
      pollEnabled: true,
      pollInterval: 3000,
      timeout: 120000,
      ...overrides.queue
    },
    csv: { ...overrides.csv
    }
  };
};

exports.createMockConfigSchema = createMockConfigSchema;

const createMockConfig = reportingConfig => {
  const mockConfigGet = jest.fn().mockImplementation((...keys) => {
    return _lodash.default.get(reportingConfig, keys.join('.'));
  });
  return {
    get: mockConfigGet,
    kbnConfig: {
      get: mockConfigGet
    }
  };
};

exports.createMockConfig = createMockConfig;

const createMockReportingCore = async (config, setupDepsMock = undefined, startDepsMock = undefined) => {
  const mockReportingCore = {
    getConfig: () => config,
    getEsClient: () => {
      var _startDepsMock;

      return (_startDepsMock = startDepsMock) === null || _startDepsMock === void 0 ? void 0 : _startDepsMock.esClient;
    },
    getDataService: () => {
      var _startDepsMock2;

      return (_startDepsMock2 = startDepsMock) === null || _startDepsMock2 === void 0 ? void 0 : _startDepsMock2.data;
    }
  };

  if (!setupDepsMock) {
    setupDepsMock = createMockPluginSetup({});
  }

  if (!startDepsMock) {
    startDepsMock = createMockPluginStart(mockReportingCore, {});
  }

  const context = _mocks.coreMock.createPluginInitializerContext(createMockConfigSchema());

  const core = new _2.ReportingCore(logger);
  core.setConfig(config);
  core.pluginSetup(setupDepsMock);
  await core.pluginSetsUp();

  if (!startDepsMock) {
    startDepsMock = createMockPluginStart(core, context);
  }

  await core.pluginStart(startDepsMock);
  await core.pluginStartsUp();
  (0, _services.setFieldFormats)({
    fieldFormatServiceFactory() {
      const fieldFormatsRegistry = new _server.fieldFormats.FieldFormatsRegistry();
      return Promise.resolve(fieldFormatsRegistry);
    }

  });
  return core;
};

exports.createMockReportingCore = createMockReportingCore;