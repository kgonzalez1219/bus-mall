'use strict'

//console.log('Hello World');

//global shtuff
var imgArray = [];

var imageElOne  = document.getElementById('image-one');
var imageElTwo = document.getElementById('image-two');
var imageElThree = document.getElementById('image-three');

//stuff and things
// constructor for tha imgs

function Picture(name, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.src = src;
  this.name = name;

  imgArray.push(this);
}

//tha objects

new Picture('bag', './img/bag.jpg');
new Picture('banana', './img/banana.jpg');
new Picture('bathroom', './img/bathroom.jpg');
new Picture('boots', './img/boots.jpg');
new Picture('breakfast', './img/breakfast.jpg');
new Picture('bubblegum', './img/bubblegum.jpg');
new Picture('chair', './img/chair.jpg');
new Picture('cthulhu', './img/cthulhu.jpg');
new Picture('dog-duck', './img/dog-duck.jpg');
new Picture('dragon', './img/dragon.jpg');
new Picture('pen', './img/pen.jpg');
new Picture('pet-sweep', './img/pet-sweep.jpg');
new Picture('scissors', './img/scissors.jpg');
new Picture('shark', './img/shark.jpg');
new Picture('sweep', './img/sweep.png');
new Picture('tauntaun', './img/tauntaun.jpg');
new Picture('unicorn', './img/unicorn.jpg');
new Picture('usb', './img/usb.gif');
new Picture('water-can', './img/water-can.jpg');
new Picture('wine-glass', './img/wine-glass.jpg');

//console.log(imgArray);

//function time
function renderImages() {
  var imgOne = imgArray [randomNumber(imgArray.length)];

  var imgTwo = imgArray [randomNumber(imgArray.length)];

  var imageElThree = imgArray [randomNumber (imgArray.length)];
}

//random numbers
function randomNumber() {
  return Math.floor(Math.random() * max)
}

