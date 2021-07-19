"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = void 0;

var _jest = require("@kbn/test/jest");

var _es_deprecations = require("../../public/application/components/es_deprecations");

var _setup_environment = require("./setup_environment");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const testBedConfig = {
  memoryRouter: {
    initialEntries: ['/es_deprecations/indices'],
    componentRoutePath: '/es_deprecations/:tabName'
  },
  doMountAsync: true
};

const createActions = testBed => {
  /**
   * User Actions
   */
  const clickTab = tabName => {
    const {
      find
    } = testBed;
    const camelcaseTabName = tabName.charAt(0).toUpperCase() + tabName.slice(1);
    find(`upgradeAssistant${camelcaseTabName}Tab`).simulate('click');
  };

  const clickFixButton = () => {
    const {
      find
    } = testBed;
    find('removeIndexSettingsButton').simulate('click');
  };

  const clickExpandAll = () => {
    const {
      find
    } = testBed;
    find('expandAll').simulate('click');
  };

  return {
    clickTab,
    clickFixButton,
    clickExpandAll
  };
};

const setup = async overrides => {
  const initTestBed = (0, _jest.registerTestBed)((0, _setup_environment.WithAppDependencies)(_es_deprecations.EsDeprecationsContent, overrides), testBedConfig);
  const testBed = await initTestBed();
  return { ...testBed,
    actions: createActions(testBed)
  };
};

exports.setup = setup;