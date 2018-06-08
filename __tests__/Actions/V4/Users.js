import UsersV4Actions from '../../../src/Actions/V4/Users';
import { METHODS } from '../../../src/constants';

describe('Actions - V4 - Users', () => {
  it('list', () => {
    const pay = [{}, 1, 20];
    const result = UsersV4Actions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('users');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('list defaults', () => {
    const pay = [];
    const result = UsersV4Actions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('users');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('listGroups', () => {
    const pay = [1, 20];
    const result = UsersV4Actions.listGroups(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('users-groups');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ page: pay[0], limit: pay[1] });
  });

  it('listGroups defaults', () => {
    const pay = [];
    const result = UsersV4Actions.listGroups(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('users-groups');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ page: 1, limit: 20 });
  });

  it('fetch', () => {
    const pay = [123];
    const result = UsersV4Actions.fetch(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('users/123');
    expect(method).toEqual(METHODS.GET);
  });
});
