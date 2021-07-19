"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isProjectEnabledByStatus = exports.getProjectIDs = exports.projects = exports.solutionNames = exports.environmentNames = exports.projectIDs = exports.UNIFIED_TOOLBAR = void 0;

var _i18n = require("@kbn/i18n");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const UNIFIED_TOOLBAR = 'labs:presentation:unifiedToolbar';
exports.UNIFIED_TOOLBAR = UNIFIED_TOOLBAR;
const projectIDs = [UNIFIED_TOOLBAR];
exports.projectIDs = projectIDs;
const environmentNames = ['kibana', 'browser', 'session'];
exports.environmentNames = environmentNames;
const solutionNames = ['canvas', 'dashboard', 'presentation'];
/**
 * This is a list of active Labs Projects for the Presentation Team.  It is the "source of truth" for all projects
 * provided to users of our solutions in Kibana.
 */

exports.solutionNames = solutionNames;
const projects = {
  [UNIFIED_TOOLBAR]: {
    id: UNIFIED_TOOLBAR,
    isActive: false,
    environments: ['kibana', 'browser', 'session'],
    name: _i18n.i18n.translate('presentationUtil.labs.enableUnifiedToolbarProjectName', {
      defaultMessage: 'Unified Toolbar'
    }),
    description: _i18n.i18n.translate('presentationUtil.labs.enableUnifiedToolbarProjectDescription', {
      defaultMessage: 'Enable the new unified toolbar design for Presentation solutions'
    }),
    solutions: ['dashboard', 'canvas']
  }
};
exports.projects = projects;

const getProjectIDs = () => projectIDs;

exports.getProjectIDs = getProjectIDs;

const isProjectEnabledByStatus = (active, status) => {
  // If the project is enabled by default, then any false flag will flip the switch, and vice-versa.
  return active ? Object.values(status).every(value => value === true) : Object.values(status).some(value => value === true);
};

exports.isProjectEnabledByStatus = isProjectEnabledByStatus;