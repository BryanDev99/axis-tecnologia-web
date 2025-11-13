const btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("mousedown", (e) => {
  e.preventDefault();

  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#message").value = "";
  
  alert("Mensagem enviada! Aguarde a resposta em até 4 horas!");
});

