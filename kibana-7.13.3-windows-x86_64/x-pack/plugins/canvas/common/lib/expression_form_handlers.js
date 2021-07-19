"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpressionFormHandlers = void 0;

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
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class ExpressionFormHandlers {
  constructor() {
    _defineProperty(this, "destroy", void 0);

    _defineProperty(this, "done", void 0);

    this.destroy = () => {};

    this.done = () => {};
  }

  onDestroy(fn) {
    this.destroy = fn;
  }

}

exports.ExpressionFormHandlers = ExpressionFormHandlers;