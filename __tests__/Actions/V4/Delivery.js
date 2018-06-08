import DeliveryV4Actions from '../../../src/Actions/V4/Delivery';
import { METHODS } from '../../../src/constants';

describe('Actions - V4 - Delivery', () => {
  it('fetchSettings', () => {
    const pay = [123];
    const result = DeliveryV4Actions.fetchSettings(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('delivery/generic/setting/123');
    expect(method).toEqual(METHODS.GET);
  });

  it('updateSettings', () => {
    const pay = [{ code: '123' }];
    const result = DeliveryV4Actions.updateSettings(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('delivery/generic/setting/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ configuration: JSON.stringify(pay[0]) });
  });

  it('updateSettings defaults', () => {
    const pay = [];
    const result = DeliveryV4Actions.updateSettings(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('delivery/generic/setting/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ configuration: JSON.stringify({}) });
  });

  it('tracking', () => {
    const pay = [123, { data: 'aaa' }];
    const result = DeliveryV4Actions.tracking(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('delivery/generic/123/tracking');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ statusUpdate: JSON.stringify(pay[1]) });
  });
});
