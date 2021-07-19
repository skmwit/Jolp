"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloudService = void 0;

var _lodash = require("lodash");

var _request2 = _interopRequireDefault(require("request"));

var _cloud_response = require("./cloud_response");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * CloudService provides a mechanism for cloud services to be checked for
 * metadata that may help to determine the best defaults and priorities.
 */
class CloudService {
  constructor(name, options = {}) {
    _defineProperty(this, "_request", void 0);

    _defineProperty(this, "_name", void 0);

    this._name = name.toLowerCase(); // Allow the HTTP handler to be swapped out for tests

    const {
      _request = _request2.default
    } = options;
    this._request = _request;
  }
  /**
   * Get the search-friendly name of the Cloud Service.
   */


  getName() {
    return this._name;
  }
  /**
   * Using whatever mechanism is required by the current Cloud Service,
   * determine if Kibana is running in it and return relevant metadata.
   */


  async checkIfService() {
    try {
      return await this._checkIfService(this._request);
    } catch (e) {
      return this._createUnconfirmedResponse();
    }
  }

  _checkIfService(request) {
    // should always be overridden by a subclass
    return Promise.reject(new Error('not implemented'));
  }
  /**
   * Create a new CloudServiceResponse that denotes that this cloud service
   * is not being used by the current machine / VM.
   */


  _createUnconfirmedResponse() {
    return _cloud_response.CloudServiceResponse.unconfirmed(this._name);
  }
  /**
   * Strictly parse JSON.
   */


  _stringToJson(value) {
    // note: this will throw an error if this is not a string
    value = value.trim();

    try {
      const json = JSON.parse(value); // we don't want to return scalar values, arrays, etc.

      if (!(0, _lodash.isPlainObject)(json)) {
        throw new Error('not a plain object');
      }

      return json;
    } catch (e) {
      throw new Error(`'${value}' is not a JSON object`);
    }
  }
  /**
   * Convert the response to a JSON object and attempt to parse it using the
   * parseBody function.
   *
   * If the response cannot be parsed as a JSON object, or if it fails to be
   * useful, then parseBody should return null.
   */


  _parseResponse(body, parseBody) {
    // parse it if necessary
    if ((0, _lodash.isString)(body)) {
      try {
        body = this._stringToJson(body);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    if ((0, _lodash.isObject)(body) && parseBody) {
      const response = parseBody(body);

      if (response) {
        return Promise.resolve(response);
      }
    } // use default handling


    return Promise.reject();
  }

}

exports.CloudService = CloudService;