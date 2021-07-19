/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=9)}([function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/embeddable/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.KbnMonaco},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/uiActionsEnhanced/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/uiActions/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.KbnStd},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(10);__kbnBundles__.define("plugin/urlDrilldown/public",__webpack_require__,11)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.urlDrilldown},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var public_=__webpack_require__(3),external_kbnSharedDeps_React_=__webpack_require__(5),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),embeddable_public_=__webpack_require__(1),uiActions_public_=__webpack_require__(4),kibanaReact_public_=__webpack_require__(6),external_kbnSharedDeps_KbnI18n_=__webpack_require__(0);const txtUrlDrilldownDisplayName=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.DisplayName",{defaultMessage:"Go to URL"});var external_kbnSharedDeps_KbnMonaco_=__webpack_require__(2);const toPrimitiveOrUndefined=v=>"number"==typeof v||"boolean"==typeof v||"string"==typeof v||null===v?v:"object"==typeof v&&v instanceof Date?v.toISOString():void 0!==v?String(v):void 0,deleteUndefinedKeys=obj=>(Object.keys(obj).forEach(key=>{void 0===obj[key]&&delete obj[key]}),obj),getEventScopeValues=eventScopeInput=>{if(Object(embeddable_public_.isRangeSelectTriggerContext)(eventScopeInput))return(eventScopeInput=>{const{table:table,column:columnIndex,range:range}=eventScopeInput.data,column=table.columns[columnIndex];return deleteUndefinedKeys({key:toPrimitiveOrUndefined(null==column?void 0:column.meta.field),from:toPrimitiveOrUndefined(range[0]),to:toPrimitiveOrUndefined(range[range.length-1])})})(eventScopeInput);if(Object(embeddable_public_.isValueClickTriggerContext)(eventScopeInput))return(eventScopeInput=>{var _eventScopeInput$data,_points$,_points$2;const negate=null!==(_eventScopeInput$data=eventScopeInput.data.negate)&&void 0!==_eventScopeInput$data&&_eventScopeInput$data,points=eventScopeInput.data.data.map(({table:table,value:value,column:columnIndex})=>{var _column$meta;const column=table.columns[columnIndex];return{value:toPrimitiveOrUndefined(value),key:null==column||null===(_column$meta=column.meta)||void 0===_column$meta?void 0:_column$meta.field}});return deleteUndefinedKeys({key:null===(_points$=points[0])||void 0===_points$?void 0:_points$.key,value:null===(_points$2=points[0])||void 0===_points$2?void 0:_points$2.value,negate:negate,points:points})})(eventScopeInput);if(Object(embeddable_public_.isRowClickTriggerContext)(eventScopeInput))return(ctx=>{const{data:data}=ctx,embeddable=ctx.embeddable,{rowIndex:rowIndex}=data,columns=data.columns||data.table.columns.map(({id:id})=>id),values=[],keys=[],columnNames=[],row=data.table.rows[rowIndex];for(const columnId of columns){const column=data.table.columns.find(({id:id})=>id===columnId);if(!column)throw console.error(data,embeddable?`Embeddable [${embeddable.getTitle()}]`:null),new Error("Could not find a datatable column.");values.push(row[columnId]),keys.push(column.meta.field||""),columnNames.push(column.name||column.meta.field||"")}return{rowIndex:rowIndex,values:values,keys:keys,columnNames:columnNames}})(eventScopeInput);if(Object(embeddable_public_.isContextMenuTriggerContext)(eventScopeInput))return{};throw new Error("UrlDrilldown [getEventScope] can't build scope from not supported trigger")},kind=external_kbnSharedDeps_KbnMonaco_.monaco.languages.CompletionItemKind.Event,valueClickVariables=[{label:"event.value",sortText:"1.event.value",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.click.event.value.title",{defaultMessage:"Click value."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.click.event.value.documentation",{defaultMessage:"Value behind clicked data point."}),kind:kind},{label:"event.key",sortText:"1.event.key",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.click.event.key.title",{defaultMessage:"Name of clicked field."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.click.event.key.documentation",{defaultMessage:"Field name behind clicked data point."}),kind:kind},{label:"event.negate",sortText:"1.event.negate",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.click.event.negate.title",{defaultMessage:"Whether the filter is negated."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.click.event.negate.documentation",{defaultMessage:"Boolean, indicating whether clicked data point resulted in negative filter."}),kind:kind},{label:"event.points",sortText:"1.event.points",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.click.event.points.title",{defaultMessage:"List of all clicked points."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.click.event.points.documentation",{defaultMessage:"Some visualizations have clickable points that emit more than one data point. Use list of data points in case a single value is insufficient."}),kind:kind}],rowClickVariables=[{label:"event.values",sortText:"1.event.values",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.row.event.values.title",{defaultMessage:"List of row cell values."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.row.event.values.documentation",{defaultMessage:"An array of all cell values for the raw on which the action will execute."}),kind:kind},{label:"event.keys",sortText:"1.event.keys",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.row.event.keys.title",{defaultMessage:"List of row cell fields."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.row.event.keys.documentation",{defaultMessage:"An array of field names for each column."}),kind:kind},{label:"event.columnNames",sortText:"1.event.columnNames",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.row.event.columnNames.title",{defaultMessage:"List of table column names."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.row.event.columnNames.documentation",{defaultMessage:"An array of column names."}),kind:kind},{label:"event.rowIndex",sortText:"1.event.rowIndex",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.row.event.rowIndex.title",{defaultMessage:"Clicked row index."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.row.event.rowIndex.documentation",{defaultMessage:"Number, representing the row that was clicked, starting from 0."}),kind:kind}],selectRangeVariables=[{label:"event.key",sortText:"1.event.key",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.range.event.key.title",{defaultMessage:"Name of aggregation field."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.range.event.key.documentation",{defaultMessage:"Aggregation field behind the selected range, if available."}),kind:kind},{label:"event.from",sortText:"1.event.from",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.range.event.from.title",{defaultMessage:"Range start value."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.range.event.from.documentation",{defaultMessage:"`from` value of the selected range. Depending on your data, could be either a date or number."}),kind:kind},{label:"event.to",sortText:"1.event.to",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.range.event.to.title",{defaultMessage:"Range end value."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.range.event.to.documentation",{defaultMessage:"`to` value of the selected range. Depending on your data, could be either a date or number."}),kind:kind}];var external_kbnSharedDeps_KbnStd_=__webpack_require__(7);const txtValue=value=>external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.valuePreview",{defaultMessage:"Value: {value}",values:{value:value}});function getEmbeddableVariables(embeddable){var _output$title,_output$savedObjectId;const input=embeddable.getInput(),output=embeddable.getOutput(),indexPatternsIds=function(output){return"indexPatterns"in(_output=output)&&Array.isArray(_output.indexPatterns)&&_output.indexPatterns.length>0?output.indexPatterns.map(ip=>ip.id).filter(Boolean):[];var _output}(output);return deleteUndefinedKeys({id:input.id,title:null!==(_output$title=output.title)&&void 0!==_output$title?_output$title:input.title,savedObjectId:null!==(_output$savedObjectId=output.savedObjectId)&&void 0!==_output$savedObjectId?_output$savedObjectId:(obj=input,"savedObjectId"in obj&&"string"==typeof obj.savedObjectId?input.savedObjectId:void 0),query:input.query,timeRange:input.timeRange,filters:input.filters,indexPatternIds:indexPatternsIds.length>1?indexPatternsIds:void 0,indexPatternId:1===indexPatternsIds.length?indexPatternsIds[0]:void 0});var obj}const getContextPanelScopeValues=contextScopeInput=>{if(!(val=contextScopeInput)||"object"!=typeof val||!("embeddable"in val))throw new Error("UrlDrilldown [getContextScope] can't build scope because embeddable object is missing in context");var val;return getEmbeddableVariables(contextScopeInput.embeddable)},getContextScopeValues=contextScopeInput=>({panel:getContextPanelScopeValues(contextScopeInput)}),variableDescriptions={id:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.id.title",{defaultMessage:"Panel ID."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.id.documentation",{defaultMessage:"ID of the panel where drilldown is executed."})},title:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.title.title",{defaultMessage:"Panel title."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.title.documentation",{defaultMessage:"Title of the panel where drilldown is executed."})},filters:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.filters.title",{defaultMessage:"Panel filters."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.filters.documentation",{defaultMessage:"List of Kibana filters applied to a panel."})},"query.query":{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.query.query.title",{defaultMessage:"Query string."})},"query.language":{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.query.language.title",{defaultMessage:"Query language."})},"timeRange.from":{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.from.title",{defaultMessage:'Time picker "from" value.'})},"timeRange.to":{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.to.title",{defaultMessage:'Time picker "to" value.'})},indexPatternId:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.indexPatternId.title",{defaultMessage:"Index pattern ID."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.indexPatternId.documentation",{defaultMessage:"First index pattern ID used by the panel."})},indexPatternIds:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.indexPatternIds.title",{defaultMessage:"Index pattern IDs."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.indexPatternIds.documentation",{defaultMessage:"List of all index pattern IDs used by the panel."})},savedObjectId:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.savedObjectId.title",{defaultMessage:"Saved object ID."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.context.panel.savedObjectId.documentation",{defaultMessage:"ID of the saved object behind the panel."})}},context_variables_kind=external_kbnSharedDeps_KbnMonaco_.monaco.languages.CompletionItemKind.Variable,formatValue=value=>"object"==typeof value?"\n"+JSON.stringify(value,null,4):String(value),getContextVariableList=context=>(values=>{const variables=[],flattenedValues=Object(external_kbnSharedDeps_KbnStd_.getFlattenedObject)(values),keys=Object.keys(flattenedValues).sort();for(const key of keys){const description=variableDescriptions[key],label="context.panel."+key;description?variables.push({label:label,sortText:"2."+label,title:description.title,documentation:(description.documentation||"")+(description.documentation&&flattenedValues[key]?"\n\n":"")+(flattenedValues[key]?txtValue(formatValue(flattenedValues[key])):""),kind:context_variables_kind}):variables.push({label:label,sortText:"2."+label,documentation:flattenedValues[key]?txtValue(formatValue(flattenedValues[key])):"",kind:context_variables_kind})}return variables})(getContextScopeValues(context).panel),global_variables_kind=external_kbnSharedDeps_KbnMonaco_.monaco.languages.CompletionItemKind.Constant;function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class url_drilldown_UrlDrilldown{constructor(deps){this.deps=deps,_defineProperty(this,"id","URL_DRILLDOWN"),_defineProperty(this,"order",8),_defineProperty(this,"minimalLicense","gold"),_defineProperty(this,"licenseFeatureName","URL drilldown"),_defineProperty(this,"getDisplayName",()=>txtUrlDrilldownDisplayName),_defineProperty(this,"euiIcon","link"),_defineProperty(this,"ReactCollectConfig",({config:config,onConfig:onConfig,context:context})=>{const variables=external_kbnSharedDeps_React_default.a.useMemo(()=>this.getVariableList(context),[context]);return external_kbnSharedDeps_React_default.a.createElement(kibanaReact_public_.KibanaContextProvider,{services:{uiSettings:this.deps.uiSettings}},external_kbnSharedDeps_React_default.a.createElement(public_.UrlDrilldownCollectConfig,{variables:variables,config:config,onConfig:onConfig,syntaxHelpDocsLink:this.deps.getSyntaxHelpDocsLink(),variablesHelpDocsLink:this.deps.getVariablesHelpDocsLink()}))}),_defineProperty(this,"CollectConfig",Object(kibanaReact_public_.reactToUiComponent)(this.ReactCollectConfig)),_defineProperty(this,"createConfig",()=>({url:{template:"https://example.com/?{{event.key}}={{event.value}}"},openInNewTab:!0,encodeUrl:!0})),_defineProperty(this,"isConfigValid",config=>!!config.url.template),_defineProperty(this,"isCompatible",async(config,context)=>{const scope=this.getRuntimeVariables(context),{isValid:isValid,error:error}=Object(public_.urlDrilldownValidateUrlTemplate)(config.url,scope);if(!isValid)return console.warn(`UrlDrilldown [${config.url.template}] is not valid. Error [${error}]. Skipping execution.`),!1;const url=this.buildUrl(config,context);return!!this.deps.externalUrl.validateUrl(url)}),_defineProperty(this,"getHref",async(config,context)=>{const url=this.buildUrl(config,context);if(!this.deps.externalUrl.validateUrl(url))throw new Error(`External URL [${url}] was denied by ExternalUrl service. You can configure external URL policies using "externalUrl.policy" setting in kibana.yml.`);return url}),_defineProperty(this,"execute",async(config,context)=>{const url=await this.getHref(config,context);config.openInNewTab?window.open(url,"_blank","noopener"):await this.deps.navigateToUrl(url)}),_defineProperty(this,"getRuntimeVariables",context=>({event:getEventScopeValues(context),context:getContextScopeValues(context),...this.deps.getGlobalScope()})),_defineProperty(this,"getVariableList",context=>{const globalScopeValues=this.deps.getGlobalScope();var values;return[...(context=>{const[trigger]=context.triggers;switch(trigger){case embeddable_public_.VALUE_CLICK_TRIGGER:return[...valueClickVariables];case uiActions_public_.ROW_CLICK_TRIGGER:return[...rowClickVariables];case embeddable_public_.SELECT_RANGE_TRIGGER:return[...selectRangeVariables]}return[]})(context),...getContextVariableList(context),...(values=globalScopeValues,[{label:"kibanaUrl",sortText:"3.kibanaUrl",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.global.kibanaUrl.documentation.title",{defaultMessage:"Link to Kibana homepage."}),documentation:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.urlDrilldown.global.kibanaUrl.documentation",{defaultMessage:"Kibana base URL. Useful for creating URL drilldowns that navigate within Kibana."})+"\n\n"+txtValue(values.kibanaUrl),kind:global_variables_kind}])]})}supportedTriggers(){return[embeddable_public_.VALUE_CLICK_TRIGGER,embeddable_public_.SELECT_RANGE_TRIGGER,uiActions_public_.ROW_CLICK_TRIGGER,embeddable_public_.CONTEXT_MENU_TRIGGER]}buildUrl(config,context){var _config$encodeUrl;const doEncode=null===(_config$encodeUrl=config.encodeUrl)||void 0===_config$encodeUrl||_config$encodeUrl;return Object(public_.urlDrilldownCompileUrl)(config.url.template,this.getRuntimeVariables(context),doEncode)}}var kibanaUtils_public_=__webpack_require__(8);class plugin_UrlDrilldownPlugin{constructor(context){this.context=context}setup(core,plugins){const startServices=Object(kibanaUtils_public_.createStartServicesGetter)(core.getStartServices);return plugins.uiActionsEnhanced.registerDrilldown(new url_drilldown_UrlDrilldown({externalUrl:core.http.externalUrl,getGlobalScope:Object(public_.urlDrilldownGlobalScopeProvider)({core:core}),navigateToUrl:url=>core.getStartServices().then(([{application:application}])=>application.navigateToUrl(url)),getSyntaxHelpDocsLink:()=>startServices().core.docLinks.links.dashboard.urlDrilldownTemplateSyntax,getVariablesHelpDocsLink:()=>startServices().core.docLinks.links.dashboard.urlDrilldownVariables,uiSettings:core.uiSettings})),{}}start(core,plugins){return{}}stop(){}}function public_plugin(context){return new plugin_UrlDrilldownPlugin(context)}}]);