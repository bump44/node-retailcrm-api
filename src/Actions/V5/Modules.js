import { METHODS } from '../../constants';

const fetch = code => ({
  uri: `integration-modules/${code}`,
  method: METHODS.GET,
});

const update = (integrationModule = {}) => ({
  uri: `integration-modules/${integrationModule.code}/edit`,
  method: METHODS.POST,
  body: {
    integrationModule: JSON.stringify(integrationModule),
  },
});

export default {
  fetch,
  update,
};
