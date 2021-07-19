!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(module,exports){},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(3);__kbnBundles__.define("plugin/spacesOss/public",__webpack_require__,4)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.spacesOss},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SpacesOssPluginSetup",(function(){return types.SpacesOssPluginSetup})),__webpack_require__.d(__webpack_exports__,"SpacesOssPluginStart",(function(){return types.SpacesOssPluginStart})),__webpack_require__.d(__webpack_exports__,"SpacesAvailableStartContract",(function(){return types.SpacesAvailableStartContract})),__webpack_require__.d(__webpack_exports__,"SpacesUnavailableStartContract",(function(){return types.SpacesUnavailableStartContract})),__webpack_require__.d(__webpack_exports__,"LazyComponentFn",(function(){return api.LazyComponentFn})),__webpack_require__.d(__webpack_exports__,"SpacesApi",(function(){return api.SpacesApi})),__webpack_require__.d(__webpack_exports__,"SpacesApiUi",(function(){return api.SpacesApiUi})),__webpack_require__.d(__webpack_exports__,"SpacesApiUiComponent",(function(){return api.SpacesApiUiComponent})),__webpack_require__.d(__webpack_exports__,"SpacesContextProps",(function(){return api.SpacesContextProps})),__webpack_require__.d(__webpack_exports__,"ShareToSpaceFlyoutProps",(function(){return api.ShareToSpaceFlyoutProps})),__webpack_require__.d(__webpack_exports__,"ShareToSpaceSavedObjectTarget",(function(){return api.ShareToSpaceSavedObjectTarget})),__webpack_require__.d(__webpack_exports__,"SpaceListProps",(function(){return api.SpaceListProps})),__webpack_require__.d(__webpack_exports__,"LegacyUrlConflictProps",(function(){return api.LegacyUrlConflictProps})),__webpack_require__.d(__webpack_exports__,"SpaceAvatarProps",(function(){return api.SpaceAvatarProps})),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));class SpacesOssPlugin{constructor(){var obj,key,value;value=void 0,(key="api")in(obj=this)?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value}setup(){return{registerSpacesApi:provider=>{if(this.api)throw new Error("Spaces API can only be registered once");this.api=provider}}}start(){return this.api?{isSpacesAvailable:!0,...this.api}:{isSpacesAvailable:!1}}}var types=__webpack_require__(1),api=__webpack_require__(0);const public_plugin=()=>new SpacesOssPlugin}]);