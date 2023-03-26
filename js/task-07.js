const control = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

control.addEventListener("input", () => {
  const fontSize = control.value;
  text.style.fontSize = fontSize + "px";
});
