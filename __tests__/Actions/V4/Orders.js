import OrdersV3Actions from '../../../src/Actions/V3/Orders';
import OrdersV4Actions from '../../../src/Actions/V4/Orders';

describe('Actions - V4 - Orders', () => {
  it('equals', () => {
    expect(Object.keys(OrdersV4Actions)).toEqual(expect.arrayContaining(Object.keys(OrdersV3Actions)));
  });
});
