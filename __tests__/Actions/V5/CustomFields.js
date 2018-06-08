import CustomFieldsV5Actions from '../../../src/Actions/V5/CustomFields';
import { METHODS } from '../../../src/constants';

describe('Actions - V5 - CustomFields', () => {
  it('list', () => {
    const pay = [{}, 1, 20];
    const result = CustomFieldsV5Actions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('custom-fields');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('list defaults', () => {
    const pay = [];
    const result = CustomFieldsV5Actions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('custom-fields');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('create', () => {
    const pay = [{ aaa: 'bbb' }, 'customer'];
    const result = CustomFieldsV5Actions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('custom-fields/customer/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customField: JSON.stringify(pay[0]) });
  });

  it('create defaults', () => {
    const pay = [];
    const result = CustomFieldsV5Actions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('custom-fields/undefined/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customField: JSON.stringify({}) });
  });

  it('fetch', () => {
    const pay = [123, 'customer'];
    const result = CustomFieldsV5Actions.fetch(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('custom-fields/customer/123');
    expect(method).toEqual(METHODS.GET);
  });

  it('fetch defaults', () => {
    const pay = [];
    const result = CustomFieldsV5Actions.fetch(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('custom-fields/undefined/undefined');
    expect(method).toEqual(METHODS.GET);
  });

  it('update', () => {
    const pay = [{ code: '123' }, 'customer'];
    const result = CustomFieldsV5Actions.update(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('custom-fields/customer/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customField: JSON.stringify(pay[0]) });
  });

  it('update defaults', () => {
    const pay = [];
    const result = CustomFieldsV5Actions.update(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('custom-fields/undefined/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customField: JSON.stringify({}) });
  });

  it('listDictionaries', () => {
    const pay = [{}, 1, 20];
    const result = CustomFieldsV5Actions.listDictionaries(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('custom-fields/dictionaries');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('listDictionaries defaults', () => {
    const pay = [];
    const result = CustomFieldsV5Actions.listDictionaries(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('custom-fields/dictionaries');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('fetchDictionary', () => {
    const pay = [123];
    const result = CustomFieldsV5Actions.fetchDictionary(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('custom-fields/dictionaries/123');
    expect(method).toEqual(METHODS.GET);
  });

  it('createDictionary', () => {
    const pay = [{ aaa: 'bbb' }];
    const result = CustomFieldsV5Actions.createDictionary(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('custom-fields/dictionaries/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customDictionary: JSON.stringify(pay[0]) });
  });

  it('createDictionary defaults', () => {
    const pay = [];
    const result = CustomFieldsV5Actions.createDictionary(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('custom-fields/dictionaries/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customDictionary: JSON.stringify({}) });
  });

  it('updateDictionary', () => {
    const pay = [{ code: '123' }];
    const result = CustomFieldsV5Actions.updateDictionary(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('custom-fields/dictionaries/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customDictionary: JSON.stringify(pay[0]) });
  });

  it('updateDictionary defaults', () => {
    const pay = [];
    const result = CustomFieldsV5Actions.updateDictionary(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('custom-fields/dictionaries/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ customDictionary: JSON.stringify({}) });
  });
});
