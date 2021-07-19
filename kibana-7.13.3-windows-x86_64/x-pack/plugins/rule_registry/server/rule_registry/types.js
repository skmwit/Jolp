"use strict";
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

var ILMPolicyPhase;

(function (ILMPolicyPhase) {
  ILMPolicyPhase["hot"] = "hot";
  ILMPolicyPhase["delete"] = "delete";
})(ILMPolicyPhase || (ILMPolicyPhase = {}));

var ILMPolicyAction;

(function (ILMPolicyAction) {
  ILMPolicyAction["rollover"] = "rollover";
  ILMPolicyAction["delete"] = "delete";
})(ILMPolicyAction || (ILMPolicyAction = {}));