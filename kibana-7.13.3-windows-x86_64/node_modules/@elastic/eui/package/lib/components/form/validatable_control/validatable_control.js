"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiValidatableControl = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function isMutableRef(ref) {
  return ref != null && ref.hasOwnProperty('current');
}

var EuiValidatableControl = function EuiValidatableControl(_ref) {
  var isInvalid = _ref.isInvalid,
      children = _ref.children;
  var control = (0, _react.useRef)(null);

  var child = _react.Children.only(children);

  var childRef = child.ref;
  var replacedRef = (0, _react.useCallback)(function (element) {
    control.current = element; // Call the original ref, if any

    if (typeof childRef === 'function') {
      childRef(element);
    } else if (isMutableRef(childRef)) {
      childRef.current = element;
    }
  }, [childRef]);
  (0, _react.useEffect)(function () {
    if (control.current === null || typeof control.current.setCustomValidity !== 'function') {
      return; // jsdom doesn't polyfill this for the server-side
    }

    if (isInvalid) {
      control.current.setCustomValidity('Invalid');
    } else {
      control.current.setCustomValidity('');
    }
  });
  return /*#__PURE__*/(0, _react.cloneElement)(child, {
    ref: replacedRef
  });
};

exports.EuiValidatableControl = EuiValidatableControl;
EuiValidatableControl.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  isInvalid: _propTypes.default.bool,

  /**
     * ReactNode to render as this component's content
     */
  children: _propTypes.default.shape({
    ref: _propTypes.default.any
  }).isRequired
};