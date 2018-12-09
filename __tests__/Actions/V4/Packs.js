import PacksV3Actions from '../../../src/Actions/V3/Packs';
import PacksV4Actions from '../../../src/Actions/V4/Packs';

describe('Actions - V4 - Packs', () => {
  it('equals', () => {
    expect(Object.keys(PacksV4Actions)).toEqual(
      expect.arrayContaining(Object.keys(PacksV3Actions)),
    );
  });
});
