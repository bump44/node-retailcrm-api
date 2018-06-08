import StatisticActions from '../../../src/Actions/V3/Statistic';
import { METHODS } from '../../../src/constants';

describe('Actions - V3 - Statistic', () => {
  it('listUpdate', () => {
    const pay = [];
    const result = StatisticActions.listUpdate(...pay);
    const { uri, method } = result;
    expect(uri).toEqual('statistic/update');
    expect(method).toEqual(METHODS.GET);
  });
});
