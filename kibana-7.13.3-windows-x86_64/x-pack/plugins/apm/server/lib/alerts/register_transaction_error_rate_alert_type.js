"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTransactionErrorRateAlertType = registerTransactionErrorRateAlertType;

var _configSchema = require("@kbn/config-schema");

var _operators = require("rxjs/operators");

var _alert_types = require("../../../common/alert_types");

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _event_outcome = require("../../../common/event_outcome");

var _processor_event = require("../../../common/processor_event");

var _formatters = require("../../../common/utils/formatters");

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
  transactionType: _configSchema.schema.maybe(_configSchema.schema.string()),
  serviceName: _configSchema.schema.maybe(_configSchema.schema.string()),
  environment: _configSchema.schema.string()
});

const alertTypeConfig = _alert_types.ALERT_TYPES_CONFIG[_alert_types.AlertType.TransactionErrorRate];

function registerTransactionErrorRateAlertType({
  registry,
  config$
}) {
  registry.registerType((0, _create_apm_lifecycle_rule_type.createAPMLifecycleRuleType)({
    id: _alert_types.AlertType.TransactionErrorRate,
    name: alertTypeConfig.name,
    actionGroups: alertTypeConfig.actionGroups,
    defaultActionGroupId: alertTypeConfig.defaultActionGroupId,
    validate: {
      params: paramsSchema
    },
    actionVariables: {
      context: [_action_variables.apmActionVariables.transactionType, _action_variables.apmActionVariables.serviceName, _action_variables.apmActionVariables.environment, _action_variables.apmActionVariables.threshold, _action_variables.apmActionVariables.triggerValue, _action_variables.apmActionVariables.interval]
    },
    producer: 'apm',
    minimumLicenseRequired: 'basic',
    executor: async ({
      services,
      params: alertParams
    }) => {
      const config = await config$.pipe((0, _operators.take)(1)).toPromise();
      const indices = await (0, _get_apm_indices.getApmIndices)({
        config,
        savedObjectsClient: services.savedObjectsClient
      });
      const searchParams = {
        index: indices['apm_oss.transactionIndices'],
        size: 1,
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
                  [_elasticsearch_fieldnames.PROCESSOR_EVENT]: _processor_event.ProcessorEvent.transaction
                }
              }, {
                terms: {
                  [_elasticsearch_fieldnames.EVENT_OUTCOME]: [_event_outcome.EventOutcome.failure, _event_outcome.EventOutcome.success]
                }
              }, ...(alertParams.serviceName ? [{
                term: {
                  [_elasticsearch_fieldnames.SERVICE_NAME]: alertParams.serviceName
                }
              }] : []), ...(alertParams.transactionType ? [{
                term: {
                  [_elasticsearch_fieldnames.TRANSACTION_TYPE]: alertParams.transactionType
                }
              }] : []), ...(0, _queries.environmentQuery)(alertParams.environment)]
            }
          },
          aggs: {
            series: {
              multi_terms: {
                terms: [{
                  field: _elasticsearch_fieldnames.SERVICE_NAME
                }, {
                  field: _elasticsearch_fieldnames.SERVICE_ENVIRONMENT,
                  missing: ''
                }, {
                  field: _elasticsearch_fieldnames.TRANSACTION_TYPE
                }],
                size: 10000
              },
              aggs: {
                outcomes: {
                  terms: {
                    field: _elasticsearch_fieldnames.EVENT_OUTCOME
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

      if (!response.aggregations) {
        return {};
      }

      const results = response.aggregations.series.buckets.map(bucket => {
        var _bucket$outcomes$buck, _bucket$outcomes$buck2, _bucket$outcomes$buck3, _bucket$outcomes$buck4;

        const [serviceName, environment, transactionType] = bucket.key;
        const failed = (_bucket$outcomes$buck = (_bucket$outcomes$buck2 = bucket.outcomes.buckets.find(outcomeBucket => outcomeBucket.key === _event_outcome.EventOutcome.failure)) === null || _bucket$outcomes$buck2 === void 0 ? void 0 : _bucket$outcomes$buck2.doc_count) !== null && _bucket$outcomes$buck !== void 0 ? _bucket$outcomes$buck : 0;
        const succesful = (_bucket$outcomes$buck3 = (_bucket$outcomes$buck4 = bucket.outcomes.buckets.find(outcomeBucket => outcomeBucket.key === _event_outcome.EventOutcome.success)) === null || _bucket$outcomes$buck4 === void 0 ? void 0 : _bucket$outcomes$buck4.doc_count) !== null && _bucket$outcomes$buck3 !== void 0 ? _bucket$outcomes$buck3 : 0;
        return {
          serviceName,
          environment,
          transactionType,
          errorRate: failed / (failed + succesful) * 100
        };
      }).filter(result => result.errorRate >= alertParams.threshold);
      results.forEach(result => {
        const {
          serviceName,
          environment,
          transactionType,
          errorRate
        } = result;
        services.alertWithLifecycle({
          id: [_alert_types.AlertType.TransactionErrorRate, serviceName, transactionType, environment].filter(name => name).join('_'),
          fields: {
            [_elasticsearch_fieldnames.SERVICE_NAME]: serviceName,
            ...(environment ? {
              [_elasticsearch_fieldnames.SERVICE_ENVIRONMENT]: environment
            } : {}),
            [_elasticsearch_fieldnames.TRANSACTION_TYPE]: transactionType,
            [_elasticsearch_fieldnames.PROCESSOR_EVENT]: _processor_event.ProcessorEvent.transaction,
            'kibana.observability.evaluation.value': errorRate,
            'kibana.observability.evaluation.threshold': alertParams.threshold
          }
        }).scheduleActions(alertTypeConfig.defaultActionGroupId, {
          serviceName,
          transactionType,
          environment,
          threshold: alertParams.threshold,
          triggerValue: (0, _formatters.asDecimalOrInteger)(errorRate),
          interval: `${alertParams.windowSize}${alertParams.windowUnit}`
        });
      });
      return {};
    }
  }));
}