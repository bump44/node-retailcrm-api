import ApiVersion5 from './Client/ApiVersion5';

import { VERSIONS } from './constants';
import {
  ErrorParameterType,
  ErrorParameterInvalid,
  ErrorParameterRequired,
  ErrorParameterENUM,
} from './errors';

function RetailCRM({ url, apiKey, version = VERSIONS.V5, siteCode } = {}) {
  if (typeof url !== 'string') {
    throw new ErrorParameterType('url', url, 'string');
  }

  if (!/^http.+/g.test(url)) {
    throw new ErrorParameterInvalid('url');
  }

  if (typeof apiKey !== 'string') {
    throw new ErrorParameterType('apiKey', apiKey, 'string');
  }

  if (!apiKey) {
    throw new ErrorParameterRequired('apiKey');
  }

  if (siteCode !== undefined && typeof siteCode !== 'string') {
    throw new ErrorParameterType('siteCode', siteCode, 'string');
  }

  const props = { url, apiKey, siteCode };

  switch (version) {
    case VERSIONS.V5:
      return new ApiVersion5(props);
    default:
      throw new ErrorParameterENUM('version', version, VERSIONS);
  }
}

RetailCRM.VERSIONS = VERSIONS;
RetailCRM.Client = RetailCRM;

export default RetailCRM;
