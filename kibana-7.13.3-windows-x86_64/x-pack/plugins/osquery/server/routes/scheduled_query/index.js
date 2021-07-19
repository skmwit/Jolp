"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initScheduledQueryRoutes = void 0;

var _find_scheduled_query_route = require("./find_scheduled_query_route");

var _read_scheduled_query_route = require("./read_scheduled_query_route");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// import { createScheduledQueryRoute } from './create_scheduled_query_route';
// import { deleteScheduledQueryRoute } from './delete_scheduled_query_route';
// import { updateScheduledQueryRoute } from './update_scheduled_query_route';


const initScheduledQueryRoutes = (router, context) => {
  // createScheduledQueryRoute(router);
  // deleteScheduledQueryRoute(router);
  (0, _find_scheduled_query_route.findScheduledQueryRoute)(router, context);
  (0, _read_scheduled_query_route.readScheduledQueryRoute)(router, context); // updateScheduledQueryRoute(router);
};

exports.initScheduledQueryRoutes = initScheduledQueryRoutes;