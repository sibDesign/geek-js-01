"use strict";

var gallery = {
  pictures: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'],
  mainView: 0,
  thumbsPath: 'img/thumbs/',
  originalPath: 'img/',
};

function init() {
  var thumbs = document.getElementById('thumbs');
  for (var i = 0; i < gallery.pictures.length; i++) { // отображаем все картинки
    var img = document.createElement('img');
    img.src = gallery.thumbsPath + gallery.pictures[i];
    img.classList.add('thumbs_unit');
    img.id = i;
    thumbs.appendChild(img);
  }
  var slider = document.getElementById('slider');
  var mainPict = document.createElement('img');
  mainPict.src = gallery.originalPath + gallery.pictures[gallery.mainView];
  mainPict.classList.add('bigPict');
  slider.appendChild(mainPict);

  thumbs.onclick = bigPicture;
  slider.onclick = go;
  setInterval(autoplay,5000);
}

function bigPicture(event) {
  var main = document.getElementsByClassName('bigPict')[0];
  gallery.mainView = event.target.id;
  main.src = gallery.originalPath + gallery.pictures[gallery.mainView];
}

function go(event) {
  var main = document.getElementsByClassName('bigPict')[0];
  if (event.target.id == "nextBtn") {
    (gallery.mainView < (gallery.pictures.length - 1)) ? gallery.mainView++ : gallery.mainView = 0;
  }
  if (event.target.id == "prevBtn") {
    (gallery.mainView > 0) ? gallery.mainView-- : (gallery.mainView = (gallery.pictures.length - 1));
  }
  main.src = gallery.originalPath + gallery.pictures[gallery.mainView];
}

function autoplay() {
  var main = document.getElementsByClassName('bigPict')[0];
  (gallery.mainView < (gallery.pictures.length - 1)) ? gallery.mainView++ : gallery.mainView = 0;
  main.src = gallery.originalPath + gallery.pictures[gallery.mainView];
}
window.onload = init;