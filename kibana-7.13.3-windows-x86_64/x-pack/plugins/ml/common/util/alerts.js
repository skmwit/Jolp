"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveLookbackInterval = resolveLookbackInterval;
exports.getLookbackInterval = getLookbackInterval;
exports.getTopNBuckets = getTopNBuckets;

var _job_utils = require("./job_utils");

var _guards = require("../types/guards");

var _parse_interval = require("./parse_interval");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const narrowBucketLength = 60;
/**
 * Resolves the lookback interval for the rule
 * using the formula max(2m, 2 * bucket_span) + query_delay + 1s.
 * and rounds up to a whole number of minutes.
 */

function resolveLookbackInterval(jobs, datafeeds) {
  var _resolveMaxTimeInterv, _resolveMaxTimeInterv2;

  const bucketSpanInSeconds = Math.ceil((_resolveMaxTimeInterv = (0, _job_utils.resolveMaxTimeInterval)(jobs.map(v => v.analysis_config.bucket_span))) !== null && _resolveMaxTimeInterv !== void 0 ? _resolveMaxTimeInterv : 0);
  const queryDelayInSeconds = Math.ceil((_resolveMaxTimeInterv2 = (0, _job_utils.resolveMaxTimeInterval)(datafeeds.map(v => v.query_delay).filter(_guards.isDefined))) !== null && _resolveMaxTimeInterv2 !== void 0 ? _resolveMaxTimeInterv2 : 0);
  const result = Math.max(2 * narrowBucketLength, 2 * bucketSpanInSeconds) + queryDelayInSeconds + 1;
  return `${Math.ceil(result / 60)}m`;
}
/**
 * @deprecated We should avoid using {@link CombinedJobWithStats}. Replace usages with {@link resolveLookbackInterval} when
 * Kibana API returns mapped job and the datafeed configs.
 */


function getLookbackInterval(jobs) {
  return resolveLookbackInterval(jobs, jobs.map(v => v.datafeed_config));
}

function getTopNBuckets(job) {
  const bucketSpan = (0, _parse_interval.parseInterval)(job.analysis_config.bucket_span);

  if (bucketSpan === null) {
    throw new Error('Unable to resolve a bucket span length');
  }

  return Math.ceil(narrowBucketLength / bucketSpan.asSeconds());
}