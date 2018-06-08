import OrdersActions from '../../../src/Actions/V3/Orders';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - Orders', () => {
  it('list', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ someField: 1 }, 3, 20],
      result: {
        uri: 'orders',
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
        uri: 'orders',
        method: METHODS.GET,
        qs: {},
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(OrdersActions.list(...pay)).toEqual(result);
    });
  });

  it('create', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ externalId: '123' }],
      result: {
        uri: 'orders/create',
        method: METHODS.POST,
        body: {
          order: JSON.stringify({ externalId: '123' }),
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'orders/create',
        method: METHODS.POST,
        body: {
          order: JSON.stringify({}),
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(OrdersActions.create(...pay)).toEqual(result);
    });
  });


  it('fixExternalIds', () => {
    const checkResults = [];

    checkResults.push({
      pay: [['123', '456']],
      result: {
        uri: 'orders/fix-external-ids',
        method: METHODS.POST,
        body: {
          orders: JSON.stringify(['123', '456']),
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'orders/fix-external-ids',
        method: METHODS.POST,
        body: {
          orders: JSON.stringify([]),
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(OrdersActions.fixExternalIds(...pay)).toEqual(result);
    });
  });

  it('statuses', () => {
    const checkResults = [];

    checkResults.push({
      pay: [['123'], ['456']],
      result: {
        uri: 'orders/statuses',
        method: METHODS.GET,
        qs: {
          ids: ['123'],
          externalIds: ['456'],
        },
      },
    });


    checkResults.push({
      pay: [],
      result: {
        uri: 'orders/statuses',
        method: METHODS.GET,
        qs: {
          ids: [],
          externalIds: [],
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(OrdersActions.statuses(...pay)).toEqual(result);
    });
  });

  it('upload', () => {
    const checkResults = [];

    checkResults.push({
      pay: [[{ id: '123' }, { id: '456' }]],
      result: {
        uri: 'orders/upload',
        method: METHODS.POST,
        body: {
          orders: JSON.stringify([{ id: '123' }, { id: '456' }]),
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'orders/upload',
        method: METHODS.POST,
        body: {
          orders: JSON.stringify([]),
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(OrdersActions.upload(...pay)).toEqual(result);
    });
  });

  it('findById', () => {
    const checkResults = [];

    checkResults.push({
      pay: ['123'],
      result: {
        uri: 'orders/123',
        method: METHODS.GET,
        qs: {
          by: 'id',
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(OrdersActions.findById(...pay)).toEqual(result);
    });
  });

  it('findByExternalId', () => {
    const checkResults = [];

    checkResults.push({
      pay: ['123'],
      result: {
        uri: 'orders/123',
        method: METHODS.GET,
        qs: {
          by: 'externalId',
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(OrdersActions.findByExternalId(...pay)).toEqual(result);
    });
  });

  it('updateById', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ id: '123' }],
      result: {
        uri: 'orders/123/edit',
        method: METHODS.POST,
        body: {
          order: JSON.stringify({ id: '123' }),
          by: 'id',
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'orders/undefined/edit',
        method: METHODS.POST,
        body: {
          order: JSON.stringify({}),
          by: 'id',
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(OrdersActions.updateById(...pay)).toEqual(result);
    });
  });

  it('updateByExternalId', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ externalId: '123' }],
      result: {
        uri: 'orders/123/edit',
        method: METHODS.POST,
        body: {
          order: JSON.stringify({ externalId: '123' }),
          by: 'externalId',
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'orders/undefined/edit',
        method: METHODS.POST,
        body: {
          order: JSON.stringify({}),
          by: 'externalId',
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(OrdersActions.updateByExternalId(...pay)).toEqual(result);
    });
  });

  it('history', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ someField: 1 }, 3, 20],
      result: {
        uri: 'orders/history',
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
        uri: 'orders/history',
        method: METHODS.GET,
        qs: {},
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(OrdersActions.history(...pay)).toEqual(result);
    });
  });
});
