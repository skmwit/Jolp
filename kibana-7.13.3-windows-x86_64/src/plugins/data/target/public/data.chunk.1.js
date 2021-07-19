(window.data_bundle_jsonpfunction=window.data_bundle_jsonpfunction||[]).push([[1],{160:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FILTER_EDITOR_WIDTH",(function(){return FILTER_EDITOR_WIDTH})),__webpack_require__.d(__webpack_exports__,"FilterItem",(function(){return FilterItem}));var external_kbnSharedDeps_ElasticEui_=__webpack_require__(11),classnames=__webpack_require__(167),classnames_default=__webpack_require__.n(classnames),external_kbnSharedDeps_React_=__webpack_require__(3),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),filter_editor=__webpack_require__(169),external_kbnSharedDeps_KbnI18n_=__webpack_require__(0),filter_bar=__webpack_require__(72),common=__webpack_require__(1);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const FilterView=({filter:filter,iconOnClick:iconOnClick,onClick:onClick,valueLabel:valueLabel,errorMessage:errorMessage,filterLabelStatus:filterLabelStatus,...rest})=>{const[ref,innerText]=Object(external_kbnSharedDeps_ElasticEui_.useInnerText)();let title=errorMessage||external_kbnSharedDeps_KbnI18n_.i18n.translate("data.filter.filterBar.moreFilterActionsMessage",{defaultMessage:"Filter: {innerText}. Select for more filter actions.",values:{innerText:innerText}});return Object(common.isFilterPinned)(filter)&&(title=`${external_kbnSharedDeps_KbnI18n_.i18n.translate("data.filter.filterBar.pinnedFilterPrefix",{defaultMessage:"Pinned"})} ${title}`),filter.meta.disabled&&(title=`${external_kbnSharedDeps_KbnI18n_.i18n.translate("data.filter.filterBar.disabledFilterPrefix",{defaultMessage:"Disabled"})} ${title}`),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiBadge,_extends({title:title,color:"hollow",iconType:"cross",iconSide:"right",closeButtonProps:{tabIndex:-1},iconOnClick:iconOnClick,iconOnClickAriaLabel:external_kbnSharedDeps_KbnI18n_.i18n.translate("data.filter.filterBar.filterItemBadgeIconAriaLabel",{defaultMessage:"Delete {filter}",values:{filter:innerText}}),onClick:onClick,onClickAriaLabel:external_kbnSharedDeps_KbnI18n_.i18n.translate("data.filter.filterBar.filterItemBadgeAriaLabel",{defaultMessage:"Filter actions"})},rest),external_kbnSharedDeps_React_default.a.createElement("span",{ref:ref},external_kbnSharedDeps_React_default.a.createElement(filter_bar.b,{filter:filter,valueLabel:valueLabel,filterLabelStatus:filterLabelStatus})))};var services=__webpack_require__(19);const FILTER_EDITOR_WIDTH=800;function FilterItem(props){const[isPopoverOpen,setIsPopoverOpen]=Object(external_kbnSharedDeps_React_.useState)(!1),[indexPatternExists,setIndexPatternExists]=Object(external_kbnSharedDeps_React_.useState)(void 0),{id:id,filter:filter,indexPatterns:indexPatterns,hiddenPanelOptions:hiddenPanelOptions}=props;function onSubmit(f){setIsPopoverOpen(!1),props.onUpdate(f)}function onToggleDisabled(){const f=Object(common.toggleFilterDisabled)(filter);props.onUpdate(f)}function isDisabled(labelConfig){const{disabled:disabled}=filter.meta;return disabled||"error"===labelConfig.status}if(Object(external_kbnSharedDeps_React_.useEffect)(()=>{const index=props.filter.meta.index;let isSubscribed=!0;return index?Object(services.a)().get(index).then(indexPattern=>{isSubscribed&&setIndexPatternExists(!!indexPattern)}).catch(()=>{isSubscribed&&setIndexPatternExists(!1)}):isSubscribed&&setIndexPatternExists(!0),()=>{isSubscribed=!1}},[props.filter.meta.index]),void 0===indexPatternExists)return null;const valueLabelConfig=function(){const label={title:"",message:"",status:""};if(!1===indexPatternExists)label.status="error",label.title=props.intl.formatMessage({id:"data.filter.filterBar.labelErrorText",defaultMessage:"Error"}),label.message=props.intl.formatMessage({id:"data.filter.filterBar.labelErrorInfo",defaultMessage:"Index pattern {indexPattern} not found"},{indexPattern:filter.meta.index});else if(props.indexPatterns.length&&!Object(common.getIndexPatternFromFilter)(filter,indexPatterns)&&!indexPatterns.map(indexPattern=>indexPattern.fields.map(field=>field.name)).reduce((acc,it)=>[...acc,...it],[]).includes((null===(_filter$meta=filter.meta)||void 0===_filter$meta?void 0:_filter$meta.key)||""))label.status="warn",label.title=props.intl.formatMessage({id:"data.filter.filterBar.labelWarningText",defaultMessage:"Warning"}),label.message=props.intl.formatMessage({id:"data.filter.filterBar.labelWarningInfo",defaultMessage:"Field {fieldName} does not exist in current view"},{fieldName:filter.meta.key});else try{label.title=Object(common.getDisplayValueFromFilter)(filter,indexPatterns)}catch(e){label.status="error",label.title=props.intl.formatMessage({id:"data.filter.filterBar.labelErrorText",defaultMessage:"Error"}),label.message=e.message}var _filter$meta;return label}();if("error"===valueLabelConfig.status&&!filter.meta.disabled)return filter.meta.disabled=!0,props.onUpdate(filter),null;const badge=external_kbnSharedDeps_React_default.a.createElement(FilterView,{filter:filter,valueLabel:valueLabelConfig.title,filterLabelStatus:valueLabelConfig.status,errorMessage:valueLabelConfig.message,className:(negate=filter.meta.negate,labelConfig=valueLabelConfig,classnames_default()("globalFilterItem",{"globalFilterItem-isDisabled":isDisabled(labelConfig),"globalFilterItem-isError":"error"===labelConfig.status,"globalFilterItem-isWarning":"warn"===labelConfig.status,"globalFilterItem-isPinned":Object(common.isFilterPinned)(filter),"globalFilterItem-isExcluded":negate},props.className)),iconOnClick:()=>props.onRemove(),onClick:function(e){e.shiftKey?onToggleDisabled():setIsPopoverOpen(!isPopoverOpen)},"data-test-subj":function(labelConfig){const dataTestSubjKey=filter.meta.key?"filter-key-"+filter.meta.key:"",dataTestSubjValue=filter.meta.value?"filter-value-"+(function(labelConfig){return""===labelConfig.status}(labelConfig)?labelConfig.title:labelConfig.status):"",dataTestSubjNegated=filter.meta.negate?"filter-negated":"",dataTestSubjDisabled="filter-"+(isDisabled(labelConfig)?"disabled":"enabled"),dataTestSubjPinned="filter-"+(Object(common.isFilterPinned)(filter)?"pinned":"unpinned");return classnames_default()("filter",dataTestSubjDisabled,dataTestSubjKey,dataTestSubjValue,dataTestSubjPinned,dataTestSubjNegated)}(valueLabelConfig)});var negate,labelConfig;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPopover,{id:"popoverFor_filter"+id,className:"globalFilterItem__popover",anchorClassName:"globalFilterItem__popoverAnchor",isOpen:isPopoverOpen,closePopover:()=>{setIsPopoverOpen(!1)},button:badge,anchorPosition:"downLeft",panelPaddingSize:"none"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiContextMenu,{initialPanelId:0,panels:function(){const{negate:negate,disabled:disabled}=filter.meta;let mainPanelItems=[{name:Object(common.isFilterPinned)(filter)?props.intl.formatMessage({id:"data.filter.filterBar.unpinFilterButtonLabel",defaultMessage:"Unpin"}):props.intl.formatMessage({id:"data.filter.filterBar.pinFilterButtonLabel",defaultMessage:"Pin across all apps"}),icon:"pin",onClick:()=>{setIsPopoverOpen(!1),function(){const f=Object(common.toggleFilterPinned)(filter);props.onUpdate(f)}()},"data-test-subj":"pinFilter"},{name:props.intl.formatMessage({id:"data.filter.filterBar.editFilterButtonLabel",defaultMessage:"Edit filter"}),icon:"pencil",panel:1,"data-test-subj":"editFilter"},{name:negate?props.intl.formatMessage({id:"data.filter.filterBar.includeFilterButtonLabel",defaultMessage:"Include results"}):props.intl.formatMessage({id:"data.filter.filterBar.excludeFilterButtonLabel",defaultMessage:"Exclude results"}),icon:negate?"plusInCircle":"minusInCircle",onClick:()=>{setIsPopoverOpen(!1),function(){const f=Object(common.toggleFilterNegated)(filter);props.onUpdate(f)}()},"data-test-subj":"negateFilter"},{name:disabled?props.intl.formatMessage({id:"data.filter.filterBar.enableFilterButtonLabel",defaultMessage:"Re-enable"}):props.intl.formatMessage({id:"data.filter.filterBar.disableFilterButtonLabel",defaultMessage:"Temporarily disable"}),icon:""+(disabled?"eye":"eyeClosed"),onClick:()=>{setIsPopoverOpen(!1),onToggleDisabled()},"data-test-subj":"disableFilter"},{name:props.intl.formatMessage({id:"data.filter.filterBar.deleteFilterButtonLabel",defaultMessage:"Delete"}),icon:"trash",onClick:()=>{setIsPopoverOpen(!1),props.onRemove()},"data-test-subj":"deleteFilter"}];return hiddenPanelOptions&&hiddenPanelOptions.length>0&&(mainPanelItems=mainPanelItems.filter(pItem=>!hiddenPanelOptions.includes(pItem["data-test-subj"]))),[{id:0,items:mainPanelItems},{id:1,width:FILTER_EDITOR_WIDTH,content:external_kbnSharedDeps_React_default.a.createElement("div",null,external_kbnSharedDeps_React_default.a.createElement(filter_editor.a,{filter:filter,indexPatterns:indexPatterns,onSubmit:onSubmit,onCancel:()=>{setIsPopoverOpen(!1)}}))}]}()}))}__webpack_exports__.default=FilterItem},168:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return isOneOfOperator})),__webpack_require__.d(__webpack_exports__,"b",(function(){return existsOperator})),__webpack_require__.d(__webpack_exports__,"a",(function(){return FILTER_OPERATORS}));var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_common_es_query_filters__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8);const isOperator={message:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("data.filter.filterEditor.isOperatorOptionLabel",{defaultMessage:"is"}),type:_common_es_query_filters__WEBPACK_IMPORTED_MODULE_1__.FILTERS.PHRASE,negate:!1},isNotOperator={message:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("data.filter.filterEditor.isNotOperatorOptionLabel",{defaultMessage:"is not"}),type:_common_es_query_filters__WEBPACK_IMPORTED_MODULE_1__.FILTERS.PHRASE,negate:!0},isOneOfOperator={message:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("data.filter.filterEditor.isOneOfOperatorOptionLabel",{defaultMessage:"is one of"}),type:_common_es_query_filters__WEBPACK_IMPORTED_MODULE_1__.FILTERS.PHRASES,negate:!1,fieldTypes:["string","number","date","ip","geo_point","geo_shape"]},isNotOneOfOperator={message:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("data.filter.filterEditor.isNotOneOfOperatorOptionLabel",{defaultMessage:"is not one of"}),type:_common_es_query_filters__WEBPACK_IMPORTED_MODULE_1__.FILTERS.PHRASES,negate:!0,fieldTypes:["string","number","date","ip","geo_point","geo_shape"]},isBetweenOperator={message:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("data.filter.filterEditor.isBetweenOperatorOptionLabel",{defaultMessage:"is between"}),type:_common_es_query_filters__WEBPACK_IMPORTED_MODULE_1__.FILTERS.RANGE,negate:!1,fieldTypes:["number","number_range","date","date_range","ip","ip_range"]},isNotBetweenOperator={message:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("data.filter.filterEditor.isNotBetweenOperatorOptionLabel",{defaultMessage:"is not between"}),type:_common_es_query_filters__WEBPACK_IMPORTED_MODULE_1__.FILTERS.RANGE,negate:!0,fieldTypes:["number","number_range","date","date_range","ip","ip_range"]},existsOperator={message:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("data.filter.filterEditor.existsOperatorOptionLabel",{defaultMessage:"exists"}),type:_common_es_query_filters__WEBPACK_IMPORTED_MODULE_1__.FILTERS.EXISTS,negate:!1},doesNotExistOperator={message:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("data.filter.filterEditor.doesNotExistOperatorOptionLabel",{defaultMessage:"does not exist"}),type:_common_es_query_filters__WEBPACK_IMPORTED_MODULE_1__.FILTERS.EXISTS,negate:!0},FILTER_OPERATORS=[isOperator,isNotOperator,isOneOfOperator,isNotOneOfOperator,isBetweenOperator,isNotBetweenOperator,existsOperator,doesNotExistOperator]},169:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return FilterEditor}));var external_kbnSharedDeps_ElasticEui_=__webpack_require__(11),external_kbnSharedDeps_KbnI18n_=__webpack_require__(0),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(16),external_kbnSharedDeps_Lodash_=__webpack_require__(2),external_kbnSharedDeps_React_=__webpack_require__(3),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function GenericComboBox(props){const{options:options,selectedOptions:selectedOptions,getLabel:getLabel,onChange:onChange,...otherProps}=props,labels=options.map(getLabel),euiOptions=labels.map(label=>({label:label})),selectedEuiOptions=selectedOptions.filter(option=>-1!==options.indexOf(option)).map(option=>euiOptions[options.indexOf(option)]);return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiComboBox,_extends({options:euiOptions,selectedOptions:selectedEuiOptions,onChange:newOptions=>{const newValues=newOptions.map(({label:label})=>options[labels.indexOf(label)]);onChange(newValues)},sortMatchesBy:"startsWith"},otherProps))}var target=__webpack_require__(18),target_default=__webpack_require__.n(target),filter_operators=__webpack_require__(168),common=__webpack_require__(1);function validateParams(params,type){switch(type){case"date":const moment="string"==typeof params?target_default.a.parse(params):null;return Boolean("string"==typeof params&&moment&&moment.isValid());case"ip":try{return Boolean(new common.Ipv4Address(params))}catch(e){return!1}default:return!0}}var public_=__webpack_require__(25);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class phrase_suggestor_PhraseSuggestorUI extends external_kbnSharedDeps_React_default.a.Component{constructor(...args){super(...args),_defineProperty(this,"services",this.props.kibana.services),_defineProperty(this,"abortController",void 0),_defineProperty(this,"state",{suggestions:[],isLoading:!1}),_defineProperty(this,"onSearchChange",value=>{this.updateSuggestions(""+value)}),_defineProperty(this,"updateSuggestions",Object(external_kbnSharedDeps_Lodash_.debounce)(async(query="")=>{this.abortController&&this.abortController.abort(),this.abortController=new AbortController;const{indexPattern:indexPattern,field:field}=this.props;if(!field||!this.isSuggestingValues())return;this.setState({isLoading:!0});const suggestions=await this.services.data.autocomplete.getValueSuggestions({indexPattern:indexPattern,field:field,query:query,signal:this.abortController.signal,useTimeRange:!1});this.setState({suggestions:suggestions,isLoading:!1})},500))}componentDidMount(){this.updateSuggestions()}componentWillUnmount(){this.abortController&&this.abortController.abort()}isSuggestingValues(){const shouldSuggestValues=this.services.uiSettings.get(common.UI_SETTINGS.FILTERS_EDITOR_SUGGEST_VALUES),{field:field}=this.props;return shouldSuggestValues&&field&&field.aggregatable&&"string"===field.type}}Object(public_.withKibana)(phrase_suggestor_PhraseSuggestorUI);function value_input_type_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class value_input_type_ValueInputTypeUI extends external_kbnSharedDeps_React_.Component{constructor(...args){super(...args),value_input_type_defineProperty(this,"onBoolChange",event=>{const boolValue="true"===event.target.value;this.props.onChange(boolValue)}),value_input_type_defineProperty(this,"onChange",event=>{const params=event.target.value;this.props.onChange(params)}),value_input_type_defineProperty(this,"onBlur",event=>{if(this.props.onBlur){const params=event.target.value;this.props.onBlur(params)}})}render(){const value=this.props.value;let inputElement;switch(this.props.type){case"string":inputElement=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFieldText,{fullWidth:this.props.fullWidth,placeholder:this.props.placeholder,value:value,onChange:this.onChange,controlOnly:this.props.controlOnly,className:this.props.className});break;case"number":case"number_range":inputElement=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFieldNumber,{fullWidth:this.props.fullWidth,placeholder:this.props.placeholder,value:"string"==typeof value?parseFloat(value):value,onChange:this.onChange,controlOnly:this.props.controlOnly,className:this.props.className});break;case"date":case"date_range":inputElement=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFieldText,{fullWidth:this.props.fullWidth,placeholder:this.props.placeholder,value:value,onChange:this.onChange,onBlur:this.onBlur,isInvalid:!Object(external_kbnSharedDeps_Lodash_.isEmpty)(value)&&!validateParams(value,this.props.type),controlOnly:this.props.controlOnly,className:this.props.className});break;case"ip":case"ip_range":inputElement=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFieldText,{fullWidth:this.props.fullWidth,placeholder:this.props.placeholder,value:value,onChange:this.onChange,isInvalid:!Object(external_kbnSharedDeps_Lodash_.isEmpty)(value)&&!validateParams(value,this.props.type),controlOnly:this.props.controlOnly,className:this.props.className});break;case"boolean":inputElement=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSelect,{options:[{value:void 0,text:this.props.placeholder},{value:"true",text:this.props.intl.formatMessage({id:"data.filter.filterEditor.trueOptionLabel",defaultMessage:"true"})},{value:"false",text:this.props.intl.formatMessage({id:"data.filter.filterEditor.falseOptionLabel",defaultMessage:"false"})}],value:value,onChange:this.onBoolChange,className:this.props.className,fullWidth:this.props.fullWidth})}return inputElement}}const ValueInputType=Object(external_kbnSharedDeps_KbnI18nReact_.injectI18n)(value_input_type_ValueInputTypeUI);function StringComboBox(props){return GenericComboBox(props)}const PhraseValueInput=Object(external_kbnSharedDeps_KbnI18nReact_.injectI18n)(Object(public_.withKibana)(class extends phrase_suggestor_PhraseSuggestorUI{render(){return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:this.props.fullWidth,label:this.props.intl.formatMessage({id:"data.filter.filterEditor.valueInputLabel",defaultMessage:"Value"})},this.isSuggestingValues()?this.renderWithSuggestions():external_kbnSharedDeps_React_default.a.createElement(ValueInputType,{fullWidth:this.props.fullWidth,placeholder:this.props.intl.formatMessage({id:"data.filter.filterEditor.valueInputPlaceholder",defaultMessage:"Enter a value"}),value:this.props.value,onChange:this.props.onChange,type:this.props.field?this.props.field.type:"string"}))}renderWithSuggestions(){const{suggestions:suggestions}=this.state,{value:value,intl:intl,onChange:onChange,fullWidth:fullWidth}=this.props,valueAsStr=String(value),options=value?Object(external_kbnSharedDeps_Lodash_.uniq)([valueAsStr,...suggestions]):suggestions;return external_kbnSharedDeps_React_default.a.createElement(StringComboBox,{fullWidth:fullWidth,placeholder:intl.formatMessage({id:"data.filter.filterEditor.valueSelectPlaceholder",defaultMessage:"Select a value"}),options:options,getLabel:option=>option,selectedOptions:value?[valueAsStr]:[],onChange:([newValue=""])=>onChange(newValue),onSearchChange:this.onSearchChange,singleSelection:{asPlainText:!0},onCreateOption:onChange,isClearable:!1,"data-test-subj":"filterParamsComboBox phraseParamsComboxBox"})}}));function phrases_values_input_StringComboBox(props){return GenericComboBox(props)}const PhrasesValuesInput=Object(external_kbnSharedDeps_KbnI18nReact_.injectI18n)(Object(public_.withKibana)(class extends phrase_suggestor_PhraseSuggestorUI{render(){const{suggestions:suggestions}=this.state,{values:values,intl:intl,onChange:onChange,fullWidth:fullWidth}=this.props,options=values?Object(external_kbnSharedDeps_Lodash_.uniq)([...values,...suggestions]):suggestions;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:fullWidth,label:intl.formatMessage({id:"data.filter.filterEditor.valuesSelectLabel",defaultMessage:"Values"})},external_kbnSharedDeps_React_default.a.createElement(phrases_values_input_StringComboBox,{fullWidth:fullWidth,placeholder:intl.formatMessage({id:"data.filter.filterEditor.valuesSelectPlaceholder",defaultMessage:"Select values"}),options:options,getLabel:option=>option,selectedOptions:values||[],onSearchChange:this.onSearchChange,onCreateOption:option=>onChange([...values||[],option]),onChange:onChange,isClearable:!1,"data-test-subj":"filterParamsComboBox phrasesParamsComboxBox"}))}}));var external_kbnSharedDeps_Moment_=__webpack_require__(5),external_kbnSharedDeps_Moment_default=__webpack_require__.n(external_kbnSharedDeps_Moment_);const RangeValueInput=Object(external_kbnSharedDeps_KbnI18nReact_.injectI18n)((function(props){const kibana=Object(public_.useKibana)(),type=props.field?props.field.type:"string",tzConfig=kibana.services.uiSettings.get("dateFormat:tz"),formatDateChange=value=>{if("string"!=typeof value&&"number"!=typeof value)return value;const momentParsedValue=external_kbnSharedDeps_Moment_default()(value).tz(tzConfig);return momentParsedValue.isValid()?null==momentParsedValue?void 0:momentParsedValue.format("YYYY-MM-DDTHH:mm:ss.SSSZ"):value},onFromChange=value=>{if("string"!=typeof value&&"number"!=typeof value)throw new Error("Range params must be a string or number");props.onChange({from:value,to:Object(external_kbnSharedDeps_Lodash_.get)(props,"value.to")})},onToChange=value=>{if("string"!=typeof value&&"number"!=typeof value)throw new Error("Range params must be a string or number");props.onChange({from:Object(external_kbnSharedDeps_Lodash_.get)(props,"value.from"),to:value})};return external_kbnSharedDeps_React_default.a.createElement("div",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormControlLayoutDelimited,{fullWidth:props.fullWidth,"aria-label":props.intl.formatMessage({id:"data.filter.filterEditor.rangeInputLabel",defaultMessage:"Range"}),startControl:external_kbnSharedDeps_React_default.a.createElement(ValueInputType,{controlOnly:!0,type:type,value:props.value?props.value.from:void 0,onChange:onFromChange,onBlur:value=>{onFromChange(formatDateChange(value))},placeholder:props.intl.formatMessage({id:"data.filter.filterEditor.rangeStartInputPlaceholder",defaultMessage:"Start of the range"})}),endControl:external_kbnSharedDeps_React_default.a.createElement(ValueInputType,{controlOnly:!0,type:type,value:props.value?props.value.to:void 0,onChange:onToChange,onBlur:value=>{onToChange(formatDateChange(value))},placeholder:props.intl.formatMessage({id:"data.filter.filterEditor.rangeEndInputPlaceholder",defaultMessage:"End of the range"})})}))}));function filter_editor_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class filter_editor_FilterEditorUI extends external_kbnSharedDeps_React_.Component{constructor(props){super(props),filter_editor_defineProperty(this,"toggleCustomEditor",()=>{const isCustomEditorOpen=!this.state.isCustomEditorOpen;this.setState({isCustomEditorOpen:isCustomEditorOpen})}),filter_editor_defineProperty(this,"onIndexPatternChange",([selectedIndexPattern])=>{this.setState({selectedIndexPattern:selectedIndexPattern,selectedField:void 0,selectedOperator:void 0,params:void 0})}),filter_editor_defineProperty(this,"onFieldChange",([selectedField])=>{this.setState({selectedField:selectedField,selectedOperator:void 0,params:void 0})}),filter_editor_defineProperty(this,"onOperatorChange",([selectedOperator])=>{const params=Object(external_kbnSharedDeps_Lodash_.get)(this.state.selectedOperator,"type")===Object(external_kbnSharedDeps_Lodash_.get)(selectedOperator,"type")?this.state.params:void 0;this.setState({selectedOperator:selectedOperator,params:params})}),filter_editor_defineProperty(this,"onCustomLabelSwitchChange",event=>{const useCustomLabel=event.target.checked,customLabel=event.target.checked?"":null;this.setState({useCustomLabel:useCustomLabel,customLabel:customLabel})}),filter_editor_defineProperty(this,"onCustomLabelChange",event=>{const customLabel=event.target.value;this.setState({customLabel:customLabel})}),filter_editor_defineProperty(this,"onParamsChange",params=>{this.setState({params:params})}),filter_editor_defineProperty(this,"onQueryDslChange",queryDsl=>{this.setState({queryDsl:queryDsl})}),filter_editor_defineProperty(this,"onSubmit",()=>{const{selectedIndexPattern:indexPattern,selectedField:field,selectedOperator:operator,params:params,useCustomLabel:useCustomLabel,customLabel:customLabel,isCustomEditorOpen:isCustomEditorOpen,queryDsl:queryDsl}=this.state,{$state:$state}=this.props.filter;if(!$state||!$state.store)return;const alias=useCustomLabel?customLabel:null;if(isCustomEditorOpen){const{index:index,disabled:disabled,negate:negate}=this.props.filter.meta,newIndex=index||this.props.indexPatterns[0].id,body=JSON.parse(queryDsl),filter=Object(common.buildCustomFilter)(newIndex,body,disabled,negate,alias,$state.store);this.props.onSubmit(filter)}else if(indexPattern&&field&&operator){const filter=Object(common.buildFilter)(indexPattern,field,operator.type,operator.negate,this.props.filter.meta.disabled,null!=params?params:"",alias,$state.store);this.props.onSubmit(filter)}}),this.state={selectedIndexPattern:this.getIndexPatternFromFilter(),selectedField:this.getFieldFromFilter(),selectedOperator:this.getSelectedOperator(),params:Object(common.getFilterParams)(props.filter),useCustomLabel:null!==props.filter.meta.alias,customLabel:props.filter.meta.alias,queryDsl:JSON.stringify(Object(common.cleanFilter)(props.filter),null,2),isCustomEditorOpen:this.isUnknownFilterType()}}render(){return external_kbnSharedDeps_React_default.a.createElement("div",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPopoverTitle,{paddingSize:"m"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{alignItems:"baseline",responsive:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"data.filter.filterEditor.editFilterPopupTitle",defaultMessage:"Edit filter"})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1,className:"filterEditor__hiddenItem"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,{size:"xs","data-test-subj":"editQueryDSL",onClick:this.toggleCustomEditor},this.state.isCustomEditorOpen?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"data.filter.filterEditor.editFilterValuesButtonLabel",defaultMessage:"Edit filter values"}):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"data.filter.filterEditor.editQueryDslButtonLabel",defaultMessage:"Edit as Query DSL"}))))),external_kbnSharedDeps_React_default.a.createElement("div",{className:"globalFilterItem__editorForm"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiForm,null,this.renderIndexPatternInput(),this.state.isCustomEditorOpen?this.renderCustomEditor():this.renderRegularEditor(),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSwitch,{id:"filterEditorCustomLabelSwitch","data-test-subj":"createCustomLabel",label:this.props.intl.formatMessage({id:"data.filter.filterEditor.createCustomLabelSwitchLabel",defaultMessage:"Create custom label?"}),checked:this.state.useCustomLabel,onChange:this.onCustomLabelSwitchChange}),this.state.useCustomLabel&&external_kbnSharedDeps_React_default.a.createElement("div",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{label:this.props.intl.formatMessage({id:"data.filter.filterEditor.createCustomLabelInputLabel",defaultMessage:"Custom label"}),fullWidth:!0},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFieldText,{value:""+this.state.customLabel,onChange:this.onCustomLabelChange,fullWidth:!0}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{direction:"rowReverse",alignItems:"center",responsive:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButton,{fill:!0,onClick:this.onSubmit,isDisabled:!this.isFilterValid(),"data-test-subj":"saveFilter"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"data.filter.filterEditor.saveButtonLabel",defaultMessage:"Save"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiButtonEmpty,{flush:"right",onClick:this.props.onCancel,"data-test-subj":"cancelSaveFilter"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"data.filter.filterEditor.cancelButtonLabel",defaultMessage:"Cancel"}))),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,null)))))}renderIndexPatternInput(){if(this.props.indexPatterns.length<=1&&this.props.indexPatterns.find(indexPattern=>indexPattern===this.getIndexPatternFromFilter()))return"";const{selectedIndexPattern:selectedIndexPattern}=this.state;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:!0,label:this.props.intl.formatMessage({id:"data.filter.filterEditor.indexPatternSelectLabel",defaultMessage:"Index Pattern"})},external_kbnSharedDeps_React_default.a.createElement(IndexPatternComboBox,{fullWidth:!0,placeholder:this.props.intl.formatMessage({id:"data.filter.filterBar.indexPatternSelectPlaceholder",defaultMessage:"Select an index pattern"}),options:this.props.indexPatterns,selectedOptions:selectedIndexPattern?[selectedIndexPattern]:[],getLabel:indexPattern=>indexPattern.title,onChange:this.onIndexPatternChange,singleSelection:{asPlainText:!0},isClearable:!1,"data-test-subj":"filterIndexPatternsSelect"}))))}renderRegularEditor(){return external_kbnSharedDeps_React_default.a.createElement("div",null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{responsive:!0,gutterSize:"s"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:2},this.renderFieldInput()),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1,style:{flexBasis:160}},this.renderOperatorInput())),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),external_kbnSharedDeps_React_default.a.createElement("div",{"data-test-subj":"filterParams"},this.renderParamsEditor()))}renderFieldInput(){const{selectedIndexPattern:selectedIndexPattern,selectedField:selectedField}=this.state,fields=selectedIndexPattern?selectedIndexPattern.fields.filter(common.isFilterable):[];return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:!0,label:this.props.intl.formatMessage({id:"data.filter.filterEditor.fieldSelectLabel",defaultMessage:"Field"})},external_kbnSharedDeps_React_default.a.createElement(FieldComboBox,{fullWidth:!0,id:"fieldInput",isDisabled:!selectedIndexPattern,placeholder:this.props.intl.formatMessage({id:"data.filter.filterEditor.fieldSelectPlaceholder",defaultMessage:"Select a field first"}),options:fields,selectedOptions:selectedField?[selectedField]:[],getLabel:field=>field.name,onChange:this.onFieldChange,singleSelection:{asPlainText:!0},isClearable:!1,"data-test-subj":"filterFieldSuggestionList"}))}renderOperatorInput(){const{selectedField:selectedField,selectedOperator:selectedOperator}=this.state,operators=selectedField?(field=selectedField,filter_operators.a.filter(operator=>!operator.fieldTypes||operator.fieldTypes.includes(field.type))):[];var field;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:!0,label:this.props.intl.formatMessage({id:"data.filter.filterEditor.operatorSelectLabel",defaultMessage:"Operator"})},external_kbnSharedDeps_React_default.a.createElement(OperatorComboBox,{fullWidth:!0,isDisabled:!selectedField,placeholder:selectedField?this.props.intl.formatMessage({id:"data.filter.filterEditor.operatorSelectPlaceholderSelect",defaultMessage:"Select"}):this.props.intl.formatMessage({id:"data.filter.filterEditor.operatorSelectPlaceholderWaiting",defaultMessage:"Waiting"}),options:operators,selectedOptions:selectedOperator?[selectedOperator]:[],getLabel:({message:message})=>message,onChange:this.onOperatorChange,singleSelection:{asPlainText:!0},isClearable:!1,"data-test-subj":"filterOperatorList"}))}renderCustomEditor(){return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:!0,label:external_kbnSharedDeps_KbnI18n_.i18n.translate("data.filter.filterEditor.queryDslLabel",{defaultMessage:"Elasticsearch Query DSL"})},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiCodeEditor,{value:this.state.queryDsl,onChange:this.onQueryDslChange,mode:"json",width:"100%",height:"250px","data-test-subj":"customEditorInput"}))}renderParamsEditor(){const indexPattern=this.state.selectedIndexPattern;if(!indexPattern||!this.state.selectedOperator)return"";switch(this.state.selectedOperator.type){case"exists":return"";case"phrase":return external_kbnSharedDeps_React_default.a.createElement(PhraseValueInput,{indexPattern:indexPattern,field:this.state.selectedField,value:this.state.params,onChange:this.onParamsChange,"data-test-subj":"phraseValueInput",fullWidth:!0});case"phrases":return external_kbnSharedDeps_React_default.a.createElement(PhrasesValuesInput,{indexPattern:indexPattern,field:this.state.selectedField,values:this.state.params,onChange:this.onParamsChange,fullWidth:!0});case"range":return external_kbnSharedDeps_React_default.a.createElement(RangeValueInput,{field:this.state.selectedField,value:this.state.params,onChange:this.onParamsChange,fullWidth:!0})}}isUnknownFilterType(){const{type:type}=this.props.filter.meta;return!!type&&!["phrase","phrases","range","exists"].includes(type)}getIndexPatternFromFilter(){return Object(common.getIndexPatternFromFilter)(this.props.filter,this.props.indexPatterns)}getFieldFromFilter(){const indexPattern=this.getIndexPatternFromFilter();return indexPattern&&function(filter,indexPattern){return indexPattern.fields.find(field=>field.name===filter.meta.key)}(this.props.filter,indexPattern)}getSelectedOperator(){return filter=this.props.filter,filter_operators.a.find(operator=>filter.meta.type===operator.type&&filter.meta.negate===operator.negate);var filter}isFilterValid(){const{isCustomEditorOpen:isCustomEditorOpen,queryDsl:queryDsl,selectedIndexPattern:indexPattern,selectedField:field,selectedOperator:operator,params:params}=this.state;if(isCustomEditorOpen)try{const queryDslJson=JSON.parse(queryDsl);return Object.keys(queryDslJson).length>0}catch(e){return!1}return function(indexPattern,field,operator,params){if(!indexPattern||!field||!operator)return!1;switch(operator.type){case"phrase":return validateParams(params,field.type);case"phrases":return!(!Array.isArray(params)||!params.length)&&params.every(phrase=>validateParams(phrase,field.type));case"range":return"object"==typeof params&&((!params.from||validateParams(params.from,field.type))&&(!params.to||validateParams(params.to,field.type)));case"exists":return!0;default:throw new Error("Unknown operator type: "+operator.type)}}(indexPattern,field,operator,params)}}function IndexPatternComboBox(props){return GenericComboBox(props)}function FieldComboBox(props){return GenericComboBox(props)}function OperatorComboBox(props){return GenericComboBox(props)}const FilterEditor=Object(external_kbnSharedDeps_KbnI18nReact_.injectI18n)(filter_editor_FilterEditorUI)}}]);