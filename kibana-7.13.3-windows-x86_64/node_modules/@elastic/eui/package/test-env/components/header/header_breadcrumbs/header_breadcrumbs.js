"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHeaderBreadcrumbs = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _breadcrumbs = require("../../breadcrumbs");

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
var EuiHeaderBreadcrumbs = function EuiHeaderBreadcrumbs(_ref) {
  var className = _ref.className,
      breadcrumbs = _ref.breadcrumbs,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "breadcrumbs"]);
  var classes = (0, _classnames.default)('euiHeaderBreadcrumbs', className);
  return /*#__PURE__*/_react.default.createElement(_breadcrumbs.EuiBreadcrumbs, (0, _extends2.default)({
    max: 4,
    truncate: true,
    breadcrumbs: breadcrumbs,
    className: classes
  }, rest));
};

exports.EuiHeaderBreadcrumbs = EuiHeaderBreadcrumbs;
EuiHeaderBreadcrumbs.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Hides extra (above the max) breadcrumbs under a collapsed item as the window gets smaller.
     * Pass a custom #EuiBreadcrumbResponsiveMaxCount object to change the number of breadcrumbs to show at the particular breakpoints.
     * Omitting or passing a `0` value will show all breadcrumbs.
     *
     * Pass `false` to turn this behavior off.
     *
     * Default: `{ xs: 1, s: 2, m: 4 }`
     */
  responsive: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.any.isRequired]),

  /**
     * Forces all breadcrumbs to single line and
     * truncates each breadcrumb to a particular width,
     * except for the last item
     */
  truncate: _propTypes.default.bool,

  /**
     * Collapses the inner items past the maximum set here
     * into a single ellipses item
     */
  max: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.oneOf([null])]),

  /**
     * The array of individual #EuiBreadcrumb items
     */
  breadcrumbs: _propTypes.default.arrayOf(_propTypes.default.shape({
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string,

    /**
       * Visible label of the breadcrumb
       */
    text: _propTypes.default.node.isRequired,
    href: _propTypes.default.string,
    onClick: _propTypes.default.func,

    /**
       * Force a max-width on the breadcrumb text
       */
    truncate: _propTypes.default.bool
  }).isRequired).isRequired
};