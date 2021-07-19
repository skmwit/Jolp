"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outputService = void 0;

var _constants = require("../constants");

var _common = require("../../common");

var _app_context = require("./app_context");

var _hosts_utils = require("./hosts_utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const SAVED_OBJECT_TYPE = _constants.OUTPUT_SAVED_OBJECT_TYPE;

class OutputService {
  async getDefaultOutput(soClient) {
    return await soClient.find({
      type: _constants.OUTPUT_SAVED_OBJECT_TYPE,
      searchFields: ['is_default'],
      search: 'true'
    });
  }

  async ensureDefaultOutput(soClient) {
    var _decodeCloudId;

    const outputs = await this.getDefaultOutput(soClient);

    const cloud = _app_context.appContextService.getCloud();

    const cloudId = (cloud === null || cloud === void 0 ? void 0 : cloud.isCloudEnabled) && cloud.cloudId;
    const cloudUrl = cloudId && ((_decodeCloudId = (0, _common.decodeCloudId)(cloudId)) === null || _decodeCloudId === void 0 ? void 0 : _decodeCloudId.elasticsearchUrl);

    const flagsUrl = _app_context.appContextService.getConfig().agents.elasticsearch.host;

    const defaultUrl = 'http://localhost:9200';
    const defaultOutputUrl = cloudUrl || flagsUrl || defaultUrl;

    if (!outputs.saved_objects.length) {
      const newDefaultOutput = { ..._constants.DEFAULT_OUTPUT,
        hosts: [defaultOutputUrl],
        ca_sha256: _app_context.appContextService.getConfig().agents.elasticsearch.ca_sha256
      };
      return await this.create(soClient, newDefaultOutput);
    }

    return {
      id: outputs.saved_objects[0].id,
      ...outputs.saved_objects[0].attributes
    };
  }

  async getDefaultOutputId(soClient) {
    const outputs = await this.getDefaultOutput(soClient);

    if (!outputs.saved_objects.length) {
      return null;
    }

    return outputs.saved_objects[0].id;
  }

  async create(soClient, output, options) {
    const data = { ...output
    };

    if (data.hosts) {
      data.hosts = data.hosts.map(_hosts_utils.normalizeHostsForAgents);
    }

    const newSo = await soClient.create(SAVED_OBJECT_TYPE, data, options);
    return {
      id: newSo.id,
      ...newSo.attributes
    };
  }

  async get(soClient, id) {
    const outputSO = await soClient.get(SAVED_OBJECT_TYPE, id);

    if (outputSO.error) {
      throw new Error(outputSO.error.message);
    }

    return {
      id: outputSO.id,
      ...outputSO.attributes
    };
  }

  async update(soClient, id, data) {
    const updateData = { ...data
    };

    if (updateData.hosts) {
      updateData.hosts = updateData.hosts.map(_hosts_utils.normalizeHostsForAgents);
    }

    const outputSO = await soClient.update(SAVED_OBJECT_TYPE, id, updateData);

    if (outputSO.error) {
      throw new Error(outputSO.error.message);
    }
  }

  async list(soClient) {
    const outputs = await soClient.find({
      type: SAVED_OBJECT_TYPE,
      page: 1,
      perPage: 1000
    });
    return {
      items: outputs.saved_objects.map(outputSO => {
        return {
          id: outputSO.id,
          ...outputSO.attributes
        };
      }),
      total: outputs.total,
      page: 1,
      perPage: 1000
    };
  }

}

const outputService = new OutputService();
exports.outputService = outputService;