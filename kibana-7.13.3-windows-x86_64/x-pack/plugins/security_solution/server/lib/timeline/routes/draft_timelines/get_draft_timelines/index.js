"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDraftTimelinesRoute = void 0;

var _utils = require("../../../../detection_engine/routes/utils");

var _constants = require("../../../../../../common/constants");

var _common = require("../../../utils/common");

var _route_validation = require("../../../../../utils/build_validation/route_validation");

var _timelines = require("../../../saved_object/timelines");

var _default_timeline = require("../../../utils/default_timeline");

var _draft_timelines = require("../../../schemas/draft_timelines");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getDraftTimelinesRoute = (router, config, security) => {
  router.get({
    path: _constants.TIMELINE_DRAFT_URL,
    validate: {
      query: (0, _route_validation.buildRouteValidationWithExcess)(_draft_timelines.getDraftTimelineSchema)
    },
    options: {
      tags: ['access:securitySolution']
    }
  }, async (context, request, response) => {
    const frameworkRequest = await (0, _common.buildFrameworkRequest)(context, security, request);
    const siemResponse = (0, _utils.buildSiemResponse)(response);

    try {
      const {
        timeline: [draftTimeline]
      } = await (0, _timelines.getDraftTimeline)(frameworkRequest, request.query.timelineType);

      if (draftTimeline !== null && draftTimeline !== void 0 && draftTimeline.savedObjectId) {
        return response.ok({
          body: {
            data: {
              persistTimeline: {
                timeline: draftTimeline
              }
            }
          }
        });
      }

      const newTimelineResponse = await (0, _timelines.persistTimeline)(frameworkRequest, null, null, { ..._default_timeline.draftTimelineDefaults,
        timelineType: request.query.timelineType
      });

      if (newTimelineResponse.code === 200) {
        return response.ok({
          body: {
            data: {
              persistTimeline: {
                timeline: newTimelineResponse.timeline
              }
            }
          }
        });
      }

      return response.ok({});
    } catch (err) {
      const error = (0, _utils.transformError)(err);
      return siemResponse.error({
        body: error.message,
        statusCode: error.statusCode
      });
    }
  });
};

exports.getDraftTimelinesRoute = getDraftTimelinesRoute;