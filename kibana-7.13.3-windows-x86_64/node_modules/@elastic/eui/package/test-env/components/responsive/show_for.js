"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiShowFor = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _breakpoint = require("../../services/breakpoint");

var _utils = require("../color_picker/utils");

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
var EuiShowFor = function EuiShowFor(_ref) {
  var children = _ref.children,
      sizes = _ref.sizes;

  var _useState = (0, _react.useState)((0, _breakpoint.getBreakpoint)(typeof window === 'undefined' ? -Infinity : window.innerWidth)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      currentBreakpoint = _useState2[0],
      setCurrentBreakpoint = _useState2[1];

  var functionToCallOnWindowResize = (0, _utils.throttle)(function () {
    var newBreakpoint = (0, _breakpoint.getBreakpoint)(window.innerWidth);

    if (newBreakpoint !== currentBreakpoint) {
      setCurrentBreakpoint(newBreakpoint);
    } // reacts every 50ms to resize changes and always gets the final update

  }, 50); // Add window resize handlers

  (0, _react.useEffect)(function () {
    window.addEventListener('resize', functionToCallOnWindowResize);
    return function () {
      window.removeEventListener('resize', functionToCallOnWindowResize);
    };
  }, [sizes, functionToCallOnWindowResize]);

  if (sizes === 'all' || sizes.includes(currentBreakpoint)) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
  }

  return null;
};

exports.EuiShowFor = EuiShowFor;
EuiShowFor.propTypes = {
  /**
     * Required otherwise nothing ever gets returned
     */
  children: _propTypes.default.node.isRequired,

  /**
     * List of all the responsive sizes to show the children for.
     * Array of #EuiBreakpointSize
     */
  sizes: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOf(["xs", "s", "m", "l", "xl"]).isRequired).isRequired, _propTypes.default.oneOf(["all", "none"])]).isRequired
};