"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = compose;

var _kibana_framework_adapter = require("../framework/kibana_framework_adapter");

var _index_fields = require("../index_fields");

var _source_status = require("../source_status");

var _sources = require("../sources");

var _saved_object = require("../timeline/saved_object");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function compose(core, plugins, endpointContext) {
  const framework = new _kibana_framework_adapter.KibanaBackendFrameworkAdapter();
  const sources = new _sources.Sources(new _sources.ConfigurationSourcesAdapter());
  const sourceStatus = new _source_status.SourceStatus(new _source_status.ElasticsearchSourceStatusAdapter(framework));
  const domainLibs = {
    fields: new _index_fields.IndexFields(new _index_fields.ElasticsearchIndexFieldAdapter())
  };
  const libs = {
    framework,
    sourceStatus,
    sources,
    ...domainLibs,
    timeline: _saved_object.timeline,
    note: _saved_object.note,
    pinnedEvent: _saved_object.pinnedEvent
  };
  return libs;
}