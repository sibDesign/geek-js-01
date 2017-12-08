var number = []; // четыре цифры нашего числа
var attempts = 0; // число попыток
var log = []; // ходы игрока
var x = 0;

generateNumber();
guessNumber();

function generateNumber() {
  number = [];
  var min = 0;
  var max = 9;

  for (var i = 0; i < 4; i++) { // заполняем массив цифр в числе
    var part = Math.round(min + Math.random() * (max - min));

    if (i == 0) { // первое число всегда уникально
      number[i] = part;
    }
    else { // пока не сгенерируется уникальное число, генерируем новые случайные числа
      while (number.indexOf(part) != -1) {
        part = Math.round(min + Math.random() * (max - min));
      }

      number[i] = part;
    }
  }
}

function guessNumber() {
  var result = prompt("Введите число (-1 - закончить игру)", 0);
  var gameIsRunning = true;

  while (gameIsRunning) { // пока игрок не угадал число
    // выход из игры
    if (parseInt(result) == -1) {
      gameOver();
      gameIsRunning = false;
    }

    else if (parseInt(result) == 0 || isNaN(parseInt(result))) { // игрок ввел некорректные данные
      alert("Вы не ввели число");
      result = prompt("Введите число (-1 - закончить игру)", 0); // запрашиваем по новой
    }

    else { // проверяем число
      var answer = checkNumber(result);

      if (answer[0]) { // число угадано
        alert("Поздравляем! Вы угадали число. Кол-во попыток: " + attempts);
        gameOver();
        gameIsRunning = false; // останавливаем игру
      }
      else { // следующий ход
        result = prompt("Быки: " + answer[1] + " Коровы: " + answer[2] + " Введите число (-1 - закончить игру)", 0);
      }
    }
  }
}

function checkNumber(myresult) { // каждая проверка увеличивает кол-во попыток на 1
  log[attempts++] = myresult;

  // массив результата
  // 0 - общий результат
  // 1 - быки
  // 2 - коровы
  var answer = [false, 0, 0];

  console.log(myresult);
  // console.log(number);
  var ranks = myresult.split(""); // раскладываем число на разряды

  for (var i = 0; i < ranks.length; i++) {
    if (parseInt(ranks[i]) == number[i]) { // если по индексу значения совпадают, то это бык
      answer[1]++;
    }
    else if (number.indexOf(parseInt(ranks[i])) != -1) { // если число вообще есть в массиве, то это корова
      answer[2]++;
    }
  }
  console.log("---- Быки: " + answer[1] + " Коровы: " + answer[2]);

  if (answer[1] == 4) { // если набралось 4 быка, то это победа
    answer[0] = true;
  }

  return answer;
}

function gameOver() { // вывод всех ходов пользователя
  for (var key in log) {
    console.log("Попытка ", parseInt(key)+1, " - ", log[key]);
  }
}

var num = prompt("Укажите номер хода: ", 0);
console.log("Ваш ход номер "+ num-- + " - " + log[num]);