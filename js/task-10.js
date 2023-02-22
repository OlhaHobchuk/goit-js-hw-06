function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  box: document.getElementById('boxes'),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonClear: document.querySelector("button[data-destroy]"),
}

refs.buttonCreate.addEventListener("click", onCreateButtonClick);
refs.buttonClear.addEventListener('click', destroyBoxes);

function onCreateButtonClick(event) {
  const amount = Number(refs.inputEl.value);
  createBoxes(amount);
}

function createBoxes(amount) {
 
   for (let i = 1; i <= amount; i+=1) {
     let elem = document.createElement('div');
  elem.style.backgroundColor = getRandomHexColor();
  elem.style.height = 30+i*10 + "px";
  elem.style.width = 30+i*10 + "px";
  refs.box.prepend(elem);
  }

}

function destroyBoxes(event) {
  refs.box.innerHTML = '';
  refs.inputEl.value = "";
}


