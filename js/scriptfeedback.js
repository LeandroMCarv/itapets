document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formFeedback') || document.querySelector("form");
    const mensagemBox = document.getElementById("mensagem");
    if (!form) {
        console.error('Formulário não encontrado no DOM. Verifique se existe um <form> na página.');
        return;
    }

const campos = {
    nome: document.getElementById("name"),
    email: document.getElementById("email"),
    telefone: document.getElementById("tel"),
    comentarios: document.getElementById("comentarios"),
};

    const radios = document.querySelectorAll('input[name="gender"]');
    const telefoneInput = campos.telefone;
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function (e) {
            const digitos = this.value.replace(/\D/g, '').slice(0, 11);
            let formatted = '';
            if (digitos.length <= 2) {
                formatted = '(' + digitos;
            } else if (digitos.length <= 7) {
                formatted = '(' + digitos.slice(0, 2) + ')' + digitos.slice(2);
            } else {
                formatted = '(' + digitos.slice(0, 2) + ')' + digitos.slice(2, 7) + '-' + digitos.slice(7);
            }
            this.value = formatted;
        });
    }

function exibirMensagem(texto, tipo) {
    if (mensagemBox) {
        mensagemBox.className = `alert alert-${tipo} alert-dismissible fade show mt-3`;
        mensagemBox.setAttribute('role', 'alert');
        mensagemBox.innerHTML = `
            ${texto}
            <button type="button" class="btn-close" aria-label="Fechar"></button>`;
        const btnClose = mensagemBox.querySelector('.btn-close');
        if (btnClose) {
            btnClose.addEventListener('click', function () {
                mensagemBox.className = 'alert d-none mt-3';
                mensagemBox.removeAttribute('role');
                mensagemBox.innerHTML = '';
            });
        }
    } else {
        alert(texto);
    }
}

    function validarCampos() {
        let valido = true;
        let erro = null;
        for (const key in campos) {
            const campo = campos[key];
            if (!campo || campo.value.trim() === "") {
                if (campo) {
                    campo.classList.add("is-invalid");
                    campo.classList.remove("is-valid");
                }
                valido = false;
            } else {
                campo.classList.add("is-valid");
                campo.classList.remove("is-invalid");
            }
        }
        const telefoneCampo = campos.telefone;
        if (telefoneCampo && telefoneCampo.value.trim() !== "") {
                const telefoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
                if (!telefoneRegex.test(telefoneCampo.value.trim())) {
                telefoneCampo.classList.add("is-invalid");
                telefoneCampo.classList.remove("is-valid");
                valido = false;
                    erro = 'Telefone inválido. Use o formato (00)00000-0000, ex: (79)99900-2378';
            }
        }
        const algumRadioMarcado = [...radios].some(r => r.checked);
        if (!algumRadioMarcado) {
            radios.forEach(r => {
                r.classList.add("is-invalid");
                r.classList.remove("is-valid");
            });
            valido = false;
            if (!erro) erro = 'Por favor, selecione uma opção de gênero.';
        } else {
            radios.forEach(r => {
                r.classList.add("is-valid");
                r.classList.remove("is-invalid");
            });
        }
        if (!valido && !erro) erro = 'Por favor, preencha todos os campos.';
        return { valido, erro };
    }

    function limparCampos() {
        for (const key in campos) {
            if (campos[key]) {
                campos[key].value = "";
                campos[key].classList.remove("is-valid", "is-invalid");
            }
        }
        radios.forEach(r => {
            r.checked = false;
            r.classList.remove("is-valid", "is-invalid");
        });
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const resultado = validarCampos();
        if (!resultado.valido) {
            exibirMensagem(resultado.erro || "Por favor, preencha todos os campos.", "danger");
            return;
        }
        exibirMensagem("Feedback enviado com sucesso!", "success");
        limparCampos();
    });
});