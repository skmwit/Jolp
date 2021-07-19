"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = exports.REMOTE_CLUSTER_EDIT = exports.REMOTE_CLUSTER_EDIT_NAME = void 0;

var _jest = require("@kbn/test/jest");

var _react = _interopRequireDefault(require("react"));

var _sections = require("../../../public/application/sections");

var _store = require("../../../public/application/store");

var _services = require("../../../public/application/services");

var _helpers = require("../helpers");

var _app_context = require("../../../public/application/app_context");

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


const REMOTE_CLUSTER_EDIT_NAME = 'new-york';
exports.REMOTE_CLUSTER_EDIT_NAME = REMOTE_CLUSTER_EDIT_NAME;
const REMOTE_CLUSTER_EDIT = {
  name: REMOTE_CLUSTER_EDIT_NAME,
  seeds: ['localhost:9400'],
  skipUnavailable: true
};
exports.REMOTE_CLUSTER_EDIT = REMOTE_CLUSTER_EDIT;

const ComponentWithContext = props => {
  const {
    isCloudEnabled,
    ...rest
  } = props;
  return /*#__PURE__*/_react.default.createElement(_app_context.AppContextProvider, {
    context: {
      isCloudEnabled,
      cloudBaseUrl: 'test.com'
    }
  }, /*#__PURE__*/_react.default.createElement(_sections.RemoteClusterEdit, rest));
};

const testBedConfig = {
  store: _store.createRemoteClustersStore,
  memoryRouter: {
    onRouter: router => (0, _services.registerRouter)(router),
    // The remote cluster name to edit is read from the router ":id" param
    // so we first set it in our initial entries
    initialEntries: [`/${REMOTE_CLUSTER_EDIT_NAME}`],
    // and then we declare the :id param on the component route path
    componentRoutePath: '/:name'
  }
};

const initTestBed = isCloudEnabled => (0, _jest.registerTestBed)(ComponentWithContext, testBedConfig)({
  isCloudEnabled
});

const setup = async (isCloudEnabled = false) => {
  const testBed = await initTestBed(isCloudEnabled);
  return { ...testBed,
    actions: { ...(0, _helpers.createRemoteClustersActions)(testBed)
    }
  };
};

exports.setup = setup;