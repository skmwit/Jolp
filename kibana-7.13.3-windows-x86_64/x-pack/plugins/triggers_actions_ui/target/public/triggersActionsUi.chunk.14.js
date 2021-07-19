/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[14],{101:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return choicesToEuiOptions}));const choicesToEuiOptions=choices=>choices.map(choice=>({value:choice.value,text:choice.label}))},134:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useGetChoices}));var external_kbnSharedDeps_React_=__webpack_require__(1),constants=__webpack_require__(2);var translations=__webpack_require__(7);const useGetChoices=({http:http,actionConnector:actionConnector,toastNotifications:toastNotifications,fields:fields,onSuccess:onSuccess})=>{const[isLoading,setIsLoading]=Object(external_kbnSharedDeps_React_.useState)(!1),[choices,setChoices]=Object(external_kbnSharedDeps_React_.useState)([]),didCancel=Object(external_kbnSharedDeps_React_.useRef)(!1),abortCtrl=Object(external_kbnSharedDeps_React_.useRef)(new AbortController),fetchData=Object(external_kbnSharedDeps_React_.useCallback)(async()=>{if(actionConnector)try{didCancel.current=!1,abortCtrl.current.abort(),abortCtrl.current=new AbortController,setIsLoading(!0);const res=await async function({http:http,signal:signal,connectorId:connectorId,fields:fields}){return await http.post(`${constants.a}/connector/${encodeURIComponent(connectorId)}/_execute`,{body:JSON.stringify({params:{subAction:"getChoices",subActionParams:{fields:fields}}}),signal:signal})}({http:http,signal:abortCtrl.current.signal,connectorId:actionConnector.id,fields:fields});var _res$data,_res$serviceMessage;if(!didCancel.current)if(setIsLoading(!1),setChoices(null!==(_res$data=res.data)&&void 0!==_res$data?_res$data:[]),res.status&&"error"===res.status)toastNotifications.addDanger({title:translations.g,text:""+(null!==(_res$serviceMessage=res.serviceMessage)&&void 0!==_res$serviceMessage?_res$serviceMessage:res.message)});else if(onSuccess){var _res$data2;onSuccess(null!==(_res$data2=res.data)&&void 0!==_res$data2?_res$data2:[])}}catch(error){didCancel.current||(setIsLoading(!1),toastNotifications.addDanger({title:translations.g,text:error.message}))}else setIsLoading(!1)},[actionConnector,http,fields,onSuccess,toastNotifications]);return Object(external_kbnSharedDeps_React_.useEffect)(()=>(fetchData(),()=>{didCancel.current=!0,abortCtrl.current.abort(),setIsLoading(!1)}),[]),{choices:choices,isLoading:isLoading}}},285:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return ServiceNowSIRParamsFields}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_common_lib_kibana__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(72),_text_area_with_message_variables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(85),_text_field_with_message_variables__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(86),_translations__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),_use_get_choices__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(134),_helpers__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(101);const useGetChoicesFields=["category","subcategory","priority"],defaultFields={category:[],subcategory:[],priority:[]},ServiceNowSIRParamsFields=({actionConnector:actionConnector,actionParams:actionParams,editAction:editAction,index:index,errors:errors,messageVariables:messageVariables})=>{var _actionConnector$id,_incident$short_descr,_incident$source_ip,_incident$dest_ip,_incident$malware_url,_incident$malware_has,_incident$priority,_incident$category,_incident$subcategory,_incident$description;const{http:http,notifications:{toasts:toasts}}=Object(_common_lib_kibana__WEBPACK_IMPORTED_MODULE_2__.b)().services,actionConnectorRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null!==(_actionConnector$id=null==actionConnector?void 0:actionConnector.id)&&void 0!==_actionConnector$id?_actionConnector$id:""),{incident:incident,comments:comments}=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{var _actionParams$subActi;return null!==(_actionParams$subActi=actionParams.subActionParams)&&void 0!==_actionParams$subActi?_actionParams$subActi:{incident:{},comments:[]}},[actionParams.subActionParams]),[choices,setChoices]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultFields),editSubActionProperty=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key,value)=>{const newProps="comments"!==key?{incident:{...incident,[key]:value},comments:comments}:{incident:incident,[key]:value};editAction("subActionParams",newProps,index)},[comments,editAction,incident,index]),editComment=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key,value)=>{value.length>0&&editSubActionProperty(key,[{commentId:"1",comment:value}])},[editSubActionProperty]),onChoicesSuccess=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(values=>{setChoices(values.reduce((acc,value)=>({...acc,[value.element]:[...null!=acc[value.element]?acc[value.element]:[],value]}),defaultFields))},[]),{isLoading:isLoadingChoices}=Object(_use_get_choices__WEBPACK_IMPORTED_MODULE_6__.a)({http:http,toastNotifications:toasts,actionConnector:actionConnector,fields:useGetChoicesFields,onSuccess:onChoicesSuccess}),categoryOptions=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.a)(choices.category),[choices.category]),priorityOptions=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.a)(choices.priority),[choices.priority]),subcategoryOptions=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.a)(choices.subcategory.filter(subcategory=>subcategory.dependent_value===incident.category)),[choices.subcategory,incident.category]);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{null!=actionConnector&&actionConnectorRef.current!==actionConnector.id&&(actionConnectorRef.current=actionConnector.id,editAction("subActionParams",{incident:{},comments:[]},index))},[actionConnector]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{actionParams.subAction||editAction("subAction","pushToService",index),actionParams.subActionParams||editAction("subActionParams",{incident:{},comments:[]},index)},[actionParams]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiTitle,{size:"s"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,_translations__WEBPACK_IMPORTED_MODULE_5__.l)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{fullWidth:!0,error:errors["subActionParams.incident.short_description"],isInvalid:errors["subActionParams.incident.short_description"].length>0&&void 0!==incident.short_description,label:_translations__WEBPACK_IMPORTED_MODULE_5__.y},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_text_field_with_message_variables__WEBPACK_IMPORTED_MODULE_4__.a,{index:index,editAction:editSubActionProperty,messageVariables:messageVariables,paramsProperty:"short_description",inputTargetValue:null!==(_incident$short_descr=null==incident?void 0:incident.short_description)&&void 0!==_incident$short_descr?_incident$short_descr:void 0,errors:errors["subActionParams.incident.short_description"]})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{fullWidth:!0,label:_translations__WEBPACK_IMPORTED_MODULE_5__.z},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_text_field_with_message_variables__WEBPACK_IMPORTED_MODULE_4__.a,{index:index,editAction:editSubActionProperty,messageVariables:messageVariables,paramsProperty:"source_ip",inputTargetValue:null!==(_incident$source_ip=null==incident?void 0:incident.source_ip)&&void 0!==_incident$source_ip?_incident$source_ip:void 0})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{fullWidth:!0,label:_translations__WEBPACK_IMPORTED_MODULE_5__.j},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_text_field_with_message_variables__WEBPACK_IMPORTED_MODULE_4__.a,{index:index,editAction:editSubActionProperty,messageVariables:messageVariables,paramsProperty:"dest_ip",inputTargetValue:null!==(_incident$dest_ip=null==incident?void 0:incident.dest_ip)&&void 0!==_incident$dest_ip?_incident$dest_ip:void 0})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{fullWidth:!0,label:_translations__WEBPACK_IMPORTED_MODULE_5__.n},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_text_field_with_message_variables__WEBPACK_IMPORTED_MODULE_4__.a,{index:index,editAction:editSubActionProperty,messageVariables:messageVariables,paramsProperty:"malware_url",inputTargetValue:null!==(_incident$malware_url=null==incident?void 0:incident.malware_url)&&void 0!==_incident$malware_url?_incident$malware_url:void 0})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{fullWidth:!0,label:_translations__WEBPACK_IMPORTED_MODULE_5__.m},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_text_field_with_message_variables__WEBPACK_IMPORTED_MODULE_4__.a,{index:index,editAction:editSubActionProperty,messageVariables:messageVariables,paramsProperty:"malware_hash",inputTargetValue:null!==(_incident$malware_has=null==incident?void 0:incident.malware_hash)&&void 0!==_incident$malware_has?_incident$malware_has:void 0})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{fullWidth:!0,label:_translations__WEBPACK_IMPORTED_MODULE_5__.q},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSelect,{fullWidth:!0,"data-test-subj":"prioritySelect",hasNoInitialSelection:!0,isLoading:isLoadingChoices,disabled:isLoadingChoices,options:priorityOptions,value:null!==(_incident$priority=incident.priority)&&void 0!==_incident$priority?_incident$priority:void 0,onChange:e=>editSubActionProperty("priority",e.target.value)})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{fullWidth:!0,label:_translations__WEBPACK_IMPORTED_MODULE_5__.f},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSelect,{fullWidth:!0,"data-test-subj":"categorySelect",hasNoInitialSelection:!0,isLoading:isLoadingChoices,disabled:isLoadingChoices,options:categoryOptions,value:null!==(_incident$category=incident.category)&&void 0!==_incident$category?_incident$category:void 0,onChange:e=>{editAction("subActionParams",{incident:{...incident,category:e.target.value,subcategory:null},comments:comments},index)}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{fullWidth:!0,label:_translations__WEBPACK_IMPORTED_MODULE_5__.A},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSelect,{fullWidth:!0,"data-test-subj":"subcategorySelect",hasNoInitialSelection:!0,isLoading:isLoadingChoices,disabled:isLoadingChoices,options:subcategoryOptions,value:null!==(_incident$subcategory=incident.subcategory)&&void 0!==_incident$subcategory?_incident$subcategory:"",onChange:e=>editSubActionProperty("subcategory",e.target.value)})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"m"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_text_area_with_message_variables__WEBPACK_IMPORTED_MODULE_3__.a,{index:index,editAction:editSubActionProperty,messageVariables:messageVariables,paramsProperty:"description",inputTargetValue:null!==(_incident$description=incident.description)&&void 0!==_incident$description?_incident$description:void 0,label:_translations__WEBPACK_IMPORTED_MODULE_5__.i}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_text_area_with_message_variables__WEBPACK_IMPORTED_MODULE_3__.a,{index:index,editAction:editComment,messageVariables:messageVariables,paramsProperty:"comments",inputTargetValue:comments&&comments.length>0?comments[0].comment:void 0,label:_translations__WEBPACK_IMPORTED_MODULE_5__.h}))}},70:function(module,exports,__webpack_require__){"use strict";var memo,isOldIE=function(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo},getTarget=function(){var memo={};return function(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var textStore,replaceText=(textStore=[],function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")});function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function(){!function(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},71:function(module,exports,__webpack_require__){"use strict";module.exports=function(useSourceMap){var list=[];return list.toString=function(){return this.map((function(item){var content=function(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=(sourceMap=cssMapping,base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),"/*# ".concat(data," */")),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}var sourceMap,base64,data;return[content].join("\n")}(item,useSourceMap);return item[2]?"@media ".concat(item[2]," {").concat(content,"}"):content})).join("")},list.i=function(modules,mediaQuery,dedupe){"string"==typeof modules&&(modules=[[null,modules,""]]);var alreadyImportedModules={};if(dedupe)for(var i=0;i<this.length;i++){var id=this[i][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);dedupe&&alreadyImportedModules[item[0]]||(mediaQuery&&(item[2]?item[2]="".concat(mediaQuery," and ").concat(item[2]):item[2]=mediaQuery),list.push(item))}},list}},72:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return public_.KibanaContextProvider})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useTypedKibana}));var public_=__webpack_require__(51);const useTypedKibana=()=>Object(public_.useKibana)()},73:function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(76);case"v7light":return __webpack_require__(78);case"v8dark":return __webpack_require__(80);case"v8light":return __webpack_require__(82)}},74:function(module,__webpack_exports__,__webpack_require__){"use strict";function templateActionVariable(variable){return variable.useWithTripleBracesInTemplates?`{{{${variable.name}}}}`:`{{${variable.name}}}`}__webpack_require__.d(__webpack_exports__,"a",(function(){return templateActionVariable}))},75:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AddMessageVariables}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_elastic_eui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),_lib__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(73),__webpack_require__(74));const AddMessageVariables=({messageVariables:messageVariables,paramsProperty:paramsProperty,onSelectEventHandler:onSelectEventHandler})=>{var _messageVariables$len;const[isVariablesPopoverOpen,setIsVariablesPopoverOpen]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),addVariableButtonTitle=_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addRuleVariableTitle",{defaultMessage:"Add rule variable"});return 0===(null!==(_messageVariables$len=null==messageVariables?void 0:messageVariables.length)&&void 0!==_messageVariables$len?_messageVariables$len:0)?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiPopover,{button:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiButtonIcon,{id:paramsProperty+"AddVariableButton","data-test-subj":paramsProperty+"AddVariableButton",title:addVariableButtonTitle,onClick:()=>setIsVariablesPopoverOpen(!0),iconType:"indexOpen","aria-label":_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addVariablePopoverButton",{defaultMessage:"Add variable"})}),isOpen:isVariablesPopoverOpen,closePopover:()=>setIsVariablesPopoverOpen(!1),panelPaddingSize:"none",anchorPosition:"downLeft"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiContextMenuPanel,{className:"messageVariablesPanel",items:null==messageVariables?void 0:messageVariables.map((variable,i)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiContextMenuItem,{key:variable.name,"data-test-subj":"variableMenuButton-"+variable.name,icon:"empty",disabled:variable.deprecated,onClick:()=>{onSelectEventHandler(variable),setIsVariablesPopoverOpen(!1)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiText,{size:"m","data-test-subj":`variableMenuButton-${i}-templated-name`},Object(_lib__WEBPACK_IMPORTED_MODULE_4__.a)(variable)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiText,{size:"m",color:"subdued"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"euiTextColor--subdued"},variable.description)))))}))}},76:function(module,exports,__webpack_require__){var api=__webpack_require__(70),content=__webpack_require__(77);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},77:function(module,exports,__webpack_require__){(exports=__webpack_require__(71)(!1)).push([module.i,".messageVariablesPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}\n",""]),module.exports=exports},78:function(module,exports,__webpack_require__){var api=__webpack_require__(70),content=__webpack_require__(79);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},79:function(module,exports,__webpack_require__){(exports=__webpack_require__(71)(!1)).push([module.i,".messageVariablesPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}\n",""]),module.exports=exports},80:function(module,exports,__webpack_require__){var api=__webpack_require__(70),content=__webpack_require__(81);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},81:function(module,exports,__webpack_require__){(exports=__webpack_require__(71)(!1)).push([module.i,".messageVariablesPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}\n",""]),module.exports=exports},82:function(module,exports,__webpack_require__){var api=__webpack_require__(70),content=__webpack_require__(83);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},83:function(module,exports,__webpack_require__){(exports=__webpack_require__(71)(!1)).push([module.i,".messageVariablesPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}\n",""]),module.exports=exports},85:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TextAreaWithMessageVariables}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_add_message_variables__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(73),__webpack_require__(75)),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(74);const TextAreaWithMessageVariables=({messageVariables:messageVariables,paramsProperty:paramsProperty,index:index,inputTargetValue:inputTargetValue,editAction:editAction,label:label,errors:errors})=>{const[currentTextElement,setCurrentTextElement]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{fullWidth:!0,error:errors,isInvalid:errors&&errors.length>0&&void 0!==inputTargetValue,label:label,labelAppend:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_add_message_variables__WEBPACK_IMPORTED_MODULE_3__.a,{messageVariables:messageVariables,onSelectEventHandler:variable=>{var _currentTextElement$s,_currentTextElement$s2;const templatedVar=Object(_lib__WEBPACK_IMPORTED_MODULE_4__.a)(variable),startPosition=null!==(_currentTextElement$s=null==currentTextElement?void 0:currentTextElement.selectionStart)&&void 0!==_currentTextElement$s?_currentTextElement$s:0,endPosition=null!==(_currentTextElement$s2=null==currentTextElement?void 0:currentTextElement.selectionEnd)&&void 0!==_currentTextElement$s2?_currentTextElement$s2:0,newValue=(null!=inputTargetValue?inputTargetValue:"").substring(0,startPosition)+templatedVar+(null!=inputTargetValue?inputTargetValue:"").substring(endPosition,(null!=inputTargetValue?inputTargetValue:"").length);editAction(paramsProperty,newValue,index)},paramsProperty:paramsProperty})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiTextArea,{fullWidth:!0,isInvalid:errors&&errors.length>0&&void 0!==inputTargetValue,name:paramsProperty,value:inputTargetValue||"","data-test-subj":paramsProperty+"TextArea",onChange:e=>(e=>{editAction(paramsProperty,e.target.value,index)})(e),onFocus:e=>{setCurrentTextElement(e.target)},onBlur:()=>{inputTargetValue||editAction(paramsProperty,"",index)}}))}},86:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TextFieldWithMessageVariables}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_add_message_variables__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(73),__webpack_require__(75)),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(74);const TextFieldWithMessageVariables=({messageVariables:messageVariables,paramsProperty:paramsProperty,index:index,inputTargetValue:inputTargetValue,editAction:editAction,errors:errors,defaultValue:defaultValue})=>{const[currentTextElement,setCurrentTextElement]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFieldText,{fullWidth:!0,name:paramsProperty,id:paramsProperty+"Id",isInvalid:errors&&errors.length>0&&void 0!==inputTargetValue,"data-test-subj":paramsProperty+"Input",value:inputTargetValue||"",defaultValue:defaultValue,onChange:e=>(e=>{editAction(paramsProperty,e.target.value,index)})(e),onFocus:e=>{setCurrentTextElement(e.target)},onBlur:e=>{inputTargetValue||editAction(paramsProperty,"",index)},append:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_add_message_variables__WEBPACK_IMPORTED_MODULE_3__.a,{messageVariables:messageVariables,onSelectEventHandler:variable=>{var _currentTextElement$s,_currentTextElement$s2;const templatedVar=Object(_lib__WEBPACK_IMPORTED_MODULE_4__.a)(variable),startPosition=null!==(_currentTextElement$s=null==currentTextElement?void 0:currentTextElement.selectionStart)&&void 0!==_currentTextElement$s?_currentTextElement$s:0,endPosition=null!==(_currentTextElement$s2=null==currentTextElement?void 0:currentTextElement.selectionEnd)&&void 0!==_currentTextElement$s2?_currentTextElement$s2:0,newValue=(null!=inputTargetValue?inputTargetValue:"").substring(0,startPosition)+templatedVar+(null!=inputTargetValue?inputTargetValue:"").substring(endPosition,(null!=inputTargetValue?inputTargetValue:"").length);editAction(paramsProperty,newValue,index)},paramsProperty:paramsProperty})})}}}]);