"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SavedObjectsClient = void 0;

var _errors = require("./lib/errors");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * @public
 */
class SavedObjectsClient {
  /** @internal */
  constructor(repository) {
    _defineProperty(this, "errors", _errors.SavedObjectsErrorHelpers);

    _defineProperty(this, "_repository", void 0);

    this._repository = repository;
  }
  /**
   * Persists a SavedObject
   *
   * @param type
   * @param attributes
   * @param options
   */


  async create(type, attributes, options) {
    return await this._repository.create(type, attributes, options);
  }
  /**
   * Persists multiple documents batched together as a single request
   *
   * @param objects
   * @param options
   */


  async bulkCreate(objects, options) {
    return await this._repository.bulkCreate(objects, options);
  }
  /**
   * Check what conflicts will result when creating a given array of saved objects. This includes "unresolvable conflicts", which are
   * multi-namespace objects that exist in a different namespace; such conflicts cannot be resolved/overwritten.
   *
   * @param objects
   * @param options
   */


  async checkConflicts(objects = [], options = {}) {
    return await this._repository.checkConflicts(objects, options);
  }
  /**
   * Deletes a SavedObject
   *
   * @param type
   * @param id
   * @param options
   */


  async delete(type, id, options = {}) {
    return await this._repository.delete(type, id, options);
  }
  /**
   * Find all SavedObjects matching the search query
   *
   * @param options
   */


  async find(options) {
    return await this._repository.find(options);
  }
  /**
   * Returns an array of objects by id
   *
   * @param objects - an array of ids, or an array of objects containing id, type and optionally fields
   * @example
   *
   * bulkGet([
   *   { id: 'one', type: 'config' },
   *   { id: 'foo', type: 'index-pattern' }
   * ])
   */


  async bulkGet(objects = [], options = {}) {
    return await this._repository.bulkGet(objects, options);
  }
  /**
   * Retrieves a single object
   *
   * @param type - The type of SavedObject to retrieve
   * @param id - The ID of the SavedObject to retrieve
   * @param options
   */


  async get(type, id, options = {}) {
    return await this._repository.get(type, id, options);
  }
  /**
   * Resolves a single object, using any legacy URL alias if it exists
   *
   * @param type - The type of SavedObject to retrieve
   * @param id - The ID of the SavedObject to retrieve
   * @param options
   */


  async resolve(type, id, options = {}) {
    return await this._repository.resolve(type, id, options);
  }
  /**
   * Updates an SavedObject
   *
   * @param type
   * @param id
   * @param options
   */


  async update(type, id, attributes, options = {}) {
    return await this._repository.update(type, id, attributes, options);
  }
  /**
   * Adds namespaces to a SavedObject
   *
   * @param type
   * @param id
   * @param namespaces
   * @param options
   */


  async addToNamespaces(type, id, namespaces, options = {}) {
    return await this._repository.addToNamespaces(type, id, namespaces, options);
  }
  /**
   * Removes namespaces from a SavedObject
   *
   * @param type
   * @param id
   * @param namespaces
   * @param options
   */


  async deleteFromNamespaces(type, id, namespaces, options = {}) {
    return await this._repository.deleteFromNamespaces(type, id, namespaces, options);
  }
  /**
   * Bulk Updates multiple SavedObject at once
   *
   * @param objects
   */


  async bulkUpdate(objects, options) {
    return await this._repository.bulkUpdate(objects, options);
  }
  /**
   * Updates all objects containing a reference to the given {type, id} tuple to remove the said reference.
   */


  async removeReferencesTo(type, id, options) {
    return await this._repository.removeReferencesTo(type, id, options);
  }
  /**
   * Opens a Point In Time (PIT) against the indices for the specified Saved Object types.
   * The returned `id` can then be passed to {@link SavedObjectsClient.find} to search
   * against that PIT.
   *
   * Only use this API if you have an advanced use case that's not solved by the
   * {@link SavedObjectsClient.createPointInTimeFinder} method.
   */


  async openPointInTimeForType(type, options = {}) {
    return await this._repository.openPointInTimeForType(type, options);
  }
  /**
   * Closes a Point In Time (PIT) by ID. This simply proxies the request to ES via the
   * Elasticsearch client, and is included in the Saved Objects Client as a convenience
   * for consumers who are using {@link SavedObjectsClient.openPointInTimeForType}.
   *
   * Only use this API if you have an advanced use case that's not solved by the
   * {@link SavedObjectsClient.createPointInTimeFinder} method.
   */


  async closePointInTime(id, options) {
    return await this._repository.closePointInTime(id, options);
  }
  /**
   * Returns a {@link ISavedObjectsPointInTimeFinder} to help page through
   * large sets of saved objects. We strongly recommend using this API for
   * any `find` queries that might return more than 1000 saved objects,
   * however this API is only intended for use in server-side "batch"
   * processing of objects where you are collecting all objects in memory
   * or streaming them back to the client.
   *
   * Do NOT use this API in a route handler to facilitate paging through
   * saved objects on the client-side unless you are streaming all of the
   * results back to the client at once. Because the returned generator is
   * stateful, you cannot rely on subsequent http requests retrieving new
   * pages from the same Kibana server in multi-instance deployments.
   *
   * The generator wraps calls to {@link SavedObjectsClient.find} and iterates
   * over multiple pages of results using `_pit` and `search_after`. This will
   * open a new Point-In-Time (PIT), and continue paging until a set of
   * results is received that's smaller than the designated `perPage`.
   *
   * Once you have retrieved all of the results you need, it is recommended
   * to call `close()` to clean up the PIT and prevent Elasticsearch from
   * consuming resources unnecessarily. This is only required if you are
   * done iterating and have not yet paged through all of the results: the
   * PIT will automatically be closed for you once you reach the last page
   * of results, or if the underlying call to `find` fails for any reason.
   *
   * @example
   * ```ts
   * const findOptions: SavedObjectsCreatePointInTimeFinderOptions = {
   *   type: 'visualization',
   *   search: 'foo*',
   *   perPage: 100,
   * };
   *
   * const finder = savedObjectsClient.createPointInTimeFinder(findOptions);
   *
   * const responses: SavedObjectFindResponse[] = [];
   * for await (const response of finder.find()) {
   *   responses.push(...response);
   *   if (doneSearching) {
   *     await finder.close();
   *   }
   * }
   * ```
   */


  createPointInTimeFinder(findOptions, dependencies) {
    return this._repository.createPointInTimeFinder(findOptions, {
      client: this,
      // Include dependencies last so that SO client wrappers have their settings applied.
      ...dependencies
    });
  }

}

exports.SavedObjectsClient = SavedObjectsClient;

_defineProperty(SavedObjectsClient, "errors", _errors.SavedObjectsErrorHelpers);