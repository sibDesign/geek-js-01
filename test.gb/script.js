"use strict";
var shop = document.getElementsByClassName('shopitem');
var i, itemName, itemPrice, cartItem, n = 0;
var shopDB = []; //таблица со всеми товарами
var shopDBitem = []; //таблица с товаром
var cartDB = []; //таблица с товарами в корзине

for (i = 0; i < shop.length; i++) {
  shop[i].lastElementChild.onclick = addItemToCart;
  itemName = shop[i].firstElementChild.innerHTML; //наименование товара
  itemPrice = shop[i].children[2].innerHTML; //стоимость товара
  shopDB[i] = itemName + '/' + itemPrice; //формируем запись в таблицу с товарами
}

function addItemToCart(event) {
  i = event.target.dataset.itemid; //получаем от картинки её id
  shopDBitem = shopDB[i].split('/'); //разбиваем запись на части
  cartItem = document.createElement('li');
  cartItem.innerHTML = shopDBitem[0] + ' (' + shopDBitem[1] + ' руб.)';
  document.querySelector('.cart').appendChild(cartItem);
  cartDB[n] = shopDB[i]; //заносим в таблицу данные о покупке
  n++; //счётчик покупок
  showTable(cartDB);
}

function showTable(tableOut) {
  var cartSumma = 0;
  for (i = 0; i < tableOut.length; i++) {
    shopDBitem = tableOut[i].split('/');
    cartSumma += parseInt(shopDBitem[1], 10);
  }
  document.querySelector('.total').innerHTML = 'Общая сумма покупок составила: ' + cartSumma + ' рублей.';
}