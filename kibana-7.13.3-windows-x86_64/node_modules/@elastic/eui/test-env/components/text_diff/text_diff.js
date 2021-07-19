"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEuiTextDiff = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _textDiff = _interopRequireDefault(require("text-diff"));

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
var useEuiTextDiff = function useEuiTextDiff(_ref) {
  var className = _ref.className,
      _ref$insertComponent = _ref.insertComponent,
      insertComponent = _ref$insertComponent === void 0 ? 'ins' : _ref$insertComponent,
      _ref$deleteComponent = _ref.deleteComponent,
      deleteComponent = _ref$deleteComponent === void 0 ? 'del' : _ref$deleteComponent,
      sameComponent = _ref.sameComponent,
      _ref$beforeText = _ref.beforeText,
      beforeText = _ref$beforeText === void 0 ? '' : _ref$beforeText,
      _ref$afterText = _ref.afterText,
      afterText = _ref$afterText === void 0 ? '' : _ref$afterText,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 0.1 : _ref$timeout,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "insertComponent", "deleteComponent", "sameComponent", "beforeText", "afterText", "timeout"]);
  var textDiff = (0, _react.useMemo)(function () {
    var diff = new _textDiff.default({
      timeout: timeout
    }); // options may be passed to constructor

    return diff.main(beforeText, afterText);
  }, [beforeText, afterText, timeout]); // produces diff array

  var classes = (0, _classnames.default)('euiTextDiff', className);
  var rendereredHtml = (0, _react.useMemo)(function () {
    var html = [];
    if (textDiff) for (var i = 0; i < textDiff.length; i++) {
      var Element = void 0;
      var el = textDiff[i];
      if (el[0] === 1) Element = insertComponent;else if (el[0] === -1) Element = deleteComponent;else if (sameComponent) Element = sameComponent;
      if (Element) html.push( /*#__PURE__*/_react.default.createElement(Element, {
        key: i
      }, el[1]));else html.push(el[1]);
    }
    return html;
  }, [textDiff, deleteComponent, insertComponent, sameComponent]); // produces diff array

  return [/*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: classes
  }, rest), rendereredHtml), textDiff];
};

exports.useEuiTextDiff = useEuiTextDiff;