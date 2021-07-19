"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromiumArchivePaths = void 0;

var _path = _interopRequireDefault(require("path"));

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

var BaseUrl;

(function (BaseUrl) {
  BaseUrl["common"] = "https://commondatastorage.googleapis.com/chromium-browser-snapshots";
  BaseUrl["custom"] = "https://storage.googleapis.com/headless_shell";
})(BaseUrl || (BaseUrl = {}));

class ChromiumArchivePaths {
  constructor() {
    _defineProperty(this, "revision", '856583');

    _defineProperty(this, "packages", [{
      platform: 'darwin',
      architecture: 'x64',
      archiveFilename: 'chromium-d163fd7-darwin_x64.zip',
      archiveChecksum: '19aa88bd59e2575816425bf72786c53f',
      binaryChecksum: 'dfcd6e007214175997663c50c8d871ea',
      binaryRelativePath: 'headless_shell-darwin_x64/headless_shell',
      location: 'custom'
    }, {
      platform: 'linux',
      architecture: 'x64',
      archiveFilename: 'chromium-d163fd7-linux_x64.zip',
      archiveChecksum: 'fba0a240d409228a3494aef415c300fc',
      binaryChecksum: '99cfab472d516038b94ef86649e52871',
      binaryRelativePath: 'headless_shell-linux_x64/headless_shell',
      location: 'custom'
    }, {
      platform: 'linux',
      architecture: 'arm64',
      archiveFilename: 'chromium-d163fd7-linux_arm64.zip',
      archiveChecksum: '29834735bc2f0e0d9134c33bc0580fb6',
      binaryChecksum: '13baccf2e5c8385cb9d9588db6a9e2c2',
      binaryRelativePath: 'headless_shell-linux_arm64/headless_shell',
      location: 'custom'
    }, {
      platform: 'win32',
      architecture: 'x64',
      archiveFilename: 'chrome-win.zip',
      archiveChecksum: '64999a384bfb6c96c50c4cb6810dbc05',
      binaryChecksum: '13b8bbb4a12f9036b8cc3b57b3a71fec',
      binaryRelativePath: 'chrome-win\\chrome.exe',
      location: 'common',
      archivePath: 'Win'
    }]);

    _defineProperty(this, "archivesPath", _path.default.resolve(__dirname, '../../../../../../.chromium'));
  }

  find(platform, architecture) {
    return this.packages.find(p => p.platform === platform && p.architecture === architecture);
  }

  resolvePath(p) {
    return _path.default.resolve(this.archivesPath, p.archiveFilename);
  }

  getAllArchiveFilenames() {
    return this.packages.map(p => this.resolvePath(p));
  }

  getDownloadUrl(p) {
    if (p.location === 'common') {
      return `${BaseUrl.common}/${p.archivePath}/${this.revision}/${p.archiveFilename}`;
    }

    return BaseUrl.custom + '/' + p.archiveFilename;
  }

  getBinaryPath(p) {
    const chromiumPath = _path.default.resolve(__dirname, '../../../chromium');

    return _path.default.join(chromiumPath, p.binaryRelativePath);
  }

}

exports.ChromiumArchivePaths = ChromiumArchivePaths;