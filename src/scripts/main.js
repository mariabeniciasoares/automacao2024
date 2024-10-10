console.log('Página carregada com sucesso!');

// Seleciona o formulário pelo seu ID
const contatoForm = document.getElementById('contatoForm');

// Adiciona um evento de envio ao formulário
contatoForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Seleciona os campos do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('emailContato').value.trim(); // Corrigido o ID para emailContato
    const celular = document.getElementById('celular').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica
    if (!nome || !email || !celular || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Validação do formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }

    // Validação do formato de celular (opcional)
    const celularRegex = /^\(\d{2}\) \d{5}-\d{4}$/; // Ex: (XX) XXXXX-XXXX
    if (!celularRegex.test(celular)) {
        alert('Por favor, insira um número de celular válido! Exemplo: (XX) XXXXX-XXXX');
        return;
    }

    // Se tudo estiver correto, exibe um alerta de sucesso
    alert('Mensagem enviada com sucesso!');

    // Limpa o formulário após o envio
    contatoForm.reset();

    // Exibe a seção sobre após o envio
    document.getElementById('sobre').style.display = 'none'; // Oculta a seção "Sobre" após o envio
});

// Exibe a seção sobre ao clicar no link
document.getElementById('linkSobre').addEventListener('click', (event) => {
    event.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById('sobre').style.display = 'block'; // Mostra a seção sobre
});

// Fecha a seção sobre ao clicar no botão "Fechar"
document.getElementById('btnFechar').addEventListener('click', () => {
    document.getElementById('sobre').style.display = 'none'; // Oculta a seção sobre
});
