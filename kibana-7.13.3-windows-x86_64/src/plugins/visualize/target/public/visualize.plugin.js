!function(modules){function webpackJsonpCallback(data){for(var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],i=0,resolves=[];i<chunkIds.length;i++)chunkId=chunkIds[i],Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]&&resolves.push(installedChunks[chunkId][0]),installedChunks[chunkId]=0;for(moduleId in moreModules)Object.prototype.hasOwnProperty.call(moreModules,moduleId)&&(modules[moduleId]=moreModules[moduleId]);for(parentJsonpFunction&&parentJsonpFunction(data);resolves.length;)resolves.shift()()}var installedModules={},installedChunks={0:0};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.e=function(chunkId){var promises=[],installedChunkData=installedChunks[chunkId];if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var onScriptComplete,script=document.createElement("script");script.charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.src=function(chunkId){return __webpack_require__.p+"visualize.chunk."+chunkId+".js"}(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null,clearTimeout(timeout);var chunk=installedChunks[chunkId];if(0!==chunk){if(chunk){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,chunk[1](error)}installedChunks[chunkId]=void 0}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete,document.head.appendChild(script)}return Promise.all(promises)},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__.oe=function(err){throw console.error(err),err};var jsonpArray=window.visualize_bundle_jsonpfunction=window.visualize_bundle_jsonpfunction||[],oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback,jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;__webpack_require__(__webpack_require__.s=12)}([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return APP_NAME})),__webpack_require__.d(__webpack_exports__,"b",(function(){return VisualizeConstants}));const APP_NAME="visualize",VisualizeConstants={VISUALIZE_BASE_PATH:"/app/visualize",LANDING_PAGE_PATH:"/",WIZARD_STEP_1_PAGE_PATH:"/new",WIZARD_STEP_2_PAGE_PATH:"/new/configure",CREATE_PATH:"/create",EDIT_PATH:"/edit",EDIT_BY_VALUE_PATH:"/edit_by_value",APP_ID:"visualize"}},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getUISettings})),__webpack_require__.d(__webpack_exports__,"c",(function(){return setUISettings})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getVisEditorsRegistry})),__webpack_require__.d(__webpack_exports__,"d",(function(){return setVisEditorsRegistry}));var _plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);const[getUISettings,setUISettings]=Object(_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__.createGetterSetter)("UISettings"),[getVisEditorsRegistry,setVisEditorsRegistry]=Object(_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__.createGetterSetter)("VisEditorsRegistry")},function(module,exports){},function(module,exports){module.exports=__kbnSharedDeps__.RxjsOperators},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/data/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Rxjs},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/home/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("entry/core/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(14)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"VisualizeConstants",(function(){return visualize_constants.b})),__webpack_require__.d(__webpack_exports__,"IEditorController",(function(){return types.IEditorController})),__webpack_require__.d(__webpack_exports__,"EditorRenderProps",(function(){return types.EditorRenderProps})),__webpack_require__.d(__webpack_exports__,"VisualizePluginSetup",(function(){})),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var external_kbnSharedDeps_Rxjs_=__webpack_require__(7),external_kbnSharedDeps_KbnI18n_=__webpack_require__(5),external_kbnSharedDeps_RxjsOperators_=__webpack_require__(4),node_modules_history=__webpack_require__(10),public_=__webpack_require__(1),data_public_=__webpack_require__(6),visualize_constants=__webpack_require__(0),home_public_=__webpack_require__(8),core_public_=__webpack_require__(9),public_services=__webpack_require__(2);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class plugin_VisualizePlugin{constructor(initializerContext){this.initializerContext=initializerContext,_defineProperty(this,"appStateUpdater",new external_kbnSharedDeps_Rxjs_.BehaviorSubject(()=>({}))),_defineProperty(this,"stopUrlTracking",void 0),_defineProperty(this,"currentHistory",void 0),_defineProperty(this,"isLinkedToOriginatingApp",void 0),_defineProperty(this,"visEditorsRegistry",(()=>{const map=new Map;return{registerDefault:editor=>{map.set("default",editor)},register:(name,editor)=>{name&&map.set(name,editor)},get:name=>map.get(name||"default")}})())}setup(core,{home:home,urlForwarding:urlForwarding,data:data}){const{appMounted:appMounted,appUnMounted:appUnMounted,stop:stopUrlTracker,setActiveUrl:setActiveUrl,restorePreviousUrl:restorePreviousUrl}=Object(public_.createKbnUrlTracker)({baseUrl:core.http.basePath.prepend(visualize_constants.b.VISUALIZE_BASE_PATH),defaultSubUrl:"#/",storageKey:`lastUrl:${core.http.basePath.get()}:visualize`,navLinkUpdater$:this.appStateUpdater,toastNotifications:core.notifications.toasts,stateParams:[{kbnUrlKey:"_g",stateUpdate$:data.query.state$.pipe(Object(external_kbnSharedDeps_RxjsOperators_.filter)(({changes:changes})=>!!(changes.globalFilters||changes.time||changes.refreshInterval)),Object(external_kbnSharedDeps_RxjsOperators_.map)(({state:state})=>{var _state$filters;return{...state,filters:null===(_state$filters=state.filters)||void 0===_state$filters?void 0:_state$filters.filter(data_public_.esFilters.isFilterPinned)}}))}],getHistory:()=>this.currentHistory,onBeforeNavLinkSaved:urlToSave=>{var _this$isLinkedToOrigi;return null!==(_this$isLinkedToOrigi=this.isLinkedToOriginatingApp)&&void 0!==_this$isLinkedToOrigi&&_this$isLinkedToOrigi.call(this)?core.http.basePath.prepend(visualize_constants.b.VISUALIZE_BASE_PATH):urlToSave}});return this.stopUrlTracking=()=>{stopUrlTracker()},Object(public_services.c)(core.uiSettings),core.application.register({id:visualize_constants.b.APP_ID,title:"Visualize Library",order:8e3,euiIconType:"logoKibana",defaultPath:"#/",category:core_public_.DEFAULT_APP_CATEGORIES.kibana,updater$:this.appStateUpdater.asObservable(),mount:async params=>{var _pluginsStart$savedOb;const[coreStart,pluginsStart]=await core.getStartServices();this.currentHistory=params.history,this.isLinkedToOriginatingApp=()=>{var _pluginsStart$embedda;return Boolean(null===(_pluginsStart$embedda=pluginsStart.embeddable.getStateTransfer().getIncomingEditorState(visualize_constants.b.APP_ID))||void 0===_pluginsStart$embedda?void 0:_pluginsStart$embedda.originatingApp)},pluginsStart.data.indexPatterns.clearCache(),await pluginsStart.data.indexPatterns.ensureDefaultIndexPattern(),appMounted();const unlistenParentHistory=params.history.listen(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))}),history=Object(node_modules_history.createHashHistory)(),services={...coreStart,history:history,kbnUrlStateStorage:Object(public_.createKbnUrlStateStorage)({history:history,useHash:coreStart.uiSettings.get("state:storeInSessionStorage"),...Object(public_.withNotifyOnErrors)(coreStart.notifications.toasts)}),urlForwarding:pluginsStart.urlForwarding,pluginInitializerContext:this.initializerContext,chrome:coreStart.chrome,data:pluginsStart.data,localStorage:new public_.Storage(localStorage),navigation:pluginsStart.navigation,savedVisualizations:pluginsStart.visualizations.savedVisualizationsLoader,share:pluginsStart.share,toastNotifications:coreStart.notifications.toasts,visualizeCapabilities:coreStart.application.capabilities.visualize,dashboardCapabilities:coreStart.application.capabilities.dashboard,visualizations:pluginsStart.visualizations,embeddable:pluginsStart.embeddable,stateTransferService:pluginsStart.embeddable.getStateTransfer(),setActiveUrl:setActiveUrl,createVisEmbeddableFromObject:pluginsStart.visualizations.__LEGACY.createVisEmbeddableFromObject,savedObjectsPublic:pluginsStart.savedObjects,scopedHistory:params.history,restorePreviousUrl:restorePreviousUrl,dashboard:pluginsStart.dashboard,setHeaderActionMenu:params.setHeaderActionMenu,savedObjectsTagging:null===(_pluginsStart$savedOb=pluginsStart.savedObjectsTaggingOss)||void 0===_pluginsStart$savedOb?void 0:_pluginsStart$savedOb.getTaggingApi(),presentationUtil:pluginsStart.presentationUtil};params.element.classList.add("visAppWrapper");const{renderApp:renderApp}=await __webpack_require__.e(1).then(__webpack_require__.bind(null,69)),unmount=renderApp(params,services);return()=>{params.element.classList.remove("visAppWrapper"),unlistenParentHistory(),unmount(),appUnMounted()}}}),urlForwarding.forwardApp("visualize","visualize"),home&&home.featureCatalogue.register({id:"visualize",title:"Visualize Library",description:external_kbnSharedDeps_KbnI18n_.i18n.translate("visualize.visualizeDescription",{defaultMessage:"Create visualizations and aggregate data stores in your Elasticsearch indices."}),icon:"visualizeApp",path:"/app/visualize#"+visualize_constants.b.LANDING_PAGE_PATH,showOnHomePage:!1,category:home_public_.FeatureCatalogueCategory.DATA}),{visEditorsRegistry:this.visEditorsRegistry}}start(core,plugins){Object(public_services.d)(this.visEditorsRegistry)}stop(){this.stopUrlTracking&&this.stopUrlTracking()}}var types=__webpack_require__(3);const public_plugin=context=>new plugin_VisualizePlugin(context)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(13);__kbnBundles__.define("plugin/visualize/public",__webpack_require__,11)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.visualize},function(module,exports,__webpack_require__){"use strict";function _interopDefault(n){return n&&"object"==typeof n&&"default"in n?n.default:n}Object.defineProperty(exports,"__esModule",{value:!0});var resolvePathname=_interopDefault(__webpack_require__(15)),valueEqual=_interopDefault(__webpack_require__(16));__webpack_require__(17);var invariant=_interopDefault(__webpack_require__(18));function _extends(){return(_extends=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function addLeadingSlash(n){return"/"===n.charAt(0)?n:"/"+n}function stripLeadingSlash(n){return"/"===n.charAt(0)?n.substr(1):n}function stripBasename(n,t){return function(n,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(n)}(n,t)?n.substr(t.length):n}function stripTrailingSlash(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function parsePath(n){var t=n||"/",e="",a="",o=t.indexOf("#");-1!==o&&(a=t.substr(o),t=t.substr(0,o));var r=t.indexOf("?");return-1!==r&&(e=t.substr(r),t=t.substr(0,r)),{pathname:t,search:"?"===e?"":e,hash:"#"===a?"":a}}function createPath(n){var t=n.pathname,e=n.search,a=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),a&&"#"!==a&&(o+="#"===a.charAt(0)?a:"#"+a),o}function createLocation(n,t,e,a){var o;"string"==typeof n?(o=parsePath(n)).state=t:(void 0===(o=_extends({},n)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(o.key=e),a?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=resolvePathname(o.pathname,a.pathname)):o.pathname=a.pathname:o.pathname||(o.pathname="/"),o}function locationsAreEqual(n,t){return n.pathname===t.pathname&&n.search===t.search&&n.hash===t.hash&&n.key===t.key&&valueEqual(n.state,t.state)}function createTransitionManager(){var r=null,a=[];return{setPrompt:function(n){return r=n,function(){r===n&&(r=null)}},confirmTransitionTo:function(n,t,e,a){if(null!=r){var o="function"==typeof r?r(n,t):r;"string"==typeof o?"function"==typeof e?e(o,a):a(!0):a(!1!==o)}else a(!0)},appendListener:function(n){var t=!0;function e(){t&&n.apply(void 0,arguments)}return a.push(e),function(){t=!1,a=a.filter((function(n){return n!==e}))}},notifyListeners:function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];a.forEach((function(n){return n.apply(void 0,t)}))}}}var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);function getConfirmation(n,t){t(window.confirm(n))}function getHistoryState(){try{return window.history.state||{}}catch(n){return{}}}var HashPathCoders={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+stripLeadingSlash(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:stripLeadingSlash,decodePath:addLeadingSlash},slash:{encodePath:addLeadingSlash,decodePath:addLeadingSlash}};function getHashPath(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function replaceHashPath(n){var t=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,0<=t?t:0)+"#"+n)}function clamp(n,t,e){return Math.min(Math.max(n,t),e)}exports.createBrowserHistory=function(n){void 0===n&&(n={}),canUseDOM||invariant(!1);var c=window.history,s=function(){var n=window.navigator.userAgent;return(-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),t=!(-1===window.navigator.userAgent.indexOf("Trident")),e=n,a=e.forceRefresh,h=void 0!==a&&a,o=e.getUserConfirmation,u=void 0===o?getConfirmation:o,r=e.keyLength,i=void 0===r?6:r,f=n.basename?stripTrailingSlash(addLeadingSlash(n.basename)):"";function l(n){var t=n||{},e=t.key,a=t.state,o=window.location,r=o.pathname+o.search+o.hash;return f&&(r=stripBasename(r,f)),createLocation(r,a,e)}function d(){return Math.random().toString(36).substr(2,i)}var v=createTransitionManager();function p(n){_extends(T,n),T.length=c.length,v.notifyListeners(T.location,T.action)}function g(n){(function(n){void 0===n.state&&navigator.userAgent.indexOf("CriOS")})(n)||w(l(n.state))}function P(){w(l(getHistoryState()))}var m=!1;function w(t){m?(m=!1,p()):v.confirmTransitionTo(t,"POP",u,(function(n){n?p({action:"POP",location:t}):function(n){var t=T.location,e=H.indexOf(t.key);-1===e&&(e=0);var a=H.indexOf(n.key);-1===a&&(a=0);var o=e-a;o&&(m=!0,L(o))}(t)}))}var y=l(getHistoryState()),H=[y.key];function x(n){return f+createPath(n)}function L(n){c.go(n)}var O=0;function E(n){1===(O+=n)&&1===n?(window.addEventListener("popstate",g),t&&window.addEventListener("hashchange",P)):0===O&&(window.removeEventListener("popstate",g),t&&window.removeEventListener("hashchange",P))}var S=!1,T={length:c.length,action:"POP",location:y,createHref:x,push:function(n,t){var i=createLocation(n,t,d(),T.location);v.confirmTransitionTo(i,"PUSH",u,(function(n){if(n){var t=x(i),e=i.key,a=i.state;if(s)if(c.pushState({key:e,state:a},null,t),h)window.location.href=t;else{var o=H.indexOf(T.location.key),r=H.slice(0,-1===o?0:o+1);r.push(i.key),H=r,p({action:"PUSH",location:i})}else window.location.href=t}}))},replace:function(n,t){var r="REPLACE",i=createLocation(n,t,d(),T.location);v.confirmTransitionTo(i,r,u,(function(n){if(n){var t=x(i),e=i.key,a=i.state;if(s)if(c.replaceState({key:e,state:a},null,t),h)window.location.replace(t);else{var o=H.indexOf(T.location.key);-1!==o&&(H[o]=i.key),p({action:r,location:i})}else window.location.replace(t)}}))},go:L,goBack:function(){L(-1)},goForward:function(){L(1)},block:function(n){void 0===n&&(n=!1);var t=v.setPrompt(n);return S||(E(1),S=!0),function(){return S&&(S=!1,E(-1)),t()}},listen:function(n){var t=v.appendListener(n);return E(1),function(){E(-1),t()}}};return T},exports.createHashHistory=function(n){void 0===n&&(n={}),canUseDOM||invariant(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),a=e.getUserConfirmation,i=void 0===a?getConfirmation:a,o=e.hashType,r=void 0===o?"slash":o,c=n.basename?stripTrailingSlash(addLeadingSlash(n.basename)):"",s=HashPathCoders[r],h=s.encodePath,u=s.decodePath;function f(){var n=u(getHashPath());return c&&(n=stripBasename(n,c)),createLocation(n)}var l=createTransitionManager();function d(n){_extends(E,n),E.length=t.length,l.notifyListeners(E.location,E.action)}var v=!1,p=null;function g(){var n=getHashPath(),t=h(n);if(n!==t)replaceHashPath(t);else{var e=f(),a=E.location;if(!v&&locationsAreEqual(a,e))return;if(p===createPath(e))return;p=null,function(t){v?(v=!1,d()):l.confirmTransitionTo(t,"POP",i,(function(n){n?d({action:"POP",location:t}):function(n){var t=E.location,e=y.lastIndexOf(createPath(t));-1===e&&(e=0);var a=y.lastIndexOf(createPath(n));-1===a&&(a=0);var o=e-a;o&&(v=!0,H(o))}(t)}))}(e)}}var P=getHashPath(),m=h(P);P!==m&&replaceHashPath(m);var w=f(),y=[createPath(w)];function H(n){t.go(n)}var x=0;function L(n){1===(x+=n)&&1===n?window.addEventListener("hashchange",g):0===x&&window.removeEventListener("hashchange",g)}var O=!1,E={length:t.length,action:"POP",location:w,createHref:function(n){return"#"+h(c+createPath(n))},push:function(n,t){var r=createLocation(n,void 0,void 0,E.location);l.confirmTransitionTo(r,"PUSH",i,(function(n){if(n){var t=createPath(r),e=h(c+t);if(getHashPath()!==e){p=t,function(n){window.location.hash=n}(e);var a=y.lastIndexOf(createPath(E.location)),o=y.slice(0,-1===a?0:a+1);o.push(t),y=o,d({action:"PUSH",location:r})}else d()}}))},replace:function(n,t){var o="REPLACE",r=createLocation(n,void 0,void 0,E.location);l.confirmTransitionTo(r,o,i,(function(n){if(n){var t=createPath(r),e=h(c+t);getHashPath()!==e&&(p=t,replaceHashPath(e));var a=y.indexOf(createPath(E.location));-1!==a&&(y[a]=t),d({action:o,location:r})}}))},go:H,goBack:function(){H(-1)},goForward:function(){H(1)},block:function(n){void 0===n&&(n=!1);var t=l.setPrompt(n);return O||(L(1),O=!0),function(){return O&&(O=!1,L(-1)),t()}},listen:function(n){var t=l.appendListener(n);return L(1),function(){L(-1),t()}}};return E},exports.createMemoryHistory=function(n){void 0===n&&(n={});var t=n,o=t.getUserConfirmation,e=t.initialEntries,a=void 0===e?["/"]:e,r=t.initialIndex,i=void 0===r?0:r,c=t.keyLength,s=void 0===c?6:c,h=createTransitionManager();function u(n){_extends(g,n),g.length=g.entries.length,h.notifyListeners(g.location,g.action)}function f(){return Math.random().toString(36).substr(2,s)}var l=clamp(i,0,a.length-1),d=a.map((function(n){return createLocation(n,void 0,"string"==typeof n?f():n.key||f())})),v=createPath;function p(n){var t=clamp(g.index+n,0,g.entries.length-1),e=g.entries[t];h.confirmTransitionTo(e,"POP",o,(function(n){n?u({action:"POP",location:e,index:t}):u()}))}var g={length:d.length,action:"POP",location:d[l],index:l,entries:d,createHref:v,push:function(n,t){var a=createLocation(n,t,f(),g.location);h.confirmTransitionTo(a,"PUSH",o,(function(n){if(n){var t=g.index+1,e=g.entries.slice(0);e.length>t?e.splice(t,e.length-t,a):e.push(a),u({action:"PUSH",location:a,index:t,entries:e})}}))},replace:function(n,t){var e="REPLACE",a=createLocation(n,t,f(),g.location);h.confirmTransitionTo(a,e,o,(function(n){n&&(g.entries[g.index]=a,u({action:e,location:a}))}))},go:p,goBack:function(){p(-1)},goForward:function(){p(1)},canGo:function(n){var t=g.index+n;return 0<=t&&t<g.entries.length},block:function(n){return void 0===n&&(n=!1),h.setPrompt(n)},listen:function(n){return h.appendListener(n)}};return g},exports.createLocation=createLocation,exports.locationsAreEqual=locationsAreEqual,exports.parsePath=parsePath,exports.createPath=createPath},function(module,exports,__webpack_require__){"use strict";function isAbsolute(pathname){return"/"===pathname.charAt(0)}function spliceOne(list,index){for(var i=index,k=i+1,n=list.length;k<n;i+=1,k+=1)list[i]=list[k];list.pop()}exports.__esModule=!0,exports.default=function(to){var from=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",toParts=to&&to.split("/")||[],fromParts=from&&from.split("/")||[],isToAbs=to&&isAbsolute(to),isFromAbs=from&&isAbsolute(from),mustEndAbs=isToAbs||isFromAbs;if(to&&isAbsolute(to)?fromParts=toParts:toParts.length&&(fromParts.pop(),fromParts=fromParts.concat(toParts)),!fromParts.length)return"/";var hasTrailingSlash=void 0;if(fromParts.length){var last=fromParts[fromParts.length-1];hasTrailingSlash="."===last||".."===last||""===last}else hasTrailingSlash=!1;for(var up=0,i=fromParts.length;i>=0;i--){var part=fromParts[i];"."===part?spliceOne(fromParts,i):".."===part?(spliceOne(fromParts,i),up++):up&&(spliceOne(fromParts,i),up--)}if(!mustEndAbs)for(;up--;up)fromParts.unshift("..");!mustEndAbs||""===fromParts[0]||fromParts[0]&&isAbsolute(fromParts[0])||fromParts.unshift("");var result=fromParts.join("/");return hasTrailingSlash&&"/"!==result.substr(-1)&&(result+="/"),result},module.exports=exports.default},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};exports.default=function valueEqual(a,b){if(a===b)return!0;if(null==a||null==b)return!1;if(Array.isArray(a))return Array.isArray(b)&&a.length===b.length&&a.every((function(item,index){return valueEqual(item,b[index])}));var aType=void 0===a?"undefined":_typeof(a);if(aType!==(void 0===b?"undefined":_typeof(b)))return!1;if("object"===aType){var aValue=a.valueOf(),bValue=b.valueOf();if(aValue!==a||bValue!==b)return valueEqual(aValue,bValue);var aKeys=Object.keys(a),bKeys=Object.keys(b);return aKeys.length===bKeys.length&&aKeys.every((function(key){return valueEqual(a[key],b[key])}))}return!1},module.exports=exports.default},function(module,exports,__webpack_require__){"use strict";module.exports=function(condition,message){}},function(module,exports,__webpack_require__){"use strict";module.exports=function(condition,message){if(!condition)throw new Error("Invariant failed")}},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,exports){module.exports=__kbnSharedDeps__.ReactRouterDom},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.TsLib},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/savedObjects/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/presentationUtil/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/discover/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/common");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))}]);