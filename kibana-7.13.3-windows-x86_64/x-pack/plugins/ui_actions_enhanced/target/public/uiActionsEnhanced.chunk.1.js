/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.uiActionsEnhanced_bundle_jsonpfunction=window.uiActionsEnhanced_bundle_jsonpfunction||[]).push([[1],{100:function(module,exports,__webpack_require__){var api=__webpack_require__(8),content=__webpack_require__(101);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},101:function(module,exports,__webpack_require__){(exports=__webpack_require__(9)(!1)).push([module.i,".uaeUrlDrilldownCollectConfig__urlTemplateFormRow .euiFormRow__label{align-self:flex-end}\n",""]),module.exports=exports},102:function(module,exports,__webpack_require__){var api=__webpack_require__(8),content=__webpack_require__(103);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},103:function(module,exports,__webpack_require__){(exports=__webpack_require__(9)(!1)).push([module.i,".uaeUrlDrilldownCollectConfig__urlTemplateFormRow .euiFormRow__label{align-self:flex-end}\n",""]),module.exports=exports},104:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"UrlDrilldownCollectConfig",(function(){return UrlDrilldownCollectConfig}));var external_kbnSharedDeps_React_=__webpack_require__(0),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_ElasticEui_=__webpack_require__(1),external_kbnSharedDeps_KbnI18n_=(__webpack_require__(95),__webpack_require__(2));external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplatePlaceholderText",{defaultMessage:"Example: {exampleUrl}",values:{exampleUrl:"https://www.my-url.com/?{{event.key}}={{event.value}}"}}),external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlPreviewHelpText",{defaultMessage:"Please note that in preview \\{\\{event.*\\}\\} variables are substituted with dummy values."});const txtUrlTemplateLabel=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateLabel",{defaultMessage:"Enter URL:"}),txtUrlTemplateSyntaxHelpLinkText=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateSyntaxHelpLinkText",{defaultMessage:"Syntax help"}),txtUrlTemplateOpenInNewTab=(external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlPreviewLabel",{defaultMessage:"URL preview:"}),external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlPreviewLinkText",{defaultMessage:"Preview"}),external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.openInNewTabLabel",{defaultMessage:"Open in new window"})),txtUrlTemplateAdditionalOptions=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.additionalOptions",{defaultMessage:"Additional options"}),txtUrlTemplateEncodeUrl=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.encodeUrl",{defaultMessage:"Encode URL"}),txtUrlTemplateEncodeDescription=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.encodeDescription",{defaultMessage:"If enabled, URL will be escaped using percent encoding"}),txtAddVariableButtonTitle=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.addVariableButtonTitle",{defaultMessage:"Add variable"}),txtUrlTemplateVariablesHelpLinkText=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateVariablesHelpLinkText",{defaultMessage:"Help"}),txtUrlTemplateVariablesFilterPlaceholderText=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateVariablesFilterPlaceholderText",{defaultMessage:"Filter variables"}),VariablePopover=({variables:variables,onSelect:onSelect,variablesHelpLink:variablesHelpLink})=>{const[isVariablesPopoverOpen,setIsVariablesPopoverOpen]=Object(external_kbnSharedDeps_React_.useState)(!1),closePopover=()=>setIsVariablesPopoverOpen(!1),options=variables.map(({label:label})=>({key:label,label:label}));return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPopover,{ownFocus:!0,button:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiText,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLink,{onClick:()=>setIsVariablesPopoverOpen(!0)},txtAddVariableButtonTitle," ",external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiIcon,{type:"indexOpen"}))),isOpen:isVariablesPopoverOpen,closePopover:closePopover,panelPaddingSize:"none",anchorPosition:"downLeft"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSelectable,{singleSelection:!0,searchable:!0,searchProps:{placeholder:txtUrlTemplateVariablesFilterPlaceholderText,compressed:!0},options:options,onChange:newOptions=>{const selected=newOptions.find(o=>"on"===o.checked);selected&&(onSelect(selected.key),closePopover())},listProps:{showIcons:!1}},(list,search)=>external_kbnSharedDeps_React_default.a.createElement("div",{style:{width:320}},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPopoverTitle,null,search),list,variablesHelpLink&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPopoverFooter,{className:"eui-textRight"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLink,{external:!0,href:variablesHelpLink,target:"_blank"},txtUrlTemplateVariablesHelpLinkText)))))};var public_=__webpack_require__(14);const UrlDrilldownCollectConfig=({config:config,variables:variables,onConfig:onConfig,syntaxHelpDocsLink:syntaxHelpDocsLink,variablesHelpDocsLink:variablesHelpDocsLink})=>{var _config$url$template,_config$encodeUrl;const editorRef=Object(external_kbnSharedDeps_React_.useRef)(null),[showUrlError,setShowUrlError]=external_kbnSharedDeps_React_default.a.useState(!1),urlTemplate=null!==(_config$url$template=config.url.template)&&void 0!==_config$url$template?_config$url$template:"";const isInvalid=showUrlError&&!urlTemplate,variablesDropdown=external_kbnSharedDeps_React_default.a.createElement(VariablePopover,{variables:variables,variablesHelpLink:variablesHelpDocsLink,onSelect:variable=>{const editor=editorRef.current;editor&&editor.trigger("keyboard","type",{text:"{{"+variable+"}}"})}});return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{fullWidth:!0,isInvalid:isInvalid,className:"uaeUrlDrilldownCollectConfig__urlTemplateFormRow",label:txtUrlTemplateLabel,helpText:syntaxHelpDocsLink&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiLink,{external:!0,target:"_blank",href:syntaxHelpDocsLink},txtUrlTemplateSyntaxHelpLinkText),labelAppend:variablesDropdown},external_kbnSharedDeps_React_default.a.createElement(public_.UrlTemplateEditor,{variables:variables,value:urlTemplate,onChange:newUrlTemplate=>function(newUrlTemplate){config.url.template!==newUrlTemplate&&(setShowUrlError(!0),onConfig({...config,url:{...config.url,template:newUrlTemplate}}))}(newUrlTemplate),onEditor:editor=>{editorRef.current=editor}})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"l"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiAccordion,{id:"accordion_url_drilldown_additional_options",buttonContent:txtUrlTemplateAdditionalOptions,"data-test-subj":"urlDrilldownAdditionalOptions"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPanel,{color:"subdued",borderRadius:"none",hasShadow:!1,style:{border:"none"}},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{hasChildLabel:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSwitch,{id:"openInNewTab",name:"openInNewTab",label:txtUrlTemplateOpenInNewTab,checked:config.openInNewTab,onChange:()=>onConfig({...config,openInNewTab:!config.openInNewTab}),"data-test-subj":"urlDrilldownOpenInNewTab"})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{hasChildLabel:!1,fullWidth:!0},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSwitch,{id:"encodeUrl",name:"encodeUrl",label:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,txtUrlTemplateEncodeUrl,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTextColor,{color:"subdued"},txtUrlTemplateEncodeDescription)),checked:null===(_config$encodeUrl=config.encodeUrl)||void 0===_config$encodeUrl||_config$encodeUrl,onChange:()=>{var _config$encodeUrl2;return onConfig({...config,encodeUrl:!(null===(_config$encodeUrl2=config.encodeUrl)||void 0===_config$encodeUrl2||_config$encodeUrl2)})}})))))}},95:function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(96);case"v7light":return __webpack_require__(98);case"v8dark":return __webpack_require__(100);case"v8light":return __webpack_require__(102)}},96:function(module,exports,__webpack_require__){var api=__webpack_require__(8),content=__webpack_require__(97);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},97:function(module,exports,__webpack_require__){(exports=__webpack_require__(9)(!1)).push([module.i,".uaeUrlDrilldownCollectConfig__urlTemplateFormRow .euiFormRow__label{align-self:flex-end}\n",""]),module.exports=exports},98:function(module,exports,__webpack_require__){var api=__webpack_require__(8),content=__webpack_require__(99);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},99:function(module,exports,__webpack_require__){(exports=__webpack_require__(9)(!1)).push([module.i,".uaeUrlDrilldownCollectConfig__urlTemplateFormRow .euiFormRow__label{align-self:flex-end}\n",""]),module.exports=exports}}]);