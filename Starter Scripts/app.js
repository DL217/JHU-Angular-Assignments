(function () {
    'use strict';
    angular.module('myFirstApp', [])
    .controller('MyFirstController', function ($scope) {
        $scope.name = "John";
        $scope.sayHello = function() {
            return "Hello Coursera!"
        };
    });
})();