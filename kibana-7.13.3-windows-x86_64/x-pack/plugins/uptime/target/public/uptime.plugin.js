/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(modules){function webpackJsonpCallback(data){for(var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],i=0,resolves=[];i<chunkIds.length;i++)chunkId=chunkIds[i],Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]&&resolves.push(installedChunks[chunkId][0]),installedChunks[chunkId]=0;for(moduleId in moreModules)Object.prototype.hasOwnProperty.call(moreModules,moduleId)&&(modules[moduleId]=moreModules[moduleId]);for(parentJsonpFunction&&parentJsonpFunction(data);resolves.length;)resolves.shift()()}var installedModules={},installedChunks={5:0};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.e=function(chunkId){var promises=[],installedChunkData=installedChunks[chunkId];if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var onScriptComplete,script=document.createElement("script");script.charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.src=function(chunkId){return __webpack_require__.p+"uptime.chunk."+chunkId+".js"}(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null,clearTimeout(timeout);var chunk=installedChunks[chunkId];if(0!==chunk){if(chunk){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,chunk[1](error)}installedChunks[chunkId]=void 0}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete,document.head.appendChild(script)}return Promise.all(promises)},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__.oe=function(err){throw console.error(err),err};var jsonpArray=window.uptime_bundle_jsonpfunction=window.uptime_bundle_jsonpfunction||[],oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback,jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;__webpack_require__(__webpack_require__.s=7)}([function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ACTION_GROUP_DEFINITIONS})),__webpack_require__.d(__webpack_exports__,"b",(function(){return CLIENT_ALERT_TYPES}));const ACTION_GROUP_DEFINITIONS={MONITOR_STATUS:{id:"xpack.uptime.alerts.actionGroups.monitorStatus",name:"Uptime Down Monitor"},TLS:{id:"xpack.uptime.alerts.actionGroups.tls",name:"Uptime TLS Alert"},DURATION_ANOMALY:{id:"xpack.uptime.alerts.actionGroups.durationAnomaly",name:"Uptime Duration Anomaly"}},CLIENT_ALERT_TYPES={MONITOR_STATUS:"xpack.uptime.alerts.monitorStatus",TLS:"xpack.uptime.alerts.tls",DURATION_ANOMALY:"xpack.uptime.alerts.durationAnomaly"}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PLUGIN}));var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);const PLUGIN={APP_ROOT_ID:"react-uptime-root",DESCRIPTION:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.uptime.pluginDescription",{defaultMessage:"Uptime monitoring",description:"The description text that will appear in the feature catalogue."}),ID:"uptime",LOCAL_STORAGE_KEY:"xpack.uptime",NAME:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.uptime.featureRegistry.uptimeFeatureName",{defaultMessage:"Uptime"}),TITLE:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.uptime.uptimeFeatureCatalogueTitle",{defaultMessage:"Uptime"})}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return VALUE_MUST_BE_GREATER_THAN_ZERO})),__webpack_require__.d(__webpack_exports__,"b",(function(){return VALUE_MUST_BE_AN_INTEGER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return MonitorStatusTranslations}));var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);const VALUE_MUST_BE_GREATER_THAN_ZERO=_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.uptime.settings.invalid.error",{defaultMessage:"Value must be greater than 0."}),VALUE_MUST_BE_AN_INTEGER=_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.uptime.settings.invalid.nanError",{defaultMessage:"Value must be an integer."}),MonitorStatusTranslations={defaultActionMessage:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.uptime.alerts.monitorStatus.defaultActionMessage",{defaultMessage:"Monitor {monitorName} with url {monitorUrl} is {statusMessage} from {observerLocation}. The latest error message is {latestErrorMessage}",values:{monitorName:"{{state.monitorName}}",monitorUrl:"{{{state.monitorUrl}}}",statusMessage:"{{state.statusMessage}}",latestErrorMessage:"{{{state.latestErrorMessage}}}",observerLocation:"{{state.observerLocation}}"}}),name:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.uptime.alerts.monitorStatus.clientName",{defaultMessage:"Uptime monitor status"}),description:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.uptime.alerts.monitorStatus.description",{defaultMessage:"Alert when a monitor is down or an availability threshold is breached."})}},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("entry/core/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/home/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(8);__kbnBundles__.define("plugin/uptime/public",__webpack_require__,9)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.uptime},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var public_=__webpack_require__(5),home_public_=__webpack_require__(6),external_kbnSharedDeps_React_=__webpack_require__(1),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),alerts=__webpack_require__(2),translations=__webpack_require__(4);const{defaultActionMessage:defaultActionMessage,description:description}=translations.a,MonitorStatusAlert=external_kbnSharedDeps_React_default.a.lazy(()=>Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(2),__webpack_require__.e(3),__webpack_require__.e(12)]).then(__webpack_require__.bind(null,436)));let validateFunc;var external_kbnSharedDeps_KbnI18n_=__webpack_require__(0);const TlsTranslations={defaultActionMessage:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uptime.alerts.tls.defaultActionMessage",{defaultMessage:"Detected {count} TLS certificates expiring or becoming too old.\n\n{expiringConditionalOpen}\nExpiring cert count: {expiringCount}\nExpiring Certificates: {expiringCommonNameAndDate}\n{expiringConditionalClose}\n\n{agingConditionalOpen}\nAging cert count: {agingCount}\nAging Certificates: {agingCommonNameAndDate}\n{agingConditionalClose}\n",values:{count:"{{state.count}}",expiringCount:"{{state.expiringCount}}",expiringCommonNameAndDate:"{{state.expiringCommonNameAndDate}}",expiringConditionalOpen:"{{#state.hasExpired}}",expiringConditionalClose:"{{/state.hasExpired}}",agingCount:"{{state.agingCount}}",agingCommonNameAndDate:"{{state.agingCommonNameAndDate}}",agingConditionalOpen:"{{#state.hasAging}}",agingConditionalClose:"{{/state.hasAging}}"}}),name:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uptime.alerts.tls.clientName",{defaultMessage:"Uptime TLS"}),description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uptime.alerts.tls.description",{defaultMessage:"Alert when the TLS certificate of an Uptime monitor is about to expire."})},DurationAnomalyTranslations={defaultActionMessage:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uptime.alerts.durationAnomaly.defaultActionMessage",{defaultMessage:"Abnormal ({severity} level) response time detected on {monitor} with url {monitorUrl} at {anomalyStartTimestamp}. Anomaly severity score is {severityScore}.\nResponse times as high as {slowestAnomalyResponse} have been detected from location {observerLocation}. Expected response time is {expectedResponseTime}.",values:{severity:"{{state.severity}}",anomalyStartTimestamp:"{{state.anomalyStartTimestamp}}",monitor:"{{state.monitor}}",monitorUrl:"{{{state.monitorUrl}}}",slowestAnomalyResponse:"{{state.slowestAnomalyResponse}}",expectedResponseTime:"{{state.expectedResponseTime}}",severityScore:"{{state.severityScore}}",observerLocation:"{{state.observerLocation}}"}}),name:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uptime.alerts.durationAnomaly.clientName",{defaultMessage:"Uptime Duration Anomaly"}),description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uptime.alerts.durationAnomaly.description",{defaultMessage:"Alert when the Uptime monitor duration is anaomalous."})},{defaultActionMessage:tls_defaultActionMessage,description:tls_description}=TlsTranslations,TLSAlert=external_kbnSharedDeps_React_default.a.lazy(()=>Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(2),__webpack_require__.e(8)]).then(__webpack_require__.bind(null,434))),{defaultActionMessage:duration_anomaly_defaultActionMessage,description:duration_anomaly_description}=DurationAnomalyTranslations,DurationAnomalyAlert=external_kbnSharedDeps_React_default.a.lazy(()=>Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(2),__webpack_require__.e(7)]).then(__webpack_require__.bind(null,435))),alertTypeInitializers=[({core:core,plugins:plugins})=>({id:alerts.b.MONITOR_STATUS,description:description,iconClass:"uptimeApp",documentationUrl:docLinks=>`${docLinks.ELASTIC_WEBSITE_URL}guide/en/uptime/${docLinks.DOC_LINK_VERSION}/uptime-alerting.html#_monitor_status_alerts`,alertParamsExpression:params=>external_kbnSharedDeps_React_default.a.createElement(MonitorStatusAlert,{core:core,plugins:plugins,params:params}),validate:alertParams=>(validateFunc||async function(){const{validateMonitorStatusParams:validateMonitorStatusParams}=await Promise.all([__webpack_require__.e(0),__webpack_require__.e(13)]).then(__webpack_require__.bind(null,432));validateFunc=validateMonitorStatusParams}(),validateFunc?validateFunc(alertParams):{}),defaultActionMessage:defaultActionMessage,requiresAppContext:!1}),({core:core,plugins:plugins})=>({id:alerts.b.TLS,iconClass:"uptimeApp",documentationUrl:docLinks=>`${docLinks.ELASTIC_WEBSITE_URL}guide/en/uptime/${docLinks.DOC_LINK_VERSION}/uptime-alerting.html#_tls_alerts`,alertParamsExpression:params=>external_kbnSharedDeps_React_default.a.createElement(TLSAlert,{core:core,plugins:plugins,params:params}),description:tls_description,validate:()=>({errors:{}}),defaultActionMessage:tls_defaultActionMessage,requiresAppContext:!1}),({core:core,plugins:plugins})=>({id:alerts.b.DURATION_ANOMALY,iconClass:"uptimeApp",documentationUrl:docLinks=>`${docLinks.ELASTIC_WEBSITE_URL}guide/en/uptime/${docLinks.DOC_LINK_VERSION}/uptime-alerting.html`,alertParamsExpression:params=>external_kbnSharedDeps_React_default.a.createElement(DurationAnomalyAlert,{core:core,plugins:plugins,params:params}),description:duration_anomaly_description,validate:()=>({errors:{}}),defaultActionMessage:duration_anomaly_defaultActionMessage,requiresAppContext:!0})];var constants_plugin=__webpack_require__(3);const LazySyntheticsPolicyCreateExtension=Object(external_kbnSharedDeps_React_.lazy)(async()=>{const{SyntheticsPolicyCreateExtensionWrapper:SyntheticsPolicyCreateExtensionWrapper}=await Promise.all([__webpack_require__.e(4),__webpack_require__.e(10)]).then(__webpack_require__.bind(null,437));return{default:SyntheticsPolicyCreateExtensionWrapper}}),LazySyntheticsPolicyEditExtension=Object(external_kbnSharedDeps_React_.lazy)(async()=>{const{SyntheticsPolicyEditExtensionWrapper:SyntheticsPolicyEditExtensionWrapper}=await Promise.all([__webpack_require__.e(4),__webpack_require__.e(11)]).then(__webpack_require__.bind(null,438));return{default:SyntheticsPolicyEditExtensionWrapper}});class plugin_UptimePlugin{constructor(_context){}setup(core,plugins){plugins.home&&plugins.home.featureCatalogue.register({id:constants_plugin.a.ID,title:constants_plugin.a.TITLE,description:constants_plugin.a.DESCRIPTION,icon:"uptimeApp",path:"/app/uptime",showOnHomePage:!1,category:home_public_.FeatureCatalogueCategory.DATA});const getUptimeDataHelper=async()=>{const[coreStart]=await core.getStartServices(),{UptimeDataHelper:UptimeDataHelper}=await Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(9)]).then(__webpack_require__.bind(null,431));return UptimeDataHelper(coreStart)};plugins.observability&&plugins.observability.dashboard.register({appName:"synthetics",hasData:async()=>{const dataHelper=await getUptimeDataHelper(),status=await dataHelper.indexStatus();return{hasData:status.docCount>0,indices:status.indices}},fetchData:async params=>{const dataHelper=await getUptimeDataHelper();return await dataHelper.overviewData(params)}}),core.application.register({id:constants_plugin.a.ID,euiIconType:"logoObservability",order:8400,title:constants_plugin.a.TITLE,category:public_.DEFAULT_APP_CATEGORIES.observability,meta:{keywords:["Synthetics","pings","checks","availability","response duration","response time","outside in","reachability","reachable","digital","performance","web performance","web perf"],searchDeepLinks:[{id:"Down monitors",title:"Down monitors",path:"/?statusFilter=down"},{id:"Certificates",title:"TLS Certificates",path:"/certificates"},{id:"Settings",title:"Settings",path:"/settings"}]},mount:async params=>{const[coreStart,corePlugins]=await core.getStartServices(),{renderApp:renderApp}=await Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(2),__webpack_require__.e(3),__webpack_require__.e(6)]).then(__webpack_require__.bind(null,433));return renderApp(coreStart,plugins,corePlugins,params)}})}start(start,plugins){if(alertTypeInitializers.forEach(init=>{const alertInitializer=init({core:start,plugins:plugins});plugins.triggersActionsUi&&!plugins.triggersActionsUi.alertTypeRegistry.has(alertInitializer.id)&&plugins.triggersActionsUi.alertTypeRegistry.register(alertInitializer)}),plugins.fleet){const{registerExtension:registerExtension}=plugins.fleet;registerExtension({package:"synthetics",view:"package-policy-create",component:LazySyntheticsPolicyCreateExtension}),registerExtension({package:"synthetics",view:"package-policy-edit",component:LazySyntheticsPolicyEditExtension})}}stop(){}}const public_plugin=initializerContext=>new plugin_UptimePlugin(initializerContext)},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.TsLib},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,exports){module.exports=__kbnSharedDeps__.StyledComponents},function(module,exports){module.exports=__kbnSharedDeps__.Moment},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/observability/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactRouterDom},function(module,exports){module.exports=__kbnSharedDeps__.ElasticCharts},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/common");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/data/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/ml/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEuiChartsTheme},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,exports){module.exports=__kbnSharedDeps__.Theme.euiLightVars},function(module,exports){module.exports=__kbnSharedDeps__.Theme.euiDarkVars},function(module,exports){module.exports=__kbnSharedDeps__.RisonNode},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEuiLibServicesFormat},function(module,exports){module.exports=__kbnSharedDeps__.ElasticNumeral},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/ml/common");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))}]);