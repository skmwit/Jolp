/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(modules){function webpackJsonpCallback(data){for(var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],i=0,resolves=[];i<chunkIds.length;i++)chunkId=chunkIds[i],Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]&&resolves.push(installedChunks[chunkId][0]),installedChunks[chunkId]=0;for(moduleId in moreModules)Object.prototype.hasOwnProperty.call(moreModules,moduleId)&&(modules[moduleId]=moreModules[moduleId]);for(parentJsonpFunction&&parentJsonpFunction(data);resolves.length;)resolves.shift()()}var installedModules={},installedChunks={1:0};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.e=function(chunkId){var promises=[],installedChunkData=installedChunks[chunkId];if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var onScriptComplete,script=document.createElement("script");script.charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.src=function(chunkId){return __webpack_require__.p+"lens.chunk."+chunkId+".js"}(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null,clearTimeout(timeout);var chunk=installedChunks[chunkId];if(0!==chunk){if(chunk){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,chunk[1](error)}installedChunks[chunkId]=void 0}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete,document.head.appendChild(script)}return Promise.all(promises)},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__.oe=function(err){throw console.error(err),err};var jsonpArray=window.lens_bundle_jsonpfunction=window.lens_bundle_jsonpfunction||[],oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback,jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;__webpack_require__(__webpack_require__.s=17)}([function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){"use strict";var _api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12);__webpack_require__.o(_api__WEBPACK_IMPORTED_MODULE_0__,"APP_ID")&&__webpack_require__.d(__webpack_exports__,"APP_ID",(function(){return _api__WEBPACK_IMPORTED_MODULE_0__.APP_ID})),__webpack_require__.o(_api__WEBPACK_IMPORTED_MODULE_0__,"BASE_API_URL")&&__webpack_require__.d(__webpack_exports__,"BASE_API_URL",(function(){return _api__WEBPACK_IMPORTED_MODULE_0__.BASE_API_URL})),__webpack_require__.o(_api__WEBPACK_IMPORTED_MODULE_0__,"DOC_TYPE")&&__webpack_require__.d(__webpack_exports__,"DOC_TYPE",(function(){return _api__WEBPACK_IMPORTED_MODULE_0__.DOC_TYPE})),__webpack_require__.o(_api__WEBPACK_IMPORTED_MODULE_0__,"LENS_EDIT_BY_VALUE")&&__webpack_require__.d(__webpack_exports__,"LENS_EDIT_BY_VALUE",(function(){return _api__WEBPACK_IMPORTED_MODULE_0__.LENS_EDIT_BY_VALUE})),__webpack_require__.o(_api__WEBPACK_IMPORTED_MODULE_0__,"LENS_EMBEDDABLE_TYPE")&&__webpack_require__.d(__webpack_exports__,"LENS_EMBEDDABLE_TYPE",(function(){return _api__WEBPACK_IMPORTED_MODULE_0__.LENS_EMBEDDABLE_TYPE})),__webpack_require__.o(_api__WEBPACK_IMPORTED_MODULE_0__,"NOT_INTERNATIONALIZED_PRODUCT_NAME")&&__webpack_require__.d(__webpack_exports__,"NOT_INTERNATIONALIZED_PRODUCT_NAME",(function(){return _api__WEBPACK_IMPORTED_MODULE_0__.NOT_INTERNATIONALIZED_PRODUCT_NAME})),__webpack_require__.o(_api__WEBPACK_IMPORTED_MODULE_0__,"PLUGIN_ID")&&__webpack_require__.d(__webpack_exports__,"PLUGIN_ID",(function(){return _api__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_ID})),__webpack_require__.o(_api__WEBPACK_IMPORTED_MODULE_0__,"getBasePath")&&__webpack_require__.d(__webpack_exports__,"getBasePath",(function(){return _api__WEBPACK_IMPORTED_MODULE_0__.getBasePath})),__webpack_require__.o(_api__WEBPACK_IMPORTED_MODULE_0__,"getEditPath")&&__webpack_require__.d(__webpack_exports__,"getEditPath",(function(){return _api__WEBPACK_IMPORTED_MODULE_0__.getEditPath})),__webpack_require__.o(_api__WEBPACK_IMPORTED_MODULE_0__,"getFullPath")&&__webpack_require__.d(__webpack_exports__,"getFullPath",(function(){return _api__WEBPACK_IMPORTED_MODULE_0__.getFullPath}));var _constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7);__webpack_require__.d(__webpack_exports__,"APP_ID",(function(){return _constants__WEBPACK_IMPORTED_MODULE_1__.APP_ID})),__webpack_require__.d(__webpack_exports__,"BASE_API_URL",(function(){return _constants__WEBPACK_IMPORTED_MODULE_1__.BASE_API_URL})),__webpack_require__.d(__webpack_exports__,"DOC_TYPE",(function(){return _constants__WEBPACK_IMPORTED_MODULE_1__.DOC_TYPE})),__webpack_require__.d(__webpack_exports__,"LENS_EDIT_BY_VALUE",(function(){return _constants__WEBPACK_IMPORTED_MODULE_1__.LENS_EDIT_BY_VALUE})),__webpack_require__.d(__webpack_exports__,"LENS_EMBEDDABLE_TYPE",(function(){return _constants__WEBPACK_IMPORTED_MODULE_1__.LENS_EMBEDDABLE_TYPE})),__webpack_require__.d(__webpack_exports__,"NOT_INTERNATIONALIZED_PRODUCT_NAME",(function(){return _constants__WEBPACK_IMPORTED_MODULE_1__.NOT_INTERNATIONALIZED_PRODUCT_NAME})),__webpack_require__.d(__webpack_exports__,"PLUGIN_ID",(function(){return _constants__WEBPACK_IMPORTED_MODULE_1__.PLUGIN_ID})),__webpack_require__.d(__webpack_exports__,"getBasePath",(function(){return _constants__WEBPACK_IMPORTED_MODULE_1__.getBasePath})),__webpack_require__.d(__webpack_exports__,"getEditPath",(function(){return _constants__WEBPACK_IMPORTED_MODULE_1__.getEditPath})),__webpack_require__.d(__webpack_exports__,"getFullPath",(function(){return _constants__WEBPACK_IMPORTED_MODULE_1__.getFullPath}));__webpack_require__(13)},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/uiActions/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("entry/core/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/embeddable/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PLUGIN_ID",(function(){return PLUGIN_ID})),__webpack_require__.d(__webpack_exports__,"APP_ID",(function(){return APP_ID})),__webpack_require__.d(__webpack_exports__,"LENS_EMBEDDABLE_TYPE",(function(){return LENS_EMBEDDABLE_TYPE})),__webpack_require__.d(__webpack_exports__,"DOC_TYPE",(function(){return DOC_TYPE})),__webpack_require__.d(__webpack_exports__,"NOT_INTERNATIONALIZED_PRODUCT_NAME",(function(){return NOT_INTERNATIONALIZED_PRODUCT_NAME})),__webpack_require__.d(__webpack_exports__,"BASE_API_URL",(function(){return BASE_API_URL})),__webpack_require__.d(__webpack_exports__,"LENS_EDIT_BY_VALUE",(function(){return LENS_EDIT_BY_VALUE})),__webpack_require__.d(__webpack_exports__,"getBasePath",(function(){return getBasePath})),__webpack_require__.d(__webpack_exports__,"getEditPath",(function(){return getEditPath})),__webpack_require__.d(__webpack_exports__,"getFullPath",(function(){return getFullPath}));var rison_node__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),rison_node__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(rison_node__WEBPACK_IMPORTED_MODULE_0__);const PLUGIN_ID="lens",APP_ID="lens",LENS_EMBEDDABLE_TYPE="lens",DOC_TYPE="lens",NOT_INTERNATIONALIZED_PRODUCT_NAME="Lens Visualizations",BASE_API_URL="/api/lens",LENS_EDIT_BY_VALUE="edit_by_value";function getBasePath(){return"#/"}function getEditPath(id,timeRange){let timeParam="";return timeRange&&(timeParam="?_g="+rison_node__WEBPACK_IMPORTED_MODULE_0___default.a.encode({time:timeRange})),id?`#/edit/${encodeURIComponent(id)}${timeParam}`:`#/${LENS_EDIT_BY_VALUE}${timeParam}`}function getFullPath(id){return`/app/${PLUGIN_ID}${id?getEditPath(id):"#/"}`}},function(module,exports){module.exports=__kbnSharedDeps__.Rxjs},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/data/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){},function(module,exports){},function(module,exports){module.exports=__kbnSharedDeps__.MomentTimezone},function(module,exports){module.exports=__kbnSharedDeps__.RisonNode},function(module,exports,__webpack_require__){"use strict";module.exports=function(){function _min(d0,d1,d2,bx,ay){return d0<d1||d2<d1?d0>d2?d2+1:d0+1:bx===ay?d1:d1+1}return function(a,b){if(a===b)return 0;if(a.length>b.length){var tmp=a;a=b,b=tmp}for(var la=a.length,lb=b.length;la>0&&a.charCodeAt(la-1)===b.charCodeAt(lb-1);)la--,lb--;for(var offset=0;offset<la&&a.charCodeAt(offset)===b.charCodeAt(offset);)offset++;if(lb-=offset,0===(la-=offset)||lb<3)return lb;var y,d0,d1,d2,d3,dd,dy,ay,bx0,bx1,bx2,bx3,x=0,vector=[];for(y=0;y<la;y++)vector.push(y+1),vector.push(a.charCodeAt(offset+y));for(var len=vector.length-1;x<lb-3;)for(bx0=b.charCodeAt(offset+(d0=x)),bx1=b.charCodeAt(offset+(d1=x+1)),bx2=b.charCodeAt(offset+(d2=x+2)),bx3=b.charCodeAt(offset+(d3=x+3)),dd=x+=4,y=0;y<len;y+=2)d0=_min(dy=vector[y],d0,d1,bx0,ay=vector[y+1]),d1=_min(d0,d1,d2,bx1,ay),d2=_min(d1,d2,d3,bx2,ay),dd=_min(d2,d3,dd,bx3,ay),vector[y]=dd,d3=d2,d2=d1,d1=d0,d0=dy;for(;x<lb;)for(bx0=b.charCodeAt(offset+(d0=x)),dd=++x,y=0;y<len;y+=2)dy=vector[y],vector[y]=dd=_min(dy,d0,dd,bx0,vector[y+1]),d0=dy;return dd}}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(18);__kbnBundles__.define("plugin/lens/public",__webpack_require__,19),__kbnBundles__.define("plugin/lens/common/constants",__webpack_require__,7)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.lens},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"EmbeddableComponentProps",(function(){})),__webpack_require__.d(__webpack_exports__,"TypedLensByValueInput",(function(){})),__webpack_require__.d(__webpack_exports__,"LensPublicStart",(function(){})),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var public_=__webpack_require__(5),external_kbnSharedDeps_React_=__webpack_require__(3),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_ReactDom_=__webpack_require__(6),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(9),external_kbnSharedDeps_KbnI18n_=__webpack_require__(0),data_public_=__webpack_require__(10);const{toAbsoluteDates:toAbsoluteDates}=data_public_.search.aggs,mergeTables={name:"lens_merge_tables",type:"lens_multitable",help:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.lens.functions.mergeTables.help",{defaultMessage:"A helper to merge any number of kibana tables into a single table and expose it via inspector adapter"}),args:{layerIds:{types:["string"],help:"",multi:!0},tables:{types:["datatable"],help:"",multi:!0}},inputTypes:["kibana_context","null"],fn(input,{layerIds:layerIds,tables:tables},context){const resultTables={};return tables.forEach((table,index)=>{var _context$inspectorAda;resultTables[layerIds[index]]=table,null!=context&&null!==(_context$inspectorAda=context.inspectorAdapters)&&void 0!==_context$inspectorAda&&_context$inspectorAda.tables&&(context.inspectorAdapters.tables.allowCsvExport=!0,context.inspectorAdapters.tables.logDatatable(layerIds[index],table))}),{type:"lens_multitable",tables:resultTables,dateRange:getDateRange(input)}}};function getDateRange(value){if(!value||!value.timeRange)return;const dateRange=toAbsoluteDates(value.timeRange);return dateRange?{fromDate:dateRange.from,toDate:dateRange.to}:void 0}var common=__webpack_require__(1);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class embeddable_factory_EmbeddableFactory{constructor(getStartServices){this.getStartServices=getStartServices,_defineProperty(this,"type",common.DOC_TYPE),_defineProperty(this,"savedObjectMetaData",{name:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.lens.lensSavedObjectLabel",{defaultMessage:"Lens Visualization"}),type:common.DOC_TYPE,getIconForSavedObject:()=>"lensApp"}),_defineProperty(this,"isEditable",async()=>{var _capabilities$dashboa;const{capabilities:capabilities}=await this.getStartServices();return Boolean(capabilities.visualize.save||(null===(_capabilities$dashboa=capabilities.dashboard)||void 0===_capabilities$dashboa?void 0:_capabilities$dashboa.showWriteControls))}),_defineProperty(this,"createFromSavedObject",async(savedObjectId,input,parent)=>(input.savedObjectId||(input.savedObjectId=savedObjectId),this.create(input,parent)))}canCreateNew(){return!1}getDisplayName(){return external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.lens.embeddableDisplayName",{defaultMessage:"lens"})}async create(input,parent){var _capabilities$dashboa2;const{timefilter:timefilter,expressionRenderer:expressionRenderer,documentToExpression:documentToExpression,uiActions:uiActions,coreHttp:coreHttp,attributeService:attributeService,indexPatternService:indexPatternService,capabilities:capabilities,usageCollection:usageCollection}=await this.getStartServices(),{Embeddable:Embeddable}=await __webpack_require__.e(0).then(__webpack_require__.bind(null,317));return new Embeddable({attributeService:attributeService,indexPatternService:indexPatternService,timefilter:timefilter,expressionRenderer:expressionRenderer,basePath:coreHttp.basePath,getTrigger:null==uiActions?void 0:uiActions.getTrigger,getTriggerCompatibleActions:null==uiActions?void 0:uiActions.getTriggerCompatibleActions,documentToExpression:documentToExpression,capabilities:{canSaveDashboards:Boolean(null===(_capabilities$dashboa2=capabilities.dashboard)||void 0===_capabilities$dashboa2?void 0:_capabilities$dashboa2.showWriteControls),canSaveVisualizations:Boolean(capabilities.visualize.save)},usageCollection:usageCollection},input,parent)}extract(state){let references=[];const typedState=state;return"attributes"in typedState&&void 0!==typedState.attributes&&(references=typedState.attributes.references),{state:state,references:references}}}function service_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}async function collectAsyncDefinitions(definitions){const resolvedDefinitions=await Promise.all(definitions.map(definition=>"function"==typeof definition?definition():definition)),definitionMap={};return resolvedDefinitions.forEach(definition=>{definitionMap[definition.id]=definition}),definitionMap}class service_EditorFrameService{constructor(){service_defineProperty(this,"datasources",[]),service_defineProperty(this,"visualizations",[]),service_defineProperty(this,"documentToExpression",async doc=>{const[resolvedDatasources,resolvedVisualizations]=await Promise.all([collectAsyncDefinitions(this.datasources),collectAsyncDefinitions(this.visualizations)]),{persistedStateToExpression:persistedStateToExpression}=await __webpack_require__.e(0).then(__webpack_require__.bind(null,317));return await persistedStateToExpression(resolvedDatasources,resolvedVisualizations,doc)})}setup(core,plugins,getAttributeService){plugins.expressions.registerFunction(()=>mergeTables);const getStartServices=async()=>{const[coreStart,deps]=await core.getStartServices();return{attributeService:await getAttributeService(),capabilities:coreStart.application.capabilities,coreHttp:coreStart.http,timefilter:deps.data.query.timefilter.timefilter,expressionRenderer:deps.expressions.ReactExpressionRenderer,documentToExpression:this.documentToExpression,indexPatternService:deps.data.indexPatterns,uiActions:deps.uiActions,usageCollection:plugins.usageCollection}};return plugins.embeddable&&plugins.embeddable.registerEmbeddableFactory("lens",new embeddable_factory_EmbeddableFactory(getStartServices)),{registerDatasource:datasource=>{this.datasources.push(datasource)},registerVisualization:visualization=>{this.visualizations.push(visualization)}}}start(core,plugins){return{createInstance:async()=>{let domElement;const[resolvedDatasources,resolvedVisualizations]=await Promise.all([collectAsyncDefinitions(this.datasources),collectAsyncDefinitions(this.visualizations)]),unmount=()=>{domElement&&Object(external_kbnSharedDeps_ReactDom_.unmountComponentAtNode)(domElement)};return{mount:async(element,{doc:doc,onError:onError,dateRange:dateRange,query:query,filters:filters,savedQuery:savedQuery,onChange:onChange,showNoDataPopover:showNoDataPopover,initialContext:initialContext,searchSessionId:searchSessionId})=>{domElement!==element&&unmount(),domElement=element;const firstDatasourceId=Object.keys(resolvedDatasources)[0],firstVisualizationId=Object.keys(resolvedVisualizations)[0],{EditorFrame:EditorFrame,getActiveDatasourceIdFromDoc:getActiveDatasourceIdFromDoc}=await __webpack_require__.e(0).then(__webpack_require__.bind(null,317)),palettes=await plugins.charts.palettes.getPalettes();Object(external_kbnSharedDeps_ReactDom_.render)(external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.I18nProvider,null,external_kbnSharedDeps_React_default.a.createElement(EditorFrame,{"data-test-subj":"lnsEditorFrame",onError:onError,datasourceMap:resolvedDatasources,visualizationMap:resolvedVisualizations,initialDatasourceId:getActiveDatasourceIdFromDoc(doc)||firstDatasourceId||null,initialVisualizationId:doc&&doc.visualizationType||firstVisualizationId||null,key:null==doc?void 0:doc.savedObjectId,core:core,plugins:plugins,ExpressionRenderer:plugins.expressions.ReactExpressionRenderer,palettes:palettes,doc:doc,dateRange:dateRange,query:query,filters:filters,savedQuery:savedQuery,onChange:onChange,showNoDataPopover:showNoDataPopover,initialContext:initialContext,searchSessionId:searchSessionId})),domElement)},unmount:unmount}}}}}var kibanaUtils_public_=__webpack_require__(11);class indexpattern_datasource_IndexPatternDatasource{constructor(){}setup(core,{expressions:expressions,editorFrame:editorFrame,charts:charts}){editorFrame.registerDatasource(async()=>{const{getIndexPatternDatasource:getIndexPatternDatasource,renameColumns:renameColumns,formatColumn:formatColumn,counterRate:counterRate,getTimeScaleFunction:getTimeScaleFunction,getSuffixFormatter:getSuffixFormatter}=await __webpack_require__.e(0).then(__webpack_require__.bind(null,317));return core.getStartServices().then(([coreStart,{data:data,indexPatternFieldEditor:indexPatternFieldEditor}])=>(data.fieldFormats.register([getSuffixFormatter(data.fieldFormats.deserialize)]),expressions.registerFunction(getTimeScaleFunction(data)),expressions.registerFunction(counterRate),expressions.registerFunction(renameColumns),expressions.registerFunction(formatColumn),getIndexPatternDatasource({core:coreStart,storage:new kibanaUtils_public_.Storage(localStorage),data:data,charts:charts,indexPatternFieldEditor:indexPatternFieldEditor})))})}}var external_kbnSharedDeps_MomentTimezone_=__webpack_require__(14),external_kbnSharedDeps_MomentTimezone_default=__webpack_require__.n(external_kbnSharedDeps_MomentTimezone_);function getTimeZone(uiSettings){const configuredTimeZone=uiSettings.get("dateFormat:tz");return"Browser"===configuredTimeZone?external_kbnSharedDeps_MomentTimezone_default.a.tz.guess():configuredTimeZone}class XyVisualization{constructor(){}setup(core,{expressions:expressions,formatFactory:formatFactory,editorFrame:editorFrame,charts:charts}){editorFrame.registerVisualization(async()=>{const{legendConfig:legendConfig,yAxisConfig:yAxisConfig,tickLabelsConfig:tickLabelsConfig,gridlinesConfig:gridlinesConfig,axisTitlesVisibilityConfig:axisTitlesVisibilityConfig,layerConfig:layerConfig,xyChart:xyChart,getXyChartRenderer:getXyChartRenderer,getXyVisualization:getXyVisualization}=await __webpack_require__.e(0).then(__webpack_require__.bind(null,317)),[,{data:data}]=await core.getStartServices(),palettes=await charts.palettes.getPalettes();return expressions.registerFunction(()=>legendConfig),expressions.registerFunction(()=>yAxisConfig),expressions.registerFunction(()=>tickLabelsConfig),expressions.registerFunction(()=>gridlinesConfig),expressions.registerFunction(()=>axisTitlesVisibilityConfig),expressions.registerFunction(()=>layerConfig),expressions.registerFunction(()=>xyChart),expressions.registerRenderer(getXyChartRenderer({formatFactory:formatFactory,chartsThemeService:charts.theme,paletteService:palettes,timeZone:getTimeZone(core.uiSettings)})),getXyVisualization({paletteService:palettes,data:data})})}}class MetricVisualization{constructor(){}setup(_core,{expressions:expressions,formatFactory:formatFactory,editorFrame:editorFrame}){editorFrame.registerVisualization(async()=>{const{metricVisualization:metricVisualization,metricChart:metricChart,getMetricChartRenderer:getMetricChartRenderer}=await __webpack_require__.e(0).then(__webpack_require__.bind(null,317));return expressions.registerFunction(()=>metricChart),expressions.registerRenderer(()=>getMetricChartRenderer(formatFactory)),metricVisualization})}}class DatatableVisualization{constructor(){}setup(core,{expressions:expressions,formatFactory:formatFactory,editorFrame:editorFrame}){editorFrame.registerVisualization(async()=>{const{getDatatable:getDatatable,datatableColumn:datatableColumn,getDatatableRenderer:getDatatableRenderer,datatableVisualization:datatableVisualization}=await __webpack_require__.e(0).then(__webpack_require__.bind(null,317)),resolvedFormatFactory=await formatFactory;return expressions.registerFunction(()=>datatableColumn),expressions.registerFunction(()=>getDatatable({formatFactory:resolvedFormatFactory})),expressions.registerRenderer(()=>getDatatableRenderer({formatFactory:resolvedFormatFactory,getType:core.getStartServices().then(([_,{data:dataStart}])=>dataStart.search.aggs.types.get)})),datatableVisualization})}}class PieVisualization{constructor(){}setup(core,{expressions:expressions,formatFactory:formatFactory,editorFrame:editorFrame,charts:charts}){editorFrame.registerVisualization(async()=>{const{getPieVisualization:getPieVisualization,pie:pie,getPieRenderer:getPieRenderer}=await __webpack_require__.e(0).then(__webpack_require__.bind(null,317)),palettes=await charts.palettes.getPalettes();return expressions.registerFunction(()=>pie),expressions.registerRenderer(getPieRenderer({formatFactory:formatFactory,chartsThemeService:charts.theme,paletteService:palettes})),getPieVisualization({paletteService:palettes})})}}var core_public_=__webpack_require__(4),uiActions_public_=__webpack_require__(2);var js_levenshtein=__webpack_require__(16),js_levenshtein_default=__webpack_require__.n(js_levenshtein),external_kbnSharedDeps_Rxjs_=__webpack_require__(8);function plugin_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class plugin_LensPlugin{constructor(){plugin_defineProperty(this,"datatableVisualization",void 0),plugin_defineProperty(this,"editorFrameService",void 0),plugin_defineProperty(this,"createEditorFrame",null),plugin_defineProperty(this,"attributeService",null),plugin_defineProperty(this,"indexpatternDatasource",void 0),plugin_defineProperty(this,"xyVisualization",void 0),plugin_defineProperty(this,"metricVisualization",void 0),plugin_defineProperty(this,"pieVisualization",void 0),plugin_defineProperty(this,"stopReportManager",void 0),this.datatableVisualization=new DatatableVisualization,this.editorFrameService=new service_EditorFrameService,this.indexpatternDatasource=new indexpattern_datasource_IndexPatternDatasource,this.xyVisualization=new XyVisualization,this.metricVisualization=new MetricVisualization,this.pieVisualization=new PieVisualization}setup(core,{urlForwarding:urlForwarding,expressions:expressions,data:data,embeddable:embeddable,visualizations:visualizations,charts:charts,globalSearch:globalSearch,usageCollection:usageCollection}){this.attributeService=async()=>{const{getLensAttributeService:getLensAttributeService}=await __webpack_require__.e(0).then(__webpack_require__.bind(null,317)),[coreStart,startDependencies]=await core.getStartServices();return getLensAttributeService(coreStart,startDependencies)};const dependencies={expressions:expressions,data:data,charts:charts,editorFrame:this.editorFrameService.setup(core,{data:data,embeddable:embeddable,charts:charts,expressions:expressions,usageCollection:usageCollection},this.attributeService),formatFactory:core.getStartServices().then(([_,{data:dataStart}])=>dataStart.fieldFormats.deserialize)};this.indexpatternDatasource.setup(core,dependencies),this.xyVisualization.setup(core,dependencies),this.datatableVisualization.setup(core,dependencies),this.metricVisualization.setup(core,dependencies),this.pieVisualization.setup(core,dependencies),visualizations.registerAlias({aliasPath:Object(common.getBasePath)(),aliasApp:"lens",name:"lens",promotion:!0,title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.lens.visTypeAlias.title",{defaultMessage:"Lens"}),description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.lens.visTypeAlias.description",{defaultMessage:"Create visualizations with our drag and drop editor. Switch between visualization types at any time."}),note:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.lens.visTypeAlias.note",{defaultMessage:"Recommended for most users."}),icon:"lensApp",stage:"production",appExtensions:{visualizations:{docTypes:["lens"],searchFields:["title^3"],toListItem(savedObject){const{id:id,type:type,attributes:attributes}=savedObject,{title:title,description:description}=attributes;return{id:id,title:title,description:description,editUrl:Object(common.getEditPath)(id),editApp:"lens",icon:"lensApp",stage:"production",savedObjectType:type,typeTitle:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.lens.visTypeAlias.type",{defaultMessage:"Lens"})}}}}});const getByValueFeatureFlag=async()=>{const[,deps]=await core.getStartServices();return deps.dashboard.dashboardFeatureFlagConfig},getPresentationUtilContext=async()=>{const[,deps]=await core.getStartServices(),{ContextProvider:ContextProvider}=deps.presentationUtil;return ContextProvider};var uiCapabilities;core.application.register({id:common.APP_ID,title:common.NOT_INTERNATIONALIZED_PRODUCT_NAME,navLinkStatus:core_public_.AppNavLinkStatus.hidden,mount:async params=>{const{mountApp:mountApp,stopReportManager:stopReportManager}=await __webpack_require__.e(0).then(__webpack_require__.bind(null,317));return this.stopReportManager=stopReportManager,await(async()=>{const[,deps]=await core.getStartServices();await deps.data.indexPatterns.ensureDefaultIndexPattern()})(),mountApp(core,params,{createEditorFrame:this.createEditorFrame,attributeService:this.attributeService,getByValueFeatureFlag:getByValueFeatureFlag,getPresentationUtilContext:getPresentationUtilContext})}}),globalSearch&&globalSearch.registerResultProvider((uiCapabilities=core.getStartServices().then(([{application:{capabilities:capabilities}}])=>capabilities),{id:"lens",find:({term:term="",types:types,tags:tags})=>tags||types&&!types.includes("application")?Object(external_kbnSharedDeps_Rxjs_.of)([]):Object(external_kbnSharedDeps_Rxjs_.from)(uiCapabilities.then(({navLinks:{visualize:visualizeNavLink}})=>{if(!visualizeNavLink)return[];const title=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.lens.searchTitle",{defaultMessage:"Lens: create visualizations",description:"Lens is a product name and should not be translated"}),searchableTitle=title.toLowerCase();let score=0;if(searchableTitle===(term=term.toLowerCase()))score=100;else if(searchableTitle.startsWith(term))score=90;else if(searchableTitle.includes(term))score=75;else{const length=Math.max(term.length,searchableTitle.length),distance=js_levenshtein_default()(term,searchableTitle),ratio=Math.floor(100*(1-distance/length));ratio>=60&&(score=ratio)}return 0===score?[]:[{id:"lens",title:title,type:"application",icon:"logoKibana",meta:{categoryId:core_public_.DEFAULT_APP_CATEGORIES.kibana.id,categoryLabel:core_public_.DEFAULT_APP_CATEGORIES.kibana.label},score:score,url:Object(common.getFullPath)()}]})),getSearchableTypes:()=>["application"]})),urlForwarding.forwardApp("lens","lens")}start(core,startDependencies){const frameStart=this.editorFrameService.start(core,startDependencies);var application,embeddableStart;return this.createEditorFrame=frameStart.createInstance,startDependencies.uiActions.hasAction(uiActions_public_.ACTION_VISUALIZE_FIELD)&&startDependencies.uiActions.unregisterAction(uiActions_public_.ACTION_VISUALIZE_FIELD),startDependencies.uiActions.addTriggerAction(uiActions_public_.VISUALIZE_FIELD_TRIGGER,(application=core.application,Object(uiActions_public_.createAction)({type:uiActions_public_.ACTION_VISUALIZE_LENS_FIELD,id:uiActions_public_.ACTION_VISUALIZE_LENS_FIELD,getDisplayName:()=>external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.lens.discover.visualizeFieldLegend",{defaultMessage:"Visualize field"}),isCompatible:async()=>!!application.capabilities.visualize.show,execute:async context=>{application.navigateToApp("lens",{state:{type:uiActions_public_.ACTION_VISUALIZE_LENS_FIELD,payload:context}})}}))),{EmbeddableComponent:(embeddableStart=startDependencies.embeddable,props=>{const factory=embeddableStart.getEmbeddableFactory("lens");return external_kbnSharedDeps_React_default.a.createElement(public_.EmbeddableRenderer,{factory:factory,input:props})}),navigateToPrefilledEditor:(input,openInNewTab)=>{input.timeRange&&!openInNewTab&&startDependencies.data.query.timefilter.timefilter.setTime(input.timeRange);new public_.EmbeddableStateTransfer(core.application.navigateToApp,core.application.currentAppId$).navigateToEditor("lens",{openInNewTab:openInNewTab,path:Object(common.getEditPath)(void 0,openInNewTab?input.timeRange:void 0),state:{originatingApp:"",valueInput:input}})},canUseEditor:()=>{var _core$application$cap;return Boolean(null===(_core$application$cap=core.application.capabilities.visualize)||void 0===_core$application$cap?void 0:_core$application$cap.show)},getXyVisTypes:async()=>{const{visualizationTypes:visualizationTypes}=await __webpack_require__.e(2).then(__webpack_require__.bind(null,40));return visualizationTypes}}}stop(){this.stopReportManager&&this.stopReportManager()}}const public_plugin=()=>new plugin_LensPlugin},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,exports){module.exports=__kbnSharedDeps__.ElasticCharts},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.TsLib},function(module,exports){module.exports=__kbnSharedDeps__.Moment},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/savedObjects/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/expressions/common");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.RxjsOperators},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/usageCollection/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactRouterDom},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/share/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/presentationUtil/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))}]);