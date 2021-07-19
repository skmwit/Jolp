function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
import { useInnerText } from '../../inner_text';

var EuiTickValue = function EuiTickValue(_ref) {
  var disabled = _ref.disabled,
      ticks = _ref.ticks,
      min = _ref.min,
      max = _ref.max,
      value = _ref.value,
      onChange = _ref.onChange,
      percentageWidth = _ref.percentageWidth,
      tickValue = _ref.tickValue;
  var tickStyle = {};
  var customTick;

  if (ticks) {
    customTick = ticks.find(function (o) {
      return o.value === tickValue;
    });

    if (customTick) {
      tickStyle.left = "".concat((customTick.value - min) / (max - min) * 100, "%");
    }
  } else {
    tickStyle.width = "".concat(percentageWidth, "%");
  }

  var tickClasses = classNames('euiRangeTick', {
    'euiRangeTick--selected': value === tickValue,
    'euiRangeTick--isCustom': customTick
  });
  var label = customTick ? customTick.label : tickValue;

  var _useInnerText = useInnerText(),
      _useInnerText2 = _slicedToArray(_useInnerText, 2),
      ref = _useInnerText2[0],
      innerText = _useInnerText2[1];

  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: tickClasses,
    value: tickValue,
    disabled: disabled,
    onClick: onChange,
    style: tickStyle,
    tabIndex: -1,
    ref: ref,
    title: typeof label === 'string' ? label : innerText
  }, label);
};

EuiTickValue.propTypes = {
  ticks: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.node.isRequired
  }).isRequired),
  tickSequence: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  value: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired).isRequired]),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  compressed: PropTypes.bool,
  interval: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  tickValue: PropTypes.any.isRequired,
  percentageWidth: PropTypes.number.isRequired
};
export var EuiRangeTicks = function EuiRangeTicks(props) {
  var ticks = props.ticks,
      tickSequence = props.tickSequence,
      max = props.max,
      min = props.min,
      _props$interval = props.interval,
      interval = _props$interval === void 0 ? 1 : _props$interval,
      compressed = props.compressed; // Calculate the width of each tick mark

  var percentageWidth = interval / (max - min + interval) * 100; // Align with item labels across the range by adding
  // left and right negative margins that is half of the tick marks

  var ticksStyle = !!ticks ? undefined : {
    margin: "0 ".concat(percentageWidth / -2, "%"),
    left: 0,
    right: 0
  };
  var classes = classNames('euiRangeTicks', {
    'euiRangeTicks--compressed': compressed
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classes,
    style: ticksStyle
  }, tickSequence.map(function (tickValue) {
    return /*#__PURE__*/React.createElement(EuiTickValue, _extends({
      key: tickValue
    }, props, {
      percentageWidth: percentageWidth,
      tickValue: tickValue
    }));
  }));
};
EuiRangeTicks.propTypes = {
  ticks: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.node.isRequired
  }).isRequired),
  tickSequence: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  value: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired).isRequired]),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  compressed: PropTypes.bool,
  interval: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};