/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(modules){function webpackJsonpCallback(data){for(var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],i=0,resolves=[];i<chunkIds.length;i++)chunkId=chunkIds[i],Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]&&resolves.push(installedChunks[chunkId][0]),installedChunks[chunkId]=0;for(moduleId in moreModules)Object.prototype.hasOwnProperty.call(moreModules,moduleId)&&(modules[moduleId]=moreModules[moduleId]);for(parentJsonpFunction&&parentJsonpFunction(data);resolves.length;)resolves.shift()()}var installedModules={},installedChunks={0:0};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.e=function(chunkId){var promises=[],installedChunkData=installedChunks[chunkId];if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var onScriptComplete,script=document.createElement("script");script.charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.src=function(chunkId){return __webpack_require__.p+"crossClusterReplication.chunk."+chunkId+".js"}(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null,clearTimeout(timeout);var chunk=installedChunks[chunkId];if(0!==chunk){if(chunk){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,chunk[1](error)}installedChunks[chunkId]=void 0}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete,document.head.appendChild(script)}return Promise.all(promises)},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__.oe=function(err){throw console.error(err),err};var jsonpArray=window.crossClusterReplication_bundle_jsonpfunction=window.crossClusterReplication_bundle_jsonpfunction||[],oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback,jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;__webpack_require__(__webpack_require__.s=11)}([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"g",(function(){return PLUGIN})),__webpack_require__.d(__webpack_exports__,"f",(function(){return MANAGEMENT_ID})),__webpack_require__.d(__webpack_exports__,"d",(function(){return BASE_PATH_REMOTE_CLUSTERS})),__webpack_require__.d(__webpack_exports__,"a",(function(){return API_BASE_PATH})),__webpack_require__.d(__webpack_exports__,"c",(function(){return API_REMOTE_CLUSTERS_BASE_PATH})),__webpack_require__.d(__webpack_exports__,"b",(function(){return API_INDEX_MANAGEMENT_BASE_PATH})),__webpack_require__.d(__webpack_exports__,"e",(function(){return FOLLOWER_INDEX_ADVANCED_SETTINGS}));var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);const PLUGIN={ID:"crossClusterReplication",TITLE:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.crossClusterReplication.appTitle",{defaultMessage:"Cross-Cluster Replication"}),minimumLicenseType:"platinum"},MANAGEMENT_ID="cross_cluster_replication",BASE_PATH_REMOTE_CLUSTERS="data/remote_clusters",API_BASE_PATH="/api/cross_cluster_replication",API_REMOTE_CLUSTERS_BASE_PATH="/api/remote_clusters",API_INDEX_MANAGEMENT_BASE_PATH="/api/index_management",FOLLOWER_INDEX_ADVANCED_SETTINGS={maxReadRequestOperationCount:5120,maxOutstandingReadRequests:12,maxReadRequestSize:"32mb",maxWriteRequestOperationCount:5120,maxWriteRequestSize:"9223372036854775807b",maxOutstandingWriteRequests:9,maxWriteBufferCount:2147483647,maxWriteBufferSize:"512mb",maxRetryDelay:"500ms",readPollTimeout:"1m"}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return API_STATUS})),__webpack_require__.d(__webpack_exports__,"b",(function(){return SECTIONS})),__webpack_require__.d(__webpack_exports__,"c",(function(){return UIM_APP_NAME})),__webpack_require__.d(__webpack_exports__,"o",(function(){return UIM_FOLLOWER_INDEX_LIST_LOAD})),__webpack_require__.d(__webpack_exports__,"n",(function(){return UIM_FOLLOWER_INDEX_CREATE})),__webpack_require__.d(__webpack_exports__,"w",(function(){return UIM_FOLLOWER_INDEX_UPDATE})),__webpack_require__.d(__webpack_exports__,"p",(function(){return UIM_FOLLOWER_INDEX_PAUSE})),__webpack_require__.d(__webpack_exports__,"q",(function(){return UIM_FOLLOWER_INDEX_PAUSE_MANY})),__webpack_require__.d(__webpack_exports__,"r",(function(){return UIM_FOLLOWER_INDEX_RESUME})),__webpack_require__.d(__webpack_exports__,"s",(function(){return UIM_FOLLOWER_INDEX_RESUME_MANY})),__webpack_require__.d(__webpack_exports__,"u",(function(){return UIM_FOLLOWER_INDEX_UNFOLLOW})),__webpack_require__.d(__webpack_exports__,"v",(function(){return UIM_FOLLOWER_INDEX_UNFOLLOW_MANY})),__webpack_require__.d(__webpack_exports__,"x",(function(){return UIM_FOLLOWER_INDEX_USE_ADVANCED_OPTIONS})),__webpack_require__.d(__webpack_exports__,"t",(function(){return UIM_FOLLOWER_INDEX_SHOW_DETAILS_CLICK})),__webpack_require__.d(__webpack_exports__,"g",(function(){return UIM_AUTO_FOLLOW_PATTERN_LIST_LOAD})),__webpack_require__.d(__webpack_exports__,"d",(function(){return UIM_AUTO_FOLLOW_PATTERN_CREATE})),__webpack_require__.d(__webpack_exports__,"m",(function(){return UIM_AUTO_FOLLOW_PATTERN_UPDATE})),__webpack_require__.d(__webpack_exports__,"e",(function(){return UIM_AUTO_FOLLOW_PATTERN_DELETE})),__webpack_require__.d(__webpack_exports__,"f",(function(){return UIM_AUTO_FOLLOW_PATTERN_DELETE_MANY})),__webpack_require__.d(__webpack_exports__,"h",(function(){return UIM_AUTO_FOLLOW_PATTERN_PAUSE})),__webpack_require__.d(__webpack_exports__,"i",(function(){return UIM_AUTO_FOLLOW_PATTERN_PAUSE_MANY})),__webpack_require__.d(__webpack_exports__,"j",(function(){return UIM_AUTO_FOLLOW_PATTERN_RESUME})),__webpack_require__.d(__webpack_exports__,"k",(function(){return UIM_AUTO_FOLLOW_PATTERN_RESUME_MANY})),__webpack_require__.d(__webpack_exports__,"l",(function(){return UIM_AUTO_FOLLOW_PATTERN_SHOW_DETAILS_CLICK}));const API_STATUS={IDLE:"idle",LOADING:"loading",UPDATING:"updating",SAVING:"saving",DELETING:"deleting"},SECTIONS={AUTO_FOLLOW_PATTERN:"autoFollowPattern",FOLLOWER_INDEX:"followerIndex",REMOTE_CLUSTER:"remoteCluster",CCR_STATS:"ccrStats"},UIM_APP_NAME="cross_cluster_replication",UIM_FOLLOWER_INDEX_LIST_LOAD="follower_index_list_load",UIM_FOLLOWER_INDEX_CREATE="follower_index_create",UIM_FOLLOWER_INDEX_UPDATE="follower_index_update",UIM_FOLLOWER_INDEX_PAUSE="follower_index_pause",UIM_FOLLOWER_INDEX_PAUSE_MANY="follower_index_pause_many",UIM_FOLLOWER_INDEX_RESUME="follower_index_resume",UIM_FOLLOWER_INDEX_RESUME_MANY="follower_index_resume_many",UIM_FOLLOWER_INDEX_UNFOLLOW="follower_index_unfollow",UIM_FOLLOWER_INDEX_UNFOLLOW_MANY="follower_index_unfollow_many",UIM_FOLLOWER_INDEX_USE_ADVANCED_OPTIONS="follower_index_use_advanced_options",UIM_FOLLOWER_INDEX_SHOW_DETAILS_CLICK="follower_index_show_details_click",UIM_AUTO_FOLLOW_PATTERN_LIST_LOAD="auto_follow_patter_list_load",UIM_AUTO_FOLLOW_PATTERN_CREATE="auto_follow_pattern_create",UIM_AUTO_FOLLOW_PATTERN_UPDATE="auto_follow_pattern_update",UIM_AUTO_FOLLOW_PATTERN_DELETE="auto_follow_pattern_delete",UIM_AUTO_FOLLOW_PATTERN_DELETE_MANY="auto_follow_pattern_delete_many",UIM_AUTO_FOLLOW_PATTERN_PAUSE="auto_follow_pattern_pause",UIM_AUTO_FOLLOW_PATTERN_PAUSE_MANY="auto_follow_pattern_pause_many",UIM_AUTO_FOLLOW_PATTERN_RESUME="auto_follow_pattern_resume",UIM_AUTO_FOLLOW_PATTERN_RESUME_MANY="auto_follow_pattern_resume_many",UIM_AUTO_FOLLOW_PATTERN_SHOW_DETAILS_CLICK="auto_follow_pattern_show_details_click"},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return trackUiMetric})),__webpack_require__.d(__webpack_exports__,"b",(function(){return init})),__webpack_require__.d(__webpack_exports__,"d",(function(){return trackUserRequest}));var _kbn_analytics__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6);__webpack_require__.d(__webpack_exports__,"a",(function(){return _kbn_analytics__WEBPACK_IMPORTED_MODULE_0__.METRIC_TYPE}));var _constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);let trackUiMetric=(metricType,eventName)=>{};function init(usageCollection){trackUiMetric=usageCollection.reportUiCounter.bind(usageCollection,_constants__WEBPACK_IMPORTED_MODULE_1__.c)}function trackUserRequest(request,actionType){return request.then(response=>(trackUiMetric(_kbn_analytics__WEBPACK_IMPORTED_MODULE_0__.METRIC_TYPE.LOADED,actionType),response))}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return arrify}));const arrify=val=>Array.isArray(val)?val:[val]},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return getSettingDefault})),__webpack_require__.d(__webpack_exports__,"a",(function(){return areAllSettingsDefault}));var _common_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);const getSettingDefault=name=>{if(!_common_constants__WEBPACK_IMPORTED_MODULE_0__.e[name])throw new Error("Unknown setting "+name);return _common_constants__WEBPACK_IMPORTED_MODULE_0__.e[name]},areAllSettingsDefault=settings=>Object.keys(_common_constants__WEBPACK_IMPORTED_MODULE_0__.e).every(name=>((name,value)=>getSettingDefault(name)===value)(name,settings[name]))},function(module,exports){module.exports=__kbnSharedDeps__.KbnAnalytics},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"p",(function(){return setHttpClient})),__webpack_require__.d(__webpack_exports__,"f",(function(){return loadAutoFollowPatterns})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getAutoFollowPattern})),__webpack_require__.d(__webpack_exports__,"k",(function(){return loadRemoteClusters})),__webpack_require__.d(__webpack_exports__,"a",(function(){return createAutoFollowPattern})),__webpack_require__.d(__webpack_exports__,"r",(function(){return updateAutoFollowPattern})),__webpack_require__.d(__webpack_exports__,"c",(function(){return deleteAutoFollowPattern})),__webpack_require__.d(__webpack_exports__,"l",(function(){return pauseAutoFollowPattern})),__webpack_require__.d(__webpack_exports__,"n",(function(){return resumeAutoFollowPattern})),__webpack_require__.d(__webpack_exports__,"h",(function(){return loadFollowerIndices})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getFollowerIndex})),__webpack_require__.d(__webpack_exports__,"b",(function(){return createFollowerIndex})),__webpack_require__.d(__webpack_exports__,"m",(function(){return pauseFollowerIndex})),__webpack_require__.d(__webpack_exports__,"o",(function(){return resumeFollowerIndex})),__webpack_require__.d(__webpack_exports__,"q",(function(){return unfollowLeaderIndex})),__webpack_require__.d(__webpack_exports__,"s",(function(){return updateFollowerIndex})),__webpack_require__.d(__webpack_exports__,"g",(function(){return loadAutoFollowStats})),__webpack_require__.d(__webpack_exports__,"i",(function(){return loadIndices})),__webpack_require__.d(__webpack_exports__,"j",(function(){return loadPermissions}));var _common_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_common_services_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_track_ui_metric__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_follower_index_default_settings__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5);let httpClient;function setHttpClient(client){httpClient=client}const createIdString=ids=>ids.map(id=>encodeURIComponent(id)).join(","),loadAutoFollowPatterns=asSystemRequest=>httpClient.get(_common_constants__WEBPACK_IMPORTED_MODULE_0__.a+"/auto_follow_patterns",{asSystemRequest:asSystemRequest}),getAutoFollowPattern=id=>httpClient.get(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.a}/auto_follow_patterns/${encodeURIComponent(id)}`),loadRemoteClusters=()=>httpClient.get(_common_constants__WEBPACK_IMPORTED_MODULE_0__.c),createAutoFollowPattern=autoFollowPattern=>{const request=httpClient.post(_common_constants__WEBPACK_IMPORTED_MODULE_0__.a+"/auto_follow_patterns",{body:JSON.stringify(autoFollowPattern)});return Object(_track_ui_metric__WEBPACK_IMPORTED_MODULE_3__.d)(request,_constants__WEBPACK_IMPORTED_MODULE_2__.d)},updateAutoFollowPattern=(id,autoFollowPattern)=>{const request=httpClient.put(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.a}/auto_follow_patterns/${encodeURIComponent(id)}`,{body:JSON.stringify(autoFollowPattern)});return Object(_track_ui_metric__WEBPACK_IMPORTED_MODULE_3__.d)(request,_constants__WEBPACK_IMPORTED_MODULE_2__.m)},deleteAutoFollowPattern=id=>{const ids=Object(_common_services_utils__WEBPACK_IMPORTED_MODULE_1__.a)(id),idString=ids.map(_id=>encodeURIComponent(_id)).join(","),request=httpClient.delete(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.a}/auto_follow_patterns/${idString}`),uiMetric=ids.length>1?_constants__WEBPACK_IMPORTED_MODULE_2__.f:_constants__WEBPACK_IMPORTED_MODULE_2__.e;return Object(_track_ui_metric__WEBPACK_IMPORTED_MODULE_3__.d)(request,uiMetric)},pauseAutoFollowPattern=id=>{const ids=Object(_common_services_utils__WEBPACK_IMPORTED_MODULE_1__.a)(id),idString=ids.map(encodeURIComponent).join(","),request=httpClient.post(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.a}/auto_follow_patterns/${idString}/pause`),uiMetric=ids.length>1?_constants__WEBPACK_IMPORTED_MODULE_2__.i:_constants__WEBPACK_IMPORTED_MODULE_2__.h;return Object(_track_ui_metric__WEBPACK_IMPORTED_MODULE_3__.d)(request,uiMetric)},resumeAutoFollowPattern=id=>{const ids=Object(_common_services_utils__WEBPACK_IMPORTED_MODULE_1__.a)(id),idString=ids.map(encodeURIComponent).join(","),request=httpClient.post(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.a}/auto_follow_patterns/${idString}/resume`),uiMetric=ids.length>1?_constants__WEBPACK_IMPORTED_MODULE_2__.k:_constants__WEBPACK_IMPORTED_MODULE_2__.j;return Object(_track_ui_metric__WEBPACK_IMPORTED_MODULE_3__.d)(request,uiMetric)},loadFollowerIndices=asSystemRequest=>httpClient.get(_common_constants__WEBPACK_IMPORTED_MODULE_0__.a+"/follower_indices",{asSystemRequest:asSystemRequest}),getFollowerIndex=id=>httpClient.get(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.a}/follower_indices/${encodeURIComponent(id)}`),createFollowerIndex=followerIndex=>{const uiMetrics=[_constants__WEBPACK_IMPORTED_MODULE_2__.n];!Object(_follower_index_default_settings__WEBPACK_IMPORTED_MODULE_4__.a)(followerIndex)&&uiMetrics.push(_constants__WEBPACK_IMPORTED_MODULE_2__.x);const request=httpClient.post(_common_constants__WEBPACK_IMPORTED_MODULE_0__.a+"/follower_indices",{body:JSON.stringify(followerIndex)});return Object(_track_ui_metric__WEBPACK_IMPORTED_MODULE_3__.d)(request,uiMetrics)},pauseFollowerIndex=id=>{const ids=Object(_common_services_utils__WEBPACK_IMPORTED_MODULE_1__.a)(id),idString=createIdString(ids),request=httpClient.put(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.a}/follower_indices/${idString}/pause`),uiMetric=ids.length>1?_constants__WEBPACK_IMPORTED_MODULE_2__.q:_constants__WEBPACK_IMPORTED_MODULE_2__.p;return Object(_track_ui_metric__WEBPACK_IMPORTED_MODULE_3__.d)(request,uiMetric)},resumeFollowerIndex=id=>{const ids=Object(_common_services_utils__WEBPACK_IMPORTED_MODULE_1__.a)(id),idString=createIdString(ids),request=httpClient.put(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.a}/follower_indices/${idString}/resume`),uiMetric=ids.length>1?_constants__WEBPACK_IMPORTED_MODULE_2__.s:_constants__WEBPACK_IMPORTED_MODULE_2__.r;return Object(_track_ui_metric__WEBPACK_IMPORTED_MODULE_3__.d)(request,uiMetric)},unfollowLeaderIndex=id=>{const ids=Object(_common_services_utils__WEBPACK_IMPORTED_MODULE_1__.a)(id),idString=createIdString(ids),request=httpClient.put(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.a}/follower_indices/${idString}/unfollow`),uiMetric=ids.length>1?_constants__WEBPACK_IMPORTED_MODULE_2__.v:_constants__WEBPACK_IMPORTED_MODULE_2__.u;return Object(_track_ui_metric__WEBPACK_IMPORTED_MODULE_3__.d)(request,uiMetric)},updateFollowerIndex=(id,followerIndex)=>{const uiMetrics=[_constants__WEBPACK_IMPORTED_MODULE_2__.w];!Object(_follower_index_default_settings__WEBPACK_IMPORTED_MODULE_4__.a)(followerIndex)&&uiMetrics.push(_constants__WEBPACK_IMPORTED_MODULE_2__.x);const{maxReadRequestOperationCount:maxReadRequestOperationCount,maxOutstandingReadRequests:maxOutstandingReadRequests,maxReadRequestSize:maxReadRequestSize,maxWriteRequestOperationCount:maxWriteRequestOperationCount,maxWriteRequestSize:maxWriteRequestSize,maxOutstandingWriteRequests:maxOutstandingWriteRequests,maxWriteBufferCount:maxWriteBufferCount,maxWriteBufferSize:maxWriteBufferSize,maxRetryDelay:maxRetryDelay,readPollTimeout:readPollTimeout}=followerIndex,request=httpClient.put(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.a}/follower_indices/${encodeURIComponent(id)}`,{body:JSON.stringify({maxReadRequestOperationCount:maxReadRequestOperationCount,maxOutstandingReadRequests:maxOutstandingReadRequests,maxReadRequestSize:maxReadRequestSize,maxWriteRequestOperationCount:maxWriteRequestOperationCount,maxWriteRequestSize:maxWriteRequestSize,maxOutstandingWriteRequests:maxOutstandingWriteRequests,maxWriteBufferCount:maxWriteBufferCount,maxWriteBufferSize:maxWriteBufferSize,maxRetryDelay:maxRetryDelay,readPollTimeout:readPollTimeout})});return Object(_track_ui_metric__WEBPACK_IMPORTED_MODULE_3__.d)(request,uiMetrics)},loadAutoFollowStats=()=>httpClient.get(_common_constants__WEBPACK_IMPORTED_MODULE_0__.a+"/stats/auto_follow");let abortController=null;const loadIndices=()=>{abortController&&(abortController.abort(),abortController=null),abortController=new AbortController;const{signal:signal}=abortController;return httpClient.get(_common_constants__WEBPACK_IMPORTED_MODULE_0__.b+"/indices",{signal:signal}).then(response=>(abortController=null,response))},loadPermissions=()=>httpClient.get(_common_constants__WEBPACK_IMPORTED_MODULE_0__.a+"/permissions")},function(module,__webpack_exports__,__webpack_require__){"use strict";let _toasts,_fatalErrors;__webpack_require__.d(__webpack_exports__,"c",(function(){return init})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getToasts})),__webpack_require__.d(__webpack_exports__,"a",(function(){return getFatalErrors}));const init=(toasts,fatalErrors)=>{_toasts=toasts,_fatalErrors=fatalErrors},getToasts=()=>_toasts,getFatalErrors=()=>_fatalErrors},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,exports){module.exports=__kbnSharedDeps__.RxjsOperators},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(12);__kbnBundles__.define("plugin/crossClusterReplication/public",__webpack_require__,13)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.crossClusterReplication},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var external_kbnSharedDeps_KbnI18n_=__webpack_require__(4),external_kbnSharedDeps_Lodash_=__webpack_require__(9),external_kbnSharedDeps_RxjsOperators_=__webpack_require__(10),constants=__webpack_require__(0),track_ui_metric=__webpack_require__(2),notifications=__webpack_require__(8),api=__webpack_require__(7);class plugin_CrossClusterReplicationPlugin{constructor(initializerContext){this.initializerContext=initializerContext}setup(coreSetup,plugins){const{licensing:licensing,remoteClusters:remoteClusters,usageCollection:usageCollection,management:management,indexManagement:indexManagement}=plugins,esSection=management.sections.section.data,{http:http,notifications:{toasts:toasts},fatalErrors:fatalErrors,getStartServices:getStartServices}=coreSetup;Object(api.p)(http),Object(track_ui_metric.b)(usageCollection),Object(notifications.c)(toasts,fatalErrors);const ccrApp=esSection.registerApp({id:constants.f,title:constants.g.TITLE,order:6,mount:async({element:element,setBreadcrumbs:setBreadcrumbs,history:history})=>{const{mountApp:mountApp}=await __webpack_require__.e(1).then(__webpack_require__.bind(null,70)),[coreStart]=await getStartServices(),{chrome:{docTitle:docTitle},i18n:{Context:I18nContext},docLinks:{ELASTIC_WEBSITE_URL:ELASTIC_WEBSITE_URL,DOC_LINK_VERSION:DOC_LINK_VERSION},application:{getUrlForApp:getUrlForApp}}=coreStart;docTitle.change(constants.g.TITLE);const unmountAppCallback=await mountApp({element:element,setBreadcrumbs:setBreadcrumbs,I18nContext:I18nContext,ELASTIC_WEBSITE_URL:ELASTIC_WEBSITE_URL,DOC_LINK_VERSION:DOC_LINK_VERSION,history:history,getUrlForApp:getUrlForApp});return()=>{docTitle.reset(),unmountAppCallback()}}});Promise.all([licensing.license$.pipe(Object(external_kbnSharedDeps_RxjsOperators_.first)()).toPromise(),getStartServices()]).then(([license,startServices])=>{var _capabilities$managem;const isLicenseOk="valid"===license.check(constants.g.ID,constants.g.minimumLicenseType).state,config=this.initializerContext.config.get(),isCcrUiEnabled=(null===(_capabilities$managem=startServices[0].application.capabilities.management.data)||void 0===_capabilities$managem?void 0:_capabilities$managem[constants.f])&&config.ui.enabled&&remoteClusters.isUiEnabled;if(isLicenseOk&&isCcrUiEnabled){if(indexManagement){const propertyPath="isFollowerIndex",followerBadgeExtension={matchIndex:index=>Object(external_kbnSharedDeps_Lodash_.get)(index,propertyPath),label:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.crossClusterReplication.indexMgmtBadge.followerLabel",{defaultMessage:"Follower"}),color:"default",filterExpression:"isFollowerIndex:true"};indexManagement.extensionsService.addBadge(followerBadgeExtension)}}else ccrApp.disable()})}start(){}stop(){}}const public_plugin=initializerContext=>new plugin_CrossClusterReplicationPlugin(initializerContext)},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,exports){module.exports=__kbnSharedDeps__.ReactRouterDom},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/data/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Moment},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/indexManagement/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))}]);