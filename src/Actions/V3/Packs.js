import { METHODS } from '../../constants';

const list = (filter, page, limit) => ({
  uri: 'orders/packs',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const create = (pack = {}) => ({
  uri: 'orders/packs/create',
  method: METHODS.POST,
  body: {
    pack: JSON.stringify(pack),
  },
});

const history = (filter, page, limit) => ({
  uri: 'orders/packs/history',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const findById = (id) => ({
  uri: `orders/packs/${id}`,
  method: METHODS.GET,
  qs: {},
});

const removeById = (id) => ({
  uri: `orders/packs/${id}/delete`,
  method: METHODS.POST,
  qs: {},
});

const updateById = (pack = {}) => ({
  uri: `orders/packs/${pack.id}/edit`,
  method: METHODS.POST,
  body: {
    pack: JSON.stringify(pack),
  },
});

export default {
  list,
  create,
  history,
  findById,
  removeById,
  updateById,
};

