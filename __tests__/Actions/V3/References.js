import ReferencesActions from '../../../src/Actions/V3/References';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - References', () => {
  it('orderMethodsList', () => {
    const checkResults = [];

    checkResults.push({
      pay: [],
      result: {
        uri: 'reference/order-methods',
        method: METHODS.GET,
        qs: {},
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(ReferencesActions.orderMethodsList(...pay)).toEqual(result);
    });
  });
  it('orderTypesList', () => {
    const checkResults = [];

    checkResults.push({
      pay: [],
      result: {
        uri: 'reference/order-types',
        method: METHODS.GET,
        qs: {},
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(ReferencesActions.orderTypesList(...pay)).toEqual(result);
    });
  });
});
