import ReferencesV4Actions from '../../../src/Actions/V4/References';
import ReferencesV5Actions from '../../../src/Actions/V5/References';
import { METHODS } from '../../../src/constants';

describe('Actions - V5 - References', () => {
  it('equals', () => {
    expect(Object.keys(ReferencesV5Actions)).toEqual(expect.arrayContaining(Object.keys(ReferencesV4Actions)));
  });

  it('listCostGroups', () => {
    const pay = [];
    const result = ReferencesV5Actions.listCostGroups(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/cost-groups');
    expect(method).toEqual(METHODS.GET);
  });

  it('listCostItems', () => {
    const pay = [];
    const result = ReferencesV5Actions.listCostItems(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/cost-items');
    expect(method).toEqual(METHODS.GET);
  });

  it('listLegalEntities', () => {
    const pay = [];
    const result = ReferencesV5Actions.listLegalEntities(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/legal-entities');
    expect(method).toEqual(METHODS.GET);
  });

  it('listCouriers', () => {
    const pay = [];
    const result = ReferencesV5Actions.listCouriers(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/couriers');
    expect(method).toEqual(METHODS.GET);
  });

  it('updateCostGroup', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesV5Actions.updateCostGroup(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/cost-groups/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ costGroup: JSON.stringify(pay[0]) });
  });

  it('updateCostGroup defaults', () => {
    const pay = [];
    const result = ReferencesV5Actions.updateCostGroup(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/cost-groups/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ costGroup: JSON.stringify({}) });
  });

  it('updateCostItem', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesV5Actions.updateCostItem(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/cost-items/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ costItem: JSON.stringify(pay[0]) });
  });

  it('updateCostItem defaults', () => {
    const pay = [];
    const result = ReferencesV5Actions.updateCostItem(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/cost-items/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ costItem: JSON.stringify({}) });
  });

  it('updateLegalEntity', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesV5Actions.updateLegalEntity(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/legal-entities/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ legalEntity: JSON.stringify(pay[0]) });
  });

  it('updateLegalEntity defaults', () => {
    const pay = [];
    const result = ReferencesV5Actions.updateLegalEntity(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/legal-entities/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ legalEntity: JSON.stringify({}) });
  });

  it('updateCourier', () => {
    const pay = [{ id: '123' }];
    const result = ReferencesV5Actions.updateCourier(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/couriers/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ courier: JSON.stringify(pay[0]) });
  });

  it('updateCourier defaults', () => {
    const pay = [];
    const result = ReferencesV5Actions.updateCourier(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/couriers/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ courier: JSON.stringify({}) });
  });

  it('createCourier', () => {
    const pay = [{ aaa: 'bbb' }];
    const result = ReferencesV5Actions.createCourier(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/couriers/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ courier: JSON.stringify(pay[0]) });
  });

  it('createCourier defaults', () => {
    const pay = [];
    const result = ReferencesV5Actions.createCourier(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/couriers/create');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ courier: JSON.stringify({}) });
  });
});
