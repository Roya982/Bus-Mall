'use strict';

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const productName = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg',
];
const names = [];
const ext = [];
let counter = 0;
const rounds = 25;

const leftImage = document.getElementById('left-image');
const rightImage = document.getElementById('right-image');
const midImage = document.getElementById('mid-image');
const choseImage = document.getElementById('chose-image');

function theExtention(filename) {
  var idExt = filename.lastIndexOf('.');
  return (idExt < 1) ? '' : filename.substr(idExt + 1);
}


const products=[];

function  ProductShown(name) {
  this.name = name;
  this.path = `./img/${name}.${ext}`;
  this.votes = 0;
  this.views = 0;
  products.push(this);

for (let i = 0; i < productName.length; i++) {
  new ProductShown(productName[i]);
  leftImage.textContent = leftPhoto;
  rightImage.textContent = leftPhoto;
  midImage.textContent = leftPhoto;
}

render();

function render() {
  const leftPhoto = randomNumber(0, ProductShown.all.length - 1);
  console.log('LEFT', leftPhoto, ProductShown.all[leftPhoto].path);
  leftImage.src = ProductShown.all[leftPhoto].path;
  leftImage.title = ProductShown.all[leftPhoto].name;
  leftImage.alt = ProductShown.all[leftPhoto].name;

  const rightPhoto = randomNumber(0, ProductShown.all.length - 1);
  console.log('Right', rightPhoto);
  rightImage.src = ProductShown.all[rightPhoto].path;
  rightImage.title = ProductShown.all[rightPhoto].name;
  rightImage.alt = ProductShown.all[rightPhoto].name;

  const midelPhoto = randomNumber(0, ProductShown.all.length - 1);
  console.log('Right', midelPhoto);
  rightImage.src = ProductShown.all[midelPhoto].path;
  rightImage.title = ProductShown.all[midelPhoto].name;
  rightImage.alt = ProductShown.all[midelPhoto].name;
}

choseImage.addEventListener('click', handClick);

function handClick(event) {
 if (event.target.id !== 'chose-image') {
   for (let i = 0; i < ProductShown.all.length; i++) {
    if (ProductShown.all[i].name === event.target.title) {
      ProductShown.all[i].votes++;    
    }
  }
render();
   }
  }
 }
