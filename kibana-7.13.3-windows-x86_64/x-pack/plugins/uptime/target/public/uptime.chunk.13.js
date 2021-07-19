/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.uptime_bundle_jsonpfunction=window.uptime_bundle_jsonpfunction||[]).push([[13],{432:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"validateMonitorStatusParams",(function(){return validateMonitorStatusParams}));var io_ts_lib_PathReporter__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(146),fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(70),_common_runtime_types_alerts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(138);function validateMonitorStatusParams(alertParams){var _alertParams$shouldCh,_alertParams$shouldCh2;const errors={},decoded=_common_runtime_types_alerts__WEBPACK_IMPORTED_MODULE_2__.a.decode(alertParams),oldDecoded=_common_runtime_types_alerts__WEBPACK_IMPORTED_MODULE_2__.d.decode(alertParams),availabilityDecoded=_common_runtime_types_alerts__WEBPACK_IMPORTED_MODULE_2__.c.decode(alertParams);if(!Object(fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_1__.isRight)(decoded)&&!Object(fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_1__.isRight)(oldDecoded)&&!Object(fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_1__.isRight)(availabilityDecoded))return{errors:{typeCheckFailure:"Provided parameters do not conform to the expected type.",typeCheckParsingMessage:io_ts_lib_PathReporter__WEBPACK_IMPORTED_MODULE_0__.PathReporter.report(decoded)}};if(!(null!==(_alertParams$shouldCh=alertParams.shouldCheckAvailability)&&void 0!==_alertParams$shouldCh&&_alertParams$shouldCh||null!==(_alertParams$shouldCh2=alertParams.shouldCheckStatus)&&void 0!==_alertParams$shouldCh2&&_alertParams$shouldCh2))return{errors:{noAlertSelected:"Alert must check for monitor status or monitor availability."}};if(Object(fp_ts_lib_Either__WEBPACK_IMPORTED_MODULE_1__.isRight)(decoded)&&decoded.right.shouldCheckStatus){const{numTimes:numTimes,timerangeCount:timerangeCount}=decoded.right;numTimes<1&&(errors.invalidNumTimes="Number of alert check down times must be an integer greater than 0"),isNaN(timerangeCount)&&(errors.timeRangeStartValueNaN="Specified time range value must be a number"),timerangeCount<=0&&(errors.invalidTimeRangeValue="Time range value must be greater than 0")}return{errors:errors}}}}]);