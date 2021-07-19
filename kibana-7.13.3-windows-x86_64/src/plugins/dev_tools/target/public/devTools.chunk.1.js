(window.devTools_bundle_jsonpfunction=window.devTools_bundle_jsonpfunction||[]).push([[1],{23:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"renderApp",(function(){return renderApp}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20),_elastic_eui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(21),_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(22),_kbn_i18n__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3);function DevToolsWrapper({devTools:devTools,activeDevTool:activeDevTool,updateRoute:updateRoute}){const mountedTool=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>{mountedTool.current&&mountedTool.current.unmountHandler()},[]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main",{className:"devApp"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__.EuiTabs,null,devTools.map(currentDevTool=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__.EuiToolTip,{content:currentDevTool.tooltipContent,key:currentDevTool.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__.EuiTab,{disabled:currentDevTool.isDisabled(),isSelected:currentDevTool===activeDevTool,onClick:()=>{currentDevTool.isDisabled()||updateRoute("/"+currentDevTool.id)}},currentDevTool.title)))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"devApp__container",role:"tabpanel","data-test-subj":activeDevTool.id,ref:async element=>{if(element&&(null===mountedTool.current||mountedTool.current.devTool!==activeDevTool||mountedTool.current.mountpoint!==element)){mountedTool.current&&mountedTool.current.unmountHandler();const params={element:element,appBasePath:"",onAppLeave:()=>{},setHeaderActionMenu:()=>{},history:{}},unmountHandler=await activeDevTool.mount(params);mountedTool.current={devTool:activeDevTool,mountpoint:element,unmountHandler:unmountHandler}}}}))}function renderApp(element,application,chrome,history,devTools){if(function(application){return!application.capabilities.dev_tools.show&&(application.navigateToApp("home"),!0)}(application))return()=>{};!function(application,chrome){application.capabilities.dev_tools.save||chrome.setBadge({text:_kbn_i18n__WEBPACK_IMPORTED_MODULE_5__.i18n.translate("devTools.badge.readOnly.text",{defaultMessage:"Read only"}),tooltip:_kbn_i18n__WEBPACK_IMPORTED_MODULE_5__.i18n.translate("devTools.badge.readOnly.tooltip",{defaultMessage:"Unable to save"}),iconType:"glasses"})}(application,chrome),function(chrome){chrome.setBreadcrumbs([{text:_kbn_i18n__WEBPACK_IMPORTED_MODULE_5__.i18n.translate("devTools.k7BreadcrumbsDevToolsLabel",{defaultMessage:"Dev Tools"}),href:"#/"}])}(chrome),function(chrome){chrome.docTitle.change(_kbn_i18n__WEBPACK_IMPORTED_MODULE_5__.i18n.translate("devTools.pageTitle",{defaultMessage:"Dev Tools"}))}(chrome),react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__.I18nProvider,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.HashRouter,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch,null,devTools.filter(devTool=>!devTool.isDisabled()).map(devTool=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route,{key:devTool.id,path:"/"+devTool.id,exact:!devTool.enableRouting,render:props=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DevToolsWrapper,{updateRoute:props.history.push,activeDevTool:devTool,devTools:devTools})})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route,{path:"/"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect,{to:"/"+devTools[0].id}))))),element);const unlisten=history.listen(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))});return()=>{chrome.docTitle.reset(),react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(element),unlisten()}}}}]);