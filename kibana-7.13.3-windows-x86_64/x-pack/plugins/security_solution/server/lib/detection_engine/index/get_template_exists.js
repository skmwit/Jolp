"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTemplateExists = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const getTemplateExists = async (esClient, template) => {
  return (await esClient.indices.existsTemplate({
    name: template
  })).body;
};

exports.getTemplateExists = getTemplateExists;