!function(modules){function webpackJsonpCallback(data){for(var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],i=0,resolves=[];i<chunkIds.length;i++)chunkId=chunkIds[i],Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]&&resolves.push(installedChunks[chunkId][0]),installedChunks[chunkId]=0;for(moduleId in moreModules)Object.prototype.hasOwnProperty.call(moreModules,moduleId)&&(modules[moduleId]=moreModules[moduleId]);for(parentJsonpFunction&&parentJsonpFunction(data);resolves.length;)resolves.shift()()}var installedModules={},installedChunks={0:0};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.e=function(chunkId){var promises=[],installedChunkData=installedChunks[chunkId];if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var onScriptComplete,script=document.createElement("script");script.charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.src=function(chunkId){return __webpack_require__.p+"visTypeVislib.chunk."+chunkId+".js"}(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null,clearTimeout(timeout);var chunk=installedChunks[chunkId];if(0!==chunk){if(chunk){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,chunk[1](error)}installedChunks[chunkId]=void 0}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete,document.head.appendChild(script)}return Promise.all(promises)},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__.oe=function(err){throw console.error(err),err};var jsonpArray=window.visTypeVislib_bundle_jsonpfunction=window.visTypeVislib_bundle_jsonpfunction||[],oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback,jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;__webpack_require__(__webpack_require__.s=15)}([function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/visTypeXy/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/data/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Alignment})),__webpack_require__.d(__webpack_exports__,"b",(function(){return GaugeType})),__webpack_require__.d(__webpack_exports__,"c",(function(){return VislibChartType}));const Alignment=Object.freeze({Automatic:"automatic",Horizontal:"horizontal",Vertical:"vertical"}),GaugeType=Object.freeze({Arc:"Arc",Circle:"Circle"}),VislibChartType=Object.freeze({Histogram:"histogram",HorizontalBar:"horizontal_bar",Line:"line",Pie:"pie",Area:"area",PointSeries:"point_series",Heatmap:"heatmap",Gauge:"gauge",Goal:"goal",Metric:"metric"})},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/charts/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getDataActions})),__webpack_require__.d(__webpack_exports__,"c",(function(){return setDataActions})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getFormatService})),__webpack_require__.d(__webpack_exports__,"d",(function(){return setFormatService}));var _kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12);const[getDataActions,setDataActions]=Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__.createGetterSetter)("vislib data.actions"),[getFormatService,setFormatService]=Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__.createGetterSetter)("vislib data.fieldFormats")},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,exports){module.exports=__kbnSharedDeps__.Moment},function(module,exports){module.exports=__kbnSharedDeps__.ElasticCharts},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getGaugeCollections})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getHeatmapCollections}));var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_charts_public__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_vis_type_xy_public__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);const getGaugeCollections=()=>({gaugeTypes:[{text:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("visTypeVislib.gauge.gaugeTypes.arcText",{defaultMessage:"Arc"}),value:_types__WEBPACK_IMPORTED_MODULE_3__.b.Arc},{text:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("visTypeVislib.gauge.gaugeTypes.circleText",{defaultMessage:"Circle"}),value:_types__WEBPACK_IMPORTED_MODULE_3__.b.Circle}],alignments:[{text:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("visTypeVislib.gauge.alignmentAutomaticTitle",{defaultMessage:"Automatic"}),value:_types__WEBPACK_IMPORTED_MODULE_3__.a.Automatic},{text:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("visTypeVislib.gauge.alignmentHorizontalTitle",{defaultMessage:"Horizontal"}),value:_types__WEBPACK_IMPORTED_MODULE_3__.a.Horizontal},{text:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("visTypeVislib.gauge.alignmentVerticalTitle",{defaultMessage:"Vertical"}),value:_types__WEBPACK_IMPORTED_MODULE_3__.a.Vertical}],colorSchemas:_charts_public__WEBPACK_IMPORTED_MODULE_1__.colorSchemas}),getHeatmapCollections=()=>({legendPositions:Object(_vis_type_xy_public__WEBPACK_IMPORTED_MODULE_2__.getPositions)(),scales:Object(_vis_type_xy_public__WEBPACK_IMPORTED_MODULE_2__.getScaleTypes)(),colorSchemas:_charts_public__WEBPACK_IMPORTED_MODULE_1__.colorSchemas})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(16);__kbnBundles__.define("plugin/visTypeVislib/public",__webpack_require__,17)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.visTypeVislib},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin})),__webpack_require__.d(__webpack_exports__,"Alignment",(function(){return types.a})),__webpack_require__.d(__webpack_exports__,"GaugeType",(function(){return types.b})),__webpack_require__.d(__webpack_exports__,"VislibChartType",(function(){return types.c}));var public_=__webpack_require__(1),external_kbnSharedDeps_KbnI18n_=__webpack_require__(0),services=__webpack_require__(8),external_kbnSharedDeps_Lodash_=__webpack_require__(9);function getPoint(table,x,series,row,rowIndex,y,z){const xRow=-1===x.accessor?"_all":row[x.accessor],yRow=row[y.accessor],zRow=z&&row[z.accessor],point={x:xRow,y:yRow,z:zRow,extraMetrics:[],seriesRaw:series&&{table:table,column:series[0].column,row:rowIndex,value:row[series[0].accessor]},xRaw:{table:table,column:x.column,row:rowIndex,value:xRow},yRaw:{table:table,column:y.column,row:rowIndex,value:yRow},zRaw:z&&{table:table,column:z.column,row:rowIndex,value:zRow},tableRaw:table.$parent&&{table:table.$parent.table,column:table.$parent.column,row:table.$parent.row,value:table.$parent.formattedKey,title:table.$parent.name},parent:series?series[0]:null};if("NaN"!==point.y)return series?point.series=series.map(s=>Object(services.b)().deserialize(s.format).convert(row[s.accessor])).join(" - "):y&&(point.series=y.title),point}function addToSiri(series,point,id,yLabel,yFormat,zFormat,zLabel){id=null==id?"":id+"",series.has(id)?series.get(id).values.push(point):series.set(id,{id:Object(public_.getAggId)(id),rawId:id,label:null==yLabel?id:yLabel,count:0,values:[point],format:yFormat,zLabel:zLabel,zFormat:zFormat})}function getAspects(table,dimensions){const aspects={};return Object.keys(dimensions).forEach(name=>{const dimension=dimensions[name];(Array.isArray(dimension)?dimension:[dimension]).forEach(d=>{if(!d)return;const column=table.columns[d.accessor];column&&(aspects[name]||(aspects[name]=[]),aspects[name].push({accessor:column.id,column:d.accessor,title:column.name,format:d.format,params:d.params}))})}),aspects.x||(aspects.x=[{accessor:-1,title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.aggResponse.allDocsTitle",{defaultMessage:"All docs"}),params:{defaultValue:"_all"},format:{}}]),aspects}var external_kbnSharedDeps_Moment_=__webpack_require__(10),external_kbnSharedDeps_Moment_default=__webpack_require__.n(external_kbnSharedDeps_Moment_);function handlerFunction(convertTable){return function(response,dimensions){let converted=function convertTableGroup(tableGroup,convertTable){const tables=tableGroup.tables;if(!tables||!tables.length)return;const firstChild=tables[0];if(firstChild.columns){const chart=convertTable(firstChild);return tableGroup.$parent&&(chart.label=tableGroup.title),chart}const out={};let outList;return tables.forEach((function(table){if(!outList){const direction="row"===tableGroup.direction?"rows":"columns";outList=out[direction]=[]}let output;(output=convertTableGroup(table,convertTable))&&outList.push(output)})),out}(function(table,dimensions){const converted={tables:[]},split=dimensions.splitColumn||dimensions.splitRow;if(split){converted.direction=dimensions.splitRow?"row":"column";const splitColumnIndex=split[0].accessor,splitColumnFormatter=Object(services.b)().deserialize(split[0].format),splitColumn=table.columns[splitColumnIndex],splitMap={};let splitIndex=0;table.rows.forEach((row,rowIndex)=>{const splitValue=row[splitColumn.id],formattedValue=splitColumnFormatter.convert(splitValue);if(!splitMap.hasOwnProperty(splitValue)){splitMap[splitValue]=splitIndex++;const tableGroup={$parent:converted,title:`${formattedValue}: ${splitColumn.name}`,name:splitColumn.name,key:splitValue,formattedKey:formattedValue,column:splitColumnIndex,row:rowIndex,table:table,tables:[]};tableGroup.tables.push({$parent:tableGroup,columns:table.columns,rows:[]}),converted.tables.push(tableGroup)}const tableIndex=splitMap[splitValue];converted.tables[tableIndex].tables[0].rows.push(row)})}else converted.tables.push({columns:table.columns,rows:table.rows});return converted}(response,dimensions),table=>convertTable(table,dimensions));return converted||(converted={rows:[]}),converted.hits=response.rows.length,converted}}const vislibSeriesResponseHandler=handlerFunction((table,dimensions)=>{const chart={aspects:getAspects(table,dimensions)};return function(chart,table){const{format:format,title:title,params:params,accessor:accessor}=chart.aspects.x[0];if(chart.xAxisOrderedValues=-1===accessor&&"defaultValue"in params?[params.defaultValue]:Object(external_kbnSharedDeps_Lodash_.uniq)(table.rows.map(r=>r[accessor])),chart.xAxisFormat=format,chart.xAxisLabel=title,"interval"in params)if("date"in params){const{intervalESUnit:intervalESUnit,intervalESValue:intervalESValue}=params;chart.ordered={interval:external_kbnSharedDeps_Moment_default.a.duration(intervalESValue,intervalESUnit),intervalESUnit:intervalESUnit,intervalESValue:intervalESValue}}else chart.ordered={interval:params.interval}}(chart,table),function(chart){const y=chart.aspects.y;Array.isArray(y)&&(chart.yAxisFormat=y[0].format,chart.yAxisLabel=y.length>1?"":y[0].title);const z=chart.aspects.series;z&&(chart.zAxisFormat=z[0].format,chart.zAxisLabel="")}(chart),"date"in chart.aspects.x[0].params&&function(chart){const x=chart.aspects.x[0],bounds="bounds"in x.params?x.params.bounds:void 0;chart.ordered.date=!0,bounds?(chart.ordered.min="string"==typeof bounds.min?Date.parse(bounds.min):bounds.min,chart.ordered.max="string"==typeof bounds.max?Date.parse(bounds.max):bounds.max):chart.ordered.endzones=!1}(chart),chart.series=function(table,chart){const aspects=chart.aspects,xAspect=aspects.x[0],yAspect=aspects.y[0],zAspect=aspects.z&&aspects.z[0],multiY=Array.isArray(aspects.y)&&aspects.y.length>1,partGetPoint=Object(external_kbnSharedDeps_Lodash_.partial)(getPoint,table,xAspect,aspects.series),seriesMap=new Map;return table.rows.forEach((row,rowIndex)=>{if(multiY)aspects.y.forEach((function(y){const point=partGetPoint(row,rowIndex,y,zAspect);if(!point)return;let seriesId=y.accessor,seriesLabel=y.title;if(aspects.series){const prefix=point.series?point.series+": ":"";seriesId=prefix+seriesId,seriesLabel=prefix+seriesLabel}point.seriesId=seriesId,addToSiri(seriesMap,point,seriesId,seriesLabel,y.format,zAspect&&zAspect.format,zAspect&&zAspect.title)}));else{const point=partGetPoint(row,rowIndex,yAspect,zAspect);if(point){const id=`${point.series}-${yAspect.accessor}`;point.seriesId=id,addToSiri(seriesMap,point,id,point.series,yAspect.format,zAspect&&zAspect.format,zAspect&&zAspect.title)}}}),[...seriesMap.values()]}(table,chart),delete chart.aspects,chart}),vislibSlicesResponseHandler=handlerFunction((table,{metric:metric,buckets:buckets=[]})=>{let slices;const names={},metricColumn=table.columns[metric.accessor],metricFieldFormatter=metric.format;return buckets.length?(slices=[],table.rows.forEach((row,rowIndex)=>{let parent,dataLevel=slices;buckets.forEach(bucket=>{const bucketColumn=table.columns[bucket.accessor],bucketValueColumn=table.columns[bucket.accessor+1],name=Object(services.b)().deserialize(bucket.format).convert(row[bucketColumn.id]),size=row[bucketValueColumn.id];names[name]=name;let slice=dataLevel.find(dataLevelSlice=>dataLevelSlice.name===name);slice||(slice={name:name,size:size,parent:parent,children:[],rawData:{table:table,row:rowIndex,column:bucket.accessor,value:row[bucketColumn.id]}},dataLevel.push(slice)),parent=slice,dataLevel=slice.children})})):(slices=[{name:metricColumn.name,size:table.rows[0][metricColumn.id]}],names[metricColumn.name]=metricColumn.name),{hits:table.rows.length,raw:table,names:Object(external_kbnSharedDeps_Lodash_.toArray)(names),tooltipFormatter:metricFieldFormatter,slices:{children:[...slices]}}}),createVisTypeVislibVisFn=()=>({name:"vislib_vis",type:"render",inputTypes:["datatable"],help:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.functions.vislib.help",{defaultMessage:"Vislib visualization"}),args:{type:{types:["string"],default:'""',help:"vislib vis type"},visConfig:{types:["string"],default:'"{}"',help:"vislib vis config"}},fn(context,args,handlers){var _handlers$inspectorAd;const visType=args.type,visConfig=JSON.parse(args.visConfig),visData=vislibSeriesResponseHandler(context,visConfig.dimensions);return null!=handlers&&null!==(_handlers$inspectorAd=handlers.inspectorAdapters)&&void 0!==_handlers$inspectorAd&&_handlers$inspectorAd.tables&&handlers.inspectorAdapters.tables.logDatatable("default",context),{type:"render",as:"vislib_vis",value:{visData:visData,visConfig:visConfig,visType:visType}}}});var types=__webpack_require__(3);const createPieVisFn=()=>({name:"vislib_pie_vis",type:"render",inputTypes:["datatable"],help:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.functions.pie.help",{defaultMessage:"Pie visualization"}),args:{visConfig:{types:["string"],default:'"{}"',help:"vislib pie vis config"}},fn(input,args,handlers){var _handlers$inspectorAd;const visConfig=JSON.parse(args.visConfig),visData=vislibSlicesResponseHandler(input,visConfig.dimensions);return null!=handlers&&null!==(_handlers$inspectorAd=handlers.inspectorAdapters)&&void 0!==_handlers$inspectorAd&&_handlers$inspectorAd.tables&&handlers.inspectorAdapters.tables.logDatatable("default",input),{type:"render",as:"vislib_vis",value:{visData:visData,visConfig:visConfig,visType:types.c.Pie}}}});var visualizations_public_=__webpack_require__(4),expressions_public_=__webpack_require__(7),data_public_=__webpack_require__(2);function getEsaggsFn(vis){return Object(expressions_public_.buildExpressionFunction)("esaggs",{index:Object(expressions_public_.buildExpression)([Object(expressions_public_.buildExpressionFunction)("indexPatternLoad",{id:vis.data.indexPattern.id})]),metricsAtAllLevels:vis.isHierarchical(),partialRows:!1,aggs:vis.data.aggs.aggs.map(agg=>Object(expressions_public_.buildExpression)(agg.toExpressionAst()))})}const toExpressionAst=async(vis,params)=>{var _vis$data$aggs$getRes,_vis$data$aggs;const schemas=Object(visualizations_public_.getVisSchemas)(vis,params),dimensions={x:schemas.segment?schemas.segment[0]:null,y:schemas.metric,z:schemas.radius,width:schemas.width,series:schemas.group,splitRow:schemas.split_row,splitColumn:schemas.split_column},responseAggs=null!==(_vis$data$aggs$getRes=null===(_vis$data$aggs=vis.data.aggs)||void 0===_vis$data$aggs?void 0:_vis$data$aggs.getResponseAggs())&&void 0!==_vis$data$aggs$getRes?_vis$data$aggs$getRes:[];if(dimensions.x){const xAgg=responseAggs[dimensions.x.accessor];if(xAgg.type.name===data_public_.BUCKET_TYPES.DATE_HISTOGRAM){dimensions.x.params.date=!0;const{esUnit:esUnit,esValue:esValue}=xAgg.buckets.getInterval();dimensions.x.params.intervalESUnit=esUnit,dimensions.x.params.intervalESValue=esValue,dimensions.x.params.interval=external_kbnSharedDeps_Moment_default.a.duration(esValue,esUnit).asMilliseconds(),dimensions.x.params.format=xAgg.buckets.getScaledDateFormat(),dimensions.x.params.bounds=xAgg.buckets.getBounds()}else if(xAgg.type.name===data_public_.BUCKET_TYPES.HISTOGRAM){const intervalParam=xAgg.type.paramByName("interval"),output={params:{}};await intervalParam.modifyAggConfigOnSearchRequestStart(xAgg,vis.data.searchSource,{abortSignal:params.abortSignal}),intervalParam.write(xAgg,output),dimensions.x.params.interval=output.params.interval}}const visConfig={...vis.params};(dimensions.y||[]).forEach(yDimension=>{var _visConfig$gauge;const yAgg=responseAggs.filter(({enabled:enabled})=>enabled)[yDimension.accessor],seriesParam=(visConfig.seriesParams||[]).find(param=>param.data.id===yAgg.id);if(seriesParam){const usedValueAxis=(visConfig.valueAxes||[]).find(valueAxis=>valueAxis.id===seriesParam.valueAxis);"percentage"===(null==usedValueAxis?void 0:usedValueAxis.scale.mode)&&(yDimension.format={id:"percent"})}var _visConfig$gauge2;!0===(null==visConfig||null===(_visConfig$gauge=visConfig.gauge)||void 0===_visConfig$gauge?void 0:_visConfig$gauge.percentageMode)&&(yDimension.format={id:"percent",params:{pattern:null==visConfig||null===(_visConfig$gauge2=visConfig.gauge)||void 0===_visConfig$gauge2?void 0:_visConfig$gauge2.percentageFormatPattern}})});const visTypeVislib=Object(expressions_public_.buildExpressionFunction)("vislib_vis",{type:vis.type.name,visConfig:JSON.stringify({...visConfig,dimensions:dimensions})});return Object(expressions_public_.buildExpression)([getEsaggsFn(vis),visTypeVislib]).toAst()},histogramVisTypeDefinition={...public_.xyVisTypes.histogram(),toExpressionAst:toExpressionAst},lineVisTypeDefinition={...public_.xyVisTypes.line(),toExpressionAst:toExpressionAst},areaVisTypeDefinition={...public_.xyVisTypes.area(),toExpressionAst:toExpressionAst};var external_kbnSharedDeps_ElasticCharts_=__webpack_require__(11),charts_public_=__webpack_require__(6),external_kbnSharedDeps_React_=(__webpack_require__(14),__webpack_require__(5)),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_);const GaugeOptionsLazy=Object(external_kbnSharedDeps_React_.lazy)(()=>__webpack_require__.e(3).then(__webpack_require__.bind(null,116))),PieOptionsLazy=Object(external_kbnSharedDeps_React_.lazy)(()=>__webpack_require__.e(5).then(__webpack_require__.bind(null,113))),HeatmapOptionsLazy=Object(external_kbnSharedDeps_React_.lazy)(()=>__webpack_require__.e(4).then(__webpack_require__.bind(null,117))),GaugeOptions=props=>external_kbnSharedDeps_React_default.a.createElement(GaugeOptionsLazy,props),heatmapVisTypeDefinition={name:"heatmap",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.heatmap.heatmapTitle",{defaultMessage:"Heat map"}),icon:"heatmap",description:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.heatmap.heatmapDescription",{defaultMessage:"Shade data in cells in a matrix."}),toExpressionAst:toExpressionAst,getSupportedTriggers:()=>[visualizations_public_.VIS_EVENT_TO_TRIGGER.filter],visConfig:{defaults:{type:types.c.Heatmap,addTooltip:!0,addLegend:!0,enableHover:!1,legendPosition:external_kbnSharedDeps_ElasticCharts_.Position.Right,times:[],colorsNumber:4,colorSchema:charts_public_.ColorSchemas.Greens,setColorRange:!1,colorsRange:[],invertColors:!1,percentageMode:!1,valueAxes:[{show:!1,id:"ValueAxis-1",type:public_.AxisType.Value,scale:{type:public_.ScaleType.Linear,defaultYExtents:!1},labels:{show:!1,rotate:0,overwriteColor:!1,color:"black"}}]}},editorConfig:{optionsTemplate:props=>external_kbnSharedDeps_React_default.a.createElement(HeatmapOptionsLazy,props),schemas:[{group:data_public_.AggGroupNames.Metrics,name:"metric",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.heatmap.metricTitle",{defaultMessage:"Value"}),min:1,max:1,aggFilter:["count","avg","median","sum","min","max","cardinality","std_dev","top_hits","!filtered_metric","!single_percentile"],defaults:[{schema:"metric",type:"count"}]},{group:data_public_.AggGroupNames.Buckets,name:"segment",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.heatmap.segmentTitle",{defaultMessage:"X-axis"}),min:0,max:1,aggFilter:["!geohash_grid","!geotile_grid","!filter"]},{group:data_public_.AggGroupNames.Buckets,name:"group",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.heatmap.groupTitle",{defaultMessage:"Y-axis"}),min:0,max:1,aggFilter:["!geohash_grid","!geotile_grid","!filter"]},{group:data_public_.AggGroupNames.Buckets,name:"split",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.heatmap.splitTitle",{defaultMessage:"Split chart"}),min:0,max:1,aggFilter:["!geohash_grid","!geotile_grid","!filter"]}]},requiresSearch:!0},horizontalBarVisTypeDefinition={...public_.xyVisTypes.horizontalBar(),toExpressionAst:toExpressionAst},gaugeVisTypeDefinition={name:"gauge",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.gauge.gaugeTitle",{defaultMessage:"Gauge"}),icon:"visGauge",description:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.gauge.gaugeDescription",{defaultMessage:"Show the status of a metric."}),getSupportedTriggers:()=>[visualizations_public_.VIS_EVENT_TO_TRIGGER.filter],toExpressionAst:toExpressionAst,visConfig:{defaults:{type:types.c.Gauge,addTooltip:!0,addLegend:!0,isDisplayWarning:!1,gauge:{alignment:types.a.Automatic,extendRange:!0,percentageMode:!1,gaugeType:types.b.Arc,gaugeStyle:"Full",backStyle:"Full",orientation:"vertical",colorSchema:charts_public_.ColorSchemas.GreenToRed,gaugeColorMode:charts_public_.ColorMode.Labels,colorsRange:[{from:0,to:50},{from:50,to:75},{from:75,to:100}],invertColors:!1,labels:{show:!0,color:"black"},scale:{show:!0,labels:!1,color:"rgba(105,112,125,0.2)"},type:"meter",style:{bgWidth:.9,width:.9,mask:!1,bgMask:!1,maskBars:50,bgFill:"rgba(105,112,125,0.2)",bgColor:!0,subText:"",fontSize:60}}}},editorConfig:{optionsTemplate:GaugeOptions,schemas:[{group:data_public_.AggGroupNames.Metrics,name:"metric",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.gauge.metricTitle",{defaultMessage:"Metric"}),min:1,aggFilter:["!std_dev","!geo_centroid","!percentiles","!percentile_ranks","!derivative","!serial_diff","!moving_avg","!cumulative_sum","!geo_bounds","!filtered_metric","!single_percentile"],defaults:[{schema:"metric",type:"count"}]},{group:data_public_.AggGroupNames.Buckets,name:"group",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.gauge.groupTitle",{defaultMessage:"Split group"}),min:0,max:1,aggFilter:["!geohash_grid","!geotile_grid","!filter"]}]},requiresSearch:!0},goalVisTypeDefinition={name:"goal",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.goal.goalTitle",{defaultMessage:"Goal"}),icon:"visGoal",description:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.goal.goalDescription",{defaultMessage:"Track how a metric progresses to a goal."}),toExpressionAst:toExpressionAst,visConfig:{defaults:{addTooltip:!0,addLegend:!1,isDisplayWarning:!1,type:"gauge",gauge:{verticalSplit:!1,autoExtend:!1,percentageMode:!0,gaugeType:types.b.Arc,gaugeStyle:"Full",backStyle:"Full",orientation:"vertical",useRanges:!1,colorSchema:charts_public_.ColorSchemas.GreenToRed,gaugeColorMode:charts_public_.ColorMode.None,colorsRange:[{from:0,to:1e4}],invertColors:!1,labels:{show:!0,color:"black"},scale:{show:!1,labels:!1,color:"rgba(105,112,125,0.2)",width:2},type:"meter",style:{bgFill:"rgba(105,112,125,0.2)",bgColor:!1,labelColor:!1,subText:"",fontSize:60}}}},editorConfig:{optionsTemplate:GaugeOptions,schemas:[{group:data_public_.AggGroupNames.Metrics,name:"metric",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.goal.metricTitle",{defaultMessage:"Metric"}),min:1,aggFilter:["!std_dev","!geo_centroid","!percentiles","!percentile_ranks","!derivative","!serial_diff","!moving_avg","!cumulative_sum","!geo_bounds","!filtered_metric","!single_percentile"],defaults:[{schema:"metric",type:"count"}]},{group:data_public_.AggGroupNames.Buckets,name:"group",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.goal.groupTitle",{defaultMessage:"Split group"}),min:0,max:1,aggFilter:["!geohash_grid","!geotile_grid","!filter"]}]},requiresSearch:!0},pieVisTypeDefinition={name:"pie",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.pie.pieTitle",{defaultMessage:"Pie"}),icon:"visPie",description:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.pie.pieDescription",{defaultMessage:"Compare data in proportion to a whole."}),getSupportedTriggers:()=>[visualizations_public_.VIS_EVENT_TO_TRIGGER.filter],toExpressionAst:async(vis,params)=>{const schemas=Object(visualizations_public_.getVisSchemas)(vis,params),visConfig={...vis.params,dimensions:{metric:schemas.metric[0],buckets:schemas.segment,splitRow:schemas.split_row,splitColumn:schemas.split_column}},configStr=JSON.stringify(visConfig).replace(/\\/g,"\\\\").replace(/'/g,"\\'"),visTypePie=Object(expressions_public_.buildExpressionFunction)("vislib_pie_vis",{visConfig:configStr});return Object(expressions_public_.buildExpression)([getEsaggsFn(vis),visTypePie]).toAst()},visConfig:{defaults:{type:"pie",addTooltip:!0,addLegend:!0,legendPosition:external_kbnSharedDeps_ElasticCharts_.Position.Right,isDonut:!0,labels:{show:!1,values:!0,last_level:!0,truncate:100}}},editorConfig:{optionsTemplate:props=>external_kbnSharedDeps_React_default.a.createElement(PieOptionsLazy,props),schemas:[{group:data_public_.AggGroupNames.Metrics,name:"metric",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.pie.metricTitle",{defaultMessage:"Slice size"}),min:1,max:1,aggFilter:["sum","count","cardinality","top_hits"],defaults:[{schema:"metric",type:"count"}]},{group:data_public_.AggGroupNames.Buckets,name:"segment",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.pie.segmentTitle",{defaultMessage:"Split slices"}),min:0,max:1/0,aggFilter:["!geohash_grid","!geotile_grid","!filter"]},{group:data_public_.AggGroupNames.Buckets,name:"split",title:external_kbnSharedDeps_KbnI18n_.i18n.translate("visTypeVislib.pie.splitTitle",{defaultMessage:"Split chart"}),mustBeFirst:!0,min:0,max:1,aggFilter:["!geohash_grid","!geotile_grid","!filter"]}]},hierarchicalData:!0,requiresSearch:!0},visLibVisTypeDefinitions=[histogramVisTypeDefinition,lineVisTypeDefinition,areaVisTypeDefinition,heatmapVisTypeDefinition,horizontalBarVisTypeDefinition,gaugeVisTypeDefinition,goalVisTypeDefinition],convertedTypeDefinitions=[heatmapVisTypeDefinition,gaugeVisTypeDefinition,goalVisTypeDefinition];var external_kbnSharedDeps_ReactDom_=__webpack_require__(13);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const VislibWrapper=Object(external_kbnSharedDeps_React_.lazy)(()=>__webpack_require__.e(2).then(__webpack_require__.bind(null,115)));const getVislibVisRenderer=(core,charts)=>({name:"vislib_vis",displayName:"Vislib visualization",reuseDomNode:!0,render:async(domNode,config,handlers)=>{const showNoResult=function(visData,visType){if(["goal","gauge"].includes(visType))return!1;const rows=null==visData?void 0:visData.rows,isZeroHits=0===(null==visData?void 0:visData.hits)||rows&&!rows.length;return Boolean(isZeroHits)}(config.visData,config.visType);handlers.onDestroy(()=>Object(external_kbnSharedDeps_ReactDom_.unmountComponentAtNode)(domNode)),Object(external_kbnSharedDeps_ReactDom_.render)(external_kbnSharedDeps_React_default.a.createElement(visualizations_public_.VisualizationContainer,{handlers:handlers,showNoResult:showNoResult},external_kbnSharedDeps_React_default.a.createElement(VislibWrapper,_extends({},config,{core:core,charts:charts,handlers:handlers}))),domNode)}});class plugin_VisTypeVislibPlugin{constructor(initializerContext){this.initializerContext=initializerContext}setup(core,{expressions:expressions,visualizations:visualizations,charts:charts}){core.uiSettings.get(public_.LEGACY_CHARTS_LIBRARY,!1)?(visLibVisTypeDefinitions.forEach(visualizations.createBaseVisualization),visualizations.createBaseVisualization(pieVisTypeDefinition),expressions.registerRenderer(getVislibVisRenderer(core,charts)),[createVisTypeVislibVisFn(),createPieVisFn()].forEach(expressions.registerFunction)):(convertedTypeDefinitions.forEach(visualizations.createBaseVisualization),visualizations.createBaseVisualization(pieVisTypeDefinition),expressions.registerRenderer(getVislibVisRenderer(core,charts)),[createVisTypeVislibVisFn(),createPieVisFn()].forEach(expressions.registerFunction))}start(core,{data:data}){Object(services.d)(data.fieldFormats),Object(services.c)(data.actions)}}function public_plugin(initializerContext){return new plugin_VisTypeVislibPlugin(initializerContext)}},function(module,exports){module.exports=__kbnSharedDeps__.Jquery},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.SaferLodashSet},function(module,exports){module.exports=__kbnSharedDeps__.ElasticNumeral},function(module,exports){module.exports=__kbnSharedDeps__.ReactDomServer},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEuiLibServices},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("entry/core/public/utils");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Theme.euiLightVars},function(module,exports){module.exports=__kbnSharedDeps__.TsLib}]);