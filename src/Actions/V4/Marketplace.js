import { METHODS } from '../../constants';

const updateSettings = (configuration = {}) => ({
  uri: `marketplace/external/setting/${configuration.code}/edit`,
  method: METHODS.POST,
  body: {
    configuration: JSON.stringify(configuration),
  },
});

export default {
  updateSettings,
};
