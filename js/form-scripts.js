document.getElementById("ticketForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = document.getElementById("title").value.trim();
  const problema = document.getElementById("problem").value.trim();
  const tecnico = document.querySelector(
    'input[name="tecnico"]:checked'
  )?.value;
  const prioridade = document.querySelector(
    'input[name="prioridade"]:checked'
  )?.value;

  // Validação simples
  if (!titulo || !problema || !tecnico || !prioridade) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return;
  }

  const novoChamado = {
    id: Date.now(),
    titulo,
    problema,
    tecnico,
    prioridade,
    data: new Date().toLocaleString(),
  };

  // Recupera os chamados existentes
  const chamados = JSON.parse(localStorage.getItem("chamados")) || [];

  // Adiciona o novo chamado
  chamados.push(novoChamado);

  // Salva no localStorage
  localStorage.setItem("chamados", JSON.stringify(chamados));

  alert("Chamado enviado com sucesso!");
  e.target.reset(); // limpa o formulário

  // Redireciona para a página de tickets
  window.location.href = "tickets.html";
});
