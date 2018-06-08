import ReferencesActions from '../../../src/Actions/V3/References';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - References', () => {
  it('listCountries', () => {
    const pay = [];
    const result = ReferencesActions.listCountries(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/countries');
    expect(method).toEqual(METHODS.GET);
  });

  it('listDeliveryServices', () => {
    const pay = [];
    const result = ReferencesActions.listDeliveryServices(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/delivery-services');
    expect(method).toEqual(METHODS.GET);
  });

  it('listDeliveryTypes', () => {
    const pay = [];
    const result = ReferencesActions.listDeliveryTypes(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/delivery-types');
    expect(method).toEqual(METHODS.GET);
  });

  it('listPaymentStatuses', () => {
    const pay = [];
    const result = ReferencesActions.listPaymentStatuses(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/payment-statuses');
    expect(method).toEqual(METHODS.GET);
  });

  it('listPaymentTypes', () => {
    const pay = [];
    const result = ReferencesActions.listPaymentTypes(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/payment-types');
    expect(method).toEqual(METHODS.GET);
  });

  it('listProductStatuses', () => {
    const pay = [];
    const result = ReferencesActions.listProductStatuses(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/product-statuses');
    expect(method).toEqual(METHODS.GET);
  });

  it('listSites', () => {
    const pay = [];
    const result = ReferencesActions.listSites(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/sites');
    expect(method).toEqual(METHODS.GET);
  });

  it('listStatusGroups', () => {
    const pay = [];
    const result = ReferencesActions.listStatusGroups(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/status-groups');
    expect(method).toEqual(METHODS.GET);
  });

  it('listStatuses', () => {
    const pay = [];
    const result = ReferencesActions.listStatuses(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/statuses');
    expect(method).toEqual(METHODS.GET);
  });

  it('listStores', () => {
    const pay = [];
    const result = ReferencesActions.listStores(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/stores');
    expect(method).toEqual(METHODS.GET);
  });

  it('listOrderMethods', () => {
    const pay = [];
    const result = ReferencesActions.listOrderMethods(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/order-methods');
    expect(method).toEqual(METHODS.GET);
  });

  it('listOrderTypes', () => {
    const pay = [];
    const result = ReferencesActions.listOrderTypes(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/order-types');
    expect(method).toEqual(METHODS.GET);
  });

  it('updateDeliveryService', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesActions.updateDeliveryService(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/delivery-services/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ deliveryService: JSON.stringify(pay[0]) });
  });

  it('updateDeliveryType', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesActions.updateDeliveryType(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/delivery-types/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ deliveryType: JSON.stringify(pay[0]) });
  });

  it('updateOrderMethod', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesActions.updateOrderMethod(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/order-methods/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ orderMethod: JSON.stringify(pay[0]) });
  });

  it('updateOrderType', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesActions.updateOrderType(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/order-types/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ orderType: JSON.stringify(pay[0]) });
  });

  it('updatePaymentStatus', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesActions.updatePaymentStatus(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/payment-statuses/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ paymentStatus: JSON.stringify(pay[0]) });
  });

  it('updateProductStatus', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesActions.updateProductStatus(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/product-statuses/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ productStatus: JSON.stringify(pay[0]) });
  });

  it('updateSite', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesActions.updateSite(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/sites/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ site: JSON.stringify(pay[0]) });
  });

  it('updateStatus', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesActions.updateStatus(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/statuses/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ status: JSON.stringify(pay[0]) });
  });

  it('updateStore', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesActions.updateStore(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/stores/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ store: JSON.stringify(pay[0]) });
  });

  it('updatePaymentType', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesActions.updatePaymentType(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/payment-types/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ paymentType: JSON.stringify(pay[0]) });
  });

  it('updateDeliveryService defaults', () => {
    const pay = [];
    const result = ReferencesActions.updateDeliveryService(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/delivery-services/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ deliveryService: JSON.stringify({}) });
  });

  it('updateDeliveryType defaults', () => {
    const pay = [];
    const result = ReferencesActions.updateDeliveryType(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/delivery-types/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ deliveryType: JSON.stringify({}) });
  });

  it('updateOrderMethod defaults', () => {
    const pay = [];
    const result = ReferencesActions.updateOrderMethod(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/order-methods/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ orderMethod: JSON.stringify({}) });
  });

  it('updateOrderType defaults', () => {
    const pay = [];
    const result = ReferencesActions.updateOrderType(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/order-types/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ orderType: JSON.stringify({}) });
  });

  it('updatePaymentStatus defaults', () => {
    const pay = [];
    const result = ReferencesActions.updatePaymentStatus(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/payment-statuses/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ paymentStatus: JSON.stringify({}) });
  });

  it('updateProductStatus defaults', () => {
    const pay = [];
    const result = ReferencesActions.updateProductStatus(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/product-statuses/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ productStatus: JSON.stringify({}) });
  });

  it('updateSite defaults', () => {
    const pay = [];
    const result = ReferencesActions.updateSite(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/sites/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ site: JSON.stringify({}) });
  });

  it('updateStatus defaults', () => {
    const pay = [];
    const result = ReferencesActions.updateStatus(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/statuses/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ status: JSON.stringify({}) });
  });

  it('updateStore defaults', () => {
    const pay = [];
    const result = ReferencesActions.updateStore(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/stores/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ store: JSON.stringify({}) });
  });

  it('updatePaymentType defaults', () => {
    const pay = [];
    const result = ReferencesActions.updatePaymentType(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/payment-types/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ paymentType: JSON.stringify({}) });
  });
});
