/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[15],{290:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return JiraParamsFields}));var external_kbnSharedDeps_React_=__webpack_require__(1),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_KbnI18n_=__webpack_require__(0),external_kbnSharedDeps_ElasticEui_=__webpack_require__(15),text_area_with_message_variables=__webpack_require__(85),text_field_with_message_variables=__webpack_require__(86),constants=__webpack_require__(2);var translations=__webpack_require__(8);const useGetIssueTypes=({http:http,actionConnector:actionConnector,toastNotifications:toastNotifications})=>{const[isLoading,setIsLoading]=Object(external_kbnSharedDeps_React_.useState)(!0),[issueTypes,setIssueTypes]=Object(external_kbnSharedDeps_React_.useState)([]),abortCtrl=Object(external_kbnSharedDeps_React_.useRef)(new AbortController);return Object(external_kbnSharedDeps_React_.useEffect)(()=>{let didCancel=!1;return abortCtrl.current.abort(),(async()=>{if(actionConnector){abortCtrl.current=new AbortController,setIsLoading(!0);try{const res=await async function({http:http,signal:signal,connectorId:connectorId}){return await http.post(`${constants.a}/connector/${encodeURIComponent(connectorId)}/_execute`,{body:JSON.stringify({params:{subAction:"issueTypes",subActionParams:{}}}),signal:signal})}({http:http,signal:abortCtrl.current.signal,connectorId:actionConnector.id});var _res$data,_res$serviceMessage;if(!didCancel)if(setIsLoading(!1),setIssueTypes(null!==(_res$data=res.data)&&void 0!==_res$data?_res$data:[]),res.status&&"error"===res.status)toastNotifications.addDanger({title:translations.h,text:""+(null!==(_res$serviceMessage=res.serviceMessage)&&void 0!==_res$serviceMessage?_res$serviceMessage:res.message)})}catch(error){didCancel||(setIsLoading(!1),toastNotifications.addDanger({title:translations.h,text:error.message}))}}else setIsLoading(!1)})(),()=>{didCancel=!0,setIsLoading(!1),abortCtrl.current.abort()}},[http,actionConnector,toastNotifications]),{issueTypes:issueTypes,isLoading:isLoading}},useGetFieldsByIssueType=({http:http,toastNotifications:toastNotifications,actionConnector:actionConnector,issueType:issueType})=>{const[isLoading,setIsLoading]=Object(external_kbnSharedDeps_React_.useState)(!0),[fields,setFields]=Object(external_kbnSharedDeps_React_.useState)({}),abortCtrl=Object(external_kbnSharedDeps_React_.useRef)(new AbortController);return Object(external_kbnSharedDeps_React_.useEffect)(()=>{let didCancel=!1;return abortCtrl.current.abort(),(async()=>{if(actionConnector&&issueType){abortCtrl.current=new AbortController,setIsLoading(!0);try{const res=await async function({http:http,signal:signal,connectorId:connectorId,id:id}){return await http.post(`${constants.a}/connector/${encodeURIComponent(connectorId)}/_execute`,{body:JSON.stringify({params:{subAction:"fieldsByIssueType",subActionParams:{id:id}}}),signal:signal})}({http:http,signal:abortCtrl.current.signal,connectorId:actionConnector.id,id:issueType});var _res$data,_res$serviceMessage;if(!didCancel)if(setIsLoading(!1),setFields(null!==(_res$data=res.data)&&void 0!==_res$data?_res$data:{}),res.status&&"error"===res.status)toastNotifications.addDanger({title:translations.e,text:""+(null!==(_res$serviceMessage=res.serviceMessage)&&void 0!==_res$serviceMessage?_res$serviceMessage:res.message)})}catch(error){didCancel||(setIsLoading(!1),toastNotifications.addDanger({title:translations.e,text:error.message}))}}else setIsLoading(!1)})(),()=>{didCancel=!0,setIsLoading(!1),abortCtrl.current.abort()}},[http,actionConnector,issueType,toastNotifications]),{isLoading:isLoading,fields:fields}};var external_kbnSharedDeps_LodashFp_=__webpack_require__(58);const useGetIssues=({http:http,actionConnector:actionConnector,toastNotifications:toastNotifications,query:query})=>{const[isLoading,setIsLoading]=Object(external_kbnSharedDeps_React_.useState)(!1),[issues,setIssues]=Object(external_kbnSharedDeps_React_.useState)([]),abortCtrl=Object(external_kbnSharedDeps_React_.useRef)(new AbortController);return Object(external_kbnSharedDeps_React_.useEffect)(()=>{let didCancel=!1;const fetchData=Object(external_kbnSharedDeps_LodashFp_.debounce)(500,async()=>{if(actionConnector&&!Object(external_kbnSharedDeps_LodashFp_.isEmpty)(query)){abortCtrl.current=new AbortController,setIsLoading(!0);try{const res=await async function({http:http,signal:signal,connectorId:connectorId,title:title}){return await http.post(`${constants.a}/connector/${encodeURIComponent(connectorId)}/_execute`,{body:JSON.stringify({params:{subAction:"issues",subActionParams:{title:title}}}),signal:signal})}({http:http,signal:abortCtrl.current.signal,connectorId:actionConnector.id,title:null!=query?query:""});var _res$data,_res$serviceMessage;if(!didCancel)if(setIsLoading(!1),setIssues(null!==(_res$data=res.data)&&void 0!==_res$data?_res$data:[]),res.status&&"error"===res.status)toastNotifications.addDanger({title:translations.g,text:""+(null!==(_res$serviceMessage=res.serviceMessage)&&void 0!==_res$serviceMessage?_res$serviceMessage:res.message)})}catch(error){didCancel||(setIsLoading(!1),toastNotifications.addDanger({title:translations.g,text:error.message}))}}else setIsLoading(!1)});return abortCtrl.current.abort(),fetchData(),()=>{didCancel=!0,setIsLoading(!1),abortCtrl.current.abort()}},[http,actionConnector,toastNotifications,query]),{issues:issues,isLoading:isLoading}},useGetSingleIssue=({http:http,toastNotifications:toastNotifications,actionConnector:actionConnector,id:id})=>{const[isLoading,setIsLoading]=Object(external_kbnSharedDeps_React_.useState)(!1),[issue,setIssue]=Object(external_kbnSharedDeps_React_.useState)(null),abortCtrl=Object(external_kbnSharedDeps_React_.useRef)(new AbortController);return Object(external_kbnSharedDeps_React_.useEffect)(()=>{let didCancel=!1;return abortCtrl.current.abort(),(async()=>{if(actionConnector&&id){abortCtrl.current=new AbortController,setIsLoading(!0);try{const res=await async function({http:http,signal:signal,connectorId:connectorId,id:id}){return await http.post(`${constants.a}/connector/${encodeURIComponent(connectorId)}/_execute`,{body:JSON.stringify({params:{subAction:"issue",subActionParams:{id:id}}}),signal:signal})}({http:http,signal:abortCtrl.current.signal,connectorId:actionConnector.id,id:id});var _res$data,_res$serviceMessage;if(!didCancel)if(setIsLoading(!1),setIssue(null!==(_res$data=res.data)&&void 0!==_res$data?_res$data:null),res.status&&"error"===res.status)toastNotifications.addDanger({title:translations.f(id),text:""+(null!==(_res$serviceMessage=res.serviceMessage)&&void 0!==_res$serviceMessage?_res$serviceMessage:res.message)})}catch(error){didCancel||(setIsLoading(!1),toastNotifications.addDanger({title:translations.f(id),text:error.message}))}}else setIsLoading(!1)})(),()=>{didCancel=!0,setIsLoading(!1),abortCtrl.current.abort()}},[http,actionConnector,id,toastNotifications]),{isLoading:isLoading,issue:issue}},SearchIssuesComponent=({selectedValue:selectedValue,http:http,toastNotifications:toastNotifications,actionConnector:actionConnector,onChange:onChange})=>{const[query,setQuery]=Object(external_kbnSharedDeps_React_.useState)(null),[selectedOptions,setSelectedOptions]=Object(external_kbnSharedDeps_React_.useState)([]),[options,setOptions]=Object(external_kbnSharedDeps_React_.useState)([]),{isLoading:isLoadingIssues,issues:issues}=useGetIssues({http:http,toastNotifications:toastNotifications,actionConnector:actionConnector,query:query}),{isLoading:isLoadingSingleIssue,issue:singleIssue}=useGetSingleIssue({http:http,toastNotifications:toastNotifications,actionConnector:actionConnector,id:selectedValue});Object(external_kbnSharedDeps_React_.useEffect)(()=>setOptions(issues.map(issue=>({label:issue.title,value:issue.key}))),[issues]),Object(external_kbnSharedDeps_React_.useEffect)(()=>{if(isLoadingSingleIssue||null==singleIssue)return;const singleIssueAsOptions=[{label:singleIssue.title,value:singleIssue.key}];setOptions(singleIssueAsOptions),setSelectedOptions(singleIssueAsOptions)},[singleIssue,isLoadingSingleIssue]);const onSearchChange=Object(external_kbnSharedDeps_React_.useCallback)(searchVal=>{setQuery(searchVal)},[]),onChangeComboBox=Object(external_kbnSharedDeps_React_.useCallback)(changedOptions=>{setSelectedOptions(changedOptions),onChange(changedOptions[0].value)},[onChange]),inputPlaceholder=Object(external_kbnSharedDeps_React_.useMemo)(()=>isLoadingIssues||isLoadingSingleIssue?translations.v:translations.w,[isLoadingIssues,isLoadingSingleIssue]);return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiComboBox,{singleSelection:!0,fullWidth:!0,placeholder:inputPlaceholder,"data-test-sub":"search-parent-issues","aria-label":translations.u,options:options,isLoading:isLoadingIssues||isLoadingSingleIssue,onSearchChange:onSearchChange,selectedOptions:selectedOptions,onChange:onChangeComboBox})},SearchIssues=Object(external_kbnSharedDeps_React_.memo)(SearchIssuesComponent);var kibana=__webpack_require__(72);const JiraParamsFields=({actionConnector:actionConnector,actionParams:actionParams,editAction:editAction,errors:errors,index:index,messageVariables:messageVariables})=>{var _actionConnector$id,_incident$issueType,_incident$issueType2,_incident$priority,_incident$summary,_incident$description;const{http:http,notifications:{toasts:toasts}}=Object(kibana.b)().services,{incident:incident,comments:comments}=Object(external_kbnSharedDeps_React_.useMemo)(()=>{var _actionParams$subActi;return null!==(_actionParams$subActi=actionParams.subActionParams)&&void 0!==_actionParams$subActi?_actionParams$subActi:{incident:{},comments:[]}},[actionParams.subActionParams]),actionConnectorRef=Object(external_kbnSharedDeps_React_.useRef)(null!==(_actionConnector$id=null==actionConnector?void 0:actionConnector.id)&&void 0!==_actionConnector$id?_actionConnector$id:""),{isLoading:isLoadingIssueTypes,issueTypes:issueTypes}=useGetIssueTypes({http:http,toastNotifications:toasts,actionConnector:actionConnector}),{isLoading:isLoadingFields,fields:fields}=useGetFieldsByIssueType({http:http,toastNotifications:toasts,actionConnector:actionConnector,issueType:null!==(_incident$issueType=incident.issueType)&&void 0!==_incident$issueType?_incident$issueType:""}),editSubActionProperty=Object(external_kbnSharedDeps_React_.useCallback)((key,value)=>editAction("subActionParams","issueType"===key?{incident:{issueType:value},comments:comments}:"comments"===key?{incident:incident,comments:value}:{incident:{...incident,[key]:value},comments:comments},index),[comments,editAction,incident,index]),editComment=Object(external_kbnSharedDeps_React_.useCallback)((key,value)=>{value.length>0&&editSubActionProperty(key,[{commentId:"1",comment:value}])},[editSubActionProperty]),{hasLabels:hasLabels,hasDescription:hasDescription,hasPriority:hasPriority,hasParent:hasParent}=Object(external_kbnSharedDeps_React_.useMemo)(()=>null!=fields?{hasLabels:Object.prototype.hasOwnProperty.call(fields,"labels"),hasDescription:Object.prototype.hasOwnProperty.call(fields,"description"),hasPriority:Object.prototype.hasOwnProperty.call(fields,"priority"),hasParent:Object.prototype.hasOwnProperty.call(fields,"parent")}:{hasLabels:!1,hasDescription:!1,hasPriority:!1,hasParent:!1},[fields]),issueTypesSelectOptions=Object(external_kbnSharedDeps_React_.useMemo)(()=>{const doesIssueTypeExist=null==incident.issueType||!issueTypes.length||issueTypes.some(t=>t.id===incident.issueType);var _issueTypes$0$id;incident.issueType&&doesIssueTypeExist||!(issueTypes.length>0)||editSubActionProperty("issueType",null!==(_issueTypes$0$id=issueTypes[0].id)&&void 0!==_issueTypes$0$id?_issueTypes$0$id:"");return issueTypes.map(type=>{var _type$id,_type$name;return{value:null!==(_type$id=type.id)&&void 0!==_type$id?_type$id:"",text:null!==(_type$name=type.name)&&void 0!==_type$name?_type$name:""}})},[editSubActionProperty,incident,issueTypes]),prioritiesSelectOptions=Object(external_kbnSharedDeps_React_.useMemo)(()=>{if(null!=incident.issueType&&null!=fields){const priorities=null!=fields.priority?fields.priority.allowedValues:[],doesPriorityExist=priorities.some(p=>p.name===incident.priority);var _priorities$0$name;if((!incident.priority||!doesPriorityExist)&&priorities.length>0)editSubActionProperty("priority",null!==(_priorities$0$name=priorities[0].name)&&void 0!==_priorities$0$name?_priorities$0$name:"");return priorities.map(p=>({value:p.name,text:p.name}))}return[]},[editSubActionProperty,fields,incident.issueType,incident.priority]);Object(external_kbnSharedDeps_React_.useEffect)(()=>{hasPriority||null==incident.priority||editSubActionProperty("priority",null)},[hasPriority]);const labelOptions=Object(external_kbnSharedDeps_React_.useMemo)(()=>incident.labels?incident.labels.map(label=>({label:label})):[],[incident.labels]);Object(external_kbnSharedDeps_React_.useEffect)(()=>{null!=actionConnector&&actionConnectorRef.current!==actionConnector.id&&(actionConnectorRef.current=actionConnector.id,editAction("subActionParams",{incident:{},comments:[]},index))},[actionConnector]),Object(external_kbnSharedDeps_React_.useEffect)(()=>{actionParams.subAction||editAction("subAction","pushToService",index),actionParams.subActionParams||editAction("subActionParams",{incident:{},comments:[]},index)},[actionParams]);const areLabelsInvalid=null!=errors["subActionParams.incident.labels"]&&errors["subActionParams.incident.labels"].length>0&&void 0!==incident.labels;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:!0,label:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.urgencySelectFieldLabel",{defaultMessage:"Issue type"})},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSelect,{fullWidth:!0,isLoading:isLoadingIssueTypes,disabled:isLoadingIssueTypes||isLoadingFields,"data-test-subj":"issueTypeSelect",options:issueTypesSelectOptions,value:null!==(_incident$issueType2=incident.issueType)&&void 0!==_incident$issueType2?_incident$issueType2:void 0,onChange:e=>editSubActionProperty("issueType",e.target.value)})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiHorizontalRule,null),hasParent&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:!0,label:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.parentIssueSearchLabel",{defaultMessage:"Parent issue"})},external_kbnSharedDeps_React_default.a.createElement(SearchIssues,{"data-test-subj":"parent-search",selectedValue:incident.parent,http:http,toastNotifications:toasts,actionConnector:actionConnector,onChange:parentIssueKey=>{editSubActionProperty("parent",parentIssueKey)}})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,hasPriority&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:!0,label:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.severitySelectFieldLabel",{defaultMessage:"Priority"})},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSelect,{fullWidth:!0,isLoading:isLoadingFields,disabled:isLoadingIssueTypes||isLoadingFields,"data-test-subj":"prioritySelect",options:prioritiesSelectOptions,value:null!==(_incident$priority=incident.priority)&&void 0!==_incident$priority?_incident$priority:void 0,onChange:e=>{editSubActionProperty("priority",e.target.value)}})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{"data-test-subj":"summary-row",fullWidth:!0,error:errors["subActionParams.incident.summary"],isInvalid:errors["subActionParams.incident.summary"].length>0&&void 0!==incident.summary,label:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.summaryFieldLabel",{defaultMessage:"Summary (required)"})},external_kbnSharedDeps_React_default.a.createElement(text_field_with_message_variables.a,{index:index,editAction:editSubActionProperty,messageVariables:messageVariables,paramsProperty:"summary",inputTargetValue:null!==(_incident$summary=incident.summary)&&void 0!==_incident$summary?_incident$summary:void 0,errors:errors["subActionParams.incident.summary"]})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"}),hasLabels&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:!0,label:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.impactSelectFieldLabel",{defaultMessage:"Labels"}),error:errors["subActionParams.incident.labels"],isInvalid:areLabelsInvalid},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiComboBox,{noSuggestions:!0,fullWidth:!0,isLoading:isLoadingFields,isDisabled:isLoadingIssueTypes||isLoadingFields,selectedOptions:labelOptions,onCreateOption:searchValue=>{const newOptions=[...labelOptions,{label:searchValue}];editSubActionProperty("labels",newOptions.map(newOption=>newOption.label))},onChange:selectedOptions=>{editSubActionProperty("labels",selectedOptions.map(selectedOption=>selectedOption.label))},onBlur:()=>{incident.labels||editSubActionProperty("labels",[])},isClearable:!0,"data-test-subj":"labelsComboBox",isInvalid:areLabelsInvalid})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"})),hasDescription&&external_kbnSharedDeps_React_default.a.createElement(text_area_with_message_variables.a,{index:index,editAction:editSubActionProperty,messageVariables:messageVariables,paramsProperty:"description",inputTargetValue:null!==(_incident$description=incident.description)&&void 0!==_incident$description?_incident$description:void 0,label:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.descriptionTextAreaFieldLabel",{defaultMessage:"Description"})}),external_kbnSharedDeps_React_default.a.createElement(text_area_with_message_variables.a,{index:index,editAction:editComment,messageVariables:messageVariables,paramsProperty:"comments",inputTargetValue:comments&&comments.length>0?comments[0].comment:void 0,label:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.jira.commentsTextAreaFieldLabel",{defaultMessage:"Additional comments"})}))))}},70:function(module,exports,__webpack_require__){"use strict";var memo,isOldIE=function(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo},getTarget=function(){var memo={};return function(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var textStore,replaceText=(textStore=[],function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")});function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function(){!function(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},71:function(module,exports,__webpack_require__){"use strict";module.exports=function(useSourceMap){var list=[];return list.toString=function(){return this.map((function(item){var content=function(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=(sourceMap=cssMapping,base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),"/*# ".concat(data," */")),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}var sourceMap,base64,data;return[content].join("\n")}(item,useSourceMap);return item[2]?"@media ".concat(item[2]," {").concat(content,"}"):content})).join("")},list.i=function(modules,mediaQuery,dedupe){"string"==typeof modules&&(modules=[[null,modules,""]]);var alreadyImportedModules={};if(dedupe)for(var i=0;i<this.length;i++){var id=this[i][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);dedupe&&alreadyImportedModules[item[0]]||(mediaQuery&&(item[2]?item[2]="".concat(mediaQuery," and ").concat(item[2]):item[2]=mediaQuery),list.push(item))}},list}},72:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return public_.KibanaContextProvider})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useTypedKibana}));var public_=__webpack_require__(51);const useTypedKibana=()=>Object(public_.useKibana)()},73:function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(76);case"v7light":return __webpack_require__(78);case"v8dark":return __webpack_require__(80);case"v8light":return __webpack_require__(82)}},74:function(module,__webpack_exports__,__webpack_require__){"use strict";function templateActionVariable(variable){return variable.useWithTripleBracesInTemplates?`{{{${variable.name}}}}`:`{{${variable.name}}}`}__webpack_require__.d(__webpack_exports__,"a",(function(){return templateActionVariable}))},75:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AddMessageVariables}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_elastic_eui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),_lib__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(73),__webpack_require__(74));const AddMessageVariables=({messageVariables:messageVariables,paramsProperty:paramsProperty,onSelectEventHandler:onSelectEventHandler})=>{var _messageVariables$len;const[isVariablesPopoverOpen,setIsVariablesPopoverOpen]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),addVariableButtonTitle=_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addRuleVariableTitle",{defaultMessage:"Add rule variable"});return 0===(null!==(_messageVariables$len=null==messageVariables?void 0:messageVariables.length)&&void 0!==_messageVariables$len?_messageVariables$len:0)?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiPopover,{button:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiButtonIcon,{id:paramsProperty+"AddVariableButton","data-test-subj":paramsProperty+"AddVariableButton",title:addVariableButtonTitle,onClick:()=>setIsVariablesPopoverOpen(!0),iconType:"indexOpen","aria-label":_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addVariablePopoverButton",{defaultMessage:"Add variable"})}),isOpen:isVariablesPopoverOpen,closePopover:()=>setIsVariablesPopoverOpen(!1),panelPaddingSize:"none",anchorPosition:"downLeft"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiContextMenuPanel,{className:"messageVariablesPanel",items:null==messageVariables?void 0:messageVariables.map((variable,i)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiContextMenuItem,{key:variable.name,"data-test-subj":"variableMenuButton-"+variable.name,icon:"empty",disabled:variable.deprecated,onClick:()=>{onSelectEventHandler(variable),setIsVariablesPopoverOpen(!1)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiText,{size:"m","data-test-subj":`variableMenuButton-${i}-templated-name`},Object(_lib__WEBPACK_IMPORTED_MODULE_4__.a)(variable)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__.EuiText,{size:"m",color:"subdued"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"euiTextColor--subdued"},variable.description)))))}))}},76:function(module,exports,__webpack_require__){var api=__webpack_require__(70),content=__webpack_require__(77);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},77:function(module,exports,__webpack_require__){(exports=__webpack_require__(71)(!1)).push([module.i,".messageVariablesPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}\n",""]),module.exports=exports},78:function(module,exports,__webpack_require__){var api=__webpack_require__(70),content=__webpack_require__(79);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},79:function(module,exports,__webpack_require__){(exports=__webpack_require__(71)(!1)).push([module.i,".messageVariablesPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}\n",""]),module.exports=exports},80:function(module,exports,__webpack_require__){var api=__webpack_require__(70),content=__webpack_require__(81);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},81:function(module,exports,__webpack_require__){(exports=__webpack_require__(71)(!1)).push([module.i,".messageVariablesPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}\n",""]),module.exports=exports},82:function(module,exports,__webpack_require__){var api=__webpack_require__(70),content=__webpack_require__(83);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},83:function(module,exports,__webpack_require__){(exports=__webpack_require__(71)(!1)).push([module.i,".messageVariablesPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}\n",""]),module.exports=exports},85:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TextAreaWithMessageVariables}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_add_message_variables__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(73),__webpack_require__(75)),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(74);const TextAreaWithMessageVariables=({messageVariables:messageVariables,paramsProperty:paramsProperty,index:index,inputTargetValue:inputTargetValue,editAction:editAction,label:label,errors:errors})=>{const[currentTextElement,setCurrentTextElement]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{fullWidth:!0,error:errors,isInvalid:errors&&errors.length>0&&void 0!==inputTargetValue,label:label,labelAppend:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_add_message_variables__WEBPACK_IMPORTED_MODULE_3__.a,{messageVariables:messageVariables,onSelectEventHandler:variable=>{var _currentTextElement$s,_currentTextElement$s2;const templatedVar=Object(_lib__WEBPACK_IMPORTED_MODULE_4__.a)(variable),startPosition=null!==(_currentTextElement$s=null==currentTextElement?void 0:currentTextElement.selectionStart)&&void 0!==_currentTextElement$s?_currentTextElement$s:0,endPosition=null!==(_currentTextElement$s2=null==currentTextElement?void 0:currentTextElement.selectionEnd)&&void 0!==_currentTextElement$s2?_currentTextElement$s2:0,newValue=(null!=inputTargetValue?inputTargetValue:"").substring(0,startPosition)+templatedVar+(null!=inputTargetValue?inputTargetValue:"").substring(endPosition,(null!=inputTargetValue?inputTargetValue:"").length);editAction(paramsProperty,newValue,index)},paramsProperty:paramsProperty})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiTextArea,{fullWidth:!0,isInvalid:errors&&errors.length>0&&void 0!==inputTargetValue,name:paramsProperty,value:inputTargetValue||"","data-test-subj":paramsProperty+"TextArea",onChange:e=>(e=>{editAction(paramsProperty,e.target.value,index)})(e),onFocus:e=>{setCurrentTextElement(e.target)},onBlur:()=>{inputTargetValue||editAction(paramsProperty,"",index)}}))}},86:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TextFieldWithMessageVariables}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_add_message_variables__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(73),__webpack_require__(75)),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(74);const TextFieldWithMessageVariables=({messageVariables:messageVariables,paramsProperty:paramsProperty,index:index,inputTargetValue:inputTargetValue,editAction:editAction,errors:errors,defaultValue:defaultValue})=>{const[currentTextElement,setCurrentTextElement]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFieldText,{fullWidth:!0,name:paramsProperty,id:paramsProperty+"Id",isInvalid:errors&&errors.length>0&&void 0!==inputTargetValue,"data-test-subj":paramsProperty+"Input",value:inputTargetValue||"",defaultValue:defaultValue,onChange:e=>(e=>{editAction(paramsProperty,e.target.value,index)})(e),onFocus:e=>{setCurrentTextElement(e.target)},onBlur:e=>{inputTargetValue||editAction(paramsProperty,"",index)},append:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_add_message_variables__WEBPACK_IMPORTED_MODULE_3__.a,{messageVariables:messageVariables,onSelectEventHandler:variable=>{var _currentTextElement$s,_currentTextElement$s2;const templatedVar=Object(_lib__WEBPACK_IMPORTED_MODULE_4__.a)(variable),startPosition=null!==(_currentTextElement$s=null==currentTextElement?void 0:currentTextElement.selectionStart)&&void 0!==_currentTextElement$s?_currentTextElement$s:0,endPosition=null!==(_currentTextElement$s2=null==currentTextElement?void 0:currentTextElement.selectionEnd)&&void 0!==_currentTextElement$s2?_currentTextElement$s2:0,newValue=(null!=inputTargetValue?inputTargetValue:"").substring(0,startPosition)+templatedVar+(null!=inputTargetValue?inputTargetValue:"").substring(endPosition,(null!=inputTargetValue?inputTargetValue:"").length);editAction(paramsProperty,newValue,index)},paramsProperty:paramsProperty})})}}}]);