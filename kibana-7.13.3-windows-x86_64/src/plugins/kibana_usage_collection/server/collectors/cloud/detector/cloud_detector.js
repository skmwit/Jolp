"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloudDetector = void 0;

var _aws = require("./aws");

var _azure = require("./azure");

var _gcp = require("./gcp");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const SUPPORTED_SERVICES = [_aws.AWSCloudService, _azure.AzureCloudService, _gcp.GCPCloudService];

/**
 * The `CloudDetector` can be used to asynchronously detect the
 * cloud service that Kibana is running within.
 *
 * @internal
 */
class CloudDetector {
  constructor(options = {}) {
    var _options$cloudService;

    _defineProperty(this, "cloudServices", void 0);

    _defineProperty(this, "cloudDetails", void 0);

    this.cloudServices = (_options$cloudService = options.cloudServices) !== null && _options$cloudService !== void 0 ? _options$cloudService : SUPPORTED_SERVICES.map(Service => new Service());
  }
  /**
   * Get any cloud details that we have detected.
   */


  getCloudDetails() {
    return this.cloudDetails;
  }
  /**
   * Asynchronously detect the cloud service.
   *
   * Callers are _not_ expected to await this method, which allows the
   * caller to trigger the lookup and then simply use it whenever we
   * determine it.
   */


  async detectCloudService() {
    this.cloudDetails = await this.getCloudService();
  }
  /**
   * Check every cloud service until the first one reports success from detection.
   */


  async getCloudService() {
    // check each service until we find one that is confirmed to match;
    // order is assumed to matter
    for (const service of this.cloudServices) {
      try {
        const serviceResponse = await service.checkIfService();

        if (serviceResponse.isConfirmed()) {
          return serviceResponse.toJSON();
        }
      } catch (ignoredError) {// ignored until we make wider use of this in the UI
      }
    } // explicitly null to differentiate from not having populated the field yet


    return null;
  }

}

exports.CloudDetector = CloudDetector;