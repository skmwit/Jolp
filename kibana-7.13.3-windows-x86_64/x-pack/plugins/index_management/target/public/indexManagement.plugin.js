/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(modules){function webpackJsonpCallback(data){for(var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],i=0,resolves=[];i<chunkIds.length;i++)chunkId=chunkIds[i],Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]&&resolves.push(installedChunks[chunkId][0]),installedChunks[chunkId]=0;for(moduleId in moreModules)Object.prototype.hasOwnProperty.call(moreModules,moduleId)&&(modules[moduleId]=moreModules[moduleId]);for(parentJsonpFunction&&parentJsonpFunction(data);resolves.length;)resolves.shift()()}var installedModules={},installedChunks={0:0};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.e=function(chunkId){var promises=[],installedChunkData=installedChunks[chunkId];if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var onScriptComplete,script=document.createElement("script");script.charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.src=function(chunkId){return __webpack_require__.p+"indexManagement.chunk."+chunkId+".js"}(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null,clearTimeout(timeout);var chunk=installedChunks[chunkId];if(0!==chunk){if(chunk){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,chunk[1](error)}installedChunks[chunkId]=void 0}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete,document.head.appendChild(script)}return Promise.all(promises)},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__.oe=function(err){throw console.error(err),err};var jsonpArray=window.indexManagement_bundle_jsonpfunction=window.indexManagement_bundle_jsonpfunction||[],oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback,jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;__webpack_require__(__webpack_require__.s=7)}([function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,exports,__webpack_require__){"use strict";var memo,isOldIE=function(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo},getTarget=function(){var memo={};return function(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var textStore,replaceText=(textStore=[],function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")});function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function(){!function(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},function(module,exports,__webpack_require__){"use strict";module.exports=function(useSourceMap){var list=[];return list.toString=function(){return this.map((function(item){var content=function(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=(sourceMap=cssMapping,base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),"/*# ".concat(data," */")),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}var sourceMap,base64,data;return[content].join("\n")}(item,useSourceMap);return item[2]?"@media ".concat(item[2]," {").concat(content,"}"):content})).join("")},list.i=function(modules,mediaQuery,dedupe){"string"==typeof modules&&(modules=[[null,modules,""]]);var alreadyImportedModules={};if(dedupe)for(var i=0;i<this.length;i++){var id=this[i][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);dedupe&&alreadyImportedModules[item[0]]||(mediaQuery&&(item[2]?item[2]="".concat(mediaQuery," and ").concat(item[2]):item[2]=mediaQuery),list.push(item))}},list}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"f",(function(){return getTemplateListLink})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getTemplateDetailsLink})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getTemplateEditLink})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getTemplateCloneLink})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getIndexListUri})),__webpack_require__.d(__webpack_exports__,"a",(function(){return getDataStreamDetailsLink}));const getTemplateListLink=()=>"/templates",getTemplateDetailsLink=(name,isLegacy)=>{let url="/templates/"+encodeURIComponent(name);return isLegacy&&(url=`${url}?legacy=${isLegacy}`),encodeURI(url)},getTemplateEditLink=(name,isLegacy)=>{let url="/edit_template/"+encodeURIComponent(name);return isLegacy&&(url+="?legacy=true"),encodeURI(url)},getTemplateCloneLink=(name,isLegacy)=>{let url="/clone_template/"+encodeURIComponent(name);return isLegacy&&(url+="?legacy=true"),encodeURI(url)},getIndexListUri=(filter,includeHiddenIndices)=>filter?encodeURI(`/indices?includeHiddenIndices=${void 0!==includeHiddenIndices&&includeHiddenIndices}&filter=${encodeURIComponent(filter)}`):"/indices",getDataStreamDetailsLink=name=>encodeURI("/data_streams/"+encodeURIComponent(name))},function(module,__webpack_exports__,__webpack_require__){"use strict";let extensionsService;__webpack_require__.d(__webpack_exports__,"b",(function(){return setExtensionsService})),__webpack_require__.d(__webpack_exports__,"a",(function(){return extensionsService}));const setExtensionsService=_extensionsService=>{extensionsService=_extensionsService}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PLUGIN}));const PLUGIN={id:"index_management",minimumLicenseType:"basic",getI18nName:i18n=>i18n.translate("xpack.idxMgmt.appTitle",{defaultMessage:"Index Management"})}},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(8);__kbnBundles__.define("plugin/indexManagement/public",__webpack_require__,18)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.indexManagement},function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(10);case"v7light":return __webpack_require__(12);case"v8dark":return __webpack_require__(14);case"v8light":return __webpack_require__(16)}},function(module,exports,__webpack_require__){var api=__webpack_require__(1),content=__webpack_require__(11);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},function(module,exports,__webpack_require__){(exports=__webpack_require__(2)(!1)).push([module.i,".mappingsEditor__editField__formRow{margin-bottom:32px}.mappingsEditor__editField__formRow:last-child{margin-bottom:0}.mappingsEditor__editField__formRow__description{padding-top:8px}.mappingsEditor__fieldsListItem--dottedLine>.mappingsEditor__fieldsListItem__field{border-bottom-style:dashed}.mappingsEditor__fieldsListItem__field{border-bottom:1px solid #343741;height:64px;margin-top:4px}.mappingsEditor__fieldsListItem__field--enabled:hover{background-color:#25262E}.mappingsEditor__fieldsListItem__field--highlighted{background-color:#25262E}.mappingsEditor__fieldsListItem__field--highlighted:hover{background-color:#25262E}.mappingsEditor__fieldsListItem__field--dim{opacity:.3}.mappingsEditor__fieldsListItem__field--dim:hover{background-color:initial}.mappingsEditor__fieldsListItem__wrapper{padding-left:4px}.mappingsEditor__fieldsListItem__wrapper--indent{padding-left:16px}.mappingsEditor__fieldsListItem__content{height:64px;position:relative}.mappingsEditor__fieldsListItem__content--indent{padding-left:32px}.mappingsEditor__fieldsListItem__toggle{padding-left:4px;width:24px}.mappingsEditor__fieldsListItem__actions{padding-left:8px}.mappingsEditor__editField{min-width:680px}.mappingsEditor__createFieldWrapper{background-color:#25262E;border-right:1px solid #343741;border-bottom:1px solid #343741;border-left:1px solid #343741;padding:16px}.mappingsEditor__createFieldContent{position:relative}.mappingsEditor__createFieldContent__formFields{max-width:600px}.mappingsEditor__createFieldRequiredProps{margin-top:24px;padding-top:16px;border-top:1px solid #343741}.mappingsEditor__selectWithCustom{position:relative}.mappingsEditor__selectWithCustom__button{position:absolute;right:0;top:0}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::before{border-bottom:1px solid #535966;content:'';left:16px;position:absolute;top:50%;width:8px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::after,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::after{border-left:1px solid #535966;content:'';left:16px;position:absolute;top:calc(50% - 8px);height:8px}.mappingsEditor__fieldsList .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent{padding-left:16px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--toggle .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content{padding-left:32px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::after,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField{padding-left:24px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle{padding-left:0}ul.esUiTree{padding:0;margin:0;list-style-type:none;position:relative;padding-top:4px}ul.esUiTree li.esUiTreeItem{list-style-type:none;border-left:1px solid #343741;margin-left:24px;padding-bottom:8px}ul.esUiTree .esUiTreeItem__label{font-size:14px;padding-left:24px;position:relative}ul.esUiTree .esUiTreeItem__label::before{content:'';position:absolute;top:0;left:-1px;bottom:50%;width:16px;border:1px solid #343741;border-top:none;border-right:none}ul.esUiTree>li.esUiTreeItem:first-child{padding-top:8px}ul.esUiTree>li.esUiTreeItem:last-child{border-left-color:transparent;padding-bottom:0}.indTable thead th.indTable__header--name{width:25%}.indTable .indTable__cell--name{word-break:break-all}.indDetail__codeBlock{background:transparent}\n",""]),module.exports=exports},function(module,exports,__webpack_require__){var api=__webpack_require__(1),content=__webpack_require__(13);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},function(module,exports,__webpack_require__){(exports=__webpack_require__(2)(!1)).push([module.i,".mappingsEditor__editField__formRow{margin-bottom:32px}.mappingsEditor__editField__formRow:last-child{margin-bottom:0}.mappingsEditor__editField__formRow__description{padding-top:8px}.mappingsEditor__fieldsListItem--dottedLine>.mappingsEditor__fieldsListItem__field{border-bottom-style:dashed}.mappingsEditor__fieldsListItem__field{border-bottom:1px solid #D3DAE6;height:64px;margin-top:4px}.mappingsEditor__fieldsListItem__field--enabled:hover{background-color:#F5F7FA}.mappingsEditor__fieldsListItem__field--highlighted{background-color:#F5F7FA}.mappingsEditor__fieldsListItem__field--highlighted:hover{background-color:#F5F7FA}.mappingsEditor__fieldsListItem__field--dim{opacity:.3}.mappingsEditor__fieldsListItem__field--dim:hover{background-color:initial}.mappingsEditor__fieldsListItem__wrapper{padding-left:4px}.mappingsEditor__fieldsListItem__wrapper--indent{padding-left:16px}.mappingsEditor__fieldsListItem__content{height:64px;position:relative}.mappingsEditor__fieldsListItem__content--indent{padding-left:32px}.mappingsEditor__fieldsListItem__toggle{padding-left:4px;width:24px}.mappingsEditor__fieldsListItem__actions{padding-left:8px}.mappingsEditor__editField{min-width:680px}.mappingsEditor__createFieldWrapper{background-color:#F5F7FA;border-right:1px solid #D3DAE6;border-bottom:1px solid #D3DAE6;border-left:1px solid #D3DAE6;padding:16px}.mappingsEditor__createFieldContent{position:relative}.mappingsEditor__createFieldContent__formFields{max-width:600px}.mappingsEditor__createFieldRequiredProps{margin-top:24px;padding-top:16px;border-top:1px solid #D3DAE6}.mappingsEditor__selectWithCustom{position:relative}.mappingsEditor__selectWithCustom__button{position:absolute;right:0;top:0}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::before{border-bottom:1px solid #98A2B3;content:'';left:16px;position:absolute;top:50%;width:8px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::after,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::after{border-left:1px solid #98A2B3;content:'';left:16px;position:absolute;top:calc(50% - 8px);height:8px}.mappingsEditor__fieldsList .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent{padding-left:16px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--toggle .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content{padding-left:32px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::after,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField{padding-left:24px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle{padding-left:0}ul.esUiTree{padding:0;margin:0;list-style-type:none;position:relative;padding-top:4px}ul.esUiTree li.esUiTreeItem{list-style-type:none;border-left:1px solid #D3DAE6;margin-left:24px;padding-bottom:8px}ul.esUiTree .esUiTreeItem__label{font-size:14px;padding-left:24px;position:relative}ul.esUiTree .esUiTreeItem__label::before{content:'';position:absolute;top:0;left:-1px;bottom:50%;width:16px;border:1px solid #D3DAE6;border-top:none;border-right:none}ul.esUiTree>li.esUiTreeItem:first-child{padding-top:8px}ul.esUiTree>li.esUiTreeItem:last-child{border-left-color:transparent;padding-bottom:0}.indTable thead th.indTable__header--name{width:25%}.indTable .indTable__cell--name{word-break:break-all}.indDetail__codeBlock{background:transparent}\n",""]),module.exports=exports},function(module,exports,__webpack_require__){var api=__webpack_require__(1),content=__webpack_require__(15);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},function(module,exports,__webpack_require__){(exports=__webpack_require__(2)(!1)).push([module.i,".mappingsEditor__editField__formRow{margin-bottom:32px}.mappingsEditor__editField__formRow:last-child{margin-bottom:0}.mappingsEditor__editField__formRow__description{padding-top:8px}.mappingsEditor__fieldsListItem--dottedLine>.mappingsEditor__fieldsListItem__field{border-bottom-style:dashed}.mappingsEditor__fieldsListItem__field{border-bottom:1px solid #343741;height:64px;margin-top:4px}.mappingsEditor__fieldsListItem__field--enabled:hover{background-color:#25262E}.mappingsEditor__fieldsListItem__field--highlighted{background-color:#25262E}.mappingsEditor__fieldsListItem__field--highlighted:hover{background-color:#25262E}.mappingsEditor__fieldsListItem__field--dim{opacity:.3}.mappingsEditor__fieldsListItem__field--dim:hover{background-color:initial}.mappingsEditor__fieldsListItem__wrapper{padding-left:4px}.mappingsEditor__fieldsListItem__wrapper--indent{padding-left:16px}.mappingsEditor__fieldsListItem__content{height:64px;position:relative}.mappingsEditor__fieldsListItem__content--indent{padding-left:32px}.mappingsEditor__fieldsListItem__toggle{padding-left:4px;width:24px}.mappingsEditor__fieldsListItem__actions{padding-left:8px}.mappingsEditor__editField{min-width:680px}.mappingsEditor__createFieldWrapper{background-color:#25262E;border-right:1px solid #343741;border-bottom:1px solid #343741;border-left:1px solid #343741;padding:16px}.mappingsEditor__createFieldContent{position:relative}.mappingsEditor__createFieldContent__formFields{max-width:600px}.mappingsEditor__createFieldRequiredProps{margin-top:24px;padding-top:16px;border-top:1px solid #343741}.mappingsEditor__selectWithCustom{position:relative}.mappingsEditor__selectWithCustom__button{position:absolute;right:0;top:0}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::before{border-bottom:1px solid #535966;content:'';left:16px;position:absolute;top:50%;width:8px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::after,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::after{border-left:1px solid #535966;content:'';left:16px;position:absolute;top:calc(50% - 8px);height:8px}.mappingsEditor__fieldsList .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent{padding-left:16px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--toggle .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content{padding-left:32px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::after,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField{padding-left:24px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle{padding-left:0}ul.esUiTree{padding:0;margin:0;list-style-type:none;position:relative;padding-top:4px}ul.esUiTree li.esUiTreeItem{list-style-type:none;border-left:1px solid #343741;margin-left:24px;padding-bottom:8px}ul.esUiTree .esUiTreeItem__label{font-size:14px;padding-left:24px;position:relative}ul.esUiTree .esUiTreeItem__label::before{content:'';position:absolute;top:0;left:-1px;bottom:50%;width:16px;border:1px solid #343741;border-top:none;border-right:none}ul.esUiTree>li.esUiTreeItem:first-child{padding-top:8px}ul.esUiTree>li.esUiTreeItem:last-child{border-left-color:transparent;padding-bottom:0}.indTable thead th.indTable__header--name{width:25%}.indTable .indTable__cell--name{word-break:break-all}.indDetail__codeBlock{background:transparent}\n",""]),module.exports=exports},function(module,exports,__webpack_require__){var api=__webpack_require__(1),content=__webpack_require__(17);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},function(module,exports,__webpack_require__){(exports=__webpack_require__(2)(!1)).push([module.i,".mappingsEditor__editField__formRow{margin-bottom:32px}.mappingsEditor__editField__formRow:last-child{margin-bottom:0}.mappingsEditor__editField__formRow__description{padding-top:8px}.mappingsEditor__fieldsListItem--dottedLine>.mappingsEditor__fieldsListItem__field{border-bottom-style:dashed}.mappingsEditor__fieldsListItem__field{border-bottom:1px solid #D3DAE6;height:64px;margin-top:4px}.mappingsEditor__fieldsListItem__field--enabled:hover{background-color:#F5F7FA}.mappingsEditor__fieldsListItem__field--highlighted{background-color:#F5F7FA}.mappingsEditor__fieldsListItem__field--highlighted:hover{background-color:#F5F7FA}.mappingsEditor__fieldsListItem__field--dim{opacity:.3}.mappingsEditor__fieldsListItem__field--dim:hover{background-color:initial}.mappingsEditor__fieldsListItem__wrapper{padding-left:4px}.mappingsEditor__fieldsListItem__wrapper--indent{padding-left:16px}.mappingsEditor__fieldsListItem__content{height:64px;position:relative}.mappingsEditor__fieldsListItem__content--indent{padding-left:32px}.mappingsEditor__fieldsListItem__toggle{padding-left:4px;width:24px}.mappingsEditor__fieldsListItem__actions{padding-left:8px}.mappingsEditor__editField{min-width:680px}.mappingsEditor__createFieldWrapper{background-color:#F5F7FA;border-right:1px solid #D3DAE6;border-bottom:1px solid #D3DAE6;border-left:1px solid #D3DAE6;padding:16px}.mappingsEditor__createFieldContent{position:relative}.mappingsEditor__createFieldContent__formFields{max-width:600px}.mappingsEditor__createFieldRequiredProps{margin-top:24px;padding-top:16px;border-top:1px solid #D3DAE6}.mappingsEditor__selectWithCustom{position:relative}.mappingsEditor__selectWithCustom__button{position:absolute;right:0;top:0}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::before{border-bottom:1px solid #98A2B3;content:'';left:16px;position:absolute;top:50%;width:8px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::after,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::after{border-left:1px solid #98A2B3;content:'';left:16px;position:absolute;top:calc(50% - 8px);height:8px}.mappingsEditor__fieldsList .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent{padding-left:16px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--toggle .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content{padding-left:32px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::after,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField{padding-left:24px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle{padding-left:0}ul.esUiTree{padding:0;margin:0;list-style-type:none;position:relative;padding-top:4px}ul.esUiTree li.esUiTreeItem{list-style-type:none;border-left:1px solid #D3DAE6;margin-left:24px;padding-bottom:8px}ul.esUiTree .esUiTreeItem__label{font-size:14px;padding-left:24px;position:relative}ul.esUiTree .esUiTreeItem__label::before{content:'';position:absolute;top:0;left:-1px;bottom:50%;width:16px;border:1px solid #D3DAE6;border-top:none;border-right:none}ul.esUiTree>li.esUiTreeItem:first-child{padding-top:8px}ul.esUiTree>li.esUiTreeItem:last-child{border-left-color:transparent;padding-bottom:0}.indTable thead th.indTable__header--name{width:25%}.indTable .indTable__cell--name{word-break:break-all}.indDetail__codeBlock{background:transparent}\n",""]),module.exports=exports},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin})),__webpack_require__.d(__webpack_exports__,"IndexManagementPluginSetup",(function(){return types.IndexManagementPluginSetup})),__webpack_require__.d(__webpack_exports__,"getIndexListUri",(function(){return routing.b}));__webpack_require__(9);var external_kbnSharedDeps_KbnI18n_=__webpack_require__(0),extension_service=__webpack_require__(4);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class extensions_service_ExtensionsService{constructor(){_defineProperty(this,"_summaries",[]),_defineProperty(this,"_actions",[]),_defineProperty(this,"_banners",[]),_defineProperty(this,"_filters",[]),_defineProperty(this,"_badges",[{matchIndex:index=>index.isFrozen,label:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.idxMgmt.frozenBadgeLabel",{defaultMessage:"Frozen"}),filterExpression:"isFrozen:true",color:"primary"}]),_defineProperty(this,"_toggles",[]),_defineProperty(this,"service",void 0)}setup(){return this.service={addAction:this.addAction.bind(this),addBadge:this.addBadge.bind(this),addBanner:this.addBanner.bind(this),addFilter:this.addFilter.bind(this),addSummary:this.addSummary.bind(this),addToggle:this.addToggle.bind(this)},this.service}addSummary(summary){this._summaries.push(summary)}addAction(action){this._actions.push(action)}addBanner(banner){this._banners.push(banner)}addFilter(filter){this._filters.push(filter)}addBadge(badge){this._badges.push(badge)}addToggle(toggle){this._toggles.push(toggle)}get summaries(){return this._summaries}get actions(){return this._actions}get banners(){return this._banners}get filters(){return this._filters}get badges(){return this._badges}get toggles(){return this._toggles}}var constants_plugin=__webpack_require__(5);class plugin_IndexMgmtUIPlugin{constructor(){var obj,key,value;obj=this,key="extensionsService",value=new extensions_service_ExtensionsService,key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,Object(extension_service.b)(this.extensionsService)}setup(coreSetup,plugins){const{fleet:fleet,usageCollection:usageCollection,management:management}=plugins;return management.sections.section.data.registerApp({id:constants_plugin.a.id,title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.idxMgmt.appTitle",{defaultMessage:"Index Management"}),order:0,mount:async params=>{const{mountManagementSection:mountManagementSection}=await __webpack_require__.e(1).then(__webpack_require__.bind(null,179));return mountManagementSection(coreSetup,usageCollection,params,this.extensionsService,Boolean(fleet))}}),{extensionsService:this.extensionsService.setup()}}start(){}stop(){}}var types=__webpack_require__(6),routing=__webpack_require__(3);const public_plugin=()=>new plugin_IndexMgmtUIPlugin},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/static/forms/hook_form_lib");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/static/forms/components");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/static/forms/helpers");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.KbnAnalytics},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactRouterDom},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/runtimeFields/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/esUiShared/static/validators/string");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("entry/core/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,exports){module.exports=__kbnSharedDeps__.Moment}]);