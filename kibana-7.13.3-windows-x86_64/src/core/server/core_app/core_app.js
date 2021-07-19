"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoreApp = void 0;

var _path = _interopRequireDefault(require("path"));

var _querystring = require("querystring");

var _configSchema = require("@kbn/config-schema");

var _utils = require("@kbn/utils");

var _bundle_routes = require("./bundle_routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @internal */
class CoreApp {
  constructor(core) {
    _defineProperty(this, "logger", void 0);

    _defineProperty(this, "env", void 0);

    this.logger = core.logger.get('core-app');
    this.env = core.env;
  }

  setup(coreSetup, uiPlugins) {
    this.logger.debug('Setting up core app.');
    this.registerDefaultRoutes(coreSetup, uiPlugins);
    this.registerStaticDirs(coreSetup);
  }

  registerDefaultRoutes(coreSetup, uiPlugins) {
    const httpSetup = coreSetup.http;
    const router = httpSetup.createRouter('');
    const resources = coreSetup.httpResources.createRegistrar(router);
    router.get({
      path: '/',
      validate: false
    }, async (context, req, res) => {
      const defaultRoute = await context.core.uiSettings.client.get('defaultRoute');
      const basePath = httpSetup.basePath.get(req);
      const url = `${basePath}${defaultRoute}`;
      return res.redirected({
        headers: {
          location: url
        }
      });
    }); // remove trailing slash catch-all

    router.get({
      path: '/{path*}',
      validate: {
        params: _configSchema.schema.object({
          path: _configSchema.schema.maybe(_configSchema.schema.string())
        }),
        query: _configSchema.schema.maybe(_configSchema.schema.recordOf(_configSchema.schema.string(), _configSchema.schema.any()))
      }
    }, async (context, req, res) => {
      const {
        query,
        params
      } = req;
      const {
        path
      } = params;

      if (!path || !path.endsWith('/') || path.startsWith('/')) {
        return res.notFound();
      }

      const basePath = httpSetup.basePath.get(req);
      let rewrittenPath = path.slice(0, -1);

      if (`/${path}`.startsWith(basePath)) {
        rewrittenPath = rewrittenPath.substring(basePath.length);
      }

      const querystring = query ? (0, _querystring.stringify)(query) : undefined;
      const url = `${basePath}/${rewrittenPath}${querystring ? `?${querystring}` : ''}`;
      return res.redirected({
        headers: {
          location: url
        }
      });
    });
    router.get({
      path: '/core',
      validate: false
    }, async (context, req, res) => res.ok({
      body: {
        version: '0.0.1'
      }
    }));
    (0, _bundle_routes.registerBundleRoutes)({
      router,
      uiPlugins,
      packageInfo: this.env.packageInfo,
      serverBasePath: coreSetup.http.basePath.serverBasePath
    });
    resources.register({
      path: '/app/{id}/{any*}',
      validate: false,
      options: {
        authRequired: true
      }
    }, async (context, request, response) => {
      return response.renderCoreApp();
    });
    const anonymousStatusPage = coreSetup.status.isStatusPageAnonymous();
    resources.register({
      path: '/status',
      validate: false,
      options: {
        authRequired: !anonymousStatusPage
      }
    }, async (context, request, response) => {
      if (anonymousStatusPage) {
        return response.renderAnonymousCoreApp();
      } else {
        return response.renderCoreApp();
      }
    });
  }

  registerStaticDirs(coreSetup) {
    coreSetup.http.registerStaticDir('/ui/{path*}', _path.default.resolve(__dirname, './assets'));
    coreSetup.http.registerStaticDir('/node_modules/@kbn/ui-framework/dist/{path*}', (0, _utils.fromRoot)('node_modules/@kbn/ui-framework/dist'));
  }

}

exports.CoreApp = CoreApp;