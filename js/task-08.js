const login = document.querySelector(".login-form");

login.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = login.elements.email;
  const password = login.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Wypełnij wszystkie pola.");
    return;
  }
  console.log(`email: ${email.value}, password: ${password.value}`);
  login.reset();
});
