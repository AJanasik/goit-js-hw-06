const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

for (let ingredient of ingredients) {
  const li = document.createElement(`li`);
  li.textContent = ingredient;
  li.classList.add("item");
  ul.append(li);
}