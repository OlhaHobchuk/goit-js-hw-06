const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');


inputEl.addEventListener('input', onInputClick);

console.dir(inputEl);

function onInputClick(event) {
    spanEl.style.fontSize = inputEl.value + "px";
}
 