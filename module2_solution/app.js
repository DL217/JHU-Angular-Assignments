(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    
    var items = [{name:"cookies", quantity:10},
                 {name:"chips", quantity:5},
                 {name:"drinks", quantity:3},
                 {name:"apples", quantity:7},
                 {name:"oranges", quantity:2}];
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;
        buy.items = ShoppingListCheckOffService.getToBuyItems();
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
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }
    
    function ShoppingListCheckOffService() {
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
        service.getToBuyItems = function () {
            return toBuyItems;
        };
        service.getBoughtItems = function () {
            return boughtItems;
        };
    }
})();
