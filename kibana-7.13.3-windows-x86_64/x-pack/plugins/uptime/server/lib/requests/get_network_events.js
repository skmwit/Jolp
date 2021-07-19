"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNetworkEvents = exports.secondsToMillis = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const secondsToMillis = seconds => // -1 is a special case where a value was unavailable
seconds === -1 ? -1 : seconds * 1000;

exports.secondsToMillis = secondsToMillis;

const getNetworkEvents = async ({
  uptimeEsClient,
  checkGroup,
  stepIndex
}) => {
  const params = {
    track_total_hits: true,
    query: {
      bool: {
        filter: [{
          term: {
            'synthetics.type': 'journey/network_info'
          }
        }, {
          term: {
            'monitor.check_group': checkGroup
          }
        }, {
          term: {
            'synthetics.step.index': Number(stepIndex)
          }
        }]
      }
    },
    // NOTE: This limit may need tweaking in the future. Users can technically perform multiple
    // navigations within one step, and may push up against this limit, however this manner
    // of usage isn't advised.
    size: 1000
  };
  const {
    body: result
  } = await uptimeEsClient.search({
    body: params
  });
  let isWaterfallSupported = false;
  const events = result.hits.hits.map(event => {
    var _event$_source$tls, _event$_source$tls$se, _event$_source$http, _event$_source$http$r, _event$_source$url, _event$_source$http2, _event$_source$http2$, _event$_source$http3, _event$_source$http3$, _securityDetails$issu, _event$_source$http4, _event$_source$http4$, _event$_source$http5, _event$_source$http5$, _event$_source$http6, _event$_source$http6$;

    if (event._source.http && event._source.url) {
      isWaterfallSupported = true;
    }

    const requestSentTime = secondsToMillis(event._source.synthetics.payload.request_sent_time);
    const loadEndTime = secondsToMillis(event._source.synthetics.payload.load_end_time);
    const securityDetails = (_event$_source$tls = event._source.tls) === null || _event$_source$tls === void 0 ? void 0 : (_event$_source$tls$se = _event$_source$tls.server) === null || _event$_source$tls$se === void 0 ? void 0 : _event$_source$tls$se.x509;
    return {
      timestamp: event._source['@timestamp'],
      method: (_event$_source$http = event._source.http) === null || _event$_source$http === void 0 ? void 0 : (_event$_source$http$r = _event$_source$http.request) === null || _event$_source$http$r === void 0 ? void 0 : _event$_source$http$r.method,
      url: (_event$_source$url = event._source.url) === null || _event$_source$url === void 0 ? void 0 : _event$_source$url.full,
      status: (_event$_source$http2 = event._source.http) === null || _event$_source$http2 === void 0 ? void 0 : (_event$_source$http2$ = _event$_source$http2.response) === null || _event$_source$http2$ === void 0 ? void 0 : _event$_source$http2$.status,
      mimeType: (_event$_source$http3 = event._source.http) === null || _event$_source$http3 === void 0 ? void 0 : (_event$_source$http3$ = _event$_source$http3.response) === null || _event$_source$http3$ === void 0 ? void 0 : _event$_source$http3$.mime_type,
      requestSentTime,
      loadEndTime,
      timings: event._source.synthetics.payload.timings,
      transferSize: event._source.synthetics.payload.transfer_size,
      resourceSize: event._source.synthetics.payload.resource_size,
      certificates: securityDetails ? {
        issuer: (_securityDetails$issu = securityDetails.issuer) === null || _securityDetails$issu === void 0 ? void 0 : _securityDetails$issu.common_name,
        subjectName: securityDetails.subject.common_name,
        validFrom: securityDetails.not_before,
        validTo: securityDetails.not_after
      } : undefined,
      requestHeaders: (_event$_source$http4 = event._source.http) === null || _event$_source$http4 === void 0 ? void 0 : (_event$_source$http4$ = _event$_source$http4.request) === null || _event$_source$http4$ === void 0 ? void 0 : _event$_source$http4$.headers,
      responseHeaders: (_event$_source$http5 = event._source.http) === null || _event$_source$http5 === void 0 ? void 0 : (_event$_source$http5$ = _event$_source$http5.response) === null || _event$_source$http5$ === void 0 ? void 0 : _event$_source$http5$.headers,
      ip: (_event$_source$http6 = event._source.http) === null || _event$_source$http6 === void 0 ? void 0 : (_event$_source$http6$ = _event$_source$http6.response) === null || _event$_source$http6$ === void 0 ? void 0 : _event$_source$http6$.remote_i_p_address
    };
  });
  return {
    total: result.hits.total.value,
    events,
    isWaterfallSupported
  };
};

exports.getNetworkEvents = getNetworkEvents;