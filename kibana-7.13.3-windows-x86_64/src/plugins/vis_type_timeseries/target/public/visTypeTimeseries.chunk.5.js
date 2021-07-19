(window.visTypeTimeseries_bundle_jsonpfunction=window.visTypeTimeseries_bundle_jsonpfunction||[]).push([[5],{152:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ErrorComponent}));var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),lodash__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__),_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15);const guidPattern=/\[[[a-f\d-\\]{36}\]/g;function ErrorComponent(props){const{error:error}=props;let additionalInfo;const type=lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(error,"error.caused_by.type")||lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(error,"error.type");let reason=lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(error,"error.caused_by.reason");const title=lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(error,"error.caused_by.title");if(reason||(reason=lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(error,"message")),["runtime_exception","illegal_argument_exception"].includes(type)&&(reason=lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(error,"error.reason").replace(guidPattern,"")),"script_exception"===type){const scriptStack=lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(error,"error.caused_by.script_stack");reason=lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(error,"error.caused_by.caused_by.reason"),additionalInfo=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"tvbError__additional"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,reason),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"tvbError__stack"},scriptStack.join("\n")))}else reason&&(additionalInfo=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"tvbError__additional"},reason));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"visError"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiText,{size:"xs",color:"subdued"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiIcon,{type:"alert",size:"m",color:"danger","aria-hidden":"true"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiSpacer,{size:"s"}),title||react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"visTypeTimeseries.error.requestForPanelFailedErrorMessage",defaultMessage:"The request for this panel failed"}),additionalInfo))}},153:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createIntervalBasedFormatter}));var moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),moment__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);function createIntervalBasedFormatter(interval,rules,dateFormat){return val=>{var _getFormat;return moment__WEBPACK_IMPORTED_MODULE_0___default()(val).format(null!==(_getFormat=function(interval,rules=[]){for(let i=rules.length-1;i>=0;i--){const rule=rules[i];if(!rule[0]||interval>=Number(moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(rule[0])))return rule[1]}}(interval,rules))&&void 0!==_getFormat?_getFormat:dateFormat)}}},254:function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(255);case"v7light":return __webpack_require__(257);case"v8dark":return __webpack_require__(259);case"v8light":return __webpack_require__(261)}},255:function(module,exports,__webpack_require__){var api=__webpack_require__(8),content=__webpack_require__(256);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},256:function(module,exports,__webpack_require__){(exports=__webpack_require__(9)(!1)).push([module.i,".tvbLastValueIndicator{align-self:flex-end}\n",""]),module.exports=exports},257:function(module,exports,__webpack_require__){var api=__webpack_require__(8),content=__webpack_require__(258);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},258:function(module,exports,__webpack_require__){(exports=__webpack_require__(9)(!1)).push([module.i,".tvbLastValueIndicator{align-self:flex-end}\n",""]),module.exports=exports},259:function(module,exports,__webpack_require__){var api=__webpack_require__(8),content=__webpack_require__(260);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},260:function(module,exports,__webpack_require__){(exports=__webpack_require__(9)(!1)).push([module.i,".tvbLastValueIndicator{align-self:flex-end}\n",""]),module.exports=exports},261:function(module,exports,__webpack_require__){var api=__webpack_require__(8),content=__webpack_require__(262);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},262:function(module,exports,__webpack_require__){(exports=__webpack_require__(9)(!1)).push([module.i,".tvbLastValueIndicator{align-self:flex-end}\n",""]),module.exports=exports},381:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return TimeseriesVisualization}));__webpack_require__(254);var external_kbnSharedDeps_React_=__webpack_require__(1),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_Lodash_=__webpack_require__(7),external_kbnSharedDeps_ElasticEui_=__webpack_require__(14),components_error=__webpack_require__(152);const TimeseriesVisTypes={timeseries:Object(external_kbnSharedDeps_React_.lazy)(()=>Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(8)]).then(__webpack_require__.bind(null,380))),metric:Object(external_kbnSharedDeps_React_.lazy)(()=>Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(2),__webpack_require__.e(10)]).then(__webpack_require__.bind(null,383))),top_n:Object(external_kbnSharedDeps_React_.lazy)(()=>Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(2),__webpack_require__.e(11)]).then(__webpack_require__.bind(null,384))),table:Object(external_kbnSharedDeps_React_.lazy)(()=>Promise.all([__webpack_require__.e(0),__webpack_require__.e(6)]).then(__webpack_require__.bind(null,385))),gauge:Object(external_kbnSharedDeps_React_.lazy)(()=>Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(2),__webpack_require__.e(9)]).then(__webpack_require__.bind(null,382))),markdown:Object(external_kbnSharedDeps_React_.lazy)(()=>Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(7)]).then(__webpack_require__.bind(null,378)))};var types=__webpack_require__(18),index_patterns_utils=__webpack_require__(17),services=__webpack_require__(0),constants=__webpack_require__(46);const addMetaToColumns=(columns,indexPattern,metricsType)=>columns.map(column=>{const field=indexPattern.getFieldByName(column.name),type=(null==field?void 0:field.spec.type)||"number";return{id:column.id.toString(),name:column.name,meta:{type:type,field:column.name,index:indexPattern.title,source:"esaggs",sourceParams:{enabled:!0,indexPatternId:null==indexPattern?void 0:indexPattern.id,type:"date"===type?"date_histogram":column.isSplit?"terms":metricsType}}}});var external_kbnSharedDeps_KbnI18n_=__webpack_require__(3),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(15),get_interval=__webpack_require__(64),create_interval_based_formatter=__webpack_require__(153);const lastValueLabel=external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeTimeseries.lastValueModeIndicator.lastValue",{defaultMessage:"Last value"}),LastValueModeIndicator=({seriesData:seriesData,panelInterval:panelInterval,modelInterval:modelInterval})=>{if(null==seriesData||!seriesData.length)return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiBadge,null,lastValueLabel);const dateFormat=Object(services.f)().get("dateFormat"),scaledDataFormat=Object(services.f)().get("dateFormat:scaled"),lastBucketDate=Object(create_interval_based_formatter.a)(panelInterval,scaledDataFormat,dateFormat)(seriesData[seriesData.length-1][0]),formattedPanelInterval=(Object(get_interval.c)(modelInterval)||Object(get_interval.d)(modelInterval))&&(()=>{const interval=Object(get_interval.a)(panelInterval,!1);return interval&&`${interval.unitValue}${interval.unitString}`})(),tooltipContent=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{direction:"column",gutterSize:"none"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"visTypeTimeseries.lastValueModeIndicator.lastBucketDate",defaultMessage:"Bucket: {lastBucketDate}",values:{lastBucketDate:lastBucketDate}})),formattedPanelInterval&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"visTypeTimeseries.lastValueModeIndicator.panelInterval",defaultMessage:"Interval: {formattedPanelInterval}",values:{formattedPanelInterval:formattedPanelInterval}})));return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiToolTip,{position:"top",display:"inlineBlock",content:tooltipContent},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiBadge,{iconType:"iInCircle",iconSide:"right",onClick:()=>{},onClickAriaLabel:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeTimeseries.lastValueModeIndicator.lastValueModeBadgeAriaLabel",{defaultMessage:"View last value details"})},lastValueLabel))};var common_constants=__webpack_require__(10),timerange_data_modes=__webpack_require__(85),panel_types=__webpack_require__(5);function TimeseriesVisualization({className:className="tvbVis",visData:visData,model:model,handlers:handlers,uiState:uiState,getConfig:getConfig,syncColors:syncColors,palettesService:palettesService}){var _visData$model$id;const onBrush=Object(external_kbnSharedDeps_React_.useCallback)(async(gte,lte,series)=>{const indexPatternValue=model.index_pattern||"",{indexPatterns:indexPatterns}=Object(services.c)(),{indexPattern:indexPattern}=await Object(index_patterns_utils.b)(indexPatternValue,indexPatterns);let event;if(indexPattern){const tables=indexPattern?await(async(model,series,initialIndexPattern)=>{const tables={},{indexPatterns:indexPatterns}=Object(services.c)();for(let layerIdx=0;layerIdx<model.series.length;layerIdx++){const layer=model.series[layerIdx];let usedIndexPattern=initialIndexPattern;if(layer.override_index_pattern){const{indexPattern:indexPattern}=await Object(index_patterns_utils.b)(layer.series_index_pattern,indexPatterns);indexPattern&&(usedIndexPattern=indexPattern)}const isGroupedByTerms="terms"===layer.split_mode,seriesPerLayer=series.filter(s=>s.seriesId===layer.id);let id=constants.e;const columns=[{id:id,name:usedIndexPattern.timeFieldName||"",isSplit:!1}];seriesPerLayer.length&&(id++,columns.push({id:id,name:seriesPerLayer[0].splitByLabel,isSplit:!1}),isGroupedByTerms&&(id++,columns.push({id:id,name:layer.terms_field||"",isSplit:!0})));const columnsWithMeta=addMetaToColumns(columns,usedIndexPattern,layer.metrics[0].type);let rows=[];for(let j=0;j<seriesPerLayer.length;j++){const data=seriesPerLayer[j].data.map(rowData=>{const row=[rowData[0],rowData[1]];return isGroupedByTerms&&row.push(seriesPerLayer[j].label),row});rows=[...rows,...data]}tables[layer.id]={type:"datatable",rows:rows,columns:columnsWithMeta}}return tables})(model,series,indexPattern):null,table=null==tables?void 0:tables[model.series[0].id],range=[parseInt(gte,10),parseInt(lte,10)];event={data:{table:table,column:constants.e,range:range,timeFieldName:null==indexPattern?void 0:indexPattern.timeFieldName},name:"brush"}}else event={name:"applyFilter",data:{timeFieldName:"*",filters:[{range:{"*":{gte:gte,lte:lte}}}]}};handlers.event(event)},[handlers,model]),handleUiState=Object(external_kbnSharedDeps_React_.useCallback)((field,value)=>{uiState.set(field,value),uiState.emit("reload")},[uiState]);Object(external_kbnSharedDeps_React_.useEffect)(()=>{handlers.done()});const error=Object(types.b)(visData)&&(null===(_visData$model$id=visData[model.id])||void 0===_visData$model$id?void 0:_visData$model$id.error);if(error)return external_kbnSharedDeps_React_default.a.createElement("div",{className:className},external_kbnSharedDeps_React_default.a.createElement(components_error.a,{error:error}));const VisComponent=TimeseriesVisTypes[model.type],shouldDisplayLastValueIndicator=(!model.time_range_mode||model.time_range_mode===timerange_data_modes.a.LAST_VALUE)&&!model.hide_last_value_indicator&&model.type!==panel_types.a.TIMESERIES;var _model$interval;return VisComponent?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{direction:"column",gutterSize:"none",responsive:!1},shouldDisplayLastValueIndicator&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{className:"tvbLastValueIndicator",grow:!1},external_kbnSharedDeps_React_default.a.createElement(LastValueModeIndicator,{seriesData:Object(external_kbnSharedDeps_Lodash_.get)(visData,(Object(types.b)(visData)?model.id:"series[0]")+".series[0].data",void 0),panelInterval:Object(get_interval.b)(visData,model),modelInterval:null!==(_model$interval=model.interval)&&void 0!==_model$interval?_model$interval:common_constants.a})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,null,external_kbnSharedDeps_React_default.a.createElement(VisComponent,{getConfig:getConfig,model:model,visData:visData,uiState:uiState,onBrush:onBrush,onUiState:handleUiState,syncColors:syncColors,palettesService:palettesService}))):external_kbnSharedDeps_React_default.a.createElement("div",{className:className})}},46:function(module,__webpack_exports__,__webpack_require__){"use strict";var _chart__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(58);__webpack_require__.d(__webpack_exports__,"a",(function(){return _chart__WEBPACK_IMPORTED_MODULE_0__.b})),__webpack_require__.d(__webpack_exports__,"c",(function(){return _chart__WEBPACK_IMPORTED_MODULE_0__.c})),__webpack_require__.d(__webpack_exports__,"d",(function(){return _chart__WEBPACK_IMPORTED_MODULE_0__.d})),__webpack_require__.d(__webpack_exports__,"e",(function(){return _chart__WEBPACK_IMPORTED_MODULE_0__.e})),__webpack_require__.d(__webpack_exports__,"f",(function(){return _chart__WEBPACK_IMPORTED_MODULE_0__.f})),__webpack_require__.d(__webpack_exports__,"g",(function(){return _chart__WEBPACK_IMPORTED_MODULE_0__.g}));var _icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(69);__webpack_require__.d(__webpack_exports__,"b",(function(){return _icons__WEBPACK_IMPORTED_MODULE_1__.a}))},58:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return COLORS})),__webpack_require__.d(__webpack_exports__,"b",(function(){return GRID_LINE_CONFIG})),__webpack_require__.d(__webpack_exports__,"e",(function(){return X_ACCESSOR_INDEX})),__webpack_require__.d(__webpack_exports__,"d",(function(){return STACK_ACCESSORS})),__webpack_require__.d(__webpack_exports__,"g",(function(){return Y_ACCESSOR_INDEXES})),__webpack_require__.d(__webpack_exports__,"f",(function(){return Y0_ACCESSOR_INDEXES})),__webpack_require__.d(__webpack_exports__,"c",(function(){return STACKED_OPTIONS}));const COLORS={LINE_COLOR:"rgba(105,112,125,0.2)",TEXT_COLOR:"rgba(0,0,0,0.4)",TEXT_COLOR_REVERSED:"rgba(255,255,255,0.5)",VALUE_COLOR:"rgba(0,0,0,0.7)",VALUE_COLOR_REVERSED:"rgba(255,255,255,0.8)"},GRID_LINE_CONFIG={stroke:"rgba(125,125,125,0.1)"},X_ACCESSOR_INDEX=0,STACK_ACCESSORS=[0],Y_ACCESSOR_INDEXES=[1],Y0_ACCESSOR_INDEXES=[2],STACKED_OPTIONS={NONE:"none",PERCENT:"percent",STACKED:"stacked",STACKED_WITHIN_SERIES:"stacked_within_series"}},64:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return convertIntervalIntoUnit})),__webpack_require__.d(__webpack_exports__,"d",(function(){return isGteInterval})),__webpack_require__.d(__webpack_exports__,"c",(function(){return isAutoInterval})),__webpack_require__.d(__webpack_exports__,"e",(function(){return validateReInterval})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getInterval}));var moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),moment__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__),_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),_common_interval_regexp__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(19),_common_constants__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_common_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(18);const{parseEsInterval:parseEsInterval}=_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__.search.aggs,unitLookup={s:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("visTypeTimeseries.getInterval.secondsLabel",{defaultMessage:"seconds"}),m:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("visTypeTimeseries.getInterval.minutesLabel",{defaultMessage:"minutes"}),h:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("visTypeTimeseries.getInterval.hoursLabel",{defaultMessage:"hours"}),d:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("visTypeTimeseries.getInterval.daysLabel",{defaultMessage:"days"}),w:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("visTypeTimeseries.getInterval.weeksLabel",{defaultMessage:"weeks"}),M:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("visTypeTimeseries.getInterval.monthsLabel",{defaultMessage:"months"}),y:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("visTypeTimeseries.getInterval.yearsLabel",{defaultMessage:"years"})},convertIntervalIntoUnit=(interval,hasTranslateUnitString=!0)=>{const units=Object.keys(unitLookup).reverse(),duration=moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(interval,"ms");for(let i=0;i<units.length;i++){const as=duration.as(units[i]);if(Math.abs(as)>1)return{unitValue:Math.round(Math.abs(as)),unitString:hasTranslateUnitString?unitLookup[units[i]]:units[i]}}},isGteInterval=interval=>_common_interval_regexp__WEBPACK_IMPORTED_MODULE_4__.a.test(interval),isAutoInterval=interval=>!interval||interval===_common_constants__WEBPACK_IMPORTED_MODULE_5__.a,validateReInterval=intervalValue=>{const validationResult={};try{parseEsInterval(intervalValue)}catch({message:message}){validationResult.errorMessage=message}finally{validationResult.isValid=!validationResult.errorMessage}return validationResult},getInterval=(visData,model)=>Object(lodash__WEBPACK_IMPORTED_MODULE_2__.get)(visData,Object(_common_types__WEBPACK_IMPORTED_MODULE_6__.c)(visData)?"series[0].series":model.id+".series",[]).reduce((currentInterval,item)=>{if(item.data.length>1){const seriesInterval=item.data[1][0]-item.data[0][0];if(!currentInterval||seriesInterval<currentInterval)return seriesInterval}return currentInterval},0)},69:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ICON_TYPES_MAP}));var external_kbnSharedDeps_React_=__webpack_require__(1),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_);const ICON_TYPES_MAP={["fa-asterisk"]:"asterisk",["fa-bell"]:"bell",["fa-bolt"]:"bolt",["fa-bomb"]:()=>external_kbnSharedDeps_React_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},external_kbnSharedDeps_React_default.a.createElement("path",{d:"M3.92176768,4.53361616 L3.46466635,5.59664282 L2.65302767,4.14840719 L0.999875397,3.99598886 L2.12641918,2.77654518 L1.76052549,1.15720408 L3.26840652,1.85178207 L4.69542405,1.00339256 L4.500802,2.65210905 L5.74864103,3.7471166 L4.73514583,3.9490388 L5.61669633,5.03766301 C6.0459022,4.69009896 6.67559863,4.75628272 7.02316269,5.18548858 L7.15815921,5.3521954 C7.8837785,5.06498672 8.68754455,4.943927 9.51742529,5.03115098 C12.2637217,5.31979836 14.2560398,7.78010639 13.9673924,10.5264028 C13.6787451,13.2726992 11.218437,15.2650173 8.47214065,14.9763699 C5.72584427,14.6877226 3.73352611,12.2274145 4.02217349,9.48111814 C4.10939747,8.6512374 4.39492411,7.8902053 4.82672133,7.24015658 L4.6917248,7.07344975 C4.34416075,6.64424389 4.41034451,6.01454746 4.83955037,5.6669834 L3.92176768,4.53361616 Z M5.46887076,6.44412936 L6.12580983,7.24015658 C6.03489722,7.30663504 5.87952666,7.491071 5.65969815,7.79346445 C5.30650784,8.32517447 5.08508565,8.93495668 5.01669539,9.5856466 C4.78577748,11.7826837 6.37963201,13.7509301 8.57666912,13.981848 C10.7737062,14.2127659 12.7419526,12.6189114 12.9728706,10.4218743 C13.2037885,8.2248372 11.6099339,6.25659078 9.41289682,6.02567287 C8.7622069,5.95728261 8.11971364,6.04708534 7.52619036,6.28200886 C7.24048061,6.40187373 7.0242157,6.5121707 6.87739563,6.61289978 L6.24601673,5.81480897 L5.46887076,6.44412936 Z M3.34009664,3.61834468 C3.6160708,3.60870745 3.83197954,3.37717367 3.82234231,3.10119951 C3.81270508,2.82522536 3.5811713,2.60931662 3.30519715,2.61895385 C3.02922299,2.62859108 2.81331425,2.86012485 2.82295148,3.13609901 C2.83258871,3.41207317 3.06412249,3.62798191 3.34009664,3.61834468 Z M9.2038399,8.01471666 C8.92921026,7.98585193 8.72997844,7.73982112 8.75884318,7.46519148 C8.78770792,7.19056185 9.03373872,6.99133003 9.30836836,7.02019477 C10.7411945,7.17079087 11.8319627,8.30660625 11.9782919,9.68376241 C11.9842403,9.72621687 11.9855849,9.77015886 11.9808868,9.81485847 C11.9520221,10.0894881 11.7059913,10.2887199 11.4313616,10.2598552 C11.1835304,10.2338071 10.9971003,10.0309074 10.9842889,9.78973323 C10.8859009,8.87197536 10.1588372,8.11509093 9.2038399,8.01471666 Z"})),["fa-bug"]:"bug",["fa-comment"]:"editorComment",["fa-exclamation-circle"]:"alert",["fa-exclamation-triangle"]:"alert",["fa-fire"]:()=>external_kbnSharedDeps_React_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},external_kbnSharedDeps_React_default.a.createElement("path",{d:"M10.4285489,13.2131862 C11.3850613,12.5116211 12,11.4062861 12,10.1681623 C12,8.88948911 11.7647926,7.64522527 11.315853,6.48027409 L10.7184365,8.07936372 L9.62838732,6.51595716 C8.65161637,5.11502026 7.41222171,3.90368767 5.9820674,2.94508952 C5.99399825,3.12925457 6,3.31436795 6,3.50022638 C6,5.08794888 5.48443413,6.95085436 4.74437685,7.94154468 C4.26219055,8.5870316 4,9.35779518 4,10.1681623 C4,11.4427639 4.65170744,12.5766371 5.65687647,13.2741368 C5.73557697,13.041105 5.84196228,12.8229717 5.97161458,12.624616 C6.26836682,12.1706132 6.5,11.2280234 6.5,10.4287008 C6.5,9.92871906 6.42479348,9.44813694 6.28619258,9 C7.47628141,9.64169048 8.4897566,10.6210605 9.22434324,11.8251557 C9.23213615,11.8013168 9.2406884,11.7775998 9.25,11.7540048 C9.39656041,11.3826304 9.5,11.0805724 9.5,10.6495848 C9.5,10.6240812 9.49971537,10.5986511 9.49914944,10.5732981 C9.96875289,11.3529062 10.2928315,12.2486386 10.4285489,13.2131862 Z M10.4486865,5.94402249 C10.4642723,5.90230435 10.4813768,5.86079967 10.5,5.81950846 C10.7931208,5.16960326 11,4.64100165 11,3.88677339 C11,3.84214218 10.9994307,3.79763944 10.9982989,3.7532716 C12.2630338,5.59045545 13,7.7961396 13,10.1681623 C13,12.8367126 10.7614237,15 8,15 C5.23857625,15 3,12.8367126 3,10.1681623 C3,9.11340491 3.34972471,8.13758287 3.94322917,7.34307798 C4.53673363,6.54857309 5,4.8990409 5,3.50022638 C5,2.62525836 4.84958695,1.78423964 4.57238517,1 C6.95256283,2.12295834 8.97951321,3.83685594 10.4486865,5.94402249 Z"})),["fa-flag"]:"flag",["fa-heart"]:"heart",["fa-map-marker"]:"mapMarker",["fa-map-pin"]:"pinFilled",["fa-star"]:"starFilled",["fa-tag"]:"tag"}},85:function(module,__webpack_exports__,__webpack_require__){"use strict";let TIME_RANGE_DATA_MODES;__webpack_require__.d(__webpack_exports__,"a",(function(){return TIME_RANGE_DATA_MODES})),__webpack_require__.d(__webpack_exports__,"b",(function(){return TIME_RANGE_MODE_KEY})),function(TIME_RANGE_DATA_MODES){TIME_RANGE_DATA_MODES.ENTIRE_TIME_RANGE="entire_time_range",TIME_RANGE_DATA_MODES.LAST_VALUE="last_value"}(TIME_RANGE_DATA_MODES||(TIME_RANGE_DATA_MODES={}));const TIME_RANGE_MODE_KEY="time_range_mode"}}]);