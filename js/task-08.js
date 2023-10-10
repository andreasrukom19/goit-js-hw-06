'use strict';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    return alert('Please fill in all the fields!');
  }

  const formObject = {
    [form.elements.email.name]: email,
    [form.elements.password.name]: password,
  };
  console.log(formObject);

  event.target.reset();
})
