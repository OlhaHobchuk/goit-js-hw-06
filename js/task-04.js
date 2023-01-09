const counter = {
    counterValue: 0,

    increment() {
        this.counterValue += 1;
    },

    decrement() {
       this.counterValue -= 1; 
    }
}

const counterValueEl = document.querySelector('#value');
console.log(counterValueEl);



const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]');

console.log(decrementBtn);
console.log(incrementBtn);


decrementBtn.addEventListener('click', () => {
    counter.decrement();
    counterValueEl.textContent = counter.counterValue;
});


incrementBtn.addEventListener('click', () => {
    console.log("click")
    counter.increment();
    counterValueEl.textContent = counter.counterValue;
});