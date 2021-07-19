"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugin = exports.MapsEmsPlugin = exports.config = void 0;

var _config = require("../config");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const config = {
  exposeToBrowser: {
    regionmap: true,
    tilemap: true,
    includeElasticMapsService: true,
    proxyElasticMapsServiceInMaps: true,
    manifestServiceUrl: true,
    emsUrl: true,
    emsFileApiUrl: true,
    emsTileApiUrl: true,
    emsLandingPageUrl: true,
    emsFontLibraryUrl: true,
    emsTileLayerId: true
  },
  schema: _config.emsConfigSchema
};
exports.config = config;

class MapsEmsPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "_initializerContext", void 0);

    this._initializerContext = initializerContext;
  }

  setup(core) {
    const emsPluginConfig = this._initializerContext.config.get();

    return {
      config: emsPluginConfig
    };
  }

  start() {}

}

exports.MapsEmsPlugin = MapsEmsPlugin;

const plugin = initializerContext => new MapsEmsPlugin(initializerContext);

exports.plugin = plugin;