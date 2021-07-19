"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiLoadingContent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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
var EuiLoadingContent = function EuiLoadingContent(_ref) {
  var _ref$lines = _ref.lines,
      lines = _ref$lines === void 0 ? 3 : _ref$lines,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["lines", "className"]);
  var classes = (0, _classnames.default)('euiLoadingContent', className);
  var lineElements = [];

  for (var i = 0; i < lines; i++) {
    lineElements.push( /*#__PURE__*/_react.default.createElement("span", {
      key: i,
      className: "euiLoadingContent__singleLine"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "euiLoadingContent__singleLineBackground"
    })));
  }

  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    className: classes
  }, rest), lineElements);
};

exports.EuiLoadingContent = EuiLoadingContent;
EuiLoadingContent.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  lines: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
};