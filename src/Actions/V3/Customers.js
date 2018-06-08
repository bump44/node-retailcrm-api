import { METHODS } from '../../constants';

const list = (filter, page, limit) => ({
  uri: 'customers',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const create = (customer = {}) => ({
  uri: 'customers/create',
  method: METHODS.POST,
  body: {
    customer: JSON.stringify(customer),
  },
});

const findById = (id) => ({
  uri: `customers/${id}`,
  method: METHODS.GET,
  qs: {
    by: 'id',
  },
});

const findByExternalId = (externalId) => ({
  uri: `customers/${externalId}`,
  method: METHODS.GET,
  qs: {
    by: 'externalId',
  },
});

const fixExternalIds = (ids = []) => ({
  uri: 'customers/fix-external-ids',
  method: METHODS.POST,
  body: {
    customers: JSON.stringify(ids),
  },
});

const upload = (customers = []) => ({
  uri: 'customers/upload',
  method: METHODS.POST,
  body: {
    customers: JSON.stringify(customers),
  },
});

const updateById = (customer = {}) => ({
  uri: `customers/${customer.id}/edit`,
  method: METHODS.POST,
  body: {
    customer: JSON.stringify(customer),
    by: 'id',
  },
});

const updateByExternalId = (customer = {}) => ({
  uri: `customers/${customer.externalId}/edit`,
  method: METHODS.POST,
  body: {
    customer: JSON.stringify(customer),
    by: 'externalId',
  },
});

export default {
  list,
  create,
  findById,
  findByExternalId,
  fixExternalIds,
  upload,
  updateById,
  updateByExternalId,
};
