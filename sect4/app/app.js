(function() {
  var app = angular.module('customersApp', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller:  'CustomersController',
        templateUrl: 'app/views/customers.html'
      })
      .otherwise({ redirectTo: '/' });
  }]);
}());
