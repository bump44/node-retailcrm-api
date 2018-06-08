import ReferencesV4Actions from '../../../src/Actions/V4/References';
import ReferencesV5Actions from '../../../src/Actions/V5/References';

describe('Actions - V5 - References', () => {
  it('equals', () => {
    expect(ReferencesV5Actions).toEqual(ReferencesV4Actions);
  });
});
