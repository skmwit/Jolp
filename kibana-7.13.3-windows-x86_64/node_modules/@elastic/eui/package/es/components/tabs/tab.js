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
import { getSecureRelForTarget } from '../../services';
import { validateHref } from '../../services/security/href_validator';
export var EuiTab = function EuiTab(_ref) {
  var isSelected = _ref.isSelected,
      children = _ref.children,
      className = _ref.className,
      _disabled = _ref.disabled,
      href = _ref.href,
      target = _ref.target,
      rel = _ref.rel,
      rest = _objectWithoutProperties(_ref, ["isSelected", "children", "className", "disabled", "href", "target", "rel"]);

  var isHrefValid = !href || validateHref(href);
  var disabled = _disabled || !isHrefValid;
  var classes = classNames('euiTab', className, {
    'euiTab-isSelected': isSelected,
    'euiTab-isDisabled': disabled
  }); //  <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
  //  this is a button and piggyback off its disabled styles.

  if (href && !disabled) {
    var secureRel = getSecureRelForTarget({
      href: href,
      target: target,
      rel: rel
    });
    return /*#__PURE__*/React.createElement("a", _extends({
      role: "tab",
      "aria-selected": !!isSelected,
      className: classes,
      href: href,
      target: target,
      rel: secureRel
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "euiTab__content"
    }, children));
  }

  return /*#__PURE__*/React.createElement("button", _extends({
    role: "tab",
    "aria-selected": !!isSelected,
    type: "button",
    className: classes,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "euiTab__content"
  }, children));
};
EuiTab.propTypes = {
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
};