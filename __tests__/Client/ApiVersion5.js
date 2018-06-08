import Client from '../../src/Client/Client';
import ApiVersion5 from '../../src/Client/ApiVersion5';

const options = {
  url: 'https://www.google.ru/',
  apiKey: 'secret key',
  siteCode: 'site',
  version: 'v5',
};

describe('ApiVersion5', () => {
  it('constructor', () => {
    const apiVersion5 = new ApiVersion5(options);
    expect(apiVersion5).toBeInstanceOf(ApiVersion5);
    expect(apiVersion5).toBeInstanceOf(Client);
  });
});
