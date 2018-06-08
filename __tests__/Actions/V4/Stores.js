import StoresV3Actions from '../../../src/Actions/V3/Stores';
import StoresV4Actions from '../../../src/Actions/V4/Stores';
import { METHODS } from '../../../src/constants';

describe('Actions - V4 - Stores', () => {
  it('equals', () => {
    expect(Object.keys(StoresV4Actions)).toEqual(expect.arrayContaining(Object.keys(StoresV3Actions)));
  });

  it('fetchSettings', () => {
    const pay = [123];
    const result = StoresV4Actions.fetchSettings(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('store/setting/123');
    expect(method).toEqual(METHODS.GET);
  });

  it('updateSettings', () => {
    const pay = [{ code: '123' }];
    const result = StoresV4Actions.updateSettings(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('store/setting/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ configuration: JSON.stringify(pay[0]) });
  });

  it('updateSettings defaults', () => {
    const pay = [];
    const result = StoresV4Actions.updateSettings(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('store/setting/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ configuration: JSON.stringify({}) });
  });

  it('listProducts', () => {
    const pay = [{}, 1, 20];
    const result = StoresV4Actions.listProducts(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('store/products');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('listProducts defaults', () => {
    const pay = [];
    const result = StoresV4Actions.listProducts(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('store/products');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('uploadPrices', () => {
    const pay = [[
      { aaa: 'bbb' },
      { foo: 'bar' },
    ]];
    const result = StoresV4Actions.uploadPrices(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('store/prices/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ prices: JSON.stringify(pay[0]) });
  });

  it('uploadPrices defaults', () => {
    const pay = [];
    const result = StoresV4Actions.uploadPrices(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('store/prices/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ prices: JSON.stringify([]) });
  });
});
