"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nContext = exports.EuiI18nConsumer = exports.EuiContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
var I18nContext = /*#__PURE__*/(0, _react.createContext)({});
exports.I18nContext = I18nContext;
var EuiI18nProvider = I18nContext.Provider,
    EuiI18nConsumer = I18nContext.Consumer;
exports.EuiI18nConsumer = EuiI18nConsumer;

var EuiContext = function EuiContext(_ref) {
  var _ref$i18n = _ref.i18n,
      i18n = _ref$i18n === void 0 ? {} : _ref$i18n,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(EuiI18nProvider, {
    value: i18n
  }, children);
};

exports.EuiContext = EuiContext;
EuiContext.propTypes = {
  i18n: _propTypes.default.shape({
    mapping: _propTypes.default.shape({}),
    mappingFunc: _propTypes.default.func,
    formatNumber: _propTypes.default.func,
    formatDateTime: _propTypes.default.func,
    locale: _propTypes.default.string
  }).isRequired,

  /**
     * ReactNode to render as this component's content
     */
  children: _propTypes.default.node.isRequired
};