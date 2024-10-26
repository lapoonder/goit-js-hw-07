'use strict';

const form = document.querySelector('form.login-form');

function eventSubmitForm(event) {
  event.preventDefault();
  const inputEmail = event.target.elements.email.value;
  const inputPassword = event.target.elements.password.value;
  if (Boolean(inputEmail.trim()) && Boolean(inputPassword.trim())) {
    const dataUser = {
      email: inputEmail.trim(),
      password: inputPassword.trim(),
    };
    console.log(dataUser);
    form.reset();
  } else {
    window.alert('All form fields must be filled in');
  }
}

form.noValidate = true;
form.addEventListener('submit', eventSubmitForm);
