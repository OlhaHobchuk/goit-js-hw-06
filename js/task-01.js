const liEl = document.querySelectorAll('.item');
console.log("Number of categories:", liEl.length);

liEl.forEach(element => {
    const firstEl = element.firstElementChild;
    const lastEl = element.lastElementChild;
    console.log('Category:', firstEl.textContent);
    console.log('Elements:', lastEl.childElementCount);
})