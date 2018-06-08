import { METHODS } from '../../constants';

const list = (filter = {}, page = 1, limit = 20) => ({
  uri: 'users',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const listGroups = (page = 1, limit = 20) => ({
  uri: 'users-groups',
  method: METHODS.GET,
  qs: {
    page,
    limit,
  },
});

const fetch = (id) => ({
  uri: `users/${id}`,
  method: METHODS.GET,
});

export default {
  list,
  listGroups,
  fetch,
};
