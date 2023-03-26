const counterValue = document.querySelector("#value");
let currentValue = 0;

const decrement = document.querySelector("[data-action='decrement']");
decrement.addEventListener("click", () => {
  currentValue--;
  counterValue.textContent = currentValue;
});

const increment = document.querySelector("[data-action='increment']");
increment.addEventListener("click", () => {
  currentValue++;
  counterValue.textContent = currentValue;
});
