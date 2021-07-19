"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpResourcesService = void 0;

var _get_apm_config = require("./get_apm_config");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HttpResourcesService {
  constructor(core) {
    _defineProperty(this, "logger", void 0);

    this.logger = core.logger.get('http-resources');
  }

  setup(deps) {
    this.logger.debug('setting up HttpResourcesService');
    return {
      createRegistrar: this.createRegistrar.bind(this, deps)
    };
  }

  start() {}

  stop() {}

  createRegistrar(deps, router) {
    return {
      register: (route, handler) => {
        return router.get(route, (context, request, response) => {
          return handler(context, request, { ...response,
            ...this.createResponseToolkit(deps, context, request, response)
          });
        });
      }
    };
  }

  createResponseToolkit(deps, context, request, response) {
    const cspHeader = deps.http.csp.header;
    return {
      async renderCoreApp(options = {}) {
        const apmConfig = (0, _get_apm_config.getApmConfig)(request.url.pathname);
        const body = await deps.rendering.render(request, context.core.uiSettings.client, {
          includeUserSettings: true,
          vars: {
            apmConfig
          }
        });
        return response.ok({
          body,
          headers: { ...options.headers,
            'content-security-policy': cspHeader
          }
        });
      },

      async renderAnonymousCoreApp(options = {}) {
        const apmConfig = (0, _get_apm_config.getApmConfig)(request.url.pathname);
        const body = await deps.rendering.render(request, context.core.uiSettings.client, {
          includeUserSettings: false,
          vars: {
            apmConfig
          }
        });
        return response.ok({
          body,
          headers: { ...options.headers,
            'content-security-policy': cspHeader
          }
        });
      },

      renderHtml(options) {
        return response.ok({
          body: options.body,
          headers: { ...options.headers,
            'content-type': 'text/html',
            'content-security-policy': cspHeader
          }
        });
      },

      renderJs(options) {
        return response.ok({
          body: options.body,
          headers: { ...options.headers,
            'content-type': 'text/javascript',
            'content-security-policy': cspHeader
          }
        });
      }

    };
  }

}

exports.HttpResourcesService = HttpResourcesService;