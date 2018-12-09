import TelephonyV3Actions from '../../../src/Actions/V3/Telephony';
import TelephonyV4Actions from '../../../src/Actions/V4/Telephony';
import { METHODS } from '../../../src/constants';

describe('Actions - V4 - Telephony', () => {
  it('equals', () => {
    expect(Object.keys(TelephonyV4Actions)).toEqual(
      expect.arrayContaining(Object.keys(TelephonyV3Actions)),
    );
  });

  it('updateSettings', () => {
    const pay = [{ code: '123' }];
    const result = TelephonyV4Actions.updateSettings(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('telephony/setting/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ configuration: JSON.stringify(pay[0]) });
  });

  it('updateSettings defaults', () => {
    const pay = [];
    const result = TelephonyV4Actions.updateSettings(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('telephony/setting/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ configuration: JSON.stringify({}) });
  });
});
