"use strict";
var myNumber = prompt("Введите число от 0 до 999", "1000");

if ((myNumber >= 0) && (myNumber <= 999)) {
  console.log("Ваше число -", myNumber);
  var hundreds = ((myNumber - (myNumber % 100)) / 100);
  var units = (myNumber % 10);
  var tens = (((myNumber % 100) - units) / 10);
}
else {
  console.log("Ошибка! Ваше число не входит в заданный диапазон.");
  units = tens = hundreds = 0;
}

var result = {
  Единиц: units,
  Десятков: tens,
  Сотен: hundreds
};
for (var key in result) {
  console.log(key, result[key]);
}
