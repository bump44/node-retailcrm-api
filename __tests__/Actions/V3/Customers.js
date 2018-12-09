import CustomersActions from '../../../src/Actions/V3/Customers';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - Customers', () => {
  it('list', () => {
    const pay = [{}, 1, 20];
    const result = CustomersActions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('customers');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('list defaults', () => {
    const pay = [];
    const result = CustomersActions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('customers');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('create', () => {
    const pay = [{ aaa: 'bbb' }];
    const result = CustomersActions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customer: JSON.stringify(pay[0]) });
  });

  it('create defaults', () => {
    const pay = [];
    const result = CustomersActions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customer: JSON.stringify({}) });
  });

  it('fixExternalIds', () => {
    const pay = [[123, 456, '789']];
    const result = CustomersActions.fixExternalIds(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/fix-external-ids');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customers: JSON.stringify(pay[0]) });
  });

  it('fixExternalIds defaults', () => {
    const pay = [];
    const result = CustomersActions.fixExternalIds(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/fix-external-ids');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customers: JSON.stringify([]) });
  });

  it('upload', () => {
    const pay = [[{ aaa: 'bbb' }, { foo: 'bar' }]];
    const result = CustomersActions.upload(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customers: JSON.stringify(pay[0]) });
  });

  it('upload defaults', () => {
    const pay = [];
    const result = CustomersActions.upload(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customers: JSON.stringify([]) });
  });

  it('fetchById', () => {
    const pay = [123];
    const result = CustomersActions.fetchById(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('customers/123');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ by: 'id' });
  });

  it('fetchByExternalId', () => {
    const pay = [456];
    const result = CustomersActions.fetchByExternalId(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('customers/456');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ by: 'externalId' });
  });

  it('updateById', () => {
    const pay = [{ id: '123' }];
    const result = CustomersActions.updateById(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customer: JSON.stringify(pay[0]), by: 'id' });
  });

  it('updateById defaults', () => {
    const pay = [];
    const result = CustomersActions.updateById(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customer: JSON.stringify({}), by: 'id' });
  });

  it('updateByExternalId', () => {
    const pay = [{ externalId: '456' }];
    const result = CustomersActions.updateByExternalId(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/456/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({
      customer: JSON.stringify(pay[0]),
      by: 'externalId',
    });
  });

  it('updateByExternalId defaults', () => {
    const pay = [];
    const result = CustomersActions.updateByExternalId(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customer: JSON.stringify({}), by: 'externalId' });
  });
});
