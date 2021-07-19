/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.securitySolution_bundle_jsonpfunction=window.securitySolution_bundle_jsonpfunction||[]).push([[1],{1022:function(module,exports,__webpack_require__){"use strict";function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj};var isArray=Array.isArray||function(xs){return"[object Array]"===Object.prototype.toString.call(xs)}},1023:function(module,exports,__webpack_require__){"use strict";var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj?map(objectKeys(obj),(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return isArray(obj[k])?map(obj[k],(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))})).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))})).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""};var isArray=Array.isArray||function(xs){return"[object Array]"===Object.prototype.toString.call(xs)};function map(xs,f){if(xs.map)return xs.map(f);for(var res=[],i=0;i<xs.length;i++)res.push(f(xs[i],i));return res}var objectKeys=Object.keys||function(obj){var res=[];for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&res.push(key);return res}},109:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",(function(){return useDateFormat})),__webpack_require__.d(__webpack_exports__,"i",(function(){return useTimeZone})),__webpack_require__.d(__webpack_exports__,"c",(function(){return useBasePath})),__webpack_require__.d(__webpack_exports__,"j",(function(){return useToasts})),__webpack_require__.d(__webpack_exports__,"g",(function(){return useHttp})),__webpack_require__.d(__webpack_exports__,"d",(function(){return useCurrentUser})),__webpack_require__.d(__webpack_exports__,"f",(function(){return useGetUserSavedObjectPermissions})),__webpack_require__.d(__webpack_exports__,"a",(function(){return public_.KibanaContextProvider})),__webpack_require__.d(__webpack_exports__,"h",(function(){return useTypedKibana})),__webpack_require__.d(__webpack_exports__,"k",(function(){return public_.useUiSetting})),__webpack_require__.d(__webpack_exports__,"l",(function(){return public_.useUiSetting$})),__webpack_require__.d(__webpack_exports__,"b",(function(){return services.a}));var external_kbnSharedDeps_MomentTimezone_=__webpack_require__(88),external_kbnSharedDeps_MomentTimezone_default=__webpack_require__.n(external_kbnSharedDeps_MomentTimezone_),external_kbnSharedDeps_React_=__webpack_require__(6),external_kbnSharedDeps_KbnI18n_=__webpack_require__(1),constants=__webpack_require__(2),toasters=__webpack_require__(116),utils=__webpack_require__(140),public_=__webpack_require__(79);const useTypedKibana=()=>Object(public_.useKibana)(),useDateFormat=()=>Object(public_.useUiSetting)(constants.r),useTimeZone=()=>{const timeZone=Object(public_.useUiSetting)(constants.s);return"Browser"===timeZone?external_kbnSharedDeps_MomentTimezone_default.a.tz.guess():timeZone},useBasePath=()=>useTypedKibana().services.http.basePath.get(),useToasts=()=>useTypedKibana().services.notifications.toasts,useHttp=()=>useTypedKibana().services.http,useCurrentUser=()=>{const[user,setUser]=Object(external_kbnSharedDeps_React_.useState)(null),[,dispatchToaster]=Object(toasters.h)(),{security:security}=useTypedKibana().services,fetchUser=Object(external_kbnSharedDeps_React_.useCallback)(()=>{let didCancel=!1;return(async()=>{try{if(null!=security){const response=await security.authc.getCurrentUser();didCancel||setUser(Object(utils.c)(response))}else setUser({username:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.securitySolution.getCurrentUser.unknownUser",{defaultMessage:"Unknown"}),email:"",fullName:"",roles:[],enabled:!1,authenticationRealm:{name:"",type:""},lookupRealm:{name:"",type:""},authenticationProvider:""})}catch(error){didCancel||(Object(toasters.g)({title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.securitySolution.getCurrentUser.Error",{defaultMessage:"Error getting user"}),error:error.body&&error.body.message?new Error(error.body.message):error,dispatchToaster:dispatchToaster}),setUser(null))}})(),()=>{didCancel=!0}},[security]);return Object(external_kbnSharedDeps_React_.useEffect)(()=>{fetchUser()},[]),user},useGetUserSavedObjectPermissions=()=>{const[savedObjectsPermissions,setSavedObjectsPermissions]=Object(external_kbnSharedDeps_React_.useState)(null),uiCapabilities=useTypedKibana().services.application.capabilities;return Object(external_kbnSharedDeps_React_.useEffect)(()=>{const capabilitiesCanUserCRUD="boolean"==typeof uiCapabilities.siem.crud&&uiCapabilities.siem.crud,capabilitiesCanUserRead="boolean"==typeof uiCapabilities.siem.show&&uiCapabilities.siem.show;setSavedObjectsPermissions({crud:capabilitiesCanUserCRUD,read:capabilitiesCanUserRead})},[uiCapabilities]),savedObjectsPermissions};var services=__webpack_require__(36)},116:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return displayErrorToast})),__webpack_require__.d(__webpack_exports__,"f",(function(){return displayWarningToast})),__webpack_require__.d(__webpack_exports__,"e",(function(){return displaySuccessToast})),__webpack_require__.d(__webpack_exports__,"g",(function(){return errorToToaster})),__webpack_require__.d(__webpack_exports__,"c",(function(){return ToasterError})),__webpack_require__.d(__webpack_exports__,"h",(function(){return useStateToaster})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ManageGlobalToaster})),__webpack_require__.d(__webpack_exports__,"a",(function(){return GlobalToaster}));var external_kbnSharedDeps_ElasticEui_=__webpack_require__(74),external_kbnSharedDeps_LodashFp_=__webpack_require__(7),external_kbnSharedDeps_React_=__webpack_require__(6),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_StyledComponents_=__webpack_require__(75),external_kbnSharedDeps_StyledComponents_default=__webpack_require__.n(external_kbnSharedDeps_StyledComponents_),external_kbnSharedDeps_KbnI18n_=__webpack_require__(1);const SEE_ALL_ERRORS=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.securitySolution.modalAllErrors.seeAllErrors.button",{defaultMessage:"See the full error(s)"}),TITLE_ERROR_MODAL=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.securitySolution.modalAllErrors.title",{defaultMessage:"Your visualization has error(s)"}),CLOSE_ERROR_MODAL=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.securitySolution.modalAllErrors.close.button",{defaultMessage:"Close"}),ModalAllErrorsComponent=({isShowing:isShowing,toast:toast,toggle:toggle})=>{const handleClose=Object(external_kbnSharedDeps_React_.useCallback)(()=>toggle(toast),[toggle,toast]);return isShowing&&null!=toast?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiModal,{onClose:handleClose},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiModalHeader,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiModalHeaderTitle,null,TITLE_ERROR_MODAL)),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiModalBody,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCallOut,{title:toast.title,color:"danger",size:"s",iconType:"alert"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),Array.isArray(toast.errors)&&toast.errors.map((error,index)=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiAccordion,{key:`${toast.id}-${index}`,id:"accordion1",initialIsOpen:0===index,buttonContent:error.length>100?error.substring(0,100)+" ...":error,"data-test-subj":"modal-all-errors-accordion"},external_kbnSharedDeps_React_default.a.createElement(MyEuiCodeBlock,null,error)))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiModalFooter,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButton,{onClick:handleClose,fill:!0,"data-test-subj":"modal-all-errors-close"},CLOSE_ERROR_MODAL))):null},ModalAllErrors=external_kbnSharedDeps_React_default.a.memo(ModalAllErrorsComponent),MyEuiCodeBlock=external_kbnSharedDeps_StyledComponents_default()(external_kbnSharedDeps_ElasticEui_.EuiCodeBlock).withConfig({displayName:"MyEuiCodeBlock",componentId:"sc-1lr0hx6-0"})(["margin-top:4px;"]);MyEuiCodeBlock.displayName="MyEuiCodeBlock";var uuid=__webpack_require__(19),uuid_default=__webpack_require__.n(uuid);class ToasterError extends Error{constructor(messages){var obj,key,value;super(messages[0]),value=void 0,(key="messages")in(obj=this)?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,this.name="ToasterError",this.messages=messages}}var api=__webpack_require__(161);const displayErrorToast=(errorTitle,errorMessages,dispatchToaster,id=uuid_default.a.v4())=>{dispatchToaster({type:"addToaster",toast:{id:id,title:errorTitle,color:"danger",iconType:"alert",errors:errorMessages}})},displayWarningToast=(title,dispatchToaster,id=uuid_default.a.v4())=>{dispatchToaster({type:"addToaster",toast:{id:id,title:title,color:"warning",iconType:"help"}})},displaySuccessToast=(title,dispatchToaster,id=uuid_default.a.v4())=>{dispatchToaster({type:"addToaster",toast:{id:id,title:title,color:"success",iconType:"check"}})},errorToToaster=({id:id=uuid_default.a.v4(),title:title,error:error,color:color="danger",iconType:iconType="alert",dispatchToaster:dispatchToaster})=>{let toast;toast=(error=>error instanceof ToasterError)(error)?{id:id,title:title,color:color,iconType:iconType,errors:error.messages}:Object(api.a)(error)?{id:id,title:title,color:color,iconType:iconType,errors:[error.body.message]}:Object(external_kbnSharedDeps_LodashFp_.isError)(error)?{id:id,title:title,color:color,iconType:iconType,errors:[error.message]}:{id:id,title:title,color:color,iconType:iconType,errors:["Network Error"]},dispatchToaster({type:"addToaster",toast:toast})},initialToasterState={toasts:[]},StateToasterContext=Object(external_kbnSharedDeps_React_.createContext)([initialToasterState,()=>external_kbnSharedDeps_LodashFp_.noop]),useStateToaster=()=>Object(external_kbnSharedDeps_React_.useContext)(StateToasterContext),ManageGlobalToaster=({children:children})=>external_kbnSharedDeps_React_default.a.createElement(StateToasterContext.Provider,{value:Object(external_kbnSharedDeps_React_.useReducer)((state,action)=>{switch(action.type){case"addToaster":return{...state,toasts:[...state.toasts,action.toast]};case"deleteToaster":return{...state,toasts:state.toasts.filter(msg=>msg.id!==action.id)};default:return state}},initialToasterState)},children),GlobalToasterListContainer=external_kbnSharedDeps_StyledComponents_default.a.div.withConfig({displayName:"GlobalToasterListContainer",componentId:"fvmqid-0"})(["position:absolute;right:0;bottom:0;"]),GlobalToaster=({toastLifeTimeMs:toastLifeTimeMs=5e3})=>{const[{toasts:toasts},dispatch]=useStateToaster(),[isShowing,setIsShowing]=Object(external_kbnSharedDeps_React_.useState)(!1),[toastInModal,setToastInModal]=Object(external_kbnSharedDeps_React_.useState)(null),toggle=toast=>{isShowing?(dispatch({type:"deleteToaster",id:toast.id}),setToastInModal(null)):setToastInModal(toast),setIsShowing(!isShowing)};return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,toasts.length>0&&!isShowing&&external_kbnSharedDeps_React_default.a.createElement(GlobalToasterListContainer,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiGlobalToastList,{toasts:[formatToErrorToastIfNeeded(toasts[0],toggle)],dismissToast:({id:id})=>{dispatch({type:"deleteToaster",id:id})},toastLifeTimeMs:toastLifeTimeMs})),null!=toastInModal&&external_kbnSharedDeps_React_default.a.createElement(ModalAllErrors,{isShowing:isShowing,toast:toastInModal,toggle:toggle}))},formatToErrorToastIfNeeded=(toast,toggle)=>(null!=toast&&null!=toast.errors&&toast.errors.length>0&&(toast.text=external_kbnSharedDeps_React_default.a.createElement(ErrorToastContainer,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButton,{"data-test-subj":"toaster-show-all-error-modal",size:"s",color:"danger",onClick:()=>null!=toast&&toggle(toast)},SEE_ALL_ERRORS))),toast),ErrorToastContainer=external_kbnSharedDeps_StyledComponents_default.a.div.withConfig({displayName:"ErrorToastContainer",componentId:"fvmqid-1"})(["text-align:right;"]);ErrorToastContainer.displayName="ErrorToastContainer"},127:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return ERROR_TITLE})),__webpack_require__.d(__webpack_exports__,"c",(function(){return ERROR_DELETING})),__webpack_require__.d(__webpack_exports__,"j",(function(){return UPDATED_CASE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DELETED_CASES})),__webpack_require__.d(__webpack_exports__,"a",(function(){return CLOSED_CASES})),__webpack_require__.d(__webpack_exports__,"f",(function(){return REOPENED_CASES})),__webpack_require__.d(__webpack_exports__,"e",(function(){return MARK_IN_PROGRESS_CASES})),__webpack_require__.d(__webpack_exports__,"h",(function(){return SUCCESS_SEND_TO_EXTERNAL_SERVICE})),__webpack_require__.d(__webpack_exports__,"i",(function(){return SYNC_CASE})),__webpack_require__.d(__webpack_exports__,"g",(function(){return STATUS_CHANGED_TOASTER_TEXT}));var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);__webpack_require__(34);const ERROR_TITLE=_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.securitySolution.containers.cases.errorTitle",{defaultMessage:"Error fetching data"}),ERROR_DELETING=_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.securitySolution.containers.cases.errorDeletingTitle",{defaultMessage:"Error deleting data"}),UPDATED_CASE=caseTitle=>_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.securitySolution.containers.cases.updatedCase",{values:{caseTitle:caseTitle},defaultMessage:'Updated "{caseTitle}"'}),DELETED_CASES=(totalCases,caseTitle)=>_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.securitySolution.containers.cases.deletedCases",{values:{caseTitle:caseTitle,totalCases:totalCases},defaultMessage:'Deleted {totalCases, plural, =1 {"{caseTitle}"} other {{totalCases} cases}}'}),CLOSED_CASES=({totalCases:totalCases,caseTitle:caseTitle})=>_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.securitySolution.containers.cases.closedCases",{values:{caseTitle:caseTitle,totalCases:totalCases},defaultMessage:'Closed {totalCases, plural, =1 {"{caseTitle}"} other {{totalCases} cases}}'}),REOPENED_CASES=({totalCases:totalCases,caseTitle:caseTitle})=>_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.securitySolution.containers.cases.reopenedCases",{values:{caseTitle:caseTitle,totalCases:totalCases},defaultMessage:'Opened {totalCases, plural, =1 {"{caseTitle}"} other {{totalCases} cases}}'}),MARK_IN_PROGRESS_CASES=({totalCases:totalCases,caseTitle:caseTitle})=>_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.securitySolution.containers.cases.markInProgressCases",{values:{caseTitle:caseTitle,totalCases:totalCases},defaultMessage:'Marked {totalCases, plural, =1 {"{caseTitle}"} other {{totalCases} cases}} as in progress'}),SUCCESS_SEND_TO_EXTERNAL_SERVICE=serviceName=>_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.securitySolution.containers.cases.pushToExternalService",{values:{serviceName:serviceName},defaultMessage:"Successfully sent to { serviceName }"}),SYNC_CASE=(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.securitySolution.cases.configure.errorGetFields",{defaultMessage:"Error getting fields from service"}),caseTitle=>_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.securitySolution.containers.cases.syncCase",{values:{caseTitle:caseTitle},defaultMessage:'Alerts in "{caseTitle}" have been synced'})),STATUS_CHANGED_TOASTER_TEXT=_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("xpack.securitySolution.cases.containers.statusChangeToasterText",{defaultMessage:"Alerts in this case have been also had their status updated"})},132:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return MANAGEMENT_APP_ID})),__webpack_require__.d(__webpack_exports__,"i",(function(){return MANAGEMENT_ROUTING_ROOT_PATH})),__webpack_require__.d(__webpack_exports__,"f",(function(){return MANAGEMENT_ROUTING_ENDPOINTS_PATH})),__webpack_require__.d(__webpack_exports__,"g",(function(){return MANAGEMENT_ROUTING_POLICIES_PATH})),__webpack_require__.d(__webpack_exports__,"h",(function(){return MANAGEMENT_ROUTING_POLICY_DETAILS_PATH})),__webpack_require__.d(__webpack_exports__,"j",(function(){return MANAGEMENT_ROUTING_TRUSTED_APPS_PATH})),__webpack_require__.d(__webpack_exports__,"l",(function(){return MANAGEMENT_STORE_GLOBAL_NAMESPACE})),__webpack_require__.d(__webpack_exports__,"m",(function(){return MANAGEMENT_STORE_POLICY_DETAILS_NAMESPACE})),__webpack_require__.d(__webpack_exports__,"k",(function(){return MANAGEMENT_STORE_ENDPOINTS_NAMESPACE})),__webpack_require__.d(__webpack_exports__,"n",(function(){return MANAGEMENT_STORE_TRUSTED_APPS_NAMESPACE})),__webpack_require__.d(__webpack_exports__,"e",(function(){return MANAGEMENT_PAGE_SIZE_OPTIONS})),__webpack_require__.d(__webpack_exports__,"c",(function(){return MANAGEMENT_DEFAULT_PAGE})),__webpack_require__.d(__webpack_exports__,"d",(function(){return MANAGEMENT_DEFAULT_PAGE_SIZE})),__webpack_require__.d(__webpack_exports__,"a",(function(){return DEFAULT_POLL_INTERVAL}));var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(371),_common_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_app_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3);const MANAGEMENT_APP_ID=`${_common_constants__WEBPACK_IMPORTED_MODULE_1__.f}:${_app_types__WEBPACK_IMPORTED_MODULE_2__.a.administration}`,MANAGEMENT_ROUTING_ROOT_PATH="",MANAGEMENT_ROUTING_ENDPOINTS_PATH=`${MANAGEMENT_ROUTING_ROOT_PATH}/:tabName(${_types__WEBPACK_IMPORTED_MODULE_0__.a.endpoints})`,MANAGEMENT_ROUTING_POLICIES_PATH=`${MANAGEMENT_ROUTING_ROOT_PATH}/:tabName(${_types__WEBPACK_IMPORTED_MODULE_0__.a.policies})`,MANAGEMENT_ROUTING_POLICY_DETAILS_PATH=`${MANAGEMENT_ROUTING_ROOT_PATH}/:tabName(${_types__WEBPACK_IMPORTED_MODULE_0__.a.policies})/:policyId`,MANAGEMENT_ROUTING_TRUSTED_APPS_PATH=`${MANAGEMENT_ROUTING_ROOT_PATH}/:tabName(${_types__WEBPACK_IMPORTED_MODULE_0__.a.trustedApps})`,MANAGEMENT_STORE_GLOBAL_NAMESPACE="management",MANAGEMENT_STORE_POLICY_DETAILS_NAMESPACE="policyDetails",MANAGEMENT_STORE_ENDPOINTS_NAMESPACE="endpoints",MANAGEMENT_STORE_TRUSTED_APPS_NAMESPACE="trustedApps",MANAGEMENT_PAGE_SIZE_OPTIONS=[10,20,50],MANAGEMENT_DEFAULT_PAGE=0,MANAGEMENT_DEFAULT_PAGE_SIZE=10,DEFAULT_POLL_INTERVAL=1e4},140:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"l",(function(){return getTypedPayload})),__webpack_require__.d(__webpack_exports__,"m",(function(){return parseString})),__webpack_require__.d(__webpack_exports__,"b",(function(){return convertArrayToCamelCase})),__webpack_require__.d(__webpack_exports__,"c",(function(){return convertToCamelCase})),__webpack_require__.d(__webpack_exports__,"a",(function(){return convertAllCasesToCamel})),__webpack_require__.d(__webpack_exports__,"k",(function(){return decodeCasesStatusResponse})),__webpack_require__.d(__webpack_exports__,"d",(function(){return createToasterPlainError})),__webpack_require__.d(__webpack_exports__,"g",(function(){return decodeCaseResponse})),__webpack_require__.d(__webpack_exports__,"j",(function(){return decodeCasesResponse})),__webpack_require__.d(__webpack_exports__,"i",(function(){return decodeCasesFindResponse})),__webpack_require__.d(__webpack_exports__,"f",(function(){return decodeCaseConfigureResponse})),__webpack_require__.d(__webpack_exports__,"h",(function(){return decodeCaseUserActionsResponse})),__webpack_require__.d(__webpack_exports__,"e",(function(){return createUpdateSuccessToaster}));var uuid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19),uuid__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__),_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(89),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80),fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_cases_common_api__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(33),_common_components_toasters__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(116),_translations__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(127);const getTypedPayload=a=>a,parseString=params=>{try{return JSON.parse(params)}catch{return null}},convertArrayToCamelCase=arrayOfSnakes=>arrayOfSnakes.reduce((acc,value)=>Object(lodash__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)?[...acc,convertArrayToCamelCase(value)]:Object(lodash__WEBPACK_IMPORTED_MODULE_2__.isObject)(value)?[...acc,convertToCamelCase(value)]:[...acc,value],[]),convertToCamelCase=snakeCase=>Object.entries(snakeCase).reduce((acc,[key,value])=>(Object(lodash__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)?Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__.set)(acc,Object(lodash__WEBPACK_IMPORTED_MODULE_2__.camelCase)(key),convertArrayToCamelCase(value)):Object(lodash__WEBPACK_IMPORTED_MODULE_2__.isObject)(value)?Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__.set)(acc,Object(lodash__WEBPACK_IMPORTED_MODULE_2__.camelCase)(key),convertToCamelCase(value)):Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__.set)(acc,Object(lodash__WEBPACK_IMPORTED_MODULE_2__.camelCase)(key),value),acc),{}),convertAllCasesToCamel=snakeCases=>({cases:snakeCases.cases.map(snakeCase=>convertToCamelCase(snakeCase)),countOpenCases:snakeCases.count_open_cases,countInProgressCases:snakeCases.count_in_progress_cases,countClosedCases:snakeCases.count_closed_cases,page:snakeCases.page,perPage:snakeCases.per_page,total:snakeCases.total}),decodeCasesStatusResponse=respCase=>Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_5__.pipe)(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.j.decode(respCase),Object(fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_3__.fold)(Object(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.o)(createToasterPlainError),fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_4__.identity)),createToasterPlainError=message=>new _common_components_toasters__WEBPACK_IMPORTED_MODULE_7__.c([message]),decodeCaseResponse=respCase=>Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_5__.pipe)(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.d.decode(respCase),Object(fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_3__.fold)(Object(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.o)(createToasterPlainError),fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_4__.identity)),decodeCasesResponse=respCase=>Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_5__.pipe)(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.i.decode(respCase),Object(fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_3__.fold)(Object(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.o)(createToasterPlainError),fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_4__.identity)),decodeCasesFindResponse=respCases=>Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_5__.pipe)(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.h.decode(respCases),Object(fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_3__.fold)(Object(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.o)(createToasterPlainError),fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_4__.identity)),decodeCaseConfigureResponse=respCase=>Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_5__.pipe)(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.c.decode(respCase),Object(fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_3__.fold)(Object(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.o)(createToasterPlainError),fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_4__.identity)),decodeCaseUserActionsResponse=respUserActions=>Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_5__.pipe)(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.g.decode(respUserActions),Object(fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_3__.fold)(Object(_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.o)(createToasterPlainError),fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_4__.identity)),createUpdateSuccessToaster=(caseBeforeUpdate,caseAfterUpdate,key,value)=>{const caseHasAlerts=caseBeforeUpdate.comments.some(comment=>comment.type===_cases_common_api__WEBPACK_IMPORTED_MODULE_6__.k.alert),toast={id:uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),color:"success",iconType:"check",title:_translations__WEBPACK_IMPORTED_MODULE_8__.j(caseAfterUpdate.title)};return((key,value)=>"settings"===key)(key)&&null!=value&&value.syncAlerts&&caseHasAlerts?{...toast,title:_translations__WEBPACK_IMPORTED_MODULE_8__.i(caseAfterUpdate.title)}:((key,value)=>"status"===key)(key)&&caseHasAlerts&&caseBeforeUpdate.settings.syncAlerts?{...toast,text:_translations__WEBPACK_IMPORTED_MODULE_8__.g}:toast}},149:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return getEndpointListPath})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getEndpointDetailsPath})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getPolicyDetailPath})),__webpack_require__.d(__webpack_exports__,"a",(function(){return extractListPaginationParams})),__webpack_require__.d(__webpack_exports__,"b",(function(){return extractTrustedAppsListPageLocation})),__webpack_require__.d(__webpack_exports__,"f",(function(){return getTrustedAppsListPath}));var lodash_fp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(77),querystring__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(316),querystring__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(132),_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(371),_common_components_link_to_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(208);const querystringStringify=params=>querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(params),getEndpointListPath=(props,search)=>{const{name:name,...queryParams}=props,urlQueryParams=querystringStringify(queryParams),urlSearch=`${urlQueryParams&&!Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(search)?"&":""}${null!=search?search:""}`;return"endpointList"===name?`${Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.generatePath)(_constants__WEBPACK_IMPORTED_MODULE_3__.f,{tabName:_types__WEBPACK_IMPORTED_MODULE_4__.a.endpoints})}${Object(_common_components_link_to_helpers__WEBPACK_IMPORTED_MODULE_5__.a)(""+(urlQueryParams?`${urlQueryParams}${urlSearch}`:urlSearch))}`:""+Object(_common_components_link_to_helpers__WEBPACK_IMPORTED_MODULE_5__.a)(""+(urlQueryParams?`${urlQueryParams}${urlSearch}`:urlSearch))},getEndpointDetailsPath=(props,search)=>{const{name:name,...queryParams}=props;queryParams.show="endpointPolicyResponse"===props.name?"policy_response":"";const urlQueryParams=querystringStringify(queryParams),urlSearch=`${urlQueryParams&&!Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(search)?"&":""}${null!=search?search:""}`;return`${Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.generatePath)(_constants__WEBPACK_IMPORTED_MODULE_3__.f,{tabName:_types__WEBPACK_IMPORTED_MODULE_4__.a.endpoints})}${Object(_common_components_link_to_helpers__WEBPACK_IMPORTED_MODULE_5__.a)(""+(urlQueryParams?`${urlQueryParams}${urlSearch}`:urlSearch))}`},getPolicyDetailPath=(policyId,search)=>`${Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.generatePath)(_constants__WEBPACK_IMPORTED_MODULE_3__.h,{tabName:_types__WEBPACK_IMPORTED_MODULE_4__.a.policies,policyId:policyId})}${Object(_common_components_link_to_helpers__WEBPACK_IMPORTED_MODULE_5__.a)(search)}`,isDefaultOrMissing=(value,defaultValue)=>void 0===value||value===defaultValue,extractFirstParamValue=(query,key)=>{const value=query[key];return Array.isArray(value)?value[value.length-1]:value},extractPageIndex=query=>{const pageIndex=Number(extractFirstParamValue(query,"page_index"));return!Number.isFinite(pageIndex)||pageIndex<0?_constants__WEBPACK_IMPORTED_MODULE_3__.c:pageIndex},extractPageSize=query=>{const pageSize=Number(extractFirstParamValue(query,"page_size"));return _constants__WEBPACK_IMPORTED_MODULE_3__.e.includes(pageSize)?pageSize:_constants__WEBPACK_IMPORTED_MODULE_3__.d},extractFilter=query=>extractFirstParamValue(query,"filter")||"",extractListPaginationParams=query=>({page_index:extractPageIndex(query),page_size:extractPageSize(query),filter:extractFilter(query)}),extractTrustedAppsListPageLocation=query=>{const showParamValue=extractFirstParamValue(query,"show");return{...extractListPaginationParams(query),view_type:"list"===extractFirstParamValue(query,"view_type")?"list":"grid",show:showParamValue&&["edit","create"].includes(showParamValue)?showParamValue:void 0,id:extractFirstParamValue(query,"id")}},getTrustedAppsListPath=location=>`${Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.generatePath)(_constants__WEBPACK_IMPORTED_MODULE_3__.j,{tabName:_types__WEBPACK_IMPORTED_MODULE_4__.a.trustedApps})}${Object(_common_components_link_to_helpers__WEBPACK_IMPORTED_MODULE_5__.a)(querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify((location=>location?{...isDefaultOrMissing(location.page_index,_constants__WEBPACK_IMPORTED_MODULE_3__.c)?{}:{page_index:location.page_index},...isDefaultOrMissing(location.page_size,_constants__WEBPACK_IMPORTED_MODULE_3__.d)?{}:{page_size:location.page_size},...isDefaultOrMissing(location.view_type,"grid")?{}:{view_type:location.view_type},...isDefaultOrMissing(location.show,void 0)?{}:{show:location.show},...isDefaultOrMissing(location.id,void 0)?{}:{id:location.id},...isDefaultOrMissing(location.filter,"")?"":{filter:location.filter}}:{})(location)))}`},161:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return isKibanaError})),__webpack_require__.d(__webpack_exports__,"c",(function(){return isSecurityAppError})),__webpack_require__.d(__webpack_exports__,"a",(function(){return isAppError}));var lodash_fp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7);const isKibanaError=error=>Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__.has)("message",error)&&Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__.has)("body.message",error)&&Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__.has)("body.statusCode",error),isSecurityAppError=error=>Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__.has)("message",error)&&Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__.has)("body.message",error)&&Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__.has)("body.status_code",error),isAppError=error=>isKibanaError(error)||isSecurityAppError(error)},208:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return appendSearch}));var lodash_fp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7);const appendSearch=search=>Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(search)?"":""+(null!=search&&search.startsWith("?")?search:"?"+search)},316:function(module,exports,__webpack_require__){"use strict";exports.decode=exports.parse=__webpack_require__(1022),exports.encode=exports.stringify=__webpack_require__(1023)},371:function(module,__webpack_exports__,__webpack_require__){"use strict";let AdministrationSubTab;__webpack_require__.d(__webpack_exports__,"a",(function(){return AdministrationSubTab})),function(AdministrationSubTab){AdministrationSubTab.endpoints="endpoints",AdministrationSubTab.policies="policy",AdministrationSubTab.trustedApps="trusted_apps"}(AdministrationSubTab||(AdministrationSubTab={}))}}]);