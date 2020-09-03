"use strict"

//global shtuff
var imgArray = [];
var renderArray = [];
var clicks = 0;
var enoughClicks = 5;
var section = document.getElementById('results');
var list = document.getElementById('list');
var myContainer = document.getElementById('container');
var imageElOne = document.getElementById('image-one');
var imageElTwo = document.getElementById('image-two');
var imageElThree = document.getElementById('image-three');


var retrievedImages = localStorage.getItem('busmall-images');
if(retrievedImages){
  imgArray = JSON.parse(retrievedImages);
} else {
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

console.log(imgArray);
}


//stuff and things
// constructor for tha imgs

function Picture(name, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.name = name;
  this.src = src;
  imgArray.push(this);
}




//function time

//random number
function getRandomNumber(){
  var num = Math.floor(Math.random() * Math.floor(imgArray.length));
  return num;
}
  
//maketherenderarray
function maketherenderarray(){
  while (renderArray.length > 3){
    renderArray.pop();
  }
  while (renderArray.length < 6){
    var i = getRandomNumber();
    while (renderArray.includes(i)){
      i = getRandomNumber();
    }
    renderArray.unshift(i);
  }
  console.log(renderArray);
}
//renderimages
function renderImages(){
  maketherenderarray();
  
  imageElOne.src = imgArray[renderArray[0]].src;
  imageElOne.alt = imgArray[renderArray[0]].name;
  imgArray[renderArray[0]].viewed++;

  imageElTwo.src = imgArray[renderArray[1]].src;
  imageElTwo.alt = imgArray[renderArray[1]].name;
  imgArray[renderArray[1]].viewed++;

  imageElThree.src = imgArray[renderArray[2]].src;
  imageElThree.alt = imgArray[renderArray[2]].name;
  imgArray[renderArray[2]].viewed++;
}
//renderlist
function renderList(){
  for (var i = 0; i < imgArray.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${imgArray[i].name} had ${imgArray[i].clicked} votes and was shown${imgArray[i].viewed} times.`;
    list.appendChild(liEl);
  }
}
//renderChart
function renderChart(){
var labelsGenerator = [];
var clickedArray = [];
var viewedArray = [];

for (var i = 0; i < imgArray.length; i++){
  labelsGenerator.push(imgArray[i].name);
  clickedArray.push(imgArray[i].clicked);
  viewedArray.push(imgArray[i].viewed)
}

  var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {//eslint-disable-line
    type: 'bar',
    data: {
        labels: labelsGenerator,
        datasets: [{
            label: '# of Clicks',
            data: clickedArray,
            backgroundColor:'rgba(255, 206, 86, 0.2)', 
            borderColor:'rgba(255, 159, 64, 1)', 
            borderWidth: 2
        },{
          label: '# of Views',
          data: viewedArray,
          backgroundColor:'rgba(255, 99, 132, 0.2)', 
          borderColor:'rgba(255, 206, 86, 1)', 
          borderWidth: 2
      }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}



//event listener/handler
myContainer.addEventListener('click',eventHandler);

function eventHandler(event){
  clicks++;
  var clickedthing = event.target.alt;

  for (var i = 0; i < imgArray.length; i++){
    if(clickedthing === imgArray[i].name){
      imgArray[i].clicked++;
    }
  }

  renderImages();

  if (clicks === enoughClicks){
    myContainer.removeEventListener('click', eventHandler);
    renderList();
    renderChart();
    var stringifiedImages = JSON.stringify(imgArray);
    localStorage.setItem('busmall-images',stringifiedImages);
  }

}




//call'em
renderImages()




