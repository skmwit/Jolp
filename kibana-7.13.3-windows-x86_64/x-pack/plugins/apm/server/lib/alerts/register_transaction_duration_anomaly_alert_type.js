"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTransactionDurationAnomalyAlertType = registerTransactionDurationAnomalyAlertType;

var _configSchema = require("@kbn/config-schema");

var _lodash = require("lodash");

var _processor_event = require("../../../common/processor_event");

var _anomaly_detection = require("../../../common/anomaly_detection");

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _as_mutable_array = require("../../../common/utils/as_mutable_array");

var _ml_constants = require("../../../common/ml_constants");

var _alert_types = require("../../../common/alert_types");

var _get_service_anomalies = require("../service_map/get_service_anomalies");

var _action_variables = require("./action_variables");

var _environment_filter_values = require("../../../common/environment_filter_values");

var _create_apm_lifecycle_rule_type = require("./create_apm_lifecycle_rule_type");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const paramsSchema = _configSchema.schema.object({
  serviceName: _configSchema.schema.maybe(_configSchema.schema.string()),
  transactionType: _configSchema.schema.maybe(_configSchema.schema.string()),
  windowSize: _configSchema.schema.number(),
  windowUnit: _configSchema.schema.string(),
  environment: _configSchema.schema.string(),
  anomalySeverityType: _configSchema.schema.oneOf([_configSchema.schema.literal(_ml_constants.ANOMALY_SEVERITY.CRITICAL), _configSchema.schema.literal(_ml_constants.ANOMALY_SEVERITY.MAJOR), _configSchema.schema.literal(_ml_constants.ANOMALY_SEVERITY.MINOR), _configSchema.schema.literal(_ml_constants.ANOMALY_SEVERITY.WARNING)])
});

const alertTypeConfig = _alert_types.ALERT_TYPES_CONFIG[_alert_types.AlertType.TransactionDurationAnomaly];

function registerTransactionDurationAnomalyAlertType({
  registry,
  ml
}) {
  registry.registerType((0, _create_apm_lifecycle_rule_type.createAPMLifecycleRuleType)({
    id: _alert_types.AlertType.TransactionDurationAnomaly,
    name: alertTypeConfig.name,
    actionGroups: alertTypeConfig.actionGroups,
    defaultActionGroupId: alertTypeConfig.defaultActionGroupId,
    validate: {
      params: paramsSchema
    },
    actionVariables: {
      context: [_action_variables.apmActionVariables.serviceName, _action_variables.apmActionVariables.transactionType, _action_variables.apmActionVariables.environment, _action_variables.apmActionVariables.threshold, _action_variables.apmActionVariables.triggerValue]
    },
    producer: 'apm',
    minimumLicenseRequired: 'basic',
    executor: async ({
      services,
      params
    }) => {
      var _response$aggregation, _response$aggregation2;

      if (!ml) {
        return {};
      }

      const alertParams = params;
      const request = {};
      const {
        mlAnomalySearch
      } = ml.mlSystemProvider(request, services.savedObjectsClient);
      const anomalyDetectors = ml.anomalyDetectorsProvider(request, services.savedObjectsClient);
      const mlJobs = await (0, _get_service_anomalies.getMLJobs)(anomalyDetectors, alertParams.environment);

      const selectedOption = _alert_types.ANOMALY_ALERT_SEVERITY_TYPES.find(option => option.type === alertParams.anomalySeverityType);

      if (!selectedOption) {
        throw new Error(`Anomaly alert severity type ${alertParams.anomalySeverityType} is not supported.`);
      }

      const threshold = selectedOption.threshold;

      if (mlJobs.length === 0) {
        return {};
      }

      const jobIds = mlJobs.map(job => job.job_id);
      const anomalySearchParams = {
        body: {
          size: 0,
          query: {
            bool: {
              filter: [{
                term: {
                  result_type: 'record'
                }
              }, {
                terms: {
                  job_id: jobIds
                }
              }, {
                term: {
                  is_interim: false
                }
              }, {
                range: {
                  timestamp: {
                    gte: `now-${alertParams.windowSize}${alertParams.windowUnit}`,
                    format: 'epoch_millis'
                  }
                }
              }, ...(alertParams.serviceName ? [{
                term: {
                  partition_field_value: alertParams.serviceName
                }
              }] : []), ...(alertParams.transactionType ? [{
                term: {
                  by_field_value: alertParams.transactionType
                }
              }] : [])]
            }
          },
          aggs: {
            anomaly_groups: {
              multi_terms: {
                terms: [{
                  field: 'partition_field_value'
                }, {
                  field: 'by_field_value'
                }, {
                  field: 'job_id'
                }],
                size: 10000
              },
              aggs: {
                latest_score: {
                  top_metrics: {
                    metrics: (0, _as_mutable_array.asMutableArray)([{
                      field: 'record_score'
                    }, {
                      field: 'partition_field_value'
                    }, {
                      field: 'by_field_value'
                    }, {
                      field: 'job_id'
                    }]),
                    sort: {
                      timestamp: 'desc'
                    }
                  }
                }
              }
            }
          }
        }
      };
      const response = await mlAnomalySearch(anomalySearchParams, []);
      const anomalies = (_response$aggregation = (_response$aggregation2 = response.aggregations) === null || _response$aggregation2 === void 0 ? void 0 : _response$aggregation2.anomaly_groups.buckets.map(bucket => {
        const latest = bucket.latest_score.top[0].metrics;
        const job = mlJobs.find(j => j.job_id === latest.job_id);

        if (!job) {
          services.logger.warn(`Could not find matching job for job id ${latest.job_id}`);
          return undefined;
        }

        return {
          serviceName: latest.partition_field_value,
          transactionType: latest.by_field_value,
          environment: job.custom_settings.job_tags.environment,
          score: latest.record_score
        };
      }).filter(anomaly => anomaly ? anomaly.score >= threshold : false)) !== null && _response$aggregation !== void 0 ? _response$aggregation : [];
      (0, _lodash.compact)(anomalies).forEach(anomaly => {
        const {
          serviceName,
          environment,
          transactionType,
          score
        } = anomaly;
        const parsedEnvironment = (0, _environment_filter_values.parseEnvironmentUrlParam)(environment);
        const severityLevel = (0, _anomaly_detection.getSeverity)(score);
        services.alertWithLifecycle({
          id: [_alert_types.AlertType.TransactionDurationAnomaly, serviceName, environment, transactionType].filter(name => name).join('_'),
          fields: {
            [_elasticsearch_fieldnames.SERVICE_NAME]: serviceName,
            ...(parsedEnvironment.esFieldValue ? {
              [_elasticsearch_fieldnames.SERVICE_ENVIRONMENT]: environment
            } : {}),
            [_elasticsearch_fieldnames.TRANSACTION_TYPE]: transactionType,
            [_elasticsearch_fieldnames.PROCESSOR_EVENT]: _processor_event.ProcessorEvent.transaction,
            'kibana.rac.alert.severity.level': severityLevel,
            'kibana.rac.alert.severity.value': score,
            'kibana.observability.evaluation.value': score,
            'kibana.observability.evaluation.threshold': threshold
          }
        }).scheduleActions(alertTypeConfig.defaultActionGroupId, {
          serviceName,
          transactionType,
          environment,
          threshold: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label,
          triggerValue: severityLevel
        });
      });
      return {};
    }
  }));
}