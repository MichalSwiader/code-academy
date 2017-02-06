'use strict';

var orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
  orderCount = orderCount + 1;
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
  
}

takeOrder('bacon','thin');
takeOrder('salami','pan');
takeOrder('double cheese','double pan');

console.log(getSubTotal(orderCount));