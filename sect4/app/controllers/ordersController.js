angular.module('customersApp')
  .controller('OrdersController', [
    '$scope',
    '$routeParams',
    function ($scope, $routeParams) {
      $scope.orders = null;

      function init() {
        $scope.customers.forEach(function (customer) {
          if (customer.id === parseInt($routeParams.customerId)) {
            $scope.orders = customer.orders;
          }
        });
      }

      $scope.customers = [
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

      init();
    }
  ]);
