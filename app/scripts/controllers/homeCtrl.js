'use strict';

/**
 * @ngdoc function
 * @name installApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the installApp
 */
angular.module('installApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
