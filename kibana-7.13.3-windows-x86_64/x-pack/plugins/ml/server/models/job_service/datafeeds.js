"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datafeedsProvider = datafeedsProvider;

var _i18n = require("@kbn/i18n");

var _states = require("../../../common/constants/states");

var _error_utils = require("./error_utils");

var _job_utils = require("../../../common/util/job_utils");

var _fields_service = require("../fields_service");

var _parse_interval = require("../../../common/util/parse_interval");

var _object_utils = require("../../../common/util/object_utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function datafeedsProvider(client, mlClient) {
  async function forceStartDatafeeds(datafeedIds, start, end) {
    const jobIds = await getJobIdsByDatafeedId();
    const doStartsCalled = datafeedIds.reduce((acc, cur) => {
      acc[cur] = false;
      return acc;
    }, {});
    const results = {};

    async function doStart(datafeedId) {
      if (doStartsCalled[datafeedId] === false) {
        doStartsCalled[datafeedId] = true;

        try {
          await startDatafeed(datafeedId, start, end);
          return {
            started: true
          };
        } catch ({
          body
        }) {
          return {
            started: false,
            error: body
          };
        }
      } else {
        return {
          started: true
        };
      }
    }

    for (const datafeedId of datafeedIds) {
      const jobId = jobIds[datafeedId];

      if (jobId !== undefined) {
        try {
          if (await openJob(jobId)) {
            results[datafeedId] = await doStart(datafeedId);
          }
        } catch (error) {
          if ((0, _error_utils.isRequestTimeout)(error)) {
            // if the open request times out, start the datafeed anyway
            // then break out of the loop so no more requests are fired.
            // use fillResultsWithTimeouts to add a timeout error to each
            // remaining job
            results[datafeedId] = await doStart(datafeedId);
            return (0, _error_utils.fillResultsWithTimeouts)(results, datafeedId, datafeedIds, _states.JOB_STATE.OPENED);
          }

          results[datafeedId] = {
            started: false,
            error: error.body
          };
        }
      } else {
        results[datafeedId] = {
          started: false,
          error: _i18n.i18n.translate('xpack.ml.models.jobService.jobHasNoDatafeedErrorMessage', {
            defaultMessage: 'Job has no datafeed'
          })
        };
      }
    }

    return results;
  }

  async function openJob(jobId) {
    let opened = false;

    try {
      const {
        body
      } = await mlClient.openJob({
        job_id: jobId
      });
      opened = body.opened;
    } catch (error) {
      if (error.statusCode === 409) {
        opened = true;
      } else {
        throw error;
      }
    }

    return opened;
  }

  async function startDatafeed(datafeedId, start, end) {
    return mlClient.startDatafeed({
      datafeed_id: datafeedId,
      body: {
        start: start !== undefined ? String(start) : undefined,
        end: end !== undefined ? String(end) : undefined
      }
    });
  }

  async function stopDatafeeds(datafeedIds) {
    const results = {};

    for (const datafeedId of datafeedIds) {
      try {
        const {
          body
        } = await mlClient.stopDatafeed({
          datafeed_id: datafeedId
        });
        results[datafeedId] = {
          stopped: body.stopped
        };
      } catch (error) {
        if ((0, _error_utils.isRequestTimeout)(error)) {
          return (0, _error_utils.fillResultsWithTimeouts)(results, datafeedId, datafeedIds, _states.DATAFEED_STATE.STOPPED);
        } else {
          results[datafeedId] = {
            stopped: false,
            error: error.body
          };
        }
      }
    }

    return results;
  }

  async function forceDeleteDatafeed(datafeedId) {
    const {
      body
    } = await mlClient.deleteDatafeed({
      datafeed_id: datafeedId,
      force: true
    });
    return body;
  }

  async function getDatafeedIdsByJobId() {
    const {
      body: {
        datafeeds
      }
    } = await mlClient.getDatafeeds();
    return datafeeds.reduce((acc, cur) => {
      acc[cur.job_id] = cur.datafeed_id;
      return acc;
    }, {});
  }

  async function getJobIdsByDatafeedId() {
    const {
      body: {
        datafeeds
      }
    } = await mlClient.getDatafeeds();
    return datafeeds.reduce((acc, cur) => {
      acc[cur.datafeed_id] = cur.job_id;
      return acc;
    }, {});
  }

  async function getDatafeedByJobId(jobId, excludeGenerated) {
    const jobIds = Array.isArray(jobId) ? jobId : [jobId];

    async function findDatafeed() {
      // if the job was doesn't use the standard datafeedId format
      // get all the datafeeds and match it with the jobId
      const {
        body: {
          datafeeds
        }
      } = await mlClient.getDatafeeds(excludeGenerated ? {
        exclude_generated: true
      } : {});

      if (typeof jobId === 'string') {
        return datafeeds.find(v => v.job_id === jobId);
      }

      if (Array.isArray(jobId)) {
        return datafeeds.filter(v => jobIds.includes(v.job_id));
      }
    } // if the job was created by the wizard,
    // then we can assume it uses the standard format of the datafeedId


    const assumedDefaultDatafeedId = jobIds.map(v => `datafeed-${v}`).join(',');

    try {
      const {
        body: {
          datafeeds: datafeedsResults
        }
      } = await mlClient.getDatafeeds({
        datafeed_id: assumedDefaultDatafeedId,
        ...(excludeGenerated ? {
          exclude_generated: true
        } : {})
      });

      if (Array.isArray(datafeedsResults)) {
        const result = datafeedsResults.filter(d => jobIds.includes(d.job_id));

        if (typeof jobId === 'string') {
          if (datafeedsResults.length === 1 && datafeedsResults[0].job_id === jobId) {
            return datafeedsResults[0];
          } else {
            return await findDatafeed();
          }
        }

        if (result.length === jobIds.length) {
          return datafeedsResults;
        } else {
          return await findDatafeed();
        }
      } else {
        return await findDatafeed();
      }
    } catch (e) {
      // if assumedDefaultDatafeedId does not exist, ES will throw an error
      return await findDatafeed();
    }
  }

  async function datafeedPreview(job, datafeed) {
    var _datafeed$aggs, _datafeed$indices_opt;

    let query = {
      match_all: {}
    };

    if (datafeed.query) {
      query = datafeed.query;
    }

    const {
      getTimeFieldRange
    } = (0, _fields_service.fieldsServiceProvider)(client);
    const {
      start
    } = await getTimeFieldRange(datafeed.indices, job.data_description.time_field, query, datafeed.runtime_mappings, // @ts-expect-error @elastic/elasticsearch Datafeed is missing indices_options
    datafeed.indices_options); // Get bucket span
    // Get first doc time for datafeed
    // Create a new query - must user query and must range query.
    // Time range 'to' first doc time plus < 10 buckets
    // Do a preliminary search to get the date of the earliest doc matching the
    // query in the datafeed. This will be used to apply a time range criteria
    // on the datafeed search preview.
    // This time filter is required for datafeed searches using aggregations to ensure
    // the search does not create too many buckets (default 10000 max_bucket limit),
    // but apply it to searches without aggregations too for consistency.

    const bucketSpan = (0, _parse_interval.parseInterval)(job.analysis_config.bucket_span);

    if (bucketSpan === null) {
      return;
    }

    const earliestMs = start.epoch;
    const latestMs = +start.epoch + 10 * bucketSpan.asMilliseconds();
    const body = {
      query: {
        bool: {
          must: [{
            range: {
              [job.data_description.time_field]: {
                gte: earliestMs,
                lt: latestMs,
                format: 'epoch_millis'
              }
            }
          }, query]
        }
      }
    }; // if aggs or aggregations is set, add it to the search

    const aggregations = (_datafeed$aggs = datafeed.aggs) !== null && _datafeed$aggs !== void 0 ? _datafeed$aggs : datafeed.aggregations;

    if ((0, _object_utils.isPopulatedObject)(aggregations)) {
      body.size = 0;
      body.aggregations = aggregations; // add script_fields if present

      const scriptFields = datafeed.script_fields;

      if ((0, _object_utils.isPopulatedObject)(scriptFields)) {
        body.script_fields = scriptFields;
      } // add runtime_mappings if present


      const runtimeMappings = datafeed.runtime_mappings;

      if ((0, _object_utils.isPopulatedObject)(runtimeMappings)) {
        body.runtime_mappings = runtimeMappings;
      }
    } else {
      // if aggregations is not set and retrieveWholeSource is not set, add all of the fields from the job
      body.size = _job_utils.ML_DATA_PREVIEW_COUNT; // add script_fields if present

      const scriptFields = datafeed.script_fields;

      if ((0, _object_utils.isPopulatedObject)(scriptFields)) {
        body.script_fields = scriptFields;
      } // add runtime_mappings if present


      const runtimeMappings = datafeed.runtime_mappings;

      if ((0, _object_utils.isPopulatedObject)(runtimeMappings)) {
        body.runtime_mappings = runtimeMappings;
      }

      const fields = new Set(); // get fields from detectors

      if (job.analysis_config.detectors) {
        job.analysis_config.detectors.forEach(dtr => {
          if (dtr.by_field_name) {
            fields.add(dtr.by_field_name);
          }

          if (dtr.field_name) {
            fields.add(dtr.field_name);
          }

          if (dtr.over_field_name) {
            fields.add(dtr.over_field_name);
          }

          if (dtr.partition_field_name) {
            fields.add(dtr.partition_field_name);
          }
        });
      } // get fields from influencers


      if (job.analysis_config.influencers) {
        job.analysis_config.influencers.forEach(inf => {
          fields.add(inf);
        });
      } // get fields from categorizationFieldName


      if (job.analysis_config.categorization_field_name) {
        fields.add(job.analysis_config.categorization_field_name);
      } // get fields from summary_count_field_name


      if (job.analysis_config.summary_count_field_name) {
        fields.add(job.analysis_config.summary_count_field_name);
      } // get fields from time_field


      if (job.data_description.time_field) {
        fields.add(job.data_description.time_field);
      } // add runtime fields


      if (runtimeMappings) {
        Object.keys(runtimeMappings).forEach(fieldName => {
          fields.add(fieldName);
        });
      }

      const fieldsList = [...fields];

      if (fieldsList.length) {
        body.fields = fieldsList;
        body._source = false;
      }
    }

    const data = {
      index: datafeed.indices,
      body,
      // @ts-expect-error @elastic/elasticsearch Datafeed is missing indices_options
      ...((_datafeed$indices_opt = datafeed.indices_options) !== null && _datafeed$indices_opt !== void 0 ? _datafeed$indices_opt : {})
    };
    return (await client.asCurrentUser.search(data)).body;
  }

  return {
    forceStartDatafeeds,
    stopDatafeeds,
    forceDeleteDatafeed,
    getDatafeedIdsByJobId,
    getJobIdsByDatafeedId,
    getDatafeedByJobId,
    datafeedPreview
  };
}