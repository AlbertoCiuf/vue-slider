const images = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

const sliderLeft = document.querySelector('.container .slider .slider-left');
// console.log(slider);
const sliderList = document.querySelector('.container .slider .slider-list');
const leftItem = document.getElementsByClassName('item');
//console.log(item);
const listItem = document.getElementsByClassName('list-item');


let contatore = 0;
// console.log(item[contatore]);

for (let i = 0; i < images.length; i++) {
 
//parte sinistra
  //creo div con img
  const item = document.createElement('div');
  item.className += 'item';
  item.innerHTML = `<img src="${images[i]}" alt="" />`;

  if (i === contatore) {
    item.classList.add('active');
  }


  //creo div con testi
  const itemInfo = document.createElement('div');
  const itemTitle = document.createElement('div');
  const itemText = document.createElement('div');

  itemInfo.className += 'item-info';
  itemTitle.className += 'item-title';
  itemText.className += 'item-text';

  itemText.innerHTML = text[i];
  itemTitle.innerHTML = title[i];

  itemInfo.append(itemTitle, itemText);
  sliderLeft.append(item);
  item.append(itemInfo);


//parte destra
  
  const rightItem = document.createElement('div');
  rightItem.className += 'list-item';
  rightItem.innerHTML = `<img src="${images[i]}" alt="" />`;
  sliderList.append(rightItem);

  if (i === contatore) {
    rightItem.classList.add('selected');
  }

}

//creo costanti arrow prev e next
const prev = document.createElement('div');
prev.className += 'prev';
prev.innerHTML = '&uarr;';
const next = document.createElement('div');
next.className += 'next';
next.innerHTML = '&darr;';

sliderList.append(prev, next);

//cambiamento immagine al click 
prev.addEventListener('click', function(){
  leftItem[contatore].classList.remove('active');
  listItem[contatore].classList.remove('selected');
  contatore--;
  if (contatore < 0) {
    contatore = leftItem.length-1;
  }
  leftItem[contatore].classList.add('active');
  listItem[contatore].classList.add('selected');
});

next.addEventListener('click', function(){
  leftItem[contatore].classList.remove('active');
  listItem[contatore].classList.remove('selected');
  contatore++;
  if (contatore > leftItem.length - 1) {
    contatore = 0;
  }
  leftItem[contatore].classList.add('active');
  listItem[contatore].classList.add('selected');
});