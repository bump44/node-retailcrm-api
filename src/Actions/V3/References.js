import { METHODS } from '../../constants';

const listCountries = () => ({
  uri: 'reference/countries',
  method: METHODS.GET,
});

const listDeliveryServices = () => ({
  uri: 'reference/delivery-services',
  method: METHODS.GET,
});

const updateDeliveryService = (deliveryService = {}) => ({
  uri: `reference/delivery-services/${deliveryService.code}/edit`,
  method: METHODS.POST,
  body: {
    deliveryService: JSON.stringify(deliveryService),
  },
});

const listDeliveryTypes = () => ({
  uri: 'reference/delivery-types',
  method: METHODS.GET,
});

const updateDeliveryType = (deliveryType = {}) => ({
  uri: `reference/delivery-types/${deliveryType.code}/edit`,
  method: METHODS.POST,
  body: {
    deliveryType: JSON.stringify(deliveryType),
  },
});

const listOrderMethods = () => ({
  uri: 'reference/order-methods',
  method: METHODS.GET,
});

const updateOrderMethod = (orderMethod = {}) => ({
  uri: `reference/order-methods/${orderMethod.code}/edit`,
  method: METHODS.POST,
  body: {
    orderMethod: JSON.stringify(orderMethod),
  },
});

const listOrderTypes = () => ({
  uri: 'reference/order-types',
  method: METHODS.GET,
});

const updateOrderType = (orderType = {}) => ({
  uri: `reference/order-types/${orderType.code}/edit`,
  method: METHODS.POST,
  body: {
    orderType: JSON.stringify(orderType),
  },
});

const listPaymentStatuses = () => ({
  uri: 'reference/payment-statuses',
  method: METHODS.GET,
});

const updatePaymentStatus = (paymentStatus = {}) => ({
  uri: `reference/payment-statuses/${paymentStatus.code}/edit`,
  method: METHODS.POST,
  body: {
    paymentStatus: JSON.stringify(paymentStatus),
  },
});

const listPaymentTypes = () => ({
  uri: 'reference/payment-types',
  method: METHODS.GET,
});

const updatePaymentType = (paymentType = {}) => ({
  uri: `reference/payment-types/${paymentType.code}/edit`,
  method: METHODS.POST,
  body: {
    paymentType: JSON.stringify(paymentType),
  },
});

const listProductStatuses = () => ({
  uri: 'reference/product-statuses',
  method: METHODS.GET,
});

const updateProductStatus = (productStatus = {}) => ({
  uri: `reference/product-statuses/${productStatus.code}/edit`,
  method: METHODS.POST,
  body: {
    productStatus: JSON.stringify(productStatus),
  },
});

const listSites = () => ({
  uri: 'reference/sites',
  method: METHODS.GET,
});

const updateSite = (site = {}) => ({
  uri: `reference/sites/${site.code}/edit`,
  method: METHODS.POST,
  body: {
    site: JSON.stringify(site),
  },
});

const listStatusGroups = () => ({
  uri: 'reference/status-groups',
  method: METHODS.GET,
});

const listStatuses = () => ({
  uri: 'reference/statuses',
  method: METHODS.GET,
});

const updateStatus = (status = {}) => ({
  uri: `reference/statuses/${status.code}/edit`,
  method: METHODS.POST,
  body: {
    status: JSON.stringify(status),
  },
});

const listStores = () => ({
  uri: 'reference/stores',
  method: METHODS.GET,
});

const updateStore = (store = {}) => ({
  uri: `reference/stores/${store.code}/edit`,
  method: METHODS.POST,
  body: {
    store: JSON.stringify(store),
  },
});

export default {
  listCountries,

  listDeliveryServices,
  updateDeliveryService,

  listDeliveryTypes,
  updateDeliveryType,

  listOrderMethods,
  updateOrderMethod,

  listOrderTypes,
  updateOrderType,

  listPaymentStatuses,
  updatePaymentStatus,

  listPaymentTypes,
  updatePaymentType,

  listProductStatuses,
  updateProductStatus,

  listSites,
  updateSite,

  listStatusGroups,

  listStatuses,
  updateStatus,

  listStores,
  updateStore,
};
