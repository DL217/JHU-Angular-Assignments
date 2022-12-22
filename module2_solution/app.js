(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;
        buy.itemName = "";
        buy.itemQuantity = "";
        buy.items = ShoppingListCheckOffService.getToBuyItems();
        buy.buyItem = function () {
            ShoppingListCheckOffService.transferItem(buy.itemName, buy.quantity, buy.itemIndex);
        };
    }
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.itemName = "";
        bought.itemQuantity = "";
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
        service.transferItem = function (itemName, itemQuantity, itemIndex) {
            var item = {name: itemName,
                        quantity: itemQuantity,
                        index: itemIndex};
            toBuyItems.splice(itemIndex, 1);
            boughtItems.push(item);
        };
        service.getToBuyItems = function () {
            return toBuyItems;
        };
        service.getBoughtItems = function () {
            return boughtItems;
        };
    }
})();
