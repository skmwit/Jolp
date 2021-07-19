"use strict";

var _fs = require("fs");

var _path = _interopRequireDefault(require("path"));

var _devUtils = require("@kbn/dev-utils");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


(0, _devUtils.run)(async ({
  flags
}) => {
  const schemaPath = _path.default.resolve('./public/editor/osquery_schema/');

  const schemaFile = _path.default.join(schemaPath, flags.schema_version);

  const schemaData = await require(schemaFile); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  function pullFields(destSchema, source) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dest = {};
    Object.keys(destSchema).forEach(key => {
      switch (typeof source[key]) {
        case 'object':
          dest[key] = pullFields(destSchema[key], source[key]);
          break;

        default:
          dest[key] = source[key];
      }
    });
    return dest;
  }

  const mapFunc = pullFields.bind(null, {
    name: true
  });
  const formattedSchema = schemaData.map(mapFunc);
  await _fs.promises.writeFile(_path.default.join(schemaPath, `${flags.schema_version}-formatted`), JSON.stringify(formattedSchema));
}, {
  description: `
      Script for formatting generated osquery API schema JSON file.
    `,
  flags: {
    string: ['schema_version'],
    help: `
        --schema_version The semver string for the schema file located in public/editor/osquery_schema
      `
  }
});