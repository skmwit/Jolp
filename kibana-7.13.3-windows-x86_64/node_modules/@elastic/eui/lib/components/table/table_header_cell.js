"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableHeaderCell = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _accessibility = require("../accessibility");

var _icon = require("../icon");

var _utils = require("./utils");

var _inner_text = require("../inner_text");

var _services = require("../../services");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiTableHeaderCell = function EuiTableHeaderCell(_ref) {
  var children = _ref.children,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? _services.LEFT_ALIGNMENT : _ref$align,
      onSort = _ref.onSort,
      isSorted = _ref.isSorted,
      isSortAscending = _ref.isSortAscending,
      allowNeutralSort = _ref.allowNeutralSort,
      className = _ref.className,
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? 'col' : _ref$scope,
      _ref$mobileOptions = _ref.mobileOptions,
      mobileOptions = _ref$mobileOptions === void 0 ? {
    show: true
  } : _ref$mobileOptions,
      width = _ref.width,
      style = _ref.style,
      readOnly = _ref.readOnly,
      isMobileHeader = _ref.isMobileHeader,
      hideForMobile = _ref.hideForMobile,
      rest = _objectWithoutProperties(_ref, ["children", "align", "onSort", "isSorted", "isSortAscending", "allowNeutralSort", "className", "scope", "mobileOptions", "width", "style", "readOnly", "isMobileHeader", "hideForMobile"]);

  var classes = (0, _classnames.default)('euiTableHeaderCell', className, {
    'euiTableHeaderCell--hideForDesktop': mobileOptions.only || isMobileHeader,
    'euiTableHeaderCell--hideForMobile': !mobileOptions.show || hideForMobile
  });
  var contentClasses = (0, _classnames.default)('euiTableCellContent', className, {
    'euiTableCellContent--alignRight': align === _services.RIGHT_ALIGNMENT,
    'euiTableCellContent--alignCenter': align === _services.CENTER_ALIGNMENT
  });
  var styleObj = (0, _utils.resolveWidthAsStyle)(style, width);
  var CellComponent = children ? 'th' : 'td';

  if (onSort || isSorted) {
    var getScreenCasterDirection = function getScreenCasterDirection() {
      if (ariaSortValue === 'ascending') {
        return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
          token: "euiTableHeaderCell.clickForDescending",
          default: "Click to sort in descending order"
        });
      }

      if (allowNeutralSort && ariaSortValue === 'descending') {
        return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
          token: "euiTableHeaderCell.clickForUnsort",
          default: "Click to unsort"
        });
      }

      return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiTableHeaderCell.clickForAscending",
        default: "Click to sort in ascending order"
      });
    };

    var buttonClasses = (0, _classnames.default)('euiTableHeaderButton', {
      'euiTableHeaderButton-isSorted': isSorted
    });
    var ariaSortValue = 'none';

    if (isSorted) {
      ariaSortValue = isSortAscending ? 'ascending' : 'descending';
    }

    var cellContents = /*#__PURE__*/_react.default.createElement("span", {
      className: contentClasses
    }, /*#__PURE__*/_react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
      return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiTableHeaderCell.titleTextWithSort",
        default: "{innerText}; Sorted in {ariaSortValue} order",
        values: {
          innerText: innerText,
          ariaSortValue: ariaSortValue
        }
      }, function (titleTextWithSort) {
        return /*#__PURE__*/_react.default.createElement("span", {
          title: isSorted ? titleTextWithSort : innerText,
          ref: ref,
          className: "euiTableCellContent__text"
        }, children);
      });
    }), isSorted && /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
      className: "euiTableSortIcon",
      type: isSortAscending ? 'sortUp' : 'sortDown',
      size: "m"
    }));

    return /*#__PURE__*/_react.default.createElement(CellComponent, _extends({
      className: classes,
      scope: scope,
      role: "columnheader",
      "aria-sort": ariaSortValue,
      "aria-live": "polite",
      style: styleObj
    }, rest), onSort && !readOnly ? /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: buttonClasses,
      onClick: onSort,
      "data-test-subj": "tableHeaderSortButton"
    }, cellContents, /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("span", null, getScreenCasterDirection()))) : cellContents);
  }

  return /*#__PURE__*/_react.default.createElement(CellComponent, _extends({
    className: classes,
    scope: scope,
    role: "columnheader",
    style: styleObj
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: contentClasses
  }, /*#__PURE__*/_react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
    return /*#__PURE__*/_react.default.createElement("span", {
      title: innerText,
      ref: ref,
      className: "euiTableCellContent__text"
    }, children);
  })));
};

exports.EuiTableHeaderCell = EuiTableHeaderCell;
EuiTableHeaderCell.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  align: _propTypes.default.oneOf(["left", "right", "center"]),

  /**
       * Set `allowNeutralSort` on EuiInMemoryTable to false to force column
       * sorting.  EuiBasicTable always forces column sorting.
       */
  allowNeutralSort: _propTypes.default.bool,

  /**
       * _DEPRECATED: use `mobileOptions.show = false`_ Indicates if the
       * column should not show for mobile users (typically hidden because a
       * custom mobile header utilizes the column's contents)
       */
  hideForMobile: _propTypes.default.bool,

  /**
       * _DEPRECATED: use `mobileOptions.only = true`_ Indicates if the
       * column was created to be the row's heading in mobile view (this
       * column will be hidden at larger screens)
       */
  isMobileHeader: _propTypes.default.bool,
  isSortAscending: _propTypes.default.bool,
  isSorted: _propTypes.default.bool,

  /**
       * Mobile options for displaying differently at small screens
       */
  mobileOptions: _propTypes.default.shape({
    /**
           * If false, will not render the column at all for mobile
           */
    show: _propTypes.default.bool,

    /**
           * Only show for mobile? If true, will not render the column at all
           * for desktop
           */
    only: _propTypes.default.bool
  }),
  onSort: _propTypes.default.func,
  scope: _propTypes.default.oneOf(["col", "row", "colgroup", "rowgroup"]),
  width: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired]),

  /**
       * Shows the sort indicator but removes the button
       */
  readOnly: _propTypes.default.bool
};