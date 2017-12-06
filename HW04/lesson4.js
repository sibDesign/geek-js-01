"use strict";

var number = prompt("Введите число от 0 до 999", 1000);
if ((number >= 0) && (number <= 999)) {
  console.log("Ваше число -", number);
  var n = (number % 100);
  var s = ((number - n) / 100);
  var e = (n % 10);
  var d = ((n - e) / 10);
}
else {
  console.log("Ошибка! Ваше число не входит в заданный диапазон.");
  e = d = s = 0;
}

var result = {
  Единиц: e,
  Десятков: d,
  Сотен: s
}

for (var key in result) {
  console.log(key, result[key]);
}