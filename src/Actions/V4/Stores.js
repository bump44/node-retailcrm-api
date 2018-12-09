import { METHODS } from '../../constants';
import Previous from '../V3/Stores';

const fetchSettings = code => ({
  uri: `store/setting/${code}`,
  method: METHODS.GET,
});

const listProducts = (filter = {}, page = 1, limit = 20) => ({
  uri: 'store/products',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const updateSettings = (configuration = {}) => ({
  uri: `store/setting/${configuration.code}/edit`,
  method: METHODS.POST,
  body: {
    configuration: JSON.stringify(configuration),
  },
});

const uploadPrices = (prices = []) => ({
  uri: 'store/prices/upload',
  method: METHODS.POST,
  body: {
    prices: JSON.stringify(prices),
  },
});

export default {
  ...Previous,
  fetchSettings,
  listProducts,
  updateSettings,
  uploadPrices,
};
