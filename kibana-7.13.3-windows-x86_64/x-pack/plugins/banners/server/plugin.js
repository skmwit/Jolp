"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannersPlugin = void 0;

var _routes = require("./routes");

var _ui_settings = require("./ui_settings");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class BannersPlugin {
  constructor(context) {
    _defineProperty(this, "config", void 0);

    this.config = context.config.get();
  }

  setup({
    uiSettings,
    getStartServices,
    http
  }) {
    const router = http.createRouter();
    (0, _routes.registerRoutes)(router, this.config);
    (0, _ui_settings.registerSettings)(uiSettings, this.config);
    return {};
  }

  start() {
    return {};
  }

}

exports.BannersPlugin = BannersPlugin;