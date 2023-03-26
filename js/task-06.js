const validation = document.querySelector("#validation-input");

validation.addEventListener("blur", () => {
  validation.value.length === +validation.dataset.length
    ? (validation.className = "valid")
    : (validation.className = "invalid");
});

// const inputEl = document.getElementById("validation-input");

// inputEl.addEventListener("blur", () => {
//   inputEl.value.length === +inputEl.dataset.length
//     ? (inputEl.className = "valid")
//     : (inputEl.className = "invalid");
// });
