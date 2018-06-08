import Previous from '../V4/References';
import { METHODS } from '../../constants';

const listCostGroups = () => ({
  uri: 'reference/cost-groups',
  method: METHODS.GET,
});

const updateCostGroup = (costGroup = {}) => ({
  uri: `reference/cost-groups/${costGroup.code}/edit`,
  method: METHODS.POST,
  body: {
    costGroup: JSON.stringify(costGroup),
  },
});

const listCostItems = () => ({
  uri: 'reference/cost-items',
  method: METHODS.GET,
});

const updateCostItem = (costItem = {}) => ({
  uri: `reference/cost-items/${costItem.code}/edit`,
  method: METHODS.POST,
  body: {
    costItem: JSON.stringify(costItem),
  },
});

const listLegalEntities = () => ({
  uri: 'reference/legal-entities',
  method: METHODS.GET,
});

const updateLegalEntity = (legalEntity = {}) => ({
  uri: `reference/legal-entities/${legalEntity.code}/edit`,
  method: METHODS.POST,
  body: {
    legalEntity: JSON.stringify(legalEntity),
  },
});

const listCouriers = () => ({
  uri: 'reference/couriers',
  method: METHODS.GET,
});

const createCourier = (courier = {}) => ({
  uri: 'reference/couriers/create',
  method: METHODS.POST,
  body: {
    courier: JSON.stringify(courier),
  },
});

const updateCourier = (courier = {}) => ({
  uri: `reference/couriers/${courier.id}/edit`,
  method: METHODS.POST,
  body: {
    courier: JSON.stringify(courier),
  },
});

export default {
  ...Previous,
  listCostGroups,
  updateCostGroup,
  listCostItems,
  updateCostItem,
  listLegalEntities,
  updateLegalEntity,
  listCouriers,
  createCourier,
  updateCourier,
};
