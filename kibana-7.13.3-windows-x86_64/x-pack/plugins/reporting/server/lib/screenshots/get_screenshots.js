"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenshots = void 0;

var _i18n = require("@kbn/i18n");

var _ = require("../");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getScreenshots = async (browser, layout, elementsPositionAndAttributes, logger) => {
  logger.info(_i18n.i18n.translate('xpack.reporting.screencapture.takingScreenshots', {
    defaultMessage: `taking screenshots`
  }));
  const screenshots = [];

  for (let i = 0; i < elementsPositionAndAttributes.length; i++) {
    const endTrace = (0, _.startTrace)('get_screenshots', 'read');
    const item = elementsPositionAndAttributes[i];
    const base64EncodedData = await browser.screenshot(item.position);

    if (!base64EncodedData) {
      throw new Error(`Failure in getScreenshots! Base64 data is void`);
    }

    screenshots.push({
      base64EncodedData,
      title: item.attributes.title,
      description: item.attributes.description
    });
    endTrace();
  }

  logger.info(_i18n.i18n.translate('xpack.reporting.screencapture.screenshotsTaken', {
    defaultMessage: `screenshots taken: {numScreenhots}`,
    values: {
      numScreenhots: screenshots.length
    }
  }));
  return screenshots;
};

exports.getScreenshots = getScreenshots;