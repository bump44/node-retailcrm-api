import StoresActions from '../../../src/Actions/V3/Stores';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - Stores', () => {
  it('inventories', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ someField: 1 }, 3, 20],
      result: {
        uri: 'store/inventories',
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
        uri: 'store/inventories',
        method: METHODS.GET,
        qs: {},
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(StoresActions.inventories(...pay)).toEqual(result);
    });
  });

  it('inventoriesUpload', () => {
    const checkResults = [];

    checkResults.push({
      pay: [[{ id: '123' }, { id: '456' }]],
      result: {
        uri: 'store/inventories/upload',
        method: METHODS.POST,
        body: {
          offers: JSON.stringify([{ id: '123' }, { id: '456' }]),
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'store/inventories/upload',
        method: METHODS.POST,
        body: {
          offers: JSON.stringify([]),
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(StoresActions.inventoriesUpload(...pay)).toEqual(result);
    });
  });
});
