document.getElementById("botaoEnviar").addEventListener("click", mensagemFeedback);

function mensagemFeedback(event){
    let mensagem = "Feedback enviado! Agradecemos sua contribuição.";
    document.getElementById("mensagem").textContent = mensagem;

    
    //Captura os valores do formulário
    let inputNome = document.getElementById("name");
    let inputEmail = document.getElementById("email");
    let inputTelefone = document.getElementById("tel");
    let inputComentarios = document.getElementById("comentarios");
    
    if(inputNome.value === "" || inputEmail.value === "" || inputTelefone.value === "" || inputComentarios.value === ""){
        mensagem = "Por favor, preencha todos os campos antes de enviar o feedback.";
        document.getElementById("mensagem").textContent = mensagem;
        event.preventDefault();
        return;
    }

    let radios = document.querySelectorAll('input[name="gender"]');
    radios.forEach(radio => radio.checked = false);
    //Limpar os campos do formulários ao clicar em enviar
    inputNome.value = "";
    inputEmail.value = "";
    inputTelefone.value = "";
    inputComentarios.value = "";
}