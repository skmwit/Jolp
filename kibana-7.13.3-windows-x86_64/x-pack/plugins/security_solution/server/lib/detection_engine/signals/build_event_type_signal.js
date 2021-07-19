"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEventTypeSignal = exports.buildEventTypeSignal = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const buildEventTypeSignal = doc => {
  var _doc$_source, _doc$_source2;

  if (((_doc$_source = doc._source) === null || _doc$_source === void 0 ? void 0 : _doc$_source.event) != null && ((_doc$_source2 = doc._source) === null || _doc$_source2 === void 0 ? void 0 : _doc$_source2.event) instanceof Object) {
    return { ...doc._source.event,
      kind: 'signal'
    };
  } else {
    return {
      kind: 'signal'
    };
  }
};
/**
 * Given a document this will return true if that document is a signal
 * document. We can't guarantee the code will call this function with a document
 * before adding the _source.event.kind = "signal" from "buildEventTypeSignal"
 * so we do basic testing to ensure that if the object has the fields of:
 * "signal.rule.id" then it will be one of our signals rather than a customer
 * overwritten signal.
 * @param doc The document which might be a signal or it might be a regular log
 */


exports.buildEventTypeSignal = buildEventTypeSignal;

const isEventTypeSignal = doc => {
  var _doc$_source3, _doc$_source3$signal, _doc$_source3$signal$, _doc$_source4, _doc$_source4$signal, _doc$_source4$signal$;

  return ((_doc$_source3 = doc._source) === null || _doc$_source3 === void 0 ? void 0 : (_doc$_source3$signal = _doc$_source3.signal) === null || _doc$_source3$signal === void 0 ? void 0 : (_doc$_source3$signal$ = _doc$_source3$signal.rule) === null || _doc$_source3$signal$ === void 0 ? void 0 : _doc$_source3$signal$.id) != null && typeof ((_doc$_source4 = doc._source) === null || _doc$_source4 === void 0 ? void 0 : (_doc$_source4$signal = _doc$_source4.signal) === null || _doc$_source4$signal === void 0 ? void 0 : (_doc$_source4$signal$ = _doc$_source4$signal.rule) === null || _doc$_source4$signal$ === void 0 ? void 0 : _doc$_source4$signal$.id) === 'string';
};

exports.isEventTypeSignal = isEventTypeSignal;