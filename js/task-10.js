function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divElement = document.querySelector("#boxes");
const quantity = document.querySelector("input[type='number']");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

const createBox = (amount) => {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = 30 + 10 * i + `px`;
    box.style.height = 30 + 10 * i + `px`;
    box.style.backgroundColor = getRandomHexColor();
    divElement.append(box);
  }
};

btnCreate.addEventListener("click", () => createBox(quantity.value));

function destroyBoxes() {
  quantity.value = null;
  divElement.innerHTML = null;
}
btnDestroy.addEventListener(`click`, destroyBoxes);
