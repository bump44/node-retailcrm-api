import CustomersActions from '../../../src/Actions/V3/Customers';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - Customers', () => {
  it('list', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ someField: 1 }, 3, 20],
      result: {
        uri: 'customers',
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
        uri: 'customers',
        method: METHODS.GET,
        qs: {},
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(CustomersActions.list(...pay)).toEqual(result);
    });
  });

  it('create', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ externalId: '123' }],
      result: {
        uri: 'customers/create',
        method: METHODS.POST,
        body: {
          customer: JSON.stringify({ externalId: '123' }),
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'customers/create',
        method: METHODS.POST,
        body: {
          customer: JSON.stringify({}),
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(CustomersActions.create(...pay)).toEqual(result);
    });
  });


  it('fixExternalIds', () => {
    const checkResults = [];

    checkResults.push({
      pay: [['123', '456']],
      result: {
        uri: 'customers/fix-external-ids',
        method: METHODS.POST,
        body: {
          customers: JSON.stringify(['123', '456']),
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'customers/fix-external-ids',
        method: METHODS.POST,
        body: {
          customers: JSON.stringify([]),
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(CustomersActions.fixExternalIds(...pay)).toEqual(result);
    });
  });

  it('upload', () => {
    const checkResults = [];

    checkResults.push({
      pay: [[{ id: '123' }, { id: '456' }]],
      result: {
        uri: 'customers/upload',
        method: METHODS.POST,
        body: {
          customers: JSON.stringify([{ id: '123' }, { id: '456' }]),
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'customers/upload',
        method: METHODS.POST,
        body: {
          customers: JSON.stringify([]),
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(CustomersActions.upload(...pay)).toEqual(result);
    });
  });

  it('findById', () => {
    const checkResults = [];

    checkResults.push({
      pay: ['123'],
      result: {
        uri: 'customers/123',
        method: METHODS.GET,
        qs: {
          by: 'id',
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(CustomersActions.findById(...pay)).toEqual(result);
    });
  });

  it('findByExternalId', () => {
    const checkResults = [];

    checkResults.push({
      pay: ['123'],
      result: {
        uri: 'customers/123',
        method: METHODS.GET,
        qs: {
          by: 'externalId',
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(CustomersActions.findByExternalId(...pay)).toEqual(result);
    });
  });

  it('updateById', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ id: '123' }],
      result: {
        uri: 'customers/123/edit',
        method: METHODS.POST,
        body: {
          customer: JSON.stringify({ id: '123' }),
          by: 'id',
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'customers/undefined/edit',
        method: METHODS.POST,
        body: {
          customer: JSON.stringify({}),
          by: 'id',
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(CustomersActions.updateById(...pay)).toEqual(result);
    });
  });

  it('updateByExternalId', () => {
    const checkResults = [];

    checkResults.push({
      pay: [{ externalId: '123' }],
      result: {
        uri: 'customers/123/edit',
        method: METHODS.POST,
        body: {
          customer: JSON.stringify({ externalId: '123' }),
          by: 'externalId',
        },
      },
    });

    checkResults.push({
      pay: [],
      result: {
        uri: 'customers/undefined/edit',
        method: METHODS.POST,
        body: {
          customer: JSON.stringify({}),
          by: 'externalId',
        },
      },
    });

    checkResults.forEach((check) => {
      const { pay, result } = check;
      expect(CustomersActions.updateByExternalId(...pay)).toEqual(result);
    });
  });
});
