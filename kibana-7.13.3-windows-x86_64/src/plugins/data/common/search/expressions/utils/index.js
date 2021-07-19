"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _function_wrapper = require("./function_wrapper");

Object.keys(_function_wrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _function_wrapper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _function_wrapper[key];
    }
  });
});