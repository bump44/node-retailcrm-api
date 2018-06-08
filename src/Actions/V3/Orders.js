import { METHODS } from '../../constants';

const list = (filter, page, limit) => {
  const qs = {};
  if (filter !== undefined) {
    qs.filter = filter;
  }
  if (page !== undefined) {
    qs.page = page;
  }
  if (limit !== undefined) {
    qs.limit = limit;
  }

  return {
    uri: 'orders',
    method: METHODS.GET,
    qs,
  };
};

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

const findById = (id) => ({
  uri: `orders/${id}`,
  method: METHODS.GET,
  qs: {
    by: 'id',
  },
});

const findByExternalId = (externalId) => ({
  uri: `orders/${externalId}`,
  method: METHODS.GET,
  qs: {
    by: 'externalId',
  },
});

const updateById = (order = {}) => ({
  uri: `orders/${order.id}/edit`,
  method: METHODS.POST,
  body: {
    order: JSON.stringify(order),
    by: 'id',
  },
});

const updateByExternalId = (order = {}) => ({
  uri: `orders/${order.externalId}/edit`,
  method: METHODS.POST,
  body: {
    order: JSON.stringify(order),
    by: 'externalId',
  },
});

const history = (filter, page, limit) => ({
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
  create,
  fixExternalIds,
  statuses,
  upload,
  findById,
  findByExternalId,
  updateById,
  updateByExternalId,
  history,
};
