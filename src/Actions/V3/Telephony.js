import { METHODS } from '../../constants';

const fetchSettings = code => ({
  uri: `telephony/setting/${code}`,
  method: METHODS.GET,
});

const createCallEvent = (eventProps = {}) => ({
  uri: 'telephony/call/event',
  method: METHODS.POST,
  body: {
    event: JSON.stringify(eventProps),
  },
});

const uploadCalls = (calls = []) => ({
  uri: 'telephony/calls/upload',
  method: METHODS.POST,
  body: {
    calls: JSON.stringify(calls),
  },
});

const managerCall = (phone, details) => ({
  uri: 'telephony/manager',
  method: METHODS.GET,
  qs: {
    phone,
    details: details !== undefined ? details : 0,
  },
});

export default {
  fetchSettings,
  createCallEvent,
  uploadCalls,
  managerCall,
};
