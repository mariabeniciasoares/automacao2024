document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio real do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "admin@example.com" && password === "123456") {
        alert("Login bem-sucedido!");
    } else {
        alert("E-mail ou senha inválidos.");
    }
});
