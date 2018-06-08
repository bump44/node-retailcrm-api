import CustomersV4Actions from '../../../src/Actions/V4/Customers';
import CustomersV5Actions from '../../../src/Actions/V5/Customers';
import { METHODS } from '../../../src/constants';

describe('Actions - V5 - Customers', () => {
  it('equals', () => {
    expect(Object.keys(CustomersV5Actions)).toEqual(expect.arrayContaining(Object.keys(CustomersV4Actions)));
  });

  it('listNotes', () => {
    const pay = [{}, 1, 20];
    const result = CustomersV5Actions.listNotes(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('customers/notes');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('listNotes defaults', () => {
    const pay = [];
    const result = CustomersV5Actions.listNotes(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('customers/notes');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('createNote', () => {
    const pay = [{ aaa: 'bbb' }];
    const result = CustomersV5Actions.createNote(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/notes/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ note: JSON.stringify(pay[0]) });
  });

  it('createNote defaults', () => {
    const pay = [];
    const result = CustomersV5Actions.createNote(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/notes/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ note: JSON.stringify({}) });
  });

  it('removeNote by note (object)', () => {
    const pay = [{ id: '123', aaa: 'bbb' }];
    const result = CustomersV5Actions.removeNote(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('customers/notes/123/delete');
    expect(method).toEqual(METHODS.POST);
  });

  it('removeNote by note (string)', () => {
    const pay = ['123'];
    const result = CustomersV5Actions.removeNote(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('customers/notes/123/delete');
    expect(method).toEqual(METHODS.POST);
  });

  it('removeNote by note (number)', () => {
    const pay = [123];
    const result = CustomersV5Actions.removeNote(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('customers/notes/123/delete');
    expect(method).toEqual(METHODS.POST);
  });

  it('removeNote by note (object)', () => {
    const pay = [{ id: '123', aaa: 'bbb' }];
    const result = CustomersV5Actions.removeNote(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('customers/notes/123/delete');
    expect(method).toEqual(METHODS.POST);
  });

  it('createCustomField', () => {
    const pay = [{ aaa: 'bbb' }];
    const result = CustomersV5Actions.createCustomField(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('custom-fields/customer/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customField: JSON.stringify(pay[0]) });
  });

  it('updateCustomField', () => {
    const pay = [{ code: '123' }];
    const result = CustomersV5Actions.updateCustomField(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('custom-fields/customer/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customField: JSON.stringify(pay[0]) });
  });

  it('fetchCustomField', () => {
    const pay = [123];
    const result = CustomersV5Actions.fetchCustomField(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('custom-fields/customer/123');
    expect(method).toEqual(METHODS.GET);
  });

  it('combine', () => {
    const pay = [[{ code: '123' }], { code: '456' }];
    const result = CustomersV5Actions.combine(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/combine');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customers: JSON.stringify(pay[0]), resultCustomer: JSON.stringify(pay[1]) });
  });

  it('combine defaults', () => {
    const pay = [];
    const result = CustomersV5Actions.combine(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('customers/combine');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customers: JSON.stringify([]), resultCustomer: JSON.stringify({}) });
  });
});
