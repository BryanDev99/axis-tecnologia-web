const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!username.value || !password.value) {
    alert("Campo vazio identificado!");
    return;
  }

  window.location.href = "tickets.html";
});
