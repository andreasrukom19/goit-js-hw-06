'use strict'

const inputField = document.querySelector('#validation-input');
const strLength = inputField.dataset.length;

inputField.addEventListener('blur', (event) => {
  if (event.currentTarget.value.length != strLength && event.currentTarget.value.length != 0) {
    inputField.classList.add('invalid');
    inputField.classList.remove('valid');
  } else if (event.currentTarget.value.length == strLength) {
    inputField.classList.add('valid');
    inputField.classList.remove('invalid');
  } else {
    inputField.classList.remove('valid');
    inputField.classList.remove('invalid');
  }
})