import { METHODS } from '../../constants';

const list = (filter = {}, page = 1, limit = 20) => ({
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

const history = (filter = {}, page = 1, limit = 20) => ({
  uri: 'orders/packs/history',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const fetch = (id) => ({
  uri: `orders/packs/${id}`,
  method: METHODS.GET,
});

const remove = (pack) => ({
  uri: `orders/packs/${(pack && typeof pack === 'object' ? pack.id : pack)}/delete`,
  method: METHODS.POST,
});

const update = (pack = {}) => ({
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
  fetch,
  remove,
  update,
};

