angular.module('customersApp')
  .controller('CustomersController', [
    '$scope',
    'customersFactory',
    function ($scope, customersFactory) {
      $scope.sortBy  = 'name';
      $scope.reverse = false;
      $scope.customers = [];

      function init() {
        $scope.customers = customersFactory.getCustomers();
      };

      init();

      $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
      }
    }
  ]);
