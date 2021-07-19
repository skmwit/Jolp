/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(module,exports){module.exports=__kbnSharedDeps__.RxjsOperators},function(module,exports){module.exports=__kbnSharedDeps__.Rxjs},function(module,exports,__webpack_require__){"use strict";module.exports=function(){function _min(d0,d1,d2,bx,ay){return d0<d1||d2<d1?d0>d2?d2+1:d0+1:bx===ay?d1:d1+1}return function(a,b){if(a===b)return 0;if(a.length>b.length){var tmp=a;a=b,b=tmp}for(var la=a.length,lb=b.length;la>0&&a.charCodeAt(la-1)===b.charCodeAt(lb-1);)la--,lb--;for(var offset=0;offset<la&&a.charCodeAt(offset)===b.charCodeAt(offset);)offset++;if(lb-=offset,0===(la-=offset)||lb<3)return lb;var y,d0,d1,d2,d3,dd,dy,ay,bx0,bx1,bx2,bx3,x=0,vector=[];for(y=0;y<la;y++)vector.push(y+1),vector.push(a.charCodeAt(offset+y));for(var len=vector.length-1;x<lb-3;)for(bx0=b.charCodeAt(offset+(d0=x)),bx1=b.charCodeAt(offset+(d1=x+1)),bx2=b.charCodeAt(offset+(d2=x+2)),bx3=b.charCodeAt(offset+(d3=x+3)),dd=x+=4,y=0;y<len;y+=2)d0=_min(dy=vector[y],d0,d1,bx0,ay=vector[y+1]),d1=_min(d0,d1,d2,bx1,ay),d2=_min(d1,d2,d3,bx2,ay),dd=_min(d2,d3,dd,bx3,ay),vector[y]=dd,d3=d2,d2=d1,d1=d0,d0=dy;for(;x<lb;)for(bx0=b.charCodeAt(offset+(d0=x)),dd=++x,y=0;y<len;y+=2)dy=vector[y],vector[y]=dd=_min(dy,d0,dd,bx0,vector[y+1]),d0=dy;return dd}}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(4);__kbnBundles__.define("plugin/globalSearchProviders/public",__webpack_require__,5)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.globalSearchProviders},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var external_kbnSharedDeps_Rxjs_=__webpack_require__(1),external_kbnSharedDeps_RxjsOperators_=__webpack_require__(0),js_levenshtein=__webpack_require__(2),js_levenshtein_default=__webpack_require__.n(js_levenshtein);const scoreApp=(term,appLink)=>{term=term.toLowerCase();const title=[appLink.app.title,...appLink.subLinkTitles].join(" ").toLowerCase(),appScoreByTerms=scoreAppByTerms(term,title),keywords=[...appLink.app.meta.keywords.map(keyword=>keyword.toLowerCase()),...appLink.keywords.map(keyword=>keyword.toLowerCase())],appScoreByKeywords=scoreAppByKeywords(term,keywords);return Math.max(appScoreByTerms,.8*appScoreByKeywords)},scoreAppByTerms=(term,title)=>{if(title===term)return 100;if(title.startsWith(term))return 90;if(title.includes(term))return 75;const length=Math.max(term.length,title.length),distance=js_levenshtein_default()(term,title),ratio=Math.floor(100*(1-distance/length));return ratio>=60?ratio:0},scoreAppByKeywords=(term,keywords)=>{const scores=keywords.map(keyword=>scoreAppByTerms(term,keyword));return Math.max(...scores)},appToResult=(appLink,score)=>{var _appLink$app$category,_appLink$app$category2,_appLink$app$category3,_appLink$app$category4;const titleParts="management"===appLink.app.id&&appLink.subLinkTitles.length>0?appLink.subLinkTitles:[appLink.app.title,...appLink.subLinkTitles];return{id:appLink.id,title:titleParts.join(" / "),type:"application",icon:appLink.app.euiIconType,url:appLink.path,meta:{categoryId:null!==(_appLink$app$category=null===(_appLink$app$category2=appLink.app.category)||void 0===_appLink$app$category2?void 0:_appLink$app$category2.id)&&void 0!==_appLink$app$category?_appLink$app$category:null,categoryLabel:null!==(_appLink$app$category3=null===(_appLink$app$category4=appLink.app.category)||void 0===_appLink$app$category4?void 0:_appLink$app$category4.label)&&void 0!==_appLink$app$category3?_appLink$app$category3:null},score:score}},flattenDeepLinks=(app,deepLink)=>{var _deepLink$keywords,_app$meta$keywords2,_app$meta2;return deepLink?[...deepLink.path?[{id:`${app.id}-${deepLink.id}`,app:app,path:`${app.appRoute}${deepLink.path}`,subLinkTitles:[deepLink.title],keywords:[...null!==(_deepLink$keywords=deepLink.keywords)&&void 0!==_deepLink$keywords?_deepLink$keywords:[]]}]:[],...deepLink.searchDeepLinks.flatMap(deepDeepLink=>flattenDeepLinks(app,deepDeepLink)).map(deepAppLink=>({...deepAppLink,subLinkTitles:[deepLink.title,...deepAppLink.subLinkTitles],keywords:[...deepLink.keywords,...deepAppLink.keywords]}))]:[{id:app.id,app:app,path:app.appRoute,subLinkTitles:[],keywords:null!==(_app$meta$keywords2=null===(_app$meta2=app.meta)||void 0===_app$meta2?void 0:_app$meta2.keywords)&&void 0!==_app$meta$keywords2?_app$meta$keywords2:[]},...app.meta.searchDeepLinks.flatMap(appDeepLink=>flattenDeepLinks(app,appDeepLink))]},createApplicationResultProvider=applicationPromise=>{const searchableApps$=Object(external_kbnSharedDeps_Rxjs_.from)(applicationPromise).pipe(Object(external_kbnSharedDeps_RxjsOperators_.mergeMap)(application=>application.applications$),Object(external_kbnSharedDeps_RxjsOperators_.map)(apps=>[...apps.values()].filter(app=>0===app.status&&1===app.navLinkStatus&&!0!==app.chromeless)),Object(external_kbnSharedDeps_RxjsOperators_.shareReplay)(1));return{id:"application",find:({term:term,types:types,tags:tags},{aborted$:aborted$,maxResults:maxResults})=>tags||types&&!types.includes("application")?Object(external_kbnSharedDeps_Rxjs_.of)([]):searchableApps$.pipe(Object(external_kbnSharedDeps_RxjsOperators_.takeUntil)(aborted$),Object(external_kbnSharedDeps_RxjsOperators_.take)(1),Object(external_kbnSharedDeps_RxjsOperators_.map)(apps=>((term,apps)=>apps.flatMap(app=>{var _app$meta$keywords,_app$meta;return term.length>0?flattenDeepLinks(app):[{id:app.id,app:app,path:app.appRoute,subLinkTitles:[],keywords:null!==(_app$meta$keywords=null===(_app$meta=app.meta)||void 0===_app$meta?void 0:_app$meta.keywords)&&void 0!==_app$meta$keywords?_app$meta$keywords:[]}]}).map(appLink=>({appLink:appLink,score:scoreApp(term,appLink)})).filter(({score:score})=>score>0).map(({appLink:appLink,score:score})=>appToResult(appLink,score)))(null!=term?term:"",[...apps.values()]).sort((a,b)=>b.score-a.score).slice(0,maxResults))),getSearchableTypes:()=>["application"]}};class plugin_GlobalSearchProvidersPlugin{setup({getStartServices:getStartServices},{globalSearch:globalSearch}){const applicationPromise=getStartServices().then(([core])=>core.application);return globalSearch.registerResultProvider(createApplicationResultProvider(applicationPromise)),{}}start(){return{}}}const public_plugin=()=>new plugin_GlobalSearchProvidersPlugin}]);