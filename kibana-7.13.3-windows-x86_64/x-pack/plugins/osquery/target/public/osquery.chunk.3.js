/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.osquery_bundle_jsonpfunction=window.osquery_bundle_jsonpfunction||[]).push([[3],{228:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"OsqueryManagedCustomButtonExtension",(function(){return OsqueryManagedCustomButtonExtension}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_navigation_buttons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(61);const OsqueryManagedCustomButtonExtension=react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navigation_buttons__WEBPACK_IMPORTED_MODULE_1__.a,null));OsqueryManagedCustomButtonExtension.displayName="OsqueryManagedCustomButtonExtension"},29:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return public_.KibanaContextProvider})),__webpack_require__.d(__webpack_exports__,"e",(function(){return useRouterNavigate})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isLeftClickEvent})),__webpack_require__.d(__webpack_exports__,"c",(function(){return isModifiedEvent})),__webpack_require__.d(__webpack_exports__,"d",(function(){return useTypedKibana}));var external_kbnSharedDeps_ReactRouterDom_=__webpack_require__(17),public_=__webpack_require__(16);const useTypedKibana=()=>Object(public_.useKibana)(),isModifiedEvent=event=>!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey),isLeftClickEvent=event=>0===event.button,useRouterNavigate=(to,onClickCallback)=>{const history=Object(external_kbnSharedDeps_ReactRouterDom_.useHistory)();return Object(public_.reactRouterNavigate)(history,to,onClickCallback)}},61:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return NavigationButtons}));var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(29);const NavigationButtonsComponent=({isDisabled:isDisabled,integrationPolicyId:integrationPolicyId,agentPolicyId:agentPolicyId})=>{const{application:{getUrlForApp:getUrlForApp,navigateToApp:navigateToApp}}=Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__.d)().services,liveQueryHref=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>getUrlForApp("osquery",{path:agentPolicyId?"/live_queries/new?agentPolicyId="+agentPolicyId:" `/live_queries/new"}),[agentPolicyId,getUrlForApp]),liveQueryClick=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(event=>{!Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__.c)(event)&&Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__.b)(event)&&(event.preventDefault(),navigateToApp("osquery",{path:agentPolicyId?"/live_queries/new?agentPolicyId="+agentPolicyId:" `/live_queries/new"}))},[agentPolicyId,navigateToApp]),scheduleQueryGroupsHref=getUrlForApp("osquery",{path:integrationPolicyId?`/scheduled_query_groups/${integrationPolicyId}/edit`:"/scheduled_query_groups"}),scheduleQueryGroupsClick=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(event=>{!Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__.c)(event)&&Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__.b)(event)&&(event.preventDefault(),navigateToApp("osquery",{path:integrationPolicyId?`/scheduled_query_groups/${integrationPolicyId}/edit`:"/scheduled_query_groups"}))},[navigateToApp,integrationPolicyId]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFlexGroup,{gutterSize:"l"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiCard,{icon:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiIcon,{size:"xl",type:"console"}),title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.osquery.fleetIntegration.runLiveQueriesButtonText",{defaultMessage:"Run live queries"}),href:liveQueryHref,onClick:liveQueryClick,description:"",isDisabled:isDisabled})),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiCard,{icon:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiIcon,{size:"xl",type:"clock"}),title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.osquery.fleetIntegration.scheduleQueryGroupsButtonText",{defaultMessage:"Schedule query groups"}),description:"",isDisabled:isDisabled,href:scheduleQueryGroupsHref,onClick:scheduleQueryGroupsClick})))};NavigationButtonsComponent.displayName="NavigationButtonsComponent";const NavigationButtons=react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(NavigationButtonsComponent)}}]);