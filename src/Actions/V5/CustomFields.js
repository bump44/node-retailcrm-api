import { METHODS } from '../../constants';

const list = (filter = {}, page = 1, limit = 20) => ({
  uri: 'custom-fields',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const create = (customField = {}, entity) => ({
  uri: `custom-fields/${entity}/create`,
  method: METHODS.POST,
  body: {
    customField: JSON.stringify(customField),
  },
});

const fetch = (code, entity) => ({
  uri: `custom-fields/${entity}/${code}`,
  method: METHODS.GET,
});

const update = (customField = {}, entity) => ({
  uri: `custom-fields/${entity}/${customField.code}/edit`,
  method: METHODS.POST,
  body: {
    customField: JSON.stringify(customField),
  },
});

const listDictionaries = (filter = {}, page = 1, limit = 20) => ({
  uri: 'custom-fields/dictionaries',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const createDictionary = (customDictionary = {}) => ({
  uri: 'custom-fields/dictionaries/create',
  method: METHODS.POST,
  body: {
    customDictionary: JSON.stringify(customDictionary),
  },
});

const updateDictionary = (customDictionary = {}) => ({
  uri: `custom-fields/dictionaries/${customDictionary.code}/edit`,
  method: METHODS.POST,
  body: {
    customDictionary: JSON.stringify(customDictionary),
  },
});

const fetchDictionary = code => ({
  uri: `custom-fields/dictionaries/${code}`,
  method: METHODS.GET,
});

export default {
  list,
  create,
  fetch,
  update,
  listDictionaries,
  createDictionary,
  updateDictionary,
  fetchDictionary,
};
