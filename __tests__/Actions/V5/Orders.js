import OrdersV3Actions from '../../../src/Actions/V3/Orders';
import OrdersV5Actions, { combine } from '../../../src/Actions/V5/Orders';
import { METHODS, TECHNIQUES } from '../../../src/constants';

describe('Actions - V5 - Orders', () => {
  it('equals', () => {
    expect(OrdersV5Actions).toEqual({
      ...OrdersV3Actions,
      combine,
    });
  });
  it('combine', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ someField: 1 }, { someField: 2 }, TECHNIQUES[0]],
      result: {
        uri: 'orders/combine',
        method: METHODS.POST,
        body: {
          technique: TECHNIQUES[0],
          order: JSON.stringify({ someField: 1 }),
          resultOrder: JSON.stringify({ someField: 2 }),
        },
      },
    });

    checkResults.push({
      pay: [{ someField: 'aa' }, { someField1: 'bb' }],
      result: {
        uri: 'orders/combine',
        method: METHODS.POST,
        body: {
          technique: TECHNIQUES[0],
          order: JSON.stringify({ someField: 'aa' }),
          resultOrder: JSON.stringify({ someField1: 'bb' }),
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(combine(...pay)).toEqual(result);
    });
  });
});
