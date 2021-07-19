"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPackageVersionOrLaterInstalled = isPackageVersionOrLaterInstalled;
exports.ensureInstalledPackage = ensureInstalledPackage;
exports.handleInstallPackageFailure = handleInstallPackageFailure;
exports.installPackage = installPackage;
exports.createInstallation = createInstallation;
exports.ensurePackagesCompletedInstall = ensurePackagesCompletedInstall;
exports.getInstallType = getInstallType;
exports.removeAssetsFromInstalledEsByType = exports.saveInstalledEsRefs = exports.saveKibanaAssetsRefs = exports.updateVersion = void 0;

var _i18n = require("@kbn/i18n");

var _lt = _interopRequireDefault(require("semver/functions/lt"));

var _template = require("../elasticsearch/template/template");

var _errors = require("../../../errors");

var _constants = require("../../../constants");

var _app_context = require("../../app_context");

var Registry = _interopRequireWildcard(require("../registry"));

var _archive = require("../archive");

var _install = require("../kibana/assets/install");

var _install2 = require("../kibana/index_pattern/install");

var _index = require("./index");

var _remove = require("./remove");

var _get = require("./get");

var _install_package = require("./_install_package");

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


async function isPackageVersionOrLaterInstalled(options) {
  const {
    savedObjectsClient,
    pkgName,
    pkgVersion
  } = options;
  const installedPackageObject = await (0, _index.getInstallationObject)({
    savedObjectsClient,
    pkgName
  });
  const installedPackage = installedPackageObject === null || installedPackageObject === void 0 ? void 0 : installedPackageObject.attributes;

  if (installedPackage && (installedPackage.version === pkgVersion || (0, _lt.default)(pkgVersion, installedPackage.version))) {
    let installType;

    try {
      installType = getInstallType({
        pkgVersion,
        installedPkg: installedPackageObject
      });
    } catch (e) {
      installType = 'unknown';
    }

    return {
      package: installedPackage,
      installType
    };
  }

  return false;
}

async function ensureInstalledPackage(options) {
  const {
    savedObjectsClient,
    pkgName,
    esClient,
    pkgVersion
  } = options; // If pkgVersion isn't specified, find the latest package version

  const pkgKeyProps = pkgVersion ? {
    name: pkgName,
    version: pkgVersion
  } : await Registry.fetchFindLatestPackage(pkgName);
  const installedPackageResult = await isPackageVersionOrLaterInstalled({
    savedObjectsClient,
    pkgName: pkgKeyProps.name,
    pkgVersion: pkgKeyProps.version
  });

  if (installedPackageResult) {
    return installedPackageResult.package;
  }

  const pkgkey = Registry.pkgToPkgKey(pkgKeyProps);
  const installResult = await installPackage({
    installSource: 'registry',
    savedObjectsClient,
    pkgkey,
    esClient,
    force: true // Always force outdated packages to be installed if a later version isn't installed

  });

  if (installResult.error) {
    const errorPrefix = installResult.installType === 'update' || installResult.installType === 'reupdate' ? _i18n.i18n.translate('xpack.fleet.epm.install.packageUpdateError', {
      defaultMessage: 'Error updating {pkgName} to {pkgVersion}',
      values: {
        pkgName: pkgKeyProps.name,
        pkgVersion: pkgKeyProps.version
      }
    }) : _i18n.i18n.translate('xpack.fleet.epm.install.packageInstallError', {
      defaultMessage: 'Error installing {pkgName} {pkgVersion}',
      values: {
        pkgName: pkgKeyProps.name,
        pkgVersion: pkgKeyProps.version
      }
    });
    throw new Error(`${errorPrefix}: ${installResult.error.message}`);
  }

  const installation = await (0, _index.getInstallation)({
    savedObjectsClient,
    pkgName
  });
  if (!installation) throw new Error(`could not get installation ${pkgName}`);
  return installation;
}

async function handleInstallPackageFailure({
  savedObjectsClient,
  error,
  pkgName,
  pkgVersion,
  installedPkg,
  esClient
}) {
  if (error instanceof _errors.IngestManagerError) {
    return;
  }

  const logger = _app_context.appContextService.getLogger();

  const pkgkey = Registry.pkgToPkgKey({
    name: pkgName,
    version: pkgVersion
  }); // if there is an unknown server error, uninstall any package assets or reinstall the previous version if update

  try {
    const installType = getInstallType({
      pkgVersion,
      installedPkg
    });

    if (installType === 'install' || installType === 'reinstall') {
      logger.error(`uninstalling ${pkgkey} after error installing`);
      await (0, _remove.removeInstallation)({
        savedObjectsClient,
        pkgkey,
        esClient
      });
    }

    if (installType === 'update') {
      if (!installedPkg) {
        logger.error(`failed to rollback package after installation error ${error} because saved object was undefined`);
        return;
      }

      const prevVersion = `${pkgName}-${installedPkg.attributes.version}`;
      logger.error(`rolling back to ${prevVersion} after error installing ${pkgkey}`);
      await installPackage({
        installSource: 'registry',
        savedObjectsClient,
        pkgkey: prevVersion,
        esClient,
        force: true
      });
    }
  } catch (e) {
    logger.error(`failed to uninstall or rollback package after installation error ${e}`);
  }
}

async function installPackageFromRegistry({
  savedObjectsClient,
  pkgkey,
  esClient,
  force = false
}) {
  const logger = _app_context.appContextService.getLogger(); // TODO: change epm API to /packageName/version so we don't need to do this


  const {
    pkgName,
    pkgVersion
  } = Registry.splitPkgKey(pkgkey); // if an error happens during getInstallType, report that we don't know

  let installType = 'unknown';

  try {
    // get the currently installed package
    const installedPkg = await (0, _index.getInstallationObject)({
      savedObjectsClient,
      pkgName
    });
    installType = getInstallType({
      pkgVersion,
      installedPkg
    }); // get latest package version

    const latestPackage = await Registry.fetchFindLatestPackage(pkgName); // let the user install if using the force flag or needing to reinstall or install a previous version due to failed update

    const installOutOfDateVersionOk = force || ['reinstall', 'reupdate', 'rollback'].includes(installType); // if the requested version is the same as installed version, check if we allow it based on
    // current installed package status and force flag, if we don't allow it,
    // just return the asset references from the existing installation

    if ((installedPkg === null || installedPkg === void 0 ? void 0 : installedPkg.attributes.version) === pkgVersion && (installedPkg === null || installedPkg === void 0 ? void 0 : installedPkg.attributes.install_status) === 'installed') {
      if (!force) {
        logger.debug(`${pkgkey} is already installed, skipping installation`);
        return {
          assets: [...installedPkg.attributes.installed_es, ...installedPkg.attributes.installed_kibana],
          status: 'already_installed',
          installType
        };
      }
    } // if the requested version is out-of-date of the latest package version, check if we allow it
    // if we don't allow it, return an error


    if ((0, _lt.default)(pkgVersion, latestPackage.version)) {
      if (!installOutOfDateVersionOk) {
        throw new _errors.PackageOutdatedError(`${pkgkey} is out-of-date and cannot be installed or updated`);
      }

      logger.debug(`${pkgkey} is out-of-date, installing anyway due to ${force ? 'force flag' : `install type ${installType}`}`);
    } // get package info


    const {
      paths,
      packageInfo
    } = await Registry.getRegistryPackage(pkgName, pkgVersion); // try installing the package, if there was an error, call error handler and rethrow
    // TODO: without the ts-ignore, TS complains about the type of the value of the returned InstallResult.status
    // @ts-ignore

    return (0, _install_package._installPackage)({
      savedObjectsClient,
      esClient,
      installedPkg,
      paths,
      packageInfo,
      installType,
      installSource: 'registry'
    }).then(assets => {
      return {
        assets,
        status: 'installed',
        installType
      };
    }).catch(async err => {
      await handleInstallPackageFailure({
        savedObjectsClient,
        error: err,
        pkgName,
        pkgVersion,
        installedPkg,
        esClient
      });
      return {
        error: err,
        installType
      };
    });
  } catch (e) {
    return {
      error: e,
      installType
    };
  }
}

async function installPackageByUpload({
  savedObjectsClient,
  esClient,
  archiveBuffer,
  contentType
}) {
  // if an error happens during getInstallType, report that we don't know
  let installType = 'unknown';

  try {
    const {
      packageInfo
    } = await (0, _archive.parseAndVerifyArchiveEntries)(archiveBuffer, contentType);
    const installedPkg = await (0, _index.getInstallationObject)({
      savedObjectsClient,
      pkgName: packageInfo.name
    });
    installType = getInstallType({
      pkgVersion: packageInfo.version,
      installedPkg
    });

    if (installType !== 'install') {
      throw new _errors.PackageOperationNotSupportedError(`Package upload only supports fresh installations. Package ${packageInfo.name} is already installed, please uninstall first.`);
    }

    const installSource = 'upload';
    const paths = await (0, _archive.unpackBufferToCache)({
      name: packageInfo.name,
      version: packageInfo.version,
      installSource,
      archiveBuffer,
      contentType
    });
    (0, _archive.setPackageInfo)({
      name: packageInfo.name,
      version: packageInfo.version,
      packageInfo
    }); // TODO: without the ts-ignore, TS complains about the type of the value of the returned InstallResult.status
    // @ts-ignore

    return (0, _install_package._installPackage)({
      savedObjectsClient,
      esClient,
      installedPkg,
      paths,
      packageInfo,
      installType,
      installSource
    }).then(assets => {
      return {
        assets,
        status: 'installed',
        installType
      };
    }).catch(async err => {
      return {
        error: err,
        installType
      };
    });
  } catch (e) {
    return {
      error: e,
      installType
    };
  }
}

async function installPackage(args) {
  if (!('installSource' in args)) {
    throw new Error('installSource is required');
  }

  const logger = _app_context.appContextService.getLogger();

  const {
    savedObjectsClient,
    esClient,
    skipPostInstall = false,
    installSource
  } = args;

  if (args.installSource === 'registry') {
    const {
      pkgkey,
      force
    } = args;
    const {
      pkgName,
      pkgVersion
    } = Registry.splitPkgKey(pkgkey);
    logger.debug(`kicking off install of ${pkgkey} from registry`);
    const response = installPackageFromRegistry({
      savedObjectsClient,
      pkgkey,
      esClient,
      force
    }).then(async installResult => {
      if (skipPostInstall || installResult.error) {
        return installResult;
      }

      logger.debug(`install of ${pkgkey} finished, running post-install`);
      return (0, _install2.installIndexPatterns)({
        savedObjectsClient,
        esClient,
        pkgName,
        pkgVersion,
        installSource
      }).then(() => installResult);
    });
    return response;
  } else if (args.installSource === 'upload') {
    const {
      archiveBuffer,
      contentType
    } = args;
    logger.debug(`kicking off install of uploaded package`);
    const response = installPackageByUpload({
      savedObjectsClient,
      esClient,
      archiveBuffer,
      contentType
    }).then(async installResult => {
      if (skipPostInstall || installResult.error) {
        return installResult;
      }

      logger.debug(`install of uploaded package finished, running post-install`);
      return (0, _install2.installIndexPatterns)({
        savedObjectsClient,
        esClient,
        installSource
      }).then(() => installResult);
    });
    return response;
  } // @ts-expect-error s/b impossibe b/c `never` by this point, but just in case


  throw new Error(`Unknown installSource: ${args.installSource}`);
}

const updateVersion = async (savedObjectsClient, pkgName, pkgVersion) => {
  return savedObjectsClient.update(_constants.PACKAGES_SAVED_OBJECT_TYPE, pkgName, {
    version: pkgVersion
  });
};

exports.updateVersion = updateVersion;

async function createInstallation(options) {
  const {
    savedObjectsClient,
    packageInfo,
    installSource
  } = options;
  const {
    internal = false,
    name: pkgName,
    version: pkgVersion
  } = packageInfo;
  const removable = !(0, _index.isRequiredPackage)(pkgName);
  const toSaveESIndexPatterns = (0, _template.generateESIndexPatterns)(packageInfo.data_streams);
  const created = await savedObjectsClient.create(_constants.PACKAGES_SAVED_OBJECT_TYPE, {
    installed_kibana: [],
    installed_es: [],
    package_assets: [],
    es_index_patterns: toSaveESIndexPatterns,
    name: pkgName,
    version: pkgVersion,
    internal,
    removable,
    install_version: pkgVersion,
    install_status: 'installing',
    install_started_at: new Date().toISOString(),
    install_source: installSource
  }, {
    id: pkgName,
    overwrite: true
  });
  return created;
}

const saveKibanaAssetsRefs = async (savedObjectsClient, pkgName, kibanaAssets) => {
  const assetRefs = Object.values(kibanaAssets).flat().map(_install.toAssetReference);
  await savedObjectsClient.update(_constants.PACKAGES_SAVED_OBJECT_TYPE, pkgName, {
    installed_kibana: assetRefs
  });
  return assetRefs;
};

exports.saveKibanaAssetsRefs = saveKibanaAssetsRefs;

const saveInstalledEsRefs = async (savedObjectsClient, pkgName, installedAssets) => {
  const installedPkg = await (0, _index.getInstallationObject)({
    savedObjectsClient,
    pkgName
  });
  const installedAssetsToSave = installedPkg === null || installedPkg === void 0 ? void 0 : installedPkg.attributes.installed_es.concat(installedAssets);
  await savedObjectsClient.update(_constants.PACKAGES_SAVED_OBJECT_TYPE, pkgName, {
    installed_es: installedAssetsToSave
  });
  return installedAssets;
};

exports.saveInstalledEsRefs = saveInstalledEsRefs;

const removeAssetsFromInstalledEsByType = async (savedObjectsClient, pkgName, assetType) => {
  const installedPkg = await (0, _index.getInstallationObject)({
    savedObjectsClient,
    pkgName
  });
  const installedAssets = installedPkg === null || installedPkg === void 0 ? void 0 : installedPkg.attributes.installed_es;
  if (!(installedAssets !== null && installedAssets !== void 0 && installedAssets.length)) return;
  const installedAssetsToSave = installedAssets === null || installedAssets === void 0 ? void 0 : installedAssets.filter(({
    id,
    type
  }) => {
    return type !== assetType;
  });
  return savedObjectsClient.update(_constants.PACKAGES_SAVED_OBJECT_TYPE, pkgName, {
    installed_es: installedAssetsToSave
  });
};

exports.removeAssetsFromInstalledEsByType = removeAssetsFromInstalledEsByType;

async function ensurePackagesCompletedInstall(savedObjectsClient, esClient) {
  const installingPackages = await (0, _get.getPackageSavedObjects)(savedObjectsClient, {
    searchFields: ['install_status'],
    search: 'installing'
  });
  const installingPromises = installingPackages.saved_objects.reduce((acc, pkg) => {
    const startDate = pkg.attributes.install_started_at;
    const nowDate = new Date().toISOString();
    const elapsedTime = Date.parse(nowDate) - Date.parse(startDate);
    const pkgkey = `${pkg.attributes.name}-${pkg.attributes.install_version}`; // reinstall package

    if (elapsedTime > _constants.MAX_TIME_COMPLETE_INSTALL) {
      acc.push(installPackage({
        installSource: 'registry',
        savedObjectsClient,
        pkgkey,
        esClient
      }));
    }

    return acc;
  }, []);
  await Promise.all(installingPromises);
  return installingPackages;
} // implementation


function getInstallType(args) {
  const {
    pkgVersion,
    installedPkg
  } = args;
  if (!installedPkg) return 'install';
  const currentPkgVersion = installedPkg.attributes.version;
  const lastStartedInstallVersion = installedPkg.attributes.install_version;
  if (pkgVersion === currentPkgVersion && pkgVersion !== lastStartedInstallVersion) return 'rollback';
  if (pkgVersion === currentPkgVersion) return 'reinstall';
  if (pkgVersion === lastStartedInstallVersion && pkgVersion !== currentPkgVersion) return 'reupdate';
  if (pkgVersion !== lastStartedInstallVersion && pkgVersion !== currentPkgVersion) return 'update';
  throw new Error('unknown install type');
}