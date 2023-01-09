const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputFocus);

function onInputFocus(event) {
    if (event.currentTarget.value.length == inputEl.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    else { 
        inputEl.classList.add('invalid'); 
    }
    console.log(event.currentTarget.value.length === inputEl.dataset.length)
}



console.log(inputEl.dataset.length);