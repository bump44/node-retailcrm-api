import Previous from '../V4/Customers';
import CustomFields from './CustomFields';

import { METHODS } from '../../constants';

const createCustomField = (customField) => CustomFields.create(customField, 'customer');
const updateCustomField = (customField) => CustomFields.update(customField, 'customer');
const fetchCustomField = (code) => CustomFields.fetch(code, 'customer');

const combine = (customers = [], resultCustomer = {}) => ({
  uri: 'customers/combine',
  method: METHODS.POST,
  body: {
    customers: JSON.stringify(customers),
    resultCustomer: JSON.stringify(resultCustomer),
  },
});

const listNotes = (filter = {}, page = 1, limit = 20) => ({
  uri: 'customers/notes',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const createNote = (note = {}) => ({
  uri: 'customers/notes/create',
  method: METHODS.POST,
  body: {
    note: JSON.stringify(note),
  },
});

const removeNote = (note) => ({
  uri: `customers/notes/${(note && typeof note === 'object' && note.id) ? note.id : note}/delete`,
  method: METHODS.POST,
});

export default {
  ...Previous,
  createCustomField,
  updateCustomField,
  fetchCustomField,
  combine,
  listNotes,
  createNote,
  removeNote,
};
