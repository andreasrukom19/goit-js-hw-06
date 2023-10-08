'use strict';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  const formObject = {};

  if (!email || !password) {
    alert('Please fill in all the fields!');
  } else {
    formObject[form.elements.email.name] = email;
    formObject[form.elements.password.name] = password;
    console.log(formObject);
  }

  loginForm.reset();
})
