angular.module('customersApp')
  .controller('AllOrdersController', [
    '$scope',
    '$log',
    'customersFactory',
    function ($scope, $log, customersFactory) {
      $scope.orders = null;
      $scope.ordersTotal = 0.0;
      $scope.totalType;

      function init() {
        customersFactory.getOrders()
          .success(function (orders) {
            $scope.orders = orders;
            getOrdersTotal();
          })
          .error(function (data, status, headers, config) {
            $log.log(data.error + ' ' + status);
          });
      }

      function getOrdersTotal() {
        $scope.ordersTotal = $scope.orders
          .reduce(function (previous, currentOrder) {
            return previous + currentOrder.total;
          }, 0);
        $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
      }

      init();
    }
  ]);
