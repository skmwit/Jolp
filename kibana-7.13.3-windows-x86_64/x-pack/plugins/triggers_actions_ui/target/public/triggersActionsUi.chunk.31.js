/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[31],{63:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ForLastExpression",(function(){return ForLastExpression})),__webpack_require__.d(__webpack_exports__,"default",(function(){return ForLastExpression}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52),_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_elastic_eui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15),_lib_get_time_unit_label__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18),_lib_get_time_options__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(22),_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(87);const ForLastExpression=({timeWindowSize:timeWindowSize,timeWindowUnit:timeWindowUnit="s",display:display="inline",errors:errors,onChangeWindowSize:onChangeWindowSize,onChangeWindowUnit:onChangeWindowUnit,popupPosition:popupPosition})=>{const[alertDurationPopoverOpen,setAlertDurationPopoverOpen]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__.EuiPopover,{button:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__.EuiExpression,{description:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.triggersActionsUI.common.expressionItems.forTheLast.descriptionLabel",{defaultMessage:"for the last"}),"data-test-subj":"forLastExpression",value:`${timeWindowSize} ${Object(_lib_get_time_unit_label__WEBPACK_IMPORTED_MODULE_4__.a)(timeWindowUnit,(null!=timeWindowSize?timeWindowSize:"").toString())}`,isActive:alertDurationPopoverOpen,onClick:()=>{setAlertDurationPopoverOpen(!0)},display:"inline"===display?"inline":"columns",isInvalid:!timeWindowSize}),isOpen:alertDurationPopoverOpen,closePopover:()=>{setAlertDurationPopoverOpen(!1)},ownFocus:!0,display:"fullWidth"===display?"block":"inlineBlock",anchorPosition:null!=popupPosition?popupPosition:"downLeft",repositionOnScroll:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__.a,{onClose:()=>setAlertDurationPopoverOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage,{id:"xpack.triggersActionsUI.common.expressionItems.forTheLast.popoverTitle",defaultMessage:"For the last"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__.EuiFlexItem,{grow:!1},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__.EuiFormRow,{isInvalid:errors.timeWindowSize.length>0&&void 0!==timeWindowSize,error:errors.timeWindowSize},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__.EuiFieldNumber,{"data-test-subj":"timeWindowSizeNumber",isInvalid:errors.timeWindowSize.length>0&&void 0!==timeWindowSize,min:0,value:timeWindowSize||"",onChange:e=>{const{value:value}=e.target,timeWindowSizeVal=""!==value?parseInt(value,10):void 0;onChangeWindowSize(timeWindowSizeVal)}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__.EuiFlexItem,{grow:!1},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__.EuiSelect,{"data-test-subj":"timeWindowUnitSelect",value:timeWindowUnit,onChange:e=>{onChangeWindowUnit(e.target.value)},options:Object(_lib_get_time_options__WEBPACK_IMPORTED_MODULE_5__.b)(null!=timeWindowSize?timeWindowSize:1)})))))}},87:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ClosablePopoverTitle}));var external_kbnSharedDeps_React_=__webpack_require__(1),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_KbnI18n_=__webpack_require__(0),external_kbnSharedDeps_ElasticEui_=__webpack_require__(15);const ClosablePopoverTitle=({children:children,onClose:onClose})=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPopoverTitle,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{alignItems:"center",gutterSize:"s"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,null,children),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonIcon,{iconType:"cross",color:"danger","aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.triggersActionsUI.common.expressionItems.components.closablePopoverTitle.closeLabel",{defaultMessage:"Close"}),onClick:()=>onClose()}))))}}]);