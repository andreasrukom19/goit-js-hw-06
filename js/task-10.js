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

controlsDiv.addEventListener('click', (event) => {
  if (event.target.textContent === 'Create') {
    const number = event.currentTarget.firstElementChild.value;
    createBoxes(number);
  } else if (event.target.textContent === 'Destroy') {
    clearBox();
  }
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

function clearBox() {
  divBox.innerHTML = '';
  controlsDiv.firstElementChild.value = null;
}
