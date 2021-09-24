var models = [
  {
    name: 'Lambo',
    image: 'img/40045.jpg'
  },
  {
    name: 'Race Car',
    image: 'img/4z0uGl.jpg'
  },
  {
    name: 'Lamborghini',
    image: 'img/508043.jpg'
  },
  {
    name: 'Lambo2',
    image: 'img/40047.jpg'
  }
];

var index = 0;

document.querySelector('h2').textContent = models[index].name;
document.querySelector('.slide').setAttribute('src',models[index].image);

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

nextBtn.addEventListener('click',() => {
  index++;
  if(index===models.length){
    index = 0;
  }
  document.querySelector('h2').textContent = models[index].name;
  document.querySelector('.slide').setAttribute('src',models[index].image);
});

prevBtn.addEventListener('click',() => {
  if(index === 0 ){
    index = models.length;
  }
  index--;
  document.querySelector('h2').textContent = models[index].name;
  document.querySelector('.slide').setAttribute('src',models[index].image);
});



