'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector('#controls');
const fields = controlsDiv.querySelector('input');
const createBtn = controlsDiv.querySelector('button[data-create]');
const destroyBtn = controlsDiv.querySelector('button[data-destroy]');
const divBox = document.querySelector('#boxes');

createBtn.addEventListener('click', (event) => {
  const number = event.target.previousElementSibling.value;
  createBoxes(number);
});

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    divBox.append(box);
    size += 10;
  }
}

destroyBtn.addEventListener('click', () => {
  divBox.innerHTML = '';
})