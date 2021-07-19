"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLifecycleRuleTypeFactory = createLifecycleRuleTypeFactory;

var t = _interopRequireWildcard(require("io-ts"));

var _Either = require("fp-ts/lib/Either");

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const trackedAlertStateRt = t.type({
  alertId: t.string,
  alertUuid: t.string,
  started: t.string
});
const wrappedStateRt = t.type({
  wrapped: t.record(t.string, t.unknown),
  trackedAlerts: t.record(t.string, trackedAlertStateRt)
});

function createLifecycleRuleTypeFactory() {
  return type => {
    return { ...type,
      executor: async options => {
        const {
          services: {
            scopedRuleRegistryClient,
            alertInstanceFactory,
            logger
          },
          state: previousState,
          rule
        } = options;
        const decodedState = wrappedStateRt.decode(previousState);
        const state = (0, _Either.isLeft)(decodedState) ? {
          wrapped: previousState,
          trackedAlerts: {}
        } : decodedState.right;
        const currentAlerts = {};
        const timestamp = options.startedAt.toISOString();
        const nextWrappedState = await type.executor({ ...options,
          state: state.wrapped,
          services: { ...options.services,
            alertWithLifecycle: ({
              id,
              fields
            }) => {
              currentAlerts[id] = { ...fields,
                'kibana.rac.alert.id': id
              };
              return alertInstanceFactory(id);
            }
          }
        });
        const currentAlertIds = Object.keys(currentAlerts);
        const trackedAlertIds = Object.keys(state.trackedAlerts);
        const newAlertIds = currentAlertIds.filter(alertId => !trackedAlertIds.includes(alertId));
        const allAlertIds = [...new Set(currentAlertIds.concat(trackedAlertIds))];
        const trackedAlertStatesOfRecovered = Object.values(state.trackedAlerts).filter(trackedAlertState => !currentAlerts[trackedAlertState.alertId]);
        logger.debug(`Tracking ${allAlertIds.length} alerts (${newAlertIds.length} new, ${trackedAlertStatesOfRecovered.length} recovered)`);
        const alertsDataMap = { ...currentAlerts
        };

        if (scopedRuleRegistryClient && trackedAlertStatesOfRecovered.length) {
          const {
            events
          } = await scopedRuleRegistryClient.search({
            body: {
              query: {
                bool: {
                  filter: [{
                    term: {
                      'rule.uuid': rule.uuid
                    }
                  }, {
                    terms: {
                      'kibana.rac.alert.uuid': trackedAlertStatesOfRecovered.map(trackedAlertState => trackedAlertState.alertUuid)
                    }
                  }]
                }
              },
              size: trackedAlertStatesOfRecovered.length,
              collapse: {
                field: 'kibana.rac.alert.uuid'
              },
              _source: false,
              fields: ['*'],
              sort: {
                '@timestamp': 'desc'
              }
            }
          });
          events.forEach(event => {
            const alertId = event['kibana.rac.alert.id'];
            alertsDataMap[alertId] = event;
          });
        }

        const eventsToIndex = allAlertIds.map(alertId => {
          var _state$trackedAlerts$;

          const alertData = alertsDataMap[alertId];

          if (!alertData) {
            logger.warn(`Could not find alert data for ${alertId}`);
          }

          const event = { ...alertData,
            '@timestamp': timestamp,
            'event.kind': 'state',
            'kibana.rac.alert.id': alertId
          };
          const isNew = !state.trackedAlerts[alertId];
          const isRecovered = !currentAlerts[alertId];
          const isActiveButNotNew = !isNew && !isRecovered;
          const isActive = !isRecovered;
          const {
            alertUuid,
            started
          } = (_state$trackedAlerts$ = state.trackedAlerts[alertId]) !== null && _state$trackedAlerts$ !== void 0 ? _state$trackedAlerts$ : {
            alertUuid: (0, _v.default)(),
            started: timestamp
          };
          event['kibana.rac.alert.start'] = started;
          event['kibana.rac.alert.uuid'] = alertUuid;

          if (isNew) {
            event['event.action'] = 'open';
          }

          if (isRecovered) {
            event['kibana.rac.alert.end'] = timestamp;
            event['event.action'] = 'close';
            event['kibana.rac.alert.status'] = 'closed';
          }

          if (isActiveButNotNew) {
            event['event.action'] = 'active';
          }

          if (isActive) {
            event['kibana.rac.alert.status'] = 'open';
          }

          event['kibana.rac.alert.duration.us'] = (options.startedAt.getTime() - new Date(event['kibana.rac.alert.start']).getTime()) * 1000;
          return event;
        });

        if (eventsToIndex.length && scopedRuleRegistryClient) {
          await scopedRuleRegistryClient.bulkIndex(eventsToIndex);
        }

        const nextTrackedAlerts = Object.fromEntries(eventsToIndex.filter(event => event['kibana.rac.alert.status'] !== 'closed').map(event => {
          const alertId = event['kibana.rac.alert.id'];
          const alertUuid = event['kibana.rac.alert.uuid'];
          const started = new Date(event['kibana.rac.alert.start']).toISOString();
          return [alertId, {
            alertId,
            alertUuid,
            started
          }];
        }));
        return {
          wrapped: nextWrappedState,
          trackedAlerts: nextTrackedAlerts
        };
      }
    };
  };
}