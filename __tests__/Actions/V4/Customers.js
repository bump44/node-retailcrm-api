import CustomersV3Actions from '../../../src/Actions/V3/Customers';
import CustomersV4Actions from '../../../src/Actions/V4/Customers';

describe('Actions - V4 - Customers', () => {
  it('equals', () => {
    expect(CustomersV4Actions).toEqual(CustomersV3Actions);
  });
});
