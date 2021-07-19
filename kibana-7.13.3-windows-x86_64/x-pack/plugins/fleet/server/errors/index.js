"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isESClientError", {
  enumerable: true,
  get: function () {
    return _utils.isESClientError;
  }
});
Object.defineProperty(exports, "defaultIngestErrorHandler", {
  enumerable: true,
  get: function () {
    return _handlers.defaultIngestErrorHandler;
  }
});
Object.defineProperty(exports, "ingestErrorToResponseOptions", {
  enumerable: true,
  get: function () {
    return _handlers.ingestErrorToResponseOptions;
  }
});
Object.defineProperty(exports, "isLegacyESClientError", {
  enumerable: true,
  get: function () {
    return _handlers.isLegacyESClientError;
  }
});
exports.ArtifactsElasticsearchError = exports.ArtifactsClientAccessDeniedError = exports.ArtifactsClientError = exports.GenerateServiceTokenError = exports.FleetSetupError = exports.HostedAgentPolicyRestrictionRelatedError = exports.AgentReassignmentError = exports.ConcurrentInstallOperationError = exports.PackageOperationNotSupportedError = exports.PackageCacheError = exports.PackageInvalidArchiveError = exports.PackageUnsupportedMediaTypeError = exports.AgentPolicyNameExistsError = exports.AgentNotFoundError = exports.AgentPolicyError = exports.PackageOutdatedError = exports.PackageKeyInvalidError = exports.PackageNotFoundError = exports.RegistryResponseError = exports.RegistryConnectionError = exports.RegistryError = exports.IngestManagerError = void 0;

var _utils = require("./utils");

var _handlers = require("./handlers");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class IngestManagerError extends Error {
  constructor(message, meta) {
    super(message);
    this.meta = meta;
    this.name = this.constructor.name; // for stack traces
  }

}

exports.IngestManagerError = IngestManagerError;

class RegistryError extends IngestManagerError {}

exports.RegistryError = RegistryError;

class RegistryConnectionError extends RegistryError {}

exports.RegistryConnectionError = RegistryConnectionError;

class RegistryResponseError extends RegistryError {
  constructor(message, status) {
    super(message);
    this.status = status;
  }

}

exports.RegistryResponseError = RegistryResponseError;

class PackageNotFoundError extends IngestManagerError {}

exports.PackageNotFoundError = PackageNotFoundError;

class PackageKeyInvalidError extends IngestManagerError {}

exports.PackageKeyInvalidError = PackageKeyInvalidError;

class PackageOutdatedError extends IngestManagerError {}

exports.PackageOutdatedError = PackageOutdatedError;

class AgentPolicyError extends IngestManagerError {}

exports.AgentPolicyError = AgentPolicyError;

class AgentNotFoundError extends IngestManagerError {}

exports.AgentNotFoundError = AgentNotFoundError;

class AgentPolicyNameExistsError extends AgentPolicyError {}

exports.AgentPolicyNameExistsError = AgentPolicyNameExistsError;

class PackageUnsupportedMediaTypeError extends IngestManagerError {}

exports.PackageUnsupportedMediaTypeError = PackageUnsupportedMediaTypeError;

class PackageInvalidArchiveError extends IngestManagerError {}

exports.PackageInvalidArchiveError = PackageInvalidArchiveError;

class PackageCacheError extends IngestManagerError {}

exports.PackageCacheError = PackageCacheError;

class PackageOperationNotSupportedError extends IngestManagerError {}

exports.PackageOperationNotSupportedError = PackageOperationNotSupportedError;

class ConcurrentInstallOperationError extends IngestManagerError {}

exports.ConcurrentInstallOperationError = ConcurrentInstallOperationError;

class AgentReassignmentError extends IngestManagerError {}

exports.AgentReassignmentError = AgentReassignmentError;

class HostedAgentPolicyRestrictionRelatedError extends IngestManagerError {
  constructor(message = 'Cannot perform that action') {
    super(`${message} in Fleet because the agent policy is managed by an external orchestration solution, such as Elastic Cloud, Kubernetes, etc. Please make changes using your orchestration solution.`);
  }

}

exports.HostedAgentPolicyRestrictionRelatedError = HostedAgentPolicyRestrictionRelatedError;

class FleetSetupError extends IngestManagerError {}

exports.FleetSetupError = FleetSetupError;

class GenerateServiceTokenError extends IngestManagerError {}

exports.GenerateServiceTokenError = GenerateServiceTokenError;

class ArtifactsClientError extends IngestManagerError {}

exports.ArtifactsClientError = ArtifactsClientError;

class ArtifactsClientAccessDeniedError extends IngestManagerError {
  constructor(deniedPackageName, allowedPackageName) {
    super(`Access denied. Artifact package name (${deniedPackageName}) does not match ${allowedPackageName}`);
  }

}

exports.ArtifactsClientAccessDeniedError = ArtifactsClientAccessDeniedError;

class ArtifactsElasticsearchError extends IngestManagerError {
  constructor(meta) {
    var _meta$meta$body, _meta$meta$body$error, _meta$meta$body2, _meta$meta$body2$erro;

    super(`${(0, _utils.isESClientError)(meta) && (_meta$meta$body = meta.meta.body) !== null && _meta$meta$body !== void 0 && (_meta$meta$body$error = _meta$meta$body.error) !== null && _meta$meta$body$error !== void 0 && _meta$meta$body$error.reason ? (_meta$meta$body2 = meta.meta.body) === null || _meta$meta$body2 === void 0 ? void 0 : (_meta$meta$body2$erro = _meta$meta$body2.error) === null || _meta$meta$body2$erro === void 0 ? void 0 : _meta$meta$body2$erro.reason : `Elasticsearch error while working with artifacts: ${meta.message}`}`);
    this.meta = meta;

    _defineProperty(this, "requestDetails", void 0);

    if ((0, _utils.isESClientError)(meta)) {
      const {
        method,
        path,
        querystring = '',
        body = ''
      } = meta.meta.meta.request.params;
      this.requestDetails = `${method} ${path}${querystring ? `?${querystring}` : ''}${body ? `\n${body}` : ''}`;
    } else {
      this.requestDetails = 'unable to determine request details';
    }
  }

}

exports.ArtifactsElasticsearchError = ArtifactsElasticsearchError;