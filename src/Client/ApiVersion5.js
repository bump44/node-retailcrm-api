import Client from './Client';
import { VERSIONS } from '../constants';

import CostsActions from '../Actions/V5/Costs';
import CustomersActions from '../Actions/V5/Customers';
import CustomFieldsActions from '../Actions/V5/CustomFields';
import DeliveryActions from '../Actions/V5/Delivery';
import ModulesActions from '../Actions/V5/Modules';
import OrdersActions from '../Actions/V5/Orders';
import PacksActions from '../Actions/V5/Packs';
import ReferencesActions from '../Actions/V5/References';
import SegmentsActions from '../Actions/V5/Segments';
import StatisticActions from '../Actions/V5/Statistic';
import StoresActions from '../Actions/V5/Stores';
import TasksActions from '../Actions/V5/Tasks';
import TelephonyActions from '../Actions/V5/Telephony';
import UsersActions from '../Actions/V5/Users';

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

    this
      .implementMethods('costs', CostsActions)
      .implementMethods('customers', CustomersActions)
      .implementMethods('customfields', CustomFieldsActions)
      .implementMethods('delivery', DeliveryActions)
      .implementMethods('modules', ModulesActions)
      .implementMethods('orders', OrdersActions)
      .implementMethods('packs', PacksActions)
      .implementMethods('references', ReferencesActions)
      .implementMethods('segments', SegmentsActions)
      .implementMethods('statistic', StatisticActions)
      .implementMethods('stores', StoresActions)
      .implementMethods('tasks', TasksActions)
      .implementMethods('telephony', TelephonyActions)
      .implementMethods('users', UsersActions);
  }
}

export default ApiVersion5;
