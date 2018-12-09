import UsersV4Actions from '../../../src/Actions/V4/Users';
import UsersV5Actions from '../../../src/Actions/V5/Users';
import { METHODS, USER_STATUSES } from '../../../src/constants';

describe('Actions - V5 - Users', () => {
  it('equals', () => {
    expect(Object.keys(UsersV5Actions)).toEqual(
      expect.arrayContaining(Object.keys(UsersV4Actions)),
    );
  });

  it('updateStatus (object)', () => {
    const pay = [{ id: '123' }, USER_STATUSES.BUSY];
    const result = UsersV5Actions.updateStatus(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('users/123/status');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ status: pay[1] });
  });

  it('updateStatus (string)', () => {
    const pay = ['123', USER_STATUSES.BUSY];
    const result = UsersV5Actions.updateStatus(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('users/123/status');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ status: pay[1] });
  });

  it('updateStatus (number)', () => {
    const pay = [123, USER_STATUSES.BUSY];
    const result = UsersV5Actions.updateStatus(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('users/123/status');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ status: pay[1] });
  });

  it('updateStatus defaults', () => {
    const pay = [];
    const result = UsersV5Actions.updateStatus(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('users/undefined/status');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ status: USER_STATUSES.FREE });
  });
});
