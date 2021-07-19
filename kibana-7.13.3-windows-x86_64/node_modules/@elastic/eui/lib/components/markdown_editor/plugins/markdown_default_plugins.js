"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultUiPlugins = exports.getDefaultEuiMarkdownUiPlugins = exports.defaultProcessingPlugins = exports.getDefaultEuiMarkdownProcessingPlugins = exports.defaultParsingPlugins = exports.getDefaultEuiMarkdownParsingPlugins = void 0;

var _remarkRehype = _interopRequireDefault(require("remark-rehype"));

var _rehypeReact = _interopRequireDefault(require("rehype-react"));

var MarkdownTooltip = _interopRequireWildcard(require("./markdown_tooltip"));

var MarkdownCheckbox = _interopRequireWildcard(require("./markdown_checkbox"));

var _markdown_link_validator = require("./markdown_link_validator");

var _react = _interopRequireWildcard(require("react"));

var _link = require("../../link");

var _code = require("../../code");

var _remarkParse = _interopRequireDefault(require("remark-parse"));

var _remarkHighlight = _interopRequireDefault(require("remark-highlight.js"));

var _remarkEmoji = _interopRequireDefault(require("remark-emoji"));

var _all = _interopRequireDefault(require("mdast-util-to-hast/lib/all"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getDefaultEuiMarkdownParsingPlugins = function getDefaultEuiMarkdownParsingPlugins() {
  return [[_remarkParse.default, {}], [_remarkHighlight.default, {}], [_remarkEmoji.default, {
    emoticon: true
  }], [MarkdownTooltip.parser, {}], [MarkdownCheckbox.parser, {}], [_markdown_link_validator.markdownLinkValidator, {}]];
};

exports.getDefaultEuiMarkdownParsingPlugins = getDefaultEuiMarkdownParsingPlugins;
var defaultParsingPlugins = getDefaultEuiMarkdownParsingPlugins();
exports.defaultParsingPlugins = defaultParsingPlugins;

var unknownHandler = function unknownHandler(h, node) {
  return h(node, node.type, node, (0, _all.default)(h, node));
};

var getDefaultEuiMarkdownProcessingPlugins = function getDefaultEuiMarkdownProcessingPlugins() {
  return [[_remarkRehype.default, {
    allowDangerousHtml: true,
    unknownHandler: unknownHandler,
    handlers: {} // intentionally empty, allows plugins to extend if they need to

  }], [_rehypeReact.default, {
    createElement: _react.createElement,
    components: {
      a: _link.EuiLink,
      code: function code(props) {
        return (// If there are linebreaks use codeblock, otherwise code
          /\r|\n/.exec(props.children) ? /*#__PURE__*/_react.default.createElement(_code.EuiCodeBlock, _extends({
            fontSize: "m",
            paddingSize: "s"
          }, props)) : /*#__PURE__*/_react.default.createElement(_code.EuiCode, props)
        );
      },
      tooltipPlugin: MarkdownTooltip.renderer,
      checkboxPlugin: MarkdownCheckbox.renderer
    }
  }]];
};

exports.getDefaultEuiMarkdownProcessingPlugins = getDefaultEuiMarkdownProcessingPlugins;
var defaultProcessingPlugins = getDefaultEuiMarkdownProcessingPlugins();
exports.defaultProcessingPlugins = defaultProcessingPlugins;

var getDefaultEuiMarkdownUiPlugins = function getDefaultEuiMarkdownUiPlugins() {
  var array = [MarkdownTooltip.plugin]; // @ts-ignore __originatedFromEui is a custom property

  array.__originatedFromEui = true;
  return array;
};

exports.getDefaultEuiMarkdownUiPlugins = getDefaultEuiMarkdownUiPlugins;
var defaultUiPlugins = getDefaultEuiMarkdownUiPlugins();
exports.defaultUiPlugins = defaultUiPlugins;