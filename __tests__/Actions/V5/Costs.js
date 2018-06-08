import CostsV5Actions from '../../../src/Actions/V5/Costs';
import { METHODS } from '../../../src/constants';

describe('Actions - V5 - Orders', () => {
  it('list', () => {
    const pay = [{}, 1, 20];
    const result = CostsV5Actions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('costs');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('list defaults', () => {
    const pay = [];
    const result = CostsV5Actions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('costs');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('create', () => {
    const pay = [{ aaa: 'bbb' }];
    const result = CostsV5Actions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('costs/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ cost: JSON.stringify(pay[0]) });
  });

  it('create defaults', () => {
    const pay = [];
    const result = CostsV5Actions.create(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('costs/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ cost: JSON.stringify({}) });
  });

  it('remove by id (number)', () => {
    const pay = [123];
    const result = CostsV5Actions.remove(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('costs/123/delete');
    expect(method).toEqual(METHODS.POST);
  });

  it('remove by id (string)', () => {
    const pay = ['123'];
    const result = CostsV5Actions.remove(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('costs/123/delete');
    expect(method).toEqual(METHODS.POST);
  });

  it('remove by id (array<string|number>)', () => {
    const pay = [[123, 456]];
    const result = CostsV5Actions.remove(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('costs/delete');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ ids: JSON.stringify(pay[0]) });
  });

  it('remove by cost (object)', () => {
    const pay = [{ id: '123' }];
    const result = CostsV5Actions.remove(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('costs/delete');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ ids: JSON.stringify(['123']) });
  });

  it('remove by costs (array<object>)', () => {
    const pay = [[{ id: '123' }, { id: '456' }]];
    const result = CostsV5Actions.remove(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('costs/delete');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ ids: JSON.stringify(['123', '456']) });
  });

  it('upload', () => {
    const pay = [[
      { aaa: 'bbb' },
      { foo: 'bar' },
    ]];
    const result = CostsV5Actions.upload(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('costs/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ costs: JSON.stringify(pay[0]) });
  });

  it('upload defaults', () => {
    const pay = [];
    const result = CostsV5Actions.upload(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('costs/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ costs: JSON.stringify([]) });
  });

  it('fetch', () => {
    const pay = [123];
    const result = CostsV5Actions.fetch(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('costs/123');
    expect(method).toEqual(METHODS.GET);
  });

  it('update', () => {
    const pay = [{ id: '123' }];
    const result = CostsV5Actions.update(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('costs/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ cost: JSON.stringify(pay[0]) });
  });

  it('update defaults', () => {
    const pay = [];
    const result = CostsV5Actions.update(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('costs/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ cost: JSON.stringify({}) });
  });
});
