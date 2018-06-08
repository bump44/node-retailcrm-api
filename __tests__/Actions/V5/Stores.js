import StoresV4Actions from '../../../src/Actions/V4/Stores';
import StoresV5Actions from '../../../src/Actions/V5/Stores';

describe('Actions - V5 - Stores', () => {
  it('equals', () => {
    expect(StoresV5Actions).toEqual(StoresV4Actions);
  });
});
