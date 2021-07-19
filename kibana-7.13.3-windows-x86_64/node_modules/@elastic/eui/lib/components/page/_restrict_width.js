"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPropsForRestrictedPageWidth = setPropsForRestrictedPageWidth;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * The `restrictedWidth` property is the same for all EuiPage components.
 * This is file contains the type specific to that prop and a helper
 * function for creating the corresponding classNames and style tags
 * based on the consumer's configuration
 *
 * @param {restrictWidth} boolean | number | string The prop value
 * @param {style} CSSProperties An object of style attributes if provided
 * @returns {{widthClassName: string, newStyle: CSSProperties}} Returns an object with keys for the class name to append to the component's class and the updated style props
 */
function setPropsForRestrictedPageWidth(restrictWidth, style) {
  var widthClassName;
  var newStyle;

  if (restrictWidth === true) {
    widthClassName = 'restrictWidth-default';
  } else if (restrictWidth !== false) {
    widthClassName = 'restrictWidth-custom';
    newStyle = _objectSpread(_objectSpread({}, style), {}, {
      maxWidth: restrictWidth
    });
  }

  return {
    widthClassName: widthClassName,
    newStyle: newStyle
  };
}