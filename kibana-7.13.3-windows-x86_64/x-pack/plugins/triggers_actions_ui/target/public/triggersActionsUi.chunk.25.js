/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[25],{275:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"EmailActionConnectorFields",(function(){return EmailActionConnectorFields})),__webpack_require__.d(__webpack_exports__,"default",(function(){return EmailActionConnectorFields}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(52),_common_lib_kibana__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(72);const EmailActionConnectorFields=({action:action,editActionConfig:editActionConfig,editActionSecrets:editActionSecrets,errors:errors,readOnly:readOnly})=>{const{docLinks:docLinks}=Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_4__.b)().services,{from:from,host:host,port:port,secure:secure,hasAuth:hasAuth}=action.config,{user:user,password:password}=action.secrets;return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{action.id||editActionConfig("hasAuth",!0)},[]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{id:"from",fullWidth:!0,error:errors.from,isInvalid:errors.from.length>0&&void 0!==from,label:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.fromTextFieldLabel",{defaultMessage:"Sender"}),helpText:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiLink,{href:docLinks.links.alerting.emailActionConfig,target:"_blank"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.emailAction.configureAccountsHelpLabel",defaultMessage:"Configure email accounts"}))},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFieldText,{fullWidth:!0,readOnly:readOnly,isInvalid:errors.from.length>0&&void 0!==from,name:"from",value:from||"","data-test-subj":"emailFromInput",onChange:e=>{editActionConfig("from",e.target.value)},onBlur:()=>{from||editActionConfig("from","")}})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,{justifyContent:"spaceBetween"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{id:"emailHost",fullWidth:!0,error:errors.host,isInvalid:errors.host.length>0&&void 0!==host,label:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.hostTextFieldLabel",{defaultMessage:"Host"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFieldText,{fullWidth:!0,readOnly:readOnly,isInvalid:errors.host.length>0&&void 0!==host,name:"host",value:host||"","data-test-subj":"emailHostInput",onChange:e=>{editActionConfig("host",e.target.value)},onBlur:()=>{host||editActionConfig("host","")}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,{justifyContent:"spaceBetween"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{id:"emailPort",fullWidth:!0,placeholder:"587",error:errors.port,isInvalid:errors.port.length>0&&void 0!==port,label:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.portTextFieldLabel",{defaultMessage:"Port"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFieldNumber,{prepend:":",isInvalid:errors.port.length>0&&void 0!==port,fullWidth:!0,readOnly:readOnly,name:"port",value:port||"","data-test-subj":"emailPortInput",onChange:e=>{editActionConfig("port",parseInt(e.target.value,10))},onBlur:()=>{port||editActionConfig("port",0)}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{hasEmptyLabelSpace:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSwitch,{label:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.secureSwitchLabel",{defaultMessage:"Secure"}),disabled:readOnly,checked:secure||!1,onChange:e=>{editActionConfig("secure",e.target.checked)}}))))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiTitle,{size:"xxs"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.authenticationLabel",defaultMessage:"Authentication"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"s"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSwitch,{label:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.hasAuthSwitchLabel",{defaultMessage:"Require authentication for this server"}),disabled:readOnly,checked:hasAuth||!1,onChange:e=>{editActionConfig("hasAuth",e.target.checked),e.target.checked||(editActionSecrets("user",null),editActionSecrets("password",null))}}))),hasAuth?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,function(isCreate){if(isCreate)return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"s"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiText,{size:"s","data-test-subj":"rememberValuesMessage"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.emailAction.rememberValuesLabel",defaultMessage:"Remember these values. You must reenter them each time you edit the connector."})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"s"}));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiCallOut,{size:"s",iconType:"iInCircle","data-test-subj":"reenterValuesMessage",title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.emailAction.reenterValuesLabel",{defaultMessage:"Username and password are encrypted. Please reenter values for these fields."})}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}))}(!action.id),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,{justifyContent:"spaceBetween"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{id:"emailUser",fullWidth:!0,error:errors.user,isInvalid:errors.user.length>0&&void 0!==user,label:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.userTextFieldLabel",{defaultMessage:"Username"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFieldText,{fullWidth:!0,isInvalid:errors.user.length>0&&void 0!==user,name:"user",readOnly:readOnly,value:user||"","data-test-subj":"emailUserInput",onChange:e=>{editActionSecrets("user",nullableString(e.target.value))},onBlur:()=>{user||editActionSecrets("user","")}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{id:"emailPassword",fullWidth:!0,error:errors.password,isInvalid:errors.password.length>0&&void 0!==password,label:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.passwordFieldLabel",{defaultMessage:"Password"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFieldPassword,{fullWidth:!0,readOnly:readOnly,isInvalid:errors.password.length>0&&void 0!==password,name:"password",value:password||"","data-test-subj":"emailPasswordInput",onChange:e=>{editActionSecrets("password",nullableString(e.target.value))},onBlur:()=>{password||editActionSecrets("password","")}}))))):null)};function nullableString(str){return null==str||""===str.trim()?null:str}},72:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return public_.KibanaContextProvider})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useTypedKibana}));var public_=__webpack_require__(51);const useTypedKibana=()=>Object(public_.useKibana)()}}]);