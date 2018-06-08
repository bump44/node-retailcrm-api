import { METHODS } from '../../constants';

const fetchSettings = (code) => ({
  uri: `delivery/generic/setting/${code}`,
  method: METHODS.GET,
});

const updateSettings = (configuration = {}) => ({
  uri: `delivery/generic/setting/${configuration.code}/edit`,
  method: METHODS.POST,
  body: {
    configuration: JSON.stringify(configuration),
  },
});

const tracking = (code, statusUpdate) => ({
  uri: `delivery/generic/${code}/tracking`,
  method: METHODS.POST,
  body: {
    statusUpdate: JSON.stringify(statusUpdate),
  },
});

export default {
  fetchSettings,
  tracking,
  updateSettings,
};
