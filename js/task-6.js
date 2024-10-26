function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Поле ввода кол-ва вложенных элементов
const inputNum = document.querySelector('#controls input');

//Функция очистки поля ввода кол-ва вложенных элементов
function cleanInputField() {
  inputNum.value = '';
}

//Очистка контейнера по нажатию кнопки Destroy с помощью function destroyBoxes()
const btnDestroy = document.querySelector('button[data-destroy]');
btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}

//Создание вложенных элементов
const btnCreate = document.querySelector('button[data-create]');
btnCreate.addEventListener('click', clickBtnCreate);

function clickBtnCreate(event) {
  //Если введенное значение больше 100 или меньше 1, очистить поле ввода
  if (inputNum.value > 100 || inputNum.value < 1) {
    cleanInputField();
  } else {
    //Иначе наполнить контейнер элементами и очистить поле ввода
    createBoxes(inputNum.value);
    cleanInputField();
  }
}

//Функция заполнения контейнера новыми элементами
function createBoxes(amount) {
  const divBoxes = document.querySelector('#boxes');

  //Клонирую текущий контейнер для создаваемых div-ов и чищу его
  const newDivElements = divBoxes.cloneNode(true);
  newDivElements.innerHTML = '';

  //Создание вложенных div-ов
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement('div');
    const widthHeight = 30 + 10 * i;
    newDiv.style.width = `${widthHeight}px`;
    newDiv.style.height = `${widthHeight}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newDivElements.append(newDiv);
  }

  //Замена текущего контейнера на новый
  divBoxes.replaceWith(newDivElements);
}
