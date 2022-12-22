(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;
        buy.itemName = "";
        buy.quantity = "";
        try {
            buy.transferItem = function () {
                ShoppingListCheckOffService.transferItem(buy.itemName, buy.quantity);
            }
            buy.removeItem = function(itemIndex) {
                ShoppingListCheckOffService.removeItem(buy.itemName, buy.quantity);
            }
        } catch (error) {
            buy.errorMessage = error.message;
        }
    }
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.itemName = "";
        bought.quantity = "";
        
    }
    
    function ShoppingListCheckOffService($scope) {
        var service = this;
        var toBuyItems = [{name:"cookies", quantity:10},
                     {name:"chips", quantity:5},
                     {name:"drinks", quantity:3},
                     {name:"apples", quantity:7},
                     {name:"oranges", quantity:2}];
        var boughtItems = [];
        service.transferItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity,
            };
            boughtItems.push(item);
        };
        service.removeItem = function(itemIndex) {
            toBuyItems.splice(itemIndex, 1);
        };
        service.getItems = function (){
            return toBuyItems;
        };
    }
})();
