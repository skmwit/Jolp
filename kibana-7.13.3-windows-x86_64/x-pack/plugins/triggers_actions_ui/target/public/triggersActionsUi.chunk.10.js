/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[10],{283:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return ServiceNowConnectorFields}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(52),_translations__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_common_lib_kibana__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(72);const ServiceNowConnectorFields=({action:action,editActionSecrets:editActionSecrets,editActionConfig:editActionConfig,errors:errors,consumer:consumer,readOnly:readOnly})=>{const{docLinks:docLinks}=Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_4__.b)().services,{apiUrl:apiUrl}=action.config,isApiUrlInvalid=errors.apiUrl.length>0&&void 0!==apiUrl,{username:username,password:password}=action.secrets,isUsernameInvalid=errors.username.length>0&&void 0!==username,isPasswordInvalid=errors.password.length>0&&void 0!==password,handleOnChangeActionConfig=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key,value)=>editActionConfig(key,value),[editActionConfig]),handleOnChangeSecretConfig=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key,value)=>editActionSecrets(key,value),[editActionSecrets]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{id:"apiUrl",fullWidth:!0,error:errors.apiUrl,isInvalid:isApiUrlInvalid,label:_translations__WEBPACK_IMPORTED_MODULE_3__.b,helpText:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiLink,{href:docLinks.links.alerting.serviceNowAction,target:"_blank"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.serviceNowAction.apiUrlHelpLabel",defaultMessage:"Configure a Personal Developer Instance"}))},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFieldText,{fullWidth:!0,isInvalid:isApiUrlInvalid,name:"apiUrl",readOnly:readOnly,value:apiUrl||"","data-test-subj":"apiUrlFromInput",onChange:evt=>handleOnChangeActionConfig("apiUrl",evt.target.value),onBlur:()=>{apiUrl||editActionConfig("apiUrl","")}})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiTitle,{size:"xxs"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,_translations__WEBPACK_IMPORTED_MODULE_3__.e)))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{fullWidth:!0},function(isCreate){if(isCreate)return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiText,{size:"s","data-test-subj":"rememberValuesMessage"},_translations__WEBPACK_IMPORTED_MODULE_3__.s);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiCallOut,{size:"s",iconType:"iInCircle",title:_translations__WEBPACK_IMPORTED_MODULE_3__.r,"data-test-subj":"reenterValuesMessage"})}(!action.id)))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{id:"connector-servicenow-username",fullWidth:!0,error:errors.username,isInvalid:isUsernameInvalid,label:_translations__WEBPACK_IMPORTED_MODULE_3__.D},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFieldText,{fullWidth:!0,isInvalid:isUsernameInvalid,readOnly:readOnly,name:"connector-servicenow-username",value:username||"","data-test-subj":"connector-servicenow-username-form-input",onChange:evt=>handleOnChangeSecretConfig("username",evt.target.value),onBlur:()=>{username||editActionSecrets("username","")}})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{id:"connector-servicenow-password",fullWidth:!0,error:errors.password,isInvalid:isPasswordInvalid,label:_translations__WEBPACK_IMPORTED_MODULE_3__.o},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFieldPassword,{fullWidth:!0,readOnly:readOnly,isInvalid:isPasswordInvalid,name:"connector-servicenow-password",value:password||"","data-test-subj":"connector-servicenow-password-form-input",onChange:evt=>handleOnChangeSecretConfig("password",evt.target.value),onBlur:()=>{password||editActionSecrets("password","")}})))))}},72:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return public_.KibanaContextProvider})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useTypedKibana}));var public_=__webpack_require__(51);const useTypedKibana=()=>Object(public_.useKibana)()}}]);