let inputEl = document.querySelector('#name-input');
let spanEl = document.querySelector('#name-output');

console.log(inputEl);
console.log(spanEl);

inputEl.addEventListener('input', onInputTextEnter);

function onInputTextEnter(event) {
        spanEl.textContent = event.currentTarget.value || "Anonymous";
}