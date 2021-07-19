"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourceFormat = void 0;

var _react = _interopRequireWildcard(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _lodash = require("lodash");

var _utils = require("../../utils");

var _types = require("../../kbn_field_types/types");

var _field_format = require("../field_format");

var _types2 = require("../types");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const TemplateComponent = ({
  defPairs
}) => {
  return /*#__PURE__*/_react.default.createElement("dl", {
    className: 'source truncate-by-height'
  }, defPairs.map((pair, idx) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: idx
  }, /*#__PURE__*/_react.default.createElement("dt", {
    dangerouslySetInnerHTML: {
      __html: `${(0, _lodash.escape)(pair[0])}:`
    } // eslint-disable-line react/no-danger

  }), /*#__PURE__*/_react.default.createElement("dd", {
    dangerouslySetInnerHTML: {
      __html: `${pair[1]}`
    } // eslint-disable-line react/no-danger

  }), ' ')));
};

class SourceFormat extends _field_format.FieldFormat {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "textConvert", value => JSON.stringify(value));

    _defineProperty(this, "htmlConvert", (value, options = {}) => {
      const {
        field,
        hit,
        indexPattern
      } = options;

      if (!field) {
        const converter = this.getConverterFor('text');
        return (0, _lodash.escape)(converter(value));
      }

      const highlights = hit && hit.highlight || {};
      const formatted = indexPattern.formatHit(hit);
      const highlightPairs = [];
      const sourcePairs = [];
      const isShortDots = this.getConfig(_constants.UI_SETTINGS.SHORT_DOTS_ENABLE);
      (0, _lodash.keys)(formatted).forEach(key => {
        const pairs = highlights[key] ? highlightPairs : sourcePairs;
        const newField = isShortDots ? (0, _utils.shortenDottedString)(key) : key;
        const val = formatted[key];
        pairs.push([newField, val]);
      }, []);
      return _server.default.renderToStaticMarkup( /*#__PURE__*/_react.default.createElement(TemplateComponent, {
        defPairs: highlightPairs.concat(sourcePairs)
      }));
    });
  }

}

exports.SourceFormat = SourceFormat;

_defineProperty(SourceFormat, "id", _types2.FIELD_FORMAT_IDS._SOURCE);

_defineProperty(SourceFormat, "title", '_source');

_defineProperty(SourceFormat, "fieldType", _types.KBN_FIELD_TYPES._SOURCE);