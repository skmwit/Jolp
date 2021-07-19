function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiNotificationBadge } from '../badge';
import { EuiLoadingSpinner } from '../loading';
import { EuiInnerText } from '../inner_text';
export var EuiFacetButton = function EuiFacetButton(_ref) {
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
      rest = _objectWithoutProperties(_ref, ["children", "className", "icon", "isDisabled", "isLoading", "isSelected", "quantity", "buttonRef"]);

  // If in the loading state, force disabled to true
  isDisabled = isLoading ? true : isDisabled;
  var classes = classNames('euiFacetButton', {
    'euiFacetButton--isSelected': isSelected,
    'euiFacetButton--unSelected': !isSelected
  }, className); // Add quantity number if provided or loading indicator

  var buttonQuantity;

  if (isLoading) {
    buttonQuantity = /*#__PURE__*/React.createElement(EuiLoadingSpinner, {
      className: "euiFacetButton__spinner",
      size: "m"
    });
  } else if (typeof quantity === 'number') {
    buttonQuantity = /*#__PURE__*/React.createElement(EuiNotificationBadge, {
      className: "euiFacetButton__quantity",
      size: "m",
      color: !isSelected || isDisabled ? 'subdued' : 'accent'
    }, quantity);
  } // Add an icon to the button if one exists.


  var buttonIcon;

  if ( /*#__PURE__*/React.isValidElement(icon)) {
    buttonIcon = /*#__PURE__*/React.cloneElement(icon, {
      className: classNames(icon.props.className, 'euiFacetButton__icon')
    });
  }

  return /*#__PURE__*/React.createElement(EuiInnerText, null, function (ref, innerText) {
    return /*#__PURE__*/React.createElement("button", _extends({
      className: classes,
      disabled: isDisabled,
      type: "button",
      ref: buttonRef,
      title: rest['aria-label'] || innerText
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "euiFacetButton__content"
    }, buttonIcon, /*#__PURE__*/React.createElement("span", {
      className: "euiFacetButton__text",
      "data-text": innerText,
      ref: ref
    }, children), buttonQuantity));
  });
};
EuiFacetButton.propTypes = {
  buttonRef: PropTypes.any,

  /**
     * ReactNode to render as this component's content
     */
  children: PropTypes.node.isRequired,

  /**
     * Any node, but preferably a `EuiIcon` or `EuiAvatar`
     */
  icon: PropTypes.node,
  isDisabled: PropTypes.bool,

  /**
     * Adds/swaps for loading spinner & disables
     */
  isLoading: PropTypes.bool,

  /**
     * Changes visual of button to indicate it's currently selected
     */
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,

  /**
     * Adds a notification indicator for displaying the quantity provided
     */
  quantity: PropTypes.number,
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string
};