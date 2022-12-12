(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.textbox = "";
        $scope.LunchCheckController = function () {
            if ($scope.textbox == ""){
                $scope.message = "Please enter data first";
            } else {
                let x = $scope.textbox.split(','); 
                if (x.length <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                } 
            }
            };
        
    }
})();