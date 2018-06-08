import StoresV3Actions from '../../../src/Actions/V3/Stores';
import StoresV4Actions, { products } from '../../../src/Actions/V4/Stores';
import { METHODS } from '../../../src/constants';

describe('Actions - V4 - Stores', () => {
  it('equals', () => {
    expect(StoresV4Actions).toEqual({
      ...StoresV3Actions,
      products,
    });
  });
  it('products', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ someField: 1 }, 3, 20],
      result: {
        uri: 'store/products',
        method: METHODS.GET,
        qs: {
          filter: { someField: 1 },
          page: 3,
          limit: 20,
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'store/products',
        method: METHODS.GET,
        qs: {},
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(products(...pay)).toEqual(result);
    });
  });
});
