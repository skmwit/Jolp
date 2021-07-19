"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BfetchServerPlugin = void 0;

var _configSchema = require("@kbn/config-schema");

var _rxjs = require("rxjs");

var _common = require("../common");

var _streaming = require("./streaming");

var _ui_settings = require("./ui_settings");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const streamingHeaders = {
  'Content-Type': 'application/x-ndjson',
  Connection: 'keep-alive',
  'Transfer-Encoding': 'chunked'
};

class BfetchServerPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;

    _defineProperty(this, "addStreamingResponseRoute", ({
      getStartServices,
      router,
      logger
    }) => (path, handler) => {
      router.post({
        path: `/${(0, _common.removeLeadingSlash)(path)}`,
        validate: {
          body: _configSchema.schema.any()
        }
      }, async (context, request, response) => {
        const handlerInstance = handler(request);
        const data = request.body;
        const compressionDisabled = this.getCompressionDisabled(request);
        return response.ok({
          headers: streamingHeaders,
          body: (0, _streaming.createStream)(handlerInstance.getResponseStream(data), logger, compressionDisabled)
        });
      });
    });

    _defineProperty(this, "createStreamingRequestHandler", ({
      logger,
      getStartServices
    }) => streamHandler => async (context, request, response) => {
      const response$ = await streamHandler(context, request);
      const compressionDisabled = this.getCompressionDisabled(request);
      return response.ok({
        headers: streamingHeaders,
        body: (0, _streaming.createStream)(response$, logger, compressionDisabled)
      });
    });

    _defineProperty(this, "addBatchProcessingRoute", addStreamingResponseRoute => (path, handler) => {
      addStreamingResponseRoute(path, request => {
        const handlerInstance = handler(request);
        return {
          getResponseStream: ({
            batch
          }) => {
            const subject = new _rxjs.Subject();
            let cnt = batch.length;
            batch.forEach(async (batchItem, id) => {
              try {
                const result = await handlerInstance.onBatchItem(batchItem);
                subject.next({
                  id,
                  result
                });
              } catch (err) {
                const error = (0, _common.normalizeError)(err);
                subject.next({
                  id,
                  error
                });
              } finally {
                cnt--;
                if (!cnt) subject.complete();
              }
            });
            return subject;
          }
        };
      });
    });
  }

  setup(core, plugins) {
    const logger = this.initializerContext.logger.get();
    const router = core.http.createRouter();
    core.uiSettings.register((0, _ui_settings.getUiSettings)());
    const addStreamingResponseRoute = this.addStreamingResponseRoute({
      getStartServices: core.getStartServices,
      router,
      logger
    });
    const addBatchProcessingRoute = this.addBatchProcessingRoute(addStreamingResponseRoute);
    const createStreamingRequestHandler = this.createStreamingRequestHandler({
      getStartServices: core.getStartServices,
      logger
    });
    return {
      addBatchProcessingRoute,
      addStreamingResponseRoute,
      createStreamingRequestHandler
    };
  }

  start(core, plugins) {
    return {};
  }

  stop() {}

  getCompressionDisabled(request) {
    return request.headers['x-chunk-encoding'] !== 'deflate';
  }

}

exports.BfetchServerPlugin = BfetchServerPlugin;