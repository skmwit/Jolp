"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListClient = void 0;

var _lists = require("../../services/lists");

var _items = require("../../services/items");

var _siem_server_deps = require("../../siem_server_deps");

var _list_item_policy = _interopRequireDefault(require("../items/list_item_policy.json"));

var _list_policy = _interopRequireDefault(require("./list_policy.json"));

var _create_list_if_it_does_not_exist = require("./create_list_if_it_does_not_exist");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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
}

class ListClient {
  constructor({
    spaceId: _spaceId,
    user: _user,
    config: _config,
    esClient: _esClient
  }) {
    _defineProperty(this, "spaceId", void 0);

    _defineProperty(this, "user", void 0);

    _defineProperty(this, "config", void 0);

    _defineProperty(this, "esClient", void 0);

    _defineProperty(this, "getListIndex", () => {
      const {
        spaceId,
        config: {
          listIndex: listsIndexName
        }
      } = this;
      return (0, _lists.getListIndex)({
        listsIndexName,
        spaceId
      });
    });

    _defineProperty(this, "getListItemIndex", () => {
      const {
        spaceId,
        config: {
          listItemIndex: listsItemsIndexName
        }
      } = this;
      return (0, _items.getListItemIndex)({
        listsItemsIndexName,
        spaceId
      });
    });

    _defineProperty(this, "getList", async ({
      id
    }) => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      return (0, _lists.getList)({
        esClient,
        id,
        listIndex
      });
    });

    _defineProperty(this, "createList", async ({
      id,
      deserializer,
      immutable,
      serializer,
      name,
      description,
      type,
      meta,
      version
    }) => {
      const {
        esClient,
        user
      } = this;
      const listIndex = this.getListIndex();
      return (0, _lists.createList)({
        description,
        deserializer,
        esClient,
        id,
        immutable,
        listIndex,
        meta,
        name,
        serializer,
        type,
        user,
        version
      });
    });

    _defineProperty(this, "createListIfItDoesNotExist", async ({
      id,
      deserializer,
      serializer,
      name,
      description,
      immutable,
      type,
      meta,
      version
    }) => {
      const {
        esClient,
        user
      } = this;
      const listIndex = this.getListIndex();
      return (0, _create_list_if_it_does_not_exist.createListIfItDoesNotExist)({
        description,
        deserializer,
        esClient,
        id,
        immutable,
        listIndex,
        meta,
        name,
        serializer,
        type,
        user,
        version
      });
    });

    _defineProperty(this, "getListIndexExists", async () => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      return (0, _siem_server_deps.getIndexExists)(esClient, listIndex);
    });

    _defineProperty(this, "getListItemIndexExists", async () => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _siem_server_deps.getIndexExists)(esClient, listItemIndex);
    });

    _defineProperty(this, "createListBootStrapIndex", async () => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      return (0, _siem_server_deps.createBootstrapIndex)(esClient, listIndex);
    });

    _defineProperty(this, "createListItemBootStrapIndex", async () => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _siem_server_deps.createBootstrapIndex)(esClient, listItemIndex);
    });

    _defineProperty(this, "getListPolicyExists", async () => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      return (0, _siem_server_deps.getPolicyExists)(esClient, listIndex);
    });

    _defineProperty(this, "getListItemPolicyExists", async () => {
      const {
        esClient
      } = this;
      const listsItemIndex = this.getListItemIndex();
      return (0, _siem_server_deps.getPolicyExists)(esClient, listsItemIndex);
    });

    _defineProperty(this, "getListTemplateExists", async () => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      return (0, _siem_server_deps.getTemplateExists)(esClient, listIndex);
    });

    _defineProperty(this, "getListItemTemplateExists", async () => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _siem_server_deps.getTemplateExists)(esClient, listItemIndex);
    });

    _defineProperty(this, "getListTemplate", () => {
      const listIndex = this.getListIndex();
      return (0, _lists.getListTemplate)(listIndex);
    });

    _defineProperty(this, "getListItemTemplate", () => {
      const listItemIndex = this.getListItemIndex();
      return (0, _items.getListItemTemplate)(listItemIndex);
    });

    _defineProperty(this, "setListTemplate", async () => {
      const {
        esClient
      } = this;
      const template = this.getListTemplate();
      const listIndex = this.getListIndex();
      return (0, _siem_server_deps.setTemplate)(esClient, listIndex, template);
    });

    _defineProperty(this, "setListItemTemplate", async () => {
      const {
        esClient
      } = this;
      const template = this.getListItemTemplate();
      const listItemIndex = this.getListItemIndex();
      return (0, _siem_server_deps.setTemplate)(esClient, listItemIndex, template);
    });

    _defineProperty(this, "setListPolicy", async () => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      return (0, _siem_server_deps.setPolicy)(esClient, listIndex, _list_policy.default);
    });

    _defineProperty(this, "setListItemPolicy", async () => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _siem_server_deps.setPolicy)(esClient, listItemIndex, _list_item_policy.default);
    });

    _defineProperty(this, "deleteListIndex", async () => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      return (0, _siem_server_deps.deleteAllIndex)(esClient, `${listIndex}-*`);
    });

    _defineProperty(this, "deleteListItemIndex", async () => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _siem_server_deps.deleteAllIndex)(esClient, `${listItemIndex}-*`);
    });

    _defineProperty(this, "deleteListPolicy", async () => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      return (0, _siem_server_deps.deletePolicy)(esClient, listIndex);
    });

    _defineProperty(this, "deleteListItemPolicy", async () => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _siem_server_deps.deletePolicy)(esClient, listItemIndex);
    });

    _defineProperty(this, "deleteListTemplate", async () => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      return (0, _siem_server_deps.deleteTemplate)(esClient, listIndex);
    });

    _defineProperty(this, "deleteListItemTemplate", async () => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _siem_server_deps.deleteTemplate)(esClient, listItemIndex);
    });

    _defineProperty(this, "deleteListItem", async ({
      id
    }) => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _items.deleteListItem)({
        esClient,
        id,
        listItemIndex
      });
    });

    _defineProperty(this, "deleteListItemByValue", async ({
      listId,
      value,
      type
    }) => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _items.deleteListItemByValue)({
        esClient,
        listId,
        listItemIndex,
        type,
        value
      });
    });

    _defineProperty(this, "deleteList", async ({
      id
    }) => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      const listItemIndex = this.getListItemIndex();
      return (0, _lists.deleteList)({
        esClient,
        id,
        listIndex,
        listItemIndex
      });
    });

    _defineProperty(this, "exportListItemsToStream", ({
      stringToAppend,
      listId,
      stream
    }) => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      (0, _items.exportListItemsToStream)({
        esClient,
        listId,
        listItemIndex,
        stream,
        stringToAppend
      });
    });

    _defineProperty(this, "importListItemsToStream", async ({
      deserializer,
      serializer,
      type,
      listId,
      stream,
      meta,
      version
    }) => {
      const {
        esClient,
        user,
        config
      } = this;
      const listItemIndex = this.getListItemIndex();
      const listIndex = this.getListIndex();
      return (0, _items.importListItemsToStream)({
        config,
        deserializer,
        esClient,
        listId,
        listIndex,
        listItemIndex,
        meta,
        serializer,
        stream,
        type,
        user,
        version
      });
    });

    _defineProperty(this, "getListItemByValue", async ({
      listId,
      value,
      type
    }) => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _items.getListItemByValue)({
        esClient,
        listId,
        listItemIndex,
        type,
        value
      });
    });

    _defineProperty(this, "createListItem", async ({
      id,
      deserializer,
      serializer,
      listId,
      value,
      type,
      meta
    }) => {
      const {
        esClient,
        user
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _items.createListItem)({
        deserializer,
        esClient,
        id,
        listId,
        listItemIndex,
        meta,
        serializer,
        type,
        user,
        value
      });
    });

    _defineProperty(this, "updateListItem", async ({
      _version,
      id,
      value,
      meta
    }) => {
      const {
        esClient,
        user
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _items.updateListItem)({
        _version,
        esClient,
        id,
        listItemIndex,
        meta,
        user,
        value
      });
    });

    _defineProperty(this, "updateList", async ({
      _version,
      id,
      name,
      description,
      meta,
      version
    }) => {
      const {
        esClient,
        user
      } = this;
      const listIndex = this.getListIndex();
      return (0, _lists.updateList)({
        _version,
        description,
        esClient,
        id,
        listIndex,
        meta,
        name,
        user,
        version
      });
    });

    _defineProperty(this, "getListItem", async ({
      id
    }) => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _items.getListItem)({
        esClient,
        id,
        listItemIndex
      });
    });

    _defineProperty(this, "getListItemByValues", async ({
      type,
      listId,
      value
    }) => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _items.getListItemByValues)({
        esClient,
        listId,
        listItemIndex,
        type,
        value
      });
    });

    _defineProperty(this, "searchListItemByValues", async ({
      type,
      listId,
      value
    }) => {
      const {
        esClient
      } = this;
      const listItemIndex = this.getListItemIndex();
      return (0, _items.searchListItemByValues)({
        esClient,
        listId,
        listItemIndex,
        type,
        value
      });
    });

    _defineProperty(this, "findList", async ({
      filter,
      currentIndexPosition,
      perPage,
      page,
      sortField,
      sortOrder,
      searchAfter
    }) => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      return (0, _lists.findList)({
        currentIndexPosition,
        esClient,
        filter,
        listIndex,
        page,
        perPage,
        searchAfter,
        sortField,
        sortOrder
      });
    });

    _defineProperty(this, "findListItem", async ({
      listId,
      filter,
      currentIndexPosition,
      perPage,
      page,
      sortField,
      sortOrder,
      searchAfter
    }) => {
      const {
        esClient
      } = this;
      const listIndex = this.getListIndex();
      const listItemIndex = this.getListItemIndex();
      return (0, _items.findListItem)({
        currentIndexPosition,
        esClient,
        filter,
        listId,
        listIndex,
        listItemIndex,
        page,
        perPage,
        searchAfter,
        sortField,
        sortOrder
      });
    });

    this.spaceId = _spaceId;
    this.user = _user;
    this.config = _config;
    this.esClient = _esClient;
  }

}

exports.ListClient = ListClient;