"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapColumn = void 0;

var _i18n = require("@kbn/i18n");

var _expression_types = require("../../expression_types");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const mapColumn = {
  name: 'mapColumn',
  aliases: ['mc'],
  // midnight commander. So many times I've launched midnight commander instead of moving a file.
  type: 'datatable',
  inputTypes: ['datatable'],
  help: _i18n.i18n.translate('expressions.functions.mapColumnHelpText', {
    defaultMessage: 'Adds a column calculated as the result of other columns. ' + 'Changes are made only when you provide arguments.' + 'See also {alterColumnFn} and {staticColumnFn}.',
    values: {
      alterColumnFn: '`alterColumn`',
      staticColumnFn: '`staticColumn`'
    }
  }),
  args: {
    id: {
      types: ['string', 'null'],
      help: _i18n.i18n.translate('expressions.functions.mapColumn.args.idHelpText', {
        defaultMessage: 'An optional id of the resulting column. When `null` the name/column argument is used as id.'
      }),
      required: false,
      default: null
    },
    name: {
      types: ['string'],
      aliases: ['_', 'column'],
      help: _i18n.i18n.translate('expressions.functions.mapColumn.args.nameHelpText', {
        defaultMessage: 'The name of the resulting column.'
      }),
      required: true
    },
    expression: {
      types: ['boolean', 'number', 'string', 'null'],
      resolve: false,
      aliases: ['exp', 'fn', 'function'],
      help: _i18n.i18n.translate('expressions.functions.mapColumn.args.expressionHelpText', {
        defaultMessage: 'An expression that is executed on every row, provided with a single-row {DATATABLE} context and returning the cell value.',
        values: {
          DATATABLE: '`datatable`'
        }
      }),
      required: true
    },
    copyMetaFrom: {
      types: ['string', 'null'],
      help: _i18n.i18n.translate('expressions.functions.mapColumn.args.copyMetaFromHelpText', {
        defaultMessage: "If set, the meta object from the specified column id is copied over to the specified target column. If the column doesn't exist it silently fails."
      }),
      required: false,
      default: null
    }
  },
  fn: (input, args) => {
    const expression = args.expression || (() => Promise.resolve(null));

    const columnId = args.id != null ? args.id : args.name;
    const columns = [...input.columns];
    const rowPromises = input.rows.map(row => {
      return expression({
        type: 'datatable',
        columns,
        rows: [row]
      }).then(val => ({ ...row,
        [columnId]: val
      }));
    });
    return Promise.all(rowPromises).then(rows => {
      const existingColumnIndex = columns.findIndex(({
        name
      }) => name === args.name);
      const type = rows.length ? (0, _expression_types.getType)(rows[0][columnId]) : 'null';
      const newColumn = {
        id: columnId,
        name: args.name,
        meta: {
          type
        }
      };

      if (args.copyMetaFrom) {
        const metaSourceFrom = columns.find(({
          id
        }) => id === args.copyMetaFrom);
        newColumn.meta = { ...newColumn.meta,
          ...((metaSourceFrom === null || metaSourceFrom === void 0 ? void 0 : metaSourceFrom.meta) || {})
        };
      }

      if (existingColumnIndex === -1) {
        columns.push(newColumn);
      } else {
        columns[existingColumnIndex] = newColumn;
      }

      return {
        type: 'datatable',
        columns,
        rows
      };
    });
  }
};
exports.mapColumn = mapColumn;