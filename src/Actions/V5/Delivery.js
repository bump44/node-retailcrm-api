import Previous from '../V4/Delivery';
import { METHODS } from '../../constants';

const listShipments = (filter = {}, page = 1, limit = 20) => ({
  uri: 'delivery/shipments',
  method: METHODS.GET,
  qs: {
    filter,
    page,
    limit,
  },
});

const createShipment = (deliveryShipment = {}, deliveryType) => ({
  uri: 'delivery/shipments/create',
  method: METHODS.POST,
  body: {
    deliveryShipment: JSON.stringify(deliveryShipment),
    deliveryType,
  },
});

const fetchShipment = (id) => ({
  uri: `delivery/shipments/${id}`,
  method: METHODS.GET,
});

const updateShipment = (deliveryShipment = {}) => ({
  uri: `delivery/shipments/${deliveryShipment.id}/edit`,
  method: METHODS.POST,
  body: {
    deliveryShipment: JSON.stringify(deliveryShipment),
  },
});

export default {
  ...Previous,
  listShipments,
  createShipment,
  fetchShipment,
  updateShipment,
};
