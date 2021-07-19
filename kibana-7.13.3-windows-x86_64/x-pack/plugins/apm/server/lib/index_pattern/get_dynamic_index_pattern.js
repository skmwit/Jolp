"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDynamicIndexPattern = void 0;

var _server = require("../../../../../../src/plugins/data/server");

var _with_apm_span = require("../../utils/with_apm_span");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// TODO: this is currently cached globally. In the future we might want to cache this per user


const getDynamicIndexPattern = ({
  config,
  context,
  logger
}) => {
  return (0, _with_apm_span.withApmSpan)('get_dynamic_index_pattern', async () => {
    const indexPatternTitle = config['apm_oss.indexPattern'];
    const indexPatternsFetcher = new _server.IndexPatternsFetcher(context.core.elasticsearch.client.asCurrentUser); // Since `getDynamicIndexPattern` is called in setup_request (and thus by every endpoint)
    // and since `getFieldsForWildcard` will throw if the specified indices don't exist,
    // we have to catch errors here to avoid all endpoints returning 500 for users without APM data
    // (would be a bad first time experience)

    try {
      const fields = await indexPatternsFetcher.getFieldsForWildcard({
        pattern: indexPatternTitle
      });
      const indexPattern = {
        fields,
        timeFieldName: '@timestamp',
        title: indexPatternTitle
      };
      return indexPattern;
    } catch (e) {
      var _e$output;

      const notExists = ((_e$output = e.output) === null || _e$output === void 0 ? void 0 : _e$output.statusCode) === 404;

      if (notExists) {
        logger.error(`Could not get dynamic index pattern because indices "${indexPatternTitle}" don't exist`);
        return;
      } // re-throw


      throw e;
    }
  });
};

exports.getDynamicIndexPattern = getDynamicIndexPattern;