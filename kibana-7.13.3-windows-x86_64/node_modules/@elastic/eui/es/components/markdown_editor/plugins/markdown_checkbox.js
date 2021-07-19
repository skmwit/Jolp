function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

import PropTypes from "prop-types";

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
import React, { useContext } from 'react';
import { EuiCheckbox } from '../../form/checkbox';
import { EuiMarkdownContext } from '../markdown_context';
import { htmlIdGenerator } from '../../../services/accessibility';

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

    var _checkboxMatch = _slicedToArray(checkboxMatch, 4),
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

var CheckboxMarkdownRenderer = function CheckboxMarkdownRenderer(_ref) {
  var position = _ref.position,
      lead = _ref.lead,
      label = _ref.label,
      isChecked = _ref.isChecked,
      children = _ref.children;

  var _useContext = useContext(EuiMarkdownContext),
      replaceNode = _useContext.replaceNode;

  return /*#__PURE__*/React.createElement(EuiCheckbox, {
    id: htmlIdGenerator()(),
    checked: isChecked,
    label: children,
    onChange: function onChange() {
      replaceNode(position, "".concat(lead, "[").concat(isChecked ? ' ' : 'x', "]").concat(label));
    }
  });
};

CheckboxMarkdownRenderer.propTypes = {
  type: PropTypes.oneOf(["checkboxPlugin"]).isRequired,
  lead: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    start: PropTypes.shape({
      line: PropTypes.number.isRequired,
      column: PropTypes.number.isRequired,
      offset: PropTypes.number.isRequired
    }).isRequired,
    end: PropTypes.shape({
      line: PropTypes.number.isRequired,
      column: PropTypes.number.isRequired,
      offset: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};
export { CheckboxParser as parser, CheckboxMarkdownRenderer as renderer };