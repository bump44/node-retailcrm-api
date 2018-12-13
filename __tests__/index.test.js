import RetailCRM from '../src';

describe('index', () => {
  it('Should return versions', () => {
    expect(RetailCRM.VERSIONS).toBeDefined();
    expect(RetailCRM.VERSIONS).toBeInstanceOf(Object);
  });
  it('Should create client #1', () => {
    const clientTest = props => new RetailCRM(props);
    expect(
      clientTest.bind(null, {
        url: 'http://',
        apiKey: 'key',
        siteCode: 'site',
      }),
    ).toThrow();
    expect(
      clientTest.bind(null, {
        url: 'http://',
        apiKey: 'key',
        siteCode: 'site',
        version: RetailCRM.VERSIONS.V5,
      }),
    ).toThrow();
  });
  it('Should create client #2', () => {
    const clientTest = props => new RetailCRM.Client(props);
    expect(
      clientTest.bind(null, {
        url: 'http://',
        apiKey: 'key',
        siteCode: 'site',
      }),
    ).toThrow();
    expect(
      clientTest.bind(null, {
        url: 'http://',
        apiKey: 'key',
        siteCode: 'site',
        version: RetailCRM.VERSIONS.V5,
      }),
    ).toThrow();
  });
  it('Should thrown error on create client', () => {
    const clientTest = props => new RetailCRM.Client(props);
    const clientTest1 = props => new RetailCRM(props);

    expect(clientTest).toThrow();
    expect(clientTest1).toThrow();

    expect(
      clientTest.bind(null, {
        url: '123',
      }),
    ).toThrow();

    expect(
      clientTest1.bind(null, {
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
      clientTest1.bind(null, {
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
      clientTest1.bind(null, {
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
      clientTest1.bind(null, {
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
      clientTest1.bind(null, {
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

    expect(
      clientTest1.bind(null, {
        url: 'http://',
        apiKey: 'key',
        siteCode: 'site',
        version: 'empty',
      }),
    ).toThrow();
  });
});
