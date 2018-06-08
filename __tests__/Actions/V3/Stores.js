import StoresActions from '../../../src/Actions/V3/Stores';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - Stores', () => {
  it('listInventories', () => {
    const pay = [{}, 1, 20];
    const result = StoresActions.listInventories(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('store/inventories');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('listInventories defaults', () => {
    const pay = [];
    const result = StoresActions.listInventories(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('store/inventories');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('uploadInventories', () => {
    const pay = [[
      { aaa: 'bbb' },
      { foo: 'bar' },
    ]];
    const result = StoresActions.uploadInventories(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('store/inventories/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ offers: JSON.stringify(pay[0]) });
  });

  it('uploadInventories defaults', () => {
    const pay = [];
    const result = StoresActions.uploadInventories(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('store/inventories/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ offers: JSON.stringify([]) });
  });
});
