"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewriteAppender = void 0;

var _configSchema = require("@kbn/config-schema");

var _policies = require("./policies");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Appender that can modify the `LogRecord` instances it receives before passing
 * them along to another {@link Appender}.
 * @internal
 */
class RewriteAppender {
  constructor(config) {
    this.config = config;

    _defineProperty(this, "appenders", new Map());

    _defineProperty(this, "policy", void 0);

    this.policy = (0, _policies.createRewritePolicy)(config.policy);
  }
  /**
   * List of appenders that are dependencies of this appender.
   *
   * `addAppender` will throw an error when called with an appender
   * reference that isn't in this list.
   */


  get appenderRefs() {
    return this.config.appenders;
  }
  /**
   * Appenders can be "attached" to this one so that the RewriteAppender
   * is able to act as a sort of middleware by calling `append` on other appenders.
   *
   * As appenders cannot be attached to each other until they are created,
   * the `addAppender` method is used to pass in a configured appender.
   */


  addAppender(appenderRef, appender) {
    if (!this.appenderRefs.includes(appenderRef)) {
      throw new Error(`addAppender was called with an appender key that is missing from the appenderRefs: "${appenderRef}".`);
    }

    this.appenders.set(appenderRef, appender);
  }
  /**
   * Modifies the `record` and passes it to the specified appender.
   */


  append(record) {
    const rewrittenRecord = this.policy.rewrite(record);

    for (const appenderRef of this.appenderRefs) {
      const appender = this.appenders.get(appenderRef);

      if (!appender) {
        throw new Error(`Rewrite Appender could not find appender key "${appenderRef}". ` + 'Be sure `appender.addAppender()` was called before `appender.append()`.');
      }

      appender.append(rewrittenRecord);
    }
  }
  /**
   * Disposes `RewriteAppender`.
   */


  dispose() {
    this.appenders.clear();
  }

}

exports.RewriteAppender = RewriteAppender;

_defineProperty(RewriteAppender, "configSchema", _configSchema.schema.object({
  type: _configSchema.schema.literal('rewrite'),
  appenders: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: []
  }),
  policy: _policies.rewritePolicyConfigSchema
}));