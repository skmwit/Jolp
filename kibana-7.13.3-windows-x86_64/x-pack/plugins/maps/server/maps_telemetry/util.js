"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTelemetryLayerType = getTelemetryLayerType;
exports.getCountsByMap = getCountsByMap;
exports.getCountsByCluster = getCountsByCluster;
exports.getScalingOptionsPerCluster = getScalingOptionsPerCluster;
exports.getTelemetryLayerTypesPerCluster = getTelemetryLayerTypesPerCluster;
exports.getTermJoinsPerCluster = getTermJoinsPerCluster;
exports.getBaseMapsPerCluster = getBaseMapsPerCluster;
exports.TELEMETRY_SCALING_OPTIONS = exports.TELEMETRY_EMS_BASEMAP_TYPES = exports.TELEMETRY_LAYER_TYPE = void 0;

var _common = require("../../common");

var _common2 = require("../../../../../src/plugins/maps_ems/common/");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// lowercase is on purpose, so it matches lowercase es-field-names of the maps-telemetry schema


let TELEMETRY_LAYER_TYPE;
exports.TELEMETRY_LAYER_TYPE = TELEMETRY_LAYER_TYPE;

(function (TELEMETRY_LAYER_TYPE) {
  TELEMETRY_LAYER_TYPE["ES_DOCS"] = "es_docs";
  TELEMETRY_LAYER_TYPE["ES_TOP_HITS"] = "es_top_hits";
  TELEMETRY_LAYER_TYPE["ES_TRACKS"] = "es_tracks";
  TELEMETRY_LAYER_TYPE["ES_POINT_TO_POINT"] = "es_point_to_point";
  TELEMETRY_LAYER_TYPE["ES_AGG_CLUSTERS"] = "es_agg_clusters";
  TELEMETRY_LAYER_TYPE["ES_AGG_GRIDS"] = "es_agg_grids";
  TELEMETRY_LAYER_TYPE["ES_AGG_HEATMAP"] = "es_agg_heatmap";
  TELEMETRY_LAYER_TYPE["EMS_REGION"] = "ems_region";
  TELEMETRY_LAYER_TYPE["EMS_BASEMAP"] = "ems_basemap";
  TELEMETRY_LAYER_TYPE["KBN_REGION"] = "kbn_region";
  TELEMETRY_LAYER_TYPE["KBN_TMS_RASTER"] = "kbn_tms_raster";
  TELEMETRY_LAYER_TYPE["UX_TMS_RASTER"] = "ux_tms_raster";
  TELEMETRY_LAYER_TYPE["UX_TMS_MVT"] = "ux_tms_mvt";
  TELEMETRY_LAYER_TYPE["UX_WMS"] = "ux_wms";
})(TELEMETRY_LAYER_TYPE || (exports.TELEMETRY_LAYER_TYPE = TELEMETRY_LAYER_TYPE = {}));

let TELEMETRY_EMS_BASEMAP_TYPES;
exports.TELEMETRY_EMS_BASEMAP_TYPES = TELEMETRY_EMS_BASEMAP_TYPES;

(function (TELEMETRY_EMS_BASEMAP_TYPES) {
  TELEMETRY_EMS_BASEMAP_TYPES["ROADMAP_DESATURATED"] = "roadmap_desaturated";
  TELEMETRY_EMS_BASEMAP_TYPES["ROADMAP"] = "roadmap";
  TELEMETRY_EMS_BASEMAP_TYPES["AUTO"] = "auto";
  TELEMETRY_EMS_BASEMAP_TYPES["DARK"] = "dark";
})(TELEMETRY_EMS_BASEMAP_TYPES || (exports.TELEMETRY_EMS_BASEMAP_TYPES = TELEMETRY_EMS_BASEMAP_TYPES = {}));

let TELEMETRY_SCALING_OPTIONS;
exports.TELEMETRY_SCALING_OPTIONS = TELEMETRY_SCALING_OPTIONS;

(function (TELEMETRY_SCALING_OPTIONS) {
  TELEMETRY_SCALING_OPTIONS["LIMIT"] = "limit";
  TELEMETRY_SCALING_OPTIONS["MVT"] = "mvt";
  TELEMETRY_SCALING_OPTIONS["CLUSTERS"] = "clusters";
})(TELEMETRY_SCALING_OPTIONS || (exports.TELEMETRY_SCALING_OPTIONS = TELEMETRY_SCALING_OPTIONS = {}));

const TELEMETRY_TERM_JOIN = 'term'; // These capture a particular "combo" of source and layer-settings.
// They are mutually exclusive (ie. a layerDescriptor can only be a single telemetry_layer_type)
// They are more useful from a telemetry-perspective than:
// - an actual SourceType (which does not say enough about how it looks on a map)
// - an actual LayerType (which is too coarse and does not say much about what kind of data)

function getTelemetryLayerType(layerDescriptor) {
  if (!layerDescriptor.sourceDescriptor) {
    return null;
  }

  if (layerDescriptor.type === _common.LAYER_TYPE.HEATMAP) {
    return TELEMETRY_LAYER_TYPE.ES_AGG_HEATMAP;
  }

  if (layerDescriptor.sourceDescriptor.type === _common.SOURCE_TYPES.EMS_FILE) {
    return TELEMETRY_LAYER_TYPE.EMS_REGION;
  }

  if (layerDescriptor.sourceDescriptor.type === _common.SOURCE_TYPES.EMS_TMS) {
    return TELEMETRY_LAYER_TYPE.EMS_BASEMAP;
  }

  if (layerDescriptor.sourceDescriptor.type === _common.SOURCE_TYPES.KIBANA_TILEMAP) {
    return TELEMETRY_LAYER_TYPE.KBN_TMS_RASTER;
  }

  if (layerDescriptor.sourceDescriptor.type === _common.SOURCE_TYPES.REGIONMAP_FILE) {
    return TELEMETRY_LAYER_TYPE.KBN_REGION;
  }

  if (layerDescriptor.sourceDescriptor.type === _common.SOURCE_TYPES.EMS_XYZ) {
    return TELEMETRY_LAYER_TYPE.UX_TMS_RASTER;
  }

  if (layerDescriptor.sourceDescriptor.type === _common.SOURCE_TYPES.WMS) {
    return TELEMETRY_LAYER_TYPE.UX_WMS;
  }

  if (layerDescriptor.sourceDescriptor.type === _common.SOURCE_TYPES.MVT_SINGLE_LAYER) {
    return TELEMETRY_LAYER_TYPE.UX_TMS_MVT;
  }

  if (layerDescriptor.sourceDescriptor.type === _common.SOURCE_TYPES.ES_GEO_LINE) {
    return TELEMETRY_LAYER_TYPE.ES_TRACKS;
  }

  if (layerDescriptor.sourceDescriptor.type === _common.SOURCE_TYPES.ES_PEW_PEW) {
    return TELEMETRY_LAYER_TYPE.ES_POINT_TO_POINT;
  }

  if (layerDescriptor.sourceDescriptor.type === _common.SOURCE_TYPES.ES_SEARCH) {
    const sourceDescriptor = layerDescriptor.sourceDescriptor;

    if (sourceDescriptor.scalingType === _common.SCALING_TYPES.TOP_HITS) {
      return TELEMETRY_LAYER_TYPE.ES_TOP_HITS;
    } else {
      return TELEMETRY_LAYER_TYPE.ES_DOCS;
    }
  }

  if (layerDescriptor.sourceDescriptor.type === _common.SOURCE_TYPES.ES_GEO_GRID) {
    const sourceDescriptor = layerDescriptor.sourceDescriptor;

    if (sourceDescriptor.requestType === _common.RENDER_AS.POINT) {
      return TELEMETRY_LAYER_TYPE.ES_AGG_CLUSTERS;
    } else if (sourceDescriptor.requestType === _common.RENDER_AS.GRID) {
      return TELEMETRY_LAYER_TYPE.ES_AGG_GRIDS;
    }
  }

  return null;
}

function getScalingOption(layerDescriptor) {
  if (!layerDescriptor.sourceDescriptor || layerDescriptor.sourceDescriptor.type !== _common.SOURCE_TYPES.ES_SEARCH || !layerDescriptor.sourceDescriptor.scalingType) {
    return null;
  }

  const descriptor = layerDescriptor.sourceDescriptor;

  if (descriptor.scalingType === _common.SCALING_TYPES.CLUSTERS) {
    return TELEMETRY_SCALING_OPTIONS.CLUSTERS;
  }

  if (descriptor.scalingType === _common.SCALING_TYPES.MVT) {
    return TELEMETRY_SCALING_OPTIONS.MVT;
  }

  if (descriptor.scalingType === _common.SCALING_TYPES.LIMIT) {
    return TELEMETRY_SCALING_OPTIONS.LIMIT;
  }

  return null;
}

function getCountsByMap(layerDescriptors, mapToKey) {
  const counts = {};
  layerDescriptors.forEach(layerDescriptor => {
    const scalingOption = mapToKey(layerDescriptor);

    if (!scalingOption) {
      return;
    }

    if (!counts[scalingOption]) {
      counts[scalingOption] = 1;
    } else {
      counts[scalingOption] += 1;
    }
  });
  return counts;
}

function getCountsByCluster(layerLists, mapToKey) {
  const counts = layerLists.map(layerDescriptors => {
    return getCountsByMap(layerDescriptors, mapToKey);
  });
  const clusterCounts = {};
  counts.forEach(count => {
    for (const key in count) {
      if (!count.hasOwnProperty(key)) {
        continue;
      }

      if (!clusterCounts[key]) {
        clusterCounts[key] = {
          min: count[key],
          max: count[key],
          total: count[key],
          avg: count[key]
        };
      } else {
        clusterCounts[key].min = Math.min(count[key], clusterCounts[key].min);
        clusterCounts[key].max = Math.max(count[key], clusterCounts[key].max);
        clusterCounts[key].total = count[key] + clusterCounts[key].total;
      }
    }
  });

  for (const key in clusterCounts) {
    if (clusterCounts.hasOwnProperty(key)) {
      clusterCounts[key].avg = clusterCounts[key].total / layerLists.length;
    }
  }

  return clusterCounts;
}

function getScalingOptionsPerCluster(layerLists) {
  return getCountsByCluster(layerLists, getScalingOption);
}

function getTelemetryLayerTypesPerCluster(layerLists) {
  return getCountsByCluster(layerLists, getTelemetryLayerType);
}

function getTermJoinsPerCluster(layerLists) {
  return getCountsByCluster(layerLists, layerDescriptor => {
    return layerDescriptor.type === _common.LAYER_TYPE.VECTOR && layerDescriptor.joins && layerDescriptor.joins.length ? TELEMETRY_TERM_JOIN : null;
  });
}

function getBaseMapsPerCluster(layerLists) {
  return getCountsByCluster(layerLists, layerDescriptor => {
    if (!layerDescriptor.sourceDescriptor || layerDescriptor.sourceDescriptor.type !== _common.SOURCE_TYPES.EMS_TMS) {
      return null;
    }

    const descriptor = layerDescriptor.sourceDescriptor;

    if (descriptor.isAutoSelect) {
      return TELEMETRY_EMS_BASEMAP_TYPES.AUTO;
    } // This needs to be hardcoded.


    if (descriptor.id === _common2.DEFAULT_EMS_ROADMAP_ID) {
      return TELEMETRY_EMS_BASEMAP_TYPES.ROADMAP;
    }

    if (descriptor.id === _common2.DEFAULT_EMS_ROADMAP_DESATURATED_ID) {
      return TELEMETRY_EMS_BASEMAP_TYPES.ROADMAP_DESATURATED;
    }

    if (descriptor.id === _common2.DEFAULT_EMS_DARKMAP_ID) {
      return TELEMETRY_EMS_BASEMAP_TYPES.DARK;
    }

    return TELEMETRY_EMS_BASEMAP_TYPES.ROADMAP;
  });
}