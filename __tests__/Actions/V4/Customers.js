import CustomersV3Actions from '../../../src/Actions/V3/Customers';
import CustomersV4Actions from '../../../src/Actions/V4/Customers';
import { METHODS } from '../../../src/constants';

describe('Actions - V4 - Customers', () => {
  it('equals', () => {
    expect(Object.keys(CustomersV4Actions)).toEqual(
      expect.arrayContaining(Object.keys(CustomersV3Actions)),
    );
  });

  it('history', () => {
    const pay = [{}, 1, 20];
    const result = CustomersV4Actions.history(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('customers/history');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('history defaults', () => {
    const pay = [];
    const result = CustomersV4Actions.history(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('customers/history');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });
});
