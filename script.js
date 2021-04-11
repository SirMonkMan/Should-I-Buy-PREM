const spinner = document.querySelector('.spinner');
const startBtn = document.querySelector('.spinner__start-button');
const input = document.querySelector('.spinner__input');
let plate = document.querySelector('.spinner__plate');
let items = [...document.getElementsByClassName('spinner__item')];

startBtn.addEventListener('click', function () {
  randomizeItems();
  if (!plate.classList.contains('spinner__plate--spin')) {
    plate.classList.add('spinner__plate--spin');
  } else {
    const currPlate = plate;
    const newPlate = plate.cloneNode(true);
    currPlate.parentNode.replaceChild(newPlate, currPlate);
    plate = newPlate;
    items = [...document.getElementsByClassName('spinner__item')];
  }
});

function randomizeItems() {
  items.forEach(item => {
    if (item.textContent == 'Should I Buy PREM?' | item.textContent == 'Yes') {
      item.textContent = 'Yes';
    } else {
      item.textContent = 'No';
    }
  });
}