import { METHODS } from '../../constants';

const list = (filter = {}, page = 1, limit = 20) => ({
  uri: 'segments',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

export default { list };
