(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;
    }
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
    }
    
    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [{name:"cookies", quantity:10},
                     {name:"chips", quantity:5},
                     {name:"drinks", quantity:3},
                     {name:"apples", quantity:7},
                     {name:"oranges", quantity:2}];
        var boughtItems = [];
    }
})();
