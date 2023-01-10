function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');



buttonEl.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  spanEl.textContent = randomColor
  bodyEl.style.backgroundColor = randomColor;
});