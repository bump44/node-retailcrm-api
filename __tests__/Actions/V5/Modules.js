import ModulesV5Actions from '../../../src/Actions/V5/Modules';
import { METHODS } from '../../../src/constants';

describe('Actions - V5 - Modules', () => {
  it('fetch', () => {
    const pay = [123];
    const result = ModulesV5Actions.fetch(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('integration-modules/123');
    expect(method).toEqual(METHODS.GET);
  });

  it('update', () => {
    const pay = [{ code: '123' }];
    const result = ModulesV5Actions.update(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('integration-modules/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ integrationModule: JSON.stringify(pay[0]) });
  });

  it('update defaults', () => {
    const pay = [];
    const result = ModulesV5Actions.update(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('integration-modules/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ integrationModule: JSON.stringify({}) });
  });
});
