import { METHODS } from '../../constants';

const listInventories = (filter = {}, page = 1, limit = 20) => ({
  uri: 'store/inventories',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const uploadInventories = (offers = []) => ({
  uri: 'store/inventories/upload',
  method: METHODS.POST,
  body: {
    offers: JSON.stringify(offers),
  },
});

export default {
  listInventories,
  uploadInventories,
};
