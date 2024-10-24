// main.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio real do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
    const errorMessage = document.getElementById('error-message');
    const message = document.getElementById('message'); // Presumo que existe um elemento de mensagem

    // Limpa mensagens de erro anteriores
    errorMessage.textContent = '';
    message.style.display = 'none'; // Esconde a mensagem de informação

    // Valida o formato do e-mail
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidation.test(email)) {
        errorMessage.textContent = "Por favor, insira um e-mail válido.";
        errorMessage.style.display = 'block';  // Exibe a mensagem de erro
        return; // Para a execução se o e-mail não for válido
    }

    // Valida a senha
    const passwordValidation = /^(?=.*[a-z])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passwordValidation.test(password)) {
        /* 
        errorMessage.textContent = "A senha deve ter pelo menos 6 caracteres, incluindo letras minúsculas e um caractere especial."; 
        */
        errorMessage.innerHTML = "A senha deve ter pelo menos 6 caracteres,incluindo letras minúsculas<br> e um caractere especial."; // Usar innerHTML para permitir HTML
        errorMessage.style.display = 'block';  // Exibe a mensagem de erro
        return; // Para a execução se a senha não for válida
    }

    // Verifica as credenciais
    const validEmail = "login@gmail.com";
    const validPassword = "123qW@";

    if (email === validEmail && password === validPassword) {
        // Exibe uma mensagem de que a página ainda não foi construída
        message.textContent = "Esta página ainda não foi construída.";
        message.style.display = "block"; // Exibe a mensagem

        // Limpa os campos de e-mail e senha
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';

        // Limpa as mensagens após 3 segundos
        setTimeout(function() {
            message.style.display = 'none'; // Esconde a mensagem
            errorMessage.textContent = ''; // Limpa a mensagem de erro
        }, 3000); // Tempo em milissegundos

    } else if (email !== validEmail) {
        errorMessage.textContent = "E-mail inválido. Para este teste, utilize o e-mail: " + validEmail;
        errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    } else {
        errorMessage.textContent = "Senha inválida.";
        errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    }
});

// Adiciona o evento de blur para validar a senha ao perder o foco
const senhaInput = document.getElementById('senha');
const errorMessage = document.getElementById('error-message'); // Já declarado anteriormente

function validarSenha() {
    if (senhaInput.value !== '123qW@') {  // Exemplo de validação
        errorMessage.textContent = 'Senha inválida';
        errorMessage.style.display = 'block';  // Exibe a mensagem de erro
    } else {
        errorMessage.style.display = 'none';  // Oculta a mensagem de erro
    }
}

// Valida a senha ao perder o foco (blur)
senhaInput.addEventListener('blur', validarSenha);

// Adiciona a funcionalidade ao botão Google
document.querySelector('.btn-google').addEventListener('click', function() {
    // Exibe a mensagem de que a página ainda não foi construída
    message.textContent = "Esta página ainda não foi construída.";
    message.style.display = "block"; // Exibe a mensagem

    // Limpa os campos de e-mail e senha
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';

    // Limpa a mensagem após 3 segundos
    setTimeout(function() {
        message.style.display = 'none'; // Esconde a mensagem
    }, 3000); // Tempo em milissegundos
});

// Adiciona a funcionalidade ao link "Esqueceu a senha?"
document.querySelector('.forgot-password').addEventListener('click', function(event) {
    event.preventDefault(); // Impede a ação padrão do link
    const email = prompt("Por favor, insira seu e-mail para recuperação de senha:");
    
    // Simulando o envio do e-mail para recuperação de senha
    if (email) {
        alert(`Instruções para redefinir a senha foram enviadas para ${email}.`);
    } else {
        alert("Email não informado.");
    }

    // Exibe a mensagem de que a página ainda não foi construída
    const message = document.getElementById('message'); // Certifique-se de que esta variável está definida
    message.textContent = "Esta página ainda não foi construída.";
    message.style.display = "block"; // Exibe a mensagem

     // Limpa os campos de e-mail e senha
     document.getElementById('email').value = '';
     document.getElementById('senha').value = '';
 
     // Limpa a mensagem após 3 segundos
     setTimeout(function() {
         message.style.display = 'none'; // Esconde a mensagem
     }, 3000); // Tempo em milissegundos
});

// Adiciona a funcionalidade ao link "Cadastre-se"
document.querySelector('.signup-link a').addEventListener('click', function(event) {
    event.preventDefault(); // Impede a ação padrão do link

    // Exibe a mensagem de que a página ainda não foi construída
    const message = document.getElementById('message'); // Certifique-se de que esta variável está definida
    message.textContent = "Esta página ainda não foi construída.";
    message.style.display = "block"; // Exibe a mensagem

    // Limpa os campos de e-mail e senha
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';

    // Limpa a mensagem após 3 segundos
    setTimeout(function() {
        message.style.display = 'none'; // Esconde a mensagem
    }, 3000); // Tempo em milissegundos
});

// Adiciona a funcionalidade ao checkbox "Lembre de mim"
document.getElementById('lembrar').addEventListener('click', function() {
    const message = document.getElementById('message'); // Certifique-se de que este elemento existe
    message.textContent = "A funcionalidade 'Lembre de mim' ainda não foi implementada.";
    message.style.display = 'block'; // Exibe a mensagem

    // Limpa a mensagem após 3 segundos
    setTimeout(function() {
        message.style.display = 'none'; // Esconde a mensagem
    }, 3000); // Tempo em milissegundos
});

