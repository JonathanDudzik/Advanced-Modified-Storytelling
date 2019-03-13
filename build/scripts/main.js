"use strict";

// function nextPanel(e) {
//     var elmnt = document.getElementById(e);
//     elmnt.scrollIntoView();
// }
AOS.init({
  once: true // whether animation should happen only once - while scrolling down

});

function exitNav() {
  var navButton = document.querySelector('div input#navi-toggle');
  navButton.checked = false;
} //use queryselector (class selector did not work) to find all video objects and pause them.


function stopVideo() {
  var popupVideos = document.querySelectorAll('video');
  popupVideos.forEach(function (video) {
    video.pause();
  });
}

function boxVisibility(e) {
  var boxButton = e.target.dataset.key;
  var boxElement = document.querySelector("div[data-key=\"".concat(boxButton, "\"]"));
  var boxMedia = document.querySelector("audio[data-key=\"".concat(boxButton, "\"]"));
  var boxElements = document.querySelectorAll("div[data-key*='box-key-']");
  var boxMedias = document.querySelectorAll("audio[data-key*='box-key-']"); // Polyfill for EI11 - no forEach support

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if (!boxElement) return;
  boxElements.forEach(function (EachBoxElement) {
    if (!EachBoxElement.classList.contains('u-box-hide')) {
      EachBoxElement.classList.add('u-box-hide');
    }
  });
  boxElement.classList.remove("u-box-hide");
  boxMedias.forEach(function (EachBoxMedia) {
    EachBoxMedia.pause();
  });

  if (boxMedia) {
    boxMedia.play();
  }
}

document.addEventListener('click', boxVisibility);