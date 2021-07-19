"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EndpointArtifactClient = void 0;

var _zlib = require("zlib");

var _util = require("util");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const inflateAsync = (0, _util.promisify)(_zlib.inflate);
/**
 * Endpoint specific artifact management client which uses FleetArtifactsClient to persist artifacts
 * to the Fleet artifacts index (then used by Fleet Server)
 */

class EndpointArtifactClient {
  constructor(fleetArtifacts) {
    this.fleetArtifacts = fleetArtifacts;
  }

  parseArtifactId(id) {
    const idPieces = id.split('-');
    return {
      type: idPieces[1],
      decodedSha256: idPieces.pop(),
      identifier: idPieces.join('-')
    };
  }

  async getArtifact(id) {
    const {
      decodedSha256,
      identifier
    } = this.parseArtifactId(id);
    const artifacts = await this.fleetArtifacts.listArtifacts({
      kuery: `decoded_sha256: "${decodedSha256}" AND identifier: "${identifier}"`,
      perPage: 1
    });

    if (artifacts.items.length === 0) {
      return;
    }

    return artifacts.items[0];
  }

  async createArtifact(artifact) {
    // FIXME:PT refactor to make this more efficient by passing through the uncompressed artifact content
    // Artifact `.body` is compressed/encoded. We need it decoded and as a string
    const artifactContent = await inflateAsync(Buffer.from(artifact.body, 'base64'));
    const createdArtifact = await this.fleetArtifacts.createArtifact({
      content: artifactContent.toString(),
      identifier: artifact.identifier,
      type: this.parseArtifactId(artifact.identifier).type
    });
    return createdArtifact;
  }

  async deleteArtifact(id) {
    var _await$this$getArtifa; // Ignoring the `id` not being in the type until we can refactor the types in endpoint.
    // @ts-ignore


    const artifactId = (_await$this$getArtifa = await this.getArtifact(id)) === null || _await$this$getArtifa === void 0 ? void 0 : _await$this$getArtifa.id;
    return this.fleetArtifacts.deleteArtifact(artifactId);
  }

}

exports.EndpointArtifactClient = EndpointArtifactClient;