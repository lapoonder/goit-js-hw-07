function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const colorBackground = getRandomHexColor();
  document.body.style.backgroundColor = colorBackground;
  document.querySelector('span.color').textContent =
    document.body.style.backgroundColor;
}
