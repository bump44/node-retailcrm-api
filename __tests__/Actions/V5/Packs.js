import PacksV4Actions from '../../../src/Actions/V4/Packs';
import PacksV5Actions from '../../../src/Actions/V5/Packs';

describe('Actions - V5 - Packs', () => {
  it('equals', () => {
    expect(PacksV5Actions).toEqual(PacksV4Actions);
  });
});
