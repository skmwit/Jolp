(window.discover_bundle_jsonpfunction=window.discover_bundle_jsonpfunction||[]).push([[5],{228:function(module,exports,__webpack_require__){switch(window.__kbnThemeTag__){case"v7dark":return __webpack_require__(229);case"v7light":return __webpack_require__(231);case"v8dark":return __webpack_require__(233);case"v8light":return __webpack_require__(235)}},229:function(module,exports,__webpack_require__){var api=__webpack_require__(10),content=__webpack_require__(230);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},230:function(module,exports,__webpack_require__){(exports=__webpack_require__(11)(!1)).push([module.i,".embPanel .kbnDocTable__container{scrollbar-width:thin;flex:1 1 0;overflow:auto}.embPanel .kbnDocTable__container::-webkit-scrollbar{width:16px;height:16px}.embPanel .kbnDocTable__container::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .kbnDocTable__container::-webkit-scrollbar-corner,.embPanel .kbnDocTable__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}\n",""]),module.exports=exports},231:function(module,exports,__webpack_require__){var api=__webpack_require__(10),content=__webpack_require__(232);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},232:function(module,exports,__webpack_require__){(exports=__webpack_require__(11)(!1)).push([module.i,".embPanel .kbnDocTable__container{scrollbar-width:thin;flex:1 1 0;overflow:auto}.embPanel .kbnDocTable__container::-webkit-scrollbar{width:16px;height:16px}.embPanel .kbnDocTable__container::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .kbnDocTable__container::-webkit-scrollbar-corner,.embPanel .kbnDocTable__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}\n",""]),module.exports=exports},233:function(module,exports,__webpack_require__){var api=__webpack_require__(10),content=__webpack_require__(234);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},234:function(module,exports,__webpack_require__){(exports=__webpack_require__(11)(!1)).push([module.i,".embPanel .kbnDocTable__container{scrollbar-width:thin;flex:1 1 0;overflow:auto}.embPanel .kbnDocTable__container::-webkit-scrollbar{width:16px;height:16px}.embPanel .kbnDocTable__container::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .kbnDocTable__container::-webkit-scrollbar-corner,.embPanel .kbnDocTable__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}\n",""]),module.exports=exports},235:function(module,exports,__webpack_require__){var api=__webpack_require__(10),content=__webpack_require__(236);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},236:function(module,exports,__webpack_require__){(exports=__webpack_require__(11)(!1)).push([module.i,".embPanel .kbnDocTable__container{scrollbar-width:thin;flex:1 1 0;overflow:auto}.embPanel .kbnDocTable__container::-webkit-scrollbar{width:16px;height:16px}.embPanel .kbnDocTable__container::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .kbnDocTable__container::-webkit-scrollbar-corner,.embPanel .kbnDocTable__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}\n",""]),module.exports=exports},65:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SearchEmbeddable",(function(){return search_embeddable_SearchEmbeddable}));__webpack_require__(228);var external_kbnSharedDeps_Angular_=__webpack_require__(9),external_kbnSharedDeps_Angular_default=__webpack_require__.n(external_kbnSharedDeps_Angular_),external_kbnSharedDeps_Lodash_=__webpack_require__(20),external_kbnSharedDeps_Lodash_default=__webpack_require__.n(external_kbnSharedDeps_Lodash_),external_kbnSharedDeps_KbnI18n_=__webpack_require__(1),public_=__webpack_require__(56),data_public_=__webpack_require__(4),embeddable_public_=__webpack_require__(17),actions_columns=__webpack_require__(95),doc_table=__webpack_require__(68),kibana_services=__webpack_require__(3),constants=__webpack_require__(14),common=__webpack_require__(66),get_default_sort=__webpack_require__(92),helpers=__webpack_require__(71);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}class search_embeddable_SearchEmbeddable extends embeddable_public_.Embeddable{constructor({$rootScope:$rootScope,$compile:$compile,savedSearch:savedSearch,editUrl:editUrl,editPath:editPath,indexPatterns:indexPatterns,editable:editable,filterManager:filterManager,services:services},initialInput,executeTriggerActions,parent){super(initialInput,{defaultTitle:savedSearch.title,editUrl:editUrl,editPath:editPath,editApp:"discover",indexPatterns:indexPatterns,editable:editable},parent),this.executeTriggerActions=executeTriggerActions,_defineProperty(this,"savedSearch",void 0),_defineProperty(this,"$rootScope",void 0),_defineProperty(this,"$compile",void 0),_defineProperty(this,"inspectorAdapters",void 0),_defineProperty(this,"searchScope",void 0),_defineProperty(this,"panelTitle",""),_defineProperty(this,"filtersSearchSource",void 0),_defineProperty(this,"searchInstance",void 0),_defineProperty(this,"subscription",void 0),_defineProperty(this,"type",constants.a),_defineProperty(this,"filterManager",void 0),_defineProperty(this,"abortController",void 0),_defineProperty(this,"services",void 0),_defineProperty(this,"prevTimeRange",void 0),_defineProperty(this,"prevFilters",void 0),_defineProperty(this,"prevQuery",void 0),_defineProperty(this,"prevSearchSessionId",void 0),_defineProperty(this,"fetch",async()=>{const searchSessionId=this.input.searchSessionId,useNewFieldsApi=!this.services.uiSettings.get(common.k,!1);if(!this.searchScope)return;const{searchSource:searchSource}=this.savedSearch;if(this.abortController&&this.abortController.abort(),this.abortController=new AbortController,searchSource.setField("size",this.services.uiSettings.get(common.j)),searchSource.setField("sort",Object(doc_table.c)(this.searchScope.sort,this.searchScope.indexPattern,this.services.uiSettings.get(common.m))),useNewFieldsApi){searchSource.removeField("fieldsFromSource");const fields={field:"*",include_unmapped:"true"};searchSource.setField("fields",[fields])}else if(searchSource.removeField("fields"),this.searchScope.indexPattern){const fieldNames=this.searchScope.indexPattern.fields.map(field=>field.name);searchSource.setField("fieldsFromSource",fieldNames)}this.inspectorAdapters.requests.reset(),this.searchScope.$apply(()=>{this.searchScope.isLoading=!0}),this.updateOutput({loading:!0,error:void 0});try{const resp=await searchSource.fetch$({abortSignal:this.abortController.signal,sessionId:searchSessionId,inspector:{adapter:this.inspectorAdapters.requests,title:external_kbnSharedDeps_KbnI18n_.i18n.translate("discover.embeddable.inspectorRequestDataTitle",{defaultMessage:"Data"}),description:external_kbnSharedDeps_KbnI18n_.i18n.translate("discover.embeddable.inspectorRequestDescription",{defaultMessage:"This request queries Elasticsearch to fetch the data for the search."})}}).toPromise();this.updateOutput({loading:!1,error:void 0}),this.searchScope.$apply(()=>{this.searchScope.hits=resp.hits.hits,this.searchScope.totalHitCount=resp.hits.total,this.searchScope.isLoading=!1})}catch(error){this.updateOutput({loading:!1,error:error}),this.searchScope.$apply(()=>{this.searchScope.isLoading=!1})}}),this.services=services,this.filterManager=filterManager,this.savedSearch=savedSearch,this.$rootScope=$rootScope,this.$compile=$compile,this.inspectorAdapters={requests:new public_.RequestAdapter},this.initializeSearchScope(),this.subscription=this.getUpdated$().subscribe(()=>{this.panelTitle=this.output.title||"",this.searchScope&&this.pushContainerStateParamsToScope(this.searchScope)})}getInspectorAdapters(){return this.inspectorAdapters}getSavedSearch(){return this.savedSearch}render(domNode){if(!this.searchScope)throw new Error("Search scope not defined");this.searchInstance=this.$compile(this.services.uiSettings.get("doc_table:legacy")?'<doc-table\n  class="panel-content"\n  columns="columns"\n  data-description="{{description}}"\n  data-shared-item\n  data-test-subj="embeddedSavedSearchDocTable"\n  data-title="{{sharedItemTitle}}"\n  filter="filter"\n  hits="hits"\n  index-pattern="indexPattern"\n  is-loading="isLoading"\n  on-add-column="addColumn"\n  on-change-sort-order="setSortOrder"\n  on-move-column="moveColumn"\n  on-remove-column="removeColumn"\n  render-complete\n  sorting="sort"\n  total-hit-count="totalHitCount"\n  use-new-fields-api="useNewFieldsApi"\n>\n</doc-table>\n':'<discover-grid\n  class="dscDiscoverGrid"\n  columns="columns"\n  search-description="description"\n  search-title="sharedItemTitle"\n  data-test-subj="embeddedSavedSearchDocTable"\n  index-pattern="indexPattern"\n  is-loading="isLoading"\n  on-add-column="addColumn"\n  on-filter="filter"\n  on-remove-column="removeColumn"\n  on-set-columns="setColumns"\n  on-sort="setSortOrder"\n  rows="hits"\n  sample-size="500"\n  settings="settings"\n  show-time-col="showTimeCol"\n  sort="sort"\n></discover-grid>\n')(this.searchScope);external_kbnSharedDeps_Angular_default.a.element(domNode).append(this.searchInstance),this.pushContainerStateParamsToScope(this.searchScope)}destroy(){super.destroy(),this.savedSearch.destroy(),this.searchInstance&&this.searchInstance.remove(),this.searchScope&&(this.searchScope.$destroy(),delete this.searchScope),this.subscription&&this.subscription.unsubscribe(),this.abortController&&this.abortController.abort()}initializeSearchScope(){const searchScope=this.searchScope=this.$rootScope.$new();searchScope.description=this.savedSearch.description,searchScope.inspectorAdapters=this.inspectorAdapters;const{searchSource:searchSource}=this.savedSearch,indexPattern=searchScope.indexPattern=searchSource.getField("index");this.savedSearch.sort&&this.savedSearch.sort.length||(this.savedSearch.sort=Object(get_default_sort.a)(indexPattern,Object(kibana_services.f)().uiSettings.get(common.m,"desc")));const timeRangeSearchSource=searchSource.create();timeRangeSearchSource.setField("filter",()=>{if(this.searchScope&&this.input.timeRange)return this.services.timefilter.createFilter(indexPattern,this.input.timeRange)}),this.filtersSearchSource=searchSource.create(),this.filtersSearchSource.setParent(timeRangeSearchSource),searchSource.setParent(this.filtersSearchSource),this.pushContainerStateParamsToScope(searchScope),searchScope.setSortOrder=sort=>{this.updateInput({sort:sort})},searchScope.isLoading=!0;const useNewFieldsApi=!Object(kibana_services.f)().uiSettings.get(common.k,!1);searchScope.useNewFieldsApi=useNewFieldsApi,searchScope.addColumn=columnName=>{if(!searchScope.columns)return;const columns=actions_columns.a(searchScope.columns,columnName,useNewFieldsApi);this.updateInput({columns:columns})},searchScope.removeColumn=columnName=>{if(!searchScope.columns)return;const columns=actions_columns.d(searchScope.columns,columnName,useNewFieldsApi);this.updateInput({columns:columns})},searchScope.moveColumn=(columnName,newIndex)=>{if(!searchScope.columns)return;const columns=actions_columns.c(searchScope.columns,columnName,newIndex);this.updateInput({columns:columns})},searchScope.setColumns=columns=>{this.updateInput({columns:columns})},this.savedSearch.grid&&(searchScope.settings=this.savedSearch.grid),searchScope.showTimeCol=!this.services.uiSettings.get("doc_table:hideTimeColumn",!1),searchScope.filter=async(field,value,operator)=>{let filters=data_public_.esFilters.generateFilters(this.filterManager,field,value,operator,indexPattern.id);filters=filters.map(filter=>({...filter,$state:{store:data_public_.esFilters.FilterStateStore.APP_STATE}})),await this.executeTriggerActions(data_public_.APPLY_FILTER_TRIGGER,{embeddable:this,filters:filters})}}reload(){this.searchScope&&this.pushContainerStateParamsToScope(this.searchScope,{forceFetch:!0})}pushContainerStateParamsToScope(searchScope,{forceFetch:forceFetch=!1}={forceFetch:!1}){var _this$searchScope;const isFetchRequired=!(data_public_.esFilters.onlyDisabledFiltersChanged(this.input.filters,this.prevFilters)&&external_kbnSharedDeps_Lodash_default.a.isEqual(this.prevQuery,this.input.query)&&external_kbnSharedDeps_Lodash_default.a.isEqual(this.prevTimeRange,this.input.timeRange)&&external_kbnSharedDeps_Lodash_default.a.isEqual(searchScope.sort,this.input.sort||this.savedSearch.sort)&&this.prevSearchSessionId===this.input.searchSessionId);searchScope.columns=Object(helpers.d)({columns:this.input.columns||this.savedSearch.columns},this.services.core.uiSettings).columns;const savedSearchSort=this.savedSearch.sort&&this.savedSearch.sort.length?this.savedSearch.sort:Object(get_default_sort.a)(null===(_this$searchScope=this.searchScope)||void 0===_this$searchScope?void 0:_this$searchScope.indexPattern,Object(kibana_services.f)().uiSettings.get(common.m,"desc"));var _this$input$query,_this$input$filters;(searchScope.sort=this.input.sort||savedSearchSort,searchScope.sharedItemTitle=this.panelTitle,forceFetch||isFetchRequired)?(this.filtersSearchSource.setField("filter",this.input.filters),this.filtersSearchSource.setField("query",this.input.query),null!==(_this$input$query=this.input.query)&&void 0!==_this$input$query&&_this$input$query.query||null!==(_this$input$filters=this.input.filters)&&void 0!==_this$input$filters&&_this$input$filters.length?this.filtersSearchSource.setField("highlightAll",!0):this.filtersSearchSource.removeField("highlightAll"),this.prevFilters=this.input.filters,this.prevQuery=this.input.query,this.prevTimeRange=this.input.timeRange,this.prevSearchSessionId=this.input.searchSessionId,this.fetch()):this.searchScope&&this.searchScope.$applyAsync()}}},95:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return addColumn})),__webpack_require__.d(__webpack_exports__,"d",(function(){return removeColumn})),__webpack_require__.d(__webpack_exports__,"c",(function(){return moveColumn})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getStateColumnActions}));var _helpers_popularize_field__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(72),_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66);function buildColumns(columns,useNewFieldsApi=!1){return columns.length>1&&-1!==columns.indexOf("_source")?columns.filter(col=>"_source"!==col):0!==columns.length?columns:useNewFieldsApi?[]:["_source"]}function addColumn(columns,columnName,useNewFieldsApi){return columns.includes(columnName)?columns:buildColumns([...columns,columnName],useNewFieldsApi)}function removeColumn(columns,columnName,useNewFieldsApi){return columns.includes(columnName)?buildColumns(columns.filter(col=>col!==columnName),useNewFieldsApi):columns}function moveColumn(columns,columnName,newIndex){if(newIndex<0||newIndex>=columns.length||!columns.includes(columnName))return columns;const modifiedColumns=[...columns];return modifiedColumns.splice(modifiedColumns.indexOf(columnName),1),modifiedColumns.splice(newIndex,0,columnName),modifiedColumns}function getStateColumnActions({capabilities:capabilities,config:config,indexPattern:indexPattern,indexPatterns:indexPatterns,useNewFieldsApi:useNewFieldsApi,setAppState:setAppState,state:state}){return{onAddColumn:function(columnName){var _state$sort;capabilities.discover.save&&Object(_helpers_popularize_field__WEBPACK_IMPORTED_MODULE_0__.a)(indexPattern,columnName,indexPatterns);const columns=addColumn(state.columns||[],columnName,useNewFieldsApi),defaultOrder=config.get(_common__WEBPACK_IMPORTED_MODULE_1__.m),sort="_score"!==columnName||null!==(_state$sort=state.sort)&&void 0!==_state$sort&&_state$sort.length?state.sort:[["_score",defaultOrder]];setAppState({columns:columns,sort:sort})},onRemoveColumn:function(columnName){capabilities.discover.save&&Object(_helpers_popularize_field__WEBPACK_IMPORTED_MODULE_0__.a)(indexPattern,columnName,indexPatterns);const columns=removeColumn(state.columns||[],columnName,useNewFieldsApi),sort=state.sort&&state.sort.length?state.sort.filter(subArr=>subArr[0]!==columnName):[];setAppState({columns:columns,sort:sort})},onMoveColumn:function(columnName,newIndex){const columns=moveColumn(state.columns||[],columnName,newIndex);setAppState({columns:columns})},onSetColumns:function(columns){const actualColumns=indexPattern.timeFieldName&&indexPattern.timeFieldName===columns[0]?columns.slice(1):columns;setAppState({columns:actualColumns})}}}}}]);