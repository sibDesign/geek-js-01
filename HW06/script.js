"use strict";

function init() {
  var pictures = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']; // массив с картинками
  var gallery = document.getElementById('gallery'); // галерея
  var mainView = document.getElementById('mainView'); // большая картинка из галереи
  var bigPic = document.getElementById('bigPic'); // большая картинка с кнопками
  mainView.innerHTML = '<img src="img/big/00.jpg">'; // картинка отображаемая по умолчанию

  for (var i = 0; i < pictures.length; i++) { // отображаем все картинки из списка
    var img = document.createElement('img');
    img.src = 'img/thumbs/' + pictures[i];
    img.classList.add('gallery_item');
    gallery.appendChild(img);
  }
  gallery.onclick = bigPicture;
  bigPic.onclick = nextPicture;
}

function bigPicture(event) {
  mainView.innerHTML = ''; // убираем старую картинку из большой рамки
  var bigPicture = event.target.cloneNode(true); // делаем копию маленькой картинки
  bigPicture.classList.remove('gallery_item'); // убираем у копии класс
  bigPicture.src = bigPicture.src.replace('thumbs', 'big'); // заменяем путь картинки до большого оригинала
  mainView.appendChild(bigPicture); // выводим большую картинку
}

function nextPicture(event) {
  var pictPath = event.target.src;
  if(event.target.innerHtml="Next"){
    console.log("Далее");
  }
  console.log("Next", event.target, event.currentTarget, pictPath);
}

window.onload = init;

image.onload = function () {

}
image.onerror = function () {

}