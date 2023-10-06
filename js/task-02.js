'use strict'

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const arrIngredients = ingredients.map(ingredient => createItem(ingredient));

list.append(...arrIngredients);

function createItem(elem) {
  const listItem = document.createElement('li');
  listItem.textContent = elem;
  listItem.classList.add('item');
  return listItem;
}