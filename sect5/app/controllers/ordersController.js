angular.module('customersApp')
  .controller('OrdersController', [
    '$scope',
    '$log',
    '$routeParams',
    'customersFactory',
    function ($scope, $log, $routeParams, customersFactory) {
      $scope.customer = null;

      function init() {
        customersFactory.getCustomer($routeParams.customerId)
          .success(function (customer) {
            $scope.customer = customer;
          })
          .error(function (data, status, headers, config) {
            $log.log(data.error + ' ' + status);
          });
      }

      init();
    }
  ]);
