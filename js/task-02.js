const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Через цикл
// const ulEl = document.querySelector('ul');
// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   console.log(ingredients[i]);
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredients[i];
//   liEl.classList.add('item');
//   elements.push(liEl);
// }

// ulEl.append(...elements);
// console.log(ulEl.append(...elements));

// // Через Map()
const ulEl = document.querySelector('ul');

const elements = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  
  return liEl;
});

ulEl.append(...elements);
console.log(ulEl.append(...elements));

// // Через функцію

// const ulEl = document.querySelector('ul');

// const makeMarkUp = ingredients => {
//   return ingredients.map(ingredient => {
//     const liEl = document.createElement('li');
//     liEl.textContent = ingredient;
//     liEl.classList.add('item');
  
//     return liEl;
//   })
// }

// const elements = makeMarkUp(ingredients);

// ulEl.append(...elements);

// console.log(ulEl.append(...elements))
