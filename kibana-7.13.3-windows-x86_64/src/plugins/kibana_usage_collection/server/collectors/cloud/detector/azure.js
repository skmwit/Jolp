"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AzureCloudService = void 0;

var _lodash = require("lodash");

var _util = require("util");

var _cloud_service = require("./cloud_service");

var _cloud_response = require("./cloud_response");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// 2017-04-02 is the first GA release of this API
const SERVICE_ENDPOINT = 'http://169.254.169.254/metadata/instance?api-version=2017-04-02';

/**
 * Checks and loads the service metadata for an Azure VM if it is available.
 *
 * @internal
 */
class AzureCloudService extends _cloud_service.CloudService {
  /**
   * Parse the Azure response, if possible.
   *
   * Azure VMs created using the "classic" method, as opposed to the resource manager,
   * do not provide a "compute" field / object. However, both report the "network" field / object.
   *
   * Example payload (with network object ignored):
   * {
   *   "compute": {
   *     "location": "eastus",
   *     "name": "my-ubuntu-vm",
   *     "offer": "UbuntuServer",
   *     "osType": "Linux",
   *     "platformFaultDomain": "0",
   *     "platformUpdateDomain": "0",
   *     "publisher": "Canonical",
   *     "sku": "16.04-LTS",
   *     "version": "16.04.201706191",
   *     "vmId": "d4c57456-2b3b-437a-9f1f-7082cfce02d4",
   *     "vmSize": "Standard_A1"
   *   },
   *   "network": {
   *     ...
   *   }
   * }
   */
  static parseBody(name, body) {
    const compute = (0, _lodash.get)(body, 'compute');
    const id = (0, _lodash.get)(compute, 'vmId');
    const vmType = (0, _lodash.get)(compute, 'vmSize');
    const region = (0, _lodash.get)(compute, 'location'); // remove keys that we already have; explicitly undefined so we don't send it when empty

    const metadata = compute ? (0, _lodash.omit)(compute, ['vmId', 'vmSize', 'location']) : undefined; // we don't actually use network, but we check for its existence to see if this is a response from Azure

    const network = (0, _lodash.get)(body, 'network'); // ensure we actually have some data

    if (id || vmType || region) {
      return new _cloud_response.CloudServiceResponse(name, true, {
        id,
        vmType,
        region,
        metadata
      });
    } else if (network) {
      // classic-managed VMs in Azure don't provide compute so we highlight the lack of info
      return new _cloud_response.CloudServiceResponse(name, true, {
        metadata: {
          classic: true
        }
      });
    }

    return null;
  }

  constructor(options = {}) {
    super('azure', options);
  }

  async _checkIfService(request) {
    const req = {
      method: 'GET',
      uri: SERVICE_ENDPOINT,
      headers: {
        // Azure requires this header
        Metadata: 'true'
      },
      json: true
    };
    const response = await (0, _util.promisify)(request)(req); // Note: there is no fallback option for Azure

    if (!response || response.statusCode === 404) {
      throw new Error('Azure request failed');
    }

    return this._parseResponse(response.body, body => AzureCloudService.parseBody(this.getName(), body));
  }

}

exports.AzureCloudService = AzureCloudService;