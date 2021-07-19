/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(modules){function webpackJsonpCallback(data){for(var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],i=0,resolves=[];i<chunkIds.length;i++)chunkId=chunkIds[i],Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]&&resolves.push(installedChunks[chunkId][0]),installedChunks[chunkId]=0;for(moduleId in moreModules)Object.prototype.hasOwnProperty.call(moreModules,moduleId)&&(modules[moduleId]=moreModules[moduleId]);for(parentJsonpFunction&&parentJsonpFunction(data);resolves.length;)resolves.shift()()}var installedModules={},installedChunks={0:0};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.e=function(chunkId){var promises=[],installedChunkData=installedChunks[chunkId];if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var onScriptComplete,script=document.createElement("script");script.charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.src=function(chunkId){return __webpack_require__.p+"ingestPipelines.chunk."+chunkId+".js"}(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null,clearTimeout(timeout);var chunk=installedChunks[chunkId];if(0!==chunk){if(chunk){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,chunk[1](error)}installedChunks[chunkId]=void 0}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete,document.head.appendChild(script)}return Promise.all(promises)},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__.oe=function(err){throw console.error(err),err};var jsonpArray=window.ingestPipelines_bundle_jsonpfunction=window.ingestPipelines_bundle_jsonpfunction||[],oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback,jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;__webpack_require__(__webpack_require__.s=14)}([function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/static/forms/hook_form_lib");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/static/forms/components");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return PLUGIN_ID})),__webpack_require__.d(__webpack_exports__,"a",(function(){return API_BASE_PATH})),__webpack_require__.d(__webpack_exports__,"b",(function(){return APP_CLUSTER_REQUIRED_PRIVILEGES}));const PLUGIN_ID="ingest_pipelines",API_BASE_PATH="/api/ingest_pipelines",APP_CLUSTER_REQUIRED_PRIVILEGES=["manage_pipeline","cluster:monitor/nodes/info"]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return UIM_APP_NAME})),__webpack_require__.d(__webpack_exports__,"b",(function(){return UIM_PIPELINES_LIST_LOAD})),__webpack_require__.d(__webpack_exports__,"c",(function(){return UIM_PIPELINE_CREATE})),__webpack_require__.d(__webpack_exports__,"g",(function(){return UIM_PIPELINE_UPDATE})),__webpack_require__.d(__webpack_exports__,"d",(function(){return UIM_PIPELINE_DELETE})),__webpack_require__.d(__webpack_exports__,"e",(function(){return UIM_PIPELINE_DELETE_MANY})),__webpack_require__.d(__webpack_exports__,"f",(function(){return UIM_PIPELINE_SIMULATE}));const UIM_APP_NAME="ingest_pipelines",UIM_PIPELINES_LIST_LOAD="pipelines_list_load",UIM_PIPELINE_CREATE="pipeline_create",UIM_PIPELINE_UPDATE="pipeline_update",UIM_PIPELINE_DELETE="pipeline_delete",UIM_PIPELINE_DELETE_MANY="pipeline_delete_many",UIM_PIPELINE_SIMULATE="pipeline_simulate"},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ROUTES})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getListPath})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getEditPath})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getCreatePath})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClonePath}));const _getEditPath=(name,encode=!0)=>"/edit/"+(encode?encodeURIComponent(name):name),_getClonePath=(name,encode=!0)=>"/create/"+(encode?encodeURIComponent(name):name),_getListPath=name=>"/"+(name?"?pipeline="+encodeURIComponent(name):""),ROUTES={list:_getListPath(),edit:_getEditPath(":name",!1),create:"/create",clone:_getClonePath(":sourceName",!1)},getListPath=({inspectedPipelineName:inspectedPipelineName}={})=>_getListPath(inspectedPipelineName),getEditPath=({pipelineName:pipelineName})=>_getEditPath(pipelineName,!0),getCreatePath=()=>"/create",getClonePath=({clonedPipelineName:clonedPipelineName})=>_getClonePath(clonedPipelineName,!0)},function(module,__webpack_exports__,__webpack_require__){"use strict";function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,"c",(function(){return documentationService})),__webpack_require__.d(__webpack_exports__,"d",(function(){return uiMetricService})),__webpack_require__.d(__webpack_exports__,"a",(function(){return apiService})),__webpack_require__.d(__webpack_exports__,"b",(function(){return breadcrumbService}));const documentationService=new class{constructor(){_defineProperty(this,"esDocBasePath",""),_defineProperty(this,"ingestNodeUrl",""),_defineProperty(this,"processorsUrl",""),_defineProperty(this,"handlingFailureUrl",""),_defineProperty(this,"putPipelineApiUrl","")}setup(docLinks){const{DOC_LINK_VERSION:DOC_LINK_VERSION,ELASTIC_WEBSITE_URL:ELASTIC_WEBSITE_URL,links:links}=docLinks,docsBase=ELASTIC_WEBSITE_URL+"guide/en";this.esDocBasePath=`${docsBase}/elasticsearch/reference/${DOC_LINK_VERSION}`,this.ingestNodeUrl=""+links.ingest.pipelines,this.processorsUrl=""+links.ingest.processors,this.handlingFailureUrl=""+links.ingest.pipelineFailure,this.putPipelineApiUrl=""+links.apis.createPipeline}getEsDocsBasePath(){return this.esDocBasePath}getIngestNodeUrl(){return this.ingestNodeUrl}getProcessorsUrl(){return this.processorsUrl}getHandlingFailureUrl(){return this.handlingFailureUrl}getPutPipelineApiUrl(){return this.putPipelineApiUrl}};var external_kbnSharedDeps_KbnAnalytics_=__webpack_require__(12),constants=__webpack_require__(4);const uiMetricService=new class{constructor(){var obj,key,value;value=void 0,(key="usageCollection")in(obj=this)?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value}setup(usageCollection){this.usageCollection=usageCollection}track(name){if(!this.usageCollection)return;const{reportUiCounter:reportUiCounter}=this.usageCollection;reportUiCounter(constants.a,external_kbnSharedDeps_KbnAnalytics_.METRIC_TYPE.COUNT,name)}trackUiMetric(eventName){return this.track(eventName)}};var common_constants=__webpack_require__(3),shared_imports=__webpack_require__(9);function api_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const apiService=new class{constructor(){api_defineProperty(this,"client",void 0),api_defineProperty(this,"uiMetricService",void 0)}useRequest(config){if(!this.client)throw new Error("Api service has not be initialized.");return Object(shared_imports.G)(this.client,config)}sendRequest(config){if(!this.client)throw new Error("Api service has not be initialized.");return Object(shared_imports.A)(this.client,config)}trackUiMetric(eventName){if(!this.uiMetricService)throw new Error("UI metric service has not be initialized.");return this.uiMetricService.trackUiMetric(eventName)}setup(httpClient,uiMetricService){this.client=httpClient,this.uiMetricService=uiMetricService}useLoadPipelines(){return this.useRequest({path:common_constants.a,method:"get"})}useLoadPipeline(name){return this.useRequest({path:`${common_constants.a}/${encodeURIComponent(name)}`,method:"get"})}async createPipeline(pipeline){const result=await this.sendRequest({path:common_constants.a,method:"post",body:JSON.stringify(pipeline)});return this.trackUiMetric(constants.c),result}async updatePipeline(pipeline){const{name:name,...body}=pipeline,result=await this.sendRequest({path:`${common_constants.a}/${encodeURIComponent(name)}`,method:"put",body:JSON.stringify(body)});return this.trackUiMetric(constants.g),result}async deletePipelines(names){const result=this.sendRequest({path:`${common_constants.a}/${names.map(name=>encodeURIComponent(name)).join(",")}`,method:"delete"});return this.trackUiMetric(names.length>1?constants.e:constants.d),result}async simulatePipeline(reqBody){const result=await this.sendRequest({path:common_constants.a+"/simulate",method:"post",body:JSON.stringify(reqBody)});return this.trackUiMetric(constants.f),result}async loadDocument(index,id){return await this.sendRequest({path:`${common_constants.a}/documents/${encodeURIComponent(index)}/${encodeURIComponent(id)}`,method:"get"})}};var external_kbnSharedDeps_KbnI18n_=__webpack_require__(5);function breadcrumbs_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const homeBreadcrumbText=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ingestPipelines.breadcrumb.pipelinesLabel",{defaultMessage:"Ingest Node Pipelines"});const breadcrumbService=new class{constructor(){breadcrumbs_defineProperty(this,"breadcrumbs",{home:[{text:homeBreadcrumbText}],create:[{text:homeBreadcrumbText,href:"/"},{text:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ingestPipelines.breadcrumb.createPipelineLabel",{defaultMessage:"Create pipeline"})}],edit:[{text:homeBreadcrumbText,href:"/"},{text:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ingestPipelines.breadcrumb.editPipelineLabel",{defaultMessage:"Edit pipeline"})}]}),breadcrumbs_defineProperty(this,"setBreadcrumbsHandler",void 0)}setup(setBreadcrumbsHandler){this.setBreadcrumbsHandler=setBreadcrumbsHandler}setBreadcrumbs(type){if(!this.setBreadcrumbsHandler)throw new Error("Breadcrumb service has not been initialized");const newBreadcrumbs=this.breadcrumbs[type]?[...this.breadcrumbs[type]]:[...this.breadcrumbs.home];this.setBreadcrumbsHandler(newBreadcrumbs)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"F",(function(){return useKibana}));var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6);__webpack_require__.d(__webpack_exports__,"b",(function(){return _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_0__.CodeEditor}));var _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);__webpack_require__.d(__webpack_exports__,"a",(function(){return _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__.AuthorizationProvider})),__webpack_require__.d(__webpack_exports__,"j",(function(){return _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__.NotAuthorizedSection})),__webpack_require__.d(__webpack_exports__,"l",(function(){return _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__.SectionError})),__webpack_require__.d(__webpack_exports__,"m",(function(){return _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__.SectionLoading})),__webpack_require__.d(__webpack_exports__,"A",(function(){return _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__.sendRequest})),__webpack_require__.d(__webpack_exports__,"B",(function(){return _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__.useAuthorizationContext})),__webpack_require__.d(__webpack_exports__,"G",(function(){return _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__.useRequest})),__webpack_require__.d(__webpack_exports__,"s",(function(){return _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__.WithPrivileges})),__webpack_require__.d(__webpack_exports__,"t",(function(){return _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__.XJson})),__webpack_require__.d(__webpack_exports__,"h",(function(){return _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__.JsonEditor})),__webpack_require__.d(__webpack_exports__,"u",(function(){return _src_plugins_es_ui_shared_public___WEBPACK_IMPORTED_MODULE_1__.attemptToURIDecode}));var _src_plugins_es_ui_shared_static_forms_hook_form_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0);__webpack_require__.d(__webpack_exports__,"d",(function(){return _src_plugins_es_ui_shared_static_forms_hook_form_lib__WEBPACK_IMPORTED_MODULE_2__.FIELD_TYPES})),__webpack_require__.d(__webpack_exports__,"C",(function(){return _src_plugins_es_ui_shared_static_forms_hook_form_lib__WEBPACK_IMPORTED_MODULE_2__.useForm})),__webpack_require__.d(__webpack_exports__,"f",(function(){return _src_plugins_es_ui_shared_static_forms_hook_form_lib__WEBPACK_IMPORTED_MODULE_2__.Form})),__webpack_require__.d(__webpack_exports__,"z",(function(){return _src_plugins_es_ui_shared_static_forms_hook_form_lib__WEBPACK_IMPORTED_MODULE_2__.getUseField})),__webpack_require__.d(__webpack_exports__,"r",(function(){return _src_plugins_es_ui_shared_static_forms_hook_form_lib__WEBPACK_IMPORTED_MODULE_2__.UseField})),__webpack_require__.d(__webpack_exports__,"q",(function(){return _src_plugins_es_ui_shared_static_forms_hook_form_lib__WEBPACK_IMPORTED_MODULE_2__.UseArray})),__webpack_require__.d(__webpack_exports__,"D",(function(){return _src_plugins_es_ui_shared_static_forms_hook_form_lib__WEBPACK_IMPORTED_MODULE_2__.useFormContext})),__webpack_require__.d(__webpack_exports__,"g",(function(){return _src_plugins_es_ui_shared_static_forms_hook_form_lib__WEBPACK_IMPORTED_MODULE_2__.FormDataProvider})),__webpack_require__.d(__webpack_exports__,"x",(function(){return _src_plugins_es_ui_shared_static_forms_hook_form_lib__WEBPACK_IMPORTED_MODULE_2__.getFieldValidityAndErrorMessage})),__webpack_require__.d(__webpack_exports__,"E",(function(){return _src_plugins_es_ui_shared_static_forms_hook_form_lib__WEBPACK_IMPORTED_MODULE_2__.useFormData}));var _src_plugins_es_ui_shared_static_forms_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10);__webpack_require__.d(__webpack_exports__,"v",(function(){return _src_plugins_es_ui_shared_static_forms_helpers__WEBPACK_IMPORTED_MODULE_3__.fieldFormatters})),__webpack_require__.d(__webpack_exports__,"w",(function(){return _src_plugins_es_ui_shared_static_forms_helpers__WEBPACK_IMPORTED_MODULE_3__.fieldValidators}));var _src_plugins_es_ui_shared_static_forms_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2);__webpack_require__.d(__webpack_exports__,"y",(function(){return _src_plugins_es_ui_shared_static_forms_components__WEBPACK_IMPORTED_MODULE_4__.getFormRow})),__webpack_require__.d(__webpack_exports__,"e",(function(){return _src_plugins_es_ui_shared_static_forms_components__WEBPACK_IMPORTED_MODULE_4__.Field})),__webpack_require__.d(__webpack_exports__,"i",(function(){return _src_plugins_es_ui_shared_static_forms_components__WEBPACK_IMPORTED_MODULE_4__.JsonEditorField})),__webpack_require__.d(__webpack_exports__,"p",(function(){return _src_plugins_es_ui_shared_static_forms_components__WEBPACK_IMPORTED_MODULE_4__.ToggleField})),__webpack_require__.d(__webpack_exports__,"c",(function(){return _src_plugins_es_ui_shared_static_forms_components__WEBPACK_IMPORTED_MODULE_4__.ComboBoxField})),__webpack_require__.d(__webpack_exports__,"k",(function(){return _src_plugins_es_ui_shared_static_forms_components__WEBPACK_IMPORTED_MODULE_4__.NumericField})),__webpack_require__.d(__webpack_exports__,"n",(function(){return _src_plugins_es_ui_shared_static_forms_components__WEBPACK_IMPORTED_MODULE_4__.SelectField})),__webpack_require__.d(__webpack_exports__,"o",(function(){return _src_plugins_es_ui_shared_static_forms_components__WEBPACK_IMPORTED_MODULE_4__.TextField}));__webpack_require__(11);const useKibana=()=>Object(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_0__.useKibana)()},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/static/forms/helpers");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/static/validators/string");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.KbnAnalytics},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/management/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(15);__kbnBundles__.define("plugin/ingestPipelines/public",__webpack_require__,16)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.ingestPipelines},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin})),__webpack_require__.d(__webpack_exports__,"INGEST_PIPELINES_APP_ULR_GENERATOR",(function(){return INGEST_PIPELINES_APP_ULR_GENERATOR})),__webpack_require__.d(__webpack_exports__,"IngestPipelinesUrlGenerator",(function(){return url_generator_IngestPipelinesUrlGenerator})),__webpack_require__.d(__webpack_exports__,"IngestPipelinesUrlGeneratorState",(function(){})),__webpack_require__.d(__webpack_exports__,"INGEST_PIPELINES_PAGES",(function(){return INGEST_PIPELINES_PAGES}));var external_kbnSharedDeps_KbnI18n_=__webpack_require__(5),constants=__webpack_require__(3),services=__webpack_require__(8),public_=__webpack_require__(13),navigation=__webpack_require__(7);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const INGEST_PIPELINES_APP_ULR_GENERATOR="INGEST_PIPELINES_APP_URL_GENERATOR";let INGEST_PIPELINES_PAGES;!function(INGEST_PIPELINES_PAGES){INGEST_PIPELINES_PAGES.LIST="pipelines_list",INGEST_PIPELINES_PAGES.EDIT="pipeline_edit",INGEST_PIPELINES_PAGES.CREATE="pipeline_create",INGEST_PIPELINES_PAGES.CLONE="pipeline_clone"}(INGEST_PIPELINES_PAGES||(INGEST_PIPELINES_PAGES={}));class url_generator_IngestPipelinesUrlGenerator{constructor(getAppBasePath){this.getAppBasePath=getAppBasePath,_defineProperty(this,"id",INGEST_PIPELINES_APP_ULR_GENERATOR),_defineProperty(this,"createUrl",async state=>{switch(state.page){case INGEST_PIPELINES_PAGES.EDIT:return`${await this.getAppBasePath(!!state.absolute)}${Object(navigation.d)({pipelineName:state.pipelineId})}`;case INGEST_PIPELINES_PAGES.CREATE:return`${await this.getAppBasePath(!!state.absolute)}${Object(navigation.c)()}`;case INGEST_PIPELINES_PAGES.LIST:return`${await this.getAppBasePath(!!state.absolute)}${Object(navigation.e)({inspectedPipelineName:state.pipelineId})}`;case INGEST_PIPELINES_PAGES.CLONE:return`${await this.getAppBasePath(!!state.absolute)}${Object(navigation.b)({clonedPipelineName:state.pipelineId})}`}})}}class plugin_IngestPipelinesPlugin{setup(coreSetup,plugins){const{management:management,usageCollection:usageCollection,share:share}=plugins,{http:http,getStartServices:getStartServices}=coreSetup;services.d.setup(usageCollection),services.a.setup(http,services.d);const pluginName=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ingestPipelines.appTitle",{defaultMessage:"Ingest Node Pipelines"});management.sections.section.ingest.registerApp({id:constants.c,order:1,title:pluginName,mount:async params=>{const[coreStart]=await getStartServices(),{chrome:{docTitle:docTitle}}=coreStart;docTitle.change(pluginName);const{mountManagementSection:mountManagementSection}=await __webpack_require__.e(1).then(__webpack_require__.bind(null,344)),unmountAppCallback=await mountManagementSection(coreSetup,params);return()=>{docTitle.reset(),unmountAppCallback()}}}),((coreSetup,management,share)=>{share.urlGenerators.registerUrlGenerator(new url_generator_IngestPipelinesUrlGenerator(async(absolute=!1)=>{const[coreStart]=await coreSetup.getStartServices();return coreStart.application.getUrlForApp(public_.MANAGEMENT_APP_ID,{path:management.sections.section.ingest.getApp(constants.c).basePath,absolute:!!absolute})}))})(coreSetup,management,share)}start(){}stop(){}}function public_plugin(){return new plugin_IngestPipelinesPlugin}},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,exports){module.exports=__kbnSharedDeps__.KbnMonaco},function(module,exports){module.exports=__kbnSharedDeps__.ReactRouterDom}]);