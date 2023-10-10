'use strict'

const inputField = document.querySelector('#validation-input');
const dataLength = Number(inputField.dataset.length);

inputField.addEventListener('blur', (event) => {
  const resultLength = event.currentTarget.value.length;
  if (resultLength === dataLength) {
    changeClass('valid', 'invalid');
  } else {
    changeClass('invalid', 'valid');
  }
})

function changeClass(cl1, cl2) {
  inputField.classList.add(cl1);
  inputField.classList.remove(cl2);
}