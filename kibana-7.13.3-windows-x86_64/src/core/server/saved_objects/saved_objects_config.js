"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SavedObjectConfig = exports.savedObjectsConfig = exports.savedObjectsMigrationConfig = void 0;

var _configSchema = require("@kbn/config-schema");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const migrationSchema = _configSchema.schema.object({
  batchSize: _configSchema.schema.number({
    defaultValue: 1_000
  }),
  scrollDuration: _configSchema.schema.string({
    defaultValue: '15m'
  }),
  pollInterval: _configSchema.schema.number({
    defaultValue: 1_500
  }),
  skip: _configSchema.schema.boolean({
    defaultValue: false
  }),
  enableV2: _configSchema.schema.boolean({
    defaultValue: true
  }),
  retryAttempts: _configSchema.schema.number({
    defaultValue: 15
  })
});

const migrationDeprecations = () => [(settings, fromPath, addDeprecation) => {
  const migrationsConfig = settings[fromPath];

  if ((migrationsConfig === null || migrationsConfig === void 0 ? void 0 : migrationsConfig.enableV2) !== undefined) {
    addDeprecation({
      message: '"migrations.enableV2" is deprecated and will be removed in an upcoming release without any further notice.',
      documentationUrl: 'https://ela.st/kbn-so-migration-v2'
    });
  }

  return settings;
}];

const savedObjectsMigrationConfig = {
  path: 'migrations',
  schema: migrationSchema,
  deprecations: migrationDeprecations
};
exports.savedObjectsMigrationConfig = savedObjectsMigrationConfig;

const soSchema = _configSchema.schema.object({
  maxImportPayloadBytes: _configSchema.schema.byteSize({
    defaultValue: 26_214_400
  }),
  maxImportExportSize: _configSchema.schema.number({
    defaultValue: 10_000
  })
});

const savedObjectsConfig = {
  path: 'savedObjects',
  schema: soSchema
};
exports.savedObjectsConfig = savedObjectsConfig;

class SavedObjectConfig {
  constructor(rawConfig, rawMigrationConfig) {
    _defineProperty(this, "maxImportPayloadBytes", void 0);

    _defineProperty(this, "maxImportExportSize", void 0);

    _defineProperty(this, "migration", void 0);

    this.maxImportPayloadBytes = rawConfig.maxImportPayloadBytes.getValueInBytes();
    this.maxImportExportSize = rawConfig.maxImportExportSize;
    this.migration = rawMigrationConfig;
  }

}

exports.SavedObjectConfig = SavedObjectConfig;