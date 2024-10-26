'use strict';

const inputName = document.querySelector('#name-input');

function ev() {
  const helloName = this.value.trim();
  document.querySelector('span#name-output').textContent = helloName
    ? helloName
    : 'Anonymous';
}

inputName.addEventListener('input', ev);
