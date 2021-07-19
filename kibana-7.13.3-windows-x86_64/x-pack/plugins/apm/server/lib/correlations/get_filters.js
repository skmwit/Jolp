"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCorrelationsFilters = getCorrelationsFilters;

var _queries = require("../../utils/queries");

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _processor_event = require("../../../common/processor_event");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function getCorrelationsFilters({
  setup,
  environment,
  kuery,
  serviceName,
  transactionType,
  transactionName
}) {
  const {
    start,
    end
  } = setup;
  const correlationsFilters = [{
    term: {
      [_elasticsearch_fieldnames.PROCESSOR_EVENT]: _processor_event.ProcessorEvent.transaction
    }
  }, ...(0, _queries.rangeQuery)(start, end), ...(0, _queries.environmentQuery)(environment), ...(0, _queries.kqlQuery)(kuery)];

  if (serviceName) {
    correlationsFilters.push({
      term: {
        [_elasticsearch_fieldnames.SERVICE_NAME]: serviceName
      }
    });
  }

  if (transactionType) {
    correlationsFilters.push({
      term: {
        [_elasticsearch_fieldnames.TRANSACTION_TYPE]: transactionType
      }
    });
  }

  if (transactionName) {
    correlationsFilters.push({
      term: {
        [_elasticsearch_fieldnames.TRANSACTION_NAME]: transactionName
      }
    });
  }

  return correlationsFilters;
}