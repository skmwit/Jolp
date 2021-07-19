"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultItemAction = void 0;

var _react = _interopRequireDefault(require("react"));

var _predicate = require("../../services/predicate");

var _button = require("../button");

var _tool_tip = require("../tool_tip");

var _accessibility = require("../../services/accessibility");

var _accessibility2 = require("../accessibility");

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
// In order to use generics with an arrow function inside a .tsx file, it's necessary to use
// this `extends` hack and declare the types as shown, instead of declaring the const as a
// FunctionComponent
var DefaultItemAction = function DefaultItemAction(_ref) {
  var action = _ref.action,
      enabled = _ref.enabled,
      item = _ref.item,
      className = _ref.className;

  if (!action.onClick && !action.href) {
    throw new Error("Cannot render item action [".concat(action.name, "]. Missing required 'onClick' callback\n      or 'href' string. If you want to provide a custom action control, make sure to define the 'render' callback"));
  }

  var onClick = action.onClick ? function () {
    return action.onClick(item);
  } : undefined;
  var buttonColor = action.color;
  var color = 'primary';

  if (buttonColor) {
    color = (0, _predicate.isString)(buttonColor) ? buttonColor : buttonColor(item);
  }

  var buttonIcon = action.icon;
  var icon;

  if (buttonIcon) {
    icon = (0, _predicate.isString)(buttonIcon) ? buttonIcon : buttonIcon(item);
  }

  var button;
  var actionContent = typeof action.name === 'function' ? action.name(item) : action.name;

  if (action.type === 'icon') {
    if (!icon) {
      throw new Error("Cannot render item action [".concat(action.name, "]. It is configured to render as an icon but no\n      icon is provided. Make sure to set the 'icon' property of the action"));
    }

    var ariaLabelId = (0, _accessibility.htmlIdGenerator)()();
    button = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_button.EuiButtonIcon, {
      className: className,
      "aria-labelledby": ariaLabelId,
      isDisabled: !enabled,
      color: color,
      iconType: icon,
      onClick: onClick,
      href: action.href,
      target: action.target,
      "data-test-subj": action['data-test-subj']
    }), /*#__PURE__*/_react.default.createElement(_accessibility2.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("span", {
      id: ariaLabelId
    }, actionContent)));
  } else {
    button = /*#__PURE__*/_react.default.createElement(_button.EuiButtonEmpty, {
      className: className,
      size: "s",
      isDisabled: !enabled,
      color: color,
      iconType: icon,
      onClick: onClick,
      href: action.href,
      target: action.target,
      "data-test-subj": action['data-test-subj'],
      flush: "right"
    }, actionContent);
  }

  return enabled && action.description ? /*#__PURE__*/_react.default.createElement(_tool_tip.EuiToolTip, {
    content: action.description,
    delay: "long"
  }, button) : button;
};

exports.DefaultItemAction = DefaultItemAction;