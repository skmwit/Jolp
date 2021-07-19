"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCodeBlockImpl = exports.PADDING_SIZES = exports.FONT_SIZES = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _highlight = _interopRequireDefault(require("highlight.js"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _services = require("../../services");

var _button = require("../button");

var _common = require("../common");

var _copy = require("../copy");

var _focus_trap = require("../focus_trap");

var _i18n = require("../i18n");

var _inner_text = require("../inner_text");

var _mutation_observer = require("../observer/mutation_observer");

var _resize_observer = require("../observer/resize_observer");

var _overlay_mask = require("../overlay_mask");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var fontSizeToClassNameMap = {
  s: 'euiCodeBlock--fontSmall',
  m: 'euiCodeBlock--fontMedium',
  l: 'euiCodeBlock--fontLarge'
};
var FONT_SIZES = (0, _common.keysOf)(fontSizeToClassNameMap);
exports.FONT_SIZES = FONT_SIZES;
var paddingSizeToClassNameMap = {
  none: '',
  s: 'euiCodeBlock--paddingSmall',
  m: 'euiCodeBlock--paddingMedium',
  l: 'euiCodeBlock--paddingLarge'
};
var PADDING_SIZES = (0, _common.keysOf)(paddingSizeToClassNameMap);
exports.PADDING_SIZES = PADDING_SIZES;

/**
 * This is the base component extended by EuiCode and EuiCodeBlock.
 * These components share the same propTypes definition with EuiCodeBlockImpl.
 */
var EuiCodeBlockImpl = function EuiCodeBlockImpl(_ref) {
  var _ref$transparentBackg = _ref.transparentBackground,
      transparentBackground = _ref$transparentBackg === void 0 ? false : _ref$transparentBackg,
      _ref$paddingSize = _ref.paddingSize,
      paddingSize = _ref$paddingSize === void 0 ? 'l' : _ref$paddingSize,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 's' : _ref$fontSize,
      _ref$isCopyable = _ref.isCopyable,
      isCopyable = _ref$isCopyable === void 0 ? false : _ref$isCopyable,
      _ref$whiteSpace = _ref.whiteSpace,
      whiteSpace = _ref$whiteSpace === void 0 ? 'pre-wrap' : _ref$whiteSpace,
      language = _ref.language,
      inline = _ref.inline,
      children = _ref.children,
      className = _ref.className,
      overflowHeight = _ref.overflowHeight,
      rest = _objectWithoutProperties(_ref, ["transparentBackground", "paddingSize", "fontSize", "isCopyable", "whiteSpace", "language", "inline", "children", "className", "overflowHeight"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFullScreen = _useState2[0],
      setIsFullScreen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPortalTargetReady = _useState4[0],
      setIsPortalTargetReady = _useState4[1];

  var codeTarget = (0, _react.useRef)(null);
  var code = (0, _react.useRef)(null);

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      wrapperRef = _useState6[0],
      setWrapperRef = _useState6[1];

  var _useInnerText = (0, _inner_text.useInnerText)(''),
      _useInnerText2 = _slicedToArray(_useInnerText, 2),
      innerTextRef = _useInnerText2[0],
      innerText = _useInnerText2[1];

  var _useState7 = (0, _react.useState)(-1),
      _useState8 = _slicedToArray(_useState7, 2),
      tabIndex = _useState8[0],
      setTabIndex = _useState8[1];

  var combinedRef = (0, _services.useCombinedRefs)([innerTextRef, setWrapperRef]);

  var _useResizeObserver = (0, _resize_observer.useResizeObserver)(wrapperRef),
      width = _useResizeObserver.width,
      height = _useResizeObserver.height;

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      codeFullScreen = _useState10[0],
      setCodeFullScreen = _useState10[1];

  var doesOverflow = function doesOverflow() {
    if (!wrapperRef) return;
    var clientWidth = wrapperRef.clientWidth,
        clientHeight = wrapperRef.clientHeight,
        scrollWidth = wrapperRef.scrollWidth,
        scrollHeight = wrapperRef.scrollHeight;
    var doesOverflow = scrollHeight > clientHeight || scrollWidth > clientWidth;
    setTabIndex(doesOverflow ? 0 : -1);
  };

  (0, _mutation_observer.useMutationObserver)(wrapperRef, doesOverflow, {
    subtree: true,
    childList: true
  });
  (0, _react.useEffect)(doesOverflow, [width, height, wrapperRef]);
  (0, _react.useEffect)(function () {
    codeTarget.current = document.createElement('div');
    setIsPortalTargetReady(true);
  }, []);
  (0, _react.useEffect)(function () {
    /**
     * because React maintains a mapping between its Virtual DOM representation and the actual
     * DOM elements (including text nodes), and hljs modifies the DOM structure which leads
     * to React updating detached nodes, we render to a document fragment and
     * copy from that fragment into the target elements
     * (https://github.com/elastic/eui/issues/2322)
     */
    var html = isPortalTargetReady ? codeTarget.current.innerHTML : '';

    if (code.current) {
      code.current.innerHTML = html;
    }

    if (language) {
      if (code.current) {
        _highlight.default.highlightBlock(code.current);
      }
    }
  });
  (0, _react.useEffect)(function () {
    if (codeFullScreen) {
      var html = isPortalTargetReady ? codeTarget.current.innerHTML : '';
      codeFullScreen.innerHTML = html;

      if (language) {
        _highlight.default.highlightBlock(codeFullScreen);
      }
    }
  }, [isPortalTargetReady, codeFullScreen, language]);

  var onKeyDown = function onKeyDown(event) {
    if (event.key === _services.keys.ESCAPE) {
      event.preventDefault();
      event.stopPropagation();
      closeFullScreen();
    }
  };

  var toggleFullScreen = function toggleFullScreen() {
    setIsFullScreen(!isFullScreen);
  };

  var closeFullScreen = function closeFullScreen() {
    setIsFullScreen(false);
  };

  var classes = (0, _classnames.default)('euiCodeBlock', fontSizeToClassNameMap[fontSize], paddingSizeToClassNameMap[paddingSize], {
    'euiCodeBlock--transparentBackground': transparentBackground,
    'euiCodeBlock--inline': inline,
    'euiCodeBlock--hasControls': isCopyable || overflowHeight
  }, className);
  var codeClasses = (0, _classnames.default)('euiCodeBlock__code', language);
  var preClasses = (0, _classnames.default)('euiCodeBlock__pre', {
    'euiCodeBlock__pre--whiteSpacePre': whiteSpace === 'pre',
    'euiCodeBlock__pre--whiteSpacePreWrap': whiteSpace === 'pre-wrap'
  });
  var optionalStyles = {};

  if (overflowHeight) {
    optionalStyles.maxHeight = overflowHeight;
  }

  var codeSnippet = /*#__PURE__*/_react.default.createElement("code", _extends({
    ref: code,
    className: codeClasses
  }, rest));

  var wrapperProps = {
    className: classes,
    style: optionalStyles
  };

  if (inline) {
    return isPortalTargetReady ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/(0, _reactDom.createPortal)(children, codeTarget.current), /*#__PURE__*/_react.default.createElement("span", wrapperProps, codeSnippet)) : null;
  }

  var getCopyButton = function getCopyButton(textToCopy) {
    var copyButton;

    if (isCopyable && textToCopy) {
      copyButton = /*#__PURE__*/_react.default.createElement("div", {
        className: "euiCodeBlock__copyButton"
      }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiCodeBlock.copyButton",
        default: "Copy"
      }, function (copyButton) {
        return /*#__PURE__*/_react.default.createElement(_copy.EuiCopy, {
          textToCopy: textToCopy
        }, function (copy) {
          return /*#__PURE__*/_react.default.createElement(_button.EuiButtonIcon, {
            onClick: copy,
            iconType: "copy",
            color: "text",
            "aria-label": copyButton
          });
        });
      }));
    }

    return copyButton;
  };

  var fullScreenButton;

  if (!inline && overflowHeight) {
    fullScreenButton = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      tokens: ['euiCodeBlock.fullscreenCollapse', 'euiCodeBlock.fullscreenExpand'],
      defaults: ['Collapse', 'Expand']
    }, function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          fullscreenCollapse = _ref3[0],
          fullscreenExpand = _ref3[1];

      return /*#__PURE__*/_react.default.createElement(_button.EuiButtonIcon, {
        className: "euiCodeBlock__fullScreenButton",
        onClick: toggleFullScreen,
        iconType: isFullScreen ? 'cross' : 'fullScreen',
        color: "text",
        "aria-label": isFullScreen ? fullscreenCollapse : fullscreenExpand
      });
    });
  }

  var getCodeBlockControls = function getCodeBlockControls(textToCopy) {
    var codeBlockControls;
    var copyButton = getCopyButton(textToCopy);

    if (copyButton || fullScreenButton) {
      codeBlockControls = /*#__PURE__*/_react.default.createElement("div", {
        className: "euiCodeBlock__controls"
      }, fullScreenButton, copyButton);
    }

    return codeBlockControls;
  };

  var getFullScreenDisplay = function getFullScreenDisplay(codeBlockControls) {
    var fullScreenDisplay;

    if (isFullScreen) {
      // Force fullscreen to use large font and padding.
      var fullScreenClasses = (0, _classnames.default)('euiCodeBlock', fontSizeToClassNameMap[fontSize], 'euiCodeBlock-paddingLarge', 'euiCodeBlock-isFullScreen', className);
      fullScreenDisplay = /*#__PURE__*/_react.default.createElement(_overlay_mask.EuiOverlayMask, null, /*#__PURE__*/_react.default.createElement(_focus_trap.EuiFocusTrap, {
        clickOutsideDisables: true
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: fullScreenClasses
      }, /*#__PURE__*/_react.default.createElement("pre", {
        className: preClasses,
        tabIndex: 0
      }, /*#__PURE__*/_react.default.createElement("code", {
        ref: setCodeFullScreen,
        className: codeClasses,
        onKeyDown: onKeyDown
      })), codeBlockControls)));
    }

    return fullScreenDisplay;
  };

  var codeBlockControls = getCodeBlockControls(innerText);
  return isPortalTargetReady ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/(0, _reactDom.createPortal)(children, codeTarget.current), /*#__PURE__*/_react.default.createElement("div", wrapperProps, /*#__PURE__*/_react.default.createElement("pre", {
    ref: combinedRef,
    style: optionalStyles,
    className: preClasses,
    tabIndex: tabIndex
  }, codeSnippet), codeBlockControls, getFullScreenDisplay(codeBlockControls))) : null;
};

exports.EuiCodeBlockImpl = EuiCodeBlockImpl;
EuiCodeBlockImpl.propTypes = {
  className: _propTypes.default.string,
  fontSize: _propTypes.default.oneOf(["s", "m", "l"]),

  /**
     * Displays the passed code in an inline format. Also removes any margins set.
     */
  inline: _propTypes.default.bool,

  /**
     * Displays an icon button to copy the code snippet to the clipboard.
     */
  isCopyable: _propTypes.default.bool,

  /**
     * Sets the syntax highlighting for a specific language
     * @see http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html#language-names-and-aliases
     * for options
     */
  language: _propTypes.default.string,
  overflowHeight: _propTypes.default.number,
  paddingSize: _propTypes.default.oneOf(["none", "s", "m", "l"]),
  transparentBackground: _propTypes.default.bool,

  /**
     * Specify how `white-space` inside the element is handled.
     * `pre` respects line breaks/white space but doesn't force them to wrap the line
     * `pre-wrap` respects line breaks/white space but does force them to wrap the line when necessary.
     */
  whiteSpace: _propTypes.default.oneOf(["pre", "pre-wrap"])
};