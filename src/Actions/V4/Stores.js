import { METHODS } from '../../constants';
import Previous from '../V3/Stores';

export const products = (filter, page, limit) => ({
  uri: 'store/products',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

export default {
  ...Previous,
  products,
};
