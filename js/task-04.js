'use strict';

let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

btnDecrement.addEventListener('click', () => {
  value.textContent = counterValue -= 1;
})

btnIncrement.addEventListener('click', () => {
  value.textContent = counterValue += 1;
})