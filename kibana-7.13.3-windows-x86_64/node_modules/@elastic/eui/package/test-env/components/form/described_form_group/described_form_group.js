"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDescribedFormGroup = exports.PADDING_SIZES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../../common");

var _title = require("../../title");

var _text = require("../../text");

var _flex = require("../../flex");

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
var paddingSizeToClassNameMap = {
  xxxs: 'euiDescribedFormGroup__fieldPadding--xxxsmall',
  xxs: 'euiDescribedFormGroup__fieldPadding--xxsmall',
  xs: 'euiDescribedFormGroup__fieldPadding--xsmall',
  s: 'euiDescribedFormGroup__fieldPadding--small',
  m: 'euiDescribedFormGroup__fieldPadding--medium',
  l: 'euiDescribedFormGroup__fieldPadding--large'
};
var PADDING_SIZES = (0, _common.keysOf)(paddingSizeToClassNameMap);
exports.PADDING_SIZES = PADDING_SIZES;

var EuiDescribedFormGroup = function EuiDescribedFormGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$gutterSize = _ref.gutterSize,
      gutterSize = _ref$gutterSize === void 0 ? 'l' : _ref$gutterSize,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      _ref$titleSize = _ref.titleSize,
      titleSize = _ref$titleSize === void 0 ? 'xs' : _ref$titleSize,
      title = _ref.title,
      description = _ref.description,
      descriptionFlexItemProps = _ref.descriptionFlexItemProps,
      fieldFlexItemProps = _ref.fieldFlexItemProps,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "gutterSize", "fullWidth", "titleSize", "title", "description", "descriptionFlexItemProps", "fieldFlexItemProps"]);
  var classes = (0, _classnames.default)('euiDescribedFormGroup', {
    'euiDescribedFormGroup--fullWidth': fullWidth
  }, className);
  var fieldClasses = (0, _classnames.default)('euiDescribedFormGroup__fields', paddingSizeToClassNameMap[titleSize], fieldFlexItemProps && fieldFlexItemProps.className);
  var renderedDescription;

  if (description) {
    renderedDescription = /*#__PURE__*/_react.default.createElement(_text.EuiText, {
      size: "s",
      color: "subdued",
      className: "euiDescribedFormGroup__description"
    }, description);
  }

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    role: "group",
    className: classes
  }, rest), /*#__PURE__*/_react.default.createElement(_flex.EuiFlexGroup, {
    gutterSize: gutterSize
  }, /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, descriptionFlexItemProps, /*#__PURE__*/_react.default.createElement(_title.EuiTitle, {
    size: titleSize,
    className: "euiDescribedFormGroup__title"
  }, title), renderedDescription), /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, (0, _extends2.default)({}, fieldFlexItemProps, {
    className: fieldClasses
  }), children)));
};

exports.EuiDescribedFormGroup = EuiDescribedFormGroup;
EuiDescribedFormGroup.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * One or more `EuiFormRow`s
       */
  children: _propTypes.default.node,

  /**
       * Passed to `EuiFlexGroup`
       */
  gutterSize: _propTypes.default.oneOf(["none", "xs", "s", "m", "l", "xl"]),
  fullWidth: _propTypes.default.bool,

  /**
       * For better accessibility, it's recommended the use of HTML headings
       */
  title: _propTypes.default.element.isRequired,
  titleSize: _propTypes.default.oneOf(["xxxs", "xxs", "xs", "s", "m", "l"]),

  /**
       * Added as a child of `EuiText`
       */
  description: _propTypes.default.node,

  /**
       * For customizing the field container. Extended from `EuiFlexItem`
       */
  descriptionFlexItemProps: _propTypes.default.any,
  fieldFlexItemProps: _propTypes.default.any
};