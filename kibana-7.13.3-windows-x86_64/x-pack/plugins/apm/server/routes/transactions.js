"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transactionRouteRepository = void 0;

var _ioTsUtils = require("@kbn/io-ts-utils");

var t = _interopRequireWildcard(require("io-ts"));

var _latency_aggregation_types = require("../../common/latency_aggregation_types");

var _aggregated_transactions = require("../lib/helpers/aggregated_transactions");

var _setup_request = require("../lib/helpers/setup_request");

var _get_service_transaction_groups = require("../lib/services/get_service_transaction_groups");

var _get_service_transaction_group_detailed_statistics = require("../lib/services/get_service_transaction_group_detailed_statistics");

var _breakdown = require("../lib/transactions/breakdown");

var _distribution = require("../lib/transactions/distribution");

var _get_anomaly_data = require("../lib/transactions/get_anomaly_data");

var _get_latency_charts = require("../lib/transactions/get_latency_charts");

var _get_throughput_charts = require("../lib/transactions/get_throughput_charts");

var _transaction_groups = require("../lib/transaction_groups");

var _get_error_rate = require("../lib/transaction_groups/get_error_rate");

var _create_apm_server_route = require("./create_apm_server_route");

var _create_apm_server_route_repository = require("./create_apm_server_route_repository");

var _default_api_types = require("./default_api_types");

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

/**
 * Returns a list of transactions grouped by name
 * //TODO: delete this once we moved away from the old table in the transaction overview page. It should be replaced by /transactions/groups/main_statistics/
 */


const transactionGroupsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/transactions/groups',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.type({
      transactionType: t.string
    }), _default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params
    } = resources;
    const {
      serviceName
    } = params.path;
    const {
      environment,
      kuery,
      transactionType
    } = params.query;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return (0, _transaction_groups.getTransactionGroupList)({
      environment,
      kuery,
      type: 'top_transactions',
      serviceName,
      transactionType,
      searchAggregatedTransactions
    }, setup);
  }
});
const transactionGroupsMainStatisticsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/transactions/groups/main_statistics',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([_default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt, t.type({
      transactionType: t.string,
      latencyAggregationType: _latency_aggregation_types.latencyAggregationTypeRt
    })])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const {
      params
    } = resources;
    const setup = await (0, _setup_request.setupRequest)(resources);
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    const {
      path: {
        serviceName
      },
      query: {
        environment,
        kuery,
        latencyAggregationType,
        transactionType
      }
    } = params;
    return (0, _get_service_transaction_groups.getServiceTransactionGroups)({
      environment,
      kuery,
      setup,
      serviceName,
      searchAggregatedTransactions,
      transactionType,
      latencyAggregationType
    });
  }
});
const transactionGroupsDetailedStatisticsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/transactions/groups/detailed_statistics',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([_default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt, _default_api_types.comparisonRangeRt, t.type({
      transactionNames: _ioTsUtils.jsonRt.pipe(t.array(t.string)),
      numBuckets: _ioTsUtils.toNumberRt,
      transactionType: t.string,
      latencyAggregationType: _latency_aggregation_types.latencyAggregationTypeRt
    })])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    const {
      params
    } = resources;
    const {
      path: {
        serviceName
      },
      query: {
        environment,
        kuery,
        transactionNames,
        latencyAggregationType,
        numBuckets,
        transactionType,
        comparisonStart,
        comparisonEnd
      }
    } = params;
    return await (0, _get_service_transaction_group_detailed_statistics.getServiceTransactionGroupDetailedStatisticsPeriods)({
      environment,
      kuery,
      setup,
      serviceName,
      transactionNames,
      searchAggregatedTransactions,
      transactionType,
      numBuckets,
      latencyAggregationType,
      comparisonStart,
      comparisonEnd
    });
  }
});
const transactionLatencyChartsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/transactions/charts/latency',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.type({
      transactionType: t.string,
      latencyAggregationType: _latency_aggregation_types.latencyAggregationTypeRt
    }), t.partial({
      transactionName: t.string
    }), t.intersection([_default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt, _default_api_types.comparisonRangeRt])])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params,
      logger
    } = resources;
    const {
      serviceName
    } = params.path;
    const {
      environment,
      kuery,
      transactionType,
      transactionName,
      latencyAggregationType,
      comparisonStart,
      comparisonEnd
    } = params.query;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    const options = {
      environment,
      kuery,
      serviceName,
      transactionType,
      transactionName,
      setup,
      searchAggregatedTransactions,
      logger
    };
    const [{
      currentPeriod,
      previousPeriod
    }, anomalyTimeseries] = await Promise.all([(0, _get_latency_charts.getLatencyPeriods)({ ...options,
      latencyAggregationType: latencyAggregationType,
      comparisonStart,
      comparisonEnd
    }), (0, _get_anomaly_data.getAnomalySeries)(options).catch(error => {
      logger.warn(`Unable to retrieve anomalies for latency charts.`);
      logger.error(error);
      return undefined;
    })]);
    return {
      currentPeriod,
      previousPeriod,
      anomalyTimeseries
    };
  }
});
const transactionThroughputChartsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/transactions/charts/throughput',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.type({
      transactionType: t.string
    }), t.partial({
      transactionName: t.string
    }), _default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params
    } = resources;
    const {
      serviceName
    } = params.path;
    const {
      environment,
      kuery,
      transactionType,
      transactionName
    } = params.query;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return await (0, _get_throughput_charts.getThroughputCharts)({
      environment,
      kuery,
      serviceName,
      transactionType,
      transactionName,
      setup,
      searchAggregatedTransactions
    });
  }
});
const transactionChartsDistributionRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/transactions/charts/distribution',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.type({
      transactionType: t.string,
      transactionName: t.string
    }), t.partial({
      transactionId: t.string,
      traceId: t.string
    }), _default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params
    } = resources;
    const {
      serviceName
    } = params.path;
    const {
      environment,
      kuery,
      transactionType,
      transactionName,
      transactionId = '',
      traceId = ''
    } = params.query;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return (0, _distribution.getTransactionDistribution)({
      environment,
      kuery,
      serviceName,
      transactionType,
      transactionName,
      transactionId,
      traceId,
      setup,
      searchAggregatedTransactions
    });
  }
});
const transactionChartsBreakdownRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/transaction/charts/breakdown',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.type({
      transactionType: t.string
    }), t.partial({
      transactionName: t.string
    }), _default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params
    } = resources;
    const {
      serviceName
    } = params.path;
    const {
      environment,
      kuery,
      transactionName,
      transactionType
    } = params.query;
    return (0, _breakdown.getTransactionBreakdown)({
      environment,
      kuery,
      serviceName,
      transactionName,
      transactionType,
      setup
    });
  }
});
const transactionChartsErrorRateRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/transactions/charts/error_rate',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.type({
      transactionType: t.string
    }), t.partial({
      transactionName: t.string
    }), t.intersection([_default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt, _default_api_types.comparisonRangeRt])])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params
    } = resources;
    const {
      serviceName
    } = params.path;
    const {
      environment,
      kuery,
      transactionType,
      transactionName,
      comparisonStart,
      comparisonEnd
    } = params.query;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return (0, _get_error_rate.getErrorRatePeriods)({
      environment,
      kuery,
      serviceName,
      transactionType,
      transactionName,
      setup,
      searchAggregatedTransactions,
      comparisonStart,
      comparisonEnd
    });
  }
});
const transactionRouteRepository = (0, _create_apm_server_route_repository.createApmServerRouteRepository)().add(transactionGroupsRoute).add(transactionGroupsMainStatisticsRoute).add(transactionGroupsDetailedStatisticsRoute).add(transactionLatencyChartsRoute).add(transactionThroughputChartsRoute).add(transactionChartsDistributionRoute).add(transactionChartsBreakdownRoute).add(transactionChartsErrorRateRoute);
exports.transactionRouteRepository = transactionRouteRepository;