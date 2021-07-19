"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrustedAppVersionConflictError = exports.TrustedAppNotFoundError = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/* eslint-disable max-classes-per-file */

class TrustedAppNotFoundError extends Error {
  constructor(id) {
    super(`Trusted Application (${id}) not found`);
  }

}

exports.TrustedAppNotFoundError = TrustedAppNotFoundError;

class TrustedAppVersionConflictError extends Error {
  constructor(id, sourceError) {
    super(`Trusted Application (${id}) has been updated since last retrieved`);
    this.sourceError = sourceError;
  }

}

exports.TrustedAppVersionConflictError = TrustedAppVersionConflictError;