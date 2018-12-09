import Client from '../../src/Client/Client';
import HttpResponse from '../../src/Response/HttpResponse';

const options = {
  url: 'https://www.google.ru/',
  apiKey: 'secret key',
  siteCode: 'site',
  version: 'v5',
};

const client = new Client(options);

describe('Client', () => {
  it('request url then', () =>
    client
      .request({
        url: 'https://www.google.ru/',
      })
      .then(httpResponse => expect(httpResponse).toBeInstanceOf(HttpResponse)));

  it('request url catch', () =>
    client
      .request({
        url: 'http://google.ru/404',
      })
      .then(httpResponse => expect(httpResponse).toBeInstanceOf(HttpResponse)));

  it('buildRequestApiUrl', () => {
    expect(client.buildRequestApiUrl('entity')).toEqual(
      'https://www.google.ru/api/v5/entity',
    );
    expect(client.buildRequestApiUrl('entity/create')).toEqual(
      'https://www.google.ru/api/v5/entity/create',
    );
  });

  it('buildRequestOptions', () => {
    expect(client.buildRequestOptions()).toEqual({
      json: true,
      method: undefined,
      qs: {
        apiKey: options.apiKey,
      },
      resolveWithFullResponse: true,
      uri: undefined,
    });

    expect(
      client.buildRequestOptions({
        body: {
          someField: 1,
        },
      }),
    ).toEqual({
      uri: undefined,
      resolveWithFullResponse: true,
      json: true,
      method: undefined,
      body: {
        site: options.siteCode,
        someField: 1,
      },
      qs: {
        apiKey: options.apiKey,
      },
    });

    expect(
      client.buildRequestOptions({
        body: {
          payload: {
            aaa: 'bbb',
          },
        },
        qs: {
          by: 'id',
          query: 'aaa',
        },
        url: 'http',
        method: 'none',
      }),
    ).toEqual({
      uri: 'http',
      resolveWithFullResponse: true,
      json: true,
      method: 'none',
      body: {
        site: options.siteCode,
        payload: {
          aaa: 'bbb',
        },
      },
      qs: {
        apiKey: options.apiKey,
        by: 'id',
        query: 'aaa',
      },
    });
  });

  it('getSite', () => {
    expect(client.getSite()).toEqual(options.siteCode);
  });

  it('setSite', () => {
    client.setSite('qwerty');
    expect(client.getSite()).toEqual('qwerty');
    client.setSite(options.siteCode);
  });

  it('availableVersions', () =>
    client
      .availableVersions()
      .then(httpResponse => expect(httpResponse).toBeInstanceOf(HttpResponse)));

  it('credentials', () =>
    client
      .credentials()
      .then(httpResponse => expect(httpResponse).toBeInstanceOf(HttpResponse)));

  it('implementMethods', () => {
    const methods = {
      someMethod: () => {},
    };

    client.implementMethods('testing', methods);
    expect(Object.keys(client.testing)).toEqual(
      expect.arrayContaining(['someMethod']),
    );
    return client.testing
      .someMethod()
      .then(httpResponse => expect(httpResponse).toBeInstanceOf(HttpResponse));
  });
});
