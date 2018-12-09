import DeliveryV4Actions from '../../../src/Actions/V4/Delivery';
import DeliveryV5Actions from '../../../src/Actions/V5/Delivery';
import { METHODS } from '../../../src/constants';

describe('Actions - V5 - Delivery', () => {
  it('equals', () => {
    expect(Object.keys(DeliveryV5Actions)).toEqual(
      expect.arrayContaining(Object.keys(DeliveryV4Actions)),
    );
  });

  it('listShipments', () => {
    const pay = [{}, 1, 20];
    const result = DeliveryV5Actions.listShipments(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('delivery/shipments');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('listShipments defaults', () => {
    const pay = [];
    const result = DeliveryV5Actions.listShipments(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('delivery/shipments');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });

  it('createShipment', () => {
    const pay = [{ aaa: 'bbb' }, 'someType'];
    const result = DeliveryV5Actions.createShipment(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('delivery/shipments/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({
      deliveryShipment: JSON.stringify(pay[0]),
      deliveryType: pay[1],
    });
  });

  it('createShipment defaults', () => {
    const pay = [];
    const result = DeliveryV5Actions.createShipment(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('delivery/shipments/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({
      deliveryShipment: JSON.stringify({}),
      deliveryType: undefined,
    });
  });

  it('fetchShipment', () => {
    const pay = [123];
    const result = DeliveryV5Actions.fetchShipment(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('delivery/shipments/123');
    expect(method).toEqual(METHODS.GET);
  });

  it('updateShipment', () => {
    const pay = [{ id: '123' }];
    const result = DeliveryV5Actions.updateShipment(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('delivery/shipments/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ deliveryShipment: JSON.stringify(pay[0]) });
  });

  it('updateShipment defaults', () => {
    const pay = [];
    const result = DeliveryV5Actions.updateShipment(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('delivery/shipments/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ deliveryShipment: JSON.stringify({}) });
  });
});
