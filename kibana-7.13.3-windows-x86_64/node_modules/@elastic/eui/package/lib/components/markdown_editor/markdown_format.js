"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiMarkdownFormat = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _unified = _interopRequireDefault(require("unified"));

var _markdown_default_plugins = require("./plugins/markdown_default_plugins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
var EuiMarkdownFormat = function EuiMarkdownFormat(_ref) {
  var children = _ref.children,
      _ref$parsingPluginLis = _ref.parsingPluginList,
      parsingPluginList = _ref$parsingPluginLis === void 0 ? _markdown_default_plugins.defaultParsingPlugins : _ref$parsingPluginLis,
      _ref$processingPlugin = _ref.processingPluginList,
      processingPluginList = _ref$processingPlugin === void 0 ? _markdown_default_plugins.defaultProcessingPlugins : _ref$processingPlugin;
  var processor = (0, _react.useMemo)(function () {
    return (0, _unified.default)().use(parsingPluginList).use(processingPluginList);
  }, [parsingPluginList, processingPluginList]);
  var result = (0, _react.useMemo)(function () {
    try {
      var _ref2;

      var processed = processor.processSync(children); // `.result` is intentionally `unknown` (https://github.com/vfile/vfile/pull/53)
      // cast to something expected.

      return (_ref2 = processed.result) !== null && _ref2 !== void 0 ? _ref2 : processed.contents;
    } catch (e) {
      return children;
    }
  }, [children, processor]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "euiMarkdownFormat"
  }, result);
};

exports.EuiMarkdownFormat = EuiMarkdownFormat;
EuiMarkdownFormat.propTypes = {
  children: _propTypes.default.string.isRequired,

  /** array of unified plugins to parse content into an AST */
  parsingPluginList: _propTypes.default.any,

  /** array of unified plugins to convert the AST into a ReactNode */
  processingPluginList: _propTypes.default.any
};