'use strict';

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const productNames = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg',
];
let counter=0;

const choseImage = document.getElementById('chose-image');
const leftImage = document.getElementById('left-image');
const midImage = document.getElementById('mid-image');
const rightImage = document.getElementById('right-image');


function Product (productShowen){
  this.productShowen = productShowen;
  this.imgPath = `../img/${productShowen}`;
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}
Product.all=[];
for (let i = 0; i < productNames.length; i++) {
  new Product (productNames[i]);
}
let usedImages = {};
let usedImagesCount = 0;
let num = Math.floor(Math.random() * (Product.all.length));

function render(event){
  const leftPhoto = randomNumber(0,Product.all.length-1);
  leftImage.src = Product.all[leftPhoto].imgPath;
  leftImage.title = Product.all[leftPhoto].productShowen;
  leftImage.alt = Product.all[leftPhoto].productShowen;
  if (!usedImages){
    leftImage.canvas.src = Product.all[num];
    usedImages[num] = true;
    usedImagesCount++;
    if(usedImagesCount === Product.all.length){
      usedImagesCount = 0;
      usedImages = {};
    }
  }

  const midPhoto = randomNumber(0,Product.all.length-1);
  midImage.src = Product.all[midPhoto].imgPath;
  midImage.title = Product.all[midPhoto].productShowen;
  midImage.alt = Product.all[midPhoto].productShowen;

  if (!usedImages){
    midImage.canvas.src = Product.all[num];
    usedImages[num] = true;
    usedImagesCount++;
    if(usedImagesCount === Product.all.length){
      usedImagesCount = 0;
      usedImages = {};
    }
  }
  const rightPhoto = randomNumber(0,Product.all.length-1);
  rightImage.src = Product.all[rightPhoto].imgPath;
  rightImage.title = Product.all[rightPhoto].productShowen;
  rightImage.alt = Product.all[rightPhoto].productShowen;

  if (!usedImages){
    rightImage.canvas.src = Product.all[num];
    usedImages[num] = true;
    usedImagesCount++;
    if(usedImagesCount === Product.all.length){
      usedImagesCount = 0;
      usedImages = {};
    }
  }


  if (event.target.id !== 'chose-image') {
    for (let i = 0; i < Product.all.length; i++) {
      if (Product.all[i].name === event.target.title) {
        Product.all[i].views=Product.all[i].views+1;
      }
    }
  }
}
choseImage.addEventListener('click', handleClick);

function handleClick(event){
  if (event.target.id !== 'chose-image') {
    for (let i = 0; i < Product.all.length; i++) {
      if (Product.all[i].name === event.target.title) {
        Product.all[i].votes=Product.all[i].votes+1;
      }
      if(counter !== 25){
        counter++;
        render();
      }
      else if (counter === 25) {
        choseImage.removeEventListener('click', handleClick);
      }
    }
  }
  const showResult = document.getElementById('show-result');
  const ulElement = document.createElement('ul');
  showResult.appendChild(ulElement);
  for (let i = 0; i < Product.all.length; i++) {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `${Product.all[i].productShowen} had ${Product.all[i].votes}, and was seen ${Product.all[i].views} times.`;
  }
}
render();

render();
handleClick();

const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels:productNames,
    datasets:[
      {label:'votes',
        barPercentage: 1,
        barThickness: 9,
        maxBarThickness: 9,
        data: this.votes,
      },{labels:productNames,
        datasets:[
          {label:'views',
            barPercentage: 1,
            barThickness: 9,
            maxBarThickness: 9,
            data: this.views,}
        ]
      },{
      }
    ]
  },
});
