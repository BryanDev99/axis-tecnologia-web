document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaChamados");

  function carregarChamados() {
    lista.innerHTML = ""; // limpa a lista

    const chamados = JSON.parse(localStorage.getItem("chamados")) || [];

    if (chamados.length === 0) {
      lista.innerHTML = "<p>Nenhum chamado registrado.</p>";
      return;
    }

    chamados.forEach((chamado) => {
      const div = document.createElement("div");
      div.classList.add("chamado");

      div.innerHTML = `
        <h3>${chamado.titulo}</h3>
        <p><strong>Problema:</strong> ${chamado.problema}</p>
        <p><strong>Técnico:</strong> ${chamado.tecnico}</p>
        <p><strong>Prioridade:</strong> ${chamado.prioridade}</p>
        <small><em>Registrado em ${chamado.data}</em></small><br>
        <button class="btn-fechar" data-id="${chamado.id}">Fechar chamado</button>
        <hr>
      `;

      lista.appendChild(div);
    });

    // Adiciona evento aos botões criados dinamicamente
    document.querySelectorAll(".btn-fechar").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        fecharChamado(id);
      });
    });
  }

  function fecharChamado(id) {
    let chamados = JSON.parse(localStorage.getItem("chamados")) || [];
    chamados = chamados.filter((chamado) => chamado.id != id); // remove o chamado
    localStorage.setItem("chamados", JSON.stringify(chamados));
    carregarChamados(); // recarrega a lista
  }

  carregarChamados(); // exibe ao abrir a página
});
