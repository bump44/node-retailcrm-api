import Previous from '../V4/Telephony';
import { ErrorMethodNotAvailable } from '../../errors';

const fetchSettings = () => {
  throw new ErrorMethodNotAvailable('fetchSetting');
};

export default {
  ...Previous,
  fetchSettings,
};
