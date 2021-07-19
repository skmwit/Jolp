/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.spaces_bundle_jsonpfunction=window.spaces_bundle_jsonpfunction||[]).push([[9],{180:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SpaceListInternal",(function(){return SpaceListInternal}));var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_common_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_space_avatar__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_spaces_context__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(14);const LazySpaceAvatar=Object(react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>Object(_space_avatar__WEBPACK_IMPORTED_MODULE_5__.a)().then(component=>({default:component}))),SpaceListInternal=({namespaces:namespaces,displayLimit:displayLimit=5,behaviorContext:behaviorContext})=>{const{shareToSpacesDataPromise:shareToSpacesDataPromise}=Object(_spaces_context__WEBPACK_IMPORTED_MODULE_6__.b)(),[isExpanded,setIsExpanded]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[shareToSpacesData,setShareToSpacesData]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)();if(Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{shareToSpacesDataPromise.then(x=>{setShareToSpacesData(x)})},[shareToSpacesDataPromise]),!shareToSpacesData)return null;const isSharedToAllSpaces=namespaces.includes(_common_constants__WEBPACK_IMPORTED_MODULE_4__.a),unauthorizedSpacesCount=namespaces.filter(namespace=>namespace===_common_constants__WEBPACK_IMPORTED_MODULE_4__.f).length;let displayedSpaces,button=null;if(isSharedToAllSpaces)displayedSpaces=[{id:_common_constants__WEBPACK_IMPORTED_MODULE_4__.a,name:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.spaces.spaceList.allSpacesLabel",{defaultMessage:"* All spaces"}),initials:"*",color:"#D3DAE6"}];else{const authorized=namespaces.filter(namespace=>namespace!==_common_constants__WEBPACK_IMPORTED_MODULE_4__.f),enabledSpaceTargets=[],disabledSpaceTargets=[];authorized.forEach(namespace=>{const spaceTarget=shareToSpacesData.spacesMap.get(namespace);void 0===spaceTarget?enabledSpaceTargets.push({id:namespace,name:namespace}):"outside-space"!==behaviorContext&&spaceTarget.isActiveSpace||(spaceTarget.isFeatureDisabled?disabledSpaceTargets.push(spaceTarget):enabledSpaceTargets.push(spaceTarget))});const authorizedSpaceTargets=[...enabledSpaceTargets,...disabledSpaceTargets];displayedSpaces=isExpanded||!displayLimit?authorizedSpaceTargets:authorizedSpaceTargets.slice(0,displayLimit),displayLimit&&authorizedSpaceTargets.length>displayLimit&&(button=isExpanded?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiButtonEmpty,{size:"xs",onClick:()=>setIsExpanded(!1)},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.spaces.spaceList.showLessSpacesLink",defaultMessage:"show less"})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiButtonEmpty,{size:"xs",onClick:()=>setIsExpanded(!0)},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.spaces.spaceList.showMoreSpacesLink",defaultMessage:"+{count} more",values:{count:authorizedSpaceTargets.length+unauthorizedSpacesCount-displayedSpaces.length}})))}const unauthorizedSpacesCountBadge=!isSharedToAllSpaces&&(isExpanded||null===button)&&unauthorizedSpacesCount>0?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFlexItem,{grow:!1},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiToolTip,{content:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.spaces.spaceList.unauthorizedSpacesCountLabel",defaultMessage:"You don't have permission to view these spaces."})},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiBadge,{color:"#DDD"},"+",unauthorizedSpacesCount))):null;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense,{fallback:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiLoadingSpinner,null)},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFlexGroup,{wrap:!0,responsive:!1,gutterSize:"xs"},displayedSpaces.map(space=>{const color=space.isFeatureDisabled?"hollow":space.color;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__.EuiFlexItem,{grow:!1,key:space.id},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LazySpaceAvatar,{space:{...space,color:color},size:"s"}))}),unauthorizedSpacesCountBadge,button))}}}]);