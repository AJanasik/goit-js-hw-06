function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  const nextColor = getRandomHexColor();
  document.body.style.backgroundColor = nextColor;
  color.textContent = nextColor;
});

// const changeColor = document.querySelector(".change-color");
// const color = document.querySelector(".color");

// changeColor.addEventListener("click", () => {
//   const nextColor = getRandomHexColor();
//   document.body.style.color = nextColor;
//   color.textContent = nextColor;
// });
