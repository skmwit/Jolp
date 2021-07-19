"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CsvGenerator = void 0;

var _i18n = require("@kbn/i18n");

var _common = require("../../../../../../../src/plugins/data/common");

var _server = require("../../../../../../../src/plugins/kibana_utils/server");

var _constants = require("../../../../common/constants");

var _schema_utils = require("../../../../common/schema_utils");

var _cell_has_formula = require("./cell_has_formula");

var _get_export_settings = require("./get_export_settings");

var _max_size_string_builder = require("./max_size_string_builder");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // Function to check if the field name values can be used as the header row


function isPlainStringArray(fields) {
  let result = true;

  if (Array.isArray(fields)) {
    fields.forEach(field => {
      if (typeof field !== 'string' || field === '*' || field === '_source') {
        result = false;
      }
    });
  }

  return result;
}

class CsvGenerator {
  constructor(job, config, clients, dependencies, cancellationToken, logger) {
    this.job = job;
    this.config = config;
    this.clients = clients;
    this.dependencies = dependencies;
    this.cancellationToken = cancellationToken;
    this.logger = logger;

    _defineProperty(this, "_columns", void 0);

    _defineProperty(this, "_formatters", void 0);

    _defineProperty(this, "csvContainsFormulas", false);

    _defineProperty(this, "maxSizeReached", false);

    _defineProperty(this, "csvRowCount", 0);
  }

  async scan(index, searchSource, scrollSettings) {
    const searchBody = searchSource.getSearchRequestBody();
    this.logger.debug(`executing search request`);
    const searchParams = {
      params: {
        body: searchBody,
        index: index.title,
        scroll: scrollSettings.duration,
        size: scrollSettings.size
      }
    };
    const results = (await this.clients.data.search(searchParams, {
      strategy: _common.ES_SEARCH_STRATEGY
    }).toPromise()).rawResponse;
    return results;
  }

  async scroll(scrollId, scrollSettings) {
    this.logger.debug(`executing scroll request`);
    const results = (await this.clients.es.asCurrentUser.scroll({
      body: {
        scroll: scrollSettings.duration,
        scroll_id: scrollId
      }
    })).body;
    return results;
  }
  /*
   * Load field formats for each field in the list
   */


  getFormatters(table) {
    if (this._formatters) {
      return this._formatters;
    } // initialize field formats


    const formatters = {};
    table.columns.forEach(c => {
      const fieldFormat = this.dependencies.fieldFormatsRegistry.deserialize(c.meta.params);
      formatters[c.id] = fieldFormat;
    });
    this._formatters = formatters;
    return this._formatters;
  }

  escapeValues(settings) {
    return value => {
      if (settings.checkForFormulas && (0, _cell_has_formula.cellHasFormulas)(value)) {
        this.csvContainsFormulas = true; // set warning if cell value has a formula
      }

      return settings.escapeValue(value);
    };
  }

  getColumns(searchSource, table) {
    var _this$job$columns;

    if (this._columns != null) {
      return this._columns;
    } // if columns is not provided in job params,
    // default to use fields/fieldsFromSource from the searchSource to get the ordering of columns


    const getFromSearchSource = () => {
      const fieldValues = {
        fields: searchSource.getField('fields'),
        fieldsFromSource: searchSource.getField('fieldsFromSource')
      };
      const fieldSource = fieldValues.fieldsFromSource ? 'fieldsFromSource' : 'fields';
      this.logger.debug(`Getting columns from '${fieldSource}' in search source.`);
      const fields = fieldValues[fieldSource]; // Check if field name values are string[] and if the fields are user-defined

      if (isPlainStringArray(fields)) {
        return fields;
      } // Default to using the table column IDs as the fields


      const columnIds = table.columns.map(c => c.id); // Fields in the API response don't come sorted - they need to be sorted client-side

      columnIds.sort();
      return columnIds;
    };

    this._columns = (_this$job$columns = this.job.columns) !== null && _this$job$columns !== void 0 && _this$job$columns.length ? this.job.columns : getFromSearchSource();
    return this._columns;
  }

  formatCellValues(formatters) {
    return ({
      column: tableColumn,
      data: dataTableCell
    }) => {
      let cell; // check truthiness to guard against _score, _type, etc

      if (tableColumn && dataTableCell) {
        try {
          cell = formatters[tableColumn].convert(dataTableCell);
        } catch (err) {
          this.logger.error(err);
          cell = '-';
        }

        try {
          // expected values are a string of JSON where the value(s) is in an array
          cell = JSON.parse(cell);
        } catch (e) {// ignore
        } // We have to strip singular array values out of their array wrapper,
        // So that the value appears the visually the same as seen in Discover


        if (Array.isArray(cell)) {
          cell = cell.map(c => typeof c === 'object' ? JSON.stringify(c) : c).join(', ');
        } // Check for object-type value (geoip)


        if (typeof cell === 'object') {
          cell = JSON.stringify(cell);
        }

        return cell;
      }

      return '-'; // Unknown field: it existed in searchSource but has no value in the result
    };
  }
  /*
   * Use the list of columns to generate the header row
   */


  generateHeader(columns, table, builder, settings) {
    this.logger.debug(`Building CSV header row...`);
    const header = columns.map(this.escapeValues(settings)).join(settings.separator) + '\n';

    if (!builder.tryAppend(header)) {
      return {
        size: 0,
        content: '',
        maxSizeReached: true,
        warnings: []
      };
    }
  }
  /*
   * Format a Datatable into rows of CSV content
   */


  generateRows(columns, table, builder, formatters, settings) {
    this.logger.debug(`Building ${table.rows.length} CSV data rows...`);

    for (const dataTableRow of table.rows) {
      if (this.cancellationToken.isCancelled()) {
        break;
      }

      const row = columns.map(f => ({
        column: f,
        data: dataTableRow[f]
      })).map(this.formatCellValues(formatters)).map(this.escapeValues(settings)).join(settings.separator) + '\n';

      if (!builder.tryAppend(row)) {
        this.logger.warn(`Max Size Reached after ${this.csvRowCount} rows.`);
        this.maxSizeReached = true;

        if (this.cancellationToken) {
          this.cancellationToken.cancel();
        }

        break;
      }

      this.csvRowCount++;
    }
  }

  async generateData() {
    const [settings, searchSource] = await Promise.all([(0, _get_export_settings.getExportSettings)(this.clients.uiSettings, this.config, this.job.browserTimezone, this.logger), this.dependencies.searchSourceStart.create(this.job.searchSource)]);
    const index = searchSource.getField('index');

    if (!index) {
      throw new Error(`The search must have a revference to an index pattern!`);
    }

    const {
      maxSizeBytes,
      bom,
      escapeFormulaValues,
      scroll: scrollSettings
    } = settings;
    const builder = new _max_size_string_builder.MaxSizeStringBuilder((0, _schema_utils.byteSizeValueToNumber)(maxSizeBytes), bom);
    const warnings = [];
    let first = true;
    let currentRecord = -1;
    let totalRecords = 0;
    let scrollId; // apply timezone from the job to all date field formatters

    try {
      index.fields.getByType('date').forEach(({
        name
      }) => {
        var _index$fieldFormatMap, _index$fieldFormatMap2;

        this.logger.debug(`setting timezone on ${name}`);
        const format = { ...index.fieldFormatMap[name],
          id: ((_index$fieldFormatMap = index.fieldFormatMap[name]) === null || _index$fieldFormatMap === void 0 ? void 0 : _index$fieldFormatMap.id) || 'date',
          // allow id: date_nanos
          params: { ...((_index$fieldFormatMap2 = index.fieldFormatMap[name]) === null || _index$fieldFormatMap2 === void 0 ? void 0 : _index$fieldFormatMap2.params),
            timezone: settings.timezone
          }
        };
        index.setFieldFormat(name, format);
      });
    } catch (err) {
      this.logger.error(err);
    }

    try {
      do {
        if (this.cancellationToken.isCancelled()) {
          break;
        }

        let results;

        if (scrollId == null) {
          var _results, _results$hits; // open a scroll cursor in Elasticsearch


          results = await this.scan(index, searchSource, scrollSettings);
          scrollId = (_results = results) === null || _results === void 0 ? void 0 : _results._scroll_id;

          if (((_results$hits = results.hits) === null || _results$hits === void 0 ? void 0 : _results$hits.total) != null) {
            totalRecords = results.hits.total;
            this.logger.debug(`Total search results: ${totalRecords}`);
          }
        } else {
          // use the scroll cursor in Elasticsearch
          results = await this.scroll(scrollId, scrollSettings);
        }

        if (!results) {
          this.logger.warning(`Search results are undefined!`);
          break;
        }

        let table;

        try {
          table = (0, _common.tabifyDocs)(results, index, {
            shallow: true,
            meta: true
          });
        } catch (err) {
          this.logger.error(err);
        }

        if (!table) {
          break;
        } // If columns exists in the job params, use it to order the CSV columns
        // otherwise, get the ordering from the searchSource's fields / fieldsFromSource


        const columns = this.getColumns(searchSource, table);

        if (first) {
          first = false;
          this.generateHeader(columns, table, builder, settings);
        }

        if (table.rows.length < 1) {
          break; // empty report with just the header
        }

        const formatters = this.getFormatters(table);
        this.generateRows(columns, table, builder, formatters, settings); // update iterator

        currentRecord += table.rows.length;
      } while (currentRecord < totalRecords - 1); // Add warnings to be logged


      if (this.csvContainsFormulas && escapeFormulaValues) {
        warnings.push(_i18n.i18n.translate('xpack.reporting.exportTypes.csv.generateCsv.escapedFormulaValues', {
          defaultMessage: 'CSV may contain formulas whose values have been escaped'
        }));
      }
    } catch (err) {
      this.logger.error(err);

      if (err instanceof _server.KbnServerError && err.errBody) {
        throw JSON.stringify(err.errBody.error);
      }
    } finally {
      // clear scrollID
      if (scrollId) {
        this.logger.debug(`executing clearScroll request`);

        try {
          await this.clients.es.asCurrentUser.clearScroll({
            body: {
              scroll_id: [scrollId]
            }
          });
        } catch (err) {
          this.logger.error(err);
        }
      } else {
        this.logger.warn(`No scrollId to clear!`);
      }
    }

    const size = builder.getSizeInBytes();
    this.logger.debug(`Finished generating. Total size in bytes: ${size}. Row count: ${this.csvRowCount}.`);
    return {
      content: builder.getString(),
      content_type: _constants.CONTENT_TYPE_CSV,
      csv_contains_formulas: this.csvContainsFormulas && !escapeFormulaValues,
      max_size_reached: this.maxSizeReached,
      size,
      warnings
    };
  }

}

exports.CsvGenerator = CsvGenerator;