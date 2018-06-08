import { METHODS } from '../../constants';

const countriesList = () => ({
  uri: 'reference/countries',
  method: METHODS.GET,
  qs: {},
});

const deliveryServicesList = () => ({
  uri: 'reference/delivery-services',
  method: METHODS.GET,
  qs: {},
});

const deliveryServicesUpdate = (deliveryService = {}) => ({
  uri: `reference/delivery-services/${deliveryService.code}/edit`,
  method: METHODS.POST,
  qs: {},
  body: {
    deliveryService: JSON.stringify(deliveryService),
  },
});

const deliveryTypesList = () => ({
  uri: 'reference/delivery-types',
  method: METHODS.GET,
  qs: {},
});

const deliveryTypesUpdate = (deliveryType = {}) => ({
  uri: `reference/delivery-types/${deliveryType.code}/edit`,
  method: METHODS.GET,
  qs: {},
  body: {
    deliveryType: JSON.stringify(deliveryType),
  },
});

const orderMethodsList = () => ({
  uri: 'reference/order-methods',
  method: METHODS.GET,
  qs: {},
});

const orderMethodsUpdate = (orderMethod = {}) => ({
  uri: `reference/order-methods/${orderMethod.code}/edit`,
  method: METHODS.POST,
  qs: {},
  body: {
    orderMethod: JSON.stringify(orderMethod),
  },
});

const orderTypesList = () => ({
  uri: 'reference/order-types',
  method: METHODS.GET,
  qs: {},
});

const orderTypesUpdate = (orderType = {}) => ({
  uri: `reference/order-types/${orderType.code}/edit`,
  method: METHODS.POST,
  qs: {},
  body: {
    orderType: JSON.stringify(orderType),
  },
});

const paymentStatusesList = () => ({
  uri: 'reference/payment-statuses',
  method: METHODS.GET,
  qs: {},
});

const paymentStatusesUpdate = (paymentStatus = {}) => ({
  uri: `reference/payment-statuses/${paymentStatus.code}/edit`,
  method: METHODS.POST,
  qs: {},
  body: {
    paymentStatus: JSON.stringify(paymentStatus),
  },
});

const paymentTypesList = () => ({
  uri: 'reference/payment-types',
  method: METHODS.GET,
  qs: {},
});

const paymentTypesUpdate = (paymentType = {}) => ({
  uri: `reference/payment-types/${paymentType.code}/edit`,
  method: METHODS.POST,
  qs: {},
  body: {
    paymentType: JSON.stringify(paymentType),
  },
});

const productStatusesList = () => ({
  uri: 'reference/product-statuses',
  method: METHODS.GET,
  qs: {},
});

const productStatusesUpdate = (productStatus = {}) => ({
  uri: `reference/product-statuses/${productStatus.code}/edit`,
  method: METHODS.POST,
  qs: {},
  body: {
    productStatus: JSON.stringify(productStatus),
  },
});

const sitesList = () => ({
  uri: 'reference/sites',
  method: METHODS.GET,
  qs: {},
});

const sitesUpdate = (site = {}) => ({
  uri: `reference/sites/${site.code}/edit`,
  method: METHODS.POST,
  qs: {},
  body: {
    site: JSON.stringify(site),
  },
});

const statusGroupsList = () => ({
  uri: 'reference/status-groups',
  method: METHODS.GET,
  qs: {},
});

const statusesList = () => ({
  uri: 'reference/statuses',
  method: METHODS.GET,
  qs: {},
});

const statusesUpdate = (status = {}) => ({
  uri: `reference/statuses/${status.code}/edit`,
  method: METHODS.POST,
  qs: {},
  body: {
    status: JSON.stringify(status),
  },
});

const storesList = () => ({
  uri: 'reference/stores',
  method: METHODS.GET,
  qs: {},
});

const storesUpdate = (store = {}) => ({
  uri: `reference/stores/${store.code}/edit`,
  method: METHODS.POST,
  qs: {},
  body: {
    store: JSON.stringify(store),
  },
});

export default {
  countriesList,
  deliveryServicesList,
  deliveryServicesUpdate,
  deliveryTypesList,
  deliveryTypesUpdate,
  orderMethodsList,
  orderMethodsUpdate,
  orderTypesList,
  orderTypesUpdate,
  paymentStatusesList,
  paymentStatusesUpdate,
  paymentTypesList,
  paymentTypesUpdate,
  productStatusesList,
  productStatusesUpdate,
  sitesList,
  sitesUpdate,
  statusGroupsList,
  statusesList,
  statusesUpdate,
  storesList,
  storesUpdate,
};
