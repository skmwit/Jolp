(window.data_bundle_jsonpfunction=window.data_bundle_jsonpfunction||[]).push([[5,11],{167:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},176:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return suggestions_component_SuggestionsComponent}));var external_kbnSharedDeps_Lodash_=__webpack_require__(2),external_kbnSharedDeps_React_=__webpack_require__(3),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),classnames=__webpack_require__(167),classnames_default=__webpack_require__.n(classnames),external_kbnSharedDeps_StyledComponents_=__webpack_require__(162),external_kbnSharedDeps_StyledComponents_default=__webpack_require__.n(external_kbnSharedDeps_StyledComponents_),external_kbnSharedDeps_ElasticEui_=__webpack_require__(11);function getEuiIconType(type){switch(type){case"field":return"kqlField";case"value":return"kqlValue";case"recentSearch":return"search";case"conjunction":return"kqlSelector";case"operator":return"kqlOperand";default:throw new Error("Unknown type: "+type)}}function SuggestionComponent(props){return external_kbnSharedDeps_React_default.a.createElement("div",{className:classnames_default()({kbnTypeahead__item:!0,active:props.selected}),role:"option",onClick:()=>props.onClick(props.suggestion,props.index),onMouseEnter:props.onMouseEnter,ref:props.innerRef,id:props.ariaId,"aria-selected":props.selected,"data-test-subj":`autocompleteSuggestion-${props.suggestion.type}-${props.suggestion.text.replace(/\s/g,"-")}`},external_kbnSharedDeps_React_default.a.createElement("div",{className:"kbnSuggestionItem kbnSuggestionItem--"+props.suggestion.type},external_kbnSharedDeps_React_default.a.createElement("div",{className:"kbnSuggestionItem__type"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiIcon,{type:getEuiIconType(props.suggestion.type)})),external_kbnSharedDeps_React_default.a.createElement("div",{className:"kbnSuggestionItem__text","data-test-subj":"autoCompleteSuggestionText"},props.suggestion.text),props.shouldDisplayDescription&&external_kbnSharedDeps_React_default.a.createElement("div",{className:"kbnSuggestionItem__description"},props.suggestion.description)))}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class suggestions_component_SuggestionsComponent extends external_kbnSharedDeps_React_.Component{constructor(...args){super(...args),_defineProperty(this,"childNodes",[]),_defineProperty(this,"parentNode",null),_defineProperty(this,"scrollIntoView",()=>{if(null===this.props.index)return;const parent=this.parentNode,child=this.childNodes[this.props.index];if(null==this.props.index||!parent||!child)return;const scrollTop=Math.max(Math.min(parent.scrollTop,child.offsetTop),child.offsetTop+child.offsetHeight-parent.offsetHeight);parent.scrollTop=scrollTop}),_defineProperty(this,"handleScroll",()=>{if(!this.props.loadMore||!this.parentNode)return;const position=this.parentNode.scrollTop+this.parentNode.offsetHeight,height=this.parentNode.scrollHeight;height&&position&&height-position<=50&&this.props.loadMore()})}render(){if(!this.props.queryBarRect||!this.props.show||Object(external_kbnSharedDeps_Lodash_.isEmpty)(this.props.suggestions))return null;const suggestions=this.props.suggestions.map((suggestion,index)=>{const isDescriptionFittable=this.props.queryBarRect.width>=600;return external_kbnSharedDeps_React_default.a.createElement(SuggestionComponent,{innerRef:node=>this.childNodes[index]=node,selected:index===this.props.index,index:index,suggestion:suggestion,onClick:this.props.onClick,onMouseEnter:()=>this.props.onMouseEnter(index),ariaId:"suggestion-"+index,key:`${suggestion.type} - ${suggestion.text}`,shouldDisplayDescription:isDescriptionFittable})}),documentHeight=document.documentElement.clientHeight||window.innerHeight,{queryBarRect:queryBarRect}=this.props,isSuggestionsListFittable=documentHeight-(queryBarRect.top+queryBarRect.height)>250,verticalListPosition=isSuggestionsListFittable?`top: ${window.scrollY+queryBarRect.bottom-0}px;`:`bottom: ${documentHeight-(window.scrollY+queryBarRect.top)}px;`;return external_kbnSharedDeps_React_default.a.createElement(StyledSuggestionsListDiv,{queryBarRect:queryBarRect,verticalListPosition:verticalListPosition},external_kbnSharedDeps_React_default.a.createElement("div",{className:classnames_default()("kbnTypeahead",{"kbnTypeahead--small":"s"===this.props.size})},external_kbnSharedDeps_React_default.a.createElement("div",{className:classnames_default()("kbnTypeahead__popover",{"kbnTypeahead__popover--bottom":isSuggestionsListFittable,"kbnTypeahead__popover--top":!isSuggestionsListFittable})},external_kbnSharedDeps_React_default.a.createElement("div",{id:"kbnTypeahead__items",role:"listbox",ref:node=>this.parentNode=node,onScroll:this.handleScroll},suggestions))))}componentDidUpdate(prevProps){prevProps.index!==this.props.index&&this.scrollIntoView()}}const StyledSuggestionsListDiv=external_kbnSharedDeps_StyledComponents_default.a.div.withConfig({displayName:"StyledSuggestionsListDiv",componentId:"sc-8s3ge7-0"})(["",""],props=>`\n      position: absolute;\n      z-index: 4001;\n      left: ${props.queryBarRect.left}px;\n      width: ${props.queryBarRect.width}px;\n      ${props.verticalListPosition}`)}}]);