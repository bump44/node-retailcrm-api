import Previous from '../V4/Users';
import { USER_STATUSES, METHODS } from '../../constants';

const updateStatus = (user, status = USER_STATUSES.FREE) => ({
  uri: `users/${
    user && typeof user === 'object' && user.id ? user.id : user
  }/status`,
  method: METHODS.POST,
  body: {
    status,
  },
});

export default {
  ...Previous,
  updateStatus,
};
