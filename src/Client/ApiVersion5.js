import Client from './Client';
import { VERSIONS } from '../constants';

import OrdersActions from '../Actions/V5/Orders';

class ApiVersion5 extends Client {
  constructor({
    url,
    apiKey,
    siteCode,
  }) {
    super({
      url,
      apiKey,
      siteCode,
      version: VERSIONS.V5,
    });

    this.implementMethods('orders', OrdersActions);
  }
}

export default ApiVersion5;
