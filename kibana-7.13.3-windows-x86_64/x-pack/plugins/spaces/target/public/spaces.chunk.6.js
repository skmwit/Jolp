/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.spaces_bundle_jsonpfunction=window.spaces_bundle_jsonpfunction||[]).push([[6],{187:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SpacesGridPage",(function(){return spaces_grid_page_SpacesGridPage}));var external_kbnSharedDeps_ElasticEui_=__webpack_require__(2),external_kbnSharedDeps_React_=__webpack_require__(0),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_KbnI18n_=__webpack_require__(1),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(7),public_=__webpack_require__(22),common=__webpack_require__(13),constants=__webpack_require__(4),public_constants=__webpack_require__(18),space_avatar=__webpack_require__(3),components=__webpack_require__(46),feature_utils=__webpack_require__(35);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const LazySpaceAvatar=Object(external_kbnSharedDeps_React_.lazy)(()=>Object(space_avatar.a)().then(component=>({default:component})));class spaces_grid_page_SpacesGridPage extends external_kbnSharedDeps_React_.Component{constructor(props){super(props),_defineProperty(this,"getConfirmDeleteModal",()=>{if(!this.state.showConfirmDeleteModal||!this.state.selectedSpace)return null;const{spacesManager:spacesManager}=this.props;return external_kbnSharedDeps_React_default.a.createElement(components.a,{space:this.state.selectedSpace,spacesManager:spacesManager,onCancel:()=>{this.setState({showConfirmDeleteModal:!1})},onConfirm:this.deleteSpace})}),_defineProperty(this,"deleteSpace",async()=>{const{spacesManager:spacesManager}=this.props,space=this.state.selectedSpace;if(!space)return;this.setState({showConfirmDeleteModal:!1});try{await spacesManager.deleteSpace(space)}catch(error){const{message:errorMessage=""}=error.data||error.body||{};return void this.props.notifications.toasts.addDanger(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.errorDeletingSpaceErrorMessage",{defaultMessage:"Error deleting space: {errorMessage}",values:{errorMessage:errorMessage}}))}this.loadGrid();const message=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.spaceSuccessfullyDeletedNotificationMessage",{defaultMessage:'Deleted "{spaceName}" space.',values:{spaceName:space.name}});this.props.notifications.toasts.addSuccess(message)}),_defineProperty(this,"loadGrid",async()=>{const{spacesManager:spacesManager,getFeatures:getFeatures,notifications:notifications}=this.props;this.setState({loading:!0,spaces:[],features:[]});const getSpaces=spacesManager.getSpaces();try{const[spaces,features]=await Promise.all([getSpaces,getFeatures()]);this.setState({loading:!1,spaces:spaces,features:features})}catch(error){this.setState({loading:!1}),notifications.toasts.addError(error,{title:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.errorTitle",{defaultMessage:"Error loading spaces"})})}}),_defineProperty(this,"getEditSpacePath",space=>"edit/"+encodeURIComponent(space.id)),_defineProperty(this,"onDeleteSpaceClick",space=>{this.setState({selectedSpace:space,showConfirmDeleteModal:!0})}),this.state={spaces:[],features:[],loading:!0,showConfirmDeleteModal:!1,selectedSpace:null}}componentDidMount(){this.props.capabilities.spaces.manage&&this.loadGrid()}render(){return external_kbnSharedDeps_React_default.a.createElement("div",{className:"spcGridPage","data-test-subj":"spaces-grid-page"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContent,{horizontalPosition:"center"},this.getPageContent()),this.getConfirmDeleteModal())}getPageContent(){return this.props.capabilities.spaces.manage?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{justifyContent:"spaceBetween"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"m"},external_kbnSharedDeps_React_default.a.createElement("h1",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.spacesTitle",defaultMessage:"Spaces"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{color:"subdued",size:"s"},external_kbnSharedDeps_React_default.a.createElement("p",null,Object(public_constants.a)()))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},this.getPrimaryActionButton())),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"l"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiInMemoryTable,{itemId:"id",items:this.state.spaces,tableCaption:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.tableCaption",{defaultMessage:"Kibana spaces"}),rowHeader:"name",columns:this.getColumnConfig(),hasActions:!0,pagination:!0,sorting:!0,search:{box:{placeholder:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.searchPlaceholder",{defaultMessage:"Search"})}},loading:this.state.loading,message:this.state.loading?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.loadingTitle",defaultMessage:"loading…"}):void 0})):external_kbnSharedDeps_React_default.a.createElement(components.b,null)}getPrimaryActionButton(){return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButton,_extends({fill:!0},Object(public_.reactRouterNavigate)(this.props.history,"/create"),{"data-test-subj":"createSpace"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.createSpaceButtonLabel",defaultMessage:"Create a space"}))}getColumnConfig(){return[{field:"initials",name:"",width:"50px",render:(value,record)=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Suspense,{fallback:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLoadingSpinner,null)},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLink,Object(public_.reactRouterNavigate)(this.props.history,this.getEditSpacePath(record)),external_kbnSharedDeps_React_default.a.createElement(LazySpaceAvatar,{space:record,size:"s"})))},{field:"name",name:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.spaceColumnName",{defaultMessage:"Space"}),sortable:!0,render:(value,record)=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLink,Object(public_.reactRouterNavigate)(this.props.history,this.getEditSpacePath(record)),value)},{field:"description",name:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.descriptionColumnName",{defaultMessage:"Description"}),sortable:!0},{field:"disabledFeatures",name:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.featuresColumnName",{defaultMessage:"Features"}),sortable:space=>Object(feature_utils.a)(this.state.features,space).length,render:(disabledFeatures,record)=>{const enabledFeatureCount=Object(feature_utils.a)(this.state.features,record).length;return enabledFeatureCount===this.state.features.length?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.allFeaturesEnabled",defaultMessage:"All features visible"}):0===enabledFeatureCount?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{color:"danger"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.noFeaturesEnabled",defaultMessage:"No features visible"})):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.someFeaturesEnabled",defaultMessage:"{enabledFeatureCount} / {totalFeatureCount} features visible",values:{enabledFeatureCount:enabledFeatureCount,totalFeatureCount:this.state.features.length}})}},{field:"id",name:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.identifierColumnName",{defaultMessage:"Identifier"}),sortable:!0,render:id=>id===constants.b?"":id},{name:external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.actionsColumnName",{defaultMessage:"Actions"}),actions:[{render:record=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonIcon,_extends({"data-test-subj":record.name+"-editSpace","aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.editSpaceActionName",{defaultMessage:"Edit {spaceName}.",values:{spaceName:record.name}}),color:"primary",iconType:"pencil"},Object(public_.reactRouterNavigate)(this.props.history,this.getEditSpacePath(record))))},{available:record=>!Object(common.isReservedSpace)(record),render:record=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonIcon,{"data-test-subj":record.name+"-deleteSpace","aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.spaces.management.spacesGridPage.deleteActionName",{defaultMessage:"Delete {spaceName}.",values:{spaceName:record.name}}),color:"danger",iconType:"trash",onClick:()=>this.onDeleteSpaceClick(record)})}]}]}}},32:function(module,exports,__webpack_require__){"use strict";var memo,isOldIE=function(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo},getTarget=function(){var memo={};return function(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var textStore,replaceText=(textStore=[],function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")});function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function(){!function(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},33:function(module,exports,__webpack_require__){"use strict";module.exports=function(useSourceMap){var list=[];return list.toString=function(){return this.map((function(item){var content=function(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=(sourceMap=cssMapping,base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),"/*# ".concat(data," */")),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}var sourceMap,base64,data;return[content].join("\n")}(item,useSourceMap);return item[2]?"@media ".concat(item[2]," {").concat(content,"}"):content})).join("")},list.i=function(modules,mediaQuery,dedupe){"string"==typeof modules&&(modules=[[null,modules,""]]);var alreadyImportedModules={};if(dedupe)for(var i=0;i<this.length;i++){var id=this[i][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);dedupe&&alreadyImportedModules[item[0]]||(mediaQuery&&(item[2]?item[2]="".concat(mediaQuery," and ").concat(item[2]):item[2]=mediaQuery),list.push(item))}},list}},34:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ConfirmDeleteModal}));__webpack_require__(37);var external_kbnSharedDeps_ElasticEui_=__webpack_require__(2),external_kbnSharedDeps_React_=__webpack_require__(0),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(7);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class confirm_delete_modal_ConfirmDeleteModalUI extends external_kbnSharedDeps_React_.Component{constructor(...args){super(...args),_defineProperty(this,"state",{confirmSpaceName:"",error:null,deleteInProgress:!1,isDeletingCurrentSpace:!1}),_defineProperty(this,"onSpaceNameChange",e=>{"boolean"==typeof this.state.error?this.setState({confirmSpaceName:e.target.value,error:e.target.value!==this.props.space.name}):this.setState({confirmSpaceName:e.target.value})}),_defineProperty(this,"onConfirm",async()=>{if(this.state.confirmSpaceName===this.props.space.name){const needsRedirect=this.state.isDeletingCurrentSpace,spacesManager=this.props.spacesManager;this.setState({deleteInProgress:!0}),await this.props.onConfirm(),this.setState({deleteInProgress:!1}),needsRedirect&&spacesManager.redirectToSpaceSelector()}else this.setState({error:!0})})}componentDidMount(){(async function(space,spacesManager){return space.id===(await spacesManager.getActiveSpace()).id})(this.props.space,this.props.spacesManager).then(result=>{this.setState({isDeletingCurrentSpace:result})})}render(){const{space:space,onCancel:onCancel,intl:intl}=this.props,{isDeletingCurrentSpace:isDeletingCurrentSpace}=this.state;let warning=null;if(isDeletingCurrentSpace){const name=external_kbnSharedDeps_React_default.a.createElement("span",null,"(",external_kbnSharedDeps_React_default.a.createElement("strong",null,space.name),")");warning=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,null),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCallOut,{color:"warning"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.confirmDeleteModal.redirectAfterDeletingCurrentSpaceWarningMessage",defaultMessage:"You are about to delete your current space {name}. You will be redirected to choose a different space if you continue.",values:{name:name}}))))}const modalProps={onClose:onCancel,className:"spcConfirmDeleteModal",initialFocus:'input[name="confirmDeleteSpaceInput"]'};return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiModal,modalProps,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiModalHeader,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiModalHeaderTitle,{"data-test-subj":"confirmModalTitleText"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.confirmDeleteModal.confirmDeleteSpaceButtonLabel",defaultMessage:"Delete space {spaceName}",values:{spaceName:"'"+space.name+"'"}}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiModalBody,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{"data-test-subj":"confirmModalBodyText"},external_kbnSharedDeps_React_default.a.createElement("p",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.confirmDeleteModal.deletingSpaceWarningMessage",defaultMessage:"Deleting a space permanently removes the space and {allContents}. You can't undo this action.",values:{allContents:external_kbnSharedDeps_React_default.a.createElement("strong",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.confirmDeleteModal.allContentsText",defaultMessage:"all of its contents"}))}})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{label:intl.formatMessage({id:"xpack.spaces.management.confirmDeleteModal.confirmSpaceNameFormRowLabel",defaultMessage:"Confirm space name to delete"}),isInvalid:!!this.state.error,error:intl.formatMessage({id:"xpack.spaces.management.confirmDeleteModal.spaceNamesDoNoMatchErrorMessage",defaultMessage:"Space names do not match."})},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFieldText,{"data-test-subj":"deleteSpaceInput",name:"confirmDeleteSpaceInput",value:this.state.confirmSpaceName,onChange:this.onSpaceNameChange,disabled:this.state.deleteInProgress})),warning)),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiModalFooter,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,{"data-test-subj":"confirmModalCancelButton",onClick:onCancel,isDisabled:this.state.deleteInProgress},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.confirmDeleteModal.cancelButtonLabel",defaultMessage:"Cancel"})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButton,{"data-test-subj":"confirmModalConfirmButton",onClick:this.onConfirm,fill:!0,color:"danger",isLoading:this.state.deleteInProgress},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.confirmDeleteModal.deleteSpaceAndAllContentsButtonLabel",defaultMessage:" Delete space and all contents"}))))}}const ConfirmDeleteModal=Object(external_kbnSharedDeps_KbnI18nReact_.injectI18n)(confirm_delete_modal_ConfirmDeleteModalUI)},35:function(module,__webpack_exports__,__webpack_require__){"use strict";function getEnabledFeatures(features,space){return features.filter(feature=>!(space.disabledFeatures||[]).includes(feature.id))}__webpack_require__.d(__webpack_exports__,"a",(function(){return getEnabledFeatures}))},37:function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(38);case"v7light":return __webpack_require__(40);case"v8dark":return __webpack_require__(42);case"v8light":return __webpack_require__(44)}},38:function(module,exports,__webpack_require__){var api=__webpack_require__(32),content=__webpack_require__(39);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},39:function(module,exports,__webpack_require__){(exports=__webpack_require__(33)(!1)).push([module.i,".spcConfirmDeleteModal{max-width:448px}\n",""]),module.exports=exports},40:function(module,exports,__webpack_require__){var api=__webpack_require__(32),content=__webpack_require__(41);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},41:function(module,exports,__webpack_require__){(exports=__webpack_require__(33)(!1)).push([module.i,".spcConfirmDeleteModal{max-width:448px}\n",""]),module.exports=exports},42:function(module,exports,__webpack_require__){var api=__webpack_require__(32),content=__webpack_require__(43);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},43:function(module,exports,__webpack_require__){(exports=__webpack_require__(33)(!1)).push([module.i,".spcConfirmDeleteModal{max-width:448px}\n",""]),module.exports=exports},44:function(module,exports,__webpack_require__){var api=__webpack_require__(32),content=__webpack_require__(45);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},45:function(module,exports,__webpack_require__){(exports=__webpack_require__(33)(!1)).push([module.i,".spcConfirmDeleteModal{max-width:448px}\n",""]),module.exports=exports},46:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return confirm_delete_modal.a})),__webpack_require__.d(__webpack_exports__,"b",(function(){return UnauthorizedPrompt}));var confirm_delete_modal=__webpack_require__(34),external_kbnSharedDeps_ElasticEui_=__webpack_require__(2),external_kbnSharedDeps_React_=__webpack_require__(0),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(7);const UnauthorizedPrompt=()=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiEmptyPrompt,{iconType:"spacesApp",iconColor:"danger",title:external_kbnSharedDeps_React_default.a.createElement("h2",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.unauthorizedPrompt.permissionDeniedTitle",defaultMessage:"Permission denied"})),body:external_kbnSharedDeps_React_default.a.createElement("p",{"data-test-subj":"permissionDeniedMessage"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"xpack.spaces.management.unauthorizedPrompt.permissionDeniedDescription",defaultMessage:"You don't have permission to manage spaces."}))})}}]);