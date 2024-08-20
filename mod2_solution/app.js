(function () {
  'use strict';

  angular.module('ShoppingListCheckOffApp', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//controller list ToBuy
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
     var list1 = this;
     list1.items = ShoppingListCheckOffService.getItems();
     list1.verifyItem = function (itemIndex) {
      ShoppingListCheckOffService.verifyItem(itemIndex);
     list1.ToBuyMessage = ShoppingListCheckOffService.verifyCount();
    };
  };

//controller list AlreadyBought
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list2 = this;
    list2.items = function() {
      return ShoppingListCheckOffService.getItems2();
    };
    list2.AlreadyBoughtMessage = function() {
      return ShoppingListCheckOffService.verifyAlreadyBought();
    };
  }

//my service
  function ShoppingListCheckOffService() {
    var service = this;
    // List of shopping items
    var ToBuy = [
                {name: 'milk', quantity: 5},
                {name: 'cookies', quantity: 10},
                {name: 'sugar', quantity: 2},
                {name: 'rice', quantity: 20},
                {name: 'cereal', quantity: 3}
                ];

    var AlreadyBoughtItems = [];

    service.getItems = function () {
      return ToBuy;
    };

    service.getItems2 = function () {
      return AlreadyBoughtItems;
    };

    service.verifyItem = function (itemIndex) {
      AlreadyBoughtItems.push(ToBuy[itemIndex]);
      ToBuy.splice(itemIndex, 1);
    };

    service.verifyCount = function () {
      return ToBuy.length === 0;
    };

    service.verifyAlreadyBought = function () {
      return AlreadyBoughtItems.length === 0;
    };

  }
})();