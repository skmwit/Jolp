(window.tileMap_bundle_jsonpfunction=window.tileMap_bundle_jsonpfunction||[]).push([[3],{17:function(module,__webpack_exports__,__webpack_require__){"use strict";let MapTypes;__webpack_require__.d(__webpack_exports__,"a",(function(){return MapTypes})),function(MapTypes){MapTypes.ScaledCircleMarkers="Scaled Circle Markers",MapTypes.ShadedCircleMarkers="Shaded Circle Markers",MapTypes.ShadedGeohashGrid="Shaded Geohash Grid",MapTypes.Heatmap="Heatmap"}(MapTypes||(MapTypes={}))},34:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return TileMapOptions}));var external_kbnSharedDeps_React_=__webpack_require__(2),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),external_kbnSharedDeps_ElasticEui_=__webpack_require__(13),external_kbnSharedDeps_KbnI18n_=__webpack_require__(1),public_=__webpack_require__(15),charts_public_=__webpack_require__(14),mapsLegacy_public_=__webpack_require__(8),map_types=__webpack_require__(17),services=__webpack_require__(0);const collections={mapTypes:[{value:map_types.a.ScaledCircleMarkers,text:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.mapTypes.scaledCircleMarkersText",{defaultMessage:"Scaled circle markers"})},{value:map_types.a.ShadedCircleMarkers,text:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.mapTypes.shadedCircleMarkersText",{defaultMessage:"Shaded circle markers"})},{value:map_types.a.ShadedGeohashGrid,text:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.mapTypes.shadedGeohashGridText",{defaultMessage:"Shaded geohash grid"})},{value:map_types.a.Heatmap,text:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.mapTypes.heatmapText",{defaultMessage:"Heatmap"})}],legendPositions:[{value:"bottomleft",text:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.legendPositions.bottomLeftText",{defaultMessage:"Bottom left"})},{value:"bottomright",text:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.legendPositions.bottomRightText",{defaultMessage:"Bottom right"})},{value:"topleft",text:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.legendPositions.topLeftText",{defaultMessage:"Top left"})},{value:"topright",text:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.legendPositions.topRightText",{defaultMessage:"Top right"})}]};function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const tmsLayers=Object(services.f)();function TileMapOptions(props){var _vis$type$visConfig;const{stateParams:stateParams,setValue:setValue,vis:vis}=props;return Object(external_kbnSharedDeps_React_.useEffect)(()=>{stateParams.mapType||setValue("mapType",collections.mapTypes[0].value)},[setValue,stateParams.mapType]),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiPanel,{paddingSize:"s"},external_kbnSharedDeps_React_default.a.createElement(public_.SelectOption,{label:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.visParams.mapTypeLabel",{defaultMessage:"Map type"}),options:collections.mapTypes,paramName:"mapType",value:stateParams.mapType,setValue:setValue}),stateParams.mapType===map_types.a.Heatmap?external_kbnSharedDeps_React_default.a.createElement(public_.RangeOption,{label:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.visParams.clusterSizeLabel",{defaultMessage:"Cluster size"}),max:3,min:1,paramName:"heatClusterSize",step:.1,value:stateParams.heatClusterSize,setValue:setValue}):external_kbnSharedDeps_React_default.a.createElement(public_.SelectOption,{label:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.visParams.colorSchemaLabel",{defaultMessage:"Color schema"}),options:charts_public_.truncatedColorSchemas,paramName:"colorSchema",value:stateParams.colorSchema,setValue:setValue}),external_kbnSharedDeps_React_default.a.createElement(public_.BasicOptions,_extends({},props,{legendPositions:collections.legendPositions})),external_kbnSharedDeps_React_default.a.createElement(public_.SwitchOption,{disabled:!(null!==(_vis$type$visConfig=vis.type.visConfig)&&void 0!==_vis$type$visConfig&&_vis$type$visConfig.canDesaturate),label:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.visParams.desaturateTilesLabel",{defaultMessage:"Desaturate tiles"}),tooltip:external_kbnSharedDeps_KbnI18n_.i18n.translate("tileMap.visParams.reduceVibrancyOfTileColorsTip",{defaultMessage:"Reduce the vibrancy of tile colors. This does not work in any version of Internet Explorer."}),paramName:"isDesaturated",value:stateParams.isDesaturated,setValue:setValue})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),external_kbnSharedDeps_React_default.a.createElement(mapsLegacy_public_.WmsOptions,{setValue:setValue,stateParams:stateParams,tmsLayers:tmsLayers}))}}}]);