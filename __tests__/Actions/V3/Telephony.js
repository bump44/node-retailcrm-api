import TelephonyActions from '../../../src/Actions/V3/Telephony';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - Telephony', () => {
  it('uploadCalls', () => {
    const pay = [[
      { aaa: 'bbb' },
      { foo: 'bar' },
    ]];
    const result = TelephonyActions.uploadCalls(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('telephony/calls/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ calls: JSON.stringify(pay[0]) });
  });

  it('uploadCalls defaults', () => {
    const pay = [];
    const result = TelephonyActions.uploadCalls(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('telephony/calls/upload');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ calls: JSON.stringify([]) });
  });

  it('managerCall', () => {
    const pay = ['123', 2];
    const result = TelephonyActions.managerCall(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('telephony/manager');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ phone: '123', details: 2 });
  });

  it('managerCall defaults', () => {
    const pay = [];
    const result = TelephonyActions.managerCall(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('telephony/manager');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ phone: undefined, details: 0 });
  });

  it('createCallEvent', () => {
    const pay = [{
      phone: '123',
      codes: ['123', '456'],
      userIds: [1, 2, 3, 4],
      hangupStatus: 'answered',
      externalPhone: 'aaa',
      callExternalId: 'bbb',
      webAnalyticsData: {
        campaign: {
          name: 'ccc',
        },
      },
    }];
    const result = TelephonyActions.createCallEvent(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('telephony/call/event');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ event: JSON.stringify(pay[0]) });
  });

  it('createCallEvent defaults', () => {
    const pay = [];
    const result = TelephonyActions.createCallEvent(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('telephony/call/event');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ event: JSON.stringify({}) });
  });

  it('fetchSettings', () => {
    const pay = [123];
    const result = TelephonyActions.fetchSettings(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('telephony/setting/123');
    expect(method).toEqual(METHODS.GET);
  });
});
