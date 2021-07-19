/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.savedObjectsTagging_bundle_jsonpfunction=window.savedObjectsTagging_bundle_jsonpfunction||[]).push([[2],{43:function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(44);case"v7light":return __webpack_require__(46);case"v8dark":return __webpack_require__(48);case"v8light":return __webpack_require__(50)}},44:function(module,exports,__webpack_require__){var api=__webpack_require__(27),content=__webpack_require__(45);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},45:function(module,exports,__webpack_require__){(exports=__webpack_require__(28)(!1)).push([module.i,".tagAssignFlyout__selectionIcon{margin-right:12px;margin-left:12px}.tagAssignFlyout_searchContainer{padding:16px 24px 8px}.tagAssignFlyout__actionBar{margin-top:4px}\n",""]),module.exports=exports},46:function(module,exports,__webpack_require__){var api=__webpack_require__(27),content=__webpack_require__(47);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},47:function(module,exports,__webpack_require__){(exports=__webpack_require__(28)(!1)).push([module.i,".tagAssignFlyout__selectionIcon{margin-right:12px;margin-left:12px}.tagAssignFlyout_searchContainer{padding:16px 24px 8px}.tagAssignFlyout__actionBar{margin-top:4px}\n",""]),module.exports=exports},48:function(module,exports,__webpack_require__){var api=__webpack_require__(27),content=__webpack_require__(49);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},49:function(module,exports,__webpack_require__){(exports=__webpack_require__(28)(!1)).push([module.i,".tagAssignFlyout__selectionIcon{margin-right:12px;margin-left:12px}.tagAssignFlyout_searchContainer{padding:16px 24px 8px}.tagAssignFlyout__actionBar{margin-top:4px}\n",""]),module.exports=exports},50:function(module,exports,__webpack_require__){var api=__webpack_require__(27),content=__webpack_require__(51);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},51:function(module,exports,__webpack_require__){(exports=__webpack_require__(28)(!1)).push([module.i,".tagAssignFlyout__selectionIcon{margin-right:12px;margin-left:12px}.tagAssignFlyout_searchContainer{padding:16px 24px 8px}.tagAssignFlyout__actionBar{margin-top:4px}\n",""]),module.exports=exports},55:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"AssignFlyout",(function(){return AssignFlyout}));var external_kbnSharedDeps_React_=__webpack_require__(0),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_ElasticEui_=__webpack_require__(1),external_kbnSharedDeps_KbnI18n_=__webpack_require__(5);var external_kbnSharedDeps_Lodash_=__webpack_require__(13);const getKey=({id:id,type:type})=>`${type}|${id}`,getOverriddenStatus=(initialStatus,override)=>override?"selected"===override?"full":"none":initialStatus,getAssignmentAction=(initialStatus,override)=>{const overriddenStatus=getOverriddenStatus(initialStatus,override);if(initialStatus!==overriddenStatus){if("full"===overriddenStatus)return"added";if("none"===overriddenStatus)return"removed"}return"unchanged"},statusPriority={full:1,partial:2,none:3},computeRequiredChanges=({objects:objects,initialStatus:initialStatus,overrides:overrides})=>{const assigned=[],unassigned=[];return objects.forEach(object=>{const key=getKey(object),status=initialStatus[key],override=overrides[key],action=getAssignmentAction(status,override);"added"===action&&assigned.push(object),"removed"===action&&unassigned.push(object)}),{assigned:assigned,unassigned:unassigned}};var external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(11),base=__webpack_require__(3);const AssignFlyoutHeader=({tagCache:tagCache,tagIds:tagIds})=>{const tags=Object(external_kbnSharedDeps_React_.useMemo)(()=>tagCache.getState().filter(tag=>tagIds.includes(tag.id)),[tagCache,tagIds]);return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"m"},external_kbnSharedDeps_React_default.a.createElement("h3",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.savedObjectsTagging.assignFlyout.title",defaultMessage:"Manage tag assignments"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),external_kbnSharedDeps_React_default.a.createElement(base.b,{tags:tags}))},AssignFlyoutActionBar=({resultCount:resultCount,initiallyAssigned:initiallyAssigned,pendingChanges:pendingChanges,onReset:onReset,onSelectAll:onSelectAll,onDeselectAll:onDeselectAll})=>external_kbnSharedDeps_React_default.a.createElement("div",{className:"tagAssignFlyout__actionBar"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"center",gutterSize:"m"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"xs",color:"subdued"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.savedObjectsTagging.assignFlyout.actionBar.totalResultsLabel",defaultMessage:"{count, plural, one {1 saved object} other {# saved objects}}",values:{count:resultCount}}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement("div",{className:"tagMgt__actionBarDivider"})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!0},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"xs",color:"subdued"},pendingChanges>0?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.savedObjectsTagging.assignFlyout.actionBar.pendingChanges",defaultMessage:"{count} pending changes",values:{count:pendingChanges}}):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.savedObjectsTagging.assignFlyout.actionBar.currentlyAssigned",defaultMessage:"{count} currently assigned",values:{count:initiallyAssigned}}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLink,{onClick:onReset,"data-test-subj":"assignFlyout-resetButton"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.savedObjectsTagging.assignFlyout.actionBar.resetLabel",defaultMessage:"Reset"})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLink,{onClick:onSelectAll,"data-test-subj":"assignFlyout-selectAllButton"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.savedObjectsTagging.assignFlyout.actionBar.selectedAllLabel",defaultMessage:"Select all"})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLink,{onClick:onDeselectAll,"data-test-subj":"assignFlyout-deselectAllButton"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.savedObjectsTagging.assignFlyout.actionBar.deselectedAllLabel",defaultMessage:"Deselect all"})))))),AssignFlyoutFooter=({isSaving:isSaving,hasPendingChanges:hasPendingChanges,onCancel:onCancel,onSave:onSave})=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{justifyContent:"spaceBetween"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,{onClick:onCancel,"data-test-subj":"assignFlyoutCancelButton"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.savedObjectsTagging.assignFlyout.cancelButtonLabel",defaultMessage:"Cancel"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButton,{onClick:onSave,isLoading:isSaving,disabled:!hasPendingChanges,fill:!0,iconType:"save","data-test-subj":"assignFlyoutConfirmButton"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.savedObjectsTagging.assignFlyout.confirmButtonLabel",defaultMessage:"Save tag assignments"})))),AssignFlyoutResultList=({results:results,isLoading:isLoading,initialStatus:initialStatus,overrides:overrides,onChange:onChange})=>{const options=results.map(result=>{var _result$icon;const key=getKey(result),overriddenStatus=getOverriddenStatus(initialStatus[key],overrides[key]),checkedStatus="full"===overriddenStatus?"on":void 0,statusIcon="full"===overriddenStatus?"check":"none"===overriddenStatus?"empty":"partial",assignmentAction=getAssignmentAction(initialStatus[key],overrides[key]);return{label:result.title,key:key,"data-test-subj":`assign-result-${result.type}-${result.id}`,checked:checkedStatus,previously:checkedStatus,showIcons:!1,prepend:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiIcon,{className:"tagAssignFlyout__selectionIcon status-"+overriddenStatus,type:statusIcon,"data-test-subj":"assign-result-status"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiIcon,{type:null!==(_result$icon=result.icon)&&void 0!==_result$icon?_result$icon:"empty",title:result.type})),append:external_kbnSharedDeps_React_default.a.createElement(ResultActionLabel,{action:assignmentAction})}});return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSelectable,{height:"full","data-test-subj":"assignFlyoutResultList",options:options,allowExclusions:!1,isLoading:isLoading,onChange:newOptions=>{const newOverrides=newOptions.reduce((memo,option)=>option.checked===option.previously?memo:{...memo,[option.key]:"on"===option.checked?"selected":"deselected"},{});onChange(newOverrides)}},list=>list)},ResultActionLabel=({action:action})=>"unchanged"===action?null:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"xs",color:"subdued",style:{display:"inline-block"}},"added"===action?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.savedObjectsTagging.assignFlyout.resultList.addedLabel",defaultMessage:"Added"}):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.savedObjectsTagging.assignFlyout.resultList.removedLabel",defaultMessage:"Removed"})),AssignFlyoutSearchBar=({onChange:onChange,types:types,isLoading:isLoading})=>{const filters=Object(external_kbnSharedDeps_React_.useMemo)(()=>[{type:"field_value_selection",field:"type",name:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.savedObjectsTagging.assignFlyout.typeFilterName",{defaultMessage:"Type"}),multiSelect:"or",options:types.map(type=>({value:type,name:type}))}],[types]);return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSearchBar,{box:{"data-test-subj":"assignFlyoutSearchBar",placeholder:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.savedObjectsTagging.assignFlyout.searchPlaceholder",{defaultMessage:"Search by saved object name"}),isLoading:isLoading},onChange:onChange,filters:filters})};__webpack_require__(43);const getObjectStatus=(object,assignedTags)=>{const assignedCount=assignedTags.reduce((count,tagId)=>count+(object.tags.includes(tagId)?1:0),0);return 0===assignedCount?"none":assignedCount===assignedTags.length?"full":"partial"},AssignFlyout=({tagIds:tagIds,tagCache:tagCache,allowedTypes:allowedTypes,notifications:notifications,assignmentService:assignmentService,onClose:onClose})=>{const[results,setResults]=Object(external_kbnSharedDeps_React_.useState)([]),[query,setQuery]=Object(external_kbnSharedDeps_React_.useState)(external_kbnSharedDeps_ElasticEui_.Query.parse("")),[initialStatus,setInitialStatus]=Object(external_kbnSharedDeps_React_.useState)({}),[overrides,setOverrides]=Object(external_kbnSharedDeps_React_.useState)({}),[isLoading,setLoading]=Object(external_kbnSharedDeps_React_.useState)(!1),[isSaving,setSaving]=Object(external_kbnSharedDeps_React_.useState)(!1),[initiallyAssigned,setInitiallyAssigned]=Object(external_kbnSharedDeps_React_.useState)(0),[pendingChangeCount,setPendingChangeCount]=Object(external_kbnSharedDeps_React_.useState)(0);Object(external_kbnSharedDeps_React_.useEffect)(()=>{(async()=>{setLoading(!0);const{queryText:queryText,selectedTypes:selectedTypes}=function(query){let queryText,selectedTypes;return query&&(query.ast.getTermClauses().length&&(queryText=query.ast.getTermClauses().map(clause=>clause.value).join(" ")),query.ast.getFieldClauses("type")&&(selectedTypes=query.ast.getFieldClauses("type")[0].value)),{queryText:queryText,selectedTypes:selectedTypes}}(query),fetched=await assignmentService.findAssignableObjects({search:queryText?queryText+"*":void 0,types:selectedTypes,maxResults:1e3}),fetchedStatus=fetched.reduce((status,result)=>({...status,[getKey(result)]:getObjectStatus(result,tagIds)}),{}),assignedCount=Object.values(fetchedStatus).filter(status=>"none"!==status).length;var objects,statusMap;setResults((objects=fetched,statusMap=fetchedStatus,Object(external_kbnSharedDeps_Lodash_.sortBy)(objects,[obj=>`${statusPriority[statusMap[getKey(obj)]]}-${obj.title}`]))),setOverrides({}),setInitialStatus(fetchedStatus),setInitiallyAssigned(assignedCount),setPendingChangeCount(0),setLoading(!1)})()},[query,assignmentService,tagIds]),Object(external_kbnSharedDeps_React_.useEffect)(()=>{const changes=computeRequiredChanges({objects:results,initialStatus:initialStatus,overrides:overrides});setPendingChangeCount(changes.assigned.length+changes.unassigned.length)},[initialStatus,overrides,results]);const onSave=Object(external_kbnSharedDeps_React_.useCallback)(async()=>{setSaving(!0);const changes=computeRequiredChanges({objects:results,initialStatus:initialStatus,overrides:overrides});await assignmentService.updateTagAssignments({tags:tagIds,assign:changes.assigned.map(({type:type,id:id})=>({type:type,id:id})),unassign:changes.unassigned.map(({type:type,id:id})=>({type:type,id:id}))}),notifications.toasts.addSuccess(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.savedObjectsTagging.assignFlyout.successNotificationTitle",{defaultMessage:"Saved assignments to {count, plural, one {1 saved object} other {# saved objects}}",values:{count:changes.assigned.length+changes.unassigned.length}})),onClose()},[tagIds,results,initialStatus,overrides,notifications,assignmentService,onClose]),resetAll=Object(external_kbnSharedDeps_React_.useCallback)(()=>{setOverrides({})},[]),selectAll=Object(external_kbnSharedDeps_React_.useCallback)(()=>{setOverrides(results.reduce((status,result)=>({...status,[getKey(result)]:"selected"}),{}))},[results]),deselectAll=Object(external_kbnSharedDeps_React_.useCallback)(()=>{setOverrides(results.reduce((status,result)=>({...status,[getKey(result)]:"deselected"}),{}))},[results]);return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlyoutHeader,{hasBorder:!0},external_kbnSharedDeps_React_default.a.createElement(AssignFlyoutHeader,{tagIds:tagIds,tagCache:tagCache})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlyoutHeader,{hasBorder:!0,className:"tagAssignFlyout_searchContainer"},external_kbnSharedDeps_React_default.a.createElement(AssignFlyoutSearchBar,{onChange:({query:newQuery})=>{setQuery(newQuery)},isLoading:isLoading,types:allowedTypes}),external_kbnSharedDeps_React_default.a.createElement(AssignFlyoutActionBar,{resultCount:results.length,initiallyAssigned:initiallyAssigned,pendingChanges:pendingChangeCount,onReset:resetAll,onSelectAll:selectAll,onDeselectAll:deselectAll})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:1},external_kbnSharedDeps_React_default.a.createElement(AssignFlyoutResultList,{results:results,isLoading:isLoading,initialStatus:initialStatus,overrides:overrides,onChange:newOverrides=>{setOverrides(oldOverrides=>({...oldOverrides,...newOverrides}))}})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlyoutFooter,null,external_kbnSharedDeps_React_default.a.createElement(AssignFlyoutFooter,{isSaving:isSaving,hasPendingChanges:pendingChangeCount>0,onSave:onSave,onCancel:onClose})))}}}]);