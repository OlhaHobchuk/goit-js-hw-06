const categoriesEl = document.querySelector('#categories');
const itemsRef = document.querySelectorAll('.item');
const itemHeadingEl = document.querySelectorAll('h2');
const listsRef = document.querySelectorAll('li>ul');


console.log("Number of categories:", itemsRef.length);
console.log('Category:', itemHeadingEl[0].textContent);
console.log('Elements:', listsRef[0].childElementCount);

console.log('Category:', itemHeadingEl[1].textContent)
console.log('Elements:', listsRef[1].childElementCount);

console.log('Category:', itemHeadingEl[2].textContent)
console.log('Elements:', listsRef[2].childElementCount);