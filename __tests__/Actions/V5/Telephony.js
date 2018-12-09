import TelephonyV4Actions from '../../../src/Actions/V4/Telephony';
import TelephonyV5Actions from '../../../src/Actions/V5/Telephony';

describe('Actions - V5 - Telephony', () => {
  it('equals', () => {
    expect(Object.keys(TelephonyV5Actions)).toEqual(
      expect.arrayContaining(Object.keys(TelephonyV4Actions)),
    );
  });

  it('fetchSettings', () => {
    expect(() => {
      TelephonyV5Actions.fetchSettings();
    }).toThrow(/not\savailable/);
  });
});
