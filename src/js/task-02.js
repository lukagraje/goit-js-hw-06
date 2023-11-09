const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const elements = [];

for (const ingredient of ingredients) {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.classList.add("item");
  elements.push(listElement);
};

list.append(...elements);