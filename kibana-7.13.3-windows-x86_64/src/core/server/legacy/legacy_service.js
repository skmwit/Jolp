"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegacyService = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _legacyLogging = require("@kbn/legacy-logging");

var _logging = require("../logging");

var _metrics = require("../metrics");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @internal */
class LegacyService {
  constructor(coreContext) {
    _defineProperty(this, "log", void 0);

    _defineProperty(this, "opsConfig$", void 0);

    _defineProperty(this, "legacyLoggingConfig$", void 0);

    _defineProperty(this, "configSubscription", void 0);

    const {
      logger,
      configService
    } = coreContext;
    this.log = logger.get('legacy-service');
    this.legacyLoggingConfig$ = configService.atPath(_logging.config.path);
    this.opsConfig$ = configService.atPath(_metrics.opsConfig.path);
  }

  async setup(setupDeps) {
    this.log.debug('setting up legacy service');
    await this.setupLegacyLogging(setupDeps.http.server);
  }

  async setupLegacyLogging(server) {
    const legacyLoggingConfig = await this.legacyLoggingConfig$.pipe((0, _operators.first)()).toPromise();
    const currentOpsConfig = await this.opsConfig$.pipe((0, _operators.first)()).toPromise();
    await (0, _legacyLogging.setupLogging)(server, legacyLoggingConfig, currentOpsConfig.interval.asMilliseconds());
    await (0, _legacyLogging.setupLoggingRotate)(server, legacyLoggingConfig);
    this.configSubscription = (0, _rxjs.combineLatest)([this.legacyLoggingConfig$, this.opsConfig$]).subscribe(([newLoggingConfig, newOpsConfig]) => {
      (0, _legacyLogging.reconfigureLogging)(server, newLoggingConfig, newOpsConfig.interval.asMilliseconds());
    });
  }

  async stop() {
    this.log.debug('stopping legacy service');

    if (this.configSubscription !== undefined) {
      this.configSubscription.unsubscribe();
      this.configSubscription = undefined;
    }
  }

}

exports.LegacyService = LegacyService;