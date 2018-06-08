import { METHODS } from '../../constants';

const orderMethodsList = () => ({
  uri: 'reference/order-methods',
  method: METHODS.GET,
  qs: {},
});

const orderTypesList = () => ({
  uri: 'reference/order-types',
  method: METHODS.GET,
  qs: {},
});

export default {
  orderMethodsList,
  orderTypesList,
};
