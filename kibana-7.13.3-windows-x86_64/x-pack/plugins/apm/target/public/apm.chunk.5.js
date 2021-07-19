/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.apm_bundle_jsonpfunction=window.apm_bundle_jsonpfunction||[]).push([[5],{105:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return ServiceField})),__webpack_require__.d(__webpack_exports__,"a",(function(){return EnvironmentField})),__webpack_require__.d(__webpack_exports__,"d",(function(){return TransactionTypeField})),__webpack_require__.d(__webpack_exports__,"b",(function(){return IsAboveField}));var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_common_environment_filter_values__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_service_alert_trigger_popover_expression__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(84);const ALL_OPTION=_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.apm.alerting.fields.all_option",{defaultMessage:"All"});function ServiceField({value:value}){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiExpression,{description:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.apm.alerting.fields.service",{defaultMessage:"Service"}),value:value||ALL_OPTION})}function EnvironmentField({currentValue:currentValue,options:options,onChange:onChange}){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_service_alert_trigger_popover_expression__WEBPACK_IMPORTED_MODULE_4__.a,{value:Object(_common_environment_filter_values__WEBPACK_IMPORTED_MODULE_3__.c)(currentValue),title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.apm.alerting.fields.environment",{defaultMessage:"Environment"})},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiSelect,{defaultValue:currentValue,options:options,onChange:onChange,compressed:!0}))}function TransactionTypeField({currentValue:currentValue,options:options,onChange:onChange}){const label=_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.apm.alerting.fields.type",{defaultMessage:"Type"});return!options||options.length<=1?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiExpression,{description:label,value:currentValue||ALL_OPTION}):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_service_alert_trigger_popover_expression__WEBPACK_IMPORTED_MODULE_4__.a,{value:currentValue,title:label},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiSelect,{"data-test-subj":"transactionTypeField",defaultValue:currentValue,options:options,onChange:onChange,compressed:!0}))}function IsAboveField({value:value,unit:unit,onChange:onChange,step:step}){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_service_alert_trigger_popover_expression__WEBPACK_IMPORTED_MODULE_4__.a,{value:value?`${value.toString()}${unit}`:"",title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.apm.transactionErrorRateAlertTrigger.isAbove",{defaultMessage:"is above"})},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFieldNumber,{value:null!=value?value:"",onChange:e=>onChange(parseInt(e.target.value,10)),append:unit,compressed:!0,step:step}))}},106:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ServiceAlertTrigger}));var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16);function ServiceAlertTrigger(props){const{serviceName:serviceName}=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),{fields:fields,setAlertParams:setAlertParams,defaults:defaults,chartPreview:chartPreview}=props,params={...defaults,serviceName:serviceName};return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{Object.keys(params).forEach(key=>{setAlertParams(key,params[key])})},[]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiSpacer,{size:"l"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFlexGrid,{gutterSize:"l",direction:"row",columns:2},fields.map((field,index)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFlexItem,{grow:!1,key:index},field))),chartPreview,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiSpacer,{size:"m"}))}},1251:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TransactionDurationAlertTrigger",(function(){return TransactionDurationAlertTrigger}));var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(17),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(16),_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(33),_common_environment_filter_values__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),_common_utils_formatters__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(46),_context_apm_service_use_apm_service_context__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(50),_context_url_params_context_use_url_params__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(42),_hooks_use_environments_fetcher__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(121),_hooks_use_fetcher__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(43),_shared_charts_transaction_charts_helper__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(164),_chart_preview__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(136),_fields__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(105),_helper__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(137),_service_alert_trigger__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(106),_service_alert_trigger_popover_expression__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(84);const TRANSACTION_ALERT_AGGREGATION_TYPES={avg:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.apm.transactionDurationAlert.aggregationType.avg",{defaultMessage:"Average"}),"95th":_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.apm.transactionDurationAlert.aggregationType.95th",{defaultMessage:"95th percentile"}),"99th":_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.apm.transactionDurationAlert.aggregationType.99th",{defaultMessage:"99th percentile"})};function TransactionDurationAlertTrigger(props){var _data$latencyChartPre;const{setAlertParams:setAlertParams,alertParams:alertParams,setAlertProperty:setAlertProperty}=props,{urlParams:urlParams}=Object(_context_url_params_context_use_url_params__WEBPACK_IMPORTED_MODULE_9__.a)(),{transactionTypes:transactionTypes,transactionType:transactionType}=Object(_context_apm_service_use_apm_service_context__WEBPACK_IMPORTED_MODULE_8__.a)(),{serviceName:serviceName}=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),{start:start,end:end}=urlParams,{environmentOptions:environmentOptions}=Object(_hooks_use_environments_fetcher__WEBPACK_IMPORTED_MODULE_10__.a)({serviceName:serviceName,start:start,end:end}),{aggregationType:aggregationType,environment:environment,threshold:threshold,windowSize:windowSize,windowUnit:windowUnit}=alertParams,{data:data}=Object(_hooks_use_fetcher__WEBPACK_IMPORTED_MODULE_11__.b)(callApmApi=>{if(windowSize&&windowUnit)return callApmApi({endpoint:"GET /api/apm/alerts/chart_preview/transaction_duration",params:{query:{...Object(_helper__WEBPACK_IMPORTED_MODULE_15__.a)(windowSize,windowUnit),aggregationType:aggregationType,environment:environment,serviceName:serviceName,transactionType:alertParams.transactionType}}})},[aggregationType,environment,serviceName,alertParams.transactionType,windowSize,windowUnit]),latencyChartPreview=null!==(_data$latencyChartPre=null==data?void 0:data.latencyChartPreview)&&void 0!==_data$latencyChartPre?_data$latencyChartPre:[],maxY=Object(_shared_charts_transaction_charts_helper__WEBPACK_IMPORTED_MODULE_12__.a)([{data:latencyChartPreview}]),formatter=Object(_common_utils_formatters__WEBPACK_IMPORTED_MODULE_7__.k)(maxY),yTickFormat=Object(_shared_charts_transaction_charts_helper__WEBPACK_IMPORTED_MODULE_12__.b)(formatter),thresholdMs=1e3*threshold,chartPreview=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_chart_preview__WEBPACK_IMPORTED_MODULE_13__.a,{data:latencyChartPreview,threshold:thresholdMs,yTickFormat:yTickFormat});if(!transactionTypes.length||!serviceName)return null;const defaults={threshold:1500,aggregationType:"avg",windowSize:5,windowUnit:"m",transactionType:transactionType,environment:urlParams.environment||_common_environment_filter_values__WEBPACK_IMPORTED_MODULE_6__.a.value},params={...defaults,...alertParams},fields=[react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fields__WEBPACK_IMPORTED_MODULE_14__.c,{value:serviceName}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fields__WEBPACK_IMPORTED_MODULE_14__.d,{currentValue:params.transactionType,options:transactionTypes.map(key=>({text:key,value:key})),onChange:e=>setAlertParams("transactionType",e.target.value)}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fields__WEBPACK_IMPORTED_MODULE_14__.a,{currentValue:params.environment,options:environmentOptions,onChange:e=>setAlertParams("environment",e.target.value)}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_service_alert_trigger_popover_expression__WEBPACK_IMPORTED_MODULE_17__.a,{value:params.aggregationType,title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.apm.transactionDurationAlertTrigger.when",{defaultMessage:"When"})},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiSelect,{value:params.aggregationType,options:Object(lodash__WEBPACK_IMPORTED_MODULE_2__.map)(TRANSACTION_ALERT_AGGREGATION_TYPES,(label,key)=>({text:label,value:key})),onChange:e=>setAlertParams("aggregationType",e.target.value),compressed:!0})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fields__WEBPACK_IMPORTED_MODULE_14__.b,{value:params.threshold,unit:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.apm.transactionDurationAlertTrigger.ms",{defaultMessage:"ms"}),onChange:value=>setAlertParams("threshold",value||0)}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_triggers_actions_ui_public__WEBPACK_IMPORTED_MODULE_5__.ForLastExpression,{onChangeWindowSize:timeWindowSize=>setAlertParams("windowSize",timeWindowSize||""),onChangeWindowUnit:timeWindowUnit=>setAlertParams("windowUnit",timeWindowUnit),timeWindowSize:params.windowSize,timeWindowUnit:params.windowUnit,errors:{timeWindowSize:[],timeWindowUnit:[]}})];return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_service_alert_trigger__WEBPACK_IMPORTED_MODULE_16__.a,{chartPreview:chartPreview,defaults:defaults,fields:fields,setAlertParams:setAlertParams,setAlertProperty:setAlertProperty})}__webpack_exports__.default=TransactionDurationAlertTrigger},136:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ChartPreview}));var _elastic_charts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_hooks_use_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(47);function ChartPreview({data:data=[],yTickFormat:yTickFormat,threshold:threshold}){const theme=Object(_hooks_use_theme__WEBPACK_IMPORTED_MODULE_3__.a)(),timestamps=data.map(d=>d.x),xMin=Math.min(...timestamps),xMax=Math.max(...timestamps),xFormatter=Object(_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.niceTimeFormatter)([xMin,xMax]),values=data.map(d=>{var _d$y;return null!==(_d$y=d.y)&&void 0!==_d$y?_d$y:0}),yMax=Math.max(...values,1.2*threshold),style={fill:theme.eui.euiColorVis2,line:{strokeWidth:2,stroke:theme.eui.euiColorVis2,opacity:1},opacity:.3},rectDataValues=[{coordinates:{x0:null,x1:null,y0:threshold,y1:null}}];return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.Chart,{size:{height:150},"data-test-subj":"ChartPreview"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.Settings,{tooltip:"none"}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.LineAnnotation,{dataValues:[{dataValue:threshold}],domainType:_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.AnnotationDomainType.YDomain,id:"chart_preview_line_annotation",markerPosition:"left",style:style}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.RectAnnotation,{dataValues:rectDataValues,hideTooltips:!0,id:"chart_preview_rect_annotation",style:style}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.Axis,{id:"chart_preview_x_axis",position:_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.Position.Bottom,showOverlappingTicks:!0,tickFormat:xFormatter}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.Axis,{id:"chart_preview_y_axis",position:_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.Position.Left,tickFormat:yTickFormat,ticks:5,domain:{max:yMax}}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.BarSeries,{color:theme.eui.euiColorVis1,data:data,id:"chart_preview_bar_series",xAccessor:"x",xScaleType:_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.ScaleType.Linear,yAccessors:["y"],yScaleType:_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.ScaleType.Linear})))}},137:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getAbsoluteTimeRange}));var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(138),_elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_0__);function getAbsoluteTimeRange(windowSize,windowUnit){var _datemath$parse$toISO,_datemath$parse;const now=(new Date).toISOString();return{start:null!==(_datemath$parse$toISO=null===(_datemath$parse=_elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.parse(`now-${windowSize}${windowUnit}`))||void 0===_datemath$parse?void 0:_datemath$parse.toISOString())&&void 0!==_datemath$parse$toISO?_datemath$parse$toISO:now,end:now}}},164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return getResponseTimeTickFormatter})),__webpack_require__.d(__webpack_exports__,"a",(function(){return getMaxY}));var _common_utils_is_finite_number__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67);function getResponseTimeTickFormatter(formatter){return t=>formatter(t).formatted}function getMaxY(specs){const values=null==specs?void 0:specs.flatMap(spec=>spec.data).map(coord=>coord.y).filter(_common_utils_is_finite_number__WEBPACK_IMPORTED_MODULE_0__.a);return null!=values&&values.length?Math.max(...values,0):0}},46:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return asDecimal})),__webpack_require__.d(__webpack_exports__,"e",(function(){return asInteger})),__webpack_require__.d(__webpack_exports__,"g",(function(){return asPercent})),__webpack_require__.d(__webpack_exports__,"j",(function(){return getDateDifference})),__webpack_require__.d(__webpack_exports__,"a",(function(){return asAbsoluteDateTime})),__webpack_require__.d(__webpack_exports__,"h",(function(){return asRelativeDateTimeRange})),__webpack_require__.d(__webpack_exports__,"k",(function(){return getDurationFormatter})),__webpack_require__.d(__webpack_exports__,"i",(function(){return asTransactionRate})),__webpack_require__.d(__webpack_exports__,"c",(function(){return asDuration})),__webpack_require__.d(__webpack_exports__,"f",(function(){return asMillisecondDuration})),__webpack_require__.d(__webpack_exports__,"l",(function(){return getFixedByteFormatter})),__webpack_require__.d(__webpack_exports__,"d",(function(){return asDynamicBytes}));var external_kbnSharedDeps_ElasticNumeral_=__webpack_require__(23),external_kbnSharedDeps_ElasticNumeral_default=__webpack_require__.n(external_kbnSharedDeps_ElasticNumeral_),i18n=__webpack_require__(63),is_finite_number=__webpack_require__(67);function asDecimal(value){return Object(is_finite_number.a)(value)?external_kbnSharedDeps_ElasticNumeral_default()(value).format("0,0.0"):i18n.a}function asInteger(value){return Object(is_finite_number.a)(value)?external_kbnSharedDeps_ElasticNumeral_default()(value).format("0,0"):i18n.a}function asPercent(numerator,denominator,fallbackResult=i18n.a){if(!denominator||!Object(is_finite_number.a)(numerator))return fallbackResult;const decimal=numerator/denominator;return Math.abs(decimal)>=.1||0===decimal?external_kbnSharedDeps_ElasticNumeral_default()(decimal).format("0%"):external_kbnSharedDeps_ElasticNumeral_default()(decimal).format("0.0%")}function asDecimalOrInteger(value){return 0===value||value>=10?asInteger(value):asDecimal(value)}var external_kbnSharedDeps_MomentTimezone_=__webpack_require__(27),external_kbnSharedDeps_MomentTimezone_default=__webpack_require__.n(external_kbnSharedDeps_MomentTimezone_);function formatTimezone(momentTime){const utcOffsetHours=momentTime.utcOffset()/60,customTimezoneFormat=utcOffsetHours>0?"+"+utcOffsetHours:utcOffsetHours,utcOffsetFormatted=Number.isInteger(utcOffsetHours)?customTimezoneFormat:"Z";return momentTime.format(`(UTC${utcOffsetFormatted})`)}function getTimeFormat(timeUnit){switch(timeUnit){case"hours":return"HH";case"minutes":return"HH:mm";case"seconds":return"HH:mm:ss";case"milliseconds":return"HH:mm:ss.SSS";default:return""}}function getDateFormat(dateUnit){switch(dateUnit){case"years":return"YYYY";case"months":return"MMM YYYY";case"days":return"MMM D, YYYY";default:return""}}const getDateDifference=({start:start,end:end,unitOfTime:unitOfTime,precise:precise})=>end.diff(start,unitOfTime,precise);function asAbsoluteDateTime(time,timeUnit="milliseconds"){const momentTime=external_kbnSharedDeps_MomentTimezone_default()(time),formattedTz=formatTimezone(momentTime);return momentTime.format(`${getDateFormat("days")}, ${getTimeFormat(timeUnit)} ${formattedTz}`)}function asRelativeDateTimeRange(start,end){const momentStartTime=external_kbnSharedDeps_MomentTimezone_default()(start),momentEndTime=external_kbnSharedDeps_MomentTimezone_default()(end),{dateFormat:dateFormat,timeFormat:timeFormat}=function(start,end){if(getDateDifference({start:start,end:end,unitOfTime:"years"})>=5)return{dateFormat:getDateFormat("years")};if(getDateDifference({start:start,end:end,unitOfTime:"months"})>=5)return{dateFormat:getDateFormat("months")};const dateFormatWithDays=getDateFormat("days");return getDateDifference({start:start,end:end,unitOfTime:"days"})>1?{dateFormat:dateFormatWithDays}:getDateDifference({start:start,end:end,unitOfTime:"minutes"})>=1?{dateFormat:dateFormatWithDays,timeFormat:getTimeFormat("minutes")}:getDateDifference({start:start,end:end,unitOfTime:"seconds"})>=10?{dateFormat:dateFormatWithDays,timeFormat:getTimeFormat("seconds")}:{dateFormat:dateFormatWithDays,timeFormat:getTimeFormat("milliseconds")}}(momentStartTime,momentEndTime);if(timeFormat){return`${momentStartTime.format(`${dateFormat}, ${timeFormat}`)} - ${momentEndTime.format(timeFormat)} ${formatTimezone(momentStartTime)}`}return`${momentStartTime.format(dateFormat)} - ${momentEndTime.format(dateFormat)}`}var external_kbnSharedDeps_KbnI18n_=__webpack_require__(0),external_kbnSharedDeps_Moment_=__webpack_require__(22),external_kbnSharedDeps_Moment_default=__webpack_require__.n(external_kbnSharedDeps_Moment_),external_kbnSharedDeps_Lodash_=__webpack_require__(17);function convertTo({unit:unit,microseconds:microseconds,defaultValue:defaultValue=i18n.a}){if(!Object(is_finite_number.a)(microseconds))return{value:defaultValue,formatted:defaultValue};const{convertedValue:convertedValue,unitLabel:unitLabel}=function(unitKey,value){switch(unitKey){case"hours":return{unitLabel:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.apm.formatters.hoursTimeUnitLabel",{defaultMessage:"h"}),convertedValue:asDecimalOrInteger(external_kbnSharedDeps_Moment_default.a.duration(value/1e3).asHours())};case"minutes":return{unitLabel:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.apm.formatters.minutesTimeUnitLabel",{defaultMessage:"min"}),convertedValue:asDecimalOrInteger(external_kbnSharedDeps_Moment_default.a.duration(value/1e3).asMinutes())};case"seconds":return{unitLabel:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.apm.formatters.secondsTimeUnitLabel",{defaultMessage:"s"}),convertedValue:asDecimalOrInteger(external_kbnSharedDeps_Moment_default.a.duration(value/1e3).asSeconds())};case"milliseconds":return{unitLabel:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.apm.formatters.millisTimeUnitLabel",{defaultMessage:"ms"}),convertedValue:asDecimalOrInteger(external_kbnSharedDeps_Moment_default.a.duration(value/1e3).asMilliseconds())};case"microseconds":return{unitLabel:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.apm.formatters.microsTimeUnitLabel",{defaultMessage:"μs"}),convertedValue:asInteger(value)}}}(unit,microseconds);return{value:convertedValue,unit:unitLabel,formatted:`${convertedValue} ${unitLabel}`}}const toMicroseconds=(value,timeUnit)=>1e3*external_kbnSharedDeps_Moment_default.a.duration(value,timeUnit).asMilliseconds();const getDurationFormatter=Object(external_kbnSharedDeps_Lodash_.memoize)(max=>{const unit=function(max){return max>toMicroseconds(10,"hours")?"hours":max>toMicroseconds(10,"minutes")?"minutes":max>toMicroseconds(10,"seconds")?"seconds":max>toMicroseconds(1,"milliseconds")?"milliseconds":"microseconds"}(max);return(value,{defaultValue:defaultValue}={})=>convertTo({unit:unit,microseconds:value,defaultValue:defaultValue})});function asTransactionRate(value){if(!Object(is_finite_number.a)(value))return i18n.a;let displayedValue;return displayedValue=0===value?"0":value<=.1?"< 0.1":asDecimal(value),external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.apm.transactionRateLabel",{defaultMessage:"{value} tpm",values:{value:displayedValue}})}function asDuration(value,{defaultValue:defaultValue=i18n.a}={}){if(!Object(is_finite_number.a)(value))return defaultValue;return getDurationFormatter(value)(value,{defaultValue:defaultValue}).formatted}function asMillisecondDuration(value){return convertTo({unit:"milliseconds",microseconds:value}).formatted}function asKilobytes(value){return asDecimal(value/1e3)+" KB"}function asMegabytes(value){return asDecimal(value/1e6)+" MB"}function asGigabytes(value){return asDecimal(value/1e9)+" GB"}function asTerabytes(value){return asDecimal(value/1e12)+" TB"}function asBytes(value){return asDecimal(value)+" B"}const bailIfNumberInvalid=cb=>val=>null==val||isNaN(val)?"":cb(val),getFixedByteFormatter=Object(external_kbnSharedDeps_Lodash_.memoize)(max=>{const formatter=unmemoizedFixedByteFormatter(max);return bailIfNumberInvalid(formatter)}),asDynamicBytes=bailIfNumberInvalid(value=>unmemoizedFixedByteFormatter(value)(value)),unmemoizedFixedByteFormatter=max=>max>1e12?asTerabytes:max>1e9?asGigabytes:max>1e6?asMegabytes:max>1e3?asKilobytes:asBytes},47:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useTheme}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20);function useTheme(){return Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeContext)}},50:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useApmServiceContext}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_apm_service_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(90);function useApmServiceContext(){return Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_apm_service_context__WEBPACK_IMPORTED_MODULE_1__.a)}},62:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return OPEN_TELEMETRY_AGENT_NAMES})),__webpack_require__.d(__webpack_exports__,"b",(function(){return RUM_AGENT_NAMES})),__webpack_require__.d(__webpack_exports__,"c",(function(){return isJavaAgentName})),__webpack_require__.d(__webpack_exports__,"d",(function(){return isRumAgentName}));const OPEN_TELEMETRY_AGENT_NAMES=["otlp","opentelemetry/cpp","opentelemetry/dotnet","opentelemetry/erlang","opentelemetry/go","opentelemetry/java","opentelemetry/nodejs","opentelemetry/php","opentelemetry/python","opentelemetry/ruby","opentelemetry/webjs"],RUM_AGENT_NAMES=["js-base","rum-js","opentelemetry/webjs"];function isJavaAgentName(agentName){return"java"===agentName}function isRumAgentName(agentName){return RUM_AGENT_NAMES.includes(agentName)}},63:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return NOT_AVAILABLE_LABEL}));var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);const NOT_AVAILABLE_LABEL=_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.apm.notAvailableLabel",{defaultMessage:"N/A"})},67:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isFiniteNumber}));var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(17);function isFiniteNumber(value){return Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isFinite)(value)}},77:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TRANSACTION_PAGE_LOAD})),__webpack_require__.d(__webpack_exports__,"b",(function(){return TRANSACTION_REQUEST}));const TRANSACTION_PAGE_LOAD="page-load",TRANSACTION_REQUEST="request"},84:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PopoverExpression}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15);function PopoverExpression(props){const{title:title,value:value,children:children}=props,[popoverOpen,setPopoverOpen]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiPopover,{isOpen:popoverOpen,anchorPosition:"downLeft",closePopover:()=>setPopoverOpen(!1),button:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiExpression,{description:title,value:value,isActive:popoverOpen,onClick:()=>setPopoverOpen(!0)}),repositionOnScroll:!0},children)}},90:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return APMServiceContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ApmServiceContextProvider}));var external_kbnSharedDeps_React_=__webpack_require__(2),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),agent_name=__webpack_require__(62),transaction_types=__webpack_require__(77),external_kbnSharedDeps_ReactRouterDom_=__webpack_require__(16),use_fetcher=__webpack_require__(43),use_url_params=__webpack_require__(42);const INITIAL_DATA={transactionTypes:[]};var use_apm_plugin_context=__webpack_require__(45);const APMServiceContext=Object(external_kbnSharedDeps_React_.createContext)({transactionTypes:[],alerts:[]});function ApmServiceContextProvider({children:children}){const{urlParams:urlParams}=Object(use_url_params.a)(),{agentName:agentName}=function(){const{serviceName:serviceName}=Object(external_kbnSharedDeps_ReactRouterDom_.useParams)(),{urlParams:urlParams}=Object(use_url_params.a)(),{start:start,end:end}=urlParams,{data:data,error:error,status:status}=Object(use_fetcher.b)(callApmApi=>{if(serviceName&&start&&end)return callApmApi({endpoint:"GET /api/apm/services/{serviceName}/agent_name",params:{path:{serviceName:serviceName},query:{start:start,end:end}}})},[serviceName,start,end]);return{agentName:null==data?void 0:data.agentName,status:status,error:error}}(),transactionTypes=function(){const{serviceName:serviceName}=Object(external_kbnSharedDeps_ReactRouterDom_.useParams)(),{urlParams:urlParams}=Object(use_url_params.a)(),{start:start,end:end}=urlParams,{data:data=INITIAL_DATA}=Object(use_fetcher.b)(callApmApi=>{if(serviceName&&start&&end)return callApmApi({endpoint:"GET /api/apm/services/{serviceName}/transaction_types",params:{path:{serviceName:serviceName},query:{start:start,end:end}}})},[serviceName,start,end]);return data.transactionTypes}(),transactionType=function({urlParams:urlParams,transactionTypes:transactionTypes,agentName:agentName}){if(urlParams.transactionType)return urlParams.transactionType;if(!agentName||0===transactionTypes.length)return;const defaultTransactionType=Object(agent_name.d)(agentName)?transaction_types.a:transaction_types.b;return transactionTypes.includes(defaultTransactionType)?defaultTransactionType:transactionTypes[0]}({urlParams:urlParams,transactionTypes:transactionTypes,agentName:agentName}),{alerts:alerts}=function(transactionType){var _data$alerts;const{plugins:{observability:observability}}=Object(use_apm_plugin_context.a)(),{urlParams:{start:start,end:end,environment:environment}}=Object(use_url_params.a)(),{serviceName:serviceName}=Object(external_kbnSharedDeps_ReactRouterDom_.useParams)(),experimentalAlertsEnabled=observability.isAlertingExperienceEnabled(),fetcherStatus=Object(use_fetcher.b)(callApmApi=>{if(start&&end&&serviceName&&transactionType&&experimentalAlertsEnabled)return callApmApi({endpoint:"GET /api/apm/services/{serviceName}/alerts",params:{path:{serviceName:serviceName},query:{start:start,end:end,transactionType:transactionType,environment:environment}}}).catch(error=>(console.error(error),{alerts:[]}))},[start,end,serviceName,transactionType,environment,experimentalAlertsEnabled]),{data:data,...rest}=fetcherStatus;return{...rest,alerts:null!==(_data$alerts=null==data?void 0:data.alerts)&&void 0!==_data$alerts?_data$alerts:[]}}(transactionType);return external_kbnSharedDeps_React_default.a.createElement(APMServiceContext.Provider,{value:{agentName:agentName,transactionType:transactionType,transactionTypes:transactionTypes,alerts:alerts},children:children})}}}]);