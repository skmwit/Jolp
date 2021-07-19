"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiOverlayMask = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

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

/**
 * NOTE: We can't test this component because Enzyme doesn't support rendering
 * into portals.
 */
var EuiOverlayMask = function EuiOverlayMask(_ref) {
  var className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick,
      _ref$headerZindexLoca = _ref.headerZindexLocation,
      headerZindexLocation = _ref$headerZindexLoca === void 0 ? 'above' : _ref$headerZindexLoca,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "onClick", "headerZindexLocation"]);
  var overlayMaskNode = (0, _react.useRef)(document.createElement('div'));

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isPortalTargetReady = _useState2[0],
      setIsPortalTargetReady = _useState2[1];

  (0, _react.useEffect)(function () {
    document.body.classList.add('euiBody-hasOverlayMask');
    return function () {
      document.body.classList.remove('euiBody-hasOverlayMask');
    };
  }, []);
  (0, _react.useEffect)(function () {
    var portalTarget = overlayMaskNode.current;
    document.body.appendChild(overlayMaskNode.current);
    setIsPortalTargetReady(true);
    return function () {
      if (portalTarget) {
        document.body.removeChild(portalTarget);
      }
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (!overlayMaskNode.current) return;
    (0, _common.keysOf)(rest).forEach(function (key) {
      if (typeof rest[key] !== 'string') {
        throw new Error("Unhandled property type. EuiOverlayMask property ".concat(key, " is not a string."));
      }

      overlayMaskNode.current.setAttribute(key, rest[key]);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  (0, _react.useEffect)(function () {
    if (!overlayMaskNode.current) return;
    overlayMaskNode.current.className = (0, _classnames.default)('euiOverlayMask', "euiOverlayMask--".concat(headerZindexLocation, "Header"), className);
  }, [className, headerZindexLocation]);
  (0, _react.useEffect)(function () {
    if (!overlayMaskNode.current || !onClick) return;
    var portalTarget = overlayMaskNode.current;
    overlayMaskNode.current.addEventListener('click', function (e) {
      if (e.target === overlayMaskNode.current) {
        onClick();
      }
    });
    return function () {
      if (portalTarget && onClick) {
        portalTarget.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);
  return isPortalTargetReady ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/(0, _reactDom.createPortal)(children, overlayMaskNode.current)) : null;
};

exports.EuiOverlayMask = EuiOverlayMask;
EuiOverlayMask.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Function that applies to clicking the mask itself and not the children
     */
  onClick: _propTypes.default.func,

  /**
     * ReactNode to render as this component's content
     */
  children: _propTypes.default.node,

  /**
     * Should the mask visually sit above or below the EuiHeader (controlled by z-index)
     */
  headerZindexLocation: _propTypes.default.oneOf(["above", "below"])
};