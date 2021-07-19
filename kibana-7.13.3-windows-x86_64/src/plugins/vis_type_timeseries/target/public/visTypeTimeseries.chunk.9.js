(window.visTypeTimeseries_bundle_jsonpfunction=window.visTypeTimeseries_bundle_jsonpfunction||[]).push([[9],{130:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return visWithSplits}));var external_kbnSharedDeps_React_=__webpack_require__(1),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_);var label_date_formatter=__webpack_require__(67),external_kbnSharedDeps_Lodash_=__webpack_require__(7),empty_label=__webpack_require__(43),get_split_by_terms_color=__webpack_require__(80);function visWithSplits(WrappedComponent){function SplitVisComponent(props){const{model:model,visData:visData,syncColors:syncColors,palettesService:palettesService}=props,getSeriesColor=Object(external_kbnSharedDeps_React_.useCallback)((seriesName,seriesId,baseColor)=>{const palette={...model.series[0].palette,name:"kibana"===model.series[0].split_color_mode?"kibana_palette":model.series[0].split_color_mode||model.series[0].palette.name},props={seriesById:visData[model.id].series,seriesName:seriesName,seriesId:seriesId,baseColor:baseColor,seriesPalette:palette,palettesRegistry:palettesService,syncColors:syncColors};return Object(get_split_by_terms_color.a)(props)||null},[model,palettesService,syncColors,visData]);if(!model||!visData||!visData[model.id])return external_kbnSharedDeps_React_default.a.createElement(WrappedComponent,props);if(visData[model.id].series.every(s=>1===s.id.split(":").length))return external_kbnSharedDeps_React_default.a.createElement(WrappedComponent,props);const splitsVisData=visData[model.id].series.reduce((acc,series)=>{const[seriesId,splitId]=series.id.split(":"),seriesModel=model.series.find(s=>s.id===seriesId);if(!seriesModel)return acc;const label=series.splitByLabel;acc[splitId]||(acc[splitId]={series:[],label:series.label.toString(),labelFormatted:series.labelFormatted});const labelHasKeyPlaceholder=/{{\s*key\s*}}/.test(seriesModel.label),color=series.color||seriesModel.color,finalColor="terms"===model.series[0].split_mode?getSeriesColor(label,series.id,color):color;return acc[splitId].series.push({...series,id:seriesId,color:finalColor,label:seriesModel.label&&!labelHasKeyPlaceholder?seriesModel.label:label}),acc},{}),nonSplitSeries=Object(external_kbnSharedDeps_Lodash_.first)(visData[model.id].series.filter(series=>{const seriesModel=model.series.find(s=>s.id===series.id);return!!seriesModel&&["everything","filter"].includes(seriesModel.split_mode)})),indexOfNonSplit=nonSplitSeries?Object(external_kbnSharedDeps_Lodash_.findIndex)(model.series,s=>s.id===nonSplitSeries.id):null,rows=Object.keys(splitsVisData).map(key=>{const splitData=splitsVisData[key],{series:series,label:label,labelFormatted:labelFormatted}=splitData;let additionalLabel=label;labelFormatted&&(additionalLabel=Object(label_date_formatter.a)(labelFormatted));const newSeries=null!=indexOfNonSplit&&indexOfNonSplit>0?[...series,nonSplitSeries]:[nonSplitSeries,...series],newVisData={[model.id]:{id:model.id,series:newSeries||series}};return external_kbnSharedDeps_React_default.a.createElement("div",{key:key,className:"tvbSplitVis__split"},external_kbnSharedDeps_React_default.a.createElement(WrappedComponent,{model:model,visData:newVisData,onBrush:props.onBrush,additionalLabel:Object(empty_label.b)(additionalLabel),backgroundColor:props.backgroundColor,getConfig:props.getConfig}))});return external_kbnSharedDeps_React_default.a.createElement("div",{className:"tvbSplitVis"},rows)}var Component;return SplitVisComponent.displayName=`SplitVisComponent(${Component=WrappedComponent,Component.displayName||Component.name||"Component"})`,SplitVisComponent}},382:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return vis_gauge}));var external_kbnSharedDeps_React_=__webpack_require__(1),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),vis_with_splits=__webpack_require__(130),tick_formatter=__webpack_require__(54),external_kbnSharedDeps_Lodash_=__webpack_require__(7),external_kbnSharedDeps_Lodash_default=__webpack_require__.n(external_kbnSharedDeps_Lodash_),classnames=__webpack_require__(79),classnames_default=__webpack_require__.n(classnames),set_is_reversed=__webpack_require__(84),get_last_value=__webpack_require__(49);var lib=__webpack_require__(90),lib_default=__webpack_require__.n(lib),calculate_coordinates=__webpack_require__(99),chart=__webpack_require__(58);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}class gauge_vis_GaugeVis extends external_kbnSharedDeps_React_.Component{constructor(props){super(props),this.state={scale:1,top:0,left:0,translateX:1,translateY:1},this.handleResize=this.handleResize.bind(this)}UNSAFE_componentWillMount(){const check=()=>{this.timeout=setTimeout(()=>{const newState=Object(calculate_coordinates.a)(this.inner,this.resize,this.state);newState&&this.state&&!external_kbnSharedDeps_Lodash_default.a.isEqual(newState,this.state)&&this.handleResize(),check()},500)};check()}componentWillUnmount(){clearTimeout(this.timeout)}componentDidMount(){this.handleResize()}handleResize(){const newState=Object(calculate_coordinates.a)(this.inner,this.resize,this.state);this.setState(newState)}render(){const{type:type,value:value,max:max,color:color}=this.props,{scale:scale,translateX:translateX,translateY:translateY}=this.state,size=2*Math.PI*50,sliceSize="half"===type?.6:1,percent=value<max?value/max:1,styles=lib_default()({default:{resize:{position:"relative",display:"flex",rowDirection:"column",flex:"1 0 auto",overflow:"hidden"},svg:{position:"absolute",top:this.state.top,left:this.state.left,transform:`matrix(${scale}, 0, 0, ${scale}, ${translateX}, ${translateY})`},innerLine:{strokeWidth:this.props.innerLine},gaugeLine:{strokeWidth:this.props.gaugeLine}},half:{svg:{transform:`matrix(${scale}, 0, 0, ${scale}, ${translateX}, ${translateY})`}}},{half:"half"===type}),props={circle:{r:50,cx:60,cy:60,fill:"rgba(0,0,0,0)",stroke:color,strokeWidth:this.props.gaugeLine,strokeDasharray:`${percent*sliceSize*size} ${size}`,transform:"rotate(-90 60 60)"},circleBackground:{r:50,cx:60,cy:60,fill:"rgba(0,0,0,0)",stroke:chart.a.LINE_COLOR,strokeDasharray:`${sliceSize*size} ${size}`,strokeWidth:this.props.innerLine}};let svg;return"half"===type&&(props.circle.transform="rotate(-197.8 60 60)",props.circleBackground.transform="rotate(162 60 60)"),this.props.innerColor&&(props.circleBackground.stroke=this.props.innerColor),svg="half"===type?external_kbnSharedDeps_React_default.a.createElement("svg",{width:120.72,height:78.72},external_kbnSharedDeps_React_default.a.createElement("circle",_extends({},props.circleBackground,{style:styles.innerLine})),external_kbnSharedDeps_React_default.a.createElement("circle",_extends({},props.circle,{style:styles.gaugeLine}))):external_kbnSharedDeps_React_default.a.createElement("svg",{width:120.72,height:120.72},external_kbnSharedDeps_React_default.a.createElement("circle",props.circleBackground),external_kbnSharedDeps_React_default.a.createElement("circle",props.circle)),external_kbnSharedDeps_React_default.a.createElement("div",{ref:el=>this.resize=el,style:styles.resize},external_kbnSharedDeps_React_default.a.createElement("div",{style:styles.svg,ref:el=>this.inner=el},svg))}}gauge_vis_GaugeVis.defaultProps={innerLine:2,gaugeLine:10};class gauge_Gauge extends external_kbnSharedDeps_React_.Component{constructor(props){super(props),this.state={scale:1,top:0,left:0,translateX:1,translateY:1},this.handleResize=this.handleResize.bind(this)}UNSAFE_componentWillMount(){const check=()=>{this.timeout=setTimeout(()=>{const newState=Object(calculate_coordinates.a)(this.inner,this.resize,this.state);newState&&this.state&&!external_kbnSharedDeps_Lodash_default.a.isEqual(newState,this.state)&&this.handleResize(),check()},500)};check()}componentWillUnmount(){clearTimeout(this.timeout)}componentDidMount(){this.handleResize()}handleResize(){const newState=Object(calculate_coordinates.a)(this.inner,this.resize,this.state);this.setState(newState)}render(){const{metric:metric,type:type}=this.props,{scale:scale,translateX:translateX,translateY:translateY}=this.state,value=metric&&Object(get_last_value.b)(metric.data),max=metric&&((fn,data)=>{if(external_kbnSharedDeps_Lodash_default.a.isNumber(data))return data;if(!Array.isArray(data))return 0;const values=data.map(v=>v[1]);return external_kbnSharedDeps_Lodash_default.a[fn](values)})("max",metric.data)||1,formatter=metric&&(metric.tickFormatter||metric.formatter)||this.props.tickFormatter||(v=>v),title=metric&&metric.label||"",styles=lib_default()({default:{inner:{top:this.state.top||0,left:this.state.left||0,transform:`matrix(${scale}, 0, 0, ${scale}, ${translateX}, ${translateY})`}},valueColor:{value:{color:this.props.valueColor}}},this.props),gaugeProps={value:value,reversed:Object(set_is_reversed.a)(this.props.backgroundColor),gaugeLine:this.props.gaugeLine,innerLine:this.props.innerLine,innerColor:this.props.innerColor,max:this.props.max||max,color:metric&&metric.color||"#8ac336",type:type};let metrics,additionalLabel;this.props.additionalLabel&&(additionalLabel=external_kbnSharedDeps_React_default.a.createElement("div",{className:"tvbVisGauge__additionalLabel"},this.props.additionalLabel)),metrics="half"===type?external_kbnSharedDeps_React_default.a.createElement("div",{className:"tvbVisHalfGauge__metrics",ref:el=>this.inner=el,style:styles.inner},external_kbnSharedDeps_React_default.a.createElement("div",{className:"tvbVisGauge__label",ref:"title"},title),external_kbnSharedDeps_React_default.a.createElement("div",{className:"tvbVisGauge__value",style:styles.value,ref:"label"},formatter(value)),additionalLabel):external_kbnSharedDeps_React_default.a.createElement("div",{className:"tvbVisCircleGauge__metrics",ref:el=>this.inner=el,style:styles.inner},external_kbnSharedDeps_React_default.a.createElement("div",{className:"tvbVisGauge__value",style:styles.value,ref:"label"},formatter(value)),external_kbnSharedDeps_React_default.a.createElement("div",{className:"tvbVisGauge__label",ref:"title"},title),additionalLabel);const classes=classnames_default()({tvbVisHalfGauge:"half"===type,tvbVisCircleGauge:"circle"===type,"tvbVisGauge--reversed":Object(set_is_reversed.b)(this.props.backgroundColor)});return external_kbnSharedDeps_React_default.a.createElement("div",{className:classes},external_kbnSharedDeps_React_default.a.createElement("div",{ref:el=>this.resize=el,className:"tvbVisGauge__resize","data-test-subj":"tvbVisGaugeContainer"},metrics,external_kbnSharedDeps_React_default.a.createElement(gauge_vis_GaugeVis,gaugeProps)))}}gauge_Gauge.defaultProps={type:"half",innerLine:2,gaugeLine:10};const vis_gauge=Object(vis_with_splits.a)((function(props){const{backgroundColor:backgroundColor,model:model,visData:visData}=props,colors=function(props){const{model:model,visData:visData}=props,series=Object(external_kbnSharedDeps_Lodash_.get)(visData,model.id+".series",[]).filter(s=>!Object(external_kbnSharedDeps_Lodash_.isUndefined)(s));let text,gauge;return model.gauge_color_rules&&model.gauge_color_rules.forEach(rule=>{if(rule.operator&&null!=rule.value){const value=series[0]&&Object(get_last_value.b)(series[0].data)||0;external_kbnSharedDeps_Lodash_default.a[rule.operator](value,rule.value)&&(gauge=rule.gauge,text=rule.text)}}),{text:text,gauge:gauge}}(props),series=Object(external_kbnSharedDeps_Lodash_.get)(visData,model.id+".series",[]).filter(row=>row).map((row,i)=>{const seriesDef=model.series.find(s=>Object(external_kbnSharedDeps_Lodash_.includes)(row.id,s.id)),newProps={};return seriesDef&&(newProps.formatter=Object(tick_formatter.a)(seriesDef.formatter,seriesDef.value_template,props.getConfig)),0===i&&colors.gauge&&(newProps.color=colors.gauge),Object(external_kbnSharedDeps_Lodash_.assign)({},row,newProps)}),panelBackgroundColor=model.background_color||backgroundColor,style={backgroundColor:panelBackgroundColor},params={metric:series[0],type:model.gauge_style||"half",additionalLabel:props.additionalLabel,backgroundColor:panelBackgroundColor};return colors.text&&(params.valueColor=colors.text),model.gauge_width&&(params.gaugeLine=model.gauge_width),model.gauge_inner_color&&(params.innerColor=model.gauge_inner_color),model.gauge_inner_width&&(params.innerLine=model.gauge_inner_width),null!=model.gauge_max&&(params.max=model.gauge_max),external_kbnSharedDeps_React_default.a.createElement("div",{className:"tvbVis",style:style},external_kbnSharedDeps_React_default.a.createElement(gauge_Gauge,params))}))},55:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return rainbowColors}));const rainbowColors=["#68BC00","#009CE0","#B0BC00","#16A5A5","#D33115","#E27300","#FCC400","#7B64FF","#FA28FF","#333333","#808080","#194D33","#0062B1","#808900","#0C797D","#9F0500","#C45100","#FB9E00","#653294","#AB149E","#0F1419","#666666"]},56:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return computeGradientFinalColor}));var color__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(57),color__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);const computeGradientFinalColor=color=>{let inputColor=new color__WEBPACK_IMPORTED_MODULE_0___default.a(color);const hsl=inputColor.hsl().object();return hsl.l-=100*inputColor.luminosity(),inputColor=color__WEBPACK_IMPORTED_MODULE_0___default.a.hsl(hsl),inputColor.rgb().toString()}},79:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},80:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getSplitByTermsColor}));var _common_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),_compute_gradient_final_color__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_rainbow_colors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(55),_common_empty_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(43);const getSplitByTermsColor=({seriesById:seriesById,seriesName:seriesName,seriesId:seriesId,baseColor:baseColor,seriesPalette:seriesPalette,palettesRegistry:palettesRegistry,syncColors:syncColors})=>{if(!seriesPalette)return null;const paletteName=seriesPalette.name===_common_types__WEBPACK_IMPORTED_MODULE_0__.a.RAINBOW||seriesPalette.name===_common_types__WEBPACK_IMPORTED_MODULE_0__.a.GRADIENT?"custom":seriesPalette.name,paletteParams=seriesPalette.name===_common_types__WEBPACK_IMPORTED_MODULE_0__.a.GRADIENT?{...seriesPalette.params,colors:[baseColor,Object(_compute_gradient_final_color__WEBPACK_IMPORTED_MODULE_1__.a)(baseColor)],gradient:!0}:seriesPalette.name===_common_types__WEBPACK_IMPORTED_MODULE_0__.a.RAINBOW?{...seriesPalette.params,colors:_rainbow_colors__WEBPACK_IMPORTED_MODULE_2__.a}:seriesPalette.params;return null==palettesRegistry?void 0:palettesRegistry.get(paletteName||"default").getColor([{name:Object(_common_empty_label__WEBPACK_IMPORTED_MODULE_3__.b)(seriesName),rankAtDepth:seriesById.findIndex(({id:id})=>id===seriesId),totalSeriesAtDepth:seriesById.length}],{maxDepth:1,totalSeries:seriesById.length,behindText:!1,syncColors:syncColors},paletteParams)}},99:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return calculateCoordinates}));var external_kbnSharedDeps_ReactDom_=__webpack_require__(4);function calcDimensions(el,scale){return[Math.floor(el.clientWidth*scale),Math.floor(el.clientHeight*scale)]}function calculateCoordinates(innerRef,resizeRef,state){const inner=Object(external_kbnSharedDeps_ReactDom_.findDOMNode)(innerRef),resize=Object(external_kbnSharedDeps_ReactDom_.findDOMNode)(resizeRef);let scale=state.scale;scale=resize.clientWidth-resize.clientHeight<0?resize.clientWidth/inner.clientWidth:resize.clientHeight/inner.clientHeight;let[newWidth,newHeight]=calcDimensions(inner,scale);newWidth>resize.clientWidth&&(scale=resize.clientWidth/inner.clientWidth),newHeight>resize.clientHeight&&(scale=resize.clientHeight/inner.clientHeight),[newWidth,newHeight]=calcDimensions(inner,scale);const translateX=(newWidth-inner.clientWidth)/2,translateY=(newHeight-inner.clientHeight)/2;return{scale:scale,top:Math.floor((resize.clientHeight-newHeight)/2),left:Math.floor((resize.clientWidth-newWidth)/2),translateY:translateY,translateX:translateX}}}}]);