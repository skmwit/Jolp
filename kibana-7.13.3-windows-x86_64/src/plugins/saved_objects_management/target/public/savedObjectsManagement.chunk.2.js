(window.savedObjectsManagement_bundle_jsonpfunction=window.savedObjectsManagement_bundle_jsonpfunction||[]).push([[2],{22:function(module,exports,__webpack_require__){"use strict";const strictUriEncode=__webpack_require__(23),decodeComponent=__webpack_require__(24),splitOnFirst=__webpack_require__(25);function validateArrayFormatSeparator(value){if("string"!=typeof value||1!==value.length)throw new TypeError("arrayFormatSeparator must be single character string")}function encode(value,options){return options.encode?options.strict?strictUriEncode(value):encodeURIComponent(value):value}function decode(value,options){return options.decode?decodeComponent(value):value}function removeHash(input){const hashStart=input.indexOf("#");return-1!==hashStart&&(input=input.slice(0,hashStart)),input}function extract(input){const queryStart=(input=removeHash(input)).indexOf("?");return-1===queryStart?"":input.slice(queryStart+1)}function parseValue(value,options){return options.parseNumbers&&!Number.isNaN(Number(value))&&"string"==typeof value&&""!==value.trim()?value=Number(value):!options.parseBooleans||null===value||"true"!==value.toLowerCase()&&"false"!==value.toLowerCase()||(value="true"===value.toLowerCase()),value}function parse(input,options){validateArrayFormatSeparator((options=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},options)).arrayFormatSeparator);const formatter=function(options){let result;switch(options.arrayFormat){case"index":return(key,value,accumulator)=>{result=/\[(\d*)\]$/.exec(key),key=key.replace(/\[\d*\]$/,""),result?(void 0===accumulator[key]&&(accumulator[key]={}),accumulator[key][result[1]]=value):accumulator[key]=value};case"bracket":return(key,value,accumulator)=>{result=/(\[\])$/.exec(key),key=key.replace(/\[\]$/,""),result?void 0!==accumulator[key]?accumulator[key]=[].concat(accumulator[key],value):accumulator[key]=[value]:accumulator[key]=value};case"comma":case"separator":return(key,value,accumulator)=>{const newValue="string"==typeof value&&value.split("").indexOf(options.arrayFormatSeparator)>-1?value.split(options.arrayFormatSeparator).map(item=>decode(item,options)):null===value?value:decode(value,options);accumulator[key]=newValue};default:return(key,value,accumulator)=>{void 0!==accumulator[key]?accumulator[key]=[].concat(accumulator[key],value):accumulator[key]=value}}}(options),ret=Object.create(null);if("string"!=typeof input)return ret;if(!(input=input.trim().replace(/^[?#&]/,"")))return ret;for(const param of input.split("&")){let[key,value]=splitOnFirst(options.decode?param.replace(/\+/g," "):param,"=");value=void 0===value?null:["comma","separator"].includes(options.arrayFormat)?value:decode(value,options),formatter(decode(key,options),value,ret)}for(const key of Object.keys(ret)){const value=ret[key];if("object"==typeof value&&null!==value)for(const k of Object.keys(value))value[k]=parseValue(value[k],options);else ret[key]=parseValue(value,options)}return!1===options.sort?ret:(!0===options.sort?Object.keys(ret).sort():Object.keys(ret).sort(options.sort)).reduce((result,key)=>{const value=ret[key];return Boolean(value)&&"object"==typeof value&&!Array.isArray(value)?result[key]=function keysSorter(input){return Array.isArray(input)?input.sort():"object"==typeof input?keysSorter(Object.keys(input)).sort((a,b)=>Number(a)-Number(b)).map(key=>input[key]):input}(value):result[key]=value,result},Object.create(null))}exports.extract=extract,exports.parse=parse,exports.stringify=(object,options)=>{if(!object)return"";validateArrayFormatSeparator((options=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},options)).arrayFormatSeparator);const shouldFilter=key=>options.skipNull&&null==object[key]||options.skipEmptyString&&""===object[key],formatter=function(options){switch(options.arrayFormat){case"index":return key=>(result,value)=>{const index=result.length;return void 0===value||options.skipNull&&null===value||options.skipEmptyString&&""===value?result:null===value?[...result,[encode(key,options),"[",index,"]"].join("")]:[...result,[encode(key,options),"[",encode(index,options),"]=",encode(value,options)].join("")]};case"bracket":return key=>(result,value)=>void 0===value||options.skipNull&&null===value||options.skipEmptyString&&""===value?result:null===value?[...result,[encode(key,options),"[]"].join("")]:[...result,[encode(key,options),"[]=",encode(value,options)].join("")];case"comma":case"separator":return key=>(result,value)=>null==value||0===value.length?result:0===result.length?[[encode(key,options),"=",encode(value,options)].join("")]:[[result,encode(value,options)].join(options.arrayFormatSeparator)];default:return key=>(result,value)=>void 0===value||options.skipNull&&null===value||options.skipEmptyString&&""===value?result:null===value?[...result,encode(key,options)]:[...result,[encode(key,options),"=",encode(value,options)].join("")]}}(options),objectCopy={};for(const key of Object.keys(object))shouldFilter(key)||(objectCopy[key]=object[key]);const keys=Object.keys(objectCopy);return!1!==options.sort&&keys.sort(options.sort),keys.map(key=>{const value=object[key];return void 0===value?"":null===value?encode(key,options):Array.isArray(value)?value.reduce(formatter(key),[]).join("&"):encode(key,options)+"="+encode(value,options)}).filter(x=>x.length>0).join("&")},exports.parseUrl=(input,options)=>{options=Object.assign({decode:!0},options);const[url,hash]=splitOnFirst(input,"#");return Object.assign({url:url.split("?")[0]||"",query:parse(extract(input),options)},options&&options.parseFragmentIdentifier&&hash?{fragmentIdentifier:decode(hash,options)}:{})},exports.stringifyUrl=(input,options)=>{options=Object.assign({encode:!0,strict:!0},options);const url=removeHash(input.url).split("?")[0]||"",queryFromUrl=exports.extract(input.url),parsedQueryFromUrl=exports.parse(queryFromUrl,{sort:!1}),query=Object.assign(parsedQueryFromUrl,input.query);let queryString=exports.stringify(query,options);queryString&&(queryString="?"+queryString);let hash=function(url){let hash="";const hashStart=url.indexOf("#");return-1!==hashStart&&(hash=url.slice(hashStart)),hash}(input.url);return input.fragmentIdentifier&&(hash="#"+encode(input.fragmentIdentifier,options)),`${url}${queryString}${hash}`}},23:function(module,exports,__webpack_require__){"use strict";module.exports=str=>encodeURIComponent(str).replace(/[!'()*]/g,x=>"%"+x.charCodeAt(0).toString(16).toUpperCase())},24:function(module,exports,__webpack_require__){"use strict";var singleMatcher=new RegExp("%[a-f0-9]{2}","gi"),multiMatcher=new RegExp("(%[a-f0-9]{2})+","gi");function decodeComponents(components,split){try{return decodeURIComponent(components.join(""))}catch(err){}if(1===components.length)return components;split=split||1;var left=components.slice(0,split),right=components.slice(split);return Array.prototype.concat.call([],decodeComponents(left),decodeComponents(right))}function decode(input){try{return decodeURIComponent(input)}catch(err){for(var tokens=input.match(singleMatcher),i=1;i<tokens.length;i++)tokens=(input=decodeComponents(tokens,i).join("")).match(singleMatcher);return input}}module.exports=function(encodedURI){if("string"!=typeof encodedURI)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof encodedURI+"`");try{return encodedURI=encodedURI.replace(/\+/g," "),decodeURIComponent(encodedURI)}catch(err){return function(input){for(var replaceMap={"%FE%FF":"��","%FF%FE":"��"},match=multiMatcher.exec(input);match;){try{replaceMap[match[0]]=decodeURIComponent(match[0])}catch(err){var result=decode(match[0]);result!==match[0]&&(replaceMap[match[0]]=result)}match=multiMatcher.exec(input)}replaceMap["%C2"]="�";for(var entries=Object.keys(replaceMap),i=0;i<entries.length;i++){var key=entries[i];input=input.replace(new RegExp(key,"g"),replaceMap[key])}return input}(encodedURI)}}},25:function(module,exports,__webpack_require__){"use strict";module.exports=(string,separator)=>{if("string"!=typeof string||"string"!=typeof separator)throw new TypeError("Expected the arguments to be of type `string`");if(""===separator)return[string];const separatorIndex=string.indexOf(separator);return-1===separatorIndex?[string]:[string.slice(0,separatorIndex),string.slice(separatorIndex+separator.length)]}},39:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return SavedObjectsEditionPage}));var external_kbnSharedDeps_React_=__webpack_require__(12),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_ReactRouterDom_=__webpack_require__(15),query_string=__webpack_require__(22),external_kbnSharedDeps_KbnI18n_=__webpack_require__(1),public_=__webpack_require__(16),external_kbnSharedDeps_ElasticEui_=__webpack_require__(13),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(14);const Header=({canEdit:canEdit,canDelete:canDelete,canViewInApp:canViewInApp,type:type,viewUrl:viewUrl,onDeleteClick:onDeleteClick})=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContentHeader,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContentHeaderSection,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,null,canEdit?external_kbnSharedDeps_React_default.a.createElement("h1",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.editItemTitle",defaultMessage:"Edit {title}",values:{title:type}})):external_kbnSharedDeps_React_default.a.createElement("h1",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.viewItemTitle",defaultMessage:"View {title}",values:{title:type}})))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContentHeaderSection,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{responsive:!1},canViewInApp&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButton,{size:"s",href:viewUrl,iconType:"eye","data-test-subj":"savedObjectEditViewInApp"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.viewItemButtonLabel",defaultMessage:"View {title}",values:{title:type}}))),canDelete&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButton,{color:"danger",size:"s",iconType:"trash",onClick:()=>onDeleteClick(),"data-test-subj":"savedObjectEditDelete"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.deleteItemButtonLabel",defaultMessage:"Delete {title}",values:{title:type}})))))),NotFoundErrors=({type:type})=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCallOut,{title:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.savedObjectProblemErrorMessage",defaultMessage:"There is a problem with this saved object"}),iconType:"alert",color:"danger"},external_kbnSharedDeps_React_default.a.createElement("div",null,(()=>{switch(type){case"search":return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.savedSearchDoesNotExistErrorMessage",defaultMessage:"The saved search associated with this object no longer exists."});case"index-pattern":return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.indexPatternDoesNotExistErrorMessage",defaultMessage:"The index pattern associated with this object no longer exists."});case"index-pattern-field":return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.fieldDoesNotExistErrorMessage",defaultMessage:"A field associated with this object no longer exists in the index pattern."});default:return null}})()),external_kbnSharedDeps_React_default.a.createElement("div",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.howToFixErrorDescription",defaultMessage:"If you know what this error means, go ahead and fix it — otherwise click the delete button above."}))),Intro=()=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCallOut,{title:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.howToModifyObjectTitle",defaultMessage:"Proceed with caution!"}),iconType:"alert",color:"warning"},external_kbnSharedDeps_React_default.a.createElement("div",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.howToModifyObjectDescription",defaultMessage:"Modifying objects is for advanced users only. Object properties are not validated and invalid objects could cause errors, data loss, or worse. Unless someone with intimate knowledge of the code told you to be in here, you probably shouldn’t be."})));var external_kbnSharedDeps_SaferLodashSet_=__webpack_require__(18),external_kbnSharedDeps_Lodash_=__webpack_require__(0);class field_Field extends external_kbnSharedDeps_React_.PureComponent{render(){const{name:name}=this.props;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:!0,label:name},this.renderField())}onCodeEditorChange(targetValue){const{name:name,onChange:onChange}=this.props;let invalid=!1;try{JSON.parse(targetValue)}catch(e){invalid=!0}onChange(name,{value:targetValue,invalid:invalid})}onFieldChange(targetValue){const{name:name,type:type,onChange:onChange}=this.props;let newParsedValue=targetValue,invalid=!1;if("number"===type)try{newParsedValue=Number(newParsedValue)}catch(e){invalid=!0}onChange(name,{value:newParsedValue,invalid:invalid})}renderField(){var _state$value;const{type:type,name:name,state:state,disabled:disabled}=this.props,currentValue=null!==(_state$value=null==state?void 0:state.value)&&void 0!==_state$value?_state$value:this.props.value;switch(type){case"number":return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFieldNumber,{name:name,id:this.fieldId,value:currentValue,onChange:e=>this.onFieldChange(e.target.value),disabled:disabled,"data-test-subj":"savedObjects-editField-"+name});case"boolean":return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSwitch,{name:name,id:this.fieldId,label:currentValue?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.field.onLabel",defaultMessage:"On"}):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.field.offLabel",defaultMessage:"Off"}),checked:!!currentValue,onChange:e=>this.onFieldChange(e.target.checked),disabled:disabled,"data-test-subj":"savedObjects-editField-"+name});case"json":case"array":return external_kbnSharedDeps_React_default.a.createElement("div",{"data-test-subj":"savedObjects-editField-"+name},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCodeEditor,{name:`savedObjects-editField-${name}-aceEditor`,mode:"json",theme:"textmate",value:currentValue,onChange:value=>this.onCodeEditorChange(value),width:"100%",height:"auto",minLines:6,maxLines:30,isReadOnly:disabled,setOptions:{showLineNumbers:!0,tabSize:2,useSoftTabs:!0},editorProps:{$blockScrolling:1/0},showGutter:!0}));default:return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFieldText,{id:this.fieldId,name:name,value:currentValue,onChange:e=>this.onFieldChange(e.target.value),disabled:disabled,"data-test-subj":"savedObjects-editField-"+name})}}get fieldId(){const{name:name}=this.props;return"savedObjects-editField-"+name}}var lib=__webpack_require__(5);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class form_Form extends external_kbnSharedDeps_React_.Component{constructor(props){super(props),_defineProperty(this,"handleFieldChange",(name,newState)=>{this.setState({fieldStates:{...this.state.fieldStates,[name]:newState}})}),_defineProperty(this,"onCancel",()=>{window.history.back()}),_defineProperty(this,"onSubmit",async()=>{const{object:object,onSave:onSave}=this.props,{fields:fields,fieldStates:fieldStates}=this.state;if(!this.isFormValid())return;this.setState({submitting:!0});const source=Object(external_kbnSharedDeps_Lodash_.cloneDeep)(object.attributes);fields.forEach(field=>{var _fieldStates$field$na,_fieldStates$field$na2;let value=null!==(_fieldStates$field$na=null===(_fieldStates$field$na2=fieldStates[field.name])||void 0===_fieldStates$field$na2?void 0:_fieldStates$field$na2.value)&&void 0!==_fieldStates$field$na?_fieldStates$field$na:field.value;"array"===field.type&&"string"==typeof value&&(value=JSON.parse(value)),Object(external_kbnSharedDeps_SaferLodashSet_.set)(source,field.name,value)});const{references:references,...attributes}=source;await onSave({attributes:attributes,references:references}),this.setState({submitting:!1})}),this.state={fields:[],fieldStates:{},submitting:!1}}componentDidMount(){const{object:object,service:service}=this.props,fields=Object(lib.createFieldList)(object,service);this.setState({fields:fields})}render(){const{editionEnabled:editionEnabled,service:service}=this.props,{fields:fields,fieldStates:fieldStates,submitting:submitting}=this.state,isValid=this.isFormValid();return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiForm,{"data-test-subj":"savedObjectEditForm",role:"form"},fields.map(field=>external_kbnSharedDeps_React_default.a.createElement(field_Field,{key:`${field.type}-${field.name}`,type:field.type,name:field.name,value:field.value,state:fieldStates[field.name],disabled:!editionEnabled,onChange:this.handleFieldChange})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"l"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{responsive:!1,gutterSize:"m"},editionEnabled&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButton,{fill:!0,"aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("savedObjectsManagement.view.saveButtonAriaLabel",{defaultMessage:"Save { title } object",values:{title:service.type}}),onClick:this.onSubmit,disabled:!isValid||submitting,"data-test-subj":"savedObjectEditSave"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.saveButtonLabel",defaultMessage:"Save { title } object",values:{title:service.type}}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,{"aria-label":external_kbnSharedDeps_KbnI18n_.i18n.translate("savedObjectsManagement.view.cancelButtonAriaLabel",{defaultMessage:"Cancel"}),onClick:this.onCancel,"data-test-subj":"savedObjectEditCancel"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"savedObjectsManagement.view.cancelButtonLabel",defaultMessage:"Cancel"})))))}isFormValid(){const{fieldStates:fieldStates}=this.state;return!Object.values(fieldStates).some(state=>!0===state.invalid)}}class saved_object_view_SavedObjectEdition extends external_kbnSharedDeps_React_.Component{constructor(props){var obj,key,value;super(props),value=async({attributes:attributes,references:references})=>{const{savedObjectsClient:savedObjectsClient,notifications:notifications}=this.props,{object:object,type:type}=this.state;await savedObjectsClient.update(object.type,object.id,attributes,{references:references}),notifications.toasts.addSuccess(`Updated '${attributes.title}' ${type} object`),this.redirectToListing()},(key="saveChanges")in(obj=this)?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value;const{serviceRegistry:serviceRegistry,serviceName:serviceName}=props,_type=serviceRegistry.get(serviceName).service.type;this.state={object:void 0,type:_type}}componentDidMount(){const{http:http,id:id}=this.props,{type:type}=this.state;Object(lib.findObject)(http,type,id).then(object=>{this.setState({object:object})})}render(){var _object$meta$inAppUrl,_object$meta$inAppUrl2;const{capabilities:capabilities,notFoundType:notFoundType,serviceRegistry:serviceRegistry,http:http,serviceName:serviceName,savedObjectsClient:savedObjectsClient}=this.props,{type:type}=this.state,{object:object}=this.state,{edit:canEdit,delete:canDelete}=capabilities.savedObjectsManagement,canView=Object(lib.canViewInApp)(capabilities,type)&&Boolean(null==object||null===(_object$meta$inAppUrl=object.meta.inAppUrl)||void 0===_object$meta$inAppUrl?void 0:_object$meta$inAppUrl.path),service=serviceRegistry.get(serviceName).service;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPageContent,{horizontalPosition:"center","data-test-subj":"savedObjectsEdit"},external_kbnSharedDeps_React_default.a.createElement(Header,{canEdit:canEdit,canDelete:canDelete,canViewInApp:canView,type:type,onDeleteClick:()=>this.delete(),viewUrl:http.basePath.prepend((null==object||null===(_object$meta$inAppUrl2=object.meta.inAppUrl)||void 0===_object$meta$inAppUrl2?void 0:_object$meta$inAppUrl2.path)||"")}),notFoundType&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),external_kbnSharedDeps_React_default.a.createElement(NotFoundErrors,{type:notFoundType})),canEdit&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),external_kbnSharedDeps_React_default.a.createElement(Intro,null)),object&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(form_Form,{object:object,savedObjectsClient:savedObjectsClient,service:service,editionEnabled:canEdit,onSave:this.saveChanges})))}async delete(){var _object$attributes;const{id:id,savedObjectsClient:savedObjectsClient,overlays:overlays,notifications:notifications}=this.props,{type:type,object:object}=this.state;await overlays.openConfirm(external_kbnSharedDeps_KbnI18n_.i18n.translate("savedObjectsManagement.deleteConfirm.modalDescription",{defaultMessage:"This action permanently removes the object from Kibana."}),{confirmButtonText:external_kbnSharedDeps_KbnI18n_.i18n.translate("savedObjectsManagement.deleteConfirm.modalDeleteButtonLabel",{defaultMessage:"Delete"}),title:external_kbnSharedDeps_KbnI18n_.i18n.translate("savedObjectsManagement.deleteConfirm.modalTitle",{defaultMessage:"Delete '{title}'?",values:{title:(null==object||null===(_object$attributes=object.attributes)||void 0===_object$attributes?void 0:_object$attributes.title)||"saved Kibana object"}}),buttonColor:"danger"})&&(await savedObjectsClient.delete(type,id),notifications.toasts.addSuccess(`Deleted '${object.attributes.title}' ${type} object`),this.redirectToListing())}redirectToListing(){this.props.history.push("/")}}const SavedObjectsEditionPage=({coreStart:coreStart,serviceRegistry:serviceRegistry,setBreadcrumbs:setBreadcrumbs,history:history})=>{const{service:serviceName,id:id}=Object(external_kbnSharedDeps_ReactRouterDom_.useParams)(),capabilities=coreStart.application.capabilities,{search:search}=Object(external_kbnSharedDeps_ReactRouterDom_.useLocation)(),query=Object(query_string.parse)(search),service=serviceRegistry.get(serviceName);return Object(external_kbnSharedDeps_React_.useEffect)(()=>{var _service$service$type;setBreadcrumbs([{text:external_kbnSharedDeps_KbnI18n_.i18n.translate("savedObjectsManagement.breadcrumb.index",{defaultMessage:"Saved objects"}),href:"/"},{text:external_kbnSharedDeps_KbnI18n_.i18n.translate("savedObjectsManagement.breadcrumb.edit",{defaultMessage:"Edit {savedObjectType}",values:{savedObjectType:null!==(_service$service$type=null==service?void 0:service.service.type)&&void 0!==_service$service$type?_service$service$type:"object"}})}])},[setBreadcrumbs,service]),external_kbnSharedDeps_React_default.a.createElement(public_.RedirectAppLinks,{application:coreStart.application},external_kbnSharedDeps_React_default.a.createElement(saved_object_view_SavedObjectEdition,{id:id,http:coreStart.http,serviceName:serviceName,serviceRegistry:serviceRegistry,savedObjectsClient:coreStart.savedObjects.client,overlays:coreStart.overlays,notifications:coreStart.notifications,capabilities:capabilities,notFoundType:query.notFound,history:history}))}}}]);