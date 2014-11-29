angular.module('customersApp')
  .controller('OrdersController', [
    '$scope',
    '$routeParams',
    'customersFactory',
    function ($scope, $routeParams, customersFactory) {
      $scope.customer = null;

      function init() {
        $scope.customer = customersFactory.getCustomer($routeParams.customerId);
      }

      init();
    }
  ]);
