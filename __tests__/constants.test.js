import { METHODS, VERSIONS, TECHNIQUES } from '../src/constants';

describe('constants', () => {
  it('METHODS', () => {
    expect(METHODS.GET).toEqual('get');
    expect(METHODS.POST).toEqual('post');
  });
  it('VERSIONS', () => {
    expect(VERSIONS.V5).toEqual('v5');
  });
  it('TECHNIQUES', () => {
    expect(TECHNIQUES).toEqual(expect.arrayContaining(['ours', 'summ', 'theirs']));
  });
});
