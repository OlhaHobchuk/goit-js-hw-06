const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        alert("Заповніть всі поля будь ласка!");
        
    } else if (event.currentTarget.elements.email.value !== '' || event.currentTarget.elements.password.value !== '') {
 event.preventDefault();
    
    const object = {
        mail: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    };
    
    console.log(object);
    form.reset();
    };
}
