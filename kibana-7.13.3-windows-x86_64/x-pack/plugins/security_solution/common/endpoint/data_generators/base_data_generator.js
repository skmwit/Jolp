"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseDataGenerator = void 0;

var _seedrandom = _interopRequireDefault(require("seedrandom"));

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const OS_FAMILY = ['windows', 'macos', 'linux'];
/**
 * A generic base class to assist in creating domain specific data generators. It includes
 * several general purpose random data generators for use within the class and exposes one
 * public method named `generate()` which should be implemented by sub-classes.
 */

class BaseDataGenerator {
  constructor(seed = Math.random().toString()) {
    _defineProperty(this, "random", void 0);

    if (typeof seed === 'string') {
      this.random = (0, _seedrandom.default)(seed);
    } else {
      this.random = seed;
    }
  }
  /**
   * Generate a new record
   */


  generate() {
    throw new Error('method not implemented!');
  }
  /** generate random OS family value */


  randomOSFamily() {
    return this.randomChoice(OS_FAMILY);
  }
  /** generate a UUID (v4) */


  randomUUID() {
    return _uuid.default.v4();
  }
  /** Generate a random number up to the max provided */


  randomN(max) {
    return Math.floor(this.random() * max);
  }

  *randomNGenerator(max, count) {
    let iCount = count;

    while (iCount > 0) {
      yield this.randomN(max);
      iCount = iCount - 1;
    }
  }
  /**
   * Create an array of a given size and fill it with data provided by a generator
   *
   * @param lengthLimit
   * @param generator
   * @protected
   */


  randomArray(lengthLimit, generator) {
    const rand = this.randomN(lengthLimit) + 1;
    return [...Array(rand).keys()].map(generator);
  }

  randomMac() {
    return [...this.randomNGenerator(255, 6)].map(x => x.toString(16)).join('-');
  }

  randomIP() {
    return [10, ...this.randomNGenerator(255, 3)].map(x => x.toString()).join('.');
  }

  randomVersion() {
    return [6, ...this.randomNGenerator(10, 2)].map(x => x.toString()).join('.');
  }

  randomChoice(choices) {
    return choices[this.randomN(choices.length)];
  }

  randomString(length) {
    return [...this.randomNGenerator(36, length)].map(x => x.toString(36)).join('');
  }

  randomHostname() {
    return `Host-${this.randomString(10)}`;
  }

}

exports.BaseDataGenerator = BaseDataGenerator;