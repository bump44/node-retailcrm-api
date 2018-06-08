import ReferencesV3Actions from '../../../src/Actions/V3/References';
import ReferencesV4Actions from '../../../src/Actions/V4/References';
import { METHODS } from '../../../src/constants';

describe('Actions - V4 - References', () => {
  it('equals', () => {
    expect(Object.keys(ReferencesV4Actions)).toEqual(expect.arrayContaining(Object.keys(ReferencesV3Actions)));
  });

  it('listPriceTypes', () => {
    const pay = [];
    const result = ReferencesV4Actions.listPriceTypes(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('reference/price-types');
    expect(method).toEqual(METHODS.GET);
  });

  it('updatePriceType', () => {
    const pay = [{ code: '123' }];
    const result = ReferencesV4Actions.updatePriceType(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/price-types/123/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ priceType: JSON.stringify(pay[0]) });
  });

  it('updatePriceType defaults', () => {
    const pay = [];
    const result = ReferencesV4Actions.updatePriceType(...pay);
    const { uri, method, body } = result;
    expect(uri).toEqual('reference/price-types/undefined/edit');
    expect(method).toEqual(METHODS.POST);
    expect(body).toEqual({ priceType: JSON.stringify({}) });
  });
});
