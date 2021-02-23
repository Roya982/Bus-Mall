'use strict';

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const productNames = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg',
];

const choseImage = document.getElementById('chose-image');
const leftImage = document.getElementById('left-image');
const midImage = document.getElementById('mid-image');
const rightImage = document.getElementById('right-image');

// const products=[];

function Product (productShowen){
  this.productShowen = productShowen;
  this.imgPath = `../img/${productShowen}`;
  // votes = 0;
  // views = 0;
  // products.push(this);
  Product.all.push(this);
}
Product.all=[];
for (let i = 0; i < productNames.length; i++) {
  new Product (productNames[i]);
}

function render(){
  const leftPhoto = randomNumber(0,Product.all.length-1);
  leftImage.src = Product.all[leftPhoto].imgPath;
  leftImage.title = Product.all[leftPhoto].productShowen;
  leftImage.alt = Product.all[leftPhoto].productShowen;

  const rightPhoto = randomNumber(0,Product.all.length-1);
  rightImage.src = Product.all[rightPhoto].imgPath;
  rightImage.title = Product.all[rightPhoto].productShowen;
  rightImage.alt = Product.all[rightPhoto].productShowen;

  const midPhoto = randomNumber(0,Product.all.length-1);
  midImage.src = Product.all[midPhoto].imgPath;
  midImage.title = Product.all[midPhoto].productShowen;
  midImage.alt = Product.all[midPhoto].productShowen;
}
choseImage.addEventListener('click', handleClick);

function handleClick(event){
  if (event.target.id !== 'chose-image') {
    for (let i = 0; i < Product.all.length; i++) {
      if (Product.all[i].name === event.target.title) {
        Product.all[i].votes++;
      }
    }
  }
}
render();
