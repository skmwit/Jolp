"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUploadPlugin = void 0;

var _i18n = require("@kbn/i18n");

var _configSchema = require("@kbn/config-schema");

var _routes = require("./routes");

var _telemetry = require("./telemetry");

var _common = require("../common");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class FileUploadPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "_logger", void 0);

    this._logger = initializerContext.logger.get();
  }

  async setup(coreSetup, plugins) {
    (0, _routes.fileUploadRoutes)(coreSetup, this._logger);
    coreSetup.uiSettings.register({
      [_common.UI_SETTING_MAX_FILE_SIZE]: {
        name: _i18n.i18n.translate('xpack.fileUpload.maxFileSizeUiSetting.name', {
          defaultMessage: 'Maximum file upload size'
        }),
        value: _common.MAX_FILE_SIZE,
        description: _i18n.i18n.translate('xpack.fileUpload.maxFileSizeUiSetting.description', {
          defaultMessage: 'Sets the file size limit when importing files. The highest supported value for this setting is 1GB.'
        }),
        schema: _configSchema.schema.string(),
        validation: {
          regexString: '\\d+[mMgG][bB]',
          message: _i18n.i18n.translate('xpack.fileUpload.maxFileSizeUiSetting.error', {
            defaultMessage: 'Should be a valid data size. e.g. 200MB, 1GB'
          })
        }
      }
    });
    (0, _telemetry.initFileUploadTelemetry)(coreSetup, plugins.usageCollection);
  }

  start(core) {}

}

exports.FileUploadPlugin = FileUploadPlugin;