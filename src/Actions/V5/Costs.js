import { METHODS } from '../../constants';

const list = (filter = {}, page = 1, limit = 20) => ({
  uri: 'costs',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const create = (cost = {}) => ({
  uri: 'costs/create',
  method: METHODS.POST,
  body: {
    cost: JSON.stringify(cost),
  },
});

/**
 * Remove Cost from remote host
 * @param {CostObject|array<CostObject>|array<Number>|String|Number} arg
 */
const remove = (arg) => {
  if (typeof arg === 'string' || typeof arg === 'number') {
    return {
      uri: `costs/${arg}/delete`,
      method: METHODS.POST,
    };
  }

  return {
    uri: 'costs/delete',
    method: METHODS.POST,
    body: {
      ids: JSON.stringify(arg instanceof Array
        ? arg.map((cost) => cost instanceof Object ? cost.id : cost)
        : [arg.id]),
    },
  };
};

const upload = (costs = []) => ({
  uri: 'costs/upload',
  method: METHODS.POST,
  body: {
    costs: JSON.stringify(costs),
  },
});

const fetch = (id) => ({
  uri: `costs/${id}`,
  method: METHODS.GET,
});

const update = (cost = {}) => ({
  uri: `costs/${cost.id}/edit`,
  method: METHODS.POST,
  body: {
    cost: JSON.stringify(cost),
  },
});

export default {
  list,
  create,
  remove,
  upload,
  fetch,
  update,
};
