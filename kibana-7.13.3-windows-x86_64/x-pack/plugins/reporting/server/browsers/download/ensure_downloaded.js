"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureBrowserDownloaded = ensureBrowserDownloaded;

var _fs = require("fs");

var _ = require("../");

var _checksum = require("./checksum");

var _clean = require("./clean");

var _download = require("./download");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Check for the downloaded archive of each requested browser type and
 * download them if they are missing or their checksum is invalid
 * @return {Promise<undefined>}
 */


async function ensureBrowserDownloaded(logger) {
  await ensureDownloaded([_.chromium], logger);
}
/**
 * Clears the unexpected files in the browsers archivesPath
 * and ensures that all packages/archives are downloaded and
 * that their checksums match the declared value
 * @param  {BrowserSpec} browsers
 * @return {Promise<undefined>}
 */


async function ensureDownloaded(browsers, logger) {
  await Promise.all(browsers.map(async ({
    paths: pSet
  }) => {
    await (0, _clean.clean)(pSet.archivesPath, pSet.getAllArchiveFilenames(), logger);
    const invalidChecksums = [];
    await Promise.all(pSet.packages.map(async p => {
      const {
        archiveFilename,
        archiveChecksum
      } = p;

      if (archiveFilename && archiveChecksum) {
        const path = pSet.resolvePath(p);

        if ((0, _fs.existsSync)(path) && (await (0, _checksum.md5)(path)) === archiveChecksum) {
          logger.debug(`Browser archive exists in ${path}`);
          return;
        }

        const url = pSet.getDownloadUrl(p);

        try {
          const downloadedChecksum = await (0, _download.download)(url, path, logger);

          if (downloadedChecksum !== archiveChecksum) {
            invalidChecksums.push(`${url} => ${path}`);
          }
        } catch (err) {
          const message = new Error(`Failed to download ${url}`);
          logger.error(err);
          throw message;
        }
      }
    }));

    if (invalidChecksums.length) {
      const err = new Error(`Error downloading browsers, checksums incorrect for:\n    - ${invalidChecksums.join('\n    - ')}`);
      logger.error(err);
      throw err;
    }
  }));
}