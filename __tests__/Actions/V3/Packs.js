import PacksActions from '../../../src/Actions/V3/Packs';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - Packs', () => {
  it('list', () => {
    const pay = [{}, 1, 20];
    const result = PacksActions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders/packs');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('list defaults', () => {
    const pay = [];
    const result = PacksActions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders/packs');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('create', () => {
    const pay = [{ aaa: 'bbb' }];
    const result = PacksActions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/packs/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ pack: JSON.stringify(pay[0]) });
  });

  it('create defaults', () => {
    const pay = [];
    const result = PacksActions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/packs/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ pack: JSON.stringify({}) });
  });

  it('fetch', () => {
    const pay = [123];
    const result = PacksActions.fetch(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('orders/packs/123');
    expect(method).toEqual(METHODS.GET);
  });

  it('update', () => {
    const pay = [{ id: '123' }];
    const result = PacksActions.update(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/packs/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ pack: JSON.stringify(pay[0]) });
  });

  it('update defaults', () => {
    const pay = [];
    const result = PacksActions.update(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('orders/packs/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ pack: JSON.stringify({}) });
  });

  it('remove by id', () => {
    const pay = [123];
    const result = PacksActions.remove(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('orders/packs/123/delete');
    expect(method).toEqual(METHODS.POST);
  });

  it('remove by pack', () => {
    const pay = [{ id: '123' }];
    const result = PacksActions.remove(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('orders/packs/123/delete');
    expect(method).toEqual(METHODS.POST);
  });

  it('history', () => {
    const pay = [{}, 1, 20];
    const result = PacksActions.history(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders/packs/history');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('history defaults', () => {
    const pay = [];
    const result = PacksActions.history(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('orders/packs/history');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });
});
