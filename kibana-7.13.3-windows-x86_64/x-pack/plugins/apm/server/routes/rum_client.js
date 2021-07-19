"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rumRouteRepository = exports.percentileRangeRt = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _ioTsUtils = require("@kbn/io-ts-utils");

var _setup_request = require("../lib/helpers/setup_request");

var _get_client_metrics = require("../lib/rum_client/get_client_metrics");

var _get_js_errors = require("../lib/rum_client/get_js_errors");

var _get_long_task_metrics = require("../lib/rum_client/get_long_task_metrics");

var _get_page_load_distribution = require("../lib/rum_client/get_page_load_distribution");

var _get_page_view_trends = require("../lib/rum_client/get_page_view_trends");

var _get_pl_dist_breakdown = require("../lib/rum_client/get_pl_dist_breakdown");

var _get_rum_services = require("../lib/rum_client/get_rum_services");

var _get_url_search = require("../lib/rum_client/get_url_search");

var _get_visitor_breakdown = require("../lib/rum_client/get_visitor_breakdown");

var _get_web_core_vitals = require("../lib/rum_client/get_web_core_vitals");

var _has_rum_data = require("../lib/rum_client/has_rum_data");

var _local_ui_filters = require("../lib/rum_client/ui_filters/local_ui_filters");

var _config = require("../lib/rum_client/ui_filters/local_ui_filters/config");

var _rum_page_load_transactions = require("../projections/rum_page_load_transactions");

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


const percentileRangeRt = t.partial({
  minPercentile: t.string,
  maxPercentile: t.string
});
exports.percentileRangeRt = percentileRangeRt;
const uiFiltersRt = t.type({
  uiFilters: t.string
});
const uxQueryRt = t.intersection([uiFiltersRt, _default_api_types.rangeRt, t.partial({
  urlQuery: t.string,
  percentile: t.string
})]);
const rumClientMetricsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/rum/client-metrics',
  params: t.type({
    query: uxQueryRt
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      query: {
        urlQuery,
        percentile
      }
    } = resources.params;
    return (0, _get_client_metrics.getClientMetrics)({
      setup,
      urlQuery,
      percentile: percentile ? Number(percentile) : undefined
    });
  }
});
const rumPageLoadDistributionRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/rum-client/page-load-distribution',
  params: t.type({
    query: t.intersection([uxQueryRt, percentileRangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      query: {
        minPercentile,
        maxPercentile,
        urlQuery
      }
    } = resources.params;
    const pageLoadDistribution = await (0, _get_page_load_distribution.getPageLoadDistribution)({
      setup,
      minPercentile,
      maxPercentile,
      urlQuery
    });
    return {
      pageLoadDistribution
    };
  }
});
const rumPageLoadDistBreakdownRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/rum-client/page-load-distribution/breakdown',
  params: t.type({
    query: t.intersection([uxQueryRt, percentileRangeRt, t.type({
      breakdown: t.string
    })])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      query: {
        minPercentile,
        maxPercentile,
        breakdown,
        urlQuery
      }
    } = resources.params;
    const pageLoadDistBreakdown = await (0, _get_pl_dist_breakdown.getPageLoadDistBreakdown)({
      setup,
      minPercentile: Number(minPercentile),
      maxPercentile: Number(maxPercentile),
      breakdown,
      urlQuery
    });
    return {
      pageLoadDistBreakdown
    };
  }
});
const rumPageViewsTrendRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/rum-client/page-view-trends',
  params: t.type({
    query: t.intersection([uxQueryRt, t.partial({
      breakdowns: t.string
    })])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      query: {
        breakdowns,
        urlQuery
      }
    } = resources.params;
    return (0, _get_page_view_trends.getPageViewTrends)({
      setup,
      breakdowns,
      urlQuery
    });
  }
});
const rumServicesRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/rum-client/services',
  params: t.type({
    query: t.intersection([uiFiltersRt, _default_api_types.rangeRt])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const rumServices = await (0, _get_rum_services.getRumServices)({
      setup
    });
    return {
      rumServices
    };
  }
});
const rumVisitorsBreakdownRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/rum-client/visitor-breakdown',
  params: t.type({
    query: uxQueryRt
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      query: {
        urlQuery
      }
    } = resources.params;
    return (0, _get_visitor_breakdown.getVisitorBreakdown)({
      setup,
      urlQuery
    });
  }
});
const rumWebCoreVitals = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/rum-client/web-core-vitals',
  params: t.type({
    query: uxQueryRt
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      query: {
        urlQuery,
        percentile
      }
    } = resources.params;
    return (0, _get_web_core_vitals.getWebCoreVitals)({
      setup,
      urlQuery,
      percentile: percentile ? Number(percentile) : undefined
    });
  }
});
const rumLongTaskMetrics = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/rum-client/long-task-metrics',
  params: t.type({
    query: uxQueryRt
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      query: {
        urlQuery,
        percentile
      }
    } = resources.params;
    return (0, _get_long_task_metrics.getLongTaskMetrics)({
      setup,
      urlQuery,
      percentile: percentile ? Number(percentile) : undefined
    });
  }
});
const rumUrlSearch = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/rum-client/url-search',
  params: t.type({
    query: uxQueryRt
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      query: {
        urlQuery,
        percentile
      }
    } = resources.params;
    return (0, _get_url_search.getUrlSearch)({
      setup,
      urlQuery,
      percentile: Number(percentile)
    });
  }
});
const rumJSErrors = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/rum-client/js-errors',
  params: t.type({
    query: t.intersection([uiFiltersRt, _default_api_types.rangeRt, t.type({
      pageSize: t.string,
      pageIndex: t.string
    }), t.partial({
      urlQuery: t.string
    })])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      query: {
        pageSize,
        pageIndex,
        urlQuery
      }
    } = resources.params;
    return (0, _get_js_errors.getJSErrors)({
      setup,
      urlQuery,
      pageSize: Number(pageSize),
      pageIndex: Number(pageIndex)
    });
  }
});
const rumHasDataRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /api/apm/observability_overview/has_rum_data',
  params: t.partial({
    query: t.partial({
      uiFilters: t.string,
      start: _ioTsUtils.isoToEpochRt,
      end: _ioTsUtils.isoToEpochRt
    })
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    return await (0, _has_rum_data.hasRumData)({
      setup
    });
  }
}); // Everything below here was originally in ui_filters.ts but now is here, since
// UX is the only part of APM using UI filters now.

const filterNamesRt = t.type({
  filterNames: _ioTsUtils.jsonRt.pipe(t.array(t.keyof(Object.fromEntries(_config.localUIFilterNames.map(filterName => [filterName, null])))))
});
const localUiBaseQueryRt = t.intersection([filterNamesRt, uiFiltersRt, _default_api_types.rangeRt]);

function createLocalFiltersRoute({
  endpoint,
  getProjection,
  queryRt
}) {
  return (0, _create_apm_server_route.createApmServerRoute)({
    endpoint,
    params: t.type({
      query: t.intersection([localUiBaseQueryRt, queryRt])
    }),
    options: {
      tags: ['access:apm']
    },
    handler: async resources => {
      const setup = await (0, _setup_request.setupRequest)(resources);
      const {
        uiFilters
      } = setup;
      const {
        query
      } = resources.params;
      const {
        filterNames
      } = query;
      const projection = await getProjection({
        query,
        resources,
        setup
      });
      const localUiFilters = await (0, _local_ui_filters.getLocalUIFilters)({
        projection,
        setup,
        uiFilters,
        localFilterNames: filterNames
      });
      return {
        localUiFilters
      };
    }
  });
}

const rumOverviewLocalFiltersRoute = createLocalFiltersRoute({
  endpoint: 'GET /api/apm/rum/local_filters',
  getProjection: async ({
    setup
  }) => {
    return (0, _rum_page_load_transactions.getRumPageLoadTransactionsProjection)({
      setup
    });
  },
  queryRt: t.type({})
});
const rumRouteRepository = (0, _create_apm_server_route_repository.createApmServerRouteRepository)().add(rumClientMetricsRoute).add(rumPageLoadDistributionRoute).add(rumPageLoadDistBreakdownRoute).add(rumPageViewsTrendRoute).add(rumServicesRoute).add(rumVisitorsBreakdownRoute).add(rumWebCoreVitals).add(rumLongTaskMetrics).add(rumUrlSearch).add(rumJSErrors).add(rumHasDataRoute).add(rumOverviewLocalFiltersRoute);
exports.rumRouteRepository = rumRouteRepository;