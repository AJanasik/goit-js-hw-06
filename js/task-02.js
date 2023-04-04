const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const fragment = document.createDocumentFragment();
const ul = document.querySelector("#ingredients");

for (let ingredient of ingredients) {
  const li = document.createElement(`li`);
  li.textContent = ingredient;
  li.classList.add("item");
  fragment.appendChild(li);
}

ul.appendChild(fragment);
