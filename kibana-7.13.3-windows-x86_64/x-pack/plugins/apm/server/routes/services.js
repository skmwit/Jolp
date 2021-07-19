"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceRouteRepository = exports.serviceDependenciesRoute = exports.serviceInstancesMetadataDetails = void 0;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _ioTsUtils = require("@kbn/io-ts-utils");

var t = _interopRequireWildcard(require("io-ts"));

var _lodash = require("lodash");

var _latency_aggregation_types = require("../../common/latency_aggregation_types");

var _profiling = require("../../common/profiling");

var _aggregated_transactions = require("../lib/helpers/aggregated_transactions");

var _setup_request = require("../lib/helpers/setup_request");

var _annotations = require("../lib/services/annotations");

var _get_services = require("../lib/services/get_services");

var _get_service_agent_name = require("../lib/services/get_service_agent_name");

var _get_service_alerts = require("../lib/services/get_service_alerts");

var _get_service_dependencies = require("../lib/services/get_service_dependencies");

var _get_service_instance_metadata_details = require("../lib/services/get_service_instance_metadata_details");

var _get_service_error_group_detailed_statistics = require("../lib/services/get_service_error_groups/get_service_error_group_detailed_statistics");

var _get_service_error_group_main_statistics = require("../lib/services/get_service_error_groups/get_service_error_group_main_statistics");

var _detailed_statistics = require("../lib/services/get_service_instances/detailed_statistics");

var _main_statistics = require("../lib/services/get_service_instances/main_statistics");

var _get_service_metadata_details = require("../lib/services/get_service_metadata_details");

var _get_service_metadata_icons = require("../lib/services/get_service_metadata_icons");

var _get_service_node_metadata = require("../lib/services/get_service_node_metadata");

var _get_service_transaction_types = require("../lib/services/get_service_transaction_types");

var _get_throughput = require("../lib/services/get_throughput");

var _get_service_profiling_statistics = require("../lib/services/profiling/get_service_profiling_statistics");

var _get_service_profiling_timeline = require("../lib/services/profiling/get_service_profiling_timeline");

var _with_apm_span = require("../utils/with_apm_span");

var _create_apm_server_route = require("./create_apm_server_route");

var _create_apm_server_route_repository = require("./create_apm_server_route_repository");

var _default_api_types = require("./default_api_types");

var _offset_previous_period_coordinate = require("../../common/utils/offset_previous_period_coordinate");

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


const servicesRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services',
  params: t.type({
    query: t.intersection([_default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt])
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
      environment,
      kuery
    } = params.query;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return (0, _get_services.getServices)({
      environment,
      kuery,
      setup,
      searchAggregatedTransactions,
      logger
    });
  }
});
const serviceMetadataDetailsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/metadata/details',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: _default_api_types.rangeRt
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
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return (0, _get_service_metadata_details.getServiceMetadataDetails)({
      serviceName,
      setup,
      searchAggregatedTransactions
    });
  }
});
const serviceMetadataIconsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/metadata/icons',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: _default_api_types.rangeRt
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
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return (0, _get_service_metadata_icons.getServiceMetadataIcons)({
      serviceName,
      setup,
      searchAggregatedTransactions
    });
  }
});
const serviceAgentNameRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/agent_name',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: _default_api_types.rangeRt
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
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return (0, _get_service_agent_name.getServiceAgentName)({
      serviceName,
      setup,
      searchAggregatedTransactions
    });
  }
});
const serviceTransactionTypesRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/transaction_types',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: _default_api_types.rangeRt
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
    return (0, _get_service_transaction_types.getServiceTransactionTypes)({
      serviceName,
      setup,
      searchAggregatedTransactions: await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup)
    });
  }
});
const serviceNodeMetadataRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/node/{serviceNodeName}/metadata',
  params: t.type({
    path: t.type({
      serviceName: t.string,
      serviceNodeName: t.string
    }),
    query: t.intersection([_default_api_types.kueryRt, _default_api_types.rangeRt])
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
      serviceName,
      serviceNodeName
    } = params.path;
    const {
      kuery
    } = params.query;
    return (0, _get_service_node_metadata.getServiceNodeMetadata)({
      kuery,
      setup,
      serviceName,
      serviceNodeName
    });
  }
});
const serviceAnnotationsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/annotation/search',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([_default_api_types.environmentRt, _default_api_types.rangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      params,
      plugins,
      context,
      request,
      logger
    } = resources;
    const {
      serviceName
    } = params.path;
    const {
      environment
    } = params.query;
    const {
      observability
    } = plugins;
    const [annotationsClient, searchAggregatedTransactions] = await Promise.all([observability ? (0, _with_apm_span.withApmSpan)('get_scoped_annotations_client', () => observability.setup.getScopedAnnotationsClient(context, request)) : undefined, (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup)]);
    return (0, _annotations.getServiceAnnotations)({
      environment,
      setup,
      searchAggregatedTransactions,
      serviceName,
      annotationsClient,
      client: context.core.elasticsearch.client.asCurrentUser,
      logger
    });
  }
});
const serviceAnnotationsCreateRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'POST /api/apm/services/{serviceName}/annotation',
  options: {
    tags: ['access:apm', 'access:apm_write']
  },
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    body: t.intersection([t.type({
      '@timestamp': _ioTsUtils.isoToEpochRt,
      service: t.intersection([t.type({
        version: t.string
      }), t.partial({
        environment: t.string
      })])
    }), t.partial({
      message: t.string,
      tags: t.array(t.string)
    })])
  }),
  handler: async resources => {
    const {
      request,
      context,
      plugins: {
        observability
      },
      params
    } = resources;
    const annotationsClient = observability ? await (0, _with_apm_span.withApmSpan)('get_scoped_annotations_client', () => observability.setup.getScopedAnnotationsClient(context, request)) : undefined;

    if (!annotationsClient) {
      throw _boom.default.notFound();
    }

    const {
      body,
      path
    } = params;
    return (0, _with_apm_span.withApmSpan)('create_annotation', () => {
      var _body$tags;

      return annotationsClient.create({
        message: body.service.version,
        ...body,
        '@timestamp': new Date(body['@timestamp']).toISOString(),
        annotation: {
          type: 'deployment'
        },
        service: { ...body.service,
          name: path.serviceName
        },
        tags: (0, _lodash.uniq)(['apm'].concat((_body$tags = body.tags) !== null && _body$tags !== void 0 ? _body$tags : []))
      });
    });
  }
});
const serviceErrorGroupsMainStatisticsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/error_groups/main_statistics',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([_default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt, t.type({
      transactionType: t.string
    })])
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
      path: {
        serviceName
      },
      query: {
        kuery,
        transactionType,
        environment
      }
    } = params;
    return (0, _get_service_error_group_main_statistics.getServiceErrorGroupMainStatistics)({
      kuery,
      serviceName,
      setup,
      transactionType,
      environment
    });
  }
});
const serviceErrorGroupsDetailedStatisticsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/error_groups/detailed_statistics',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([_default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt, _default_api_types.comparisonRangeRt, t.type({
      numBuckets: _ioTsUtils.toNumberRt,
      transactionType: t.string,
      groupIds: _ioTsUtils.jsonRt.pipe(t.array(t.string))
    })])
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
      path: {
        serviceName
      },
      query: {
        environment,
        kuery,
        numBuckets,
        transactionType,
        groupIds,
        comparisonStart,
        comparisonEnd
      }
    } = params;
    return (0, _get_service_error_group_detailed_statistics.getServiceErrorGroupPeriods)({
      environment,
      kuery,
      serviceName,
      setup,
      numBuckets,
      transactionType,
      groupIds,
      comparisonStart,
      comparisonEnd
    });
  }
});
const serviceThroughputRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/throughput',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.type({
      transactionType: t.string
    }), _default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt, _default_api_types.comparisonRangeRt])
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
      comparisonStart,
      comparisonEnd
    } = params.query;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    const {
      start,
      end
    } = setup;
    const commonProps = {
      environment,
      kuery,
      searchAggregatedTransactions,
      serviceName,
      setup,
      transactionType
    };
    const [currentPeriod, previousPeriod] = await Promise.all([(0, _get_throughput.getThroughput)({ ...commonProps,
      start,
      end
    }), comparisonStart && comparisonEnd ? (0, _get_throughput.getThroughput)({ ...commonProps,
      start: comparisonStart,
      end: comparisonEnd
    }) : []]);
    return {
      currentPeriod,
      previousPeriod: (0, _offset_previous_period_coordinate.offsetPreviousPeriodCoordinates)({
        currentPeriodTimeseries: currentPeriod,
        previousPeriodTimeseries: previousPeriod
      })
    };
  }
});
const serviceInstancesMainStatisticsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/service_overview_instances/main_statistics',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.type({
      latencyAggregationType: _latency_aggregation_types.latencyAggregationTypeRt,
      transactionType: t.string
    }), _default_api_types.comparisonRangeRt, _default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt])
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
      latencyAggregationType,
      comparisonStart,
      comparisonEnd
    } = params.query;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    const {
      start,
      end
    } = setup;
    const [currentPeriod, previousPeriod] = await Promise.all([(0, _main_statistics.getServiceInstancesMainStatistics)({
      environment,
      kuery,
      latencyAggregationType,
      serviceName,
      setup,
      transactionType,
      searchAggregatedTransactions,
      start,
      end
    }), ...(comparisonStart && comparisonEnd ? [(0, _main_statistics.getServiceInstancesMainStatistics)({
      environment,
      kuery,
      latencyAggregationType,
      serviceName,
      setup,
      transactionType,
      searchAggregatedTransactions,
      start: comparisonStart,
      end: comparisonEnd
    })] : [])]);
    return {
      currentPeriod,
      previousPeriod
    };
  }
});
const serviceInstancesDetailedStatisticsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/service_overview_instances/detailed_statistics',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.type({
      latencyAggregationType: _latency_aggregation_types.latencyAggregationTypeRt,
      transactionType: t.string,
      serviceNodeIds: _ioTsUtils.jsonRt.pipe(t.array(t.string)),
      numBuckets: _ioTsUtils.toNumberRt
    }), _default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt, _default_api_types.comparisonRangeRt])
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
      comparisonStart,
      comparisonEnd,
      serviceNodeIds,
      numBuckets,
      latencyAggregationType
    } = params.query;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return (0, _detailed_statistics.getServiceInstancesDetailedStatisticsPeriods)({
      environment,
      kuery,
      latencyAggregationType,
      serviceName,
      setup,
      transactionType,
      searchAggregatedTransactions,
      numBuckets,
      serviceNodeIds,
      comparisonStart,
      comparisonEnd
    });
  }
});
const serviceInstancesMetadataDetails = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/service_overview_instances/details/{serviceNodeName}',
  params: t.type({
    path: t.type({
      serviceName: t.string,
      serviceNodeName: t.string
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
      serviceName,
      serviceNodeName
    } = resources.params.path;
    const {
      transactionType,
      environment,
      kuery
    } = resources.params.query;
    const searchAggregatedTransactions = await (0, _aggregated_transactions.getSearchAggregatedTransactions)(setup);
    return await (0, _get_service_instance_metadata_details.getServiceInstanceMetadataDetails)({
      searchAggregatedTransactions,
      setup,
      serviceName,
      serviceNodeName,
      transactionType,
      environment,
      kuery
    });
  }
});
exports.serviceInstancesMetadataDetails = serviceInstancesMetadataDetails;
const serviceDependenciesRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/dependencies',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([t.type({
      numBuckets: _ioTsUtils.toNumberRt
    }), _default_api_types.environmentRt, _default_api_types.rangeRt])
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
      numBuckets
    } = params.query;
    const serviceDependencies = await (0, _get_service_dependencies.getServiceDependencies)({
      serviceName,
      environment,
      setup,
      numBuckets
    });
    return {
      serviceDependencies
    };
  }
});
exports.serviceDependenciesRoute = serviceDependenciesRoute;
const serviceProfilingTimelineRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/profiling/timeline',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([_default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt])
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
      path: {
        serviceName
      },
      query: {
        environment,
        kuery
      }
    } = params;
    const profilingTimeline = await (0, _get_service_profiling_timeline.getServiceProfilingTimeline)({
      kuery,
      setup,
      serviceName,
      environment
    });
    return {
      profilingTimeline
    };
  }
});
const serviceProfilingStatisticsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/profiling/statistics',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([_default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt, t.type({
      valueType: t.union([t.literal(_profiling.ProfilingValueType.wallTime), t.literal(_profiling.ProfilingValueType.cpuTime), t.literal(_profiling.ProfilingValueType.samples), t.literal(_profiling.ProfilingValueType.allocObjects), t.literal(_profiling.ProfilingValueType.allocSpace), t.literal(_profiling.ProfilingValueType.inuseObjects), t.literal(_profiling.ProfilingValueType.inuseSpace)])
    })])
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
      path: {
        serviceName
      },
      query: {
        environment,
        kuery,
        valueType
      }
    } = params;
    return (0, _get_service_profiling_statistics.getServiceProfilingStatistics)({
      kuery,
      serviceName,
      environment,
      valueType,
      setup,
      logger
    });
  }
});
const serviceAlertsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/services/{serviceName}/alerts',
  params: t.type({
    path: t.type({
      serviceName: t.string
    }),
    query: t.intersection([_default_api_types.rangeRt, _default_api_types.environmentRt, t.type({
      transactionType: t.string
    })])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async ({
    context,
    params,
    apmRuleRegistry
  }) => {
    const alertsClient = context.alerting.getAlertsClient();
    const {
      query: {
        start,
        end,
        environment,
        transactionType
      },
      path: {
        serviceName
      }
    } = params;
    const apmRuleRegistryClient = await apmRuleRegistry.createScopedRuleRegistryClient({
      alertsClient,
      context
    });

    if (!apmRuleRegistryClient) {
      throw _boom.default.failedDependency('xpack.ruleRegistry.unsafe.write.enabled is set to false');
    }

    return {
      alerts: await (0, _get_service_alerts.getServiceAlerts)({
        apmRuleRegistryClient,
        start,
        end,
        serviceName,
        environment,
        transactionType
      })
    };
  }
});
const serviceRouteRepository = (0, _create_apm_server_route_repository.createApmServerRouteRepository)().add(servicesRoute).add(serviceMetadataDetailsRoute).add(serviceMetadataIconsRoute).add(serviceAgentNameRoute).add(serviceTransactionTypesRoute).add(serviceNodeMetadataRoute).add(serviceAnnotationsRoute).add(serviceAnnotationsCreateRoute).add(serviceErrorGroupsMainStatisticsRoute).add(serviceErrorGroupsDetailedStatisticsRoute).add(serviceInstancesMetadataDetails).add(serviceThroughputRoute).add(serviceInstancesMainStatisticsRoute).add(serviceInstancesDetailedStatisticsRoute).add(serviceDependenciesRoute).add(serviceProfilingTimelineRoute).add(serviceProfilingStatisticsRoute).add(serviceAlertsRoute);
exports.serviceRouteRepository = serviceRouteRepository;