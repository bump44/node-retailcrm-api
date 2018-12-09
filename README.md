[![npm package](https://nodei.co/npm/node-retailcrm-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-retailcrm-api/)

[![Build Status](https://travis-ci.org/Omashu/node-retailcrm-api.svg?branch=master)](https://travis-ci.org/Omashu/node-retailcrm-api)
[![Coverage Status](https://coveralls.io/repos/github/Omashu/node-retailcrm-api/badge.svg?branch=master)](https://coveralls.io/github/Omashu/node-retailcrm-api?branch=master)

# RetailCRM node api client

This is retailCRM API client. This library allows to use API version:
- v5 😊

### Methods & Examples:
- costs
  - `list(filter, page, limit)`
  - `create(cost)`
  - `remove(cost|id)`
  - `upload(costs)`
  - `fetch(id)`
  - `update(cost)`
- customers
  - `list(filter, page, limit)`
  - `fetchById(id)`
  - `fetchByExternalId(externalId)`
  - `updateById(id)`
  - `updateByExternalIdcreate(externalId)`
  - `fixExternalIds(externalIds)`
  - `upload(customers)`
  - `history(filter, page, limit)`
  - `createCustomField(customField)`
  - `updateCustomField(customField)`
  - `fetchCustomField(customField.code)`
  - `combine(customers, resultCustomer)`
  - `listNotes(filter, page, limit)`
  - `createNote(note)`
  - `removeNote(note|id)`
- customFields
  - `list(filter, page, limit)`
  - `create(customField, entity)`
  - `fetch(code, entity)`
  - `update(customField, entity)`
  - `listDictionaries(filter, page, limit)`
  - `createDictionary(customDictionary)`
  - `updateDictionary(customDictionary)`
  - `fetchDictionary(code)`
- delivery
  - `fetchSettings(code)`
  - `tracking(code, statusUpdate)`
  - `updateSettings(configuration)`
  - `listShipments(filter, page, limit)`
  - `createShipment(deliveryShipment, deliveryType)`
  - `fetchShipment(id)`
  - `updateShipment(deliveryShipment)`
- modules
  - `fetch(code)`
  - `update(integrationModule)`
- orders
  - `list(filter, page, limit)`
  - `fetchById(id)`
  - `fetchByExternalId(externalId)`
  - `create(order)`
  - `updateById(id)`
  - `updateByExternalId(externalId)`
  - `fixExternalIds(externalIds)`
  - `statuses(ids, externalIds)`
  - `upload(orders)`
  - `history(filter, page, limit)`
  - `combine(order, resultOrder, technique)`
  - `createPayment(payment)`
  - `updatePaymentById(payment)`
  - `updatePaymentByExternalId(payment)`
  - `removePayment(payment|id)`
- packs
  - `list(filter, page, limit)`
  - `create(pack)`
  - `history(filter, page, limit)`
  - `fetch(id)`
  - `remove(pack|id)`
  - `update(pack)`
- references
  - `listCountries()`
  - `listDeliveryServices()`
  - `updateDeliveryService(deliveryService)`
  - `listDeliveryTypes()`
  - `updateDeliveryType(deliveryType)`
  - `listOrderMethods()`
  - `updateOrderMethod(orderMethod)`
  - `listOrderTypes()`
  - `updateOrderType(orderType)`
  - `listPaymentStatuses()`
  - `updatePaymentStatus(paymentStatus)`
  - `listPaymentTypes()`
  - `updatePaymentType(paymentType)`
  - `listProductStatuses()`
  - `updateProductStatus(productStatus)`
  - `listSites()`
  - `updateSite(site)`
  - `listStatusGroups()`
  - `listStatuses()`
  - `updateStatus(status)`
  - `listStores()`
  - `updateStore(store)`
  - `listPriceTypes()`
  - `updatePriceType(priceType)`
  - `listCostGroups()`
  - `updateCostGroup(costGroup)`
  - `listCostItems()`
  - `updateCostItem(costItem)`
  - `listLegalEntities()`
  - `updateLegalEntity(legalEntity)`
  - `listCouriers()`
  - `createCourier(courier)`
  - `updateCourier(courier)`
- segments
  - `list(filter, page, limit)`
- statistic
  - `listUpdate()`
- stores
  - `fetchSettings(code)` not available in v5
  - `updateSettings(configuration)`
  - `listInventories(filter, page, limit)`
  - `uploadInventories(offers)`
  - `uploadPrices(prices)`
  - `listProducts(filter, page, limit)`
  - `listProductGroups(filter, page, limit)`
  - `listProductProperties(filter, page, limit)`
- tasks
  - `list(filter, page, limit)`
  - `create(task)`
  - `fetch(id)`
  - `update(task)`
- telephony
  - `fetchSettings(code)` not available in v5
  - `updateSettings(configuration)`
  - `createCallEvent(event)`
  - `uploadCalls(calls)`
  - `managerCall(phone, details)`
- users
  - `updateStatus(user|id, status)`
  - `list(filter, page, limit)`
  - `listGroups(page, limit)`
  - `fetch(id)`

```javascript
import RetailCRM from 'node-retailcrm-api'

const Client = new RetailCRM.Client({
  siteCode: '',
  apiKey: 'shared key',
  url: 'https://...',
  version: RetailCRM.VERSIONS.V5,
});

Client.orders.list()
  .then((response) => {
    if (response.isSuccessful() && response.bodyIsHave('orders')) {
      return response.getFromBody('orders');
    }

    throw new Error(response.errorMsg() || 'Some mistake');
  })
  .then((orders) => {
    // ...
  })
```

### Dependencies
- `request` https://github.com/request/request
- `request-promise` https://github.com/request/request-promise
- `lodash` https://github.com/lodash/lodash

### Documentation

* [English](http://www.retailcrm.pro/docs/Developers/Index)
* [Russian](http://www.retailcrm.ru/docs/Developers/Index)
