'use strict';

const listItemArray = document.querySelectorAll('#categories li.item');
console.log(`Number of categories: ${listItemArray.length}`);
listItemArray.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
