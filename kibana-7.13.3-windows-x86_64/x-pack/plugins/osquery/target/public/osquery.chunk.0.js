/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.osquery_bundle_jsonpfunction=window.osquery_bundle_jsonpfunction||[]).push([[0],{227:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"OsqueryManagedPolicyCreateImportExtension",(function(){return OsqueryManagedPolicyCreateImportExtension}));var lodash_fp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(17),immer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(43),_kbn_i18n__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13),_fleet_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_fleet_public__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(22),_scheduled_query_groups_scheduled_query_group_queries_table__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(48),_common_lib_kibana__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(29),_navigation_buttons__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(61);const OsqueryManagedPolicyCreateImportExtension=react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(({onChange:onChange,policy:policy,newPolicy:newPolicy})=>{var _agentPolicy$name;const[policyAgentsCount,setPolicyAgentsCount]=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),[agentPolicy,setAgentPolicy]=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),[editMode]=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!!policy),{application:{getUrlForApp:getUrlForApp},http:http}=Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_9__.d)().services,{state:locationState}=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)(),{replace:replace,go:go}=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)(),agentsLinkHref=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>null!=policy&&policy.policy_id?getUrlForApp("fleet",{path:"#"+_fleet_public__WEBPACK_IMPORTED_MODULE_7__.pagePathGetters.policy_details({policyId:null==policy?void 0:policy.policy_id})+"?openEnrollmentFlyout=true"}):"#",[getUrlForApp,null==policy?void 0:policy.policy_id]);Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(editMode&&null===policyAgentsCount){const fetchAgentPolicyDetails=async()=>{if(null!=policy&&policy.policy_id)try{const response=await http.fetch(_fleet_common__WEBPACK_IMPORTED_MODULE_6__.agentPolicyRouteService.getInfoPath(null==policy?void 0:policy.policy_id));response.item&&setAgentPolicy(response.item)}catch(e){}};(async()=>{try{const response=await http.fetch(_fleet_common__WEBPACK_IMPORTED_MODULE_6__.agentRouteService.getStatusPath(),{query:{policyId:null==policy?void 0:policy.policy_id}});response.results&&setPolicyAgentsCount(response.results.total)}catch(e){}})(),fetchAgentPolicyDetails()}},[editMode,http,null==policy?void 0:policy.policy_id,policyAgentsCount]),Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{editMode&&null!=locationState&&locationState.forceRefresh&&go(0)},[editMode,go,locationState]),Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(!editMode){const updatedPolicy=Object(immer__WEBPACK_IMPORTED_MODULE_4__.produce)(newPolicy,draft=>(draft.inputs[0].streams=[],draft));onChange({isValid:!0,updatedPolicy:updatedPolicy})}},[]),Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{editMode||replace({state:{onSaveNavigateTo:newPackagePolicy=>["fleet",{path:"#"+_fleet_public__WEBPACK_IMPORTED_MODULE_7__.pagePathGetters.integration_policy_edit({packagePolicyId:newPackagePolicy.id}),state:{forceRefresh:!0}}]}})},[editMode,replace]);const scheduledQueryGroupTableData=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>Object(immer__WEBPACK_IMPORTED_MODULE_4__.produce)(newPolicy,draft=>(draft.inputs[0].streams=Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__.filter)(["compiled_stream.id",null],draft.inputs[0].streams),draft)),[newPolicy]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,editMode?null:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiCallOut,{title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_5__.i18n.translate("xpack.osquery.fleetIntegration.saveIntegrationCalloutTitle",{defaultMessage:"Save the integration to access the options below"}),iconType:"save"}))),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,null)),0===policyAgentsCount?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiCallOut,{title:"No agents in the policy",color:"warning",iconType:"help"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p",null,"Fleet has detected that you have not assigned yet any agent to the ",react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiLink,{href:agentsLinkHref},null!==(_agentPolicy$name=null==agentPolicy?void 0:agentPolicy.name)&&void 0!==_agentPolicy$name?_agentPolicy$name:null==policy?void 0:policy.policy_id),". ",react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong",null,"Only agents within the policy with active Osquery Manager integration support the functionality presented below."))))),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,null)):null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_navigation_buttons__WEBPACK_IMPORTED_MODULE_10__.a,{isDisabled:!editMode,integrationPolicyId:null==policy?void 0:policy.id,agentPolicyId:null==policy?void 0:policy.policy_id}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,null),editMode&&scheduledQueryGroupTableData.inputs[0].streams.length?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_scheduled_query_groups_scheduled_query_group_queries_table__WEBPACK_IMPORTED_MODULE_8__.a,{data:scheduledQueryGroupTableData}))):null)});OsqueryManagedPolicyCreateImportExtension.displayName="OsqueryManagedPolicyCreateImportExtension"},29:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return public_.KibanaContextProvider})),__webpack_require__.d(__webpack_exports__,"e",(function(){return useRouterNavigate})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isLeftClickEvent})),__webpack_require__.d(__webpack_exports__,"c",(function(){return isModifiedEvent})),__webpack_require__.d(__webpack_exports__,"d",(function(){return useTypedKibana}));var external_kbnSharedDeps_ReactRouterDom_=__webpack_require__(17),public_=__webpack_require__(16);const useTypedKibana=()=>Object(public_.useKibana)(),isModifiedEvent=event=>!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey),isLeftClickEvent=event=>0===event.button,useRouterNavigate=(to,onClickCallback)=>{const history=Object(external_kbnSharedDeps_ReactRouterDom_.useHistory)();return Object(public_.reactRouterNavigate)(history,to,onClickCallback)}},43:function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(60)},48:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return ViewResultsActionButtonType})),__webpack_require__.d(__webpack_exports__,"d",(function(){return ViewResultsInLensAction})),__webpack_require__.d(__webpack_exports__,"c",(function(){return ViewResultsInDiscoverAction})),__webpack_require__.d(__webpack_exports__,"a",(function(){return ScheduledQueryGroupQueriesTable}));var lodash_fp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_elastic_eui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),_src_plugins_data_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(23),_common_lib_kibana__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(29);let ViewResultsActionButtonType;function getLensAttributes(actionId){return{visualizationType:"lnsPie",title:`Action ${actionId} results`,references:[{id:"logs-*",name:"indexpattern-datasource-current-indexpattern",type:"index-pattern"},{id:"logs-*",name:"indexpattern-datasource-layer-layer1",type:"index-pattern"},{name:"filter-index-pattern-0",id:"logs-*",type:"index-pattern"}],state:{datasourceStates:{indexpattern:{layers:{layer1:{columnOrder:["8690befd-fd69-4246-af4a-dd485d2a3b38","ed999e9d-204c-465b-897f-fe1a125b39ed"],columns:{"8690befd-fd69-4246-af4a-dd485d2a3b38":{sourceField:"type",isBucketed:!0,dataType:"string",scale:"ordinal",operationType:"terms",label:"Top values of type",params:{otherBucket:!0,size:5,missingBucket:!1,orderBy:{columnId:"ed999e9d-204c-465b-897f-fe1a125b39ed",type:"column"},orderDirection:"desc"}},"ed999e9d-204c-465b-897f-fe1a125b39ed":{sourceField:"Records",isBucketed:!1,dataType:"number",scale:"ratio",operationType:"count",label:"Count of records"}},incompleteColumns:{}}}}},filters:[{$state:{store:_src_plugins_data_common__WEBPACK_IMPORTED_MODULE_5__.FilterStateStore.APP_STATE},meta:{indexRefName:"filter-index-pattern-0",negate:!1,alias:null,disabled:!1,params:{query:actionId},type:"phrase",key:"action_id"},query:{match_phrase:{action_id:actionId}}}],query:{language:"kuery",query:""},visualization:{shape:"pie",layers:[{legendDisplay:"default",nestedLegend:!1,layerId:"layer1",metric:"ed999e9d-204c-465b-897f-fe1a125b39ed",numberDisplay:"percent",groups:["8690befd-fd69-4246-af4a-dd485d2a3b38"],categoryDisplay:"default"}]}}}}!function(ViewResultsActionButtonType){ViewResultsActionButtonType.icon="icon",ViewResultsActionButtonType.button="button"}(ViewResultsActionButtonType||(ViewResultsActionButtonType={}));const ViewResultsInLensActionComponent=({actionId:actionId,buttonType:buttonType,endDate:endDate,startDate:startDate})=>{const lensService=Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_6__.d)().services.lens,handleClick=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event=>{const openInNewWindow=!(!Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_6__.c)(event)&&Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_6__.b)(event));event.preventDefault(),null==lensService||lensService.navigateToPrefilledEditor({id:"",timeRange:{from:null!=startDate?startDate:"now-1d",to:null!=endDate?endDate:"now",mode:startDate||endDate?"absolute":"relative"},attributes:getLensAttributes(actionId)},openInNewWindow)},[actionId,endDate,lensService,startDate]);return buttonType===ViewResultsActionButtonType.button?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiButtonEmpty,{size:"xs",iconType:"lensApp",onClick:handleClick,disabled:!(null!=lensService&&lensService.canUseEditor())},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage,{id:"xpack.osquery.scheduledQueryGroup.queriesTable.viewLensResultsActionAriaLabel",defaultMessage:"View results in Lens"})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiToolTip,{content:_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("xpack.osquery.scheduledQueryGroup.queriesTable.viewLensResultsActionAriaLabel",{defaultMessage:"View results in Lens"})},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiButtonIcon,{iconType:"lensApp",disabled:!(null!=lensService&&lensService.canUseEditor()),onClick:handleClick,"aria-label":_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("xpack.osquery.scheduledQueryGroup.queriesTable.viewLensResultsActionAriaLabel",{defaultMessage:"View results in Lens"})}))},ViewResultsInLensAction=react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ViewResultsInLensActionComponent),ViewResultsInDiscoverActionComponent=({actionId:actionId,buttonType:buttonType,endDate:endDate,startDate:startDate})=>{var _useKibana$services$d;const urlGenerator=null===(_useKibana$services$d=Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_6__.d)().services.discover)||void 0===_useKibana$services$d?void 0:_useKibana$services$d.urlGenerator,[discoverUrl,setDiscoverUrl]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{(async()=>{if(null==urlGenerator||!urlGenerator.createUrl)return;const newUrl=await urlGenerator.createUrl({indexPatternId:"logs-*",filters:[{meta:{index:"logs-*",alias:null,negate:!1,disabled:!1,type:"phrase",key:"action_id",params:{query:actionId}},query:{match_phrase:{action_id:actionId}},$state:{store:_src_plugins_data_common__WEBPACK_IMPORTED_MODULE_5__.FilterStateStore.APP_STATE}}],refreshInterval:{pause:!0,value:0},timeRange:startDate&&endDate?{to:endDate,from:startDate,mode:"absolute"}:{to:"now",from:"now-15m",mode:"relative"}});setDiscoverUrl(newUrl)})()},[actionId,endDate,startDate,urlGenerator]),buttonType===ViewResultsActionButtonType.button?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiButtonEmpty,{size:"xs",iconType:"discoverApp",href:discoverUrl},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage,{id:"xpack.osquery.scheduledQueryGroup.queriesTable.viewDiscoverResultsActionAriaLabel",defaultMessage:"View results in Discover"})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiToolTip,{content:_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("xpack.osquery.scheduledQueryGroup.queriesTable.viewDiscoverResultsActionAriaLabel",{defaultMessage:"View results in Discover"})},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiButtonIcon,{iconType:"discoverApp",href:discoverUrl,"aria-label":_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("xpack.osquery.scheduledQueryGroup.queriesTable.viewDiscoverResultsActionAriaLabel",{defaultMessage:"View results in Discover"})}))},ViewResultsInDiscoverAction=react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ViewResultsInDiscoverActionComponent),ScheduledQueryGroupQueriesTableComponent=({data:data,editMode:editMode=!1,onDeleteClick:onDeleteClick,onEditClick:onEditClick,selectedItems:selectedItems,setSelectedItems:setSelectedItems})=>{const renderDeleteAction=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(item=>{var _item$vars;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiButtonIcon,{color:"danger",onClick:()=>onDeleteClick(item),iconType:"trash","aria-label":_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("xpack.osquery.scheduledQueryGroup.queriesTable.deleteActionAriaLabel",{defaultMessage:"Delete {queryName}",values:{queryName:null===(_item$vars=item.vars)||void 0===_item$vars?void 0:_item$vars.id.value}})})},[onDeleteClick]),renderEditAction=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(item=>{var _item$vars2;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiButtonIcon,{color:"primary",onClick:()=>onEditClick(item),iconType:"pencil","aria-label":_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("xpack.osquery.scheduledQueryGroup.queriesTable.editActionAriaLabel",{defaultMessage:"Edit {queryName}",values:{queryName:null===(_item$vars2=item.vars)||void 0===_item$vars2?void 0:_item$vars2.id.value}})})},[onEditClick]),renderQueryColumn=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(query=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiCodeBlock,{language:"sql",fontSize:"s",paddingSize:"none",transparentBackground:!0},query),[]),renderDiscoverResultsAction=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(item=>{var _item$vars3;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ViewResultsInDiscoverAction,{actionId:null===(_item$vars3=item.vars)||void 0===_item$vars3?void 0:_item$vars3.id.value,buttonType:ViewResultsActionButtonType.icon})},[]),renderLensResultsAction=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(item=>{var _item$vars4;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ViewResultsInLensAction,{actionId:null===(_item$vars4=item.vars)||void 0===_item$vars4?void 0:_item$vars4.id.value,buttonType:ViewResultsActionButtonType.icon})},[]),columns=Object(react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[{field:"vars.id.value",name:_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("xpack.osquery.scheduledQueryGroup.queriesTable.idColumnTitle",{defaultMessage:"ID"}),width:"20%"},{field:"vars.interval.value",name:_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("xpack.osquery.scheduledQueryGroup.queriesTable.intervalColumnTitle",{defaultMessage:"Interval (s)"}),width:"100px"},{field:"vars.query.value",name:_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("xpack.osquery.scheduledQueryGroup.queriesTable.queryColumnTitle",{defaultMessage:"Query"}),render:renderQueryColumn},{name:editMode?_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("xpack.osquery.scheduledQueryGroup.queriesTable.actionsColumnTitle",{defaultMessage:"Actions"}):_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("xpack.osquery.scheduledQueryGroup.queriesTable.viewResultsColumnTitle",{defaultMessage:"View results"}),width:"120px",actions:editMode?[{render:renderEditAction},{render:renderDeleteAction}]:[{render:renderDiscoverResultsAction},{render:renderLensResultsAction}]}],[editMode,renderDeleteAction,renderDiscoverResultsAction,renderEditAction,renderLensResultsAction,renderQueryColumn]),sorting=Object(react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({sort:{field:"vars.id.value",direction:"asc"}}),[]),itemId=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(item=>Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__.get)("vars.id.value",item),[]),selection=Object(react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({onSelectionChange:setSelectedItems,initialSelected:selectedItems}),[selectedItems,setSelectedItems]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiBasicTable,{items:data.inputs[0].streams,itemId:itemId,columns:columns,sorting:sorting,selection:editMode?selection:void 0,isSelectable:editMode})},ScheduledQueryGroupQueriesTable=react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ScheduledQueryGroupQueriesTableComponent)},60:function(module,exports){function t(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function n(t){return!!t&&!!t[H]}function r(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var n=Object.getPrototypeOf(t);return!n||n===Object.prototype}(t)||Array.isArray(t)||!!t[G]||!!t.constructor[G]||c(t)||s(t))}function e(t,n,r){void 0===r&&(r=!1),0===i(t)?(r?Object.keys:Q)(t).forEach((function(e){r&&"symbol"==typeof e||n(e,t[e],t)})):t.forEach((function(r,e){return n(e,r,t)}))}function i(t){var n=t[H];return n?n.t>3?n.t-4:n.t:Array.isArray(t)?1:c(t)?2:s(t)?3:0}function u(t,n){return 2===i(t)?t.has(n):Object.prototype.hasOwnProperty.call(t,n)}function o(t,n){return 2===i(t)?t.get(n):t[n]}function f(t,n,r){var e=i(t);2===e?t.set(n,r):3===e?(t.delete(n),t.add(r)):t[n]=r}function a(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}function c(t){return W&&t instanceof Map}function s(t){return X&&t instanceof Set}function v(t){return t.i||t.u}function p(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var n=T(t);delete n[H];for(var r=Q(n),e=0;e<r.length;e++){var i=r[e],u=n[i];!1===u.writable&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(n[i]={configurable:!0,writable:!0,enumerable:u.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),n)}function l(t,u){return void 0===u&&(u=!1),d(t)||n(t)||!r(t)||(i(t)>1&&(t.set=t.add=t.clear=t.delete=h),Object.freeze(t),u&&e(t,(function(t,n){return l(n,!0)}),!0)),t}function h(){t(2)}function d(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function _(n){var r=U[n];return r||t(18,n),r}function y(t,n){U[t]||(U[t]=n)}function b(){return J}function m(t,n){n&&(_("Patches"),t.o=[],t.s=[],t.v=n)}function j(t){O(t),t.p.forEach(w),t.p=null}function O(t){t===J&&(J=t.l)}function x(t){return J={p:[],l:J,h:t,_:!0,m:0}}function w(t){var n=t[H];0===n.t||1===n.t?n.j():n.O=!0}function S(n,e){e.m=e.p.length;var i=e.p[0],u=void 0!==n&&n!==i;return e.h.S||_("ES5").M(e,n,u),u?(i[H].P&&(j(e),t(4)),r(n)&&(n=M(e,n),e.l||g(e,n)),e.o&&_("Patches").g(i[H],n,e.o,e.s)):n=M(e,i,[]),j(e),e.o&&e.v(e.o,e.s),n!==B?n:void 0}function M(t,n,r){if(d(n))return n;var i=n[H];if(!i)return e(n,(function(e,u){return P(t,i,n,e,u,r)}),!0),n;if(i.A!==t)return n;if(!i.P)return g(t,i.u,!0),i.u;if(!i.R){i.R=!0,i.A.m--;var u=4===i.t||5===i.t?i.i=p(i.k):i.i;e(3===i.t?new Set(u):u,(function(n,e){return P(t,i,u,n,e,r)})),g(t,u,!1),r&&t.o&&_("Patches").F(i,r,t.o,t.s)}return i.i}function P(t,e,i,o,a,c){if(n(a)){var s=M(t,a,c&&e&&3!==e.t&&!u(e.D,o)?c.concat(o):void 0);if(f(i,o,s),!n(s))return;t._=!1}if(r(a)&&!d(a)){if(!t.h.K&&t.m<1)return;M(t,a),e&&e.A.l||g(t,a)}}function g(t,n,r){void 0===r&&(r=!1),t.h.K&&t._&&l(n,r)}function A(t,n){var r=t[H];return(r?v(r):t)[n]}function z(t,n){if(n in t)for(var r=Object.getPrototypeOf(t);r;){var e=Object.getOwnPropertyDescriptor(r,n);if(e)return e;r=Object.getPrototypeOf(r)}}function E(t){t.P||(t.P=!0,t.l&&E(t.l))}function R(t){t.i||(t.i=p(t.u))}function k(t,n,r){var e=c(n)?_("MapSet").$(n,r):s(n)?_("MapSet").C(n,r):t.S?function(t,n){var r=Array.isArray(t),e={t:r?1:0,A:n?n.A:b(),P:!1,R:!1,D:{},l:n,u:t,k:null,i:null,j:null,I:!1},i=e,u=V;r&&(i=[e],u=Y);var o=Proxy.revocable(i,u),f=o.revoke,a=o.proxy;return e.k=a,e.j=f,a}(n,r):_("ES5").J(n,r);return(r?r.A:b()).p.push(e),e}function F(u){return n(u)||t(22,u),function t(n){if(!r(n))return n;var u,a=n[H],c=i(n);if(a){if(!a.P&&(a.t<4||!_("ES5").N(a)))return a.u;a.R=!0,u=D(n,c),a.R=!1}else u=D(n,c);return e(u,(function(n,r){a&&o(a.u,n)===r||f(u,n,t(r))})),3===c?new Set(u):u}(u)}function D(t,n){switch(n){case 2:return new Map(t);case 3:return Array.from(t)}return p(t)}function K(){function t(t,n){var r=f[t];return r?r.enumerable=n:f[t]=r={configurable:!0,enumerable:n,get:function(){return V.get(this[H],t)},set:function(n){V.set(this[H],t,n)}},r}function r(t){for(var n=t.length-1;n>=0;n--){var r=t[n][H];if(!r.P)switch(r.t){case 5:o(r)&&E(r);break;case 4:i(r)&&E(r)}}}function i(t){for(var n=t.u,r=t.k,e=Q(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==H){var f=n[o];if(void 0===f&&!u(n,o))return!0;var c=r[o],s=c&&c[H];if(s?s.u!==f:!a(c,f))return!0}}var v=!!n[H];return e.length!==Q(n).length+(v?0:1)}function o(t){var n=t.k;if(n.length!==t.u.length)return!0;var r=Object.getOwnPropertyDescriptor(n,n.length-1);return!(!r||r.get)}var f={};y("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var u=T(r);delete u[H];for(var o=Q(u),f=0;f<o.length;f++){var a=o[f];u[a]=t(a,n||!!u[a].enumerable)}return Object.create(Object.getPrototypeOf(r),u)}(e,n),u={t:e?5:4,A:r?r.A:b(),P:!1,R:!1,D:{},l:r,u:n,k:i,i:null,O:!1,I:!1};return Object.defineProperty(i,H,{value:u,writable:!0}),i},M:function(t,i,f){f?n(i)&&i[H].A===t&&r(t.p):(t.o&&function t(n){if(n&&"object"==typeof n){var r=n[H];if(r){var i=r.u,f=r.k,a=r.D,c=r.t;if(4===c)e(f,(function(n){n!==H&&(void 0!==i[n]||u(i,n)?a[n]||t(f[n]):(a[n]=!0,E(r)))})),e(i,(function(t){void 0!==f[t]||u(f,t)||(a[t]=!1,E(r))}));else if(5===c){if(o(r)&&(E(r),a.length=!0),f.length<i.length)for(var s=f.length;s<i.length;s++)a[s]=!1;else for(var v=i.length;v<f.length;v++)a[v]=!0;for(var p=Math.min(f.length,i.length),l=0;l<p;l++)void 0===a[l]&&t(f[l])}}}}(t.p[0]),r(t.p))},N:function(t){return 4===t.t?i(t):o(t)}})}function $(){function f(t){if(!r(t))return t;if(Array.isArray(t))return t.map(f);if(c(t))return new Map(Array.from(t.entries()).map((function(t){return[t[0],f(t[1])]})));if(s(t))return new Set(Array.from(t).map(f));var n=Object.create(Object.getPrototypeOf(t));for(var e in t)n[e]=f(t[e]);return n}function a(t){return n(t)?f(t):t}var v="add";y("Patches",{W:function(n,r){return r.forEach((function(r){for(var e=r.path,u=r.op,a=n,c=0;c<e.length-1;c++){var s=i(a),p=e[c];0!==s&&1!==s||"__proto__"!==p&&"constructor"!==p||t(24),"function"==typeof a&&"prototype"===p&&t(24),"object"!=typeof(a=o(a,p))&&t(15,e.join("/"))}var l=i(a),h=f(r.value),d=e[e.length-1];switch(u){case"replace":switch(l){case 2:return a.set(d,h);case 3:t(16);default:return a[d]=h}case v:switch(l){case 1:return a.splice(d,0,h);case 2:return a.set(d,h);case 3:return a.add(h);default:return a[d]=h}case"remove":switch(l){case 1:return a.splice(d,1);case 2:return a.delete(d);case 3:return a.delete(r.value);default:return delete a[d]}default:t(17,u)}})),n},F:function(t,n,r,i){switch(t.t){case 0:case 4:case 2:return function(t,n,r,i){var f=t.u,c=t.i;e(t.D,(function(t,e){var s=o(f,t),p=o(c,t),l=e?u(f,t)?"replace":v:"remove";if(s!==p||"replace"!==l){var h=n.concat(t);r.push("remove"===l?{op:l,path:h}:{op:l,path:h,value:p}),i.push(l===v?{op:"remove",path:h}:"remove"===l?{op:v,path:h,value:a(s)}:{op:"replace",path:h,value:a(s)})}}))}(t,n,r,i);case 5:case 1:return function(t,n,r,e){var i=t.u,u=t.D,o=t.i;if(o.length<i.length){var f=[o,i];i=f[0],o=f[1];var c=[e,r];r=c[0],e=c[1]}for(var s=0;s<i.length;s++)if(u[s]&&o[s]!==i[s]){var p=n.concat([s]);r.push({op:"replace",path:p,value:a(o[s])}),e.push({op:"replace",path:p,value:a(i[s])})}for(var l=i.length;l<o.length;l++){var h=n.concat([l]);r.push({op:v,path:h,value:a(o[l])})}i.length<o.length&&e.push({op:"replace",path:n.concat(["length"]),value:i.length})}(t,n,r,i);case 3:return function(t,n,r,e){var i=t.u,u=t.i,o=0;i.forEach((function(t){if(!u.has(t)){var i=n.concat([o]);r.push({op:"remove",path:i,value:t}),e.unshift({op:v,path:i,value:t})}o++})),o=0,u.forEach((function(t){if(!i.has(t)){var u=n.concat([o]);r.push({op:v,path:u,value:t}),e.unshift({op:"remove",path:u,value:t})}o++}))}(t,n,r,i)}},g:function(t,n,r,e){r.push({op:"replace",path:[],value:n}),e.push({op:"replace",path:[],value:t.u})}})}function C(){function n(t,n){function r(){this.constructor=t}f(t,n),t.prototype=(r.prototype=n.prototype,new r)}function i(t){t.i||(t.D=new Map,t.i=new Map(t.u))}function u(t){t.i||(t.i=new Set,t.u.forEach((function(n){if(r(n)){var e=k(t.A.h,n,t);t.p.set(n,e),t.i.add(e)}else t.i.add(n)})))}function o(n){n.O&&t(3,JSON.stringify(v(n)))}var f=function(t,n){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)},a=function(){function t(t,n){return this[H]={t:2,l:n,A:n?n.A:b(),P:!1,R:!1,i:void 0,D:void 0,u:t,k:this,I:!1,O:!1},this}n(t,Map);var u=t.prototype;return Object.defineProperty(u,"size",{get:function(){return v(this[H]).size}}),u.has=function(t){return v(this[H]).has(t)},u.set=function(t,n){var r=this[H];return o(r),v(r).has(t)&&v(r).get(t)===n||(i(r),E(r),r.D.set(t,!0),r.i.set(t,n),r.D.set(t,!0)),this},u.delete=function(t){if(!this.has(t))return!1;var n=this[H];return o(n),i(n),E(n),n.D.set(t,!1),n.i.delete(t),!0},u.clear=function(){var t=this[H];o(t),v(t).size&&(i(t),E(t),t.D=new Map,e(t.u,(function(n){t.D.set(n,!1)})),t.i.clear())},u.forEach=function(t,n){var r=this;v(this[H]).forEach((function(e,i){t.call(n,r.get(i),i,r)}))},u.get=function(t){var n=this[H];o(n);var e=v(n).get(t);if(n.R||!r(e))return e;if(e!==n.u.get(t))return e;var u=k(n.A.h,e,n);return i(n),n.i.set(t,u),u},u.keys=function(){return v(this[H]).keys()},u.values=function(){var t,n=this,r=this.keys();return(t={})[L]=function(){return n.values()},t.next=function(){var t=r.next();return t.done?t:{done:!1,value:n.get(t.value)}},t},u.entries=function(){var t,n=this,r=this.keys();return(t={})[L]=function(){return n.entries()},t.next=function(){var t=r.next();if(t.done)return t;var e=n.get(t.value);return{done:!1,value:[t.value,e]}},t},u[L]=function(){return this.entries()},t}(),c=function(){function t(t,n){return this[H]={t:3,l:n,A:n?n.A:b(),P:!1,R:!1,i:void 0,u:t,k:this,p:new Map,O:!1,I:!1},this}n(t,Set);var r=t.prototype;return Object.defineProperty(r,"size",{get:function(){return v(this[H]).size}}),r.has=function(t){var n=this[H];return o(n),n.i?!!n.i.has(t)||!(!n.p.has(t)||!n.i.has(n.p.get(t))):n.u.has(t)},r.add=function(t){var n=this[H];return o(n),this.has(t)||(u(n),E(n),n.i.add(t)),this},r.delete=function(t){if(!this.has(t))return!1;var n=this[H];return o(n),u(n),E(n),n.i.delete(t)||!!n.p.has(t)&&n.i.delete(n.p.get(t))},r.clear=function(){var t=this[H];o(t),v(t).size&&(u(t),E(t),t.i.clear())},r.values=function(){var t=this[H];return o(t),u(t),t.i.values()},r.entries=function(){var t=this[H];return o(t),u(t),t.i.entries()},r.keys=function(){return this.values()},r[L]=function(){return this.values()},r.forEach=function(t,n){for(var r=this.values(),e=r.next();!e.done;)t.call(n,e.value,e.value,this),e=r.next()},t}();y("MapSet",{$:function(t,n){return new a(t,n)},C:function(t,n){return new c(t,n)}})}var I;Object.defineProperty(exports,"__esModule",{value:!0});var J,N="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,X="undefined"!=typeof Set,q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=N?Symbol.for("immer-nothing"):((I={})["immer-nothing"]=!0,I),G=N?Symbol.for("immer-draftable"):"__$immer_draftable",H=N?Symbol.for("immer-state"):"__$immer_state",L="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Q="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,T=Object.getOwnPropertyDescriptors||function(t){var n={};return Q(t).forEach((function(r){n[r]=Object.getOwnPropertyDescriptor(t,r)})),n},U={},V={get:function(t,n){if(n===H)return t;var e=v(t);if(!u(e,n))return function(t,n,r){var e,i=z(n,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(t.k):void 0}(t,e,n);var i=e[n];return t.R||!r(i)?i:i===A(t.u,n)?(R(t),t.i[n]=k(t.A.h,i,t)):i},has:function(t,n){return n in v(t)},ownKeys:function(t){return Reflect.ownKeys(v(t))},set:function(t,n,r){var e=z(v(t),n);if(null==e?void 0:e.set)return e.set.call(t.k,r),!0;if(!t.P){var i=A(v(t),n),o=null==i?void 0:i[H];if(o&&o.u===r)return t.i[n]=r,t.D[n]=!1,!0;if(a(r,i)&&(void 0!==r||u(t.u,n)))return!0;R(t),E(t)}return t.i[n]=r,t.D[n]=!0,!0},deleteProperty:function(t,n){return void 0!==A(t.u,n)||n in t.u?(t.D[n]=!1,R(t),E(t)):delete t.D[n],t.i&&delete t.i[n],!0},getOwnPropertyDescriptor:function(t,n){var r=v(t),e=Reflect.getOwnPropertyDescriptor(r,n);return e?{writable:!0,configurable:1!==t.t||"length"!==n,enumerable:e.enumerable,value:r[n]}:e},defineProperty:function(){t(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.u)},setPrototypeOf:function(){t(12)}},Y={};e(V,(function(t,n){Y[t]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}})),Y.deleteProperty=function(t,n){return V.deleteProperty.call(this,t[0],n)},Y.set=function(t,n,r){return V.set.call(this,t[0],n,r,t[0])};var Z=function(){function e(t){this.S=q,this.K=!0,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var i=e.prototype;return i.produce=function(n,e,i){if("function"==typeof n&&"function"!=typeof e){var u=e;e=n;var o=this;return function(t){var n=this;void 0===t&&(t=u);for(var r=arguments.length,i=Array(r>1?r-1:0),f=1;f<r;f++)i[f-1]=arguments[f];return o.produce(t,(function(t){var r;return(r=e).call.apply(r,[n,t].concat(i))}))}}var f;if("function"!=typeof e&&t(6),void 0!==i&&"function"!=typeof i&&t(7),r(n)){var a=x(this),c=k(this,n,void 0),s=!0;try{f=e(c),s=!1}finally{s?j(a):O(a)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(t){return m(a,i),S(t,a)}),(function(t){throw j(a),t})):(m(a,i),S(f,a))}if(!n||"object"!=typeof n){if((f=e(n))===B)return;return void 0===f&&(f=n),this.K&&l(f,!0),f}t(21,n)},i.produceWithPatches=function(t,n){var r,e,i=this;return"function"==typeof t?function(n){for(var r=arguments.length,e=Array(r>1?r-1:0),u=1;u<r;u++)e[u-1]=arguments[u];return i.produceWithPatches(n,(function(n){return t.apply(void 0,[n].concat(e))}))}:[this.produce(t,n,(function(t,n){r=t,e=n})),r,e]},i.createDraft=function(e){r(e)||t(8),n(e)&&(e=F(e));var i=x(this),u=k(this,e,void 0);return u[H].I=!0,O(i),u},i.finishDraft=function(t,n){var r=(t&&t[H]).A;return m(r,n),S(void 0,r)},i.setAutoFreeze=function(t){this.K=t},i.setUseProxies=function(n){n&&!q&&t(20),this.S=n},i.applyPatches=function(t,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){t=i.value;break}}var u=_("Patches").W;return n(t)?u(t,r):this.produce(t,(function(t){return u(t,r.slice(e+1))}))},e}(),tt=new Z,nt=tt.produce,rt=tt.produceWithPatches.bind(tt),et=tt.setAutoFreeze.bind(tt),it=tt.setUseProxies.bind(tt),ut=tt.applyPatches.bind(tt),ot=tt.createDraft.bind(tt),ft=tt.finishDraft.bind(tt);exports.Immer=Z,exports.applyPatches=ut,exports.castDraft=function(t){return t},exports.castImmutable=function(t){return t},exports.createDraft=ot,exports.current=F,exports.default=nt,exports.enableAllPlugins=function(){K(),C(),$()},exports.enableES5=K,exports.enableMapSet=C,exports.enablePatches=$,exports.finishDraft=ft,exports.freeze=l,exports.immerable=G,exports.isDraft=n,exports.isDraftable=r,exports.nothing=B,exports.original=function(r){return n(r)||t(23,r),r[H].u},exports.produce=nt,exports.produceWithPatches=rt,exports.setAutoFreeze=et,exports.setUseProxies=it},61:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return NavigationButtons}));var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(29);const NavigationButtonsComponent=({isDisabled:isDisabled,integrationPolicyId:integrationPolicyId,agentPolicyId:agentPolicyId})=>{const{application:{getUrlForApp:getUrlForApp,navigateToApp:navigateToApp}}=Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__.d)().services,liveQueryHref=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>getUrlForApp("osquery",{path:agentPolicyId?"/live_queries/new?agentPolicyId="+agentPolicyId:" `/live_queries/new"}),[agentPolicyId,getUrlForApp]),liveQueryClick=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(event=>{!Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__.c)(event)&&Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__.b)(event)&&(event.preventDefault(),navigateToApp("osquery",{path:agentPolicyId?"/live_queries/new?agentPolicyId="+agentPolicyId:" `/live_queries/new"}))},[agentPolicyId,navigateToApp]),scheduleQueryGroupsHref=getUrlForApp("osquery",{path:integrationPolicyId?`/scheduled_query_groups/${integrationPolicyId}/edit`:"/scheduled_query_groups"}),scheduleQueryGroupsClick=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(event=>{!Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__.c)(event)&&Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_3__.b)(event)&&(event.preventDefault(),navigateToApp("osquery",{path:integrationPolicyId?`/scheduled_query_groups/${integrationPolicyId}/edit`:"/scheduled_query_groups"}))},[navigateToApp,integrationPolicyId]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFlexGroup,{gutterSize:"l"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiCard,{icon:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiIcon,{size:"xl",type:"console"}),title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.osquery.fleetIntegration.runLiveQueriesButtonText",{defaultMessage:"Run live queries"}),href:liveQueryHref,onClick:liveQueryClick,description:"",isDisabled:isDisabled})),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiCard,{icon:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiIcon,{size:"xl",type:"clock"}),title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.osquery.fleetIntegration.scheduleQueryGroupsButtonText",{defaultMessage:"Schedule query groups"}),description:"",isDisabled:isDisabled,href:scheduleQueryGroupsHref,onClick:scheduleQueryGroupsClick})))};NavigationButtonsComponent.displayName="NavigationButtonsComponent";const NavigationButtons=react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(NavigationButtonsComponent)}}]);