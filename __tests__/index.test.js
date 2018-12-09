import RetailCRM from '../src';

describe('index', () => {
  it('Client', () => {
    const clientTest = props => new RetailCRM.Client(props);

    expect(clientTest).toThrow();
    expect(
      clientTest.bind(null, {
        url: '123',
      }),
    ).toThrow();
    expect(
      clientTest.bind(null, {
        url: 'http://',
        apiKey: '',
      }),
    ).toThrow();
    expect(
      clientTest.bind(null, {
        url: 'http://',
        apiKey: undefined,
      }),
    ).toThrow();
    expect(
      clientTest.bind(null, {
        url: 'http://',
        apiKey: 'key',
      }),
    ).toThrow();
    expect(
      clientTest.bind(null, {
        url: 'http://',
        apiKey: 'key',
        siteCode: true,
      }),
    ).toThrow();
    expect(
      clientTest.bind(null, {
        url: 'http://',
        apiKey: 'key',
        siteCode: 'site',
        version: 'empty',
      }),
    ).toThrow();

    // valid
    expect(
      clientTest.bind(null, {
        url: 'http://',
        apiKey: 'key',
        siteCode: 'site',
      }),
    ).toThrow();
  });
});
