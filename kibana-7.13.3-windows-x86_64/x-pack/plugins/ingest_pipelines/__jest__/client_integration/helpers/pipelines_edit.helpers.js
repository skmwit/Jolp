"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = exports.PIPELINE_TO_EDIT = void 0;

var _jest = require("@kbn/test/jest");

var _pipelines_edit = require("../../../public/application/sections/pipelines_edit");

var _pipeline_form = require("./pipeline_form.helpers");

var _setup_environment = require("./setup_environment");

var _navigation = require("../../../public/application/services/navigation");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const PIPELINE_TO_EDIT = {
  name: 'my_pipeline',
  description: 'pipeline description',
  processors: [{
    set: {
      field: 'foo',
      value: 'new'
    }
  }]
};
exports.PIPELINE_TO_EDIT = PIPELINE_TO_EDIT;
const testBedConfig = {
  memoryRouter: {
    initialEntries: [(0, _navigation.getEditPath)({
      pipelineName: PIPELINE_TO_EDIT.name
    })],
    componentRoutePath: _navigation.ROUTES.edit
  },
  doMountAsync: true
};
const initTestBed = (0, _jest.registerTestBed)((0, _setup_environment.WithAppDependencies)(_pipelines_edit.PipelinesEdit), testBedConfig);

const setup = async () => {
  const testBed = await initTestBed();
  return { ...testBed,
    actions: (0, _pipeline_form.getFormActions)(testBed)
  };
};

exports.setup = setup;