import OrdersActions from '../../../src/Actions/V3/Orders';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - Orders', () => {
  it('list', () => {
    const pay = [{}, 1, 20];
    const result = OrdersActions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('list defaults', () => {
    const pay = [];
    const result = OrdersActions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('create', () => {
    const pay = [{ aaa: 'bbb' }];
    const result = OrdersActions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ order: JSON.stringify(pay[0]) });
  });

  it('create defaults', () => {
    const pay = [];
    const result = OrdersActions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ order: JSON.stringify({}) });
  });

  it('fixExternalIds', () => {
    const pay = [[123, 456, '789']];
    const result = OrdersActions.fixExternalIds(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/fix-external-ids');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ orders: JSON.stringify(pay[0]) });
  });

  it('fixExternalIds defaults', () => {
    const pay = [];
    const result = OrdersActions.fixExternalIds(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/fix-external-ids');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ orders: JSON.stringify([]) });
  });

  it('statuses', () => {
    const pay = [[123, 456], [789, 111]];
    const result = OrdersActions.statuses(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders/statuses');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ ids: pay[0], externalIds: pay[1] });
  });

  it('statuses defaults', () => {
    const pay = [];
    const result = OrdersActions.statuses(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders/statuses');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ ids: [], externalIds: [] });
  });

  it('upload', () => {
    const pay = [[{ aaa: 'bbb' }, { foo: 'bar' }]];
    const result = OrdersActions.upload(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ orders: JSON.stringify(pay[0]) });
  });

  it('upload defaults', () => {
    const pay = [];
    const result = OrdersActions.upload(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ orders: JSON.stringify([]) });
  });

  it('fetchById', () => {
    const pay = [123];
    const result = OrdersActions.fetchById(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders/123');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ by: 'id' });
  });

  it('fetchByExternalId', () => {
    const pay = [456];
    const result = OrdersActions.fetchByExternalId(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders/456');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ by: 'externalId' });
  });

  it('updateById', () => {
    const pay = [{ id: '123' }];
    const result = OrdersActions.updateById(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ order: JSON.stringify(pay[0]), by: 'id' });
  });

  it('updateById defaults', () => {
    const pay = [];
    const result = OrdersActions.updateById(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ order: JSON.stringify({}), by: 'id' });
  });

  it('updateByExternalId', () => {
    const pay = [{ externalId: '456' }];
    const result = OrdersActions.updateByExternalId(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/456/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ order: JSON.stringify(pay[0]), by: 'externalId' });
  });

  it('updateByExternalId defaults', () => {
    const pay = [];
    const result = OrdersActions.updateByExternalId(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ order: JSON.stringify({}), by: 'externalId' });
  });

  it('history', () => {
    const pay = [{}, 1, 20];
    const result = OrdersActions.history(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders/history');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('history defaults', () => {
    const pay = [];
    const result = OrdersActions.history(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders/history');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });
});
