/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=14)}([function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,exports){module.exports=__kbnSharedDeps__.RxjsOperators},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/embeddable/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/embeddableEnhanced/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/data/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Rxjs},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,exports){},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/share/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(15);__kbnBundles__.define("plugin/dashboardEnhanced/public",__webpack_require__,16)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.dashboardEnhanced},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DashboardEnhancedSetupContract",(function(){})),__webpack_require__.d(__webpack_exports__,"DashboardEnhancedSetupDependencies",(function(){})),__webpack_require__.d(__webpack_exports__,"DashboardEnhancedStartContract",(function(){})),__webpack_require__.d(__webpack_exports__,"DashboardEnhancedStartDependencies",(function(){})),__webpack_require__.d(__webpack_exports__,"DashboardEnhancedAbstractDashboardDrilldown",(function(){return abstract_dashboard_drilldown_AbstractDashboardDrilldown})),__webpack_require__.d(__webpack_exports__,"DashboardEnhancedAbstractDashboardDrilldownConfig",(function(){return types.Config})),__webpack_require__.d(__webpack_exports__,"DashboardEnhancedAbstractDashboardDrilldownParams",(function(){})),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));var public_=__webpack_require__(2),external_kbnSharedDeps_React_=__webpack_require__(0),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_KbnI18n_=__webpack_require__(3),external_kbnSharedDeps_RxjsOperators_=__webpack_require__(1),external_kbnSharedDeps_Rxjs_=__webpack_require__(8),kibanaReact_public_=__webpack_require__(7),embeddableEnhanced_public_=__webpack_require__(5),data_public_=__webpack_require__(6);function ensureNestedTriggers(triggers){return triggers.includes(data_public_.APPLY_FILTER_TRIGGER)||!triggers.includes(public_.VALUE_CLICK_TRIGGER)&&!triggers.includes(public_.SELECT_RANGE_TRIGGER)?triggers:[...triggers,data_public_.APPLY_FILTER_TRIGGER]}const createDrilldownTemplatesFromSiblings=embeddable=>{const templates=[],embeddableId=embeddable.id,container=embeddable.getRoot();if(!container)return templates;if(!(container instanceof public_.Container))return templates;const childrenIds=container.getChildIds();for(const childId of childrenIds){const child=container.getChild(childId);if(child.id===embeddableId)continue;if(!Object(embeddableEnhanced_public_.isEnhancedEmbeddable)(child))continue;const events=child.enhancements.dynamicActions.state.get().events;for(const event of events){const template={id:event.eventId,name:event.action.name,icon:"dashboardApp",description:child.getTitle()||child.id,config:event.action.config,factoryId:event.action.factoryId,triggers:event.triggers};templates.push(template)}}return templates};function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class flyout_create_drilldown_FlyoutCreateDrilldownAction{constructor(params){this.params=params,_defineProperty(this,"type","OPEN_FLYOUT_ADD_DRILLDOWN"),_defineProperty(this,"id","OPEN_FLYOUT_ADD_DRILLDOWN"),_defineProperty(this,"order",12),_defineProperty(this,"grouping",embeddableEnhanced_public_.embeddableEnhancedDrilldownGrouping)}getDisplayName(){return external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.dashboard.FlyoutCreateDrilldownAction.displayName",{defaultMessage:"Create drilldown"})}getIconType(){return"plusInCircle"}isEmbeddableCompatible(context){if(!Object(embeddableEnhanced_public_.isEnhancedEmbeddable)(context.embeddable))return!1;const supportedTriggers=context.embeddable.supportedTriggers();if(!supportedTriggers||!supportedTriggers.length)return!1;if("dashboard"!==context.embeddable.getRoot().type)return!1;const allPossibleTriggers=this.params.start().plugins.uiActionsEnhanced.getActionFactories().map(factory=>factory.supportedTriggers()).reduce((res,next)=>res.concat(next),[]);return ensureNestedTriggers(supportedTriggers).some(trigger=>allPossibleTriggers.includes(trigger))}async isCompatible(context){return"edit"===context.embeddable.getInput().viewMode&&this.isEmbeddableCompatible(context)}async execute(context){const{core:core,plugins:plugins}=this.params.start(),{embeddable:embeddable}=context;if(!Object(embeddableEnhanced_public_.isEnhancedEmbeddable)(embeddable))throw new Error("Need embeddable to be EnhancedEmbeddable to execute FlyoutCreateDrilldownAction.");const templates=createDrilldownTemplatesFromSiblings(embeddable),closed$=new external_kbnSharedDeps_Rxjs_.Subject,close=()=>{closed$.next(!0),handle.close()},handle=core.overlays.openFlyout(Object(kibanaReact_public_.toMountPoint)(external_kbnSharedDeps_React_default.a.createElement(plugins.uiActionsEnhanced.DrilldownManager,{closeAfterCreate:!0,initialRoute:"/new",dynamicActionManager:embeddable.enhancements.dynamicActions,triggers:[...ensureNestedTriggers(embeddable.supportedTriggers()),public_.CONTEXT_MENU_TRIGGER],placeContext:{embeddable:embeddable},templates:templates,onClose:close})),{ownFocus:!0,"data-test-subj":"createDrilldownFlyout"});core.application.currentAppId$.pipe(Object(external_kbnSharedDeps_RxjsOperators_.takeUntil)(closed$),Object(external_kbnSharedDeps_RxjsOperators_.skip)(1),Object(external_kbnSharedDeps_RxjsOperators_.take)(1)).subscribe(()=>{close()}),embeddable.getInput$().pipe(Object(external_kbnSharedDeps_RxjsOperators_.takeUntil)(closed$),Object(external_kbnSharedDeps_RxjsOperators_.map)(input=>input.viewMode),Object(external_kbnSharedDeps_RxjsOperators_.distinctUntilChanged)(),Object(external_kbnSharedDeps_RxjsOperators_.filter)(mode=>mode!==public_.ViewMode.EDIT),Object(external_kbnSharedDeps_RxjsOperators_.take)(1)).subscribe(()=>{close()})}}const txtDisplayName=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.dashboard.panel.openFlyoutEditDrilldown.displayName",{defaultMessage:"Manage drilldowns"});var external_kbnSharedDeps_ElasticEui_=__webpack_require__(4),kibanaUtils_public_=__webpack_require__(9);const MenuItem=({context:context})=>{const{events:events}=Object(kibanaUtils_public_.useContainerState)(context.embeddable.enhancements.dynamicActions.state),count=events.length;return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup,{alignItems:"center"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!0},txtDisplayName),count>0&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiNotificationBadge,null,count)))};function flyout_edit_drilldown_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class flyout_edit_drilldown_FlyoutEditDrilldownAction{constructor(params){this.params=params,flyout_edit_drilldown_defineProperty(this,"type","OPEN_FLYOUT_EDIT_DRILLDOWN"),flyout_edit_drilldown_defineProperty(this,"id","OPEN_FLYOUT_EDIT_DRILLDOWN"),flyout_edit_drilldown_defineProperty(this,"order",10),flyout_edit_drilldown_defineProperty(this,"grouping",embeddableEnhanced_public_.embeddableEnhancedDrilldownGrouping),flyout_edit_drilldown_defineProperty(this,"MenuItem",Object(kibanaReact_public_.reactToUiComponent)(MenuItem))}getDisplayName(){return txtDisplayName}getIconType(){return"list"}async isCompatible({embeddable:embeddable}){return embeddable.getInput().viewMode===public_.ViewMode.EDIT&&(!!Object(embeddableEnhanced_public_.isEnhancedEmbeddable)(embeddable)&&embeddable.enhancements.dynamicActions.state.get().events.length>0)}async execute(context){const{core:core,plugins:plugins}=this.params.start(),{embeddable:embeddable}=context;if(!Object(embeddableEnhanced_public_.isEnhancedEmbeddable)(embeddable))throw new Error("Need embeddable to be EnhancedEmbeddable to execute FlyoutEditDrilldownAction.");const templates=createDrilldownTemplatesFromSiblings(embeddable),closed$=new external_kbnSharedDeps_Rxjs_.Subject,close=()=>{closed$.next(!0),handle.close()},handle=core.overlays.openFlyout(Object(kibanaReact_public_.toMountPoint)(external_kbnSharedDeps_React_default.a.createElement(plugins.uiActionsEnhanced.DrilldownManager,{initialRoute:"/manage",dynamicActionManager:embeddable.enhancements.dynamicActions,triggers:[...ensureNestedTriggers(embeddable.supportedTriggers()),public_.CONTEXT_MENU_TRIGGER],placeContext:{embeddable:embeddable},templates:templates,onClose:close})),{ownFocus:!0,"data-test-subj":"editDrilldownFlyout"});core.application.currentAppId$.pipe(Object(external_kbnSharedDeps_RxjsOperators_.takeUntil)(closed$),Object(external_kbnSharedDeps_RxjsOperators_.skip)(1),Object(external_kbnSharedDeps_RxjsOperators_.take)(1)).subscribe(()=>{close()}),embeddable.getInput$().pipe(Object(external_kbnSharedDeps_RxjsOperators_.takeUntil)(closed$),Object(external_kbnSharedDeps_RxjsOperators_.map)(input=>input.viewMode),Object(external_kbnSharedDeps_RxjsOperators_.distinctUntilChanged)(),Object(external_kbnSharedDeps_RxjsOperators_.filter)(mode=>mode!==public_.ViewMode.EDIT),Object(external_kbnSharedDeps_RxjsOperators_.take)(1)).subscribe(()=>{close()})}}var external_kbnSharedDeps_Lodash_=__webpack_require__(10);const txtChooseDestinationDashboard=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.dashboard.components.DashboardDrilldownConfig.chooseDestinationDashboard",{defaultMessage:"Choose destination dashboard"}),txtUseCurrentFilters=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.dashboard.components.DashboardDrilldownConfig.useCurrentFilters",{defaultMessage:"Use filters and query from origin dashboard"}),txtUseCurrentDateRange=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.dashboard.components.DashboardDrilldownConfig.useCurrentDateRange",{defaultMessage:"Use date range from origin dashboard"}),DashboardDrilldownConfig=({activeDashboardId:activeDashboardId,dashboards:dashboards,currentFilters:currentFilters,keepRange:keepRange,onDashboardSelect:onDashboardSelect,onCurrentFiltersToggle:onCurrentFiltersToggle,onKeepRangeToggle:onKeepRangeToggle,onSearchChange:onSearchChange,isLoading:isLoading,error:error})=>{var _dashboards$find;const selectedTitle=(null===(_dashboards$find=dashboards.find(item=>item.value===activeDashboardId))||void 0===_dashboards$find?void 0:_dashboards$find.label)||"";return external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{label:txtChooseDestinationDashboard,fullWidth:!0,isInvalid:!!error,error:error},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiComboBox,{async:!0,selectedOptions:activeDashboardId?[{label:selectedTitle,value:activeDashboardId}]:[],options:dashboards,onChange:([{value:value=""}={value:""}])=>onDashboardSelect(value),onSearchChange:onSearchChange,isLoading:isLoading,singleSelection:{asPlainText:!0},fullWidth:!0,"data-test-subj":"dashboardDrilldownSelectDashboard",isInvalid:!!error})),!!onCurrentFiltersToggle&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{hasChildLabel:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSwitch,{name:"useCurrentFilters",label:txtUseCurrentFilters,checked:!!currentFilters,onChange:onCurrentFiltersToggle})),!!onKeepRangeToggle&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFormRow,{hasChildLabel:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSwitch,{name:"useCurrentDateRange",label:txtUseCurrentDateRange,checked:!!keepRange,onChange:onKeepRangeToggle})))};function collect_config_container_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const mergeDashboards=(dashboards,selectedDashboard)=>selectedDashboard&&-1===Object(external_kbnSharedDeps_Lodash_.findIndex)(dashboards,{value:selectedDashboard.value})?[selectedDashboard,...dashboards]:dashboards,dashboardSavedObjectToMenuItem=savedObject=>({value:savedObject.id,label:savedObject.attributes.title});class collect_config_container_CollectConfigContainer extends external_kbnSharedDeps_React_default.a.Component{constructor(props){super(props),collect_config_container_defineProperty(this,"isMounted",!0),collect_config_container_defineProperty(this,"state",{dashboards:[],isLoading:!1,searchString:void 0,selectedDashboard:void 0,error:void 0}),collect_config_container_defineProperty(this,"debouncedLoadDashboards",void 0),this.debouncedLoadDashboards=Object(external_kbnSharedDeps_Lodash_.debounce)(this.loadDashboards.bind(this),500)}componentDidMount(){this.loadSelectedDashboard(),this.loadDashboards()}componentWillUnmount(){this.isMounted=!1}render(){const{config:config,onConfig:onConfig}=this.props,{dashboards:dashboards,selectedDashboard:selectedDashboard,isLoading:isLoading,error:error}=this.state;return external_kbnSharedDeps_React_default.a.createElement(DashboardDrilldownConfig,{activeDashboardId:config.dashboardId,dashboards:mergeDashboards(dashboards,selectedDashboard),currentFilters:config.useCurrentFilters,keepRange:config.useCurrentDateRange,isLoading:isLoading,error:error,onDashboardSelect:dashboardId=>{onConfig({...config,dashboardId:dashboardId}),this.state.error&&this.setState({error:void 0})},onSearchChange:this.debouncedLoadDashboards,onCurrentFiltersToggle:()=>onConfig({...config,useCurrentFilters:!config.useCurrentFilters}),onKeepRangeToggle:()=>onConfig({...config,useCurrentDateRange:!config.useCurrentDateRange})})}async loadSelectedDashboard(){var _savedObject$error;const{config:config,params:{start:start}}=this.props;if(!config.dashboardId)return;const savedObject=await start().core.savedObjects.client.get("dashboard",config.dashboardId);var dashboardId;return this.isMounted?404===(null===(_savedObject$error=savedObject.error)||void 0===_savedObject$error?void 0:_savedObject$error.statusCode)?(this.setState({error:(dashboardId=config.dashboardId,external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.dashboard.drilldown.errorDestinationDashboardIsMissing",{defaultMessage:"Destination dashboard ('{dashboardId}') no longer exists. Choose another dashboard.",values:{dashboardId:dashboardId}}))}),void this.props.onConfig({...config,dashboardId:void 0})):savedObject.error?(this.setState({error:savedObject.error.message}),void this.props.onConfig({...config,dashboardId:void 0})):void this.setState({selectedDashboard:dashboardSavedObjectToMenuItem(savedObject)}):void 0}async loadDashboards(searchString){this.setState({searchString:searchString,isLoading:!0});const savedObjectsClient=this.props.params.start().core.savedObjects.client,{savedObjects:savedObjects}=await savedObjectsClient.find({type:"dashboard",search:searchString?searchString+"*":void 0,searchFields:["title^3","description"],defaultSearchOperator:"AND",perPage:100});if(!this.isMounted)return;if(searchString!==this.state.searchString)return;const dashboardList=savedObjects.map(dashboardSavedObjectToMenuItem);this.setState({dashboards:dashboardList,isLoading:!1})}}const txtGoToDashboard=external_kbnSharedDeps_KbnI18n_.i18n.translate("xpack.dashboard.drilldown.goToDashboard",{defaultMessage:"Go to Dashboard"});function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function abstract_dashboard_drilldown_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class abstract_dashboard_drilldown_AbstractDashboardDrilldown{constructor(params){this.params=params,abstract_dashboard_drilldown_defineProperty(this,"id",void 0),abstract_dashboard_drilldown_defineProperty(this,"supportedTriggers",void 0),abstract_dashboard_drilldown_defineProperty(this,"order",100),abstract_dashboard_drilldown_defineProperty(this,"getDisplayName",()=>txtGoToDashboard),abstract_dashboard_drilldown_defineProperty(this,"euiIcon","dashboardApp"),abstract_dashboard_drilldown_defineProperty(this,"ReactCollectConfig",props=>external_kbnSharedDeps_React_default.a.createElement(collect_config_container_CollectConfigContainer,_extends({},props,{params:this.params}))),abstract_dashboard_drilldown_defineProperty(this,"CollectConfig",Object(kibanaReact_public_.reactToUiComponent)(this.ReactCollectConfig)),abstract_dashboard_drilldown_defineProperty(this,"createConfig",()=>({dashboardId:"",useCurrentFilters:!0,useCurrentDateRange:!0})),abstract_dashboard_drilldown_defineProperty(this,"isConfigValid",config=>!!config.dashboardId),abstract_dashboard_drilldown_defineProperty(this,"getHref",async(config,context)=>(await this.getURL(config,context)).path),abstract_dashboard_drilldown_defineProperty(this,"execute",async(config,context)=>{const url=await this.getURL(config,context);await this.params.start().core.application.navigateToApp(url.appName,{path:url.appPath})})}get urlGenerator(){const urlGenerator=this.params.start().plugins.dashboard.dashboardUrlGenerator;if(!urlGenerator)throw new Error("Dashboard URL generator is required for dashboard drilldown.");return urlGenerator}}var types=__webpack_require__(11),share_public_=__webpack_require__(13);const generateRefName=(state,id)=>`drilldown:${id}:${state.eventId}:dashboardId`;__webpack_require__(12);function embeddable_to_dashboard_drilldown_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class embeddable_to_dashboard_drilldown_EmbeddableToDashboardDrilldown extends abstract_dashboard_drilldown_AbstractDashboardDrilldown{constructor(...args){super(...args),embeddable_to_dashboard_drilldown_defineProperty(this,"id","DASHBOARD_TO_DASHBOARD_DRILLDOWN"),embeddable_to_dashboard_drilldown_defineProperty(this,"supportedTriggers",()=>[data_public_.APPLY_FILTER_TRIGGER]),embeddable_to_dashboard_drilldown_defineProperty(this,"inject",(({drilldownId:drilldownId})=>(state,references)=>{const action=state.action,refName=generateRefName(state,drilldownId),ref=references.find(r=>r.name===refName);return ref?ref.id&&ref.id===action.config.dashboardId?state:((state,dashboardId)=>({...state,action:{...state.action,config:{...state.action.config,dashboardId:dashboardId}}}))(state,ref.id):state})({drilldownId:this.id})),embeddable_to_dashboard_drilldown_defineProperty(this,"extract",(({drilldownId:drilldownId})=>state=>{const action=state.action,references=action.config.dashboardId?[{name:generateRefName(state,drilldownId),type:"dashboard",id:action.config.dashboardId}]:[],{dashboardId:dashboardId,...restOfConfig}=action.config;return{state:{...state,action:{...state.action,config:restOfConfig}},references:references}})({drilldownId:this.id}))}async getURL(config,context){const state={dashboardId:config.dashboardId};if(context.embeddable){var _input$filters;const input=context.embeddable.getInput();Object(data_public_.isQuery)(input.query)&&config.useCurrentFilters&&(state.query=input.query),Object(data_public_.isTimeRange)(input.timeRange)&&config.useCurrentDateRange&&(state.timeRange=input.timeRange),Object(data_public_.isFilters)(input.filters)&&(state.filters=config.useCurrentFilters?input.filters:null===(_input$filters=input.filters)||void 0===_input$filters?void 0:_input$filters.filter(f=>data_public_.esFilters.isFilterPinned(f)))}const{restOfFilters:filtersFromEvent,timeRange:timeRangeFromEvent}=data_public_.esFilters.extractTimeRange(context.filters,context.timeFieldName);var _state$filters;filtersFromEvent&&(state.filters=[...null!==(_state$filters=state.filters)&&void 0!==_state$filters?_state$filters:[],...filtersFromEvent]);timeRangeFromEvent&&(state.timeRange=timeRangeFromEvent);const path=await this.urlGenerator.createUrl(state);return new share_public_.KibanaURL(path)}}class dashboard_drilldowns_services_DashboardDrilldownsService{bootstrap(core,plugins,{enableDrilldowns:enableDrilldowns}){enableDrilldowns&&this.setupDrilldowns(core,plugins)}setupDrilldowns(core,{uiActionsEnhanced:uiActions}){const start=Object(kibanaUtils_public_.createStartServicesGetter)(core.getStartServices),actionFlyoutCreateDrilldown=new flyout_create_drilldown_FlyoutCreateDrilldownAction({start:start});uiActions.addTriggerAction(public_.CONTEXT_MENU_TRIGGER,actionFlyoutCreateDrilldown);const actionFlyoutEditDrilldown=new flyout_edit_drilldown_FlyoutEditDrilldownAction({start:start});uiActions.addTriggerAction(public_.CONTEXT_MENU_TRIGGER,actionFlyoutEditDrilldown);const dashboardToDashboardDrilldown=new embeddable_to_dashboard_drilldown_EmbeddableToDashboardDrilldown({start:start});uiActions.registerDrilldown(dashboardToDashboardDrilldown)}}class plugin_DashboardEnhancedPlugin{constructor(context){var obj,key,value;this.context=context,obj=this,key="drilldowns",value=new dashboard_drilldowns_services_DashboardDrilldownsService,key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value}setup(core,plugins){return this.drilldowns.bootstrap(core,plugins,{enableDrilldowns:!0}),{}}start(core,plugins){return{}}stop(){}}function public_plugin(context){return new plugin_DashboardEnhancedPlugin(context)}}]);