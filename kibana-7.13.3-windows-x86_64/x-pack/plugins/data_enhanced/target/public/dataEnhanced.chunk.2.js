/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.dataEnhanced_bundle_jsonpfunction=window.dataEnhanced_bundle_jsonpfunction||[]).push([[2],{28:function(module,exports,__webpack_require__){"use strict";var memo,isOldIE=function(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo},getTarget=function(){var memo={};return function(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var textStore,replaceText=(textStore=[],function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")});function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function(){!function(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},29:function(module,exports,__webpack_require__){"use strict";module.exports=function(useSourceMap){var list=[];return list.toString=function(){return this.map((function(item){var content=function(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=(sourceMap=cssMapping,base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),"/*# ".concat(data," */")),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}var sourceMap,base64,data;return[content].join("\n")}(item,useSourceMap);return item[2]?"@media ".concat(item[2]," {").concat(content,"}"):content})).join("")},list.i=function(modules,mediaQuery,dedupe){"string"==typeof modules&&(modules=[[null,modules,""]]);var alreadyImportedModules={};if(dedupe)for(var i=0;i<this.length;i++){var id=this[i][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);dedupe&&alreadyImportedModules[item[0]]||(mediaQuery&&(item[2]?item[2]="".concat(mediaQuery," and ").concat(item[2]):item[2]=mediaQuery),list.push(item))}},list}},72:function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(73);case"v7light":return __webpack_require__(75);case"v8dark":return __webpack_require__(77);case"v8light":return __webpack_require__(79)}},73:function(module,exports,__webpack_require__){var api=__webpack_require__(28),content=__webpack_require__(74);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},74:function(module,exports,__webpack_require__){(exports=__webpack_require__(29)(!1)).push([module.i,".searchSessionIndicator{padding:0 4px}.searchSessionIndicator__panel{width:288px}\n",""]),module.exports=exports},75:function(module,exports,__webpack_require__){var api=__webpack_require__(28),content=__webpack_require__(76);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},76:function(module,exports,__webpack_require__){(exports=__webpack_require__(29)(!1)).push([module.i,".searchSessionIndicator{padding:0 4px}.searchSessionIndicator__panel{width:288px}\n",""]),module.exports=exports},77:function(module,exports,__webpack_require__){var api=__webpack_require__(28),content=__webpack_require__(78);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},78:function(module,exports,__webpack_require__){(exports=__webpack_require__(29)(!1)).push([module.i,".searchSessionIndicator{padding:0 4px}.searchSessionIndicator__panel{width:288px}\n",""]),module.exports=exports},79:function(module,exports,__webpack_require__){var api=__webpack_require__(28),content=__webpack_require__(80);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},80:function(module,exports,__webpack_require__){(exports=__webpack_require__(29)(!1)).push([module.i,".searchSessionIndicator{padding:0 4px}.searchSessionIndicator__panel{width:288px}\n",""]),module.exports=exports},81:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SearchSessionIndicator",(function(){return SearchSessionIndicator}));var external_kbnSharedDeps_React_=__webpack_require__(0),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_ElasticEui_=__webpack_require__(12),external_kbnSharedDeps_Moment_=__webpack_require__(13),external_kbnSharedDeps_Moment_default=__webpack_require__.n(external_kbnSharedDeps_Moment_),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(25),external_kbnSharedDeps_KbnI18n_=__webpack_require__(6);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}__webpack_require__(72);var public_=__webpack_require__(3);const SearchSessionName=({name:name,editName:editName})=>{const[isEditing,setIsEditing]=external_kbnSharedDeps_React_default.a.useState(!1),[newName,setNewName]=external_kbnSharedDeps_React_default.a.useState(name),[isSaving,setIsSaving]=external_kbnSharedDeps_React_default.a.useState(!1),isNewNameValid=!!newName;return Object(external_kbnSharedDeps_React_.useEffect)(()=>{isEditing||setNewName(name)},[isEditing,name]),isEditing?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFieldText,{autoFocus:!0,compressed:!0,placeholder:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionName.placeholderText",{defaultMessage:"Enter a name for the search session"}),value:newName,onChange:e=>{setNewName(e.target.value)},"aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionName.ariaLabelText",{defaultMessage:"Search session name"}),"data-test-subj":"searchSessionNameInput",append:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,{size:"xs",color:"text",onClick:async()=>{if(isNewNameValid){if(newName!==name&&editName){setIsSaving(!0);try{await editName(newName)}catch(e){}}setIsSaving(!1),setIsEditing(!1)}},disabled:!isNewNameValid,isLoading:isSaving,"data-test-subj":"searchSessionNameSave"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.data.searchSessionName.saveButtonText",defaultMessage:"Save"}))}):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{wrap:!1,responsive:!1,alignItems:"center",justifyContent:"spaceBetween",gutterSize:"none",style:{paddingTop:4,paddingBottom:4}},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"s",className:"eui-textTruncate"},external_kbnSharedDeps_React_default.a.createElement("h4",{className:"eui-textTruncate"},name)),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonIcon,{autoFocus:!0,iconType:"pencil",color:"text","aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionName.editAriaLabelText",{defaultMessage:"Edit search session name"}),"data-test-subj":"searchSessionNameEdit",onClick:()=>setIsEditing(!0)}))};function search_session_indicator_extends(){return(search_session_indicator_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const CancelButton=({onCancel:onCancel=(()=>{}),buttonProps:buttonProps={}})=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,search_session_indicator_extends({onClick:onCancel,"data-test-subj":"searchSessionIndicatorCancelBtn",color:"danger"},buttonProps),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.data.searchSessionIndicator.cancelButtonText",defaultMessage:"Stop session"})),ViewAllSearchSessionsButton=({viewSearchSessionsLink:viewSearchSessionsLink="management/kibana/search_sessions",onViewSearchSessions:onViewSearchSessions=(()=>{}),buttonProps:buttonProps={},managementDisabled:managementDisabled,managementDisabledReasonText:managementDisabledReasonText})=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiToolTip,{content:managementDisabledReasonText},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,search_session_indicator_extends({href:viewSearchSessionsLink,onClick:onViewSearchSessions,"data-test-subj":"searchSessionIndicatorViewSearchSessionsLink",isDisabled:managementDisabled},buttonProps),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.data.searchSessionIndicator.viewSearchSessionsLinkText",defaultMessage:"Manage sessions"}))),searchSessionIndicatorViewStateToProps={[public_.SearchSessionState.None]:null,[public_.SearchSessionState.Loading]:{button:{color:"subdued",iconType:({title:title,titleId:titleId,...props})=>external_kbnSharedDeps_React_default.a.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:16,height:16,"aria-labelledby":titleId},props),title?external_kbnSharedDeps_React_default.a.createElement("title",{id:titleId},title):null,external_kbnSharedDeps_React_default.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 13c3.033 0 5.5-2.467 5.5-5.5S10.533 2 7.5 2c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5C11.09 1 14 3.91 14 7.5S11.09 14 7.5 14 1 11.09 1 7.5c0-.27614.22386-.5.5-.5s.5.22386.5.5C2 10.533 4.467 13 7.5 13zM4.6724 1.96808c0 .27614.22386.5.5.5s.5-.22386.5-.5-.22386-.5-.5-.5-.5.22386-.5.5zM2.8627 3.15836c0 .27614.22386.5.5.5s.5-.22386.5-.5c0-.27615-.22386-.5-.5-.5s-.5.22385-.5.5zm-.82355 2.33755c-.27615 0-.5-.22386-.5-.5s.22385-.5.5-.5c.27614 0 .5.22386.5.5s-.22386.5-.5.5zM10.5 7H8V3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v4c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5s-.224-.5-.5-.5z"})),"aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.loadingResultsIconAriaLabel",{defaultMessage:"Search session loading"}),tooltipText:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.loadingResultsIconTooltipText",{defaultMessage:"Search session loading"})},popover:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.loadingResultsTitle",{defaultMessage:"Your search is taking a while..."}),description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.loadingResultsDescription",{defaultMessage:"Save your session, continue your work, and return to completed results"}),whenText:props=>external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.loadingResultsWhenText",{defaultMessage:"Started {when}",values:{when:props.startedTime?external_kbnSharedDeps_Moment_default()(props.startedTime).format("L @ LTS"):""}}),primaryAction:CancelButton,secondaryAction:({onContinueInBackground:onContinueInBackground=(()=>{}),buttonProps:buttonProps={},saveDisabled:saveDisabled=!1,saveDisabledReasonText:saveDisabledReasonText})=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiToolTip,{content:saveDisabledReasonText},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,search_session_indicator_extends({onClick:onContinueInBackground,"data-test-subj":"searchSessionIndicatorContinueInBackgroundBtn",isDisabled:saveDisabled},buttonProps),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.data.searchSessionIndicator.continueInBackgroundButtonText",defaultMessage:"Save session"})))}},[public_.SearchSessionState.Completed]:{button:{color:"subdued",iconType:"check","aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.resultsLoadedIconAriaLabel",{defaultMessage:"Search session complete"}),tooltipText:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.resultsLoadedIconTooltipText",{defaultMessage:"Search session complete"})},popover:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.resultsLoadedText",{defaultMessage:"Search session complete"}),description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.resultsLoadedDescriptionText",{defaultMessage:"Save your session and return to it later"}),whenText:props=>external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.resultsLoadedWhenText",{defaultMessage:"Completed {when}",values:{when:props.completedTime?external_kbnSharedDeps_Moment_default()(props.completedTime).format("L @ LTS"):""}}),primaryAction:({onSaveResults:onSaveResults=(()=>{}),buttonProps:buttonProps={},saveDisabled:saveDisabled=!1,saveDisabledReasonText:saveDisabledReasonText})=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiToolTip,{content:saveDisabledReasonText},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,search_session_indicator_extends({onClick:onSaveResults,"data-test-subj":"searchSessionIndicatorSaveBtn",isDisabled:saveDisabled},buttonProps),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.data.searchSessionIndicator.saveButtonText",defaultMessage:"Save session"}))),secondaryAction:ViewAllSearchSessionsButton}},[public_.SearchSessionState.BackgroundLoading]:{button:{iconType:external_kbnSharedDeps_ElasticEui_.EuiLoadingSpinner,"aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.loadingInTheBackgroundIconAriaLabel",{defaultMessage:"Saved session in progress"}),tooltipText:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.loadingInTheBackgroundIconTooltipText",{defaultMessage:"Saved session in progress"})},popover:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.loadingInTheBackgroundTitleText",{defaultMessage:"Saved session in progress"}),description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.loadingInTheBackgroundDescriptionText",{defaultMessage:"You can return to completed results from Management"}),whenText:props=>external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.loadingInTheBackgroundWhenText",{defaultMessage:"Started {when}",values:{when:props.startedTime?external_kbnSharedDeps_Moment_default()(props.startedTime).format("L @ LTS"):""}}),primaryAction:CancelButton,secondaryAction:ViewAllSearchSessionsButton}},[public_.SearchSessionState.BackgroundCompleted]:{button:{color:"success",iconType:"checkInCircleFilled","aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.resultLoadedInTheBackgroundIconAriaLabel",{defaultMessage:"Saved session complete"}),tooltipText:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.resultLoadedInTheBackgroundIconTooltipText",{defaultMessage:"Saved session complete"})},popover:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.resultLoadedInTheBackgroundTitleText",{defaultMessage:"Search session saved"}),description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.resultLoadedInTheBackgroundDescriptionText",{defaultMessage:"You can return to these results from Management"}),whenText:props=>external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.resultLoadedInTheBackgroundWhenText",{defaultMessage:"Completed {when}",values:{when:props.completedTime?external_kbnSharedDeps_Moment_default()(props.completedTime).format("L @ LTS"):""}}),secondaryAction:ViewAllSearchSessionsButton}},[public_.SearchSessionState.Restored]:{button:{color:"success",iconType:({title:title,titleId:titleId,...props})=>external_kbnSharedDeps_React_default.a.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:16,height:16,"aria-labelledby":titleId},props),title?external_kbnSharedDeps_React_default.a.createElement("title",{id:titleId},title):null,external_kbnSharedDeps_React_default.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 8c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7zm1 0c0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8 0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8zm-9.14533 2.6459c.098.097.226.146.354.146.128 0 .256-.049.354-.146l4.79173-4.79165c.195-.196.195-.512 0-.708-.196-.195-.512-.195-.708 0L7.20867 9.58486 4.85424 7.2295c-.196-.195-.512-.195-.708 0-.195.196-.195.512 0 .708l2.70843 2.7084z"})),"aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.restoredResultsIconAriaLabel",{defaultMessage:"Saved session restored"}),tooltipText:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.restoredResultsTooltipText",{defaultMessage:"Search session restored"})},popover:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.restoredTitleText",{defaultMessage:"Search session restored"}),description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.restoredDescriptionText",{defaultMessage:"You are viewing cached data from a specific time range. Changing the time range or filters will re-run the session"}),whenText:props=>external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.restoredWhenText",{defaultMessage:"Completed {when}",values:{when:props.completedTime?external_kbnSharedDeps_Moment_default()(props.completedTime).format("L @ LTS"):""}}),secondaryAction:ViewAllSearchSessionsButton}},[public_.SearchSessionState.Canceled]:{button:{color:"danger",iconType:"alert","aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.canceledIconAriaLabel",{defaultMessage:"Search session stopped"}),tooltipText:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.canceledTooltipText",{defaultMessage:"Search session stopped"})},popover:{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.canceledTitleText",{defaultMessage:"Search session stopped"}),description:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.canceledDescriptionText",{defaultMessage:"You are viewing incomplete data"}),whenText:props=>external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.data.searchSessionIndicator.canceledWhenText",{defaultMessage:"Stopped {when}",values:{when:props.canceledTime?external_kbnSharedDeps_Moment_default()(props.canceledTime).format("L @ LTS"):""}}),secondaryAction:ViewAllSearchSessionsButton}}},SearchSessionIndicator=external_kbnSharedDeps_React_default.a.forwardRef((props,ref)=>{var _props$saveDisabled,_popover$whenText;const[isPopoverOpen,setIsPopoverOpen]=external_kbnSharedDeps_React_default.a.useState(!1),closePopover=Object(external_kbnSharedDeps_React_.useCallback)(()=>setIsPopoverOpen(!1),[]),onOpened=props.onOpened,openPopover=Object(external_kbnSharedDeps_React_.useCallback)(()=>{setIsPopoverOpen(!0),onOpened&&onOpened(props.state)},[onOpened,props.state]),onButtonClick=Object(external_kbnSharedDeps_React_.useCallback)(()=>{isPopoverOpen?closePopover():openPopover()},[isPopoverOpen,openPopover,closePopover]);if(Object(external_kbnSharedDeps_React_.useImperativeHandle)(ref,()=>({openPopover:()=>{openPopover()},closePopover:()=>{closePopover()}}),[openPopover,closePopover]),!searchSessionIndicatorViewStateToProps[props.state])return null;const{button:button,popover:popover}=searchSessionIndicatorViewStateToProps[props.state];return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPopover,{ownFocus:!0,isOpen:isPopoverOpen,closePopover:closePopover,anchorPosition:"downLeft",panelPaddingSize:"m",className:"searchSessionIndicator","data-test-subj":"searchSessionIndicator","data-state":props.state,"data-save-disabled":null!==(_props$saveDisabled=props.saveDisabled)&&void 0!==_props$saveDisabled&&_props$saveDisabled,panelClassName:"searchSessionIndicator__panel",repositionOnScroll:!0,button:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiToolTip,{content:button.tooltipText,delay:"long"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonIcon,{color:button.color,"aria-label":button["aria-label"],iconType:button.iconType,onClick:onButtonClick}))},external_kbnSharedDeps_React_default.a.createElement("div",{"data-test-subj":"searchSessionIndicatorPopoverContainer"},props.searchSessionName&&props.saveSearchSessionNameFn?external_kbnSharedDeps_React_default.a.createElement(SearchSessionName,{name:props.searchSessionName,editName:props.saveSearchSessionNameFn}):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"s"},external_kbnSharedDeps_React_default.a.createElement("p",null,popover.title)),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"xs"}),null!==(_popover$whenText=popover.whenText)&&void 0!==_popover$whenText&&_popover$whenText.call(popover,props)?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"xs",color:"subdued"},external_kbnSharedDeps_React_default.a.createElement("p",null,popover.whenText(props))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"xs"})):null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"xs",color:"subdued"},external_kbnSharedDeps_React_default.a.createElement("p",null,popover.description)),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{wrap:!0,responsive:!1,alignItems:"center",justifyContent:"flexEnd",gutterSize:"s"},popover.primaryAction&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(popover.primaryAction,search_session_indicator_extends({},props,{buttonProps:{size:"xs"}}))),popover.secondaryAction&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(popover.secondaryAction,search_session_indicator_extends({},props,{buttonProps:{size:"xs",flush:"right"}}))))))});__webpack_exports__.default=SearchSessionIndicator}}]);