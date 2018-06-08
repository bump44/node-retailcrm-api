import PacksActions from '../../../src/Actions/V3/Packs';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - Packs', () => {
  it('list', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ someField: 1 }, 3, 20],
      result: {
        uri: 'orders/packs',
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
        uri: 'orders/packs',
        method: METHODS.GET,
        qs: {},
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(PacksActions.list(...pay)).toEqual(result);
    });
  });

  it('create', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ externalId: '123' }],
      result: {
        uri: 'orders/packs/create',
        method: METHODS.POST,
        body: {
          pack: JSON.stringify({ externalId: '123' }),
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'orders/packs/create',
        method: METHODS.POST,
        body: {
          pack: JSON.stringify({}),
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(PacksActions.create(...pay)).toEqual(result);
    });
  });

  it('findById', () => {
    const checkResults = [];

    checkResults.push({
      pay: ['123'],
      result: {
        uri: 'orders/packs/123',
        method: METHODS.GET,
        qs: {},
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(PacksActions.findById(...pay)).toEqual(result);
    });
  });

  it('updateById', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ id: '123' }],
      result: {
        uri: 'orders/packs/123/edit',
        method: METHODS.POST,
        body: {
          pack: JSON.stringify({ id: '123' }),
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'orders/packs/undefined/edit',
        method: METHODS.POST,
        body: {
          pack: JSON.stringify({}),
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(PacksActions.updateById(...pay)).toEqual(result);
    });
  });

  it('removeById', () => {
    const checkResults = [];

    checkResults.push({
      pay: ['123'],
      result: {
        uri: 'orders/packs/123/delete',
        method: METHODS.POST,
        qs: {},
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'orders/packs/undefined/delete',
        method: METHODS.POST,
        qs: {},
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(PacksActions.removeById(...pay)).toEqual(result);
    });
  });

  it('history', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ someField: 1 }, 3, 20],
      result: {
        uri: 'orders/packs/history',
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
        uri: 'orders/packs/history',
        method: METHODS.GET,
        qs: {},
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(PacksActions.history(...pay)).toEqual(result);
    });
  });
});
