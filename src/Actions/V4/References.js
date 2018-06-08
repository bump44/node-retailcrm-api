import Previous from '../V3/References';
import { METHODS } from '../../constants';

const listPriceTypes = () => ({
  uri: 'reference/price-types',
  method: METHODS.GET,
});

const updatePriceType = (priceType = {}) => ({
  uri: `reference/price-types/${priceType.code}/edit`,
  method: METHODS.POST,
  body: {
    priceType: JSON.stringify(priceType),
  },
});

export default {
  ...Previous,
  listPriceTypes,
  updatePriceType,
};
