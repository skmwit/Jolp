!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=12)}([function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.Moment},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,exports){module.exports=__kbnSharedDeps__.RxjsOperators},function(module,exports){module.exports=__kbnSharedDeps__.Rxjs},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,exports){},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,exports){var getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(getRandomValues){var rnds8=new Uint8Array(16);module.exports=function(){return getRandomValues(rnds8),rnds8}}else{var rnds=new Array(16);module.exports=function(){for(var r,i=0;i<16;i++)0==(3&i)&&(r=4294967296*Math.random()),rnds[i]=r>>>((3&i)<<3)&255;return rnds}}},function(module,exports){for(var byteToHex=[],i=0;i<256;++i)byteToHex[i]=(i+256).toString(16).substr(1);module.exports=function(buf,offset){var i=offset||0,bth=byteToHex;return[bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]]].join("")}},function(module,exports,__webpack_require__){var v1=__webpack_require__(14),v4=__webpack_require__(15),uuid=v4;uuid.v1=v1,uuid.v4=v4,module.exports=uuid},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(13);__kbnBundles__.define("plugin/newsfeed/public",__webpack_require__,16)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.newsfeed},function(module,exports,__webpack_require__){var _nodeId,_clockseq,rng=__webpack_require__(9),bytesToUuid=__webpack_require__(10),_lastMSecs=0,_lastNSecs=0;module.exports=function(options,buf,offset){var i=buf&&offset||0,b=buf||[],node=(options=options||{}).node||_nodeId,clockseq=void 0!==options.clockseq?options.clockseq:_clockseq;if(null==node||null==clockseq){var seedBytes=rng();null==node&&(node=_nodeId=[1|seedBytes[0],seedBytes[1],seedBytes[2],seedBytes[3],seedBytes[4],seedBytes[5]]),null==clockseq&&(clockseq=_clockseq=16383&(seedBytes[6]<<8|seedBytes[7]))}var msecs=void 0!==options.msecs?options.msecs:(new Date).getTime(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1,dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq;var tl=(1e4*(268435455&(msecs+=122192928e5))+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;var tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(var n=0;n<6;++n)b[i+n]=node[n];return buf||bytesToUuid(b)}},function(module,exports,__webpack_require__){var rng=__webpack_require__(9),bytesToUuid=__webpack_require__(10);module.exports=function(options,buf,offset){var i=buf&&offset||0;"string"==typeof options&&(buf="binary"===options?new Array(16):null,options=null);var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf)for(var ii=0;ii<16;++ii)buf[i+ii]=rnds[ii];return buf||bytesToUuid(rnds)}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"NewsfeedPublicPluginSetup",(function(){})),__webpack_require__.d(__webpack_exports__,"NewsfeedPublicPluginStart",(function(){})),__webpack_require__.d(__webpack_exports__,"FetchResult",(function(){return types.FetchResult})),__webpack_require__.d(__webpack_exports__,"NewsfeedItem",(function(){return types.NewsfeedItem})),__webpack_require__.d(__webpack_exports__,"NewsfeedApiEndpoint",(function(){return NewsfeedApiEndpoint})),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var external_kbnSharedDeps_Rxjs_=__webpack_require__(5),external_kbnSharedDeps_RxjsOperators_=__webpack_require__(4),external_kbnSharedDeps_ReactDom_=__webpack_require__(8),external_kbnSharedDeps_ReactDom_default=__webpack_require__.n(external_kbnSharedDeps_ReactDom_),external_kbnSharedDeps_React_=__webpack_require__(0),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_Moment_=__webpack_require__(2),external_kbnSharedDeps_Moment_default=__webpack_require__.n(external_kbnSharedDeps_Moment_),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(3),external_kbnSharedDeps_ElasticEui_=__webpack_require__(1),external_kbnSharedDeps_KbnI18n_=__webpack_require__(6);const NewsEmptyPrompt=()=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiEmptyPrompt,{iconType:"documents",titleSize:"s","data-test-subj":"emptyNewsfeed",title:external_kbnSharedDeps_React_default.a.createElement("h2",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"newsfeed.emptyPrompt.noNewsTitle",defaultMessage:"No news?"})),body:external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"newsfeed.emptyPrompt.noNewsText",defaultMessage:"If your Kibana instance doesn’t have internet access, ask your administrator to disable this feature. Otherwise, we’ll keep trying to fetch the news."}))}),NewsLoadingPrompt=()=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiEmptyPrompt,{title:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLoadingElastic,{size:"xl"}),body:external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"newsfeed.loadingPrompt.gettingNewsText",defaultMessage:"Getting the latest news..."}))}),NewsfeedFlyout=()=>{const{newsFetchResult:newsFetchResult,setFlyoutVisible:setFlyoutVisible}=Object(external_kbnSharedDeps_React_.useContext)(NewsfeedContext),closeFlyout=Object(external_kbnSharedDeps_React_.useCallback)(()=>setFlyoutVisible(!1),[setFlyoutVisible]);return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPortal,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlyout,{onClose:closeFlyout,size:"s","aria-labelledby":"flyoutSmallTitle",className:"kbnNews__flyout","data-test-subj":"NewsfeedFlyout"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlyoutHeader,{hasBorder:!0},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"s"},external_kbnSharedDeps_React_default.a.createElement("h2",{id:"flyoutSmallTitle"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"newsfeed.flyoutList.whatsNewTitle",defaultMessage:"What's new at Elastic"})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlyoutBody,{className:"kbnNews__flyoutAlerts"},newsFetchResult?newsFetchResult.feedItems.length>0?newsFetchResult.feedItems.map(item=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiHeaderAlert,{key:item.hash,title:item.title,text:item.description,"data-test-subj":"newsHeadAlert",action:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLink,{target:"_blank",href:item.linkUrl,external:!0},item.linkText),date:item.publishOn.format("DD MMMM YYYY"),badge:item.badge?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiBadge,{color:"hollow"},item.badge):void 0})):external_kbnSharedDeps_React_default.a.createElement(NewsEmptyPrompt,null):external_kbnSharedDeps_React_default.a.createElement(NewsLoadingPrompt,null)),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlyoutFooter,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"center"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,{iconType:"cross",onClick:closeFlyout,flush:"left"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"newsfeed.flyoutList.closeButtonLabel",defaultMessage:"Close"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},newsFetchResult?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{color:"subdued",size:"s"},external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"newsfeed.flyoutList.versionTextLabel",defaultMessage:"{version}",values:{version:"Version "+newsFetchResult.kibanaVersion}}))):null)))))},NewsfeedContext=external_kbnSharedDeps_React_default.a.createContext({}),NewsfeedNavButton=({apiFetchResult:apiFetchResult})=>{const[showBadge,setShowBadge]=Object(external_kbnSharedDeps_React_.useState)(!1),[flyoutVisible,setFlyoutVisible]=Object(external_kbnSharedDeps_React_.useState)(!1),[newsFetchResult,setNewsFetchResult]=Object(external_kbnSharedDeps_React_.useState)(null);return Object(external_kbnSharedDeps_React_.useEffect)(()=>{const subscription=apiFetchResult.subscribe(res=>{return(fetchResult=res)&&setShowBadge(fetchResult.hasNew),void setNewsFetchResult(fetchResult);var fetchResult});return()=>subscription.unsubscribe()},[apiFetchResult]),external_kbnSharedDeps_React_default.a.createElement(NewsfeedContext.Provider,{value:{setFlyoutVisible:setFlyoutVisible,newsFetchResult:newsFetchResult}},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiHeaderSectionItemButton,{"data-test-subj":"newsfeed","aria-controls":"keyPadMenu","aria-expanded":flyoutVisible,"aria-haspopup":"true","aria-label":showBadge?external_kbnSharedDeps_KbnI18n_.i18n.translate("newsfeed.headerButton.unreadAriaLabel",{defaultMessage:"Newsfeed menu - unread items available"}):external_kbnSharedDeps_KbnI18n_.i18n.translate("newsfeed.headerButton.readAriaLabel",{defaultMessage:"Newsfeed menu - all items read"}),notification:!!showBadge||null,onClick:function(){setShowBadge(!1),setFlyoutVisible(!flyoutVisible)}},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiIcon,{type:"cheer",size:"m"})),flyoutVisible?external_kbnSharedDeps_React_default.a.createElement(NewsfeedFlyout,null):null))};var uuid=__webpack_require__(11),uuid_default=__webpack_require__.n(uuid);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}let NewsfeedApiEndpoint;!function(NewsfeedApiEndpoint){NewsfeedApiEndpoint.KIBANA="kibana",NewsfeedApiEndpoint.KIBANA_ANALYTICS="kibana-analytics",NewsfeedApiEndpoint.SECURITY_SOLUTION="security-solution",NewsfeedApiEndpoint.OBSERVABILITY="observability"}(NewsfeedApiEndpoint||(NewsfeedApiEndpoint={}));class api_NewsfeedApiDriver{constructor(kibanaVersion,userLanguage,fetchInterval){this.userLanguage=userLanguage,this.fetchInterval=fetchInterval,_defineProperty(this,"id",uuid_default.a.v4()),_defineProperty(this,"kibanaVersion",void 0),_defineProperty(this,"loadedTime",external_kbnSharedDeps_Moment_default()().utc()),_defineProperty(this,"lastFetchStorageKey",void 0),_defineProperty(this,"hashSetStorageKey",void 0),this.kibanaVersion=kibanaVersion.replace(/^(\d+\.\d+\.\d+).*/,"$1"),this.lastFetchStorageKey="newsfeed.lastfetchtime."+this.id,this.hashSetStorageKey="newsfeed.hashes."+this.id}shouldFetch(){const lastFetchUtc=sessionStorage.getItem(this.lastFetchStorageKey);if(null==lastFetchUtc)return!0;const last=external_kbnSharedDeps_Moment_default()(lastFetchUtc,"x");if(this.loadedTime.diff(last)>0)return!0;const now=external_kbnSharedDeps_Moment_default.a.utc();return external_kbnSharedDeps_Moment_default.a.duration(now.diff(last)).asMilliseconds()>this.fetchInterval}updateLastFetch(){sessionStorage.setItem(this.lastFetchStorageKey,Date.now().toString())}updateHashes(items){const stored=localStorage.getItem(this.hashSetStorageKey);let old=[];null!=stored&&(old=stored.split(","));const newHashes=items.map(i=>i.hash),updatedHashes=[...new Set(old.concat(newHashes))];return localStorage.setItem(this.hashSetStorageKey,updatedHashes.join(",")),{previous:old,current:updatedHashes}}fetchNewsfeedItems(http,config){const urlPath=config.pathTemplate.replace("{VERSION}",this.kibanaVersion),fullUrl=(config.urlRoot||"https://feeds.elastic.co")+urlPath;return external_kbnSharedDeps_Rxjs_.from(http.fetch(fullUrl,{method:"GET"}).then(({items:items})=>this.modelItems(items)))}validateItem(item){return![item.title,item.description,item.linkText,item.linkUrl,item.publishOn,item.hash].includes(void 0)}modelItems(items){const feedItems=items.reduce((accum,it)=>{let chosenLanguage=this.userLanguage;const{expire_on:expireOnUtc,publish_on:publishOnUtc,languages:languages,title:title,description:description,link_text:linkText,link_url:linkUrl,badge:badge,hash:hash}=it;if(external_kbnSharedDeps_Moment_default()(expireOnUtc).isBefore(Date.now()))return accum;if(external_kbnSharedDeps_Moment_default()(publishOnUtc).isAfter(Date.now()))return accum;languages&&!languages.includes(chosenLanguage)&&(chosenLanguage="en");const tempItem={title:title[chosenLanguage],description:description[chosenLanguage],linkText:null!=linkText?linkText[chosenLanguage]:null,linkUrl:linkUrl[chosenLanguage],badge:null!=badge?badge[chosenLanguage]:null,publishOn:external_kbnSharedDeps_Moment_default()(publishOnUtc),expireOn:external_kbnSharedDeps_Moment_default()(expireOnUtc),hash:hash.slice(0,10)};return this.validateItem(tempItem)?[...accum,tempItem]:accum},[]),{previous:previous,current:current}=this.updateHashes(feedItems),hasNew=current.length>previous.length;return{error:null,kibanaVersion:this.kibanaVersion,hasNew:hasNew,feedItems:feedItems}}}function plugin_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class plugin_NewsfeedPublicPlugin{constructor(initializerContext){plugin_defineProperty(this,"kibanaVersion",void 0),plugin_defineProperty(this,"config",void 0),plugin_defineProperty(this,"stop$",new external_kbnSharedDeps_Rxjs_.ReplaySubject(1)),this.kibanaVersion=initializerContext.env.packageInfo.version;const config=initializerContext.config.get();this.config=Object.freeze({...config,mainInterval:external_kbnSharedDeps_Moment_default.a.duration(config.mainInterval),fetchInterval:external_kbnSharedDeps_Moment_default.a.duration(config.fetchInterval)})}setup(core){return{}}start(core){const api$=this.fetchNewsfeed(core,this.config).pipe(Object(external_kbnSharedDeps_RxjsOperators_.share)());return core.chrome.navControls.registerRight({order:1e3,mount:target=>this.mount(api$,target)}),{createNewsFeed$:endpoint=>{const config=Object.assign({},this.config,{service:{...this.config.service,pathTemplate:`/${endpoint}/v{VERSION}.json`}});return this.fetchNewsfeed(core,config)}}}stop(){this.stop$.next()}fetchNewsfeed(core,config){const{http:http}=core;return function(http,config,kibanaVersion){const userLanguage=external_kbnSharedDeps_KbnI18n_.i18n.getLocale(),fetchInterval=config.fetchInterval.asMilliseconds(),mainInterval=config.mainInterval.asMilliseconds(),driver=new api_NewsfeedApiDriver(kibanaVersion,userLanguage,fetchInterval);return external_kbnSharedDeps_Rxjs_.timer(0,mainInterval).pipe(Object(external_kbnSharedDeps_RxjsOperators_.filter)(()=>driver.shouldFetch()),Object(external_kbnSharedDeps_RxjsOperators_.mergeMap)(()=>driver.fetchNewsfeedItems(http,config.service).pipe(Object(external_kbnSharedDeps_RxjsOperators_.catchError)(err=>(window.console.error(err),external_kbnSharedDeps_Rxjs_.of({error:err,kibanaVersion:kibanaVersion,hasNew:!1,feedItems:[]}))))),Object(external_kbnSharedDeps_RxjsOperators_.tap)(()=>driver.updateLastFetch()))}(http,config,this.kibanaVersion).pipe(Object(external_kbnSharedDeps_RxjsOperators_.takeUntil)(this.stop$),Object(external_kbnSharedDeps_RxjsOperators_.catchError)(()=>external_kbnSharedDeps_Rxjs_.of(null)))}mount(api$,targetDomElement){return external_kbnSharedDeps_ReactDom_default.a.render(external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.I18nProvider,null,external_kbnSharedDeps_React_default.a.createElement(NewsfeedNavButton,{apiFetchResult:api$})),targetDomElement),()=>external_kbnSharedDeps_ReactDom_default.a.unmountComponentAtNode(targetDomElement)}}var types=__webpack_require__(7);function public_plugin(initializerContext){return new plugin_NewsfeedPublicPlugin(initializerContext)}}]);