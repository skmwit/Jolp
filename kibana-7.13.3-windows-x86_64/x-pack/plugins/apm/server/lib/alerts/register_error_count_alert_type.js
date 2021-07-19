"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerErrorCountAlertType = registerErrorCountAlertType;

var _configSchema = require("@kbn/config-schema");

var _operators = require("rxjs/operators");

var _environment_filter_values = require("../../../common/environment_filter_values");

var _as_mutable_array = require("../../../common/utils/as_mutable_array");

var _alert_types = require("../../../common/alert_types");

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _processor_event = require("../../../common/processor_event");

var _queries = require("../../../server/utils/queries");

var _get_apm_indices = require("../settings/apm_indices/get_apm_indices");

var _action_variables = require("./action_variables");

var _alerting_es_client = require("./alerting_es_client");

var _create_apm_lifecycle_rule_type = require("./create_apm_lifecycle_rule_type");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const paramsSchema = _configSchema.schema.object({
  windowSize: _configSchema.schema.number(),
  windowUnit: _configSchema.schema.string(),
  threshold: _configSchema.schema.number(),
  serviceName: _configSchema.schema.maybe(_configSchema.schema.string()),
  environment: _configSchema.schema.string()
});

const alertTypeConfig = _alert_types.ALERT_TYPES_CONFIG[_alert_types.AlertType.ErrorCount];

function registerErrorCountAlertType({
  registry,
  config$
}) {
  registry.registerType((0, _create_apm_lifecycle_rule_type.createAPMLifecycleRuleType)({
    id: _alert_types.AlertType.ErrorCount,
    name: alertTypeConfig.name,
    actionGroups: alertTypeConfig.actionGroups,
    defaultActionGroupId: alertTypeConfig.defaultActionGroupId,
    validate: {
      params: paramsSchema
    },
    actionVariables: {
      context: [_action_variables.apmActionVariables.serviceName, _action_variables.apmActionVariables.environment, _action_variables.apmActionVariables.threshold, _action_variables.apmActionVariables.triggerValue, _action_variables.apmActionVariables.interval]
    },
    producer: 'apm',
    minimumLicenseRequired: 'basic',
    executor: async ({
      services,
      params
    }) => {
      var _response$aggregation, _response$aggregation2;

      const config = await config$.pipe((0, _operators.take)(1)).toPromise();
      const alertParams = params;
      const indices = await (0, _get_apm_indices.getApmIndices)({
        config,
        savedObjectsClient: services.savedObjectsClient
      });
      const searchParams = {
        index: indices['apm_oss.errorIndices'],
        size: 0,
        body: {
          query: {
            bool: {
              filter: [{
                range: {
                  '@timestamp': {
                    gte: `now-${alertParams.windowSize}${alertParams.windowUnit}`
                  }
                }
              }, {
                term: {
                  [_elasticsearch_fieldnames.PROCESSOR_EVENT]: _processor_event.ProcessorEvent.error
                }
              }, ...(alertParams.serviceName ? [{
                term: {
                  [_elasticsearch_fieldnames.SERVICE_NAME]: alertParams.serviceName
                }
              }] : []), ...(0, _queries.environmentQuery)(alertParams.environment)]
            }
          },
          aggs: {
            error_counts: {
              multi_terms: {
                terms: [{
                  field: _elasticsearch_fieldnames.SERVICE_NAME
                }, {
                  field: _elasticsearch_fieldnames.SERVICE_ENVIRONMENT,
                  missing: ''
                }],
                size: 10000
              },
              aggs: {
                latest: {
                  top_metrics: {
                    metrics: (0, _as_mutable_array.asMutableArray)([{
                      field: _elasticsearch_fieldnames.SERVICE_NAME
                    }, {
                      field: _elasticsearch_fieldnames.SERVICE_ENVIRONMENT
                    }]),
                    sort: {
                      '@timestamp': 'desc'
                    }
                  }
                }
              }
            }
          }
        }
      };
      const response = await (0, _alerting_es_client.alertingEsClient)({
        scopedClusterClient: services.scopedClusterClient,
        params: searchParams
      });
      const errorCountResults = (_response$aggregation = (_response$aggregation2 = response.aggregations) === null || _response$aggregation2 === void 0 ? void 0 : _response$aggregation2.error_counts.buckets.map(bucket => {
        const latest = bucket.latest.top[0].metrics;
        return {
          serviceName: latest['service.name'],
          environment: latest['service.environment'],
          errorCount: bucket.doc_count
        };
      })) !== null && _response$aggregation !== void 0 ? _response$aggregation : [];
      errorCountResults.filter(result => result.errorCount >= alertParams.threshold).forEach(result => {
        const {
          serviceName,
          environment,
          errorCount
        } = result;
        services.alertWithLifecycle({
          id: [_alert_types.AlertType.ErrorCount, serviceName, environment].filter(name => name).join('_'),
          fields: {
            [_elasticsearch_fieldnames.SERVICE_NAME]: serviceName,
            ...(environment ? {
              [_elasticsearch_fieldnames.SERVICE_ENVIRONMENT]: environment
            } : {}),
            [_elasticsearch_fieldnames.PROCESSOR_EVENT]: _processor_event.ProcessorEvent.error,
            'kibana.observability.evaluation.value': errorCount,
            'kibana.observability.evaluation.threshold': alertParams.threshold
          }
        }).scheduleActions(alertTypeConfig.defaultActionGroupId, {
          serviceName,
          environment: environment || _environment_filter_values.ENVIRONMENT_NOT_DEFINED.text,
          threshold: alertParams.threshold,
          triggerValue: errorCount,
          interval: `${alertParams.windowSize}${alertParams.windowUnit}`
        });
      });
      return {};
    }
  }));
}