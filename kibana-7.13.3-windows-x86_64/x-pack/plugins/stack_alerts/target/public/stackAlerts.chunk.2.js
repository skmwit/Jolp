/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.stackAlerts_bundle_jsonpfunction=window.stackAlerts_bundle_jsonpfunction||[]).push([[2],{19:function(module,exports,__webpack_require__){"use strict";var memo,isOldIE=function(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo},getTarget=function(){var memo={};return function(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var textStore,replaceText=(textStore=[],function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")});function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function(){!function(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},20:function(module,exports,__webpack_require__){"use strict";module.exports=function(useSourceMap){var list=[];return list.toString=function(){return this.map((function(item){var content=function(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=(sourceMap=cssMapping,base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),"/*# ".concat(data," */")),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}var sourceMap,base64,data;return[content].join("\n")}(item,useSourceMap);return item[2]?"@media ".concat(item[2]," {").concat(content,"}"):content})).join("")},list.i=function(modules,mediaQuery,dedupe){"string"==typeof modules&&(modules=[[null,modules,""]]);var alreadyImportedModules={};if(dedupe)for(var i=0;i<this.length;i++){var id=this[i][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);dedupe&&alreadyImportedModules[item[0]]||(mediaQuery&&(item[2]?item[2]="".concat(mediaQuery," and ").concat(item[2]):item[2]=mediaQuery),list.push(item))}},list}},22:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return IndexSelectPopover}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_elastic_eui__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1);const IndexSelectPopover=({index:index,esFields:esFields,timeField:timeField,errors:errors,onIndexChange:onIndexChange,onTimeFieldChange:onTimeFieldChange})=>{const{http:http}=Object(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_5__.useKibana)().services,[indexPopoverOpen,setIndexPopoverOpen]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[indexOptions,setIndexOptions]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[indexPatterns,setIndexPatterns]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[areIndicesLoading,setAreIndicesLoading]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[timeFieldOptions,setTimeFieldOptions]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)([_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_6__.firstFieldOption]);Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{(async()=>{setIndexPatterns(await Object(_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_6__.getIndexPatterns)())})()},[]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const timeFields=Object(_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_6__.getTimeFieldOptions)(esFields);setTimeFieldOptions([_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_6__.firstFieldOption,...timeFields])},[esFields]);const closeIndexPopover=()=>{setIndexPopoverOpen(!1),void 0===timeField&&onTimeFieldChange("")};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.EuiPopover,{id:"indexPopover",button:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.EuiExpression,{display:"columns","data-test-subj":"selectIndexExpression",description:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.stackAlerts.components.ui.alertParams.indexLabel",{defaultMessage:"index"}),value:index&&index.length>0?(indices=>{const rows=indices.map((indexName,idx)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{key:idx},indexName,idx<indices.length-1?",":null));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,rows)})(index):_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_6__.firstFieldOption.text,isActive:indexPopoverOpen,onClick:()=>{setIndexPopoverOpen(!0)},isInvalid:!(index&&index.length>0&&""!==timeField)}),isOpen:indexPopoverOpen,closePopover:closeIndexPopover,ownFocus:!0,anchorPosition:"downLeft",zIndex:8e3,display:"block"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:"450px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.EuiPopoverTitle,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.EuiFlexGroup,{alignItems:"center",gutterSize:"s"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.EuiFlexItem,null,_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.stackAlerts.components.ui.alertParams.indexButtonLabel",{defaultMessage:"index"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.EuiFlexItem,{grow:!1},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.EuiButtonIcon,{"data-test-subj":"closePopover",iconType:"cross",color:"danger","aria-label":_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.stackAlerts.components.ui.alertParams.closeIndexPopoverLabel",{defaultMessage:"Close"}),onClick:closeIndexPopover})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.EuiFormRow,{id:"indexSelectSearchBox",fullWidth:!0,label:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.stackAlerts.components.ui.alertParams.indicesToQueryLabel",defaultMessage:"Indices to query"}),isInvalid:errors.index.length>0&&null!=index&&index.length>0,error:errors.index,helpText:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.stackAlerts.components.ui.alertParams.howToBroadenSearchQueryDescription",defaultMessage:"Use * to broaden your query."})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.EuiComboBox,{fullWidth:!0,async:!0,isLoading:areIndicesLoading,isInvalid:errors.index.length>0&&null!=index&&index.length>0,noSuggestions:!indexOptions.length,options:indexOptions,"data-test-subj":"thresholdIndexesComboBox",selectedOptions:(index||[]).map(anIndex=>({label:anIndex,value:anIndex})),onChange:async selected=>{const selectedIndices=selected.map(aSelected=>aSelected.value).filter(lodash__WEBPACK_IMPORTED_MODULE_2__.isString);if(onIndexChange(selectedIndices),0===selectedIndices.length)setTimeFieldOptions([_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_6__.firstFieldOption]);else{const currentEsFields=await Object(_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_6__.getFields)(http,selectedIndices),timeFields=Object(_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_6__.getTimeFieldOptions)(currentEsFields);setTimeFieldOptions([_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_6__.firstFieldOption,...timeFields])}},onSearchChange:async search=>{setAreIndicesLoading(!0),setIndexOptions(await Object(_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_6__.getIndexOptions)(http,search,indexPatterns)),setAreIndicesLoading(!1)},onBlur:()=>{index||onIndexChange([])}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.EuiFormRow,{id:"thresholdTimeField",fullWidth:!0,label:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.stackAlerts.components.ui.alertParams.timeFieldLabel",defaultMessage:"Time field"}),isInvalid:errors.timeField.length>0&&void 0!==timeField,error:errors.timeField},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__.EuiSelect,{options:timeFieldOptions,isInvalid:errors.timeField.length>0&&void 0!==timeField,fullWidth:!0,name:"thresholdTimeField","data-test-subj":"thresholdAlertTimeFieldSelect",value:timeField||"",onChange:e=>{onTimeFieldChange(e.target.value)},onBlur:()=>{void 0===timeField&&onTimeFieldChange("")}}))))}},27:function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(28);case"v7light":return __webpack_require__(30);case"v8dark":return __webpack_require__(32);case"v8light":return __webpack_require__(34)}},28:function(module,exports,__webpack_require__){var api=__webpack_require__(19),content=__webpack_require__(29);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},29:function(module,exports,__webpack_require__){(exports=__webpack_require__(20)(!1)).push([module.i,".actAlertVisualization__chart{height:224px}\n",""]),module.exports=exports},30:function(module,exports,__webpack_require__){var api=__webpack_require__(19),content=__webpack_require__(31);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},31:function(module,exports,__webpack_require__){(exports=__webpack_require__(20)(!1)).push([module.i,".actAlertVisualization__chart{height:224px}\n",""]),module.exports=exports},32:function(module,exports,__webpack_require__){var api=__webpack_require__(19),content=__webpack_require__(33);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},33:function(module,exports,__webpack_require__){(exports=__webpack_require__(20)(!1)).push([module.i,".actAlertVisualization__chart{height:224px}\n",""]),module.exports=exports},34:function(module,exports,__webpack_require__){var api=__webpack_require__(19),content=__webpack_require__(35);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},35:function(module,exports,__webpack_require__){(exports=__webpack_require__(20)(!1)).push([module.i,".actAlertVisualization__chart{height:224px}\n",""]),module.exports=exports},47:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DEFAULT_VALUES",(function(){return DEFAULT_VALUES})),__webpack_require__.d(__webpack_exports__,"IndexThresholdAlertTypeExpression",(function(){return IndexThresholdAlertTypeExpression})),__webpack_require__.d(__webpack_exports__,"default",(function(){return IndexThresholdAlertTypeExpression}));var external_kbnSharedDeps_React_=__webpack_require__(2),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_KbnI18n_=__webpack_require__(0),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(8),external_kbnSharedDeps_ElasticEui_=__webpack_require__(7),public_=__webpack_require__(9),triggersActionsUi_public_=__webpack_require__(1),external_kbnSharedDeps_Rxjs_=__webpack_require__(13),external_kbnSharedDeps_ElasticCharts_=__webpack_require__(14),external_kbnSharedDeps_MomentTimezone_=__webpack_require__(15),external_kbnSharedDeps_MomentTimezone_default=__webpack_require__.n(external_kbnSharedDeps_MomentTimezone_);var parse_duration_=__webpack_require__(16);var LoadingStateType;!function(LoadingStateType){LoadingStateType[LoadingStateType.FirstLoad=0]="FirstLoad",LoadingStateType[LoadingStateType.Refresh=1]="Refresh",LoadingStateType[LoadingStateType.Idle=2]="Idle"}(LoadingStateType||(LoadingStateType={}));const ThresholdVisualization=({alertParams:alertParams,alertInterval:alertInterval,aggregationTypes:aggregationTypes,comparators:comparators,refreshRateInMilliseconds:refreshRateInMilliseconds=5e3,charts:charts,dataFieldsFormats:dataFieldsFormats})=>{const{index:index,timeField:timeField,aggType:aggType,aggField:aggField,termSize:termSize,termField:termField,thresholdComparator:thresholdComparator,timeWindowSize:timeWindowSize,timeWindowUnit:timeWindowUnit,groupBy:groupBy,threshold:threshold}=alertParams,{http:http,notifications:notifications,uiSettings:uiSettings}=Object(public_.useKibana)().services,[loadingState,setLoadingState]=Object(external_kbnSharedDeps_React_.useState)(null),[error,setError]=Object(external_kbnSharedDeps_React_.useState)(void 0),[visualizationData,setVisualizationData]=Object(external_kbnSharedDeps_React_.useState)(),[startVisualizationAt,setStartVisualizationAt]=Object(external_kbnSharedDeps_React_.useState)(new Date);if(Object(external_kbnSharedDeps_React_.useEffect)(()=>{const subscription=Object(external_kbnSharedDeps_Rxjs_.interval)(refreshRateInMilliseconds).subscribe(val=>{setStartVisualizationAt(new Date)});return()=>{subscription.unsubscribe()}},[refreshRateInMilliseconds]),Object(external_kbnSharedDeps_React_.useEffect)(()=>{(async()=>{try{setLoadingState(loadingState?LoadingStateType.Refresh:LoadingStateType.FirstLoad),setVisualizationData(await async function(model,visualizeOptions,http){const vizData=await async function({model:model,visualizeOptions:visualizeOptions,http:http}){const timeSeriesQueryParams={index:model.index,timeField:model.timeField,aggType:model.aggType,aggField:model.aggField,groupBy:model.groupBy,termField:model.termField,termSize:model.termSize,timeWindowSize:model.timeWindowSize,timeWindowUnit:model.timeWindowUnit,dateStart:new Date(visualizeOptions.rangeFrom).toISOString(),dateEnd:new Date(visualizeOptions.rangeTo).toISOString(),interval:visualizeOptions.interval};return await http.post("/api/triggers_actions_ui/data/_time_series_query",{body:JSON.stringify(timeSeriesQueryParams)})}({model:model,visualizeOptions:visualizeOptions,http:http}),result={};for(const groupMetrics of vizData.results)result[groupMetrics.group]=groupMetrics.metrics.map(metricResult=>[Date.parse(metricResult[0]),metricResult[1]]);return result}(alertWithoutActions,visualizeOptions,http))}catch(e){notifications&&notifications.toasts.addDanger({title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.visualization.unableToLoadVisualizationMessage",{defaultMessage:"Unable to load visualization"})}),setError(e)}finally{setLoadingState(LoadingStateType.Idle)}})()},[index,timeField,aggType,aggField,termSize,termField,thresholdComparator,timeWindowSize,timeWindowUnit,groupBy,threshold,startVisualizationAt]),!charts||!uiSettings||!dataFieldsFormats)return null;const chartsTheme=charts.theme.useChartsTheme(),chartsBaseTheme=charts.theme.useChartsBaseTheme(),domain=((alertInterval,startAt)=>{let intervalMillis;try{intervalMillis=Object(parse_duration_.parseDuration)(alertInterval)}catch(err){intervalMillis=6e4}return{min:startAt.getTime()-30*intervalMillis,max:startAt.getTime()}})(alertInterval,startVisualizationAt),visualizeOptions={rangeFrom:new Date(domain.min).toISOString(),rangeTo:new Date(domain.max).toISOString(),interval:alertInterval},alertWithoutActions={...alertParams,actions:[],type:"threshold"};if(loadingState===LoadingStateType.FirstLoad)return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiEmptyPrompt,{"data-test-subj":"firstLoad",title:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLoadingChart,{size:"xl"}),body:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{color:"subdued"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.stackAlerts.threshold.ui.visualization.loadingAlertVisualizationDescription",defaultMessage:"Loading alert visualization…"}))});if(error)return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"l"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCallOut,{"data-test-subj":"errorCallout",title:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.stackAlerts.threshold.ui.visualization.errorLoadingAlertVisualizationTitle",defaultMessage:"Cannot load alert visualization",values:{}}),color:"danger",iconType:"alert"},error));if(visualizationData){const alertVisualizationDataKeys=Object.keys(visualizationData),timezone=(uiSettings=>{const config=uiSettings;if(!config.isDefault("dateFormat:tz"))return config.get("dateFormat:tz");const detectedTimezone=external_kbnSharedDeps_MomentTimezone_default.a.tz.guess();if(detectedTimezone)return detectedTimezone;return external_kbnSharedDeps_MomentTimezone_default()().format("Z")})(uiSettings),actualThreshold=thresholdComparator?threshold.slice(0,comparators[thresholdComparator].requiredValues):[];let maxY=actualThreshold[actualThreshold.length-1];Object.values(visualizationData).forEach(data=>{data.forEach(([,y])=>{y>maxY&&(maxY=y)})});const dateFormatter=Object(external_kbnSharedDeps_ElasticCharts_.niceTimeFormatter)([domain.min,domain.max]),aggLabel=aggregationTypes[aggType].text;return external_kbnSharedDeps_React_default.a.createElement("div",{"data-test-subj":"alertVisualizationChart",style:{position:"relative"}},loadingState===LoadingStateType.Refresh?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLoadingSpinner,{size:"l",style:{position:"absolute",top:"8%",right:"5%"}}):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null),alertVisualizationDataKeys.length?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticCharts_.Chart,{size:["100%",200],renderer:"canvas"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticCharts_.Settings,{theme:[{lineSeriesStyle:{line:{strokeWidth:3},point:{visible:!1}}},chartsTheme],baseTheme:chartsBaseTheme,xDomain:domain,showLegend:!!termField,showLegendExtra:!0,legendPosition:external_kbnSharedDeps_ElasticCharts_.Position.Bottom}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticCharts_.Axis,{id:"bottom",position:external_kbnSharedDeps_ElasticCharts_.Position.Bottom,showOverlappingTicks:!0,tickFormat:dateFormatter}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticCharts_.Axis,{domain:{max:maxY},id:"left",title:aggLabel,position:external_kbnSharedDeps_ElasticCharts_.Position.Left}),alertVisualizationDataKeys.map(key=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticCharts_.LineSeries,{key:key,id:key,xScaleType:external_kbnSharedDeps_ElasticCharts_.ScaleType.Time,yScaleType:external_kbnSharedDeps_ElasticCharts_.ScaleType.Linear,data:visualizationData[key],xAccessor:0,yAccessors:[1],timeZone:timezone})),actualThreshold.map((_value,thresholdIndex)=>{const specId=0===thresholdIndex?"threshold":"threshold"+thresholdIndex;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticCharts_.LineAnnotation,{key:specId,id:specId,domainType:external_kbnSharedDeps_ElasticCharts_.AnnotationDomainType.YDomain,dataValues:[{dataValue:threshold[thresholdIndex],details:specId}]})})):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCallOut,{"data-test-subj":"noDataCallout",size:"s",title:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.stackAlerts.threshold.ui.visualization.thresholdPreviewChart.noDataTitle",defaultMessage:"No data matches this query"}),color:"warning"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.stackAlerts.threshold.ui.visualization.thresholdPreviewChart.dataDoesNotExistTextMessage",defaultMessage:"Check that your time range and filters are correct."})))}return null};__webpack_require__(27);var index_select_popover=__webpack_require__(22);const DEFAULT_VALUES={AGGREGATION_TYPE:"count",TERM_SIZE:5,THRESHOLD_COMPARATOR:triggersActionsUi_public_.COMPARATORS.GREATER_THAN,TIME_WINDOW_SIZE:5,TIME_WINDOW_UNIT:"m",THRESHOLD:[1e3],GROUP_BY:"all"},expressionFieldsWithValidation=["index","timeField","aggField","termSize","termField","threshold0","threshold1","timeWindowSize"];const IndexThresholdAlertTypeExpression=({alertParams:alertParams,alertInterval:alertInterval,setAlertParams:setAlertParams,setAlertProperty:setAlertProperty,errors:errors,charts:charts,data:data})=>{const{index:index,timeField:timeField,aggType:aggType,aggField:aggField,groupBy:groupBy,termSize:termSize,termField:termField,thresholdComparator:thresholdComparator,threshold:threshold,timeWindowSize:timeWindowSize,timeWindowUnit:timeWindowUnit}=alertParams,indexArray=function(index){return index?"string"==typeof index?[index]:index:[]}(index),{http:http}=Object(public_.useKibana)().services,[esFields,setEsFields]=Object(external_kbnSharedDeps_React_.useState)([]),hasExpressionErrors=!!Object.keys(errors).find(errorKey=>expressionFieldsWithValidation.includes(errorKey)&&errors[errorKey].length>=1&&void 0!==alertParams[errorKey]),cannotShowVisualization=!!Object.keys(errors).find(errorKey=>expressionFieldsWithValidation.includes(errorKey)&&errors[errorKey].length>=1),expressionErrorMessage=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.stackAlerts.threshold.ui.alertParams.fixErrorInExpressionBelowValidationMessage",{defaultMessage:"Expression contains errors."}),refreshEsFields=async indices=>{const currentEsFields=await Object(triggersActionsUi_public_.getFields)(http,indices);setEsFields(currentEsFields)};return Object(external_kbnSharedDeps_React_.useEffect)(()=>{(async()=>{setAlertProperty("params",{...alertParams,aggType:null!=aggType?aggType:DEFAULT_VALUES.AGGREGATION_TYPE,termSize:null!=termSize?termSize:DEFAULT_VALUES.TERM_SIZE,thresholdComparator:null!=thresholdComparator?thresholdComparator:DEFAULT_VALUES.THRESHOLD_COMPARATOR,timeWindowSize:null!=timeWindowSize?timeWindowSize:DEFAULT_VALUES.TIME_WINDOW_SIZE,timeWindowUnit:null!=timeWindowUnit?timeWindowUnit:DEFAULT_VALUES.TIME_WINDOW_UNIT,groupBy:null!=groupBy?groupBy:DEFAULT_VALUES.GROUP_BY,threshold:null!=threshold?threshold:DEFAULT_VALUES.THRESHOLD}),indexArray.length>0&&await refreshEsFields(indexArray)})()},[]),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,hasExpressionErrors?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,null),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCallOut,{color:"danger",size:"s",title:expressionErrorMessage}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,null)):null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement("h5",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.stackAlerts.threshold.ui.selectIndex",defaultMessage:"Select an index"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),external_kbnSharedDeps_React_default.a.createElement(index_select_popover.a,{index:indexArray,"data-test-subj":"indexSelectPopover",esFields:esFields,timeField:timeField,errors:errors,onIndexChange:async indices=>{setAlertParams("index",indices),0===indices.length?setAlertProperty("params",{...alertParams,index:indices,aggType:DEFAULT_VALUES.AGGREGATION_TYPE,termSize:DEFAULT_VALUES.TERM_SIZE,thresholdComparator:DEFAULT_VALUES.THRESHOLD_COMPARATOR,timeWindowSize:DEFAULT_VALUES.TIME_WINDOW_SIZE,timeWindowUnit:DEFAULT_VALUES.TIME_WINDOW_UNIT,groupBy:DEFAULT_VALUES.GROUP_BY,threshold:DEFAULT_VALUES.THRESHOLD,timeField:""}):await refreshEsFields(indices)},onTimeFieldChange:updatedTimeField=>setAlertParams("timeField",updatedTimeField)}),external_kbnSharedDeps_React_default.a.createElement(triggersActionsUi_public_.WhenExpression,{display:"fullWidth","data-test-subj":"whenExpression",aggType:null!=aggType?aggType:DEFAULT_VALUES.AGGREGATION_TYPE,onChangeSelectedAggType:selectedAggType=>setAlertParams("aggType",selectedAggType)}),aggType&&triggersActionsUi_public_.builtInAggregationTypes[aggType].fieldRequired?external_kbnSharedDeps_React_default.a.createElement(triggersActionsUi_public_.OfExpression,{aggField:aggField,"data-test-subj":"aggTypeExpression",fields:esFields,aggType:aggType,errors:errors,display:"fullWidth",onChangeSelectedAggField:selectedAggField=>setAlertParams("aggField",selectedAggField)}):null,external_kbnSharedDeps_React_default.a.createElement(triggersActionsUi_public_.GroupByExpression,{groupBy:groupBy||DEFAULT_VALUES.GROUP_BY,"data-test-subj":"groupByExpression",termField:termField,termSize:termSize,errors:errors,fields:esFields,display:"fullWidth",onChangeSelectedGroupBy:selectedGroupBy=>setAlertParams("groupBy",selectedGroupBy),onChangeSelectedTermField:selectedTermField=>setAlertParams("termField",selectedTermField),onChangeSelectedTermSize:selectedTermSize=>setAlertParams("termSize",selectedTermSize)}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,null),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement("h5",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.stackAlerts.threshold.ui.conditionPrompt",defaultMessage:"Define the condition"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),external_kbnSharedDeps_React_default.a.createElement(triggersActionsUi_public_.ThresholdExpression,{thresholdComparator:null!=thresholdComparator?thresholdComparator:DEFAULT_VALUES.THRESHOLD_COMPARATOR,threshold:threshold,"data-test-subj":"thresholdExpression",errors:errors,display:"fullWidth",popupPosition:"upLeft",onChangeSelectedThreshold:selectedThresholds=>setAlertParams("threshold",selectedThresholds),onChangeSelectedThresholdComparator:selectedThresholdComparator=>setAlertParams("thresholdComparator",selectedThresholdComparator)}),external_kbnSharedDeps_React_default.a.createElement(triggersActionsUi_public_.ForLastExpression,{"data-test-subj":"forLastExpression",popupPosition:"upLeft",timeWindowSize:null!=timeWindowSize?timeWindowSize:DEFAULT_VALUES.TIME_WINDOW_SIZE,timeWindowUnit:null!=timeWindowUnit?timeWindowUnit:DEFAULT_VALUES.TIME_WINDOW_UNIT,display:"fullWidth",errors:errors,onChangeWindowSize:selectedWindowSize=>setAlertParams("timeWindowSize",selectedWindowSize),onChangeWindowUnit:selectedWindowUnit=>setAlertParams("timeWindowUnit",selectedWindowUnit)}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,null),external_kbnSharedDeps_React_default.a.createElement("div",{className:"actAlertVisualization__chart"},cannotShowVisualization?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiEmptyPrompt,{"data-test-subj":"visualizationPlaceholder",iconType:"visBarVertical",body:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{color:"subdued"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.stackAlerts.threshold.ui.previewAlertVisualizationDescription",defaultMessage:"Complete the expression to generate a preview."}))})):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(ThresholdVisualization,{"data-test-subj":"thresholdVisualization",alertParams:alertParams,alertInterval:alertInterval,aggregationTypes:triggersActionsUi_public_.builtInAggregationTypes,comparators:triggersActionsUi_public_.builtInComparators,charts:charts,dataFieldsFormats:data.fieldFormats}))))}}}]);