"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asTypeSpecificSO = exports.signalRulesAlertType = void 0;

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _TaskEither = require("fp-ts/lib/TaskEither");

var _function = require("fp-ts/lib/function");

var _validate = require("../../../../common/validate");

var _fp_utils = require("../../../../common/fp_utils");

var _constants = require("../../../../common/constants");

var _helpers = require("../../../../common/machine_learning/helpers");

var _utils = require("../../../../common/detection_engine/utils");

var _parse_schedule_dates = require("../../../../common/detection_engine/parse_schedule_dates");

var _get_input_output_index = require("./get_input_output_index");

var _utils2 = require("./utils");

var _siem_rule_action_groups = require("./siem_rule_action_groups");

var _schedule_notification_actions = require("../notifications/schedule_notification_actions");

var _rule_status_service = require("./rule_status_service");

var _rule_messages = require("./rule_messages");

var _rule_status_saved_objects_client = require("./rule_status_saved_objects_client");

var _utils3 = require("../notifications/utils");

var _eql = require("./executors/eql");

var _query = require("./executors/query");

var _threat_match = require("./executors/threat_match");

var _threshold = require("./executors/threshold");

var _ml = require("./executors/ml");

var _rule_schemas = require("../schemas/rule_schemas");

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

/* eslint-disable complexity */


const signalRulesAlertType = ({
  logger,
  eventsTelemetry,
  version,
  ml,
  lists
}) => {
  return {
    id: _constants.SIGNALS_ID,
    name: 'SIEM signal',
    actionGroups: _siem_rule_action_groups.siemRuleActionGroups,
    defaultActionGroupId: 'default',
    validate: {
      params: {
        validate: object => {
          const [validated, errors] = (0, _validate.validateNonExact)(object, _rule_schemas.ruleParams);

          if (errors != null) {
            throw new Error(errors);
          }

          if (validated == null) {
            throw new Error('Validation of rule params failed');
          }

          return validated;
        }
      }
    },
    producer: _constants.SERVER_APP_ID,
    minimumLicenseRequired: 'basic',

    async executor({
      previousStartedAt,
      startedAt,
      alertId,
      services,
      params,
      spaceId,
      updatedBy: updatedByUser
    }) {
      const {
        ruleId,
        maxSignals,
        meta,
        outputIndex,
        timestampOverride,
        type
      } = params;
      const searchAfterSize = Math.min(maxSignals, _constants.DEFAULT_SEARCH_AFTER_PAGE_SIZE);
      let hasError = false;
      let result = (0, _utils2.createSearchAfterReturnType)();
      const ruleStatusClient = (0, _rule_status_saved_objects_client.ruleStatusSavedObjectsClientFactory)(services.savedObjectsClient);
      const ruleStatusService = await (0, _rule_status_service.ruleStatusServiceFactory)({
        alertId,
        ruleStatusClient
      });
      const savedObject = await services.savedObjectsClient.get('alert', alertId);
      const {
        actions,
        name,
        schedule: {
          interval
        }
      } = savedObject.attributes;
      const refresh = actions.length ? 'wait_for' : false;
      const buildRuleMessage = (0, _rule_messages.buildRuleMessageFactory)({
        id: alertId,
        ruleId,
        name,
        index: outputIndex
      });
      logger.debug(buildRuleMessage('[+] Starting Signal Rule execution'));
      logger.debug(buildRuleMessage(`interval: ${interval}`));
      let wroteWarningStatus = false;
      await ruleStatusService.goingToRun(); // check if rule has permissions to access given index pattern
      // move this collection of lines into a function in utils
      // so that we can use it in create rules route, bulk, etc.

      try {
        if (!(0, _utils2.isMachineLearningParams)(params)) {
          const index = params.index;
          const hasTimestampOverride = timestampOverride != null && !(0, _isEmpty.default)(timestampOverride);
          const inputIndices = await (0, _get_input_output_index.getInputIndex)(services, version, index);
          const [privileges, timestampFieldCaps] = await Promise.all([(0, _utils2.checkPrivileges)(services, inputIndices), services.scopedClusterClient.asCurrentUser.fieldCaps({
            index,
            fields: hasTimestampOverride ? ['@timestamp', timestampOverride] : ['@timestamp'],
            include_unmapped: true
          })]);
          wroteWarningStatus = await (0, _function.flow)(() => (0, _TaskEither.tryCatch)(() => (0, _utils2.hasReadIndexPrivileges)(privileges, logger, buildRuleMessage, ruleStatusService), _fp_utils.toError), (0, _TaskEither.chain)(wroteStatus => (0, _TaskEither.tryCatch)(() => (0, _utils2.hasTimestampFields)(wroteStatus, hasTimestampOverride ? timestampOverride : '@timestamp', name, timestampFieldCaps, inputIndices, ruleStatusService, logger, buildRuleMessage), _fp_utils.toError)), _fp_utils.toPromise)();
        }
      } catch (exc) {
        logger.error(buildRuleMessage(`Check privileges failed to execute ${exc}`));
      }

      const {
        tuples,
        remainingGap
      } = (0, _utils2.getRuleRangeTuples)({
        logger,
        previousStartedAt,
        from: params.from,
        to: params.to,
        interval,
        maxSignals,
        buildRuleMessage
      });

      if (remainingGap.asMilliseconds() > 0) {
        const gapString = remainingGap.humanize();
        const gapMessage = buildRuleMessage(`${gapString} (${remainingGap.asMilliseconds()}ms) were not queried between this rule execution and the last execution, so signals may have been missed.`, 'Consider increasing your look behind time or adding more Kibana instances.');
        logger.warn(gapMessage);
        hasError = true;
        await ruleStatusService.error(gapMessage, {
          gap: gapString
        });
      }

      try {
        var _params$exceptionsLis;

        const {
          listClient,
          exceptionsClient
        } = (0, _utils2.getListsClient)({
          services,
          updatedByUser,
          spaceId,
          lists,
          savedObjectClient: services.savedObjectsClient
        });
        const exceptionItems = await (0, _utils2.getExceptions)({
          client: exceptionsClient,
          lists: (_params$exceptionsLis = params.exceptionsList) !== null && _params$exceptionsLis !== void 0 ? _params$exceptionsLis : []
        });

        if ((0, _helpers.isMlRule)(type)) {
          const mlRuleSO = asTypeSpecificSO(savedObject, _rule_schemas.machineLearningRuleParams);
          result = await (0, _ml.mlExecutor)({
            rule: mlRuleSO,
            ml,
            listClient,
            exceptionItems,
            ruleStatusService,
            services,
            logger,
            refresh,
            buildRuleMessage
          });
        } else if ((0, _utils.isThresholdRule)(type)) {
          const thresholdRuleSO = asTypeSpecificSO(savedObject, _rule_schemas.thresholdRuleParams);
          result = await (0, _threshold.thresholdExecutor)({
            rule: thresholdRuleSO,
            tuples,
            exceptionItems,
            ruleStatusService,
            services,
            version,
            logger,
            refresh,
            buildRuleMessage,
            startedAt
          });
        } else if ((0, _utils.isThreatMatchRule)(type)) {
          const threatRuleSO = asTypeSpecificSO(savedObject, _rule_schemas.threatRuleParams);
          result = await (0, _threat_match.threatMatchExecutor)({
            rule: threatRuleSO,
            tuples,
            listClient,
            exceptionItems,
            services,
            version,
            searchAfterSize,
            logger,
            refresh,
            eventsTelemetry,
            buildRuleMessage
          });
        } else if ((0, _utils.isQueryRule)(type)) {
          const queryRuleSO = validateQueryRuleTypes(savedObject);
          result = await (0, _query.queryExecutor)({
            rule: queryRuleSO,
            tuples,
            listClient,
            exceptionItems,
            services,
            version,
            searchAfterSize,
            logger,
            refresh,
            eventsTelemetry,
            buildRuleMessage
          });
        } else if ((0, _utils.isEqlRule)(type)) {
          const eqlRuleSO = asTypeSpecificSO(savedObject, _rule_schemas.eqlRuleParams);
          result = await (0, _eql.eqlExecutor)({
            rule: eqlRuleSO,
            exceptionItems,
            ruleStatusService,
            services,
            version,
            searchAfterSize,
            logger,
            refresh
          });
        } else {
          throw new Error(`unknown rule type ${type}`);
        }

        if (result.success) {
          if (actions.length) {
            var _parseScheduleDates, _parseScheduleDates2;

            const notificationRuleParams = { ...params,
              name,
              id: savedObject.id
            };
            const fromInMs = (_parseScheduleDates = (0, _parse_schedule_dates.parseScheduleDates)(`now-${interval}`)) === null || _parseScheduleDates === void 0 ? void 0 : _parseScheduleDates.format('x');
            const toInMs = (_parseScheduleDates2 = (0, _parse_schedule_dates.parseScheduleDates)('now')) === null || _parseScheduleDates2 === void 0 ? void 0 : _parseScheduleDates2.format('x');
            const resultsLink = (0, _utils3.getNotificationResultsLink)({
              from: fromInMs,
              to: toInMs,
              id: savedObject.id,
              kibanaSiemAppUrl: meta === null || meta === void 0 ? void 0 : meta.kibana_siem_app_url
            });
            logger.info(buildRuleMessage(`Found ${result.createdSignalsCount} signals for notification.`));

            if (result.createdSignalsCount) {
              const alertInstance = services.alertInstanceFactory(alertId);
              (0, _schedule_notification_actions.scheduleNotificationActions)({
                alertInstance,
                signalsCount: result.createdSignalsCount,
                signals: result.createdSignals,
                resultsLink,
                ruleParams: notificationRuleParams
              });
            }
          }

          logger.debug(buildRuleMessage('[+] Signal Rule execution completed.'));
          logger.debug(buildRuleMessage(`[+] Finished indexing ${result.createdSignalsCount} signals into ${outputIndex}`));

          if (!hasError && !wroteWarningStatus && !result.warning) {
            var _result$lastLookBackD;

            await ruleStatusService.success('succeeded', {
              bulkCreateTimeDurations: result.bulkCreateTimes,
              searchAfterTimeDurations: result.searchAfterTimes,
              lastLookBackDate: (_result$lastLookBackD = result.lastLookBackDate) === null || _result$lastLookBackD === void 0 ? void 0 : _result$lastLookBackD.toISOString()
            });
          } // adding this log line so we can get some information from cloud


          logger.info(buildRuleMessage(`[+] Finished indexing ${result.createdSignalsCount}  ${!(0, _isEmpty.default)(result.totalToFromTuples) ? `signals searched between date ranges ${JSON.stringify(result.totalToFromTuples, null, 2)}` : ''}`));
        } else {
          var _result$lastLookBackD2;

          const errorMessage = buildRuleMessage('Bulk Indexing of signals failed:', result.errors.join());
          logger.error(errorMessage);
          await ruleStatusService.error(errorMessage, {
            bulkCreateTimeDurations: result.bulkCreateTimes,
            searchAfterTimeDurations: result.searchAfterTimes,
            lastLookBackDate: (_result$lastLookBackD2 = result.lastLookBackDate) === null || _result$lastLookBackD2 === void 0 ? void 0 : _result$lastLookBackD2.toISOString()
          });
        }
      } catch (error) {
        var _error$message, _result$lastLookBackD3;

        const errorMessage = (_error$message = error.message) !== null && _error$message !== void 0 ? _error$message : '(no error message given)';
        const message = buildRuleMessage('An error occurred during rule execution:', `message: "${errorMessage}"`);
        logger.error(message);
        await ruleStatusService.error(message, {
          bulkCreateTimeDurations: result.bulkCreateTimes,
          searchAfterTimeDurations: result.searchAfterTimes,
          lastLookBackDate: (_result$lastLookBackD3 = result.lastLookBackDate) === null || _result$lastLookBackD3 === void 0 ? void 0 : _result$lastLookBackD3.toISOString()
        });
      }
    }

  };
};

exports.signalRulesAlertType = signalRulesAlertType;

const validateQueryRuleTypes = ruleSO => {
  if (ruleSO.attributes.params.type === 'query') {
    return asTypeSpecificSO(ruleSO, _rule_schemas.queryRuleParams);
  } else {
    return asTypeSpecificSO(ruleSO, _rule_schemas.savedQueryRuleParams);
  }
};
/**
 * This function takes a generic rule SavedObject and a type-specific schema for the rule params
 * and validates the SavedObject params against the schema. If they validate, it returns a SavedObject
 * where the params have been replaced with the validated params. This eliminates the need for logic that
 * checks if the required type specific fields actually exist on the SO and prevents rule executors from
 * accessing fields that only exist on other rule types.
 *
 * @param ruleSO SavedObject typed as an object with all fields from all different rule types
 * @param schema io-ts schema for the specific rule type the SavedObject claims to be
 */


const asTypeSpecificSO = (ruleSO, schema) => {
  const [validated, errors] = (0, _validate.validateNonExact)(ruleSO.attributes.params, schema);

  if (validated == null || errors != null) {
    throw new Error(`Rule attempted to execute with invalid params: ${errors}`);
  }

  return { ...ruleSO,
    attributes: { ...ruleSO.attributes,
      params: validated
    }
  };
};

exports.asTypeSpecificSO = asTypeSpecificSO;