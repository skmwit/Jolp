"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistPinnedEventRoute = void 0;

var _constants = require("../../../../../common/constants");

var _route_validation = require("../../../../utils/build_validation/route_validation");

var _utils = require("../../../detection_engine/routes/utils");

var _common = require("../../utils/common");

var _pinned_events = require("../../schemas/pinned_events");

var _pinned_events2 = require("../../saved_object/pinned_events");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const persistPinnedEventRoute = (router, config, security) => {
  router.patch({
    path: _constants.PINNED_EVENT_URL,
    validate: {
      body: (0, _route_validation.buildRouteValidationWithExcess)(_pinned_events.persistPinnedEventSchema)
    },
    options: {
      tags: ['access:securitySolution']
    }
  }, async (context, request, response) => {
    const siemResponse = (0, _utils.buildSiemResponse)(response);

    try {
      var _request$body$pinnedE, _request$body, _request$body$timelin, _request$body2;

      const frameworkRequest = await (0, _common.buildFrameworkRequest)(context, security, request);
      const {
        eventId
      } = request.body;
      const pinnedEventId = (_request$body$pinnedE = (_request$body = request.body) === null || _request$body === void 0 ? void 0 : _request$body.pinnedEventId) !== null && _request$body$pinnedE !== void 0 ? _request$body$pinnedE : null;
      const timelineId = (_request$body$timelin = (_request$body2 = request.body) === null || _request$body2 === void 0 ? void 0 : _request$body2.timelineId) !== null && _request$body$timelin !== void 0 ? _request$body$timelin : null;
      const res = await (0, _pinned_events2.persistPinnedEventOnTimeline)(frameworkRequest, pinnedEventId, eventId, timelineId);
      return response.ok({
        body: {
          data: {
            persistPinnedEventOnTimeline: res
          }
        }
      });
    } catch (err) {
      const error = (0, _utils.transformError)(err);
      return siemResponse.error({
        body: error.message,
        statusCode: error.statusCode
      });
    }
  });
};

exports.persistPinnedEventRoute = persistPinnedEventRoute;