import { METHODS, TECHNIQUES } from '../../constants';
import Previous from '../V4/Orders';

const combine = (order, resultOrder, technique = TECHNIQUES.OURS) => ({
  uri: 'orders/combine',
  method: METHODS.POST,
  body: {
    technique,
    order: JSON.stringify(order),
    resultOrder: JSON.stringify(resultOrder),
  },
});

const createPayment = (payment = {}) => ({
  uri: 'orders/payments/create',
  method: METHODS.POST,
  body: {
    payment: JSON.stringify(payment),
  },
});

const updatePayment = (payment = {}, arg) => ({
  uri: `orders/payments/${payment[arg]}/edit`,
  method: METHODS.POST,
  body: {
    payment: JSON.stringify(payment),
    by: arg,
  },
});

const updatePaymentById = (payment) => updatePayment(payment, 'id');
const updatePaymentByExternalId = (payment) => updatePayment(payment, 'externalId');

const removePayment = (payment) => ({
  uri: `orders/payments/${(payment && typeof payment === 'object' && payment.id) ? payment.id : payment}/delete`,
  method: METHODS.POST,
});

export default {
  ...Previous,
  combine,
  createPayment,
  updatePaymentById,
  updatePaymentByExternalId,
  removePayment,
};
