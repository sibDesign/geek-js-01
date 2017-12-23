"use strict";

function init() {
  drawBoard();
  figuresStart();
}

window.onload = init;

function drawBoard() {
  var board = document.getElementsByClassName("board")[0];
  for (var i = 9; i > -1; i--) {
    for (var j = 0; j < 10; j++) {
      var cell = document.createElement("div");
      cell.classList.add("cell");
      if  (((i === 0) && (j === 0))
        || ((i === 9) && (j === 9))
        || ((i === 9) && (j === 0))
        || ((i === 0) && (j === 9))) {
        cell.innerText = "";
      }
      else if (i === 0 || i === 9) {
        cell.innerText = String.fromCharCode(64 + j);
      }
      else if (j === 0 || j === 9) {
        cell.innerText = i;
      }
      else {
        blackWhite(i, j, cell);
        cell.id = String.fromCharCode(64 + j) + i;
      }
      board.appendChild(cell);
    }
  }
}

function blackWhite(i, j, cell) {
  if ((i + j) % 2 === 0) {
    cell.classList.add("dark");
  }
  else {
    cell.classList.add("light");
  }
}

function figuresStart() {
  setFigureOn('A1', 'lightRook');
  setFigureOn('B1', 'lightKnight');
  setFigureOn('C1', 'lightBishop');
  setFigureOn('D1', 'lightQueen');
  setFigureOn('E1', 'lightKing');
  setFigureOn('F1', 'lightBishop');
  setFigureOn('G1', 'lightKnight');
  setFigureOn('H1', 'lightRook');
  setFigureOn('A2', 'lightPawn');
  setFigureOn('B2', 'lightPawn');
  setFigureOn('C2', 'lightPawn');
  setFigureOn('D2', 'lightPawn');
  setFigureOn('E2', 'lightPawn');
  setFigureOn('F2', 'lightPawn');
  setFigureOn('G2', 'lightPawn');
  setFigureOn('H2', 'lightPawn');

  setFigureOn('A8', 'darkRook');
  setFigureOn('B8', 'darkKnight');
  setFigureOn('C8', 'darkBishop');
  setFigureOn('D8', 'darkQueen');
  setFigureOn('E8', 'darkKing');
  setFigureOn('F8', 'darkBishop');
  setFigureOn('G8', 'darkKnight');
  setFigureOn('H8', 'darkRook');
  setFigureOn('A7', 'darkPawn');
  setFigureOn('B7', 'darkPawn');
  setFigureOn('C7', 'darkPawn');
  setFigureOn('D7', 'darkPawn');
  setFigureOn('E7', 'darkPawn');
  setFigureOn('F7', 'darkPawn');
  setFigureOn('G7', 'darkPawn');
  setFigureOn('H7', 'darkPawn');
}

function setFigureOn(id, figure) {
  var uCode;
  switch (figure) {
    case('lightKing'): uCode = 9812; break;
    case('darkKing'): uCode = 9818; break;
    case('lightQueen'): uCode = 9813; break;
    case('darkQueen'): uCode = 9819; break;
    case('lightRook'): uCode = 9814; break;
    case('darkRook'): uCode = 9820; break;
    case('lightBishop'): uCode = 9815; break;
    case('darkBishop'): uCode = 9821; break;
    case('lightKnight'): uCode = 9816; break;
    case('darkKnight'): uCode = 9822; break;
    case('lightPawn'): uCode = 9817; break;
    case('darkPawn'): uCode = 9823; break;
  }
  document.getElementById(id).innerHTML = String.fromCharCode(uCode);
}