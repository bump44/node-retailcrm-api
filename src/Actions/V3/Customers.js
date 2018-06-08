import { METHODS } from '../../constants';

const list = (filter = {}, page = 1, limit = 20) => ({
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

const fetchBy = (id, arg) => ({
  uri: `customers/${id}`,
  method: METHODS.GET,
  qs: { by: arg },
});

const updateBy = (customer, arg) => ({
  uri: `customers/${customer[arg]}/edit`,
  method: METHODS.POST,
  body: { customer: JSON.stringify(customer), by: arg },
});

const fetchById = (id) => fetchBy(id, 'id');
const fetchByExternalId = (externalId) => fetchBy(externalId, 'externalId');

const updateById = (customer = {}) => updateBy(customer, 'id');
const updateByExternalId = (customer = {}) => updateBy(customer, 'externalId');

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

export default {
  list,
  fetchById,
  fetchByExternalId,
  updateById,
  updateByExternalId,
  create,
  fixExternalIds,
  upload,
};
