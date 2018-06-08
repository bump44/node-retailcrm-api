import { METHODS, TECHNIQUES } from '../../constants';
import Previous from '../V4/Orders';

export const combine = (order, resultOrder, technique = TECHNIQUES[0]) => ({
  uri: 'orders/combine',
  method: METHODS.POST,
  body: {
    technique,
    order: JSON.stringify(order),
    resultOrder: JSON.stringify(resultOrder),
  },
});

export default {
  ...Previous,
  combine,
};
