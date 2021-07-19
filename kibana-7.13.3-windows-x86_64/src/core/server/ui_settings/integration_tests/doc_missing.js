"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.docMissingSuite = void 0;

var _lib = require("./lib");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const docMissingSuite = savedObjectsIndex => () => {
  // ensure the kibana index has no documents
  beforeEach(async () => {
    const {
      callCluster
    } = (0, _lib.getServices)(); // delete all docs from kibana index to ensure savedConfig is not found

    await callCluster('deleteByQuery', {
      index: savedObjectsIndex,
      body: {
        query: {
          match_all: {}
        }
      }
    });
  });
  describe('get route', () => {
    it('creates doc, returns a 200 with settings', async () => {
      const {
        supertest
      } = (0, _lib.getServices)();
      const {
        body
      } = await supertest('get', '/api/kibana/settings').expect(200);
      expect(body).toMatchObject({
        settings: {
          buildNum: {
            userValue: expect.any(Number)
          },
          foo: {
            userValue: 'bar',
            isOverridden: true
          }
        }
      });
    });
  });
  describe('set route', () => {
    it('creates doc, returns a 200 with value set', async () => {
      const {
        supertest
      } = (0, _lib.getServices)();

      const defaultIndex = _lib.chance.word();

      const {
        body
      } = await supertest('post', '/api/kibana/settings/defaultIndex').send({
        value: defaultIndex
      }).expect(200);
      expect(body).toMatchObject({
        settings: {
          buildNum: {
            userValue: expect.any(Number)
          },
          defaultIndex: {
            userValue: defaultIndex
          },
          foo: {
            userValue: 'bar',
            isOverridden: true
          }
        }
      });
    });
  });
  describe('setMany route', () => {
    it('creates doc, returns 200 with updated values', async () => {
      const {
        supertest
      } = (0, _lib.getServices)();

      const defaultIndex = _lib.chance.word();

      const {
        body
      } = await supertest('post', '/api/kibana/settings').send({
        changes: {
          defaultIndex
        }
      }).expect(200);
      expect(body).toMatchObject({
        settings: {
          buildNum: {
            userValue: expect.any(Number)
          },
          defaultIndex: {
            userValue: defaultIndex
          },
          foo: {
            userValue: 'bar',
            isOverridden: true
          }
        }
      });
    });
  });
  describe('delete route', () => {
    it('creates doc, returns a 200 with just buildNum', async () => {
      const {
        supertest
      } = (0, _lib.getServices)();
      const {
        body
      } = await supertest('delete', '/api/kibana/settings/defaultIndex').expect(200);
      expect(body).toMatchObject({
        settings: {
          buildNum: {
            userValue: expect.any(Number)
          },
          foo: {
            userValue: 'bar',
            isOverridden: true
          }
        }
      });
    });
  });
};

exports.docMissingSuite = docMissingSuite;