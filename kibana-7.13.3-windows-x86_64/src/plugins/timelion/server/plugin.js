"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimelionPlugin = void 0;

var _i18n = require("@kbn/i18n");

var _configSchema = require("@kbn/config-schema");

var _saved_objects = require("./saved_objects");

var _deprecations = require("./deprecations");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TimelionPlugin {
  constructor(context) {
    _defineProperty(this, "logger", void 0);

    this.logger = context.logger.get();
  }

  setup(core) {
    core.capabilities.registerProvider(() => ({
      timelion: {
        save: true,
        show: true
      }
    }));
    core.savedObjects.registerType(_saved_objects.timelionSheetSavedObjectType);
    core.uiSettings.register({
      'timelion:showTutorial': {
        name: _i18n.i18n.translate('timelion.uiSettings.showTutorialLabel', {
          defaultMessage: 'Show tutorial'
        }),
        value: false,
        description: _i18n.i18n.translate('timelion.uiSettings.showTutorialDescription', {
          defaultMessage: 'Should I show the tutorial by default when entering the timelion app?'
        }),
        category: ['timelion'],
        schema: _configSchema.schema.boolean()
      },
      'timelion:default_columns': {
        name: _i18n.i18n.translate('timelion.uiSettings.defaultColumnsLabel', {
          defaultMessage: 'Default columns'
        }),
        value: 2,
        description: _i18n.i18n.translate('timelion.uiSettings.defaultColumnsDescription', {
          defaultMessage: 'Number of columns on a timelion sheet by default'
        }),
        category: ['timelion'],
        schema: _configSchema.schema.number()
      },
      'timelion:default_rows': {
        name: _i18n.i18n.translate('timelion.uiSettings.defaultRowsLabel', {
          defaultMessage: 'Default rows'
        }),
        value: 2,
        description: _i18n.i18n.translate('timelion.uiSettings.defaultRowsDescription', {
          defaultMessage: 'Number of rows on a timelion sheet by default'
        }),
        category: ['timelion'],
        schema: _configSchema.schema.number()
      }
    });
    core.deprecations.registerDeprecations({
      getDeprecations: _deprecations.getDeprecations
    });
  }

  start(core) {
    (0, _deprecations.showWarningMessageIfTimelionSheetWasFound)(core, this.logger);
  }

  stop() {}

}

exports.TimelionPlugin = TimelionPlugin;