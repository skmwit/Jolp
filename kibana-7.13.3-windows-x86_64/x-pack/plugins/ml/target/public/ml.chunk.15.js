/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.ml_bundle_jsonpfunction=window.ml_bundle_jsonpfunction||[]).push([[15],{62:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"mountApp",(function(){return mountApp}));var external_kbnSharedDeps_ReactDom_=__webpack_require__(46),external_kbnSharedDeps_ReactDom_default=__webpack_require__.n(external_kbnSharedDeps_ReactDom_),external_kbnSharedDeps_React_=__webpack_require__(14),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_ReactRouterDom_=__webpack_require__(44),external_kbnSharedDeps_KbnI18n_=__webpack_require__(2),external_kbnSharedDeps_ElasticEui_=__webpack_require__(39),app=__webpack_require__(5),check_capabilities=__webpack_require__(68),public_=__webpack_require__(42),dependency_cache=__webpack_require__(22),jobs_list_view=__webpack_require__(410),analytics_list=__webpack_require__(412),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(40);const AccessDeniedPage=()=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPage,{"data-test-subj":"mlPageAccessDenied"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageBody,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContentHeader,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContentHeaderSection,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,null,external_kbnSharedDeps_React_default.a.createElement("h1",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.jobsList.insufficientLicenseTitle",defaultMessage:"Machine Learning"}))))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContentBody,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCallOut,{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.management.jobsList.noPermissionToAccessLabel",{defaultMessage:"Access denied"}),color:"danger",iconType:"cross"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"s"},external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.jobsList.noGrantedPrivilegesDescription",defaultMessage:"You don’t have permission to manage ML jobs"})))))))),InsufficientLicensePage=({basePath:basePath})=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPage,{"data-test-subj":"mlPageInsufficientLicense"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageBody,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContentHeader,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContentHeaderSection,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,null,external_kbnSharedDeps_React_default.a.createElement("h1",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.jobsList.insufficientLicenseTitle",defaultMessage:"Machine Learning"}))))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContentBody,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCallOut,{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.management.jobsList.insufficientLicenseLabel",{defaultMessage:"Machine Learning is only available on a trial, platinum or enterprise license"}),color:"danger",iconType:"cross"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"s"},external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.jobsList.insufficientLicenseDescription",defaultMessage:"Please {link} to use Machine Learning features",values:{link:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLink,{href:basePath.get()+"/app/management/stack/license_management/home"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.jobsList.insufficientLicenseDescription.link",defaultMessage:"upgrade your license or start a trial"}))}}))))))));var ml_api_service=__webpack_require__(64);const SyncList=({syncItems:syncItems})=>null===syncItems?null:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(SavedObjectsCreated,{syncItems:syncItems}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiHorizontalRule,{margin:"l"}),external_kbnSharedDeps_React_default.a.createElement(SavedObjectsDeleted,{syncItems:syncItems}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiHorizontalRule,{margin:"l"}),external_kbnSharedDeps_React_default.a.createElement(DatafeedsAdded,{syncItems:syncItems}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiHorizontalRule,{margin:"l"}),external_kbnSharedDeps_React_default.a.createElement(DatafeedsRemoved,{syncItems:syncItems}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiHorizontalRule,{margin:"l"})),SavedObjectsCreated=({syncItems:syncItems})=>{const items=Object.keys(syncItems.savedObjectsCreated),title=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement("h3",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTextColor,{color:items.length?"default":"subdued"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.savedObjectsCreated.title",defaultMessage:"Missing saved objects ({count})",values:{count:items.length}})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"s"},external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTextColor,{color:"subdued"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.savedObjectsCreated.description",defaultMessage:"If there are jobs that do not have accompanying saved objects, they will be created in the current space."})))));return external_kbnSharedDeps_React_default.a.createElement(SyncItem,{id:"savedObjectsCreated",title:title,items:items})},SavedObjectsDeleted=({syncItems:syncItems})=>{const items=Object.keys(syncItems.savedObjectsDeleted),title=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement("h3",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTextColor,{color:items.length?"default":"subdued"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.savedObjectsDeleted.title",defaultMessage:"Unmatched saved objects ({count})",values:{count:items.length}})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"s"},external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTextColor,{color:"subdued"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.savedObjectsDeleted.description",defaultMessage:"If there are saved objects that do not have an accompanying job, they will be deleted."})))));return external_kbnSharedDeps_React_default.a.createElement(SyncItem,{id:"savedObjectsDeleted",title:title,items:items})},DatafeedsAdded=({syncItems:syncItems})=>{const items=Object.keys(syncItems.datafeedsAdded),title=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement("h3",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTextColor,{color:items.length?"default":"subdued"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.datafeedsAdded.title",defaultMessage:"Saved objects with missing datafeeds ({count})",values:{count:items.length}})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"s"},external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTextColor,{color:"subdued"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.datafeedsAdded.description",defaultMessage:"If there are saved objects that are missing the datafeed ID for anomaly detection jobs, the ID will be added."})))));return external_kbnSharedDeps_React_default.a.createElement(SyncItem,{id:"datafeedsAdded",title:title,items:items})},DatafeedsRemoved=({syncItems:syncItems})=>{const items=Object.keys(syncItems.datafeedsRemoved),title=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement("h3",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTextColor,{color:items.length?"default":"subdued"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.datafeedsRemoved.title",defaultMessage:"Saved objects with unmatched datafeed IDs ({count})",values:{count:items.length}})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"s"},external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTextColor,{color:"subdued"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.datafeedsRemoved.description",defaultMessage:"If there are saved objects that use a datafeed that does not exist, they will be deleted."})))));return external_kbnSharedDeps_React_default.a.createElement(SyncItem,{id:"datafeedsRemoved",title:title,items:items})},SyncItem=({id:id,title:title,items:items})=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiAccordion,{id:id,buttonContent:title,paddingSize:"l"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"s"},external_kbnSharedDeps_React_default.a.createElement("ul",null,items.map(item=>external_kbnSharedDeps_React_default.a.createElement("li",{key:item},item)))));var toast_notification_service=__webpack_require__(73);const JobSpacesSyncFlyout=({onClose:onClose})=>{const{displayErrorToast:displayErrorToast,displaySuccessToast:displaySuccessToast}=Object(toast_notification_service.c)(),[loading,setLoading]=Object(external_kbnSharedDeps_React_.useState)(!1),[canSync,setCanSync]=Object(external_kbnSharedDeps_React_.useState)(!1),[syncResp,setSyncResp]=Object(external_kbnSharedDeps_React_.useState)(null);async function loadSyncList(simulate=!0){setLoading(!0);try{const resp=await ml_api_service.ml.savedObjects.syncSavedObjects(simulate);setSyncResp(resp);const count=Object.values(resp).reduce((acc,cur)=>acc+Object.keys(cur).length,0);return setCanSync(count>0),setLoading(!1),resp}catch(error){displayErrorToast(error),setLoading(!1)}return null}return Object(external_kbnSharedDeps_React_.useEffect)(()=>{loadSyncList()},[]),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlyout,{maxWidth:600,onClose:onClose},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlyoutHeader,{hasBorder:!0},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"m"},external_kbnSharedDeps_React_default.a.createElement("h2",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.headerLabel",defaultMessage:"Synchronize saved objects"})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlyoutBody,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCallOut,{color:"primary"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"s"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.description",defaultMessage:"Synchronize the saved objects if they are out of sync with the machine learning jobs in Elasticsearch."}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,null),external_kbnSharedDeps_React_default.a.createElement(SyncList,{syncItems:syncResp})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlyoutFooter,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{justifyContent:"spaceBetween"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,{iconType:"cross",onClick:onClose,flush:"left"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.closeButton",defaultMessage:"Close"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButton,{onClick:async function(){if(canSync){const resp=await loadSyncList(!1);if(await loadSyncList(!0),null===resp)return;const{successCount:successCount,errorCount:errorCount}=function(resp){let successCount=0,errorCount=0;return Object.values(resp).forEach(result=>{Object.values(result).forEach(({success:success,error:error})=>{!0===success?successCount++:void 0!==error&&errorCount++})}),{successCount:successCount,errorCount:errorCount}}(resp);if(errorCount>0){const title=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.management.syncSavedObjectsFlyout.sync.error",{defaultMessage:"Some jobs cannot be synchronized."});return void displayErrorToast(resp,title)}displaySuccessToast(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.management.syncSavedObjectsFlyout.sync.success",{defaultMessage:"{successCount} {successCount, plural, one {job} other {jobs}} synchronized",values:{successCount:successCount}}))}},fill:!0,isDisabled:!1===canSync||!0===loading},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.ml.management.syncSavedObjectsFlyout.syncButton",defaultMessage:"Synchronize"})))))))};var jobs=__webpack_require__(241),application_app=__webpack_require__(282),page=__webpack_require__(284);function usePageState(defaultState){const[pageState,setPageState]=Object(external_kbnSharedDeps_React_.useState)(defaultState),updateState=Object(external_kbnSharedDeps_React_.useCallback)(update=>{setPageState({...pageState,...update})},[pageState]);return[pageState,updateState]}const getEmptyFunctionComponent=({children:children})=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,children);const JobsListPage=({coreStart:coreStart,share:share,history:history,spacesApi:spacesApi})=>{const spacesEnabled=void 0!==spacesApi,[initialized,setInitialized]=Object(external_kbnSharedDeps_React_.useState)(!1),[accessDenied,setAccessDenied]=Object(external_kbnSharedDeps_React_.useState)(!1),[isPlatinumOrTrialLicense,setIsPlatinumOrTrialLicense]=Object(external_kbnSharedDeps_React_.useState)(!0),[showSyncFlyout,setShowSyncFlyout]=Object(external_kbnSharedDeps_React_.useState)(!1),[isMlEnabledInSpace,setIsMlEnabledInSpace]=Object(external_kbnSharedDeps_React_.useState)(!1),tabs=function(isMlEnabledInSpace,spacesApi){const[adPageState,updateAdPageState]=usePageState(Object(jobs.b)()),[dfaPageState,updateDfaPageState]=usePageState(Object(page.b)());return Object(external_kbnSharedDeps_React_.useMemo)(()=>[{"data-test-subj":"mlStackManagementJobsListAnomalyDetectionTab",id:"anomaly_detection_jobs",name:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.management.jobsList.anomalyDetectionTab",{defaultMessage:"Anomaly detection"}),content:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(jobs_list_view.a,{jobsViewState:adPageState,onJobsViewStateUpdate:updateAdPageState,isManagementTable:!0,isMlEnabledInSpace:isMlEnabledInSpace,spacesApi:spacesApi}))},{"data-test-subj":"mlStackManagementJobsListAnalyticsTab",id:"analytics_jobs",name:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.management.jobsList.analyticsTab",{defaultMessage:"Analytics"}),content:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(analytics_list.a,{isManagementTable:!0,isMlEnabledInSpace:isMlEnabledInSpace,spacesApi:spacesApi,pageState:dfaPageState,updatePageState:updateDfaPageState}))}],[isMlEnabledInSpace,adPageState,updateAdPageState,dfaPageState,updateDfaPageState])}(isMlEnabledInSpace,spacesApi),[currentTabId,setCurrentTabId]=Object(external_kbnSharedDeps_React_.useState)(tabs[0].id),I18nContext=coreStart.i18n.Context;Object(external_kbnSharedDeps_React_.useEffect)(()=>{(async()=>{try{const{mlFeatureEnabledInSpace:mlFeatureEnabledInSpace}=await Object(check_capabilities.d)();setIsMlEnabledInSpace(mlFeatureEnabledInSpace)}catch(e){e.mlFeatureEnabledInSpace&&!1===e.isPlatinumOrTrialLicense?setIsPlatinumOrTrialLicense(!1):setAccessDenied(!0)}setInitialized(!0)})()},[]);const ContextWrapper=Object(external_kbnSharedDeps_React_.useCallback)(spacesApi?spacesApi.ui.components.getSpacesContextProvider:getEmptyFunctionComponent,[spacesApi]);if(!1===initialized)return null;const anomalyDetectionJobsUrl=Object(dependency_cache.b)().links.ml.anomalyDetectionJobs,dataFrameAnalyticsUrl=Object(dependency_cache.b)().links.ml.dataFrameAnalytics,anomalyDetectionDocsLabel=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.management.jobsList.anomalyDetectionDocsLabel",{defaultMessage:"Anomaly detection jobs docs"}),analyticsDocsLabel=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.management.jobsList.analyticsDocsLabel",{defaultMessage:"Analytics jobs docs"});return accessDenied?external_kbnSharedDeps_React_default.a.createElement(AccessDeniedPage,null):!1===isPlatinumOrTrialLicense?external_kbnSharedDeps_React_default.a.createElement(InsufficientLicensePage,{basePath:coreStart.http.basePath}):external_kbnSharedDeps_React_default.a.createElement(public_.RedirectAppLinks,{application:coreStart.application},external_kbnSharedDeps_React_default.a.createElement(I18nContext,null,external_kbnSharedDeps_React_default.a.createElement(public_.KibanaContextProvider,{services:{...coreStart,share:share,mlServices:Object(application_app.getMlGlobalServices)(coreStart.http)}},external_kbnSharedDeps_React_default.a.createElement(ContextWrapper,{feature:app.e},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ReactRouterDom_.Router,{history:history},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContent,{id:"kibanaManagementMLSection","data-test-subj":"mlPageStackManagementJobsList"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"l"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{alignItems:"center",justifyContent:"spaceBetween"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement("h1",null,external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.management.jobsList.jobsListTitle",{defaultMessage:"Machine Learning Jobs"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,{target:"_blank",iconType:"help",iconSide:"left",color:"primary",href:"anomaly_detection_jobs"===currentTabId?anomalyDetectionJobsUrl:dataFrameAnalyticsUrl},"anomaly_detection_jobs"===currentTabId?anomalyDetectionDocsLabel:analyticsDocsLabel)))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"s"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{color:"subdued"},external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.management.jobsList.jobsListTagline",{defaultMessage:"View machine learning analytics and anomaly detection jobs."}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"l"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContentBody,null,spacesEnabled&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,{onClick:()=>setShowSyncFlyout(!0)},external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.management.jobsList.syncFlyoutButton",{defaultMessage:"Synchronize saved objects"})),showSyncFlyout&&external_kbnSharedDeps_React_default.a.createElement(JobSpacesSyncFlyout,{onClose:function(){setShowSyncFlyout(!1)}}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTabbedContent,{onTabClick:({id:id})=>{setCurrentTabId(id)},size:"s",tabs:tabs,initialSelectedTab:tabs[0]}))))))))};__webpack_require__(815);async function mountApp(core,params){const[coreStart,pluginsStart]=await core.getStartServices();return Object(dependency_cache.l)({docLinks:coreStart.docLinks,basePath:coreStart.http.basePath,http:coreStart.http,i18n:coreStart.i18n}),params.setBreadcrumbs([{text:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.ml.jobsList.breadcrumb",{defaultMessage:"Jobs"}),href:"#/management/ml/jobs_list"}]),((element,history,coreStart,share,spacesApi)=>(external_kbnSharedDeps_ReactDom_default.a.render(external_kbnSharedDeps_React_default.a.createElement(JobsListPage,{coreStart:coreStart,history:history,share:share,spacesApi:spacesApi}),element),()=>{Object(external_kbnSharedDeps_ReactDom_.unmountComponentAtNode)(element),Object(dependency_cache.a)()}))(params.element,params.history,coreStart,pluginsStart.share,pluginsStart.spaces)}},815:function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(816);case"v7light":return __webpack_require__(818);case"v8dark":return __webpack_require__(820);case"v8light":return __webpack_require__(822)}},816:function(module,exports,__webpack_require__){var api=__webpack_require__(65),content=__webpack_require__(817);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},817:function(module,exports,__webpack_require__){(exports=__webpack_require__(66)(!1)).push([module.i,"#kibanaManagementMLSection .stat{margin-right:8px}#kibanaManagementMLSection .stat .stat-value{font-weight:bold}#kibanaManagementMLSection .mlStatsBar{height:42px;padding:14px;background-color:#25262E}#kibanaManagementMLSection .managementJobsList{clear:both}#kibanaManagementMLSection .tab-contents{margin:-8px;padding:8px;background-color:#1D1E24}#kibanaManagementMLSection .tab-contents .col-md-6:nth-child(1){padding-right:7px}#kibanaManagementMLSection .tab-contents .col-md-6:nth-child(2){padding-left:7px}#kibanaManagementMLSection .tab-contents .job-section{overflow:auto;padding:5px 15px;background-color:#25262E;border:1px solid #343741;border-radius:4px;margin:4px 0}#kibanaManagementMLSection .tab-contents .job-section .euiTable{background-color:transparent}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:first-child .euiTableRowCell{border-top:0}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:last-child .euiTableRowCell{border-bottom:0}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow .euiTableRowCell{vertical-align:top;border-bottom:1px solid #343741}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow .euiTableRowCell .euiTableCellContent__text{word-wrap:break-word}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:hover{background-color:inherit}#kibanaManagementMLSection .tab-contents .job-section .job-item{font-size:12px}#kibanaManagementMLSection .tab-contents .job-section .job-item.header{font-weight:bold}#kibanaManagementMLSection .tab-contents .json-textarea{height:500px}#kibanaManagementMLSection .job-messages-table{max-height:500px;overflow:auto;text-align:left}#kibanaManagementMLSection .job-messages-table tr:last-child td{border-bottom:none}#kibanaManagementMLSection .job-messages-table .euiTableRowCell{background-color:#1D1E24}#kibanaManagementMLSection .mlAnalyticsTable .euiTableRow-isExpandedRow .euiTableCellContent{animation:none !important}#kibanaManagementMLSection .mlAnalyticsTable .euiTableRow-isExpandedRow .euiTableCellContent .euiTableCellContent__text{width:100%}#kibanaManagementMLSection .mlAnalyticsTable .euiIcon-isLoaded{animation:none !important}#kibanaManagementMLSection .mlTaskStateBadge{max-width:100px}#kibanaManagementMLSection .mlKibanaManagement__analyticsSpacer{clear:both}#kibanaManagementMLSection .mlKibanaManagement__analyticsRefreshButton{float:right}\n",""]),module.exports=exports},818:function(module,exports,__webpack_require__){var api=__webpack_require__(65),content=__webpack_require__(819);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},819:function(module,exports,__webpack_require__){(exports=__webpack_require__(66)(!1)).push([module.i,"#kibanaManagementMLSection .stat{margin-right:8px}#kibanaManagementMLSection .stat .stat-value{font-weight:bold}#kibanaManagementMLSection .mlStatsBar{height:42px;padding:14px;background-color:#F5F7FA}#kibanaManagementMLSection .managementJobsList{clear:both}#kibanaManagementMLSection .tab-contents{margin:-8px;padding:8px;background-color:#fff}#kibanaManagementMLSection .tab-contents .col-md-6:nth-child(1){padding-right:7px}#kibanaManagementMLSection .tab-contents .col-md-6:nth-child(2){padding-left:7px}#kibanaManagementMLSection .tab-contents .job-section{overflow:auto;padding:5px 15px;background-color:#F5F7FA;border:1px solid #D3DAE6;border-radius:4px;margin:4px 0}#kibanaManagementMLSection .tab-contents .job-section .euiTable{background-color:transparent}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:first-child .euiTableRowCell{border-top:0}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:last-child .euiTableRowCell{border-bottom:0}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow .euiTableRowCell{vertical-align:top;border-bottom:1px solid #D3DAE6}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow .euiTableRowCell .euiTableCellContent__text{word-wrap:break-word}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:hover{background-color:inherit}#kibanaManagementMLSection .tab-contents .job-section .job-item{font-size:12px}#kibanaManagementMLSection .tab-contents .job-section .job-item.header{font-weight:bold}#kibanaManagementMLSection .tab-contents .json-textarea{height:500px}#kibanaManagementMLSection .job-messages-table{max-height:500px;overflow:auto;text-align:left}#kibanaManagementMLSection .job-messages-table tr:last-child td{border-bottom:none}#kibanaManagementMLSection .job-messages-table .euiTableRowCell{background-color:#fff}#kibanaManagementMLSection .mlAnalyticsTable .euiTableRow-isExpandedRow .euiTableCellContent{animation:none !important}#kibanaManagementMLSection .mlAnalyticsTable .euiTableRow-isExpandedRow .euiTableCellContent .euiTableCellContent__text{width:100%}#kibanaManagementMLSection .mlAnalyticsTable .euiIcon-isLoaded{animation:none !important}#kibanaManagementMLSection .mlTaskStateBadge{max-width:100px}#kibanaManagementMLSection .mlKibanaManagement__analyticsSpacer{clear:both}#kibanaManagementMLSection .mlKibanaManagement__analyticsRefreshButton{float:right}\n",""]),module.exports=exports},820:function(module,exports,__webpack_require__){var api=__webpack_require__(65),content=__webpack_require__(821);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},821:function(module,exports,__webpack_require__){(exports=__webpack_require__(66)(!1)).push([module.i,"#kibanaManagementMLSection .stat{margin-right:8px}#kibanaManagementMLSection .stat .stat-value{font-weight:bold}#kibanaManagementMLSection .mlStatsBar{height:42px;padding:14px;background-color:#25262E}#kibanaManagementMLSection .managementJobsList{clear:both}#kibanaManagementMLSection .tab-contents{margin:-8px;padding:8px;background-color:#1D1E24}#kibanaManagementMLSection .tab-contents .col-md-6:nth-child(1){padding-right:7px}#kibanaManagementMLSection .tab-contents .col-md-6:nth-child(2){padding-left:7px}#kibanaManagementMLSection .tab-contents .job-section{overflow:auto;padding:5px 15px;background-color:#25262E;border:1px solid #343741;border-radius:6px;margin:4px 0}#kibanaManagementMLSection .tab-contents .job-section .euiTable{background-color:transparent}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:first-child .euiTableRowCell{border-top:0}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:last-child .euiTableRowCell{border-bottom:0}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow .euiTableRowCell{vertical-align:top;border-bottom:1px solid #343741}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow .euiTableRowCell .euiTableCellContent__text{word-wrap:break-word}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:hover{background-color:inherit}#kibanaManagementMLSection .tab-contents .job-section .job-item{font-size:12px}#kibanaManagementMLSection .tab-contents .job-section .job-item.header{font-weight:bold}#kibanaManagementMLSection .tab-contents .json-textarea{height:500px}#kibanaManagementMLSection .job-messages-table{max-height:500px;overflow:auto;text-align:left}#kibanaManagementMLSection .job-messages-table tr:last-child td{border-bottom:none}#kibanaManagementMLSection .job-messages-table .euiTableRowCell{background-color:#1D1E24}#kibanaManagementMLSection .mlAnalyticsTable .euiTableRow-isExpandedRow .euiTableCellContent{animation:none !important}#kibanaManagementMLSection .mlAnalyticsTable .euiTableRow-isExpandedRow .euiTableCellContent .euiTableCellContent__text{width:100%}#kibanaManagementMLSection .mlAnalyticsTable .euiIcon-isLoaded{animation:none !important}#kibanaManagementMLSection .mlTaskStateBadge{max-width:100px}#kibanaManagementMLSection .mlKibanaManagement__analyticsSpacer{clear:both}#kibanaManagementMLSection .mlKibanaManagement__analyticsRefreshButton{float:right}\n",""]),module.exports=exports},822:function(module,exports,__webpack_require__){var api=__webpack_require__(65),content=__webpack_require__(823);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},823:function(module,exports,__webpack_require__){(exports=__webpack_require__(66)(!1)).push([module.i,"#kibanaManagementMLSection .stat{margin-right:8px}#kibanaManagementMLSection .stat .stat-value{font-weight:bold}#kibanaManagementMLSection .mlStatsBar{height:42px;padding:14px;background-color:#F5F7FA}#kibanaManagementMLSection .managementJobsList{clear:both}#kibanaManagementMLSection .tab-contents{margin:-8px;padding:8px;background-color:#fff}#kibanaManagementMLSection .tab-contents .col-md-6:nth-child(1){padding-right:7px}#kibanaManagementMLSection .tab-contents .col-md-6:nth-child(2){padding-left:7px}#kibanaManagementMLSection .tab-contents .job-section{overflow:auto;padding:5px 15px;background-color:#F5F7FA;border:1px solid #D3DAE6;border-radius:6px;margin:4px 0}#kibanaManagementMLSection .tab-contents .job-section .euiTable{background-color:transparent}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:first-child .euiTableRowCell{border-top:0}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:last-child .euiTableRowCell{border-bottom:0}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow .euiTableRowCell{vertical-align:top;border-bottom:1px solid #D3DAE6}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow .euiTableRowCell .euiTableCellContent__text{word-wrap:break-word}#kibanaManagementMLSection .tab-contents .job-section .euiTable .euiTableRow:hover{background-color:inherit}#kibanaManagementMLSection .tab-contents .job-section .job-item{font-size:12px}#kibanaManagementMLSection .tab-contents .job-section .job-item.header{font-weight:bold}#kibanaManagementMLSection .tab-contents .json-textarea{height:500px}#kibanaManagementMLSection .job-messages-table{max-height:500px;overflow:auto;text-align:left}#kibanaManagementMLSection .job-messages-table tr:last-child td{border-bottom:none}#kibanaManagementMLSection .job-messages-table .euiTableRowCell{background-color:#fff}#kibanaManagementMLSection .mlAnalyticsTable .euiTableRow-isExpandedRow .euiTableCellContent{animation:none !important}#kibanaManagementMLSection .mlAnalyticsTable .euiTableRow-isExpandedRow .euiTableCellContent .euiTableCellContent__text{width:100%}#kibanaManagementMLSection .mlAnalyticsTable .euiIcon-isLoaded{animation:none !important}#kibanaManagementMLSection .mlTaskStateBadge{max-width:100px}#kibanaManagementMLSection .mlKibanaManagement__analyticsSpacer{clear:both}#kibanaManagementMLSection .mlKibanaManagement__analyticsRefreshButton{float:right}\n",""]),module.exports=exports}}]);