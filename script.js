function adicionarAlimento() {
    var alimentoInput = document.getElementById("alimento");
    var caloriasInput = document.getElementById("calorias");
    var gramasInput = document.getElementById("gramas");
    
    var alimento = alimentoInput.value;
    var calorias = caloriasInput.value;
    var gramas = gramasInput.value;
    
    if (alimento === "" || calorias === "" || gramas === "") {
      alert("Por favor, preencha todos os campos antes de adicionar o alimento.");
      return;
    }
    
    var tipoSelect = document.getElementById("tipo");
    var tipo = tipoSelect.options[tipoSelect.selectedIndex].text;
    
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow();
    
    var colunaAlimento = novaLinha.insertCell();
    var colunaCalorias = novaLinha.insertCell();
    var colunaGramas = novaLinha.insertCell();
    var colunaTipo = novaLinha.insertCell();
    
    colunaAlimento.innerHTML = alimento;
    colunaCalorias.innerHTML = calorias;
    colunaGramas.innerHTML = gramas;
    colunaTipo.innerHTML = tipo;
    
    limparCampos();
    
    exibirMensagemSucesso("Alimento adicionado com sucesso!");
  }
  
  function limparCampos() {
    document.getElementById("alimento").value = "";
    document.getElementById("calorias").value = "";
    document.getElementById("gramas").value = "";
  }
  
  function exibirMensagemSucesso(mensagem) {
    var successMessage = document.getElementById("success-message");
    successMessage.innerHTML = mensagem;
    successMessage.style.display = "block";
    setTimeout(function() {
      successMessage.style.display = "none";
    }, 3000);
  }