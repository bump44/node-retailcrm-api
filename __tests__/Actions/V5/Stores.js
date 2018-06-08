import StoresV4Actions from '../../../src/Actions/V4/Stores';
import StoresV5Actions from '../../../src/Actions/V5/Stores';
import { METHODS } from '../../../src/constants';

describe('Actions - V5 - Stores', () => {
  it('equals', () => {
    expect(Object.keys(StoresV5Actions)).toEqual(expect.arrayContaining(Object.keys(StoresV4Actions)));
  });

  it('fetchSettings', () => {
    expect(() => {
      StoresV5Actions.fetchSettings();
    }).toThrow(/not\savailable/);
  });

  it('listProductGroups', () => {
    const pay = [{}, 1, 20];
    const result = StoresV5Actions.listProductGroups(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('store/product-groups');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('listProductGroups defaults', () => {
    const pay = [];
    const result = StoresV5Actions.listProductGroups(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('store/product-groups');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('listProductProperties', () => {
    const pay = [{}, 1, 20];
    const result = StoresV5Actions.listProductProperties(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('store/products/properties');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('listProductProperties defaults', () => {
    const pay = [];
    const result = StoresV5Actions.listProductProperties(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('store/products/properties');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });
});
