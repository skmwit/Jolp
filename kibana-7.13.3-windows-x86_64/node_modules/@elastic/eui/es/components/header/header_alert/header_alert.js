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
import { EuiFlexGroup, EuiFlexItem } from '../../flex';
import { htmlIdGenerator } from '../../../services';
export var EuiHeaderAlert = function EuiHeaderAlert(_ref) {
  var action = _ref.action,
      className = _ref.className,
      date = _ref.date,
      text = _ref.text,
      title = _ref.title,
      badge = _ref.badge,
      rest = _objectWithoutProperties(_ref, ["action", "className", "date", "text", "title", "badge"]);

  var classes = classNames('euiHeaderAlert', className);
  var ariaId = htmlIdGenerator()();
  return /*#__PURE__*/React.createElement("article", _extends({
    "aria-labelledby": "".concat(ariaId, "-title"),
    className: classes
  }, rest), /*#__PURE__*/React.createElement(EuiFlexGroup, {
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/React.createElement(EuiFlexItem, null, /*#__PURE__*/React.createElement("div", {
    className: "euiHeaderAlert__date"
  }, date)), badge && /*#__PURE__*/React.createElement(EuiFlexItem, {
    grow: false
  }, badge)), /*#__PURE__*/React.createElement("h3", {
    id: "".concat(ariaId, "-title"),
    className: "euiHeaderAlert__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "euiHeaderAlert__text"
  }, text), action && /*#__PURE__*/React.createElement("div", {
    className: "euiHeaderAlert__action euiLink"
  }, action));
};
EuiHeaderAlert.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
       * Adds a link to the alert.
       */
  action: PropTypes.node,
  date: PropTypes.node.isRequired,
  text: PropTypes.node,
  title: PropTypes.node.isRequired,

  /**
       * Accepts an `EuiBadge` that displays on the alert
       */
  badge: PropTypes.node
};