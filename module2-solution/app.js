(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyItems = this;

  toBuyItems.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyItems.buyItem = function (itemIndex,itemQuantity,itemName) {
    ShoppingListCheckOffService.buyItem(itemIndex,itemQuantity,itemName);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItems = this;

  boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of toBuy items
  var toBuyItems = [{
    name: "Sandwitch",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "2000"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Bubbles",
    quantity: "100"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

// List of Bought items
var boughtItems = [];

  service.buyItem = function (itemIndex,itemQuantity,itemName) {
    service.removeItemFromToBuyList(itemIndex);
    service.addItemToBoughtItemsList(itemName, itemQuantity);
  };

  service.addItemToBoughtItemsList = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItems.push(item);
  };

  service.removeItemFromToBuyList = function (itemIdex) {
    toBuyItems.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
