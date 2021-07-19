"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPluginInitializerContext = createPluginInitializerContext;
exports.createPluginSetupContext = createPluginSetupContext;
exports.createPluginStartContext = createPluginStartContext;

var _operators = require("rxjs/operators");

var _legacy_config = require("./legacy_config");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * This returns a facade for `CoreContext` that will be exposed to the plugin initializer.
 * This facade should be safe to use across entire plugin lifespan.
 *
 * This is called for each plugin when it's created, so each plugin gets its own
 * version of these values.
 *
 * We should aim to be restrictive and specific in the APIs that we expose.
 *
 * @param coreContext Kibana core context
 * @param pluginManifest The manifest of the plugin we're building these values for.
 * @internal
 */
function createPluginInitializerContext(coreContext, opaqueId, pluginManifest, instanceInfo) {
  return {
    opaqueId,

    /**
     * Environment information that is safe to expose to plugins and may be beneficial for them.
     */
    env: {
      mode: coreContext.env.mode,
      packageInfo: coreContext.env.packageInfo,
      instanceUuid: instanceInfo.uuid
    },

    /**
     * Plugin-scoped logger
     */
    logger: {
      get(...contextParts) {
        return coreContext.logger.get('plugins', pluginManifest.id, ...contextParts);
      }

    },

    /**
     * Core configuration functionality, enables fetching a subset of the config.
     */
    config: {
      legacy: {
        globalConfig$: (0, _legacy_config.getGlobalConfig$)(coreContext.configService),
        get: () => (0, _legacy_config.getGlobalConfig)(coreContext.configService)
      },

      /**
       * Reads the subset of the config at the `configPath` defined in the plugin
       * manifest.
       */
      create() {
        return coreContext.configService.atPath(pluginManifest.configPath).pipe((0, _operators.shareReplay)(1));
      },

      get() {
        return coreContext.configService.atPathSync(pluginManifest.configPath);
      }

    }
  };
}
/**
 * This returns a facade for `CoreContext` that will be exposed to the plugin `setup` method.
 * This facade should be safe to use only within `setup` itself.
 *
 * This is called for each plugin when it's set up, so each plugin gets its own
 * version of these values.
 *
 * We should aim to be restrictive and specific in the APIs that we expose.
 *
 * @param coreContext Kibana core context
 * @param plugin The plugin we're building these values for.
 * @param deps Dependencies that Plugins services gets during setup.
 * @internal
 */


function createPluginSetupContext(coreContext, deps, plugin) {
  const router = deps.http.createRouter('', plugin.opaqueId);
  return {
    capabilities: {
      registerProvider: deps.capabilities.registerProvider,
      registerSwitcher: deps.capabilities.registerSwitcher
    },
    context: {
      createContextContainer: deps.context.createContextContainer
    },
    elasticsearch: {
      legacy: deps.elasticsearch.legacy
    },
    http: {
      createCookieSessionStorageFactory: deps.http.createCookieSessionStorageFactory,
      registerRouteHandlerContext: (contextName, provider) => deps.http.registerRouteHandlerContext(plugin.opaqueId, contextName, provider),
      createRouter: () => router,
      resources: deps.httpResources.createRegistrar(router),
      registerOnPreRouting: deps.http.registerOnPreRouting,
      registerOnPreAuth: deps.http.registerOnPreAuth,
      registerAuth: deps.http.registerAuth,
      registerOnPostAuth: deps.http.registerOnPostAuth,
      registerOnPreResponse: deps.http.registerOnPreResponse,
      basePath: deps.http.basePath,
      auth: {
        get: deps.http.auth.get,
        isAuthenticated: deps.http.auth.isAuthenticated
      },
      csp: deps.http.csp,
      getServerInfo: deps.http.getServerInfo
    },
    i18n: deps.i18n,
    logging: {
      configure: config$ => deps.logging.configure(['plugins', plugin.name], config$)
    },
    metrics: {
      collectionInterval: deps.metrics.collectionInterval,
      getOpsMetrics$: deps.metrics.getOpsMetrics$
    },
    savedObjects: {
      setClientFactoryProvider: deps.savedObjects.setClientFactoryProvider,
      addClientWrapper: deps.savedObjects.addClientWrapper,
      registerType: deps.savedObjects.registerType
    },
    status: {
      core$: deps.status.core$,
      overall$: deps.status.overall$,
      set: deps.status.plugins.set.bind(null, plugin.name),
      dependencies$: deps.status.plugins.getDependenciesStatus$(plugin.name),
      derivedStatus$: deps.status.plugins.getDerivedStatus$(plugin.name),
      isStatusPageAnonymous: deps.status.isStatusPageAnonymous
    },
    uiSettings: {
      register: deps.uiSettings.register
    },
    getStartServices: () => plugin.startDependencies,
    deprecations: deps.deprecations.getRegistry(plugin.name)
  };
}
/**
 * This returns a facade for `CoreContext` that will be exposed to the plugin `start` method.
 * This facade should be safe to use only within `start` itself.
 *
 * This is called for each plugin when it starts, so each plugin gets its own
 * version of these values.
 *
 * @param coreContext Kibana core context
 * @param plugin The plugin we're building these values for.
 * @param deps Dependencies that Plugins services gets during start.
 * @internal
 */


function createPluginStartContext(coreContext, deps, plugin) {
  return {
    capabilities: {
      resolveCapabilities: deps.capabilities.resolveCapabilities
    },
    elasticsearch: {
      client: deps.elasticsearch.client,
      createClient: deps.elasticsearch.createClient,
      legacy: deps.elasticsearch.legacy
    },
    http: {
      auth: deps.http.auth,
      basePath: deps.http.basePath,
      getServerInfo: deps.http.getServerInfo
    },
    savedObjects: {
      getScopedClient: deps.savedObjects.getScopedClient,
      createInternalRepository: deps.savedObjects.createInternalRepository,
      createScopedRepository: deps.savedObjects.createScopedRepository,
      createSerializer: deps.savedObjects.createSerializer,
      createExporter: deps.savedObjects.createExporter,
      createImporter: deps.savedObjects.createImporter,
      getTypeRegistry: deps.savedObjects.getTypeRegistry
    },
    metrics: {
      collectionInterval: deps.metrics.collectionInterval,
      getOpsMetrics$: deps.metrics.getOpsMetrics$
    },
    uiSettings: {
      asScopedToClient: deps.uiSettings.asScopedToClient
    },
    coreUsageData: deps.coreUsageData
  };
}