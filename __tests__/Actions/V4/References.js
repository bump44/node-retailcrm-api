import ReferencesV3Actions from '../../../src/Actions/V3/References';
import ReferencesV4Actions from '../../../src/Actions/V4/References';

describe('Actions - V4 - References', () => {
  it('equals', () => {
    expect(ReferencesV4Actions).toEqual(ReferencesV3Actions);
  });
});
