angular.module('customersApp')
  .controller('CustomersController', [
    '$scope',
    'customersService',
    function ($scope, customersService) {
      $scope.sortBy  = 'name';
      $scope.reverse = false;
      $scope.customers = [];

      function init() {
        $scope.customers = customersService.getCustomers();
      };

      init();

      $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
      }
    }
  ]);
