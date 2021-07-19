/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.securitySolution_bundle_jsonpfunction=window.securitySolution_bundle_jsonpfunction||[]).push([[22],{1116:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"EndpointPolicyEditExtension",(function(){return EndpointPolicyEditExtension}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(110),_common_routing__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(149),_policy_details_form__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(713),_policy_hooks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(199),_store_policy_details_selectors__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(172);const EndpointPolicyEditExtension=Object(react__WEBPACK_IMPORTED_MODULE_0__.memo)(({policy:policy,onChange:onChange})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedPolicyDetailsForm,{policyId:policy.id,onChange:onChange})));EndpointPolicyEditExtension.displayName="EndpointPolicyEditExtension";const WrappedPolicyDetailsForm=Object(react__WEBPACK_IMPORTED_MODULE_0__.memo)(({policyId:policyId,onChange:onChange})=>{const dispatch=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(),updatedPolicy=Object(_policy_hooks__WEBPACK_IMPORTED_MODULE_5__.a)(_store_policy_details_selectors__WEBPACK_IMPORTED_MODULE_6__.k),[,setLastUpdatedPolicy]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(updatedPolicy);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(dispatch({type:"userChangedUrl",payload:{hash:"",pathname:Object(_common_routing__WEBPACK_IMPORTED_MODULE_3__.e)(policyId,""),search:""}}),()=>{dispatch({type:"userChangedUrl",payload:{hash:"",pathname:"/",search:""}})}),[dispatch,policyId]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setLastUpdatedPolicy(prevState=>prevState===updatedPolicy?prevState:(updatedPolicy&&onChange({isValid:!0,updatedPolicy:{inputs:updatedPolicy.inputs}}),updatedPolicy))},[onChange,updatedPolicy]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test-subj":"endpointIntegrationPolicyForm"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_policy_details_form__WEBPACK_IMPORTED_MODULE_4__.a,null))});WrappedPolicyDetailsForm.displayName="WrappedPolicyDetailsForm"}}]);