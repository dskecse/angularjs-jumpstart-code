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
        customersService.getCustomers()
          .success(function (customers) {
            $scope.customers = customers;
          })
          .error(function (data, status, headers, config) {
            // TODO: handle error
          });
      };

      init();

      $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
      }
    }
  ]);
