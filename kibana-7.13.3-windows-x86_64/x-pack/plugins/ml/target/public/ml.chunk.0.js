/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.ml_bundle_jsonpfunction=window.ml_bundle_jsonpfunction||[]).push([[0],{308:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return jobsApiProvider}));var _common_constants_app__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5);const jobsApiProvider=httpService=>({jobsSummary(jobIds){const body=JSON.stringify({jobIds:jobIds});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/jobs_summary",method:"POST",body:body})},jobsWithTimerange(dateFormatTz){const body=JSON.stringify({dateFormatTz:dateFormatTz});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/jobs_with_time_range",method:"POST",body:body})},jobForCloning(jobId){const body=JSON.stringify({jobId:jobId});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/job_for_cloning",method:"POST",body:body})},jobs(jobIds){const body=JSON.stringify({jobIds:jobIds});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/jobs",method:"POST",body:body})},groups:()=>httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/groups",method:"GET"}),updateGroups(updatedJobs){const body=JSON.stringify({jobs:updatedJobs});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/update_groups",method:"POST",body:body})},forceStartDatafeeds(datafeedIds,start,end){const body=JSON.stringify({datafeedIds:datafeedIds,start:start,end:end});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/force_start_datafeeds",method:"POST",body:body})},stopDatafeeds(datafeedIds){const body=JSON.stringify({datafeedIds:datafeedIds});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/stop_datafeeds",method:"POST",body:body})},deleteJobs(jobIds){const body=JSON.stringify({jobIds:jobIds});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/delete_jobs",method:"POST",body:body})},closeJobs(jobIds){const body=JSON.stringify({jobIds:jobIds});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/close_jobs",method:"POST",body:body})},forceStopAndCloseJob(jobId){const body=JSON.stringify({jobId:jobId});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/force_stop_and_close_job",method:"POST",body:body})},jobAuditMessages(jobId,from){const jobIdString=void 0!==jobId?"/"+jobId:"",query=void 0!==from?{from:from}:{};return httpService.http({path:`${_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b}/job_audit_messages/messages${jobIdString}`,method:"GET",query:query})},deletingJobTasks:()=>httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/deleting_jobs_tasks",method:"GET"}),jobsExist(jobIds,allSpaces=!1){const body=JSON.stringify({jobIds:jobIds,allSpaces:allSpaces});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/jobs_exist",method:"POST",body:body})},jobsExist$(jobIds,allSpaces=!1){const body=JSON.stringify({jobIds:jobIds,allSpaces:allSpaces});return httpService.http$({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/jobs_exist",method:"POST",body:body})},newJobCaps(indexPatternTitle,isRollup=!1){const query=!0===isRollup?{rollup:!0}:{};return httpService.http({path:`${_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b}/jobs/new_job_caps/${indexPatternTitle}`,method:"GET",query:query})},newJobLineChart(indexPatternTitle,timeField,start,end,intervalMs,query,aggFieldNamePairs,splitFieldName,splitFieldValue,runtimeMappings,indicesOptions){const body=JSON.stringify({indexPatternTitle:indexPatternTitle,timeField:timeField,start:start,end:end,intervalMs:intervalMs,query:query,aggFieldNamePairs:aggFieldNamePairs,splitFieldName:splitFieldName,splitFieldValue:splitFieldValue,runtimeMappings:runtimeMappings,indicesOptions:indicesOptions});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/new_job_line_chart",method:"POST",body:body})},newJobPopulationsChart(indexPatternTitle,timeField,start,end,intervalMs,query,aggFieldNamePairs,splitFieldName,runtimeMappings,indicesOptions){const body=JSON.stringify({indexPatternTitle:indexPatternTitle,timeField:timeField,start:start,end:end,intervalMs:intervalMs,query:query,aggFieldNamePairs:aggFieldNamePairs,splitFieldName:splitFieldName,runtimeMappings:runtimeMappings,indicesOptions:indicesOptions});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/new_job_population_chart",method:"POST",body:body})},getAllJobAndGroupIds:()=>httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/all_jobs_and_group_ids",method:"GET"}),getLookBackProgress(jobId,start,end){const body=JSON.stringify({jobId:jobId,start:start,end:end});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/look_back_progress",method:"POST",body:body})},categorizationFieldExamples(indexPatternTitle,query,size,field,timeField,start,end,analyzer,runtimeMappings,indicesOptions){const body=JSON.stringify({indexPatternTitle:indexPatternTitle,query:query,size:size,field:field,timeField:timeField,start:start,end:end,analyzer:analyzer,runtimeMappings:runtimeMappings,indicesOptions:indicesOptions});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/categorization_field_examples",method:"POST",body:body})},topCategories(jobId,count){const body=JSON.stringify({jobId:jobId,count:count});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/top_categories",method:"POST",body:body})},revertModelSnapshot(jobId,snapshotId,replay,end,calendarEvents){const body=JSON.stringify({jobId:jobId,snapshotId:snapshotId,replay:replay,end:end,calendarEvents:calendarEvents});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/revert_model_snapshot",method:"POST",body:body})},datafeedPreview(job,datafeed){const body=JSON.stringify({job:job,datafeed:datafeed});return httpService.http({path:_common_constants_app__WEBPACK_IMPORTED_MODULE_0__.b+"/jobs/datafeed_preview",method:"POST",body:body})}})},64:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"basePath",(function(){return basePath})),__webpack_require__.d(__webpack_exports__,"ml",(function(){return ml})),__webpack_require__.d(__webpack_exports__,"mlApiServicesProvider",(function(){return mlApiServicesProvider}));var http_service=__webpack_require__(111);const annotations={getAnnotations$(obj){const body=JSON.stringify(obj);return Object(http_service.c)({path:"/api/ml/annotations",method:"POST",body:body})},getAnnotations(obj){const body=JSON.stringify(obj);return Object(http_service.b)({path:"/api/ml/annotations",method:"POST",body:body})},indexAnnotation(obj){const body=JSON.stringify(obj);return Object(http_service.b)({path:"/api/ml/annotations/index",method:"PUT",body:body})},deleteAnnotation:id=>Object(http_service.b)({path:"/api/ml/annotations/delete/"+id,method:"DELETE"})},dataFrameAnalytics={getDataFrameAnalytics(analyticsId,excludeGenerated){const analyticsIdString=void 0!==analyticsId?"/"+analyticsId:"";return Object(http_service.b)({path:"/api/ml/data_frame/analytics"+analyticsIdString,method:"GET",...excludeGenerated?{query:{excludeGenerated:excludeGenerated}}:{}})},getDataFrameAnalyticsStats:analyticsId=>void 0!==analyticsId?Object(http_service.b)({path:`/api/ml/data_frame/analytics/${analyticsId}/_stats`,method:"GET"}):Object(http_service.b)({path:"/api/ml/data_frame/analytics/_stats",method:"GET"}),createDataFrameAnalytics(analyticsId,analyticsConfig){const body=JSON.stringify(analyticsConfig);return Object(http_service.b)({path:"/api/ml/data_frame/analytics/"+analyticsId,method:"PUT",body:body})},updateDataFrameAnalytics(analyticsId,updateConfig){const body=JSON.stringify(updateConfig);return Object(http_service.b)({path:`/api/ml/data_frame/analytics/${analyticsId}/_update`,method:"POST",body:body})},getDataFrameAnalyticsMap(id,treatAsRoot,type){const idString=void 0!==id?"/"+id:"";return Object(http_service.b)({path:"/api/ml/data_frame/analytics/map"+idString,method:"GET",query:{treatAsRoot:treatAsRoot,type:type}})},jobsExists(analyticsIds,allSpaces=!1){const body=JSON.stringify({analyticsIds:analyticsIds,allSpaces:allSpaces});return Object(http_service.b)({path:"/api/ml/data_frame/analytics/jobs_exist",method:"POST",body:body})},evaluateDataFrameAnalytics(evaluateConfig){const body=JSON.stringify(evaluateConfig);return Object(http_service.b)({path:"/api/ml/data_frame/_evaluate",method:"POST",body:body})},explainDataFrameAnalytics(jobConfig){const body=JSON.stringify(jobConfig);return Object(http_service.b)({path:"/api/ml/data_frame/analytics/_explain",method:"POST",body:body})},deleteDataFrameAnalytics:analyticsId=>Object(http_service.b)({path:"/api/ml/data_frame/analytics/"+analyticsId,method:"DELETE"}),deleteDataFrameAnalyticsAndDestIndex:(analyticsId,deleteDestIndex,deleteDestIndexPattern)=>Object(http_service.b)({path:"/api/ml/data_frame/analytics/"+analyticsId,query:{deleteDestIndex:deleteDestIndex,deleteDestIndexPattern:deleteDestIndexPattern},method:"DELETE"}),startDataFrameAnalytics:analyticsId=>Object(http_service.b)({path:`/api/ml/data_frame/analytics/${analyticsId}/_start`,method:"POST"}),stopDataFrameAnalytics:(analyticsId,force=!1)=>Object(http_service.b)({path:`/api/ml/data_frame/analytics/${analyticsId}/_stop`,method:"POST",query:{force:force}}),getAnalyticsAuditMessages:analyticsId=>Object(http_service.b)({path:`/api/ml/data_frame/analytics/${analyticsId}/messages`,method:"GET"}),validateDataFrameAnalytics(analyticsConfig){const body=JSON.stringify(analyticsConfig);return Object(http_service.b)({path:"/api/ml/data_frame/analytics/validate",method:"POST",body:body})},newJobCapsAnalytics(indexPatternTitle,isRollup=!1){const query=!0===isRollup?{rollup:!0}:{};return Object(http_service.b)({path:"/api/ml/data_frame/analytics/new_job_caps/"+indexPatternTitle,method:"GET",query:query})}},filters={filters(obj){const filterId=obj&&obj.filterId?"/"+obj.filterId:"";return Object(http_service.b)({path:"/api/ml/filters"+filterId,method:"GET"})},filtersStats:()=>Object(http_service.b)({path:"/api/ml/filters/_stats",method:"GET"}),addFilter(filterId,description,items){const body=JSON.stringify({filterId:filterId,description:description,items:items});return Object(http_service.b)({path:"/api/ml/filters",method:"PUT",body:body})},updateFilter(filterId,description,addItems,removeItems){const body=JSON.stringify({...void 0!==description?{description:description}:{},...void 0!==addItems?{addItems:addItems}:{},...void 0!==removeItems?{removeItems:removeItems}:{}});return Object(http_service.b)({path:"/api/ml/filters/"+filterId,method:"PUT",body:body})},deleteFilter:filterId=>Object(http_service.b)({path:"/api/ml/filters/"+filterId,method:"DELETE"})},resultsApiProvider=httpService=>({getAnomaliesTableData(jobIds,criteriaFields,influencers,aggregationInterval,threshold,earliestMs,latestMs,dateFormatTz,maxRecords,maxExamples,influencersFilterQuery,functionDescription){const body=JSON.stringify({jobIds:jobIds,criteriaFields:criteriaFields,influencers:influencers,aggregationInterval:aggregationInterval,threshold:threshold,earliestMs:earliestMs,latestMs:latestMs,dateFormatTz:dateFormatTz,maxRecords:maxRecords,maxExamples:maxExamples,influencersFilterQuery:influencersFilterQuery,functionDescription:functionDescription});return httpService.http$({path:"/api/ml/results/anomalies_table_data",method:"POST",body:body})},getMaxAnomalyScore(jobIds,earliestMs,latestMs){const body=JSON.stringify({jobIds:jobIds,earliestMs:earliestMs,latestMs:latestMs});return httpService.http({path:"/api/ml/results/max_anomaly_score",method:"POST",body:body})},getCategoryDefinition(jobId,categoryId){const body=JSON.stringify({jobId:jobId,categoryId:categoryId});return httpService.http({path:"/api/ml/results/category_definition",method:"POST",body:body})},getCategoryExamples(jobId,categoryIds,maxExamples){const body=JSON.stringify({jobId:jobId,categoryIds:categoryIds,maxExamples:maxExamples});return httpService.http({path:"/api/ml/results/category_examples",method:"POST",body:body})},fetchPartitionFieldsValues(jobId,searchTerm,criteriaFields,earliestMs,latestMs,fieldsConfig){const body=JSON.stringify({jobId:jobId,searchTerm:searchTerm,criteriaFields:criteriaFields,earliestMs:earliestMs,latestMs:latestMs,fieldsConfig:fieldsConfig});return httpService.http$({path:"/api/ml/results/partition_fields_values",method:"POST",body:body})},anomalySearch(query,jobIds){const body=JSON.stringify({query:query,jobIds:jobIds});return httpService.http({path:"/api/ml/results/anomaly_search",method:"POST",body:body})},anomalySearch$(query,jobIds){const body=JSON.stringify({query:query,jobIds:jobIds});return httpService.http$({path:"/api/ml/results/anomaly_search",method:"POST",body:body})},getCategoryStoppedPartitions(jobIds,fieldToBucket){const body=JSON.stringify({jobIds:jobIds,fieldToBucket:fieldToBucket});return httpService.http({path:"/api/ml/results/category_stopped_partitions",method:"POST",body:body})}});var jobs=__webpack_require__(308);const fileDatavisualizer={analyzeFile(file,params={}){const body=JSON.stringify(file);return Object(http_service.b)({path:"/api/file_upload/analyze_file",method:"POST",body:body,query:params})}},savedObjectsApiProvider=httpService=>({jobsSpaces:()=>httpService.http({path:"/api/ml/saved_objects/jobs_spaces",method:"GET"}),assignJobToSpace(jobType,jobIds,spaces){const body=JSON.stringify({jobType:jobType,jobIds:jobIds,spaces:spaces});return httpService.http({path:"/api/ml/saved_objects/assign_job_to_space",method:"POST",body:body})},removeJobFromSpace(jobType,jobIds,spaces){const body=JSON.stringify({jobType:jobType,jobIds:jobIds,spaces:spaces});return httpService.http({path:"/api/ml/saved_objects/remove_job_from_space",method:"POST",body:body})},removeJobFromCurrentSpace(jobType,jobIds){const body=JSON.stringify({jobType:jobType,jobIds:jobIds});return httpService.http({path:"/api/ml/saved_objects/remove_job_from_current_space",method:"POST",body:body})},syncSavedObjects:(simulate=!1)=>httpService.http({path:"/api/ml/saved_objects/sync",method:"GET",query:{simulate:simulate}}),initSavedObjects:(simulate=!1)=>httpService.http({path:"/api/ml/saved_objects/initialize",method:"GET",query:{simulate:simulate}}),canDeleteJob(jobType,jobIds){const body=JSON.stringify({jobIds:jobIds});return httpService.http({path:"/api/ml/saved_objects/can_delete_job/"+jobType,method:"POST",body:body})}});var dependency_cache=__webpack_require__(22);function basePath(){return"/api/ml"}const proxyHttpStart=new Proxy({},{get(obj,prop){try{return Object(dependency_cache.e)()[prop]}catch(e){console.error(e)}}}),ml=mlApiServicesProvider(new http_service.a(proxyHttpStart));function mlApiServicesProvider(httpService){return{getJobs(obj){const jobId=obj&&obj.jobId?"/"+obj.jobId:"";return httpService.http({path:"/api/ml/anomaly_detectors"+jobId})},getJobStats(obj){const jobId=obj&&obj.jobId?"/"+obj.jobId:"";return httpService.http({path:`/api/ml/anomaly_detectors${jobId}/_stats`})},addJob({jobId:jobId,job:job}){const body=JSON.stringify(job);return httpService.http({path:"/api/ml/anomaly_detectors/"+jobId,method:"PUT",body:body})},openJob:({jobId:jobId})=>httpService.http({path:`/api/ml/anomaly_detectors/${jobId}/_open`,method:"POST"}),closeJob:({jobId:jobId})=>httpService.http({path:`/api/ml/anomaly_detectors/${jobId}/_close`,method:"POST"}),forceCloseJob:({jobId:jobId})=>httpService.http({path:`/api/ml/anomaly_detectors/${jobId}/_close?force=true`,method:"POST"}),deleteJob:({jobId:jobId})=>httpService.http({path:"/api/ml/anomaly_detectors/"+jobId,method:"DELETE"}),forceDeleteJob:({jobId:jobId})=>httpService.http({path:`/api/ml/anomaly_detectors/${jobId}?force=true`,method:"DELETE"}),updateJob({jobId:jobId,job:job}){const body=JSON.stringify(job);return httpService.http({path:`/api/ml/anomaly_detectors/${jobId}/_update`,method:"POST",body:body})},estimateBucketSpan(obj){const body=JSON.stringify(obj);return httpService.http({path:"/api/ml/validate/estimate_bucket_span",method:"POST",body:body})},validateJob(payload){const body=JSON.stringify(payload);return httpService.http({path:"/api/ml/validate/job",method:"POST",body:body})},validateCardinality$(job){const body=JSON.stringify(job);return httpService.http$({path:"/api/ml/validate/cardinality",method:"POST",body:body})},getDatafeeds(obj){const datafeedId=obj&&obj.datafeedId?"/"+obj.datafeedId:"";return httpService.http({path:"/api/ml/datafeeds"+datafeedId})},getDatafeedStats(obj){const datafeedId=obj&&obj.datafeedId?"/"+obj.datafeedId:"";return httpService.http({path:`/api/ml/datafeeds${datafeedId}/_stats`})},addDatafeed({datafeedId:datafeedId,datafeedConfig:datafeedConfig}){const body=JSON.stringify(datafeedConfig);return httpService.http({path:"/api/ml/datafeeds/"+datafeedId,method:"PUT",body:body})},updateDatafeed({datafeedId:datafeedId,datafeedConfig:datafeedConfig}){const body=JSON.stringify(datafeedConfig);return httpService.http({path:`/api/ml/datafeeds/${datafeedId}/_update`,method:"POST",body:body})},deleteDatafeed:({datafeedId:datafeedId})=>httpService.http({path:"/api/ml/datafeeds/"+datafeedId,method:"DELETE"}),forceDeleteDatafeed:({datafeedId:datafeedId})=>httpService.http({path:`/api/ml/datafeeds/${datafeedId}?force=true`,method:"DELETE"}),startDatafeed({datafeedId:datafeedId,start:start,end:end}){const body=JSON.stringify({...void 0!==start?{start:start}:{},...void 0!==end?{end:end}:{}});return httpService.http({path:`/api/ml/datafeeds/${datafeedId}/_start`,method:"POST",body:body})},stopDatafeed:({datafeedId:datafeedId})=>httpService.http({path:`/api/ml/datafeeds/${datafeedId}/_stop`,method:"POST"}),forceStopDatafeed:({datafeedId:datafeedId})=>httpService.http({path:`/api/ml/datafeeds/${datafeedId}/_stop?force=true`,method:"POST"}),datafeedPreview:({datafeedId:datafeedId})=>httpService.http({path:`/api/ml/datafeeds/${datafeedId}/_preview`,method:"GET"}),validateDetector({detector:detector}){const body=JSON.stringify(detector);return httpService.http({path:"/api/ml/anomaly_detectors/_validate/detector",method:"POST",body:body})},forecast({jobId:jobId,duration:duration}){const body=JSON.stringify({...void 0!==duration?{duration:duration}:{}});return httpService.http({path:`/api/ml/anomaly_detectors/${jobId}/_forecast`,method:"POST",body:body})},overallBuckets({jobId:jobId,topN:topN,bucketSpan:bucketSpan,start:start,end:end}){const body=JSON.stringify({topN:topN,bucketSpan:bucketSpan,start:start,end:end});return httpService.http({path:`/api/ml/anomaly_detectors/${jobId}/results/overall_buckets`,method:"POST",body:body})},hasPrivileges(obj){const body=JSON.stringify(obj);return httpService.http({path:"/api/ml/_has_privileges",method:"POST",body:body})},checkMlCapabilities:()=>httpService.http({path:"/api/ml/ml_capabilities",method:"GET"}),checkManageMLCapabilities:()=>httpService.http({path:"/api/ml/ml_capabilities",method:"GET"}),checkIndexExists({index:index}){const body=JSON.stringify({index:index});return httpService.http({path:"/api/ml/index_exists",method:"POST",body:body})},getFieldCaps({index:index,fields:fields}){const body=JSON.stringify({...void 0!==index?{index:index}:{},...void 0!==fields?{fields:fields}:{}});return httpService.http({path:"/api/ml/indices/field_caps",method:"POST",body:body})},recognizeIndex:({indexPatternTitle:indexPatternTitle})=>httpService.http({path:"/api/ml/modules/recognize/"+indexPatternTitle,method:"GET"}),listDataRecognizerModules:()=>httpService.http({path:"/api/ml/modules/get_module",method:"GET"}),getDataRecognizerModule:({moduleId:moduleId})=>httpService.http({path:"/api/ml/modules/get_module/"+moduleId,method:"GET"}),dataRecognizerModuleJobsExist:({moduleId:moduleId})=>httpService.http({path:"/api/ml/modules/jobs_exist/"+moduleId,method:"GET"}),setupDataRecognizerConfig({moduleId:moduleId,prefix:prefix,groups:groups,indexPatternName:indexPatternName,query:query,useDedicatedIndex:useDedicatedIndex,startDatafeed:startDatafeed,start:start,end:end,jobOverrides:jobOverrides,estimateModelMemory:estimateModelMemory}){const body=JSON.stringify({prefix:prefix,groups:groups,indexPatternName:indexPatternName,query:query,useDedicatedIndex:useDedicatedIndex,startDatafeed:startDatafeed,start:start,end:end,jobOverrides:jobOverrides,estimateModelMemory:estimateModelMemory});return httpService.http({path:"/api/ml/modules/setup/"+moduleId,method:"POST",body:body})},getVisualizerFieldStats({indexPatternTitle:indexPatternTitle,query:query,timeFieldName:timeFieldName,earliest:earliest,latest:latest,samplerShardSize:samplerShardSize,interval:interval,fields:fields,maxExamples:maxExamples,runtimeMappings:runtimeMappings}){const body=JSON.stringify({query:query,timeFieldName:timeFieldName,earliest:earliest,latest:latest,samplerShardSize:samplerShardSize,interval:interval,fields:fields,maxExamples:maxExamples,runtimeMappings:runtimeMappings});return httpService.http({path:"/api/ml/data_visualizer/get_field_stats/"+indexPatternTitle,method:"POST",body:body})},getVisualizerFieldHistograms({indexPatternTitle:indexPatternTitle,query:query,fields:fields,samplerShardSize:samplerShardSize,runtimeMappings:runtimeMappings}){const body=JSON.stringify({query:query,fields:fields,samplerShardSize:samplerShardSize,runtimeMappings:runtimeMappings});return httpService.http({path:"/api/ml/data_visualizer/get_field_histograms/"+indexPatternTitle,method:"POST",body:body})},getVisualizerOverallStats({indexPatternTitle:indexPatternTitle,query:query,timeFieldName:timeFieldName,earliest:earliest,latest:latest,samplerShardSize:samplerShardSize,aggregatableFields:aggregatableFields,nonAggregatableFields:nonAggregatableFields,runtimeMappings:runtimeMappings}){const body=JSON.stringify({query:query,timeFieldName:timeFieldName,earliest:earliest,latest:latest,samplerShardSize:samplerShardSize,aggregatableFields:aggregatableFields,nonAggregatableFields:nonAggregatableFields,runtimeMappings:runtimeMappings});return httpService.http({path:"/api/ml/data_visualizer/get_overall_stats/"+indexPatternTitle,method:"POST",body:body})},calendars(obj){const{calendarId:calendarId,calendarIds:calendarIds}=obj||{};let calendarIdsPathComponent="";return calendarId?calendarIdsPathComponent="/"+calendarId:calendarIds&&(calendarIdsPathComponent="/"+calendarIds.join(",")),httpService.http({path:"/api/ml/calendars"+calendarIdsPathComponent,method:"GET"})},addCalendar(obj){const body=JSON.stringify(obj);return httpService.http({path:"/api/ml/calendars",method:"PUT",body:body})},updateCalendar(obj){const calendarId=obj&&obj.calendarId?"/"+obj.calendarId:"",body=JSON.stringify(obj);return httpService.http({path:"/api/ml/calendars"+calendarId,method:"PUT",body:body})},deleteCalendar:({calendarId:calendarId})=>httpService.http({path:"/api/ml/calendars/"+calendarId,method:"DELETE"}),mlNodeCount:()=>httpService.http({path:"/api/ml/ml_node_count",method:"GET"}),mlInfo:()=>httpService.http({path:"/api/ml/info",method:"GET"}),calculateModelMemoryLimit$({datafeedConfig:datafeedConfig,analysisConfig:analysisConfig,indexPattern:indexPattern,query:query,timeFieldName:timeFieldName,earliestMs:earliestMs,latestMs:latestMs}){const body=JSON.stringify({datafeedConfig:datafeedConfig,analysisConfig:analysisConfig,indexPattern:indexPattern,query:query,timeFieldName:timeFieldName,earliestMs:earliestMs,latestMs:latestMs});return httpService.http$({path:"/api/ml/validate/calculate_model_memory_limit",method:"POST",body:body})},getCardinalityOfFields({index:index,fieldNames:fieldNames,query:query,timeFieldName:timeFieldName,earliestMs:earliestMs,latestMs:latestMs}){const body=JSON.stringify({index:index,fieldNames:fieldNames,query:query,timeFieldName:timeFieldName,earliestMs:earliestMs,latestMs:latestMs});return httpService.http({path:"/api/ml/fields_service/field_cardinality",method:"POST",body:body})},getTimeFieldRange({index:index,timeFieldName:timeFieldName,query:query,runtimeMappings:runtimeMappings,indicesOptions:indicesOptions}){const body=JSON.stringify({index:index,timeFieldName:timeFieldName,query:query,runtimeMappings:runtimeMappings,indicesOptions:indicesOptions});return httpService.http({path:"/api/ml/fields_service/time_field_range",method:"POST",body:body})},esSearch(obj){const body=JSON.stringify(obj);return httpService.http({path:"/api/ml/es_search",method:"POST",body:body})},esSearch$(obj){const body=JSON.stringify(obj);return httpService.http$({path:"/api/ml/es_search",method:"POST",body:body})},getIndices:()=>httpService.http({path:"/api/index_management/indices",method:"GET"}),getModelSnapshots:(jobId,snapshotId)=>httpService.http({path:`/api/ml/anomaly_detectors/${jobId}/model_snapshots${void 0!==snapshotId?"/"+snapshotId:""}`}),updateModelSnapshot:(jobId,snapshotId,body)=>httpService.http({path:`/api/ml/anomaly_detectors/${jobId}/model_snapshots/${snapshotId}/_update`,method:"POST",body:JSON.stringify(body)}),deleteModelSnapshot:(jobId,snapshotId)=>httpService.http({path:`/api/ml/anomaly_detectors/${jobId}/model_snapshots/${snapshotId}`,method:"DELETE"}),annotations:annotations,dataFrameAnalytics:dataFrameAnalytics,filters:filters,results:resultsApiProvider(httpService),jobs:Object(jobs.a)(httpService),fileDatavisualizer:fileDatavisualizer,savedObjects:savedObjectsApiProvider(httpService)}}}}]);