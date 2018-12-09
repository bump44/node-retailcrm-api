import RetailCRM from '../src';

const Client = new RetailCRM.Client({
  apiKey: 'DOFvmWho63JvYhvz2057owMU97ey1qdB',
  url: 'https://shop167.retailcrm.ru/',
});

describe('requests', () => {
  it('availableVersions', () =>
    Client.availableVersions().then(response => {
      expect(response.isSuccessful()).toEqual(true);
      expect(response.bodyIsHave('versions')).toEqual(true);
    }));

  it('credentials', () =>
    Client.credentials().then(response => {
      expect(response.isSuccessful()).toEqual(true);
      expect(response.bodyIsHave('credentials')).toEqual(true);
    }));

  it('orders.list', () =>
    Client.orders.list().then(response => {
      expect(response.isSuccessful()).toEqual(true);
      expect(response.bodyIsHave('orders')).toEqual(true);
    }));

  it('orders.create && orders.fetchById', () =>
    Client.orders
      .create({
        managerComment: 'test',
        number: 1,
      })
      .then(response => {
        expect(response.isSuccessful()).toEqual(true);
        expect(response.bodyIsHave('id')).toEqual(true);
        return response.getFromBody('id');
      })
      .then(orderId =>
        Client.orders.fetchById(orderId).then(response => {
          expect(response.isSuccessful()).toEqual(true);
          expect(response.bodyIsHave('order')).toEqual(true);
          return response.getFromBody('order');
        }),
      )
      .then(order => {
        expect(order.number).toEqual('1');
      }));

  it('customers.list', () =>
    Client.customers.list().then(response => {
      expect(response.isSuccessful()).toEqual(true);
      expect(response.bodyIsHave('customers')).toEqual(true);
    }));
});
