"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginsConfig = exports.config = void 0;

var _configSchema = require("@kbn/config-schema");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const configSchema = _configSchema.schema.object({
  initialize: _configSchema.schema.boolean({
    defaultValue: true
  }),

  /**
   * Defines an array of directories where another plugin should be loaded from.
   */
  paths: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: []
  })
});

const config = {
  path: 'plugins',
  schema: configSchema,
  deprecations: ({
    unusedFromRoot
  }) => [unusedFromRoot('plugins.scanDirs')]
};
/** @internal */

exports.config = config;

class PluginsConfig {
  /**
   * Indicates whether or not plugins should be initialized.
   */

  /**
   * Defines directories that we should scan for the plugin subdirectories.
   */

  /**
   * Defines directories where an additional plugin exists.
   */
  constructor(rawConfig, env) {
    _defineProperty(this, "initialize", void 0);

    _defineProperty(this, "pluginSearchPaths", void 0);

    _defineProperty(this, "additionalPluginPaths", void 0);

    this.initialize = rawConfig.initialize;
    this.pluginSearchPaths = env.pluginSearchPaths;
    this.additionalPluginPaths = rawConfig.paths;
  }

}

exports.PluginsConfig = PluginsConfig;