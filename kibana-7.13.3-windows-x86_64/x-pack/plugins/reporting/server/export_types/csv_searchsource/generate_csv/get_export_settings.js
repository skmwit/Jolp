"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExportSettings = void 0;

var _i18n = require("@kbn/i18n");

var _constants = require("../../../../common/constants");

var _escape_value = require("./escape_value");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getExportSettings = async (client, config, timezone, logger) => {
  // Timezone
  let setTimezone; // timezone in job params?

  if (timezone) {
    setTimezone = timezone;
  } else {
    // timezone in settings?
    setTimezone = await client.get(_constants.UI_SETTINGS_DATEFORMAT_TZ);

    if (setTimezone === 'Browser') {
      // if `Browser`, hardcode it to 'UTC' so the export has data that makes sense
      logger.warn(_i18n.i18n.translate('xpack.reporting.exportTypes.csv.executeJob.dateFormateSetting', {
        defaultMessage: 'Kibana Advanced Setting "{dateFormatTimezone}" is set to "Browser". Dates will be formatted as UTC to avoid ambiguity.',
        values: {
          dateFormatTimezone: 'dateFormat:tz'
        }
      }));
      setTimezone = 'UTC';
    }
  } // Separator, QuoteValues


  const [separator, quoteValues] = await Promise.all([client.get(_constants.UI_SETTINGS_CSV_SEPARATOR), client.get(_constants.UI_SETTINGS_CSV_QUOTE_VALUES)]);
  const escapeFormulaValues = config.get('csv', 'escapeFormulaValues');
  const escapeValue = (0, _escape_value.createEscapeValue)(quoteValues, escapeFormulaValues);
  const bom = config.get('csv', 'useByteOrderMarkEncoding') ? _constants.CSV_BOM_CHARS : '';
  return {
    timezone: setTimezone,
    scroll: {
      size: config.get('csv', 'scroll', 'size'),
      duration: config.get('csv', 'scroll', 'duration')
    },
    bom,
    separator,
    maxSizeBytes: config.get('csv', 'maxSizeBytes'),
    checkForFormulas: config.get('csv', 'checkForFormulas'),
    escapeFormulaValues,
    escapeValue
  };
};

exports.getExportSettings = getExportSettings;