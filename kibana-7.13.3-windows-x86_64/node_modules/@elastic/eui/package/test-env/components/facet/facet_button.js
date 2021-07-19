"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFacetButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _badge = require("../badge");

var _loading = require("../loading");

var _inner_text = require("../inner_text");

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
var EuiFacetButton = function EuiFacetButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      quantity = _ref.quantity,
      buttonRef = _ref.buttonRef,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "icon", "isDisabled", "isLoading", "isSelected", "quantity", "buttonRef"]);
  // If in the loading state, force disabled to true
  isDisabled = isLoading ? true : isDisabled;
  var classes = (0, _classnames.default)('euiFacetButton', {
    'euiFacetButton--isSelected': isSelected,
    'euiFacetButton--unSelected': !isSelected
  }, className); // Add quantity number if provided or loading indicator

  var buttonQuantity;

  if (isLoading) {
    buttonQuantity = /*#__PURE__*/_react.default.createElement(_loading.EuiLoadingSpinner, {
      className: "euiFacetButton__spinner",
      size: "m"
    });
  } else if (typeof quantity === 'number') {
    buttonQuantity = /*#__PURE__*/_react.default.createElement(_badge.EuiNotificationBadge, {
      className: "euiFacetButton__quantity",
      size: "m",
      color: !isSelected || isDisabled ? 'subdued' : 'accent'
    }, quantity);
  } // Add an icon to the button if one exists.


  var buttonIcon;

  if ( /*#__PURE__*/_react.default.isValidElement(icon)) {
    buttonIcon = /*#__PURE__*/_react.default.cloneElement(icon, {
      className: (0, _classnames.default)(icon.props.className, 'euiFacetButton__icon')
    });
  }

  return /*#__PURE__*/_react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
    return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
      className: classes,
      disabled: isDisabled,
      type: "button",
      ref: buttonRef,
      title: rest['aria-label'] || innerText
    }, rest), /*#__PURE__*/_react.default.createElement("span", {
      className: "euiFacetButton__content"
    }, buttonIcon, /*#__PURE__*/_react.default.createElement("span", {
      className: "euiFacetButton__text",
      "data-text": innerText,
      ref: ref
    }, children), buttonQuantity));
  });
};

exports.EuiFacetButton = EuiFacetButton;
EuiFacetButton.propTypes = {
  buttonRef: _propTypes.default.any,

  /**
     * ReactNode to render as this component's content
     */
  children: _propTypes.default.node.isRequired,

  /**
     * Any node, but preferably a `EuiIcon` or `EuiAvatar`
     */
  icon: _propTypes.default.node,
  isDisabled: _propTypes.default.bool,

  /**
     * Adds/swaps for loading spinner & disables
     */
  isLoading: _propTypes.default.bool,

  /**
     * Changes visual of button to indicate it's currently selected
     */
  isSelected: _propTypes.default.bool,
  onClick: _propTypes.default.func,

  /**
     * Adds a notification indicator for displaying the quantity provided
     */
  quantity: _propTypes.default.number,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};