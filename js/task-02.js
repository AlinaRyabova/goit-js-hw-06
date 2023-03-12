const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const createIngradientItem = (ingredient) => {
  const ingradientItem = document.createElement(`li`);
  ingradientItem.textContent = ingredient;
  ingradientItem.classList.add(`item`);
  return ingradientItem;
};

const ingradientItems = ingredients.map(createIngradientItem);
ingredientsList.append(...ingradientItems);

console.log(ingredients);
