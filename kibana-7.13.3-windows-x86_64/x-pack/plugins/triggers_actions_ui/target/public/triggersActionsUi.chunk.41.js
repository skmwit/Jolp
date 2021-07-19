/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[41],{61:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"AlertConditionsGroup",(function(){return AlertConditionsGroup})),__webpack_require__.d(__webpack_exports__,"default",(function(){return AlertConditionsGroup}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_elastic_eui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15);const AlertConditionsGroup=({actionGroup:actionGroup,onResetConditionsFor:onResetConditionsFor,children:children,...otherProps})=>actionGroup?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiFormRow,{label:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiTitle,{size:"s"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,actionGroup.name)),fullWidth:!0,labelAppend:onResetConditionsFor&&!actionGroup.isRequired&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiButtonIcon,{iconType:"minusInCircle",color:"danger","aria-label":_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.triggersActionsUI.sections.alertForm.conditions.removeConditionLabel",{defaultMessage:"Remove"}),onClick:()=>onResetConditionsFor(actionGroup)})},react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(children)?react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children),{actionGroup:actionGroup,...otherProps}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)):null}}]);