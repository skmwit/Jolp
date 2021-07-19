"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderer = exports.parser = exports.plugin = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tool_tip = require("../../tool_tip");

var _icon = require("../../icon");

var _code = require("../../code");

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
var tooltipPlugin = {
  name: 'tooltipPlugin',
  button: {
    label: 'Tooltip',
    iconType: 'editorComment'
  },
  formatting: {
    prefix: '!{tooltip[',
    suffix: ']()}',
    trimFirst: true
  },
  helpText: /*#__PURE__*/_react.default.createElement(_code.EuiCodeBlock, {
    language: "md",
    paddingSize: "s",
    fontSize: "l"
  }, '!{tooltip[anchor text](helpful description)}')
};
exports.plugin = tooltipPlugin;

var TooltipParser = function TooltipParser() {
  var Parser = this.Parser;
  var tokenizers = Parser.prototype.inlineTokenizers;
  var methods = Parser.prototype.inlineMethods;

  var tokenizeTooltip = function tokenizeTooltip(eat, value, silent) {
    if (value.startsWith('!{tooltip') === false) return false;
    var nextChar = value[9];
    if (nextChar !== '[') return false; // this isn't actually a tooltip

    var index = 9;

    function readArg(open, close) {
      if (value[index] !== open) throw 'Expected left bracket';
      index++;
      var body = '';
      var openBrackets = 0;

      for (; index < value.length; index++) {
        var char = value[index];

        if (char === close && openBrackets === 0) {
          index++;
          return body;
        } else if (char === close) {
          openBrackets--;
        } else if (char === open) {
          openBrackets++;
        }

        body += char;
      }

      return '';
    }

    var tooltipAnchor = readArg('[', ']');
    var tooltipText = readArg('(', ')');
    var now = eat.now();

    if (!tooltipAnchor) {
      this.file.info('No tooltip anchor found', {
        line: now.line,
        column: now.column + 10
      });
    }

    if (!tooltipText) {
      this.file.info('No tooltip text found', {
        line: now.line,
        column: now.column + 12 + tooltipAnchor.length
      });
    }

    if (!tooltipText || !tooltipAnchor) return false;

    if (silent) {
      return true;
    }

    now.column += 10;
    now.offset += 10;
    var children = this.tokenizeInline(tooltipAnchor, now);
    return eat("!{tooltip[".concat(tooltipAnchor, "](").concat(tooltipText, ")}"))({
      type: 'tooltipPlugin',
      content: tooltipText,
      children: children
    });
  };

  tokenizeTooltip.notInLink = true;

  tokenizeTooltip.locator = function (value, fromIndex) {
    return value.indexOf('!{tooltip', fromIndex);
  };

  tokenizers.tooltip = tokenizeTooltip;
  methods.splice(methods.indexOf('text'), 0, 'tooltip');
};

exports.parser = TooltipParser;

var tooltipMarkdownRenderer = function tooltipMarkdownRenderer(_ref) {
  var content = _ref.content,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_tool_tip.EuiToolTip, {
    content: content
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, children), /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
    type: "questionInCircle",
    className: "euiMarkdownTooltip__icon"
  }))));
};

exports.renderer = tooltipMarkdownRenderer;
tooltipMarkdownRenderer.propTypes = {
  type: _propTypes.default.oneOf(["tooltipPlugin"]).isRequired,
  content: _propTypes.default.string.isRequired,
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