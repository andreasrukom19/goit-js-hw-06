'use strict'

const list = document.querySelector('#categories');

const items = list.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2');
  console.log(`Category: ${title.textContent}`);
  const listName = item.querySelectorAll('li');
  console.log(`Elements: ${listName.length}`);
})