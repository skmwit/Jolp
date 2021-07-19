"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMlJobsUsage = exports.getRulesUsage = exports.initialMlJobsUsage = exports.initialRulesUsage = void 0;

var _constants = require("../../../common/constants");

var _helpers = require("../../../common/machine_learning/helpers");

var _is_security_job = require("../../../common/machine_learning/is_security_job");

var _detection_telemetry_helpers = require("./detection_telemetry_helpers");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Default detection rule usage count
 */


const initialRulesUsage = {
  custom: {
    enabled: 0,
    disabled: 0
  },
  elastic: {
    enabled: 0,
    disabled: 0
  }
};
/**
 * Default ml job usage count
 */

exports.initialRulesUsage = initialRulesUsage;
const initialMlJobsUsage = {
  custom: {
    enabled: 0,
    disabled: 0
  },
  elastic: {
    enabled: 0,
    disabled: 0
  }
};
exports.initialMlJobsUsage = initialMlJobsUsage;

const updateRulesUsage = (ruleMetric, usage) => {
  const {
    isEnabled,
    isElastic
  } = ruleMetric;

  if (isEnabled && isElastic) {
    return { ...usage,
      elastic: { ...usage.elastic,
        enabled: usage.elastic.enabled + 1
      }
    };
  } else if (!isEnabled && isElastic) {
    return { ...usage,
      elastic: { ...usage.elastic,
        disabled: usage.elastic.disabled + 1
      }
    };
  } else if (isEnabled && !isElastic) {
    return { ...usage,
      custom: { ...usage.custom,
        enabled: usage.custom.enabled + 1
      }
    };
  } else if (!isEnabled && !isElastic) {
    return { ...usage,
      custom: { ...usage.custom,
        disabled: usage.custom.disabled + 1
      }
    };
  } else {
    return usage;
  }
};

const updateMlJobsUsage = (jobMetric, usage) => {
  const {
    isEnabled,
    isElastic
  } = jobMetric;

  if (isEnabled && isElastic) {
    return { ...usage,
      elastic: { ...usage.elastic,
        enabled: usage.elastic.enabled + 1
      }
    };
  } else if (!isEnabled && isElastic) {
    return { ...usage,
      elastic: { ...usage.elastic,
        disabled: usage.elastic.disabled + 1
      }
    };
  } else if (isEnabled && !isElastic) {
    return { ...usage,
      custom: { ...usage.custom,
        enabled: usage.custom.enabled + 1
      }
    };
  } else if (!isEnabled && !isElastic) {
    return { ...usage,
      custom: { ...usage.custom,
        disabled: usage.custom.disabled + 1
      }
    };
  } else {
    return usage;
  }
};

const getRulesUsage = async (index, esClient) => {
  let rulesUsage = initialRulesUsage;
  const ruleSearchOptions = {
    body: {
      query: {
        bool: {
          filter: {
            term: {
              'alert.alertTypeId': _constants.SIGNALS_ID
            }
          }
        }
      }
    },
    filterPath: ['hits.hits._source.alert.enabled', 'hits.hits._source.alert.tags'],
    ignoreUnavailable: true,
    index,
    size: 10000 // elasticsearch index.max_result_window default value

  };

  try {
    var _ruleResults$hits, _ruleResults$hits$hit;

    const {
      body: ruleResults
    } = await esClient.search(ruleSearchOptions);

    if (((_ruleResults$hits = ruleResults.hits) === null || _ruleResults$hits === void 0 ? void 0 : (_ruleResults$hits$hit = _ruleResults$hits.hits) === null || _ruleResults$hits$hit === void 0 ? void 0 : _ruleResults$hits$hit.length) > 0) {
      rulesUsage = ruleResults.hits.hits.reduce((usage, hit) => {
        var _hit$_source, _hit$_source2;

        const isElastic = (0, _detection_telemetry_helpers.isElasticRule)((_hit$_source = hit._source) === null || _hit$_source === void 0 ? void 0 : _hit$_source.alert.tags);
        const isEnabled = Boolean((_hit$_source2 = hit._source) === null || _hit$_source2 === void 0 ? void 0 : _hit$_source2.alert.enabled);
        return updateRulesUsage({
          isElastic,
          isEnabled
        }, usage);
      }, initialRulesUsage);
    }
  } catch (e) {// ignore failure, usage will be zeroed
  }

  return rulesUsage;
};

exports.getRulesUsage = getRulesUsage;

const getMlJobsUsage = async (ml, savedObjectClient) => {
  let jobsUsage = initialMlJobsUsage;

  if (ml) {
    try {
      const fakeRequest = {
        headers: {}
      };
      const modules = await ml.modulesProvider(fakeRequest, savedObjectClient).listModules();
      const moduleJobs = modules.flatMap(module => module.jobs);
      const jobs = await ml.jobServiceProvider(fakeRequest, savedObjectClient).jobsSummary();
      jobsUsage = jobs.filter(_is_security_job.isSecurityJob).reduce((usage, job) => {
        const isElastic = moduleJobs.some(moduleJob => moduleJob.id === job.id);
        const isEnabled = (0, _helpers.isJobStarted)(job.jobState, job.datafeedState);
        return updateMlJobsUsage({
          isElastic,
          isEnabled
        }, usage);
      }, initialMlJobsUsage);
    } catch (e) {// ignore failure, usage will be zeroed
    }
  }

  return jobsUsage;
};

exports.getMlJobsUsage = getMlJobsUsage;