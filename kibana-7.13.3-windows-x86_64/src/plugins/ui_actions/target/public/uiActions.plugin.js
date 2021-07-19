!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=23)}([function(module,__webpack_exports__,__webpack_require__){"use strict";var _trigger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15);__webpack_require__.o(_trigger__WEBPACK_IMPORTED_MODULE_0__,"ROW_CLICK_TRIGGER")&&__webpack_require__.d(__webpack_exports__,"ROW_CLICK_TRIGGER",(function(){return _trigger__WEBPACK_IMPORTED_MODULE_0__.ROW_CLICK_TRIGGER})),__webpack_require__.o(_trigger__WEBPACK_IMPORTED_MODULE_0__,"RowClickContext")&&__webpack_require__.d(__webpack_exports__,"RowClickContext",(function(){return _trigger__WEBPACK_IMPORTED_MODULE_0__.RowClickContext})),__webpack_require__.o(_trigger__WEBPACK_IMPORTED_MODULE_0__,"Trigger")&&__webpack_require__.d(__webpack_exports__,"Trigger",(function(){return _trigger__WEBPACK_IMPORTED_MODULE_0__.Trigger})),__webpack_require__.o(_trigger__WEBPACK_IMPORTED_MODULE_0__,"VISUALIZE_FIELD_TRIGGER")&&__webpack_require__.d(__webpack_exports__,"VISUALIZE_FIELD_TRIGGER",(function(){return _trigger__WEBPACK_IMPORTED_MODULE_0__.VISUALIZE_FIELD_TRIGGER})),__webpack_require__.o(_trigger__WEBPACK_IMPORTED_MODULE_0__,"VISUALIZE_GEO_FIELD_TRIGGER")&&__webpack_require__.d(__webpack_exports__,"VISUALIZE_GEO_FIELD_TRIGGER",(function(){return _trigger__WEBPACK_IMPORTED_MODULE_0__.VISUALIZE_GEO_FIELD_TRIGGER})),__webpack_require__.o(_trigger__WEBPACK_IMPORTED_MODULE_0__,"rowClickTrigger")&&__webpack_require__.d(__webpack_exports__,"rowClickTrigger",(function(){return _trigger__WEBPACK_IMPORTED_MODULE_0__.rowClickTrigger})),__webpack_require__.o(_trigger__WEBPACK_IMPORTED_MODULE_0__,"visualizeFieldTrigger")&&__webpack_require__.d(__webpack_exports__,"visualizeFieldTrigger",(function(){return _trigger__WEBPACK_IMPORTED_MODULE_0__.visualizeFieldTrigger})),__webpack_require__.o(_trigger__WEBPACK_IMPORTED_MODULE_0__,"visualizeGeoFieldTrigger")&&__webpack_require__.d(__webpack_exports__,"visualizeGeoFieldTrigger",(function(){return _trigger__WEBPACK_IMPORTED_MODULE_0__.visualizeGeoFieldTrigger}));__webpack_require__(5),__webpack_require__(4);var _row_click_trigger__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16);__webpack_require__.d(__webpack_exports__,"ROW_CLICK_TRIGGER",(function(){return _row_click_trigger__WEBPACK_IMPORTED_MODULE_3__.a})),__webpack_require__.d(__webpack_exports__,"rowClickTrigger",(function(){return _row_click_trigger__WEBPACK_IMPORTED_MODULE_3__.b}));var _visualize_field_trigger__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(17);__webpack_require__.d(__webpack_exports__,"VISUALIZE_FIELD_TRIGGER",(function(){return _visualize_field_trigger__WEBPACK_IMPORTED_MODULE_4__.a})),__webpack_require__.d(__webpack_exports__,"visualizeFieldTrigger",(function(){return _visualize_field_trigger__WEBPACK_IMPORTED_MODULE_4__.b}));var _visualize_geo_field_trigger__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(18);__webpack_require__.d(__webpack_exports__,"VISUALIZE_GEO_FIELD_TRIGGER",(function(){return _visualize_geo_field_trigger__WEBPACK_IMPORTED_MODULE_5__.a})),__webpack_require__.d(__webpack_exports__,"visualizeGeoFieldTrigger",(function(){return _visualize_geo_field_trigger__WEBPACK_IMPORTED_MODULE_5__.b}));__webpack_require__(19)},function(module,__webpack_exports__,__webpack_require__){"use strict";var _action__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11);__webpack_require__.o(_action__WEBPACK_IMPORTED_MODULE_0__,"Action")&&__webpack_require__.d(__webpack_exports__,"Action",(function(){return _action__WEBPACK_IMPORTED_MODULE_0__.Action})),__webpack_require__.o(_action__WEBPACK_IMPORTED_MODULE_0__,"ActionDefinition")&&__webpack_require__.d(__webpack_exports__,"ActionDefinition",(function(){return _action__WEBPACK_IMPORTED_MODULE_0__.ActionDefinition})),__webpack_require__.o(_action__WEBPACK_IMPORTED_MODULE_0__,"ActionExecutionContext")&&__webpack_require__.d(__webpack_exports__,"ActionExecutionContext",(function(){return _action__WEBPACK_IMPORTED_MODULE_0__.ActionExecutionContext})),__webpack_require__.o(_action__WEBPACK_IMPORTED_MODULE_0__,"ActionExecutionMeta")&&__webpack_require__.d(__webpack_exports__,"ActionExecutionMeta",(function(){return _action__WEBPACK_IMPORTED_MODULE_0__.ActionExecutionMeta})),__webpack_require__.o(_action__WEBPACK_IMPORTED_MODULE_0__,"ActionInternal")&&__webpack_require__.d(__webpack_exports__,"ActionInternal",(function(){return _action__WEBPACK_IMPORTED_MODULE_0__.ActionInternal})),__webpack_require__.o(_action__WEBPACK_IMPORTED_MODULE_0__,"IncompatibleActionError")&&__webpack_require__.d(__webpack_exports__,"IncompatibleActionError",(function(){return _action__WEBPACK_IMPORTED_MODULE_0__.IncompatibleActionError})),__webpack_require__.o(_action__WEBPACK_IMPORTED_MODULE_0__,"createAction")&&__webpack_require__.d(__webpack_exports__,"createAction",(function(){return _action__WEBPACK_IMPORTED_MODULE_0__.createAction}));var _action_internal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12);__webpack_require__.d(__webpack_exports__,"ActionInternal",(function(){return _action_internal__WEBPACK_IMPORTED_MODULE_1__.a}));var _create_action__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13);__webpack_require__.d(__webpack_exports__,"createAction",(function(){return _create_action__WEBPACK_IMPORTED_MODULE_2__.a}));var _incompatible_action_error__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14);__webpack_require__.d(__webpack_exports__,"IncompatibleActionError",(function(){return _incompatible_action_error__WEBPACK_IMPORTED_MODULE_3__.a}))},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TriggerInternal}));var _trigger_contract__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5);class TriggerInternal{constructor(service,trigger){var obj,key,value;this.service=service,this.trigger=trigger,obj=this,key="contract",value=new _trigger_contract__WEBPACK_IMPORTED_MODULE_0__.a(this),key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value}async execute(context,alwaysShowPopup){const triggerId=this.trigger.id,actions=await this.service.getTriggerCompatibleActions(triggerId,context);await Promise.all([actions.map(action=>this.service.executionService.execute({action:action,context:context,trigger:this.trigger},alwaysShowPopup))])}}},function(module,__webpack_exports__,__webpack_require__){"use strict";function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,"a",(function(){return TriggerContract}));class TriggerContract{constructor(internal){this.internal=internal,_defineProperty(this,"id",void 0),_defineProperty(this,"title",void 0),_defineProperty(this,"description",void 0),_defineProperty(this,"exec",async(context,alwaysShowPopup)=>{await this.internal.execute(context,alwaysShowPopup)}),this.id=this.internal.trigger.id,this.title=this.internal.trigger.title,this.description=this.internal.trigger.description}}},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,__webpack_exports__,__webpack_require__){"use strict";var _presentable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);__webpack_require__.o(_presentable__WEBPACK_IMPORTED_MODULE_0__,"Presentable")&&__webpack_require__.d(__webpack_exports__,"Presentable",(function(){return _presentable__WEBPACK_IMPORTED_MODULE_0__.Presentable})),__webpack_require__.o(_presentable__WEBPACK_IMPORTED_MODULE_0__,"PresentableGrouping")&&__webpack_require__.d(__webpack_exports__,"PresentableGrouping",(function(){return _presentable__WEBPACK_IMPORTED_MODULE_0__.PresentableGrouping}))},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ActionInternal}));var _kibana_react_public__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class ActionInternal{constructor(definition){this.definition=definition,_defineProperty(this,"id",this.definition.id),_defineProperty(this,"type",this.definition.type||""),_defineProperty(this,"order",this.definition.order||0),_defineProperty(this,"MenuItem",this.definition.MenuItem),_defineProperty(this,"ReactMenuItem",this.MenuItem?Object(_kibana_react_public__WEBPACK_IMPORTED_MODULE_0__.uiToReactComponent)(this.MenuItem):void 0),_defineProperty(this,"grouping",this.definition.grouping)}execute(context){return this.definition.execute(context)}getIconType(context){if(this.definition.getIconType)return this.definition.getIconType(context)}getDisplayName(context){return this.definition.getDisplayName?this.definition.getDisplayName(context):"Action: "+this.id}getDisplayNameTooltip(context){return this.definition.getDisplayNameTooltip?this.definition.getDisplayNameTooltip(context):""}async isCompatible(context){return!this.definition.isCompatible||await this.definition.isCompatible(context)}async getHref(context){if(this.definition.getHref)return await this.definition.getHref(context)}async shouldAutoExecute(context){return!!this.definition.shouldAutoExecute&&this.definition.shouldAutoExecute(context)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";function createAction(action){return{getIconType:()=>{},order:0,isCompatible:()=>Promise.resolve(!0),getDisplayName:()=>"",...action}}__webpack_require__.d(__webpack_exports__,"a",(function(){return createAction}))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return IncompatibleActionError}));var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);class IncompatibleActionError extends Error{constructor(){var obj,key,value;super(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("uiActions.errors.incompatibleAction",{defaultMessage:"Action is incompatible"})),value="INCOMPATIBLE_ACTION",(key="code")in(obj=this)?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value}}},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ROW_CLICK_TRIGGER})),__webpack_require__.d(__webpack_exports__,"b",(function(){return rowClickTrigger}));var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const ROW_CLICK_TRIGGER="ROW_CLICK_TRIGGER",rowClickTrigger={id:ROW_CLICK_TRIGGER,title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("uiActions.triggers.rowClickTitle",{defaultMessage:"Table row click"}),description:_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.translate("uiActions.triggers.rowClickkDescription",{defaultMessage:"A click on a table row"})}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return VISUALIZE_FIELD_TRIGGER})),__webpack_require__.d(__webpack_exports__,"b",(function(){return visualizeFieldTrigger}));const VISUALIZE_FIELD_TRIGGER="VISUALIZE_FIELD_TRIGGER",visualizeFieldTrigger={id:VISUALIZE_FIELD_TRIGGER,title:"Visualize field",description:"Triggered when user wants to visualize a field."}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return VISUALIZE_GEO_FIELD_TRIGGER})),__webpack_require__.d(__webpack_exports__,"b",(function(){return visualizeGeoFieldTrigger}));const VISUALIZE_GEO_FIELD_TRIGGER="VISUALIZE_GEO_FIELD_TRIGGER",visualizeGeoFieldTrigger={id:VISUALIZE_GEO_FIELD_TRIGGER,title:"Visualize Geo field",description:"Triggered when user wants to visualize a geo field."}},function(module,__webpack_exports__,__webpack_require__){"use strict"},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports,__webpack_require__){"use strict";var ReflectOwnKeys,R="object"==typeof Reflect?Reflect:null,ReflectApply=R&&"function"==typeof R.apply?R.apply:function(target,receiver,args){return Function.prototype.apply.call(target,receiver,args)};ReflectOwnKeys=R&&"function"==typeof R.ownKeys?R.ownKeys:Object.getOwnPropertySymbols?function(target){return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))}:function(target){return Object.getOwnPropertyNames(target)};var NumberIsNaN=Number.isNaN||function(value){return value!=value};function EventEmitter(){EventEmitter.init.call(this)}module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._eventsCount=0,EventEmitter.prototype._maxListeners=void 0;var defaultMaxListeners=10;function $getMaxListeners(that){return void 0===that._maxListeners?EventEmitter.defaultMaxListeners:that._maxListeners}function _addListener(target,type,listener,prepend){var m,events,existing,warning;if("function"!=typeof listener)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof listener);if(void 0===(events=target._events)?(events=target._events=Object.create(null),target._eventsCount=0):(void 0!==events.newListener&&(target.emit("newListener",type,listener.listener?listener.listener:listener),events=target._events),existing=events[type]),void 0===existing)existing=events[type]=listener,++target._eventsCount;else if("function"==typeof existing?existing=events[type]=prepend?[listener,existing]:[existing,listener]:prepend?existing.unshift(listener):existing.push(listener),(m=$getMaxListeners(target))>0&&existing.length>m&&!existing.warned){existing.warned=!0;var w=new Error("Possible EventEmitter memory leak detected. "+existing.length+" "+String(type)+" listeners added. Use emitter.setMaxListeners() to increase limit");w.name="MaxListenersExceededWarning",w.emitter=target,w.type=type,w.count=existing.length,warning=w,console&&console.warn&&console.warn(warning)}return target}function onceWrapper(){for(var args=[],i=0;i<arguments.length;i++)args.push(arguments[i]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,ReflectApply(this.listener,this.target,args))}function _onceWrap(target,type,listener){var state={fired:!1,wrapFn:void 0,target:target,type:type,listener:listener},wrapped=onceWrapper.bind(state);return wrapped.listener=listener,state.wrapFn=wrapped,wrapped}function _listeners(target,type,unwrap){var events=target._events;if(void 0===events)return[];var evlistener=events[type];return void 0===evlistener?[]:"function"==typeof evlistener?unwrap?[evlistener.listener||evlistener]:[evlistener]:unwrap?function(arr){for(var ret=new Array(arr.length),i=0;i<ret.length;++i)ret[i]=arr[i].listener||arr[i];return ret}(evlistener):arrayClone(evlistener,evlistener.length)}function listenerCount(type){var events=this._events;if(void 0!==events){var evlistener=events[type];if("function"==typeof evlistener)return 1;if(void 0!==evlistener)return evlistener.length}return 0}function arrayClone(arr,n){for(var copy=new Array(n),i=0;i<n;++i)copy[i]=arr[i];return copy}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return defaultMaxListeners},set:function(arg){if("number"!=typeof arg||arg<0||NumberIsNaN(arg))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+arg+".");defaultMaxListeners=arg}}),EventEmitter.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function(n){if("number"!=typeof n||n<0||NumberIsNaN(n))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+n+".");return this._maxListeners=n,this},EventEmitter.prototype.getMaxListeners=function(){return $getMaxListeners(this)},EventEmitter.prototype.emit=function(type){for(var args=[],i=1;i<arguments.length;i++)args.push(arguments[i]);var doError="error"===type,events=this._events;if(void 0!==events)doError=doError&&void 0===events.error;else if(!doError)return!1;if(doError){var er;if(args.length>0&&(er=args[0]),er instanceof Error)throw er;var err=new Error("Unhandled error."+(er?" ("+er.message+")":""));throw err.context=er,err}var handler=events[type];if(void 0===handler)return!1;if("function"==typeof handler)ReflectApply(handler,this,args);else{var len=handler.length,listeners=arrayClone(handler,len);for(i=0;i<len;++i)ReflectApply(listeners[i],this,args)}return!0},EventEmitter.prototype.addListener=function(type,listener){return _addListener(this,type,listener,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function(type,listener){return _addListener(this,type,listener,!0)},EventEmitter.prototype.once=function(type,listener){if("function"!=typeof listener)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof listener);return this.on(type,_onceWrap(this,type,listener)),this},EventEmitter.prototype.prependOnceListener=function(type,listener){if("function"!=typeof listener)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof listener);return this.prependListener(type,_onceWrap(this,type,listener)),this},EventEmitter.prototype.removeListener=function(type,listener){var list,events,position,i,originalListener;if("function"!=typeof listener)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof listener);if(void 0===(events=this._events))return this;if(void 0===(list=events[type]))return this;if(list===listener||list.listener===listener)0==--this._eventsCount?this._events=Object.create(null):(delete events[type],events.removeListener&&this.emit("removeListener",type,list.listener||listener));else if("function"!=typeof list){for(position=-1,i=list.length-1;i>=0;i--)if(list[i]===listener||list[i].listener===listener){originalListener=list[i].listener,position=i;break}if(position<0)return this;0===position?list.shift():function(list,index){for(;index+1<list.length;index++)list[index]=list[index+1];list.pop()}(list,position),1===list.length&&(events[type]=list[0]),void 0!==events.removeListener&&this.emit("removeListener",type,originalListener||listener)}return this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.removeAllListeners=function(type){var listeners,events,i;if(void 0===(events=this._events))return this;if(void 0===events.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==events[type]&&(0==--this._eventsCount?this._events=Object.create(null):delete events[type]),this;if(0===arguments.length){var key,keys=Object.keys(events);for(i=0;i<keys.length;++i)"removeListener"!==(key=keys[i])&&this.removeAllListeners(key);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(listeners=events[type]))this.removeListener(type,listeners);else if(void 0!==listeners)for(i=listeners.length-1;i>=0;i--)this.removeListener(type,listeners[i]);return this},EventEmitter.prototype.listeners=function(type){return _listeners(this,type,!0)},EventEmitter.prototype.rawListeners=function(type){return _listeners(this,type,!1)},EventEmitter.listenerCount=function(emitter,type){return"function"==typeof emitter.listenerCount?emitter.listenerCount(type):listenerCount.call(emitter,type)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function(){return this._eventsCount>0?ReflectOwnKeys(this._events):[]}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(24);__kbnBundles__.define("plugin/uiActions/public",__webpack_require__,25)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__.uiActions},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin})),__webpack_require__.d(__webpack_exports__,"UiActionsSetup",(function(){})),__webpack_require__.d(__webpack_exports__,"UiActionsStart",(function(){})),__webpack_require__.d(__webpack_exports__,"UiActionsServiceParams",(function(){})),__webpack_require__.d(__webpack_exports__,"UiActionsService",(function(){return ui_actions_service_UiActionsService})),__webpack_require__.d(__webpack_exports__,"Action",(function(){return public_actions.Action})),__webpack_require__.d(__webpack_exports__,"UiActionsActionDefinition",(function(){return public_actions.ActionDefinition})),__webpack_require__.d(__webpack_exports__,"createAction",(function(){return public_actions.createAction})),__webpack_require__.d(__webpack_exports__,"IncompatibleActionError",(function(){return public_actions.IncompatibleActionError})),__webpack_require__.d(__webpack_exports__,"buildContextMenuForActions",(function(){return buildContextMenuForActions})),__webpack_require__.d(__webpack_exports__,"UiActionsPresentable",(function(){return util.Presentable})),__webpack_require__.d(__webpack_exports__,"UiActionsPresentableGrouping",(function(){return util.PresentableGrouping})),__webpack_require__.d(__webpack_exports__,"Trigger",(function(){return triggers.Trigger})),__webpack_require__.d(__webpack_exports__,"VISUALIZE_FIELD_TRIGGER",(function(){return triggers.VISUALIZE_FIELD_TRIGGER})),__webpack_require__.d(__webpack_exports__,"visualizeFieldTrigger",(function(){return triggers.visualizeFieldTrigger})),__webpack_require__.d(__webpack_exports__,"VISUALIZE_GEO_FIELD_TRIGGER",(function(){return triggers.VISUALIZE_GEO_FIELD_TRIGGER})),__webpack_require__.d(__webpack_exports__,"visualizeGeoFieldTrigger",(function(){return triggers.visualizeGeoFieldTrigger})),__webpack_require__.d(__webpack_exports__,"ROW_CLICK_TRIGGER",(function(){return triggers.ROW_CLICK_TRIGGER})),__webpack_require__.d(__webpack_exports__,"rowClickTrigger",(function(){return triggers.rowClickTrigger})),__webpack_require__.d(__webpack_exports__,"RowClickContext",(function(){return triggers.RowClickContext})),__webpack_require__.d(__webpack_exports__,"VisualizeFieldContext",(function(){})),__webpack_require__.d(__webpack_exports__,"ACTION_VISUALIZE_FIELD",(function(){return ACTION_VISUALIZE_FIELD})),__webpack_require__.d(__webpack_exports__,"ACTION_VISUALIZE_GEO_FIELD",(function(){return ACTION_VISUALIZE_GEO_FIELD})),__webpack_require__.d(__webpack_exports__,"ACTION_VISUALIZE_LENS_FIELD",(function(){return ACTION_VISUALIZE_LENS_FIELD})),__webpack_require__.d(__webpack_exports__,"ActionExecutionContext",(function(){return public_actions.ActionExecutionContext})),__webpack_require__.d(__webpack_exports__,"ActionExecutionMeta",(function(){return public_actions.ActionExecutionMeta}));var public_actions=__webpack_require__(1),trigger_internal=__webpack_require__(4),external_kbnSharedDeps_Lodash_=__webpack_require__(7),external_kbnSharedDeps_Lodash_default=__webpack_require__.n(external_kbnSharedDeps_Lodash_),public_=__webpack_require__(21),external_kbnSharedDeps_React_=__webpack_require__(3),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_KbnI18n_=__webpack_require__(2),kibanaReact_public_=__webpack_require__(6);const defaultTitle=external_kbnSharedDeps_KbnI18n_.i18n.translate("uiActions.actionPanel.title",{defaultMessage:"Options"}),txtMore=external_kbnSharedDeps_KbnI18n_.i18n.translate("uiActions.actionPanel.more",{defaultMessage:"More"}),onClick=(action,context,close)=>event=>{event.currentTarget instanceof HTMLAnchorElement?event.defaultPrevented||0!==event.button||event.currentTarget.target&&"_self"!==event.currentTarget.target||event.metaKey||event.altKey||event.ctrlKey||event.shiftKey||(event.preventDefault(),action.execute(context)):action.execute(context),close()},removeItemMetaFields=items=>{const euiItems=[];for(const item of items){const{_order:omit,_title:omit2,...rest}=item;euiItems.push(rest)}return euiItems};async function buildContextMenuForActions({actions:actions,title:title=defaultTitle,closeMenu:closeMenu=(()=>{})}){const panels={mainMenu:{id:"mainMenu",title:title,items:[]}},promises=actions.map(async item=>{const{action:action}=item,context={...item.context,trigger:item.trigger};if(!await item.action.isCompatible(context))return;let parentPanel="",currentPanel="";if(action.grouping)for(let i=0;i<action.grouping.length;i++){const group=action.grouping[i];if(currentPanel=group.id,!panels[currentPanel]){const name=group.getDisplayName?group.getDisplayName(context):group.id;panels[currentPanel]={id:currentPanel,title:name,items:[],_level:i,_icon:group.getIconType?group.getIconType(context):"empty"},parentPanel&&panels[parentPanel].items.push({name:name,panel:currentPanel,icon:group.getIconType?group.getIconType(context):"empty",_order:group.order||0,_title:group.getDisplayName?group.getDisplayName(context):""})}parentPanel=currentPanel}panels[parentPanel||"mainMenu"].items.push({name:action.MenuItem?external_kbnSharedDeps_React_.createElement(Object(kibanaReact_public_.uiToReactComponent)(action.MenuItem),{context:context}):action.getDisplayName(context),icon:action.getIconType(context),"data-test-subj":"embeddablePanelAction-"+action.id,onClick:onClick(action,context,closeMenu),href:action.getHref?await action.getHref(context):void 0,_order:action.order||0,_title:action.getDisplayName(context)})});await Promise.all(promises);for(const panel of Object.values(panels)){const items=panel.items.filter(Boolean);panel.items=external_kbnSharedDeps_Lodash_default.a.sortBy(items,a=>{var _a$_order;return-1*(null!==(_a$_order=a._order)&&void 0!==_a$_order?_a$_order:0)},a=>a._title)}((panels,id)=>{const panel=panels[id];if(!panel)return;if(!panel.items)return;if(panel.items.length<=4)return;const visibleItems=panel.items.slice(0,3),itemsInSubmenu=panel.items.slice(3),morePanelId=panel.id+"__more",more={name:txtMore,panel:morePanelId,icon:"boxesHorizontal","data-test-subj":"embeddablePanelMore-"+id,_order:-1};panel.items=[...visibleItems,more];const subPanel={id:morePanelId,title:panel.title||defaultTitle,items:itemsInSubmenu};panels[morePanelId]=subPanel})(panels,"mainMenu");for(const panel of Object.values(panels))0===panel._level&&(panels.mainMenu.items.length>0&&panels.mainMenu.items.push({isSeparator:!0,key:panel.id+"__separator"}),panel.items.length>3?panels.mainMenu.items.push({name:panel.title||panel.id,icon:panel._icon||"empty",panel:panel.id}):panels.mainMenu.items.push(...panel.items));return(panels=>{const euiPanels=[];for(const panel of panels){const{_level:omit,_icon:omit2,...rest}=panel;euiPanels.push({...rest,items:removeItemMetaFields(rest.items)})}return euiPanels})(Object.values(panels))}var external_kbnSharedDeps_ElasticEui_=__webpack_require__(9),events=__webpack_require__(22),external_kbnSharedDeps_ReactDom_=__webpack_require__(10),external_kbnSharedDeps_ReactDom_default=__webpack_require__.n(external_kbnSharedDeps_ReactDom_);let activeSession=null;const{resolveLastPosition:resolveLastPosition}=function(){let lastMouseX=0,lastMouseY=0;const lastClicks=[];function onClick(event){lastClicks.push({el:event.target,mouseX:event.clientX,mouseY:event.clientY}),lastClicks.length>10&&lastClicks.shift()}function onMouseUpdate(event){lastMouseX=event.clientX,lastMouseY=event.clientY}return document.addEventListener("mouseup",onClick,!0),document.addEventListener("click",onClick,!0),document.addEventListener("mousemove",onMouseUpdate,{passive:!0}),document.addEventListener("mouseenter",onMouseUpdate,{passive:!0}),{resolveLastPosition:()=>{const lastClick=[...lastClicks].reverse().find(({el:el})=>el&&document.body.contains(el));if(!lastClick)return{x:lastMouseX,y:lastMouseY};const{top:top,left:left,bottom:bottom,right:right}=lastClick.el.getBoundingClientRect(),mouseX=lastClick.mouseX,mouseY=lastClick.mouseY;return top<=mouseY&&bottom>=mouseY&&left<=mouseX&&right>=mouseX?{x:mouseX,y:mouseY}:{x:left+(right-left)/2,y:bottom}}}}();class open_context_menu_ContextMenuSession extends events.EventEmitter{close(){if(activeSession===this){const container=document.getElementById("contextMenu-container");container&&(external_kbnSharedDeps_ReactDom_default.a.unmountComponentAtNode(container),this.emit("closed"))}}}function openContextMenu(panels,props={}){activeSession&&activeSession.close();const container=function(){let container=document.getElementById("contextMenu-container"),{x:x,y:y}=resolveLastPosition();return y+=window.scrollY,x+=window.scrollX,container?(container.style.left=x+"px",container.style.top=y+"px"):(container=document.createElement("div"),container.style.left=x+"px",container.style.top=y+"px",container.style.position="absolute",container.style.zIndex="9999",container.id="contextMenu-container",document.body.appendChild(container)),container}(),session=activeSession=new open_context_menu_ContextMenuSession;return external_kbnSharedDeps_ReactDom_default.a.render(external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPopover,{className:"embPanel__optionsMenuPopover",button:container,isOpen:!0,closePopover:()=>{props.onClose&&props.onClose(),session.close()},panelPaddingSize:"none",anchorPosition:"downRight"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiContextMenu,{initialPanelId:"mainMenu",panels:panels,"data-test-subj":props["data-test-subj"]})),container),session}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class ui_actions_execution_service_UiActionsExecutionService{constructor(){_defineProperty(this,"batchingQueue",[]),_defineProperty(this,"pendingTasks",new Set)}async execute({action:action,context:context,trigger:trigger},alwaysShowPopup){var _await$action$shouldA,_action$shouldAutoExe;const shouldBatch=null!==(_await$action$shouldA=!await(null===(_action$shouldAutoExe=action.shouldAutoExecute)||void 0===_action$shouldAutoExe?void 0:_action$shouldAutoExe.call(action,{...context,trigger:trigger})))&&void 0!==_await$action$shouldA&&_await$action$shouldA,task={action:action,context:context,trigger:trigger,defer:Object(public_.defer)(),alwaysShowPopup:!!alwaysShowPopup};if(shouldBatch)this.batchingQueue.push(task);else{this.pendingTasks.add(task);try{await action.execute({...context,trigger:trigger}),this.pendingTasks.delete(task)}catch(e){throw this.pendingTasks.delete(task),new Error(e)}}return this.scheduleFlush(),task.defer.promise}scheduleFlush(){setTimeout(()=>{if(0===this.pendingTasks.size){const tasks=Object(external_kbnSharedDeps_Lodash_.uniqBy)(this.batchingQueue,t=>t.action.id);if(tasks.length>0){let alwaysShowPopup=!1;for(const task of tasks)if(task.alwaysShowPopup){alwaysShowPopup=!0;break}alwaysShowPopup?this.showActionPopupMenu(tasks):1===tasks.length?this.executeSingleTask(tasks[0]):tasks.length>1&&this.showActionPopupMenu(tasks)}this.batchingQueue.splice(0,this.batchingQueue.length)}},0)}async executeSingleTask({context:context,action:action,defer:defer,trigger:trigger}){try{await action.execute({...context,trigger:trigger}),defer.resolve()}catch(e){defer.reject(e)}}async showActionPopupMenu(tasks){const session=openContextMenu(await buildContextMenuForActions({actions:tasks.map(({action:action,context:context,trigger:trigger})=>({action:action,context:context,trigger:trigger})),title:"",closeMenu:()=>{tasks.forEach(t=>t.defer.resolve()),session.close()}}),{"data-test-subj":"multipleActionsContextMenu"})}}function ui_actions_service_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class ui_actions_service_UiActionsService{constructor({triggers:_triggers=new Map,actions:_actions=new Map,triggerToActions:_triggerToActions=new Map}={}){ui_actions_service_defineProperty(this,"executionService",new ui_actions_execution_service_UiActionsExecutionService),ui_actions_service_defineProperty(this,"triggers",void 0),ui_actions_service_defineProperty(this,"actions",void 0),ui_actions_service_defineProperty(this,"triggerToActions",void 0),ui_actions_service_defineProperty(this,"registerTrigger",trigger=>{if(this.triggers.has(trigger.id))throw new Error(`Trigger [trigger.id = ${trigger.id}] already registered.`);const triggerInternal=new trigger_internal.a(this,trigger);this.triggers.set(trigger.id,triggerInternal),this.triggerToActions.set(trigger.id,[])}),ui_actions_service_defineProperty(this,"getTrigger",triggerId=>{const trigger=this.triggers.get(triggerId);if(!trigger)throw new Error(`Trigger [triggerId = ${triggerId}] does not exist.`);return trigger.contract}),ui_actions_service_defineProperty(this,"registerAction",definition=>{if(this.actions.has(definition.id))throw new Error(`Action [action.id = ${definition.id}] already registered.`);const action=new public_actions.ActionInternal(definition);return this.actions.set(action.id,action),action}),ui_actions_service_defineProperty(this,"unregisterAction",actionId=>{if(!this.actions.has(actionId))throw new Error(`Action [action.id = ${actionId}] is not registered.`);this.actions.delete(actionId)}),ui_actions_service_defineProperty(this,"hasAction",actionId=>this.actions.has(actionId)),ui_actions_service_defineProperty(this,"attachAction",(triggerId,actionId)=>{if(!this.triggers.get(triggerId))throw new Error(`No trigger [triggerId = ${triggerId}] exists, for attaching action [actionId = ${actionId}].`);const actionIds=this.triggerToActions.get(triggerId);actionIds.find(id=>id===actionId)||this.triggerToActions.set(triggerId,[...actionIds,actionId])}),ui_actions_service_defineProperty(this,"detachAction",(triggerId,actionId)=>{if(!this.triggers.get(triggerId))throw new Error(`No trigger [triggerId = ${triggerId}] exists, for detaching action [actionId = ${actionId}].`);const actionIds=this.triggerToActions.get(triggerId);this.triggerToActions.set(triggerId,actionIds.filter(id=>id!==actionId))}),ui_actions_service_defineProperty(this,"addTriggerAction",(triggerId,action)=>{this.actions.has(action.id)||this.registerAction(action),this.attachAction(triggerId,action.id)}),ui_actions_service_defineProperty(this,"getAction",id=>{if(!this.actions.has(id))throw new Error(`Action [action.id = ${id}] not registered.`);return this.actions.get(id)}),ui_actions_service_defineProperty(this,"getTriggerActions",triggerId=>{this.getTrigger(triggerId);return this.triggerToActions.get(triggerId).map(actionId=>this.actions.get(actionId)).filter(Boolean)}),ui_actions_service_defineProperty(this,"getTriggerCompatibleActions",async(triggerId,context)=>{const actions=this.getTriggerActions(triggerId),isCompatibles=await Promise.all(actions.map(action=>action.isCompatible({...context,trigger:this.getTrigger(triggerId)})));return actions.reduce((acc,action,i)=>isCompatibles[i]?[...acc,action]:acc,[])}),ui_actions_service_defineProperty(this,"executeTriggerActions",async(triggerId,context)=>{const trigger=this.getTrigger(triggerId);await trigger.exec(context)}),ui_actions_service_defineProperty(this,"clear",()=>{this.actions.clear(),this.triggers.clear(),this.triggerToActions.clear()}),ui_actions_service_defineProperty(this,"fork",()=>{const triggers=new Map,actions=new Map,triggerToActions=new Map;for(const[key,value]of this.triggers.entries())triggers.set(key,value);for(const[key,value]of this.actions.entries())actions.set(key,value);for(const[key,value]of this.triggerToActions.entries())triggerToActions.set(key,[...value]);return new ui_actions_service_UiActionsService({triggers:triggers,actions:actions,triggerToActions:triggerToActions})}),this.triggers=_triggers,this.actions=_actions,this.triggerToActions=_triggerToActions}}var triggers=__webpack_require__(0);class plugin_UiActionsPlugin{constructor(initializerContext){var obj,key,value;obj=this,key="service",value=new ui_actions_service_UiActionsService,key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value}setup(core){return this.service.registerTrigger(triggers.rowClickTrigger),this.service.registerTrigger(triggers.visualizeFieldTrigger),this.service.registerTrigger(triggers.visualizeGeoFieldTrigger),this.service}start(core){return this.service}stop(){this.service.clear()}}var util=__webpack_require__(8);const ACTION_VISUALIZE_FIELD="ACTION_VISUALIZE_FIELD",ACTION_VISUALIZE_GEO_FIELD="ACTION_VISUALIZE_GEO_FIELD",ACTION_VISUALIZE_LENS_FIELD="ACTION_VISUALIZE_LENS_FIELD";function public_plugin(initializerContext){return new plugin_UiActionsPlugin(initializerContext)}}]);