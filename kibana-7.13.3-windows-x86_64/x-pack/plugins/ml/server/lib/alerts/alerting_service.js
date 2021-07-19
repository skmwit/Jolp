"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertingServiceProvider = alertingServiceProvider;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _risonNode = _interopRequireDefault(require("rison-node"));

var _anomalies = require("../../../common/constants/anomalies");

var _job_utils = require("../../../common/util/job_utils");

var _guards = require("../../../common/types/guards");

var _alerts = require("../../../common/util/alerts");

var _anomaly_utils = require("../../../common/util/anomaly_utils");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Mapping for result types and corresponding score fields.
 */


const resultTypeScoreMapping = {
  [_anomalies.ANOMALY_RESULT_TYPE.BUCKET]: 'anomaly_score',
  [_anomalies.ANOMALY_RESULT_TYPE.RECORD]: 'record_score',
  [_anomalies.ANOMALY_RESULT_TYPE.INFLUENCER]: 'influencer_score'
};
/**
 * Alerting related server-side methods
 * @param mlClient
 * @param datafeedsService
 */

function alertingServiceProvider(mlClient, datafeedsService) {
  const getAggResultsLabel = resultType => {
    return {
      aggGroupLabel: `${resultType}_results`,
      topHitsLabel: `top_${resultType}_hits`
    };
  };

  const getCommonScriptedFields = () => {
    return {
      start: {
        script: {
          lang: 'painless',
          source: `LocalDateTime.ofEpochSecond((doc["timestamp"].value.getMillis()-((doc["bucket_span"].value * 1000)
 * params.padding)) / 1000, 0, ZoneOffset.UTC).toString()+\":00.000Z\"`,
          params: {
            padding: 10
          }
        }
      },
      end: {
        script: {
          lang: 'painless',
          source: `LocalDateTime.ofEpochSecond((doc["timestamp"].value.getMillis()+((doc["bucket_span"].value * 1000)
 * params.padding)) / 1000, 0, ZoneOffset.UTC).toString()+\":00.000Z\"`,
          params: {
            padding: 10
          }
        }
      },
      timestamp_epoch: {
        script: {
          lang: 'painless',
          source: 'doc["timestamp"].value.getMillis()/1000'
        }
      },
      timestamp_iso8601: {
        script: {
          lang: 'painless',
          source: 'doc["timestamp"].value'
        }
      }
    };
  };
  /**
   * Builds an agg query based on the requested result type.
   * @param resultType
   * @param severity
   */


  const getResultTypeAggRequest = (resultType, severity, useInitialScore) => {
    const influencerScoreField = `${useInitialScore ? 'initial_' : ''}influencer_score`;
    const recordScoreField = `${useInitialScore ? 'initial_' : ''}record_score`;
    const bucketScoreField = `${useInitialScore ? 'initial_' : ''}anomaly_score`;
    return {
      influencer_results: {
        filter: {
          range: {
            [influencerScoreField]: {
              gte: resultType === _anomalies.ANOMALY_RESULT_TYPE.INFLUENCER ? severity : 0
            }
          }
        },
        aggs: {
          top_influencer_hits: {
            top_hits: {
              sort: [{
                [influencerScoreField]: {
                  order: 'desc'
                }
              }],
              _source: {
                includes: ['result_type', 'timestamp', 'influencer_field_name', 'influencer_field_value', 'influencer_score', 'is_interim', 'job_id']
              },
              size: 3,
              script_fields: { ...getCommonScriptedFields(),
                score: {
                  script: {
                    lang: 'painless',
                    source: `Math.floor(doc["${influencerScoreField}"].value)`
                  }
                },
                unique_key: {
                  script: {
                    lang: 'painless',
                    source: 'doc["timestamp"].value + "_" + doc["influencer_field_name"].value + "_" + doc["influencer_field_value"].value'
                  }
                }
              }
            }
          }
        }
      },
      record_results: {
        filter: {
          range: {
            [recordScoreField]: {
              gte: resultType === _anomalies.ANOMALY_RESULT_TYPE.RECORD ? severity : 0
            }
          }
        },
        aggs: {
          top_record_hits: {
            top_hits: {
              sort: [{
                [recordScoreField]: {
                  order: 'desc'
                }
              }],
              _source: {
                includes: ['result_type', 'timestamp', 'record_score', 'is_interim', 'function', 'field_name', 'by_field_name', 'by_field_value', 'over_field_name', 'over_field_value', 'partition_field_name', 'partition_field_value', 'job_id', 'detector_index']
              },
              size: 3,
              script_fields: { ...getCommonScriptedFields(),
                score: {
                  script: {
                    lang: 'painless',
                    source: `Math.floor(doc["${recordScoreField}"].value)`
                  }
                },
                unique_key: {
                  script: {
                    lang: 'painless',
                    source: 'doc["timestamp"].value + "_" + doc["function"].value'
                  }
                }
              }
            }
          }
        }
      },
      ...(resultType === _anomalies.ANOMALY_RESULT_TYPE.BUCKET ? {
        bucket_results: {
          filter: {
            range: {
              [bucketScoreField]: {
                gt: severity
              }
            }
          },
          aggs: {
            top_bucket_hits: {
              top_hits: {
                sort: [{
                  [bucketScoreField]: {
                    order: 'desc'
                  }
                }],
                _source: {
                  includes: ['job_id', 'result_type', 'timestamp', 'anomaly_score', 'is_interim']
                },
                size: 1,
                script_fields: { ...getCommonScriptedFields(),
                  score: {
                    script: {
                      lang: 'painless',
                      source: `Math.floor(doc["${bucketScoreField}"].value)`
                    }
                  },
                  unique_key: {
                    script: {
                      lang: 'painless',
                      source: 'doc["timestamp"].value'
                    }
                  }
                }
              }
            }
          }
        }
      } : {})
    };
  };
  /**
   * Provides a key for alert instance.
   */


  const getAlertInstanceKey = source => {
    return source.job_id;
  };

  const getRecordKey = source => {
    let alertInstanceKey = `${source.job_id}_${source.timestamp}`;
    const fieldName = (0, _anomaly_utils.getEntityFieldName)(source);
    const fieldValue = (0, _anomaly_utils.getEntityFieldValue)(source);
    const entity = fieldName !== undefined && fieldValue !== undefined ? `_${fieldName}_${fieldValue}` : '';
    alertInstanceKey += `_${source.detector_index}_${source.function}${entity}`;
    return alertInstanceKey;
  };

  const getResultsFormatter = resultType => {
    const resultsLabel = getAggResultsLabel(resultType);
    return v => {
      const aggTypeResults = v[resultsLabel.aggGroupLabel];

      if (aggTypeResults.doc_count === 0) {
        return;
      }

      const requestedAnomalies = aggTypeResults[resultsLabel.topHitsLabel].hits.hits;
      const topAnomaly = requestedAnomalies[0];
      const alertInstanceKey = getAlertInstanceKey(topAnomaly._source);
      return {
        count: aggTypeResults.doc_count,
        key: v.key,
        message: 'Alerts are raised based on real-time scores. Remember that scores may be adjusted over time as data continues to be analyzed.',
        alertInstanceKey,
        jobIds: [...new Set(requestedAnomalies.map(h => h._source.job_id))],
        isInterim: requestedAnomalies.some(h => h._source.is_interim),
        timestamp: topAnomaly._source.timestamp,
        timestampIso8601: topAnomaly.fields.timestamp_iso8601[0],
        timestampEpoch: topAnomaly.fields.timestamp_epoch[0],
        score: topAnomaly.fields.score[0],
        bucketRange: {
          start: topAnomaly.fields.start[0],
          end: topAnomaly.fields.end[0]
        },
        topRecords: v.record_results.top_record_hits.hits.hits.map(h => {
          return { ...h._source,
            score: h.fields.score[0],
            unique_key: getRecordKey(h._source)
          };
        }),
        topInfluencers: v.influencer_results.top_influencer_hits.hits.hits.map(h => {
          return { ...h._source,
            score: h.fields.score[0],
            unique_key: h.fields.unique_key[0]
          };
        })
      };
    };
  };
  /**
   * Builds a request body
   * @param params - Alert params
   * @param previewTimeInterval - Relative time interval to test the alert condition
   * @param checkIntervalGap - Interval between alert executions
   */


  const fetchAnomalies = async (params, previewTimeInterval, checkIntervalGap) => {
    var _params$jobSelection$, _params$jobSelection$2;

    const jobAndGroupIds = [...((_params$jobSelection$ = params.jobSelection.jobIds) !== null && _params$jobSelection$ !== void 0 ? _params$jobSelection$ : []), ...((_params$jobSelection$2 = params.jobSelection.groupIds) !== null && _params$jobSelection$2 !== void 0 ? _params$jobSelection$2 : [])]; // Extract jobs from group ids and make sure provided jobs assigned to a current space

    const jobsResponse = (await mlClient.getJobs({
      job_id: jobAndGroupIds.join(',')
    })).body.jobs;

    if (jobsResponse.length === 0) {
      // Probably assigned groups don't contain any jobs anymore.
      throw new Error("Couldn't find the job with provided id");
    }

    const maxBucket = (0, _job_utils.resolveMaxTimeInterval)(jobsResponse.map(v => v.analysis_config.bucket_span));

    if (maxBucket === undefined) {
      // Technically it's not possible, just in case.
      throw new Error('Unable to resolve a valid bucket length');
    }
    /**
     * The check interval might be bigger than the 2x bucket span.
     * We need to check the biggest time range to make sure anomalies are not missed.
     */


    const lookBackTimeInterval = `${Math.max( // Double the max bucket span
    Math.round(maxBucket * 2), checkIntervalGap ? Math.round(checkIntervalGap.asSeconds()) : 0)}s`;
    const jobIds = jobsResponse.map(v => v.job_id);
    const requestBody = {
      size: 0,
      query: {
        bool: {
          filter: [{
            terms: {
              job_id: jobIds
            }
          }, {
            range: {
              timestamp: {
                gte: `now-${previewTimeInterval !== null && previewTimeInterval !== void 0 ? previewTimeInterval : lookBackTimeInterval}`,
                // Restricts data points to the current moment for preview
                ...(previewTimeInterval ? {
                  lte: 'now'
                } : {})
              }
            }
          }, {
            terms: {
              result_type: Object.values(_anomalies.ANOMALY_RESULT_TYPE)
            }
          }, ...(params.includeInterim ? [] : [{
            term: {
              is_interim: false
            }
          }])]
        }
      },
      aggs: previewTimeInterval ? {
        alerts_over_time: {
          date_histogram: {
            field: 'timestamp',
            fixed_interval: `${maxBucket}s`,
            // Ignore empty buckets
            min_doc_count: 1
          },
          aggs: getResultTypeAggRequest(params.resultType, params.severity, true)
        }
      } : getResultTypeAggRequest(params.resultType, params.severity)
    };
    const response = await mlClient.anomalySearch({
      // @ts-expect-error
      body: requestBody
    }, jobIds);
    const result = response.body.aggregations;
    const resultsLabel = getAggResultsLabel(params.resultType);
    const formatter = getResultsFormatter(params.resultType);
    return (previewTimeInterval ? result.alerts_over_time.buckets // Filter out empty buckets
    .filter(v => v.doc_count > 0 && v[resultsLabel.aggGroupLabel].doc_count > 0) // Map response
    .map(formatter) : // @ts-expect-error
    [formatter(result)]).filter(_guards.isDefined);
  };
  /**
   * Fetches the most recent anomaly according the top N buckets within the lookback interval
   * that satisfies a rule criteria.
   *
   * @param params - Alert params
   */


  const fetchResult = async params => {
    var _params$jobSelection$3, _params$jobSelection$4, _params$lookbackInter, _params$topNBuckets;

    const jobAndGroupIds = [...((_params$jobSelection$3 = params.jobSelection.jobIds) !== null && _params$jobSelection$3 !== void 0 ? _params$jobSelection$3 : []), ...((_params$jobSelection$4 = params.jobSelection.groupIds) !== null && _params$jobSelection$4 !== void 0 ? _params$jobSelection$4 : [])]; // Extract jobs from group ids and make sure provided jobs assigned to a current space

    const jobsResponse = (await mlClient.getJobs({
      job_id: jobAndGroupIds.join(',')
    })).body.jobs;

    if (jobsResponse.length === 0) {
      // Probably assigned groups don't contain any jobs anymore.
      return;
    }

    const jobIds = jobsResponse.map(v => v.job_id);
    const dataFeeds = await datafeedsService.getDatafeedByJobId(jobIds);
    const maxBucketInSeconds = (0, _job_utils.resolveMaxTimeInterval)(jobsResponse.map(v => v.analysis_config.bucket_span));

    if (maxBucketInSeconds === undefined) {
      // Technically it's not possible, just in case.
      throw new Error('Unable to resolve a valid bucket length');
    }

    const lookBackTimeInterval = (_params$lookbackInter = params.lookbackInterval) !== null && _params$lookbackInter !== void 0 ? _params$lookbackInter : (0, _alerts.resolveLookbackInterval)(jobsResponse, dataFeeds !== null && dataFeeds !== void 0 ? dataFeeds : []);
    const topNBuckets = (_params$topNBuckets = params.topNBuckets) !== null && _params$topNBuckets !== void 0 ? _params$topNBuckets : (0, _alerts.getTopNBuckets)(jobsResponse[0]);
    const requestBody = {
      size: 0,
      query: {
        bool: {
          filter: [{
            terms: {
              job_id: jobIds
            }
          }, {
            terms: {
              result_type: Object.values(_anomalies.ANOMALY_RESULT_TYPE)
            }
          }, {
            range: {
              timestamp: {
                gte: `now-${lookBackTimeInterval}`
              }
            }
          }, ...(params.includeInterim ? [] : [{
            term: {
              is_interim: false
            }
          }])]
        }
      },
      aggs: {
        alerts_over_time: {
          date_histogram: {
            field: 'timestamp',
            fixed_interval: `${maxBucketInSeconds}s`,
            order: {
              _key: 'desc'
            }
          },
          aggs: {
            max_score: {
              max: {
                field: resultTypeScoreMapping[params.resultType]
              }
            },
            ...getResultTypeAggRequest(params.resultType, params.severity),
            truncate: {
              bucket_sort: {
                size: topNBuckets
              }
            }
          }
        }
      }
    };
    const response = await mlClient.anomalySearch({
      // @ts-expect-error
      body: requestBody
    }, jobIds);
    const result = response.body.aggregations;

    if (result.alerts_over_time.buckets.length === 0) {
      return;
    } // Find the most anomalous result from the top N buckets


    const topResult = result.alerts_over_time.buckets.reduce((prev, current) => prev.max_score.value > current.max_score.value ? prev : current);
    return getResultsFormatter(params.resultType)(topResult);
  };
  /**
   * TODO Replace with URL generator when https://github.com/elastic/kibana/issues/59453 is resolved
   * @param r
   * @param type
   */


  const buildExplorerUrl = (r, type) => {
    const isInfluencerResult = type === _anomalies.ANOMALY_RESULT_TYPE.INFLUENCER;
    /**
     * Disabled until Anomaly Explorer page is fixed and properly
     * support single point time selection
     */

    const highlightSwimLaneSelection = false;
    const globalState = {
      ml: {
        jobIds: r.jobIds
      },
      time: {
        from: r.bucketRange.start,
        to: r.bucketRange.end,
        mode: 'absolute'
      }
    };
    const appState = {
      explorer: {
        mlExplorerFilter: { ...(isInfluencerResult ? {
            filterActive: true,
            filteredFields: [r.topInfluencers[0].influencer_field_name, r.topInfluencers[0].influencer_field_value],
            influencersFilterQuery: {
              bool: {
                minimum_should_match: 1,
                should: [{
                  match_phrase: {
                    [r.topInfluencers[0].influencer_field_name]: r.topInfluencers[0].influencer_field_value
                  }
                }]
              }
            },
            queryString: `${r.topInfluencers[0].influencer_field_name}:"${r.topInfluencers[0].influencer_field_value}"`
          } : {})
        },
        mlExplorerSwimlane: { ...(highlightSwimLaneSelection ? {
            selectedLanes: [isInfluencerResult ? r.topInfluencers[0].influencer_field_value : 'Overall'],
            selectedTimes: r.timestampEpoch,
            selectedType: isInfluencerResult ? 'viewBy' : 'overall',
            ...(isInfluencerResult ? {
              viewByFieldName: r.topInfluencers[0].influencer_field_name
            } : {}),
            ...(isInfluencerResult ? {} : {
              showTopFieldValues: true
            })
          } : {})
        }
      }
    };
    return `/app/ml/explorer/?_g=${encodeURIComponent(_risonNode.default.encode(globalState))}&_a=${encodeURIComponent(_risonNode.default.encode(appState))}`;
  };

  return {
    /**
     * Return the result of an alert condition execution.
     *
     * @param params - Alert params
     * @param startedAt
     * @param previousStartedAt
     */
    execute: async (params, startedAt, previousStartedAt) => {
      const result = await fetchResult(params);
      if (!result) return;
      const anomalyExplorerUrl = buildExplorerUrl(result, params.resultType);
      const executionResult = { ...result,
        name: result.alertInstanceKey,
        anomalyExplorerUrl
      };
      return executionResult;
    },

    /**
     * Checks how often the alert condition will fire an alert instance
     * based on the provided relative time window.
     *
     * @param previewParams
     */
    preview: async ({
      alertParams,
      timeRange,
      sampleSize
    }) => {
      const res = await fetchAnomalies(alertParams, timeRange);

      if (!res) {
        throw _boom.default.notFound(`No results found`);
      }

      return {
        // sum of all alert responses within the time range
        count: res.length,
        results: res.slice(0, sampleSize)
      };
    }
  };
}