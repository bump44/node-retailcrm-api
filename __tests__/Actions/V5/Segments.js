import SegmentsV5Actions from '../../../src/Actions/V5/Segments';
import { METHODS } from '../../../src/constants';

describe('Actions - V5 - Segments', () => {
  it('list', () => {
    const pay = [{}, 1, 20];
    const result = SegmentsV5Actions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('segments');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: pay[0], page: pay[1], limit: pay[2] });
  });

  it('list defaults', () => {
    const pay = [];
    const result = SegmentsV5Actions.list(...pay);
    const { uri, method, qs } = result;
    expect(uri).toEqual('segments');
    expect(method).toEqual(METHODS.GET);
    expect(qs).toEqual({ filter: {}, page: 1, limit: 20 });
  });
});
