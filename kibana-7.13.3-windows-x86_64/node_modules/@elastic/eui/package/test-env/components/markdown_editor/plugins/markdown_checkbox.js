"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderer = exports.parser = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _checkbox = require("../../form/checkbox");

var _markdown_context = require("../markdown_context");

var _accessibility = require("../../../services/accessibility");

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
var CheckboxParser = function CheckboxParser() {
  var Parser = this.Parser;
  var tokenizers = Parser.prototype.blockTokenizers;
  var methods = Parser.prototype.blockMethods;

  var tokenizeCheckbox = function tokenizeCheckbox(eat, value, silent) {
    /**
     * optional leading whitespace & single (dash or asterisk) mix
     * square brackets, optionally containing whitespace and `x`
     * optional whitespace
     * remainder of the line is consumed as the textbox label
     */
    var checkboxMatch = value.match(/^(\s*[-*]\s*)?\[([\sx]*)\](.+)/);
    if (checkboxMatch == null) return false;

    if (silent) {
      return true;
    }

    var _checkboxMatch = (0, _slicedToArray2.default)(checkboxMatch, 4),
        match = _checkboxMatch[0],
        _checkboxMatch$ = _checkboxMatch[1],
        lead = _checkboxMatch$ === void 0 ? '' : _checkboxMatch$,
        checkboxStatus = _checkboxMatch[2],
        text = _checkboxMatch[3];

    var isChecked = checkboxStatus.indexOf('x') !== -1;
    var now = eat.now();
    var offset = match.length - text.length;
    now.column += offset;
    now.offset += offset;
    var children = this.tokenizeInline(text, now);
    return eat(match)({
      type: 'checkboxPlugin',
      lead: lead,
      label: text,
      isChecked: isChecked,
      children: children
    });
  };

  tokenizers.checkbox = tokenizeCheckbox;
  methods.splice(methods.indexOf('list'), 0, 'checkbox'); // Run it just before default `list` plugin to inject our own idea of checkboxes.
};

exports.parser = CheckboxParser;

var CheckboxMarkdownRenderer = function CheckboxMarkdownRenderer(_ref) {
  var position = _ref.position,
      lead = _ref.lead,
      label = _ref.label,
      isChecked = _ref.isChecked,
      children = _ref.children;

  var _useContext = (0, _react.useContext)(_markdown_context.EuiMarkdownContext),
      replaceNode = _useContext.replaceNode;

  return /*#__PURE__*/_react.default.createElement(_checkbox.EuiCheckbox, {
    id: (0, _accessibility.htmlIdGenerator)()(),
    checked: isChecked,
    label: children,
    onChange: function onChange() {
      replaceNode(position, "".concat(lead, "[").concat(isChecked ? ' ' : 'x', "]").concat(label));
    }
  });
};

exports.renderer = CheckboxMarkdownRenderer;
CheckboxMarkdownRenderer.propTypes = {
  type: _propTypes.default.oneOf(["checkboxPlugin"]).isRequired,
  lead: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  isChecked: _propTypes.default.bool.isRequired,
  position: _propTypes.default.shape({
    start: _propTypes.default.shape({
      line: _propTypes.default.number.isRequired,
      column: _propTypes.default.number.isRequired,
      offset: _propTypes.default.number.isRequired
    }).isRequired,
    end: _propTypes.default.shape({
      line: _propTypes.default.number.isRequired,
      column: _propTypes.default.number.isRequired,
      offset: _propTypes.default.number.isRequired
    }).isRequired
  }).isRequired
};