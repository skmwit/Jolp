"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensurePreconfiguredPackagesAndPolicies = ensurePreconfiguredPackagesAndPolicies;

var _i18n = require("@kbn/i18n");

var _lodash = require("lodash");

var _constants = require("../constants");

var _saved_object = require("./saved_object");

var _registry = require("./epm/registry");

var _packages = require("./epm/packages");

var _install = require("./epm/packages/install");

var _bulk_install_packages = require("./epm/packages/bulk_install_packages");

var _agent_policy = require("./agent_policy");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function ensurePreconfiguredPackagesAndPolicies(soClient, esClient, policies = [], packages = [], defaultOutput) {
  // Validate configured packages to ensure there are no version conflicts
  const packageNames = (0, _lodash.groupBy)(packages, pkg => pkg.name);
  const duplicatePackages = Object.entries(packageNames).filter(([, versions]) => versions.length > 1);

  if (duplicatePackages.length) {
    // List duplicate packages as a comma-separated list of <package-name>:<semver>
    // If there are multiple packages with duplicate versions, separate them with semicolons, e.g
    // package-a:1.0.0, package-a:2.0.0; package-b:1.0.0, package-b:2.0.0
    const duplicateList = duplicatePackages.map(([, versions]) => versions.map(v => (0, _registry.pkgToPkgKey)(v)).join(', ')).join('; ');
    throw new Error(_i18n.i18n.translate('xpack.fleet.preconfiguration.duplicatePackageError', {
      defaultMessage: 'Duplicate packages specified in configuration: {duplicateList}',
      values: {
        duplicateList
      }
    }));
  } // Preinstall packages specified in Kibana config


  const preconfiguredPackages = await (0, _bulk_install_packages.bulkInstallPackages)({
    savedObjectsClient: soClient,
    esClient,
    packagesToInstall: packages.map(pkg => pkg.version === _constants.PRECONFIGURATION_LATEST_KEYWORD ? pkg.name : pkg),
    force: true // Always force outdated packages to be installed if a later version isn't installed

  });
  const fulfilledPackages = [];
  const rejectedPackages = [];

  for (let i = 0; i < preconfiguredPackages.length; i++) {
    const packageResult = preconfiguredPackages[i];
    if ('error' in packageResult) rejectedPackages.push({
      package: {
        name: packages[i].name,
        version: packages[i].version
      },
      error: packageResult.error
    });else fulfilledPackages.push(packageResult);
  } // Keeping this outside of the Promise.all because it introduces a race condition.
  // If one of the required packages fails to install/upgrade it might get stuck in the installing state.
  // On the next call to the /setup API, if there is a upgrade available for one of the required packages a race condition
  // will occur between upgrading the package and reinstalling the previously failed package.
  // By moving this outside of the Promise.all, the upgrade will occur first, and then we'll attempt to reinstall any
  // packages that are stuck in the installing state.


  await (0, _install.ensurePackagesCompletedInstall)(soClient, esClient); // Create policies specified in Kibana config

  const preconfiguredPolicies = await Promise.allSettled(policies.map(async preconfiguredAgentPolicy => {
    if (preconfiguredAgentPolicy.id) {
      // Check to see if a preconfigured policy with the same preconfiguration id was already deleted by the user
      const preconfigurationId = String(preconfiguredAgentPolicy.id);
      const searchParams = {
        searchFields: ['id'],
        search: (0, _saved_object.escapeSearchQueryPhrase)(preconfigurationId)
      };
      const deletionRecords = await soClient.find({
        type: _constants.PRECONFIGURATION_DELETION_RECORD_SAVED_OBJECT_TYPE,
        ...searchParams
      });
      const wasDeleted = deletionRecords.total > 0;

      if (wasDeleted) {
        return {
          created: false,
          deleted: preconfigurationId
        };
      }
    } else if (!preconfiguredAgentPolicy.is_default && !preconfiguredAgentPolicy.is_default_fleet_server) {
      throw new Error(_i18n.i18n.translate('xpack.fleet.preconfiguration.missingIDError', {
        defaultMessage: '{agentPolicyName} is missing an `id` field. `id` is required, except for policies marked is_default or is_default_fleet_server.',
        values: {
          agentPolicyName: preconfiguredAgentPolicy.name
        }
      }));
    }

    const {
      created,
      policy
    } = await _agent_policy.agentPolicyService.ensurePreconfiguredAgentPolicy(soClient, esClient, (0, _lodash.omit)(preconfiguredAgentPolicy, 'is_managed') // Don't add `is_managed` until the policy has been fully configured
    );
    if (!created) return {
      created,
      policy
    };
    const {
      package_policies: packagePolicies
    } = preconfiguredAgentPolicy;
    const installedPackagePolicies = await Promise.all(packagePolicies.map(async ({
      package: pkg,
      name,
      ...newPackagePolicy
    }) => {
      const installedPackage = await (0, _packages.getInstallation)({
        savedObjectsClient: soClient,
        pkgName: pkg.name
      });

      if (!installedPackage) {
        throw new Error(_i18n.i18n.translate('xpack.fleet.preconfiguration.packageMissingError', {
          defaultMessage: '{agentPolicyName} could not be added. {pkgName} is not installed, add {pkgName} to `{packagesConfigValue}` or remove it from {packagePolicyName}.',
          values: {
            agentPolicyName: preconfiguredAgentPolicy.name,
            packagePolicyName: name,
            pkgName: pkg.name,
            packagesConfigValue: 'xpack.fleet.packages'
          }
        }));
      }

      return {
        name,
        installedPackage,
        ...newPackagePolicy
      };
    }));
    return {
      created,
      policy,
      installedPackagePolicies,
      shouldAddIsManagedFlag: preconfiguredAgentPolicy.is_managed
    };
  }));
  const fulfilledPolicies = [];
  const rejectedPolicies = [];

  for (let i = 0; i < preconfiguredPolicies.length; i++) {
    const policyResult = preconfiguredPolicies[i];

    if (policyResult.status === 'rejected') {
      rejectedPolicies.push({
        error: policyResult.reason,
        agentPolicy: {
          name: policies[i].name
        }
      });
      continue;
    }

    fulfilledPolicies.push(policyResult.value);
    const {
      created,
      policy,
      installedPackagePolicies,
      shouldAddIsManagedFlag
    } = policyResult.value;

    if (created) {
      await addPreconfiguredPolicyPackages(soClient, esClient, policy, installedPackagePolicies, defaultOutput); // Add the is_managed flag after configuring package policies to avoid errors

      if (shouldAddIsManagedFlag) {
        _agent_policy.agentPolicyService.update(soClient, esClient, policy.id, {
          is_managed: true
        });
      }
    }
  }

  return {
    policies: fulfilledPolicies.map(p => p.policy ? {
      id: p.policy.id,
      updated_at: p.policy.updated_at
    } : {
      id: p.deleted,
      updated_at: _i18n.i18n.translate('xpack.fleet.preconfiguration.policyDeleted', {
        defaultMessage: 'Preconfigured policy {id} was deleted; skipping creation',
        values: {
          id: p.deleted
        }
      })
    }),
    packages: fulfilledPackages.map(pkg => (0, _registry.pkgToPkgKey)(pkg)),
    nonFatalErrors: [...rejectedPackages, ...rejectedPolicies]
  };
}

async function addPreconfiguredPolicyPackages(soClient, esClient, agentPolicy, installedPackagePolicies, defaultOutput) {
  // Add packages synchronously to avoid overwriting
  for (const {
    installedPackage,
    name,
    description,
    inputs
  } of installedPackagePolicies) {
    await (0, _agent_policy.addPackageToAgentPolicy)(soClient, esClient, installedPackage, agentPolicy, defaultOutput, name, description, policy => overridePackageInputs(policy, inputs));
  }
}

function overridePackageInputs(basePackagePolicy, inputsOverride) {
  if (!inputsOverride) return basePackagePolicy;
  const inputs = [...basePackagePolicy.inputs];
  const packageName = basePackagePolicy.package.name;

  for (const override of inputsOverride) {
    const originalInput = inputs.find(i => i.type === override.type);

    if (!originalInput) {
      const e = {
        error: new Error(_i18n.i18n.translate('xpack.fleet.packagePolicyInputOverrideError', {
          defaultMessage: 'Input type {inputType} does not exist on package {packageName}',
          values: {
            inputType: override.type,
            packageName
          }
        })),
        package: {
          name: packageName,
          version: basePackagePolicy.package.version
        }
      };
      throw e;
    }

    if (typeof override.enabled !== 'undefined') originalInput.enabled = override.enabled;
    if (typeof override.keep_enabled !== 'undefined') originalInput.keep_enabled = override.keep_enabled;

    if (override.vars) {
      try {
        deepMergeVars(override, originalInput);
      } catch (e) {
        const err = {
          error: new Error(_i18n.i18n.translate('xpack.fleet.packagePolicyVarOverrideError', {
            defaultMessage: 'Var {varName} does not exist on {inputType} of package {packageName}',
            values: {
              varName: e.message,
              inputType: override.type,
              packageName
            }
          })),
          package: {
            name: packageName,
            version: basePackagePolicy.package.version
          }
        };
        throw err;
      }
    }

    if (override.streams) {
      for (const stream of override.streams) {
        const originalStream = originalInput.streams.find(s => s.data_stream.dataset === stream.data_stream.dataset);

        if (!originalStream) {
          const e = {
            error: new Error(_i18n.i18n.translate('xpack.fleet.packagePolicyStreamOverrideError', {
              defaultMessage: 'Data stream {streamSet} does not exist on {inputType} of package {packageName}',
              values: {
                streamSet: stream.data_stream.dataset,
                inputType: override.type,
                packageName
              }
            })),
            package: {
              name: packageName,
              version: basePackagePolicy.package.version
            }
          };
          throw e;
        }

        if (typeof stream.enabled !== 'undefined') originalStream.enabled = stream.enabled;

        if (stream.vars) {
          try {
            deepMergeVars(stream, originalStream);
          } catch (e) {
            const err = {
              error: new Error(_i18n.i18n.translate('xpack.fleet.packagePolicyStreamVarOverrideError', {
                defaultMessage: 'Var {varName} does not exist on {streamSet} for {inputType} of package {packageName}',
                values: {
                  varName: e.message,
                  streamSet: stream.data_stream.dataset,
                  inputType: override.type,
                  packageName
                }
              })),
              package: {
                name: packageName,
                version: basePackagePolicy.package.version
              }
            };
            throw err;
          }
        }
      }
    }
  }

  return { ...basePackagePolicy,
    inputs
  };
}

function deepMergeVars(override, original) {
  for (const {
    name,
    ...val
  } of override.vars) {
    if (!original.vars || !Reflect.has(original.vars, name)) {
      throw new Error(name);
    }

    const originalVar = original.vars[name];
    Reflect.set(original.vars, name, { ...originalVar,
      ...val
    });
  }
}