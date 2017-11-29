"use strict";

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log("============= Задача 1");
var a = 1, b = 1, c, d;
c = ++a;
console.log("c = ++a =", c); // c = c + (a = a + 1); результат c = 1; a = 2;
d = b++;
console.log("b = b++ =", d); // d = b; b = b + 1; результат d = 1; b = 2;
c = (2 + ++a);
console.log("c = (2+ ++a) =", c); // c = (2 + (a = a + 1)); результат с = 5; a = 3;
d = (2 + b++);
console.log("d = (2+ b++) =", d); // d = (2 + (b)); b = b + 1; результат d = 4; b = 3;
console.log("a = ", a); // 3
console.log("b = ", b); // 3

console.log("============= Задача 2");
var a = 2;
var x = 1 + (a *= 2); // x = 1 + (a = 2 * 2); x = 5;
console.log("x = 1 + (a *= 2) = ", x);

console.log("============= Задача 3");
a = Math.round(getRandom(-10, 10));
b = Math.round(getRandom(-10, 10));
console.log("a =", a, ", b =", b);
if ((a >= 0) & (b >= 0)) {
    console.log("a и b положительные", (a - b));
}
else if ((a < 0) & (b < 0)) {
    console.log("a и b отрицательные", (a - b));
}
else if (((a < 0) & (b >= 0)) || ((a >= 0) & (b < 0))) {
    console.log("a и b разных знаков", (a + b));
}

console.log("============= Задача 4");
a = Math.round(getRandom(0, 15));
console.log("a =", a);
switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}

console.log("============= Задача 5");
var arg1 = Math.round(getRandom(0, 10));
var arg2 = Math.round(getRandom(0, 10));
var result;
console.log("x =", arg1, "y =", arg2);
function getSum(x, y) {
    console.log(x, "плюс", y, "=", result = (x + y));
    return result;
}
function getRzn(x, y) {
    console.log(x, "вычесть", y, "=", result = (x - y));
    return result;
}
function getPrz(x, y) {
    console.log(x, "умножить на", y, "=", result = (x * y));
    return result;
}
function getDln(x, y) {
    if (y == 0) {
        console.log("Ошибка. Деление на ноль.");
        result = "Ошибка!";
        return result;
    }
    else {
        console.log(x, "поделить на", y, "=", result = (x / y));
        return result;
    }
}

console.log("============= Задача 6");
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            getSum(arg1, arg2);
            break;
        case '-':
            getRzn(arg1, arg2);
            break;
        case '*':
            getPrz(arg1, arg2);
            break;
        case '/':
            getDln(arg1, arg2);
            break;
        default:
            console.log("Ошибка");
    }
}
var operation = prompt("Укажите действие +, -, *, / ", '');
mathOperation(arg1, arg2, operation);

console.log("============= Задача 7");
console.log("null - обозначает отсутствие значения тип object. 0 - числовое значение равное нулю, тип число.");

console.log("============= Задача 8");
var n = Math.round(getRandom(1, 10));
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n = n * factorial(--n);
}
result = factorial(n);
console.log(n, "! =", result);