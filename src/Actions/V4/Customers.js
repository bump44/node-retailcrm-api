import Previous from '../V3/Customers';
import { METHODS } from '../../constants';

const history = (filter = {}, page = 1, limit = 20) => ({
  uri: 'customers/history',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

export default {
  ...Previous,
  history,
};
