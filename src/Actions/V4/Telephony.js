import Previous from '../V3/Telephony';
import { METHODS } from '../../constants';

const updateSettings = (configuration = {}) => ({
  uri: `telephony/setting/${configuration.code}/edit`,
  method: METHODS.POST,
  body: {
    configuration: JSON.stringify(configuration),
  },
});

export default {
  ...Previous,
  updateSettings,
};
