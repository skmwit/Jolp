"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apmAggResponseHandler = exports.apmUuidsAgg = exports.apmAggFilterPath = exports.getDiffCalculation = void 0;

var _lodash = require("lodash");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getMemPath = cgroup => cgroup ? 'beats_stats.metrics.beat.cgroup.memory.mem.usage.bytes' : 'beats_stats.metrics.beat.memstats.rss';

const getDiffCalculation = (max, min) => {
  // no need to test max >= 0, but min <= 0 which is normal for a derivative after restart
  // because we are aggregating/collapsing on ephemeral_ids
  if (max !== null && min !== null && max >= 0 && min >= 0 && max >= min) {
    return max - min;
  }

  return null;
};

exports.getDiffCalculation = getDiffCalculation;
const apmAggFilterPath = ['aggregations.total', 'aggregations.min_events_total.value', 'aggregations.max_events_total.value', 'aggregations.min_mem_total.value', 'aggregations.max_mem_total.value', 'aggregations.versions.buckets'];
exports.apmAggFilterPath = apmAggFilterPath;

const apmUuidsAgg = (maxBucketSize, cgroup) => ({
  total: {
    cardinality: {
      field: 'beats_stats.beat.uuid',
      precision_threshold: 10000
    }
  },
  versions: {
    terms: {
      field: 'beats_stats.beat.version'
    }
  },
  ephemeral_ids: {
    terms: {
      field: 'beats_stats.metrics.beat.info.ephemeral_id',
      size: maxBucketSize
    },
    aggs: {
      min_events: {
        min: {
          field: 'beats_stats.metrics.libbeat.pipeline.events.total'
        }
      },
      max_events: {
        max: {
          field: 'beats_stats.metrics.libbeat.pipeline.events.total'
        }
      },
      min_mem: {
        min: {
          field: getMemPath(cgroup)
        }
      },
      max_mem: {
        max: {
          field: getMemPath(cgroup)
        }
      }
    }
  },
  min_events_total: {
    sum_bucket: {
      buckets_path: 'ephemeral_ids>min_events'
    }
  },
  max_events_total: {
    sum_bucket: {
      buckets_path: 'ephemeral_ids>max_events'
    }
  },
  min_mem_total: {
    sum_bucket: {
      buckets_path: 'ephemeral_ids>min_mem'
    }
  },
  max_mem_total: {
    sum_bucket: {
      buckets_path: 'ephemeral_ids>max_mem'
    }
  }
});

exports.apmUuidsAgg = apmUuidsAgg;

const apmAggResponseHandler = response => {
  const apmTotal = (0, _lodash.get)(response, 'aggregations.total.value', null);
  const eventsTotalMax = (0, _lodash.get)(response, 'aggregations.max_events_total.value', null);
  const eventsTotalMin = (0, _lodash.get)(response, 'aggregations.min_events_total.value', null);
  const memMax = (0, _lodash.get)(response, 'aggregations.max_mem_total.value', null);
  const memMin = (0, _lodash.get)(response, 'aggregations.min_mem_total.value', null);
  const versions = (0, _lodash.get)(response, 'aggregations.versions.buckets', []).map(({
    key
  }) => key);
  return {
    apmTotal,
    totalEvents: getDiffCalculation(eventsTotalMax, eventsTotalMin),
    memRss: getDiffCalculation(memMax, memMin),
    versions
  };
};

exports.apmAggResponseHandler = apmAggResponseHandler;