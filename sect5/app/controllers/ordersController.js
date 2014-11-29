angular.module('customersApp')
  .controller('OrdersController', [
    '$scope',
    '$routeParams',
    'customersFactory',
    function ($scope, $routeParams, customersFactory) {
      $scope.customer = null;

      function init() {
        customersFactory.getCustomer($routeParams.customerId)
          .success(function (customer) {
            $scope.customer = customer;
          })
          .error(function (data, status, headers, config) {
            // TODO: handle error
          });
      }

      init();
    }
  ]);
