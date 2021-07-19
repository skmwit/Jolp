/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(modules){function webpackJsonpCallback(data){for(var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],i=0,resolves=[];i<chunkIds.length;i++)chunkId=chunkIds[i],Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]&&resolves.push(installedChunks[chunkId][0]),installedChunks[chunkId]=0;for(moduleId in moreModules)Object.prototype.hasOwnProperty.call(moreModules,moduleId)&&(modules[moduleId]=moreModules[moduleId]);for(parentJsonpFunction&&parentJsonpFunction(data);resolves.length;)resolves.shift()()}var installedModules={},installedChunks={0:0};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.e=function(chunkId){var promises=[],installedChunkData=installedChunks[chunkId];if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var onScriptComplete,script=document.createElement("script");script.charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.src=function(chunkId){return __webpack_require__.p+"stackAlerts.chunk."+chunkId+".js"}(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null,clearTimeout(timeout);var chunk=installedChunks[chunkId];if(0!==chunk){if(chunk){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,chunk[1](error)}installedChunks[chunkId]=void 0}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete,document.head.appendChild(script)}return Promise.all(promises)},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__.oe=function(err){throw console.error(err),err};var jsonpArray=window.stackAlerts_bundle_jsonpfunction=window.stackAlerts_bundle_jsonpfunction||[],oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback,jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;__webpack_require__(__webpack_require__.s=4)}([function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/triggersActionsUi/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return validateExpression}));var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);const validateExpression=alertParams=>{const{index:index,timeField:timeField,esQuery:esQuery,size:size,threshold:threshold,timeWindowSize:timeWindowSize,thresholdComparator:thresholdComparator}=alertParams,validationResult={errors:{}},errors={index:new Array,timeField:new Array,esQuery:new Array,size:new Array,threshold0:new Array,threshold1:new Array,thresholdComparator:new Array,timeWindowSize:new Array};if(validationResult.errors=errors,index&&0!==index.length||errors.index.push(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.stackAlerts.esQuery.ui.validation.error.requiredIndexText",{defaultMessage:"Index is required."})),timeField||errors.timeField.push(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.stackAlerts.esQuery.ui.validation.error.requiredTimeFieldText",{defaultMessage:"Time field is required."})),esQuery)try{JSON.parse(esQuery).query||errors.esQuery.push(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.stackAlerts.esQuery.ui.validation.error.requiredEsQueryText",{defaultMessage:"Query field is required."}))}catch(err){errors.esQuery.push(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.stackAlerts.esQuery.ui.validation.error.jsonQueryText",{defaultMessage:"Query must be valid JSON."}))}else errors.esQuery.push(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.stackAlerts.esQuery.ui.validation.error.requiredQueryText",{defaultMessage:"Elasticsearch query is required."}));return threshold&&0!==threshold.length&&void 0!==threshold[0]||errors.threshold0.push(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.stackAlerts.esQuery.ui.validation.error.requiredThreshold0Text",{defaultMessage:"Threshold 0 is required."})),thresholdComparator&&_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_1__.builtInComparators[thresholdComparator].requiredValues>1&&(!threshold||void 0===threshold[1]||threshold&&threshold.length<_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_1__.builtInComparators[thresholdComparator].requiredValues)&&errors.threshold1.push(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.stackAlerts.esQuery.ui.validation.error.requiredThreshold1Text",{defaultMessage:"Threshold 1 is required."})),threshold&&2===threshold.length&&threshold[0]>threshold[1]&&errors.threshold1.push(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.stackAlerts.esQuery.ui.validation.error.greaterThenThreshold0Text",{defaultMessage:"Threshold 1 must be > Threshold 0."})),timeWindowSize||errors.timeWindowSize.push(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.stackAlerts.esQuery.ui.validation.error.requiredTimeWindowSizeText",{defaultMessage:"Time window size is required."})),size||errors.size.push(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.stackAlerts.esQuery.ui.validation.error.requiredSizeText",{defaultMessage:"Size is required."})),(size&&size<0||size>1e4)&&errors.size.push(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.stackAlerts.esQuery.ui.validation.error.invalidSizeRangeText",{defaultMessage:"Size must be between 0 and {max, number}.",values:{max:1e4}})),validationResult}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(5);__kbnBundles__.define("plugin/stackAlerts/public",__webpack_require__,6)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.stackAlerts},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var external_kbnSharedDeps_React_=__webpack_require__(2),external_kbnSharedDeps_KbnI18n_=__webpack_require__(0);const validateExpression=alertParams=>{const{index:index,geoField:geoField,entity:entity,dateField:dateField,boundaryType:boundaryType,boundaryIndexTitle:boundaryIndexTitle,boundaryGeoField:boundaryGeoField}=alertParams,validationResult={errors:{}},errors={index:new Array,indexId:new Array,geoField:new Array,entity:new Array,dateField:new Array,boundaryType:new Array,boundaryIndexTitle:new Array,boundaryIndexId:new Array,boundaryGeoField:new Array};return validationResult.errors=errors,index||errors.index.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.geoContainment.error.requiredIndexTitleText",{defaultMessage:"Index pattern is required."})),geoField||errors.geoField.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.geoContainment.error.requiredGeoFieldText",{defaultMessage:"Geo field is required."})),entity||errors.entity.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.geoContainment.error.requiredEntityText",{defaultMessage:"Entity is required."})),dateField||errors.dateField.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.geoContainment.error.requiredDateFieldText",{defaultMessage:"Date field is required."})),boundaryType||errors.boundaryType.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.geoContainment.error.requiredBoundaryTypeText",{defaultMessage:"Boundary type is required."})),boundaryIndexTitle||errors.boundaryIndexTitle.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.geoContainment.error.requiredBoundaryIndexTitleText",{defaultMessage:"Boundary index pattern title is required."})),boundaryGeoField||errors.boundaryGeoField.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.geoContainment.error.requiredBoundaryGeoFieldText",{defaultMessage:"Boundary geo field is required."})),validationResult};var public_=__webpack_require__(1);const validation_validateExpression=alertParams=>{const{index:index,timeField:timeField,aggType:aggType,aggField:aggField,groupBy:groupBy,termSize:termSize,termField:termField,threshold:threshold,timeWindowSize:timeWindowSize,thresholdComparator:thresholdComparator}=alertParams,validationResult={errors:{}},errors={aggField:new Array,termSize:new Array,termField:new Array,timeWindowSize:new Array,threshold0:new Array,threshold1:new Array,index:new Array,timeField:new Array};return validationResult.errors=errors,index&&0!==index.length||errors.index.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.validation.error.requiredIndexText",{defaultMessage:"Index is required."})),timeField||errors.timeField.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.validation.error.requiredTimeFieldText",{defaultMessage:"Time field is required."})),aggType&&public_.builtInAggregationTypes[aggType].fieldRequired&&!aggField&&errors.aggField.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.validation.error.requiredAggFieldText",{defaultMessage:"Aggregation field is required."})),groupBy&&public_.builtInGroupByTypes[groupBy]&&public_.builtInGroupByTypes[groupBy].sizeRequired&&!termSize&&errors.termSize.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.validation.error.requiredTermSizedText",{defaultMessage:"Term size is required."})),groupBy&&public_.builtInGroupByTypes[groupBy].validNormalizedTypes&&public_.builtInGroupByTypes[groupBy].validNormalizedTypes.length>0&&!termField&&errors.termField.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.validation.error.requiredTermFieldText",{defaultMessage:"Term field is required."})),timeWindowSize||errors.timeWindowSize.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.validation.error.requiredTimeWindowSizeText",{defaultMessage:"Time window size is required."})),threshold&&0!==threshold.length&&void 0!==threshold[0]||errors.threshold0.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.validation.error.requiredThreshold0Text",{defaultMessage:"Threshold0 is required."})),thresholdComparator&&public_.builtInComparators[thresholdComparator].requiredValues>1&&(!threshold||void 0===threshold[1]||threshold&&threshold.length<public_.builtInComparators[thresholdComparator].requiredValues)&&errors.threshold1.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.validation.error.requiredThreshold1Text",{defaultMessage:"Threshold1 is required."})),threshold&&2===threshold.length&&threshold[0]>threshold[1]&&errors.threshold1.push(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.validation.error.greaterThenThreshold0Text",{defaultMessage:"Threshold1 should be > Threshold0."})),validationResult};var validation=__webpack_require__(3);function registerAlertTypes({alertTypeRegistry:alertTypeRegistry,config:config}){alertTypeRegistry.register({id:".geo-containment",description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.geoContainment.descriptionText",{defaultMessage:"Alert when an entity is contained within a geo boundary."}),iconClass:"globe",documentationUrl:null,alertParamsExpression:Object(external_kbnSharedDeps_React_.lazy)(()=>__webpack_require__.e(3).then(__webpack_require__.bind(null,46))),validate:validateExpression,requiresAppContext:!1}),alertTypeRegistry.register({id:".index-threshold",description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.alertType.descriptionText",{defaultMessage:"Alert when an aggregated query meets the threshold."}),iconClass:"alert",documentationUrl:docLinks=>docLinks.links.alerting.indexThreshold,alertParamsExpression:Object(external_kbnSharedDeps_React_.lazy)(()=>__webpack_require__.e(2).then(__webpack_require__.bind(null,47))),validate:validation_validateExpression,defaultActionMessage:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.alertType.defaultActionMessage",{defaultMessage:"alert '\\{\\{alertName\\}\\}' is active for group '\\{\\{context.group\\}\\}':\n\n- Value: \\{\\{context.value\\}\\}\n- Conditions Met: \\{\\{context.conditions\\}\\} over \\{\\{params.timeWindowSize\\}\\}\\{\\{params.timeWindowUnit\\}\\}\n- Timestamp: \\{\\{context.date\\}\\}"}),requiresAppContext:!1}),alertTypeRegistry.register({id:".es-query",description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.esQuery.ui.alertType.descriptionText",{defaultMessage:"Alert on matches against an Elasticsearch query."}),iconClass:"logoElastic",documentationUrl:docLinks=>docLinks.links.alerting.esQuery,alertParamsExpression:Object(external_kbnSharedDeps_React_.lazy)(()=>__webpack_require__.e(1).then(__webpack_require__.bind(null,48))),validate:validation.a,defaultActionMessage:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.esQuery.ui.alertType.defaultActionMessage",{defaultMessage:"Elasticsearch query alert '\\{\\{alertName\\}\\}' is active:\n\n- Value: \\{\\{context.value\\}\\}\n- Conditions Met: \\{\\{context.conditions\\}\\} over \\{\\{params.timeWindowSize\\}\\}\\{\\{params.timeWindowUnit\\}\\}\n- Timestamp: \\{\\{context.date\\}\\}"}),requiresAppContext:!1})}class plugin_StackAlertsPublicPlugin{constructor(initializerContext){var obj,key,value;value=void 0,(key="initializerContext")in(obj=this)?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,this.initializerContext=initializerContext}setup(core,{triggersActionsUi:triggersActionsUi}){registerAlertTypes({alertTypeRegistry:triggersActionsUi.alertTypeRegistry,config:this.initializerContext.config.get()})}start(){}stop(){}}const public_plugin=ctx=>new plugin_StackAlertsPublicPlugin(ctx)},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,exports){module.exports=__kbnSharedDeps__.TsLib},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/data/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Rxjs},function(module,exports){module.exports=__kbnSharedDeps__.ElasticCharts},function(module,exports){module.exports=__kbnSharedDeps__.MomentTimezone},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/alerting/common/parse_duration");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/alerting/common");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))}]);