import { METHODS } from '../../constants';

const list = (filter = {}, page = 1, limit = 20) => ({
  uri: 'orders',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const create = (order = {}) => ({
  uri: 'orders/create',
  method: METHODS.POST,
  body: {
    order: JSON.stringify(order),
  },
});

const fixExternalIds = (ids = []) => ({
  uri: 'orders/fix-external-ids',
  method: METHODS.POST,
  body: {
    orders: JSON.stringify(ids),
  },
});

const statuses = (ids = [], externalIds = []) => ({
  uri: 'orders/statuses',
  method: METHODS.GET,
  qs: {
    ids,
    externalIds,
  },
});

const upload = (orders = []) => ({
  uri: 'orders/upload',
  method: METHODS.POST,
  body: {
    orders: JSON.stringify(orders),
  },
});

const fetchBy = (id, arg) => ({
  uri: `orders/${id}`,
  method: METHODS.GET,
  qs: { by: arg },
});

const updateBy = (order, arg) => ({
  uri: `orders/${order[arg]}/edit`,
  method: METHODS.POST,
  body: { order: JSON.stringify(order), by: arg },
});

const fetchById = (id) => fetchBy(id, 'id');
const fetchByExternalId = (externalId) => fetchBy(externalId, 'externalId');

const updateById = (order = {}) => updateBy(order, 'id');
const updateByExternalId = (order = {}) => updateBy(order, 'externalId');

const history = (filter = {}, page = 1, limit = 20) => ({
  uri: 'orders/history',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

export default {
  list,
  fetchById,
  fetchByExternalId,
  create,
  updateById,
  updateByExternalId,
  fixExternalIds,
  statuses,
  upload,
  history,
};
