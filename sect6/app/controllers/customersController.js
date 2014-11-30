angular.module('customersApp')
  .controller('CustomersController', [
    '$scope',
    '$log',
    'customersService',
    'appSettings',
    function ($scope, $log, customersService, appSettings) {
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
            $log.log(data.error + ' ' + status);
          });
      };

      init();

      $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
      };

      $scope.deleteCustomer = function (customerId) {
        customersService.deleteCustomer(customerId)
          .success(function (status) {
            if (status) {
              $scope.customers.forEach(function (customer, i) {
                if (customer.id === customerId) {
                  $scope.customers.splice(i, 1);
                }
              });
            } else {
              $window.alert('Unable to delete a customer');
            }
          })
          .error(function (data, status, headers, config) {
            $log.log(data.error + ' ' + status);
          });
      };
    }
  ]);
