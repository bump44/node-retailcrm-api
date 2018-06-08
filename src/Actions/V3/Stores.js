import { METHODS } from '../../constants';

const inventories = (filter, page, limit) => ({
  uri: 'store/inventories',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const inventoriesUpload = (offers = []) => ({
  uri: 'store/inventories/upload',
  method: METHODS.POST,
  body: {
    offers: JSON.stringify(offers),
  },
});

export default {
  inventories,
  inventoriesUpload,
};

