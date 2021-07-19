/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[39],{282:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return WebhookParamsFields}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_json_editor_with_message_variables__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(135);const WebhookParamsFields=({actionParams:actionParams,editAction:editAction,index:index,messageVariables:messageVariables,errors:errors})=>{const{body:body}=actionParams;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_json_editor_with_message_variables__WEBPACK_IMPORTED_MODULE_2__.a,{messageVariables:messageVariables,paramsProperty:"body",inputTargetValue:body,label:_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.bodyFieldLabel",{defaultMessage:"Body"}),"aria-label":_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.bodyCodeEditorAriaLabel",{defaultMessage:"Code editor"}),errors:errors.body,onDocumentsChange:json=>{editAction("body",json,index)},onBlur:()=>{body||editAction("body","",index)}})}}}]);