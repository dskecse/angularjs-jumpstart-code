angular.module('customersApp')
  .factory('customersFactory', function () {
    var customers = [
      {
        id: 1,
        joined: '2000-12-02',
        name: 'John',
        city: 'Chandler',
        orderTotal: 9.9956,
        orders: [
          { id: 1, product: 'Shoes', total: 9.9956 }
        ]
      },
      {
        id: 2,
        joined: '1965-01-25',
        name: 'Zed',
        city: 'Las Vegas',
        orderTotal: 19.99,
        orders: [
          { id: 2, product: 'Book', total: 19.99 }
        ]
      }
    ];

    var factory = {};

    factory.getCustomers = function () {
      return customers;
    };

    factory.getCustomer = function (customerId) {
      return customers.filter(function (customer) {
        if (customer.id === parseInt(customerId)) {
          return customer;
        }
      })[0];
    };

    return factory;
  });
