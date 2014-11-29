angular.module('customersApp')
  .controller('CustomersController', [
    '$scope',
    'customersService',
    'appSettings',
    function ($scope, customersService, appSettings) {
      $scope.sortBy  = 'name';
      $scope.reverse = false;
      $scope.appSettings = appSettings;
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
