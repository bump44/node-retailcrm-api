import OrdersV3Actions from '../../../src/Actions/V3/Orders';
import OrdersV5Actions from '../../../src/Actions/V5/Orders';
import { METHODS, TECHNIQUES } from '../../../src/constants';

describe('Actions - V5 - Orders', () => {
  it('equals', () => {
    expect(Object.keys(OrdersV5Actions)).toEqual(
      expect.arrayContaining(Object.keys(OrdersV3Actions)),
    );
  });

  it('combine', () => {
    const pay = [{ name: 'qwe' }, { name: 'zxc' }, TECHNIQUES.OURS];
    const result = OrdersV5Actions.combine(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/combine');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({
      order: JSON.stringify(pay[0]),
      resultOrder: JSON.stringify(pay[1]),
      technique: TECHNIQUES.OURS,
    });
  });

  it('combine defaults', () => {
    const pay = [];
    const result = OrdersV5Actions.combine(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/combine');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({
      order: JSON.stringify(undefined),
      resultOrder: JSON.stringify(undefined),
      technique: TECHNIQUES.OURS,
    });
  });

  it('createPayment', () => {
    const pay = [{ aaa: 'bbb' }];
    const result = OrdersV5Actions.createPayment(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/payments/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ payment: JSON.stringify(pay[0]) });
  });

  it('createPayment defaults', () => {
    const pay = [];
    const result = OrdersV5Actions.createPayment(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/payments/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ payment: JSON.stringify({}) });
  });

  it('updatePaymentById', () => {
    const pay = [{ id: '123' }];
    const result = OrdersV5Actions.updatePaymentById(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/payments/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ payment: JSON.stringify(pay[0]), by: 'id' });
  });

  it('updatePaymentById defaults', () => {
    const pay = [];
    const result = OrdersV5Actions.updatePaymentById(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/payments/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ payment: JSON.stringify({}), by: 'id' });
  });

  it('updatePaymentByExternalId', () => {
    const pay = [{ externalId: '123' }];
    const result = OrdersV5Actions.updatePaymentByExternalId(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/payments/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ payment: JSON.stringify(pay[0]), by: 'externalId' });
  });

  it('updatePaymentByExternalId defaults', () => {
    const pay = [];
    const result = OrdersV5Actions.updatePaymentByExternalId(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/payments/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ payment: JSON.stringify({}), by: 'externalId' });
  });

  it('removePayment by note (string)', () => {
    const pay = ['123'];
    const result = OrdersV5Actions.removePayment(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('orders/payments/123/delete');
    expect(method).toEqual(METHODS.POST);
  });

  it('removePayment by note (number)', () => {
    const pay = [123];
    const result = OrdersV5Actions.removePayment(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('orders/payments/123/delete');
    expect(method).toEqual(METHODS.POST);
  });

  it('removePayment by note (object)', () => {
    const pay = [{ id: '123', aaa: 'bbb' }];
    const result = OrdersV5Actions.removePayment(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('orders/payments/123/delete');
    expect(method).toEqual(METHODS.POST);
  });
});
