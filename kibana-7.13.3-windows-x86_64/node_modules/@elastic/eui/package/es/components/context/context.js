/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { createContext } from 'react';
import PropTypes from "prop-types";
var I18nContext = /*#__PURE__*/createContext({});
var EuiI18nProvider = I18nContext.Provider,
    EuiI18nConsumer = I18nContext.Consumer;

var EuiContext = function EuiContext(_ref) {
  var _ref$i18n = _ref.i18n,
      i18n = _ref$i18n === void 0 ? {} : _ref$i18n,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(EuiI18nProvider, {
    value: i18n
  }, children);
};

EuiContext.propTypes = {
  i18n: PropTypes.shape({
    mapping: PropTypes.shape({}),
    mappingFunc: PropTypes.func,
    formatNumber: PropTypes.func,
    formatDateTime: PropTypes.func,
    locale: PropTypes.string
  }).isRequired,

  /**
     * ReactNode to render as this component's content
     */
  children: PropTypes.node.isRequired
};
export { EuiContext, EuiI18nConsumer, I18nContext };