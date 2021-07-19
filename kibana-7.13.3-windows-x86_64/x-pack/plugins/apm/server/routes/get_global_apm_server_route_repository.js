"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobalApmServerRouteRepository = void 0;

var _chart_preview = require("./alerts/chart_preview");

var _correlations = require("./correlations");

var _create_apm_server_route_repository = require("./create_apm_server_route_repository");

var _environments = require("./environments");

var _errors = require("./errors");

var _index_pattern = require("./index_pattern");

var _metrics = require("./metrics");

var _observability_overview = require("./observability_overview");

var _rum_client = require("./rum_client");

var _services = require("./services");

var _service_map = require("./service_map");

var _service_nodes = require("./service_nodes");

var _agent_configuration = require("./settings/agent_configuration");

var _anomaly_detection = require("./settings/anomaly_detection");

var _apm_indices = require("./settings/apm_indices");

var _custom_link = require("./settings/custom_link");

var _traces = require("./traces");

var _transactions = require("./transactions");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getTypedGlobalApmServerRouteRepository = () => {
  const repository = (0, _create_apm_server_route_repository.createApmServerRouteRepository)().merge(_index_pattern.indexPatternRouteRepository).merge(_environments.environmentsRouteRepository).merge(_errors.errorsRouteRepository).merge(_metrics.metricsRouteRepository).merge(_observability_overview.observabilityOverviewRouteRepository).merge(_rum_client.rumRouteRepository).merge(_service_map.serviceMapRouteRepository).merge(_service_nodes.serviceNodeRouteRepository).merge(_services.serviceRouteRepository).merge(_traces.traceRouteRepository).merge(_transactions.transactionRouteRepository).merge(_chart_preview.alertsChartPreviewRouteRepository).merge(_correlations.correlationsRouteRepository).merge(_agent_configuration.agentConfigurationRouteRepository).merge(_anomaly_detection.anomalyDetectionRouteRepository).merge(_apm_indices.apmIndicesRouteRepository).merge(_custom_link.customLinkRouteRepository);
  return repository;
};

const getGlobalApmServerRouteRepository = () => {
  return getTypedGlobalApmServerRouteRepository();
};

exports.getGlobalApmServerRouteRepository = getGlobalApmServerRouteRepository;

function assertType() {} // if any endpoint has an array-like return type, the assertion below will fail


assertType();