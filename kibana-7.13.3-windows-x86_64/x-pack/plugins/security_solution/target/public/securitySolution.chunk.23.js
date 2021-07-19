/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.securitySolution_bundle_jsonpfunction=window.securitySolution_bundle_jsonpfunction||[]).push([[23],{1118:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return GraphTabContent}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_store_timeline__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(113),_common_hooks_use_selector__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(114),_graph_overlay__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(729);const GraphTabContentComponent=({timelineId:timelineId})=>{const getTimeline=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>_store_timeline__WEBPACK_IMPORTED_MODULE_1__.b.getTimelineByIdSelector(),[]);return Object(_common_hooks_use_selector__WEBPACK_IMPORTED_MODULE_2__.b)(state=>{var _getTimeline;return null===(_getTimeline=getTimeline(state,timelineId))||void 0===_getTimeline?void 0:_getTimeline.graphEventId})?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graph_overlay__WEBPACK_IMPORTED_MODULE_3__.a,{isEventViewer:!1,timelineId:timelineId}):null};GraphTabContentComponent.displayName="GraphTabContentComponent";const GraphTabContent=react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GraphTabContentComponent)}}]);