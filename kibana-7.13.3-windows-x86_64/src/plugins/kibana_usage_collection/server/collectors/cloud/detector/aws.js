"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AWSCloudService = void 0;

var _fs2 = _interopRequireDefault(require("fs"));

var _lodash = require("lodash");

var _util = require("util");

var _cloud_service = require("./cloud_service");

var _cloud_response = require("./cloud_response");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// We explicitly call out the version, 2016-09-02, rather than 'latest' to avoid unexpected changes
const SERVICE_ENDPOINT = 'http://169.254.169.254/2016-09-02/dynamic/instance-identity/document';
/** @internal */

/**
 * Checks and loads the service metadata for an Amazon Web Service VM if it is available.
 *
 * @internal
 */
class AWSCloudService extends _cloud_service.CloudService {
  /**
   * Parse the AWS response, if possible.
   *
   * Example payload:
   * {
   *   "accountId" : "1234567890",
   *   "architecture" : "x86_64",
   *   "availabilityZone" : "us-west-2c",
   *   "billingProducts" : null,
   *   "devpayProductCodes" : null,
   *   "imageId" : "ami-6df1e514",
   *   "instanceId" : "i-0c7a5b7590a4d811c",
   *   "instanceType" : "t2.micro",
   *   "kernelId" : null,
   *   "pendingTime" : "2017-07-06T02:09:12Z",
   *   "privateIp" : "10.0.0.38",
   *   "ramdiskId" : null,
   *   "region" : "us-west-2"
   *   "version" : "2010-08-31",
   * }
   */
  static parseBody(name, body) {
    const id = (0, _lodash.get)(body, 'instanceId');
    const vmType = (0, _lodash.get)(body, 'instanceType');
    const region = (0, _lodash.get)(body, 'region');
    const zone = (0, _lodash.get)(body, 'availabilityZone');
    const metadata = (0, _lodash.omit)(body, [// remove keys we already have
    'instanceId', 'instanceType', 'region', 'availabilityZone', // remove keys that give too much detail
    'accountId', 'billingProducts', 'devpayProductCodes', 'privateIp']); // ensure we actually have some data

    if (id || vmType || region || zone) {
      return new _cloud_response.CloudServiceResponse(name, true, {
        id,
        vmType,
        region,
        zone,
        metadata
      });
    }

    return null;
  }

  constructor(options = {}) {
    super('aws', options); // Allow the file system handler to be swapped out for tests

    _defineProperty(this, "_isWindows", void 0);

    _defineProperty(this, "_fs", void 0);

    const {
      _fs = _fs2.default,
      _isWindows = process.platform.startsWith('win')
    } = options;
    this._fs = _fs;
    this._isWindows = _isWindows;
  }

  async _checkIfService(request) {
    const req = {
      method: 'GET',
      uri: SERVICE_ENDPOINT,
      json: true
    };
    return (0, _util.promisify)(request)(req).then(response => this._parseResponse(response.body, body => AWSCloudService.parseBody(this.getName(), body))).catch(() => this._tryToDetectUuid());
  }
  /**
   * Attempt to load the UUID by checking `/sys/hypervisor/uuid`.
   *
   * This is a fallback option if the metadata service is unavailable for some reason.
   */


  _tryToDetectUuid() {
    // Windows does not have an easy way to check
    if (!this._isWindows) {
      const pathsToCheck = ['/sys/hypervisor/uuid', '/sys/devices/virtual/dmi/id/product_uuid'];
      const promises = pathsToCheck.map(path => (0, _util.promisify)(this._fs.readFile)(path, 'utf8'));
      return Promise.allSettled(promises).then(responses => {
        for (const response of responses) {
          let uuid;

          if (response.status === 'fulfilled' && (0, _lodash.isString)(response.value)) {
            // Some AWS APIs return it lowercase (like the file did in testing), while others return it uppercase
            uuid = response.value.trim().toLowerCase(); // There is a small chance of a false positive here in the unlikely event that a uuid which doesn't
            // belong to ec2 happens to be generated with `ec2` as the first three characters.

            if (uuid.startsWith('ec2')) {
              return new _cloud_response.CloudServiceResponse(this._name, true, {
                id: uuid
              });
            }
          }
        }

        return this._createUnconfirmedResponse();
      });
    }

    return Promise.resolve(this._createUnconfirmedResponse());
  }

}

exports.AWSCloudService = AWSCloudService;