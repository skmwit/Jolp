/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.securitySolution_bundle_jsonpfunction=window.securitySolution_bundle_jsonpfunction||[]).push([[8],{1115:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"withSecurityContext",(function(){return withSecurityContext}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(192),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(110),_common_components_current_license__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(707),_store_reducer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(730),_store_middleware__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(719);const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||redux__WEBPACK_IMPORTED_MODULE_1__.compose,withSecurityContext=({coreStart:coreStart,depsStart:depsStart,WrappedComponent:WrappedComponent})=>{let store;return Object(react__WEBPACK_IMPORTED_MODULE_0__.memo)(props=>(store||(store=Object(redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(Object(redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({management:_store_reducer__WEBPACK_IMPORTED_MODULE_4__.a}),{management:void 0},composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...Object(_store_middleware__WEBPACK_IMPORTED_MODULE_5__.a)(coreStart,depsStart))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider,{store:store},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_current_license__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent,props)))))}},137:function(module,__webpack_exports__,__webpack_require__){"use strict";let OperatingSystem,ConditionEntryField,EndpointStatus,HostStatus,MetadataQueryStrategyVersions,ProtectionModes,HostPolicyResponseActionStatus;__webpack_require__.d(__webpack_exports__,"e",(function(){return OperatingSystem})),__webpack_require__.d(__webpack_exports__,"a",(function(){return ConditionEntryField})),__webpack_require__.d(__webpack_exports__,"c",(function(){return HostStatus})),__webpack_require__.d(__webpack_exports__,"d",(function(){return MetadataQueryStrategyVersions})),__webpack_require__.d(__webpack_exports__,"f",(function(){return ProtectionModes})),__webpack_require__.d(__webpack_exports__,"b",(function(){return HostPolicyResponseActionStatus})),function(OperatingSystem){OperatingSystem.LINUX="linux",OperatingSystem.MAC="macos",OperatingSystem.WINDOWS="windows"}(OperatingSystem||(OperatingSystem={})),function(ConditionEntryField){ConditionEntryField.HASH="process.hash.*",ConditionEntryField.PATH="process.executable.caseless",ConditionEntryField.SIGNER="process.Ext.code_signature"}(ConditionEntryField||(ConditionEntryField={})),function(EndpointStatus){EndpointStatus.enrolled="enrolled",EndpointStatus.unenrolled="unenrolled"}(EndpointStatus||(EndpointStatus={})),function(HostStatus){HostStatus.UNHEALTHY="unhealthy",HostStatus.HEALTHY="healthy",HostStatus.OFFLINE="offline",HostStatus.UPDATING="updating",HostStatus.INACTIVE="inactive"}(HostStatus||(HostStatus={})),function(MetadataQueryStrategyVersions){MetadataQueryStrategyVersions.VERSION_1="v1",MetadataQueryStrategyVersions.VERSION_2="v2"}(MetadataQueryStrategyVersions||(MetadataQueryStrategyVersions={})),function(ProtectionModes){ProtectionModes.detect="detect",ProtectionModes.prevent="prevent",ProtectionModes.off="off"}(ProtectionModes||(ProtectionModes={})),function(HostPolicyResponseActionStatus){HostPolicyResponseActionStatus.success="success",HostPolicyResponseActionStatus.failure="failure",HostPolicyResponseActionStatus.warning="warning",HostPolicyResponseActionStatus.unsupported="unsupported"}(HostPolicyResponseActionStatus||(HostPolicyResponseActionStatus={}))},172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"j",(function(){return policyDetails})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getPolicyDataForUpdate})),__webpack_require__.d(__webpack_exports__,"k",(function(){return policyDetailsForUpdate})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isOnPolicyDetailsPage})),__webpack_require__.d(__webpack_exports__,"h",(function(){return selectors_license})),__webpack_require__.d(__webpack_exports__,"l",(function(){return policyIdFromParams})),__webpack_require__.d(__webpack_exports__,"c",(function(){return fullPolicy})),__webpack_require__.d(__webpack_exports__,"i",(function(){return policyConfig})),__webpack_require__.d(__webpack_exports__,"e",(function(){return isAntivirusRegistrationEnabled})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isLoading})),__webpack_require__.d(__webpack_exports__,"b",(function(){return apiError})),__webpack_require__.d(__webpack_exports__,"a",(function(){return agentStatusSummary})),__webpack_require__.d(__webpack_exports__,"m",(function(){return updateStatus}));var lib=__webpack_require__(128),external_kbnSharedDeps_ReactRouterDom_=__webpack_require__(77),license_license=__webpack_require__(48),policy_config=__webpack_require__(280);var constants=__webpack_require__(132);const policyDetails=state=>state.policyItem,licensedPolicy=Object(lib.createSelector)(policyDetails,state=>state.license,(policyData,license)=>{if(policyData){const policyValue=((policy,license)=>Object(license_license.b)(license,"platinum")?policy:Object(policy_config.c)(policy))(policyData.inputs[0].config.policy.value,license);return{...policyData,inputs:[{...policyData.inputs[0],config:{...policyData.inputs[0].config,policy:{...policyData.inputs[0].config.policy,value:policyValue}}}]}}return policyData}),getPolicyDataForUpdate=policy=>{const{id:id,revision:revision,created_by:created_by,created_at:created_at,updated_by:updated_by,updated_at:updated_at,...newPolicy}=policy;return{...newPolicy,inputs:newPolicy.inputs.map(input=>({...input,config:input.config&&{...input.config,policy:{...input.config.policy,value:{...input.config.policy.value,windows:{...input.config.policy.value.windows,popup:{...input.config.policy.value.windows.popup,malware:{...input.config.policy.value.windows.popup.malware,message:input.config.policy.value.windows.popup.malware.message.trim()}}},mac:{...input.config.policy.value.mac,popup:{...input.config.policy.value.mac.popup,malware:{...input.config.policy.value.mac.popup.malware,message:input.config.policy.value.mac.popup.malware.message.trim()}}}}}}}))}},policyDetailsForUpdate=Object(lib.createSelector)(licensedPolicy,policy=>{if(policy)return getPolicyDataForUpdate(policy)}),isOnPolicyDetailsPage=state=>{var _state$location$pathn,_state$location;return null!==Object(external_kbnSharedDeps_ReactRouterDom_.matchPath)(null!==(_state$location$pathn=null===(_state$location=state.location)||void 0===_state$location?void 0:_state$location.pathname)&&void 0!==_state$location$pathn?_state$location$pathn:"",{path:constants.h,exact:!0})},selectors_license=state=>state.license,policyIdFromParams=Object(lib.createSelector)(state=>state.location,location=>{var _matchPath$params$pol,_matchPath,_matchPath$params,_location$pathname;return null!==(_matchPath$params$pol=null===(_matchPath=Object(external_kbnSharedDeps_ReactRouterDom_.matchPath)(null!==(_location$pathname=null==location?void 0:location.pathname)&&void 0!==_location$pathname?_location$pathname:"",{path:constants.h,exact:!0}))||void 0===_matchPath||null===(_matchPath$params=_matchPath.params)||void 0===_matchPath$params?void 0:_matchPath$params.policyId)&&void 0!==_matchPath$params$pol?_matchPath$params$pol:""}),defaultFullPolicy=Object(policy_config.b)(),fullPolicy=Object(lib.createSelector)(licensedPolicy,policyData=>{var _policyData$inputs$0$,_policyData$inputs$,_policyData$inputs$$c,_policyData$inputs$$c2;return null!==(_policyData$inputs$0$=null==policyData||null===(_policyData$inputs$=policyData.inputs[0])||void 0===_policyData$inputs$||null===(_policyData$inputs$$c=_policyData$inputs$.config)||void 0===_policyData$inputs$$c||null===(_policyData$inputs$$c2=_policyData$inputs$$c.policy)||void 0===_policyData$inputs$$c2?void 0:_policyData$inputs$$c2.value)&&void 0!==_policyData$inputs$0$?_policyData$inputs$0$:defaultFullPolicy}),fullWindowsPolicySettings=Object(lib.createSelector)(fullPolicy,policy=>null==policy?void 0:policy.windows),fullMacPolicySettings=Object(lib.createSelector)(fullPolicy,policy=>null==policy?void 0:policy.mac),fullLinuxPolicySettings=Object(lib.createSelector)(fullPolicy,policy=>null==policy?void 0:policy.linux),policyConfig=Object(lib.createSelector)(fullWindowsPolicySettings,fullMacPolicySettings,fullLinuxPolicySettings,(windows,mac,linux)=>({windows:{advanced:windows.advanced,events:windows.events,malware:windows.malware,ransomware:windows.ransomware,popup:windows.popup,antivirus_registration:windows.antivirus_registration},mac:{advanced:mac.advanced,events:mac.events,malware:mac.malware,popup:mac.popup},linux:{advanced:linux.advanced,events:linux.events}})),isAntivirusRegistrationEnabled=Object(lib.createSelector)(policyConfig,uiPolicyConfig=>uiPolicyConfig.windows.antivirus_registration.enabled),isLoading=state=>state.isLoading,apiError=state=>state.apiError,agentStatusSummary=state=>state.agentStatusSummary,updateStatus=state=>state.updateStatus},200:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"J",(function(){return needsRefreshOfListData})),__webpack_require__.d(__webpack_exports__,"v",(function(){return getListResourceState})),__webpack_require__.d(__webpack_exports__,"r",(function(){return getLastLoadedListResourceState})),__webpack_require__.d(__webpack_exports__,"t",(function(){return getListItems})),__webpack_require__.d(__webpack_exports__,"m",(function(){return getCurrentLocationPageIndex})),__webpack_require__.d(__webpack_exports__,"n",(function(){return getCurrentLocationPageSize})),__webpack_require__.d(__webpack_exports__,"l",(function(){return getCurrentLocationFilter})),__webpack_require__.d(__webpack_exports__,"w",(function(){return getListTotalItemsCount})),__webpack_require__.d(__webpack_exports__,"u",(function(){return getListPagination})),__webpack_require__.d(__webpack_exports__,"k",(function(){return getCurrentLocation})),__webpack_require__.d(__webpack_exports__,"s",(function(){return getListErrorMessage})),__webpack_require__.d(__webpack_exports__,"G",(function(){return isListLoading})),__webpack_require__.d(__webpack_exports__,"B",(function(){return isDeletionDialogOpen})),__webpack_require__.d(__webpack_exports__,"C",(function(){return isDeletionInProgress})),__webpack_require__.d(__webpack_exports__,"D",(function(){return isDeletionSuccessful})),__webpack_require__.d(__webpack_exports__,"p",(function(){return getDeletionError})),__webpack_require__.d(__webpack_exports__,"q",(function(){return getDeletionSubmissionResourceState})),__webpack_require__.d(__webpack_exports__,"o",(function(){return getDeletionDialogEntry})),__webpack_require__.d(__webpack_exports__,"y",(function(){return isCreationDialogLocation})),__webpack_require__.d(__webpack_exports__,"j",(function(){return getCreationSubmissionResourceState})),__webpack_require__.d(__webpack_exports__,"h",(function(){return getCreationDialogFormEntry})),__webpack_require__.d(__webpack_exports__,"x",(function(){return isCreationDialogFormValid})),__webpack_require__.d(__webpack_exports__,"z",(function(){return isCreationInProgress})),__webpack_require__.d(__webpack_exports__,"A",(function(){return isCreationSuccessful})),__webpack_require__.d(__webpack_exports__,"i",(function(){return getCreationError})),__webpack_require__.d(__webpack_exports__,"g",(function(){return entriesExistState})),__webpack_require__.d(__webpack_exports__,"a",(function(){return checkingIfEntriesExist})),__webpack_require__.d(__webpack_exports__,"f",(function(){return entriesExist})),__webpack_require__.d(__webpack_exports__,"L",(function(){return trustedAppsListPageActive})),__webpack_require__.d(__webpack_exports__,"K",(function(){return policiesState})),__webpack_require__.d(__webpack_exports__,"I",(function(){return loadingPolicies})),__webpack_require__.d(__webpack_exports__,"H",(function(){return listOfPolicies})),__webpack_require__.d(__webpack_exports__,"E",(function(){return isEdit})),__webpack_require__.d(__webpack_exports__,"b",(function(){return editItemId})),__webpack_require__.d(__webpack_exports__,"c",(function(){return editItemState})),__webpack_require__.d(__webpack_exports__,"F",(function(){return isFetchingEditTrustedAppItem})),__webpack_require__.d(__webpack_exports__,"d",(function(){return editTrustedAppFetchError})),__webpack_require__.d(__webpack_exports__,"e",(function(){return editingTrustedApp}));var reselect__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(128),_common_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(132),_state__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(382);const needsRefreshOfListData=state=>{const freshDataTimestamp=state.listView.freshDataTimestamp,currentPage=state.listView.listResourceState,location=state.location;return Boolean(state.active)&&Object(_state__WEBPACK_IMPORTED_MODULE_2__.isOutdatedResourceState)(currentPage,data=>data.pageIndex===location.page_index&&data.pageSize===location.page_size&&data.timestamp>=freshDataTimestamp&&data.filter===location.filter)},getListResourceState=state=>state.listView.listResourceState,getLastLoadedListResourceState=state=>Object(_state__WEBPACK_IMPORTED_MODULE_2__.getLastLoadedResourceState)(state.listView.listResourceState),getListItems=state=>{var _getLastLoadedResourc;return(null===(_getLastLoadedResourc=Object(_state__WEBPACK_IMPORTED_MODULE_2__.getLastLoadedResourceState)(state.listView.listResourceState))||void 0===_getLastLoadedResourc?void 0:_getLastLoadedResourc.data.items)||[]},getCurrentLocationPageIndex=state=>state.location.page_index,getCurrentLocationPageSize=state=>state.location.page_size,getCurrentLocationFilter=state=>state.location.filter,getListTotalItemsCount=state=>{var _getLastLoadedResourc2;return(null===(_getLastLoadedResourc2=Object(_state__WEBPACK_IMPORTED_MODULE_2__.getLastLoadedResourceState)(state.listView.listResourceState))||void 0===_getLastLoadedResourc2?void 0:_getLastLoadedResourc2.data.totalItemsCount)||0},getListPagination=state=>{const lastLoadedResourceState=Object(_state__WEBPACK_IMPORTED_MODULE_2__.getLastLoadedResourceState)(state.listView.listResourceState);return{pageIndex:state.location.page_index,pageSize:state.location.page_size,totalItemCount:(null==lastLoadedResourceState?void 0:lastLoadedResourceState.data.totalItemsCount)||0,pageSizeOptions:[..._common_constants__WEBPACK_IMPORTED_MODULE_1__.e]}},getCurrentLocation=state=>state.location,getListErrorMessage=state=>{var _getCurrentResourceEr;return null===(_getCurrentResourceEr=Object(_state__WEBPACK_IMPORTED_MODULE_2__.getCurrentResourceError)(state.listView.listResourceState))||void 0===_getCurrentResourceEr?void 0:_getCurrentResourceEr.message},isListLoading=state=>Object(_state__WEBPACK_IMPORTED_MODULE_2__.isLoadingResourceState)(state.listView.listResourceState),isDeletionDialogOpen=state=>void 0!==state.deletionDialog.entry,isDeletionInProgress=state=>Object(_state__WEBPACK_IMPORTED_MODULE_2__.isLoadingResourceState)(state.deletionDialog.submissionResourceState),isDeletionSuccessful=state=>Object(_state__WEBPACK_IMPORTED_MODULE_2__.isLoadedResourceState)(state.deletionDialog.submissionResourceState),getDeletionError=state=>{const submissionResourceState=state.deletionDialog.submissionResourceState;return Object(_state__WEBPACK_IMPORTED_MODULE_2__.isFailedResourceState)(submissionResourceState)?submissionResourceState.error:void 0},getDeletionSubmissionResourceState=state=>state.deletionDialog.submissionResourceState,getDeletionDialogEntry=state=>state.deletionDialog.entry,isCreationDialogLocation=state=>!!state.location.show,getCreationSubmissionResourceState=state=>state.creationDialog.submissionResourceState,getCreationDialogFormEntry=state=>{var _state$creationDialog;return null===(_state$creationDialog=state.creationDialog.formState)||void 0===_state$creationDialog?void 0:_state$creationDialog.entry},isCreationDialogFormValid=state=>{var _state$creationDialog2;return(null===(_state$creationDialog2=state.creationDialog.formState)||void 0===_state$creationDialog2?void 0:_state$creationDialog2.isValid)||!1},isCreationInProgress=state=>Object(_state__WEBPACK_IMPORTED_MODULE_2__.isLoadingResourceState)(state.creationDialog.submissionResourceState),isCreationSuccessful=state=>Object(_state__WEBPACK_IMPORTED_MODULE_2__.isLoadedResourceState)(state.creationDialog.submissionResourceState),getCreationError=state=>{const submissionResourceState=state.creationDialog.submissionResourceState;return Object(_state__WEBPACK_IMPORTED_MODULE_2__.isFailedResourceState)(submissionResourceState)?submissionResourceState.error:void 0},entriesExistState=state=>state.entriesExist,checkingIfEntriesExist=Object(reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(entriesExistState,doEntriesExists=>!Object(_state__WEBPACK_IMPORTED_MODULE_2__.isLoadedResourceState)(doEntriesExists)),entriesExist=Object(reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(entriesExistState,doEntriesExists=>Object(_state__WEBPACK_IMPORTED_MODULE_2__.isLoadedResourceState)(doEntriesExists)&&doEntriesExists.data),trustedAppsListPageActive=state=>state.active,policiesState=state=>state.policies,loadingPolicies=Object(reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(policiesState,policies=>Object(_state__WEBPACK_IMPORTED_MODULE_2__.isLoadingResourceState)(policies)),listOfPolicies=Object(reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(policiesState,policies=>Object(_state__WEBPACK_IMPORTED_MODULE_2__.isLoadedResourceState)(policies)?policies.data.items:[]),isEdit=Object(reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getCurrentLocation,({show:show})=>"edit"===show),editItemId=Object(reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getCurrentLocation,({id:id})=>id),editItemState=state=>state.creationDialog.editItem,isFetchingEditTrustedAppItem=Object(reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(editItemState,editTrustedAppState=>!!editTrustedAppState&&Object(_state__WEBPACK_IMPORTED_MODULE_2__.isLoadingResourceState)(editTrustedAppState)),editTrustedAppFetchError=Object(reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(editItemState,itemForEditState=>itemForEditState&&Object(_state__WEBPACK_IMPORTED_MODULE_2__.getCurrentResourceError)(itemForEditState)),editingTrustedApp=Object(reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(editItemState,editTrustedAppState=>{if(editTrustedAppState&&Object(_state__WEBPACK_IMPORTED_MODULE_2__.isLoadedResourceState)(editTrustedAppState))return editTrustedAppState.data})},233:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"listData",(function(){return listData})),__webpack_require__.d(__webpack_exports__,"pageIndex",(function(){return pageIndex})),__webpack_require__.d(__webpack_exports__,"pageSize",(function(){return pageSize})),__webpack_require__.d(__webpack_exports__,"totalHits",(function(){return totalHits})),__webpack_require__.d(__webpack_exports__,"listLoading",(function(){return listLoading})),__webpack_require__.d(__webpack_exports__,"listError",(function(){return listError})),__webpack_require__.d(__webpack_exports__,"detailsData",(function(){return detailsData})),__webpack_require__.d(__webpack_exports__,"detailsLoading",(function(){return detailsLoading})),__webpack_require__.d(__webpack_exports__,"detailsError",(function(){return detailsError})),__webpack_require__.d(__webpack_exports__,"policyItems",(function(){return policyItems})),__webpack_require__.d(__webpack_exports__,"policyItemsLoading",(function(){return policyItemsLoading})),__webpack_require__.d(__webpack_exports__,"selectedPolicyId",(function(){return selectedPolicyId})),__webpack_require__.d(__webpack_exports__,"endpointPackageInfo",(function(){return endpointPackageInfo})),__webpack_require__.d(__webpack_exports__,"isAutoRefreshEnabled",(function(){return isAutoRefreshEnabled})),__webpack_require__.d(__webpack_exports__,"autoRefreshInterval",(function(){return autoRefreshInterval})),__webpack_require__.d(__webpack_exports__,"policyVersionInfo",(function(){return policyVersionInfo})),__webpack_require__.d(__webpack_exports__,"areEndpointsEnrolling",(function(){return areEndpointsEnrolling})),__webpack_require__.d(__webpack_exports__,"agentsWithEndpointsTotalError",(function(){return agentsWithEndpointsTotalError})),__webpack_require__.d(__webpack_exports__,"endpointsTotalError",(function(){return endpointsTotalError})),__webpack_require__.d(__webpack_exports__,"endpointPackageVersion",(function(){return endpointPackageVersion})),__webpack_require__.d(__webpack_exports__,"isTransformEnabled",(function(){return isTransformEnabled})),__webpack_require__.d(__webpack_exports__,"patterns",(function(){return patterns})),__webpack_require__.d(__webpack_exports__,"patternsError",(function(){return patternsError})),__webpack_require__.d(__webpack_exports__,"policyResponseTimestamp",(function(){return policyResponseTimestamp})),__webpack_require__.d(__webpack_exports__,"policyResponseAppliedRevision",(function(){return policyResponseAppliedRevision})),__webpack_require__.d(__webpack_exports__,"policyResponseConfigurations",(function(){return policyResponseConfigurations})),__webpack_require__.d(__webpack_exports__,"policyResponseFailedOrWarningActionCount",(function(){return policyResponseFailedOrWarningActionCount})),__webpack_require__.d(__webpack_exports__,"policyResponseActions",(function(){return policyResponseActions})),__webpack_require__.d(__webpack_exports__,"policyResponseLoading",(function(){return policyResponseLoading})),__webpack_require__.d(__webpack_exports__,"policyResponseError",(function(){return policyResponseError})),__webpack_require__.d(__webpack_exports__,"isOnEndpointPage",(function(){return isOnEndpointPage})),__webpack_require__.d(__webpack_exports__,"uiQueryParams",(function(){return uiQueryParams})),__webpack_require__.d(__webpack_exports__,"hasSelectedEndpoint",(function(){return hasSelectedEndpoint})),__webpack_require__.d(__webpack_exports__,"showView",(function(){return showView})),__webpack_require__.d(__webpack_exports__,"hostStatusInfo",(function(){return hostStatusInfo})),__webpack_require__.d(__webpack_exports__,"policyResponseStatus",(function(){return policyResponseStatus})),__webpack_require__.d(__webpack_exports__,"nonExistingPolicies",(function(){return nonExistingPolicies})),__webpack_require__.d(__webpack_exports__,"agentPolicies",(function(){return agentPolicies})),__webpack_require__.d(__webpack_exports__,"endpointsExist",(function(){return endpointsExist})),__webpack_require__.d(__webpack_exports__,"searchBarQuery",(function(){return searchBarQuery}));var querystring__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(316),querystring__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__),reselect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(128),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(77),rison_node__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(86),_common_endpoint_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(137),_common_routing__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(149),_common_constants__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(132);const listData=state=>state.hosts,pageIndex=state=>state.pageIndex,pageSize=state=>state.pageSize,totalHits=state=>state.total,listLoading=state=>state.loading,listError=state=>state.error,detailsData=state=>state.details,detailsLoading=state=>state.detailsLoading,detailsError=state=>state.detailsError,policyItems=state=>state.policyItems,policyItemsLoading=state=>state.policyItemsLoading,selectedPolicyId=state=>state.selectedPolicyId,endpointPackageInfo=state=>state.endpointPackageInfo,isAutoRefreshEnabled=state=>state.isAutoRefreshEnabled,autoRefreshInterval=state=>state.autoRefreshInterval,policyVersionInfo=state=>state.policyVersionInfo,areEndpointsEnrolling=state=>state.agentsWithEndpointsTotal>state.endpointsTotal,agentsWithEndpointsTotalError=state=>state.agentsWithEndpointsTotalError,endpointsTotalError=state=>state.endpointsTotalError,endpointPackageVersion=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(endpointPackageInfo,info=>{var _info$version;return null!==(_info$version=null==info?void 0:info.version)&&void 0!==_info$version?_info$version:void 0}),isTransformEnabled=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(state=>state.queryStrategyVersion,version=>version!==_common_endpoint_types__WEBPACK_IMPORTED_MODULE_4__.d.VERSION_1),patterns=state=>state.patterns,patternsError=state=>state.patternsError,detailsPolicyAppliedResponse=state=>state.policyResponse&&state.policyResponse.Endpoint.policy.applied,policyResponseTimestamp=state=>state.policyResponse&&state.policyResponse["@timestamp"],policyResponseAppliedRevision=state=>{var _state$policyResponse;return String((null===(_state$policyResponse=state.policyResponse)||void 0===_state$policyResponse?void 0:_state$policyResponse.Endpoint.policy.applied.endpoint_policy_version)||"")},policyResponseConfigurations=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(detailsPolicyAppliedResponse,applied=>{var _applied$response;return null==applied||null===(_applied$response=applied.response)||void 0===_applied$response?void 0:_applied$response.configurations}),policyResponseFailedOrWarningActionCount=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(detailsPolicyAppliedResponse,applied=>{var _applied$response2;const failureOrWarningByConfigType=new Map;return void 0!==(null==applied||null===(_applied$response2=applied.response)||void 0===_applied$response2?void 0:_applied$response2.configurations)&&void 0!==(null==applied?void 0:applied.actions)&&Object.entries(applied.response.configurations).map(([key,val])=>{let count=0;for(const action of val.concerned_actions){var _applied$actions$find;const actionStatus=null===(_applied$actions$find=applied.actions.find(policyActions=>policyActions.name===action))||void 0===_applied$actions$find?void 0:_applied$actions$find.status;actionStatus!==_common_endpoint_types__WEBPACK_IMPORTED_MODULE_4__.b.failure&&actionStatus!==_common_endpoint_types__WEBPACK_IMPORTED_MODULE_4__.b.warning||(count+=1)}return failureOrWarningByConfigType.set(key,count)}),failureOrWarningByConfigType}),policyResponseActions=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(detailsPolicyAppliedResponse,applied=>null==applied?void 0:applied.actions),policyResponseLoading=state=>state.policyResponseLoading,policyResponseError=state=>state.policyResponseError,isOnEndpointPage=state=>{var _state$location$pathn,_state$location;return null!==Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.matchPath)(null!==(_state$location$pathn=null===(_state$location=state.location)||void 0===_state$location?void 0:_state$location.pathname)&&void 0!==_state$location$pathn?_state$location$pathn:"",{path:_common_constants__WEBPACK_IMPORTED_MODULE_6__.f,exact:!0})},uiQueryParams=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(state=>state.location,location=>{const data={page_index:String(_common_constants__WEBPACK_IMPORTED_MODULE_6__.c),page_size:String(_common_constants__WEBPACK_IMPORTED_MODULE_6__.d)};if(location){const query=querystring__WEBPACK_IMPORTED_MODULE_0___default.a.parse(location.search.slice(1)),paginationParams=Object(_common_routing__WEBPACK_IMPORTED_MODULE_5__.a)(query),keys=["selected_endpoint","show","admin_query"];for(const key of keys){const value="string"==typeof query[key]?query[key]:Array.isArray(query[key])?query[key][query[key].length-1]:void 0;void 0!==value&&("show"===key&&"policy_response"!==value&&"details"!==value||(data[key]=value))}data.page_size=String(paginationParams.page_size),data.page_index=String(paginationParams.page_index)}return data}),hasSelectedEndpoint=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(uiQueryParams,({selected_endpoint:selectedEndpoint})=>void 0!==selectedEndpoint),showView=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(uiQueryParams,searchParams=>"policy_response"===searchParams.show?"policy_response":"details"),hostStatusInfo=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(state=>state.hostStatus,hostStatus=>hostStatus||_common_endpoint_types__WEBPACK_IMPORTED_MODULE_4__.c.UNHEALTHY),policyResponseStatus=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(state=>state.policyResponse,policyResponse=>{var _policyResponse$Endpo,_policyResponse$Endpo2,_policyResponse$Endpo3;return policyResponse&&(null==policyResponse||null===(_policyResponse$Endpo=policyResponse.Endpoint)||void 0===_policyResponse$Endpo||null===(_policyResponse$Endpo2=_policyResponse$Endpo.policy)||void 0===_policyResponse$Endpo2||null===(_policyResponse$Endpo3=_policyResponse$Endpo2.applied)||void 0===_policyResponse$Endpo3?void 0:_policyResponse$Endpo3.status)||""}),nonExistingPolicies=state=>state.nonExistingPolicies,agentPolicies=state=>state.agentPolicies,endpointsExist=state=>state.endpointsExist,searchBarQuery=Object(reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(uiQueryParams,({admin_query:adminQuery})=>{const decodedQuery={query:"",language:"kuery"};if(adminQuery){const urlDecodedQuery=Object(rison_node__WEBPACK_IMPORTED_MODULE_3__.decode)(adminQuery);urlDecodedQuery&&"string"==typeof urlDecodedQuery.query&&(decodedQuery.query=urlDecodedQuery.query),!urlDecodedQuery||"string"!=typeof urlDecodedQuery.language||"kuery"!==urlDecodedQuery.language&&"lucene"!==urlDecodedQuery.language||(decodedQuery.language=urlDecodedQuery.language)}return decodedQuery})},280:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return policyFactory})),__webpack_require__.d(__webpack_exports__,"c",(function(){return policyFactoryWithoutPaidFeatures})),__webpack_require__.d(__webpack_exports__,"a",(function(){return DefaultMalwareMessage}));var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(137);const policyFactory=()=>({windows:{events:{dll_and_driver_load:!0,dns:!0,file:!0,network:!0,process:!0,registry:!0,security:!0},malware:{mode:_types__WEBPACK_IMPORTED_MODULE_0__.f.prevent},ransomware:{mode:_types__WEBPACK_IMPORTED_MODULE_0__.f.prevent},popup:{malware:{message:"",enabled:!0},ransomware:{message:"",enabled:!0}},logging:{file:"info"},antivirus_registration:{enabled:!1}},mac:{events:{process:!0,file:!0,network:!0},malware:{mode:_types__WEBPACK_IMPORTED_MODULE_0__.f.prevent},popup:{malware:{message:"",enabled:!0}},logging:{file:"info"}},linux:{events:{process:!0,file:!0,network:!0},logging:{file:"info"}}}),policyFactoryWithoutPaidFeatures=(policy=policyFactory())=>({...policy,windows:{...policy.windows,ransomware:{mode:_types__WEBPACK_IMPORTED_MODULE_0__.f.off},popup:{...policy.windows.popup,malware:{message:"",enabled:!0},ransomware:{message:"",enabled:!1}}},mac:{...policy.mac,popup:{...policy.mac.popup,malware:{message:"",enabled:!0}}}}),DefaultMalwareMessage="Elastic Security {action} {filename}"},281:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return defaultConditionEntry})),__webpack_require__.d(__webpack_exports__,"b",(function(){return defaultNewTrustedApp})),__webpack_require__.d(__webpack_exports__,"d",(function(){return initialDeletionDialogState})),__webpack_require__.d(__webpack_exports__,"c",(function(){return initialCreationDialogState})),__webpack_require__.d(__webpack_exports__,"e",(function(){return initialTrustedAppsPageState}));var _common_endpoint_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(137),_common_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(132);const defaultConditionEntry=()=>({field:_common_endpoint_types__WEBPACK_IMPORTED_MODULE_0__.a.HASH,operator:"included",type:"match",value:""}),defaultNewTrustedApp=()=>({name:"",os:_common_endpoint_types__WEBPACK_IMPORTED_MODULE_0__.e.WINDOWS,entries:[defaultConditionEntry()],description:"",effectScope:{type:"global"}}),initialDeletionDialogState=()=>({confirmed:!1,submissionResourceState:{type:"UninitialisedResourceState"}}),initialCreationDialogState=()=>({confirmed:!1,submissionResourceState:{type:"UninitialisedResourceState"}}),initialTrustedAppsPageState=()=>({entriesExist:{type:"UninitialisedResourceState"},listView:{listResourceState:{type:"UninitialisedResourceState"},freshDataTimestamp:Date.now()},deletionDialog:initialDeletionDialogState(),creationDialog:initialCreationDialogState(),policies:{type:"UninitialisedResourceState"},location:{page_index:_common_constants__WEBPACK_IMPORTED_MODULE_1__.c,page_size:_common_constants__WEBPACK_IMPORTED_MODULE_1__.d,show:void 0,id:void 0,view_type:"grid",filter:""},active:!1})},318:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",(function(){return isLoadingResourceState})),__webpack_require__.d(__webpack_exports__,"d",(function(){return isLoadedResourceState})),__webpack_require__.d(__webpack_exports__,"c",(function(){return isFailedResourceState})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isStaleResourceState})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getLastLoadedResourceState})),__webpack_require__.d(__webpack_exports__,"a",(function(){return getCurrentResourceError})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isOutdatedResourceState}));const isUninitialisedResourceState=state=>"UninitialisedResourceState"===state.type,isLoadingResourceState=state=>"LoadingResourceState"===state.type,isLoadedResourceState=state=>"LoadedResourceState"===state.type,isFailedResourceState=state=>"FailedResourceState"===state.type,isStaleResourceState=state=>isUninitialisedResourceState(state)||isLoadedResourceState(state)||isFailedResourceState(state),getLastLoadedResourceState=state=>isLoadedResourceState(state)?state:isLoadingResourceState(state)?getLastLoadedResourceState(state.previousState):isFailedResourceState(state)?state.lastLoadedState:void 0,getCurrentResourceError=state=>isFailedResourceState(state)?state.error:void 0,isOutdatedResourceState=(state,isFresh)=>isUninitialisedResourceState(state)||isLoadedResourceState(state)&&!isFresh(state.data)||isFailedResourceState(state)&&(!state.lastLoadedState||!isFresh(state.lastLoadedState.data))},319:function(module,exports){},382:function(module,__webpack_exports__,__webpack_require__){"use strict";var _async_resource_state__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(318);__webpack_require__.d(__webpack_exports__,"getCurrentResourceError",(function(){return _async_resource_state__WEBPACK_IMPORTED_MODULE_0__.a})),__webpack_require__.d(__webpack_exports__,"getLastLoadedResourceState",(function(){return _async_resource_state__WEBPACK_IMPORTED_MODULE_0__.b})),__webpack_require__.d(__webpack_exports__,"isFailedResourceState",(function(){return _async_resource_state__WEBPACK_IMPORTED_MODULE_0__.c})),__webpack_require__.d(__webpack_exports__,"isLoadedResourceState",(function(){return _async_resource_state__WEBPACK_IMPORTED_MODULE_0__.d})),__webpack_require__.d(__webpack_exports__,"isLoadingResourceState",(function(){return _async_resource_state__WEBPACK_IMPORTED_MODULE_0__.e})),__webpack_require__.d(__webpack_exports__,"isOutdatedResourceState",(function(){return _async_resource_state__WEBPACK_IMPORTED_MODULE_0__.f})),__webpack_require__.d(__webpack_exports__,"isStaleResourceState",(function(){return _async_resource_state__WEBPACK_IMPORTED_MODULE_0__.g}));__webpack_require__(319)}}]);