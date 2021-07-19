/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=5)}([function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/data/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/embeddable/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/share/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(6);__kbnBundles__.define("plugin/discoverEnhanced/public",__webpack_require__,7)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.discoverEnhanced},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var public_=__webpack_require__(0),kibanaUtils_public_=__webpack_require__(3),embeddable_public_=__webpack_require__(1),share_public_=__webpack_require__(2);const getIndexPatterns=embeddable=>{if(!embeddable)return[];const output=embeddable.getOutput();return(output=>!(!output||"object"!=typeof output)&&Array.isArray(output.indexPatterns))(output)?output.indexPatterns.map(({id:id})=>id):[]},hasExactlyOneIndexPattern=embeddable=>1===getIndexPatterns(embeddable).length;var external_kbnSharedDeps_KbnI18n_=__webpack_require__(4);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class abstract_explore_data_action_AbstractExploreDataAction{constructor(params){this.params=params,_defineProperty(this,"getIconType",context=>"discoverApp"),_defineProperty(this,"getDisplayName",context=>external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.discover.FlyoutCreateDrilldownAction.displayName",{defaultMessage:"Explore underlying data"}))}async isCompatible({embeddable:embeddable}){var _this$params$start$pl;if(!embeddable)return!1;const{core:core,plugins:plugins}=this.params.start(),{capabilities:capabilities}=core.application;if(capabilities.discover&&!capabilities.discover.show)return!1;if(!plugins.discover.urlGenerator)return!1;return!!(null===(_this$params$start$pl=this.params.start().plugins.kibanaLegacy)||void 0===_this$params$start$pl||!_this$params$start$pl.dashboardConfig.getHideWriteControls())&&(!!hasExactlyOneIndexPattern(embeddable)&&embeddable.getInput().viewMode===embeddable_public_.ViewMode.VIEW)}async execute(context){if(!hasExactlyOneIndexPattern(context.embeddable))return;const{core:core}=this.params.start(),{appName:appName,appPath:appPath}=await this.getUrl(context);await core.application.navigateToApp(appName,{path:appPath})}async getHref(context){const{embeddable:embeddable}=context;if(!hasExactlyOneIndexPattern(embeddable))throw new Error(`Embeddable not supported for "${this.getDisplayName(context)}" action.`);const{path:path}=await this.getUrl(context);return path}}function explore_data_context_menu_action_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class explore_data_context_menu_action_ExploreDataContextMenuAction extends abstract_explore_data_action_AbstractExploreDataAction{constructor(...args){super(...args),explore_data_context_menu_action_defineProperty(this,"id","ACTION_EXPLORE_DATA"),explore_data_context_menu_action_defineProperty(this,"type","ACTION_EXPLORE_DATA"),explore_data_context_menu_action_defineProperty(this,"order",200),explore_data_context_menu_action_defineProperty(this,"getUrl",async context=>{const{plugins:plugins}=this.params.start(),{urlGenerator:urlGenerator}=plugins.discover;if(!urlGenerator)throw new Error("Discover URL generator not available.");const{embeddable:embeddable}=context,state={};if(embeddable){state.indexPatternId=getIndexPatterns(embeddable)[0]||void 0;const input=embeddable.getInput();input.timeRange&&!state.timeRange&&(state.timeRange=input.timeRange),input.query&&(state.query=input.query),input.filters&&(state.filters=[...input.filters,...state.filters||[]])}const path=await urlGenerator.createUrl(state);return new share_public_.KibanaURL(path)})}}function explore_data_chart_action_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class explore_data_chart_action_ExploreDataChartAction extends abstract_explore_data_action_AbstractExploreDataAction{constructor(...args){super(...args),explore_data_chart_action_defineProperty(this,"id","ACTION_EXPLORE_DATA_CHART"),explore_data_chart_action_defineProperty(this,"type","ACTION_EXPLORE_DATA_CHART"),explore_data_chart_action_defineProperty(this,"order",200),explore_data_chart_action_defineProperty(this,"getUrl",async context=>{const{plugins:plugins}=this.params.start(),{urlGenerator:urlGenerator}=plugins.discover;if(!urlGenerator)throw new Error("Discover URL generator not available.");const{embeddable:embeddable}=context,{restOfFilters:filters,timeRange:timeRange}=public_.esFilters.extractTimeRange(context.filters,context.timeFieldName),state={filters:filters,timeRange:timeRange};if(embeddable){state.indexPatternId=getIndexPatterns(embeddable)[0]||void 0;const input=embeddable.getInput();input.timeRange&&!state.timeRange&&(state.timeRange=input.timeRange),input.query&&(state.query=input.query),input.filters&&(state.filters=[...input.filters,...state.filters||[]])}const path=await urlGenerator.createUrl(state);return new share_public_.KibanaURL(path)})}async isCompatible(context){var _context$embeddable;return"map"!==(null===(_context$embeddable=context.embeddable)||void 0===_context$embeddable?void 0:_context$embeddable.type)&&super.isCompatible(context)}}class plugin_DiscoverEnhancedPlugin{constructor(context){var obj,key,value;this.context=context,value=void 0,(key="config")in(obj=this)?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,this.config=context.config.get()}setup(core,{uiActions:uiActions,share:share}){const start=Object(kibanaUtils_public_.createStartServicesGetter)(core.getStartServices);if(!!share){const params={start:start};if(this.config.actions.exploreDataInContextMenu.enabled){const exploreDataAction=new explore_data_context_menu_action_ExploreDataContextMenuAction(params);uiActions.addTriggerAction(embeddable_public_.CONTEXT_MENU_TRIGGER,exploreDataAction)}if(this.config.actions.exploreDataInChart.enabled){const exploreDataChartAction=new explore_data_chart_action_ExploreDataChartAction(params);uiActions.addTriggerAction(public_.APPLY_FILTER_TRIGGER,exploreDataChartAction)}}}start(core,plugins){}stop(){}}const public_plugin=initializerContext=>new plugin_DiscoverEnhancedPlugin(initializerContext)}]);