"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorFormat = void 0;

var _i18n = require("@kbn/i18n");

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _lodash = require("lodash");

var _types = require("../../kbn_field_types/types");

var _field_format = require("../field_format");

var _types2 = require("../types");

var _utils = require("../utils");

var _color_default = require("../constants/color_default");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ColorFormat extends _field_format.FieldFormat {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "htmlConvert", val => {
      const color = this.findColorRuleForVal(val);
      const displayVal = (0, _lodash.escape)((0, _utils.asPrettyString)(val));
      if (!color) return displayVal;
      return _server.default.renderToStaticMarkup( /*#__PURE__*/_react.default.createElement("span", {
        style: {
          color: color.text,
          backgroundColor: color.background
        },
        dangerouslySetInnerHTML: {
          __html: displayVal
        } // eslint-disable-line react/no-danger

      }));
    });
  }

  getParamDefaults() {
    return {
      fieldType: null,
      // populated by editor, see controller below
      colors: [(0, _lodash.cloneDeep)(_color_default.DEFAULT_CONVERTER_COLOR)]
    };
  }

  findColorRuleForVal(val) {
    switch (this.param('fieldType')) {
      case 'string':
        return (0, _lodash.findLast)(this.param('colors'), colorParam => {
          return new RegExp(colorParam.regex).test(val);
        });

      case 'number':
        return (0, _lodash.findLast)(this.param('colors'), ({
          range
        }) => {
          if (!range) return;
          const [start, end] = range.split(':');
          return val >= Number(start) && val <= Number(end);
        });

      default:
        return null;
    }
  }

}

exports.ColorFormat = ColorFormat;

_defineProperty(ColorFormat, "id", _types2.FIELD_FORMAT_IDS.COLOR);

_defineProperty(ColorFormat, "title", _i18n.i18n.translate('data.fieldFormats.color.title', {
  defaultMessage: 'Color'
}));

_defineProperty(ColorFormat, "fieldType", [_types.KBN_FIELD_TYPES.NUMBER, _types.KBN_FIELD_TYPES.STRING]);