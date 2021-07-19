"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HistogramFormat = void 0;

var _i18n = require("@kbn/i18n");

var _field_format = require("../field_format");

var _types = require("../../kbn_field_types/types");

var _types2 = require("../types");

var _bytes = require("./bytes");

var _number = require("./number");

var _percent = require("./percent");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HistogramFormat extends _field_format.FieldFormat {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "id", HistogramFormat.id);

    _defineProperty(this, "title", HistogramFormat.title);

    _defineProperty(this, "allowsNumericalAggregations", true);

    _defineProperty(this, "textConvert", val => {
      if (typeof val === 'number') {
        const subFormatId = this.param('id');
        const SubFormat = subFormatId === 'bytes' ? _bytes.BytesFormat : subFormatId === 'percent' ? _percent.PercentFormat : _number.NumberFormat;
        const converter = new SubFormat(this.param('params'), this.getConfig);
        return converter.textConvert(val);
      } else {
        return JSON.stringify(val);
      }
    });
  }

  // Nested internal formatter
  getParamDefaults() {
    return {
      id: 'number',
      params: {}
    };
  }

}

exports.HistogramFormat = HistogramFormat;

_defineProperty(HistogramFormat, "id", _types2.FIELD_FORMAT_IDS.HISTOGRAM);

_defineProperty(HistogramFormat, "fieldType", _types.KBN_FIELD_TYPES.HISTOGRAM);

_defineProperty(HistogramFormat, "title", _i18n.i18n.translate('data.fieldFormats.histogram.title', {
  defaultMessage: 'Histogram'
}));