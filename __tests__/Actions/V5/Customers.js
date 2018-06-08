import CustomersV4Actions from '../../../src/Actions/V4/Customers';
import CustomersV5Actions from '../../../src/Actions/V5/Customers';

describe('Actions - V5 - Customers', () => {
  it('equals', () => {
    expect(CustomersV5Actions).toEqual(CustomersV4Actions);
  });
});
