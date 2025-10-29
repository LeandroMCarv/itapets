function mensagemFeedback(){
    let mensagem = "Feedback enviado! Agradecemos sua contribuição.";
    document.getElementById("mensagem").textContent = mensagem;

    //Captura os valores do formulário
    let inputNome = document.getElementById("name");
    let inputEmail = document.getElementById("email");
    let inputTelefone = document.getElementById("tel");
    let inputComentarios = document.getElementById("comentarios");

    //Limpar os campos do formulários ao clicar em enviar
    inputNome.value = "";
    inputEmail.value = "";
    inputTelefone.value = "";
    inputComentarios.value = "";
}