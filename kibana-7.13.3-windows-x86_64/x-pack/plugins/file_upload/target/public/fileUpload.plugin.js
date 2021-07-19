/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(modules){function webpackJsonpCallback(data){for(var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],i=0,resolves=[];i<chunkIds.length;i++)chunkId=chunkIds[i],Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]&&resolves.push(installedChunks[chunkId][0]),installedChunks[chunkId]=0;for(moduleId in moreModules)Object.prototype.hasOwnProperty.call(moreModules,moduleId)&&(modules[moduleId]=moreModules[moduleId]);for(parentJsonpFunction&&parentJsonpFunction(data);resolves.length;)resolves.shift()()}var installedModules={},installedChunks={0:0};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.e=function(chunkId){var promises=[],installedChunkData=installedChunks[chunkId];if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var onScriptComplete,script=document.createElement("script");script.charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.src=function(chunkId){return __webpack_require__.p+"fileUpload.chunk."+chunkId+".js"}(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null,clearTimeout(timeout);var chunk=installedChunks[chunkId];if(0!==chunk){if(chunk){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,chunk[1](error)}installedChunks[chunkId]=void 0}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete,document.head.appendChild(script)}return Promise.all(promises)},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__.oe=function(err){throw console.error(err),err};var jsonpArray=window.fileUpload_bundle_jsonpfunction=window.fileUpload_bundle_jsonpfunction||[],oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback,jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;__webpack_require__(__webpack_require__.s=10)}([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return lazyLoadModules}));var _kibana_services__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);let loadModulesPromise;async function lazyLoadModules(){return void 0!==loadModulesPromise||(loadModulesPromise=new Promise(async resolve=>{const{JsonUploadAndParse:JsonUploadAndParse,importerFactory:importerFactory}=await __webpack_require__.e(1).then(__webpack_require__.bind(null,21));resolve({JsonUploadAndParse:JsonUploadAndParse,importerFactory:importerFactory,getHttp:_kibana_services__WEBPACK_IMPORTED_MODULE_0__.b})})),loadModulesPromise}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8);__webpack_require__.d(__webpack_exports__,"UI_SETTING_MAX_FILE_SIZE",(function(){return _constants__WEBPACK_IMPORTED_MODULE_0__.g})),__webpack_require__.d(__webpack_exports__,"MB",(function(){return _constants__WEBPACK_IMPORTED_MODULE_0__.f})),__webpack_require__.d(__webpack_exports__,"MAX_FILE_SIZE",(function(){return _constants__WEBPACK_IMPORTED_MODULE_0__.d})),__webpack_require__.d(__webpack_exports__,"MAX_FILE_SIZE_BYTES",(function(){return _constants__WEBPACK_IMPORTED_MODULE_0__.e})),__webpack_require__.d(__webpack_exports__,"ABSOLUTE_MAX_FILE_SIZE_BYTES",(function(){return _constants__WEBPACK_IMPORTED_MODULE_0__.a})),__webpack_require__.d(__webpack_exports__,"FILE_SIZE_DISPLAY_FORMAT",(function(){return _constants__WEBPACK_IMPORTED_MODULE_0__.b})),__webpack_require__.d(__webpack_exports__,"INDEX_META_DATA_CREATED_BY",(function(){return _constants__WEBPACK_IMPORTED_MODULE_0__.c}));var _types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9);for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_1__)["default","UI_SETTING_MAX_FILE_SIZE","MB","MAX_FILE_SIZE","MAX_FILE_SIZE_BYTES","ABSOLUTE_MAX_FILE_SIZE_BYTES","FILE_SIZE_DISPLAY_FORMAT","INDEX_META_DATA_CREATED_BY"].indexOf(__WEBPACK_IMPORT_KEY__)<0&&function(key){__webpack_require__.d(__webpack_exports__,key,(function(){return _types__WEBPACK_IMPORTED_MODULE_1__[key]}))}(__WEBPACK_IMPORT_KEY__)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return getFileUploadComponent})),__webpack_require__.d(__webpack_exports__,"f",(function(){return importerFactory})),__webpack_require__.d(__webpack_exports__,"a",(function(){return analyzeFile})),__webpack_require__.d(__webpack_exports__,"e",(function(){return hasImportPermission})),__webpack_require__.d(__webpack_exports__,"b",(function(){return checkIndexExists})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getTimeFieldRange}));var _lazy_load_bundle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);async function getFileUploadComponent(){return(await Object(_lazy_load_bundle__WEBPACK_IMPORTED_MODULE_0__.c)()).JsonUploadAndParse}async function importerFactory(format,options){return(await Object(_lazy_load_bundle__WEBPACK_IMPORTED_MODULE_0__.c)()).importerFactory(format,options)}async function analyzeFile(file,params={}){const{getHttp:getHttp}=await Object(_lazy_load_bundle__WEBPACK_IMPORTED_MODULE_0__.c)(),body=JSON.stringify(file);return await getHttp().fetch({path:"/internal/file_data_visualizer/analyze_file",method:"POST",body:body,query:params})}async function hasImportPermission(params){const fileUploadModules=await Object(_lazy_load_bundle__WEBPACK_IMPORTED_MODULE_0__.c)();try{return(await fileUploadModules.getHttp().fetch({path:"/internal/file_upload/has_import_permission",method:"GET",query:{...params}})).hasImportPermission}catch(error){return!1}}async function checkIndexExists(index,params={}){const body=JSON.stringify({index:index}),fileUploadModules=await Object(_lazy_load_bundle__WEBPACK_IMPORTED_MODULE_0__.c)(),{exists:exists}=await fileUploadModules.getHttp().fetch({path:"/internal/file_upload/index_exists",method:"POST",body:body,query:params});return exists}async function getTimeFieldRange(index,query,timeFieldName){const body=JSON.stringify({index:index,timeFieldName:timeFieldName,query:query}),fileUploadModules=await Object(_lazy_load_bundle__WEBPACK_IMPORTED_MODULE_0__.c)();return await fileUploadModules.getHttp().fetch({path:"/internal/file_upload/time_field_range",method:"POST",body:body})}},function(module,__webpack_exports__,__webpack_require__){"use strict";let coreStart,pluginsStart;function setStartServices(core,plugins){coreStart=core,pluginsStart=plugins}__webpack_require__.d(__webpack_exports__,"f",(function(){return setStartServices})),__webpack_require__.d(__webpack_exports__,"a",(function(){return getDocLinks})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getIndexPatternService})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getHttp})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getSavedObjectsClient})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getUiSettings}));const getDocLinks=()=>coreStart.docLinks,getIndexPatternService=()=>pluginsStart.data.indexPatterns,getHttp=()=>coreStart.http,getSavedObjectsClient=()=>coreStart.savedObjects.client,getUiSettings=()=>coreStart.uiSettings},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return FileUploadPlugin}));var _api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_kibana_services__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_importer_get_max_bytes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5);class FileUploadPlugin{setup(){}start(core,plugins){return Object(_kibana_services__WEBPACK_IMPORTED_MODULE_1__.f)(core,plugins),{getFileUploadComponent:_api__WEBPACK_IMPORTED_MODULE_0__.c,importerFactory:_api__WEBPACK_IMPORTED_MODULE_0__.f,getMaxBytes:_importer_get_max_bytes__WEBPACK_IMPORTED_MODULE_2__.a,getMaxBytesFormatted:_importer_get_max_bytes__WEBPACK_IMPORTED_MODULE_2__.b,hasImportPermission:_api__WEBPACK_IMPORTED_MODULE_0__.e,checkIndexExists:_api__WEBPACK_IMPORTED_MODULE_0__.b,getTimeFieldRange:_api__WEBPACK_IMPORTED_MODULE_0__.d,analyzeFile:_api__WEBPACK_IMPORTED_MODULE_0__.a}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getMaxBytes})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getMaxBytesFormatted}));var _elastic_numeral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_elastic_numeral__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_elastic_numeral__WEBPACK_IMPORTED_MODULE_0__),_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_kibana_services__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3);function getMaxBytes(){const maxFileSize=Object(_kibana_services__WEBPACK_IMPORTED_MODULE_2__.e)().get(_common__WEBPACK_IMPORTED_MODULE_1__.UI_SETTING_MAX_FILE_SIZE,_common__WEBPACK_IMPORTED_MODULE_1__.MAX_FILE_SIZE),maxBytes=_elastic_numeral__WEBPACK_IMPORTED_MODULE_0___default()(maxFileSize.toUpperCase()).value();return maxBytes<_common__WEBPACK_IMPORTED_MODULE_1__.MAX_FILE_SIZE_BYTES?_common__WEBPACK_IMPORTED_MODULE_1__.MAX_FILE_SIZE_BYTES:maxBytes<=_common__WEBPACK_IMPORTED_MODULE_1__.ABSOLUTE_MAX_FILE_SIZE_BYTES?maxBytes:_common__WEBPACK_IMPORTED_MODULE_1__.ABSOLUTE_MAX_FILE_SIZE_BYTES}function getMaxBytesFormatted(){return _elastic_numeral__WEBPACK_IMPORTED_MODULE_0___default()(getMaxBytes()).format(_common__WEBPACK_IMPORTED_MODULE_1__.FILE_SIZE_DISPLAY_FORMAT)}},function(module,exports){module.exports=__kbnSharedDeps__.ElasticNumeral},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"g",(function(){return UI_SETTING_MAX_FILE_SIZE})),__webpack_require__.d(__webpack_exports__,"f",(function(){return MB})),__webpack_require__.d(__webpack_exports__,"d",(function(){return MAX_FILE_SIZE})),__webpack_require__.d(__webpack_exports__,"e",(function(){return MAX_FILE_SIZE_BYTES})),__webpack_require__.d(__webpack_exports__,"a",(function(){return ABSOLUTE_MAX_FILE_SIZE_BYTES})),__webpack_require__.d(__webpack_exports__,"b",(function(){return FILE_SIZE_DISPLAY_FORMAT})),__webpack_require__.d(__webpack_exports__,"c",(function(){return INDEX_META_DATA_CREATED_BY}));const UI_SETTING_MAX_FILE_SIZE="fileUpload:maxFileSize",MB=Math.pow(2,20),MAX_FILE_SIZE="100MB",MAX_FILE_SIZE_BYTES=104857600,ABSOLUTE_MAX_FILE_SIZE_BYTES=1073741274,FILE_SIZE_DISPLAY_FORMAT="0,0.[0] b",INDEX_META_DATA_CREATED_BY="file-data-visualizer"},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(11);__kbnBundles__.define("plugin/fileUpload/public",__webpack_require__,12),__kbnBundles__.define("plugin/fileUpload/common",__webpack_require__,1)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.fileUpload},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return plugin}));var _plugin__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_importer_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7);for(var __WEBPACK_IMPORT_KEY__ in _importer_types__WEBPACK_IMPORTED_MODULE_1__)["default","plugin","FileUploadPluginStart","FileUploadComponentProps","FileUploadGeoResults"].indexOf(__WEBPACK_IMPORT_KEY__)<0&&function(key){__webpack_require__.d(__webpack_exports__,key,(function(){return _importer_types__WEBPACK_IMPORTED_MODULE_1__[key]}))}(__WEBPACK_IMPORT_KEY__);__webpack_require__.d(__webpack_exports__,"FileUploadPluginStart",(function(){return _plugin__WEBPACK_IMPORTED_MODULE_0__.FileUploadPluginStart}));var _lazy_load_bundle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0);function plugin(){return new _plugin__WEBPACK_IMPORTED_MODULE_0__.a}__webpack_require__.d(__webpack_exports__,"FileUploadComponentProps",(function(){return _lazy_load_bundle__WEBPACK_IMPORTED_MODULE_2__.FileUploadComponentProps})),__webpack_require__.d(__webpack_exports__,"FileUploadGeoResults",(function(){return _lazy_load_bundle__WEBPACK_IMPORTED_MODULE_2__.FileUploadGeoResults}))},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/data/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,exports){module.exports=__kbnSharedDeps__.Moment},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))}]);