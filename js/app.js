'use strict'

//console.log('Hello World');

//global shtuff
var imgArray = [];
var renderArray = [];
var click = 0;
var clickTillYouCantClickNoMore = 5;
var section = document.getElementById('results');
var container = document.getElementById('container');
var imageElOne = document.getElementById('image-one');
var imageElTwo = document.getElementById('image-two');
var imageElThree = document.getElementById('image-three');

//stuff and things
// constructor for tha imgs

function Picture(name, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.name = name;
  this.src = src;
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
function renderImages(){
doABarrelRollIntoARenderArray();
  imageElOne.src = imgArray[renderArray[0]].src;
  imageElOne.alt = imgArray[renderArray[0]].name;
  imgArray[renderArray[0]].viewed++;

  imageElTwo.src = imgArray[renderArray[1]].src;
  imageElOne.alt = imgArray[renderArray[1]].name;
  imgArray[renderArray[1]].viewed++;

  imageElThree.src = imgArray[renderArray[2]].src;
  imageElOne.alt = imgArray[renderArray[2]].name;
  imgArray[renderArray[2]].viewed++;
}

  

  //console.log(imgArray);



//random numbers
function randomNumber() {
  var num = Math.floor(Math.random() * Math.floor(imgArray.length));
  return num;
}


function doABarrelRollIntoARenderArray() {
  while (renderArray.length < 3) {
    var i = randomNumber();
    while (renderArray.includes(i)) {
      i = randomNumber();
    }
    renderArray.push(i);

  } 
  //console.log(renderArray);
}

//chart




//event handler/listener for tha UNbroken thing
container.addEventListener('click',eventHandler);

function eventHandler(event) {
  click++;
  var clickevent = event.target.alt;
  for (var i = 0; i < imgArray.length; i++){
    if(clickevent === imgArray[i].name){
      imgArray[i].clicked++;
    }
  }
  
 //remove event listener
  if (click === clickTillYouCantClickNoMore) {
    container.removeEventListener('clicks', eventHandler);


    //render results
    for (i = 0; i < imgArray.length; i++) {
      var clickedAmount = document.createElement('p');
      clickedAmount.textContent = `${imgArray[i].name}, clicked ${imgArray[i].clicked} times, viewed ${imgArray[i].viewed} times.`;
      section.append(clickedAmount);
    }
  }

}



renderImages(); //calling functions







