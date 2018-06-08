import Previous from '../V4/Stores';
import { ErrorMethodNotAvailable } from '../../errors';
import { METHODS } from '../../constants';

const fetchSettings = () => {
  throw new ErrorMethodNotAvailable('fetchSetting');
};

const listProductGroups = (filter = {}, page = 1, limit = 20) => ({
  uri: 'store/product-groups',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const listProductProperties = (filter = {}, page = 1, limit = 20) => ({
  uri: 'store/products/properties',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

export default {
  ...Previous,
  fetchSettings,
  listProductGroups,
  listProductProperties,
};
