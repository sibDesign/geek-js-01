"use strict";
var chessWrap = document.querySelector('.ch-wrap');

var i = 0, count = 0;

while (count < 8 * 8) {
    var item = document.createElement('div');
    chessWrap.appendChild(item);
    item.classList.add('ch-item');
    if (i && i % 2)
        item.classList.add('ch-black');
    i += ((i + 2) % 9) ? 1 : 2;
    count++;
}

function figureStart() {
    var figure = document.getElementsByTagName('div');
    figure['1'].innerHTML = figure['8'].innerHTML = '<img src="img/bR.png">';
    figure['2'].innerHTML = figure['7'].innerHTML = '<img src="img/bN.png">';
    figure['3'].innerHTML = figure['6'].innerHTML = '<img src="img/bB.png">';
    figure['4'].innerHTML = '<img src="img/bQ.png">';
    figure['5'].innerHTML = '<img src="img/bK.png">';
    for(i=9; i<=16; i++) figure[i].innerHTML = '<img src="img/bP.png">';
    figure['57'].innerHTML = figure['64'].innerHTML = '<img src="img/wR.png">';
    figure['58'].innerHTML = figure['63'].innerHTML = '<img src="img/wN.png">';
    figure['59'].innerHTML = figure['62'].innerHTML = '<img src="img/wB.png">';
    figure['60'].innerHTML = '<img src="img/wQ.png">';
    figure['61'].innerHTML = '<img src="img/wK.png">';
    for(i=49; i<=56; i++) figure[i].innerHTML = '<img src="img/wP.png">';
}

figureStart();