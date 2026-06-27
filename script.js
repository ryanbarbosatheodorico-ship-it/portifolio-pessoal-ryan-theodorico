const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "") {
        alert("Por favor, insira o seu nome.");
        return;
    }
    if (email === "") {
        alert("Por favor, insira seu e-mail.");
        return;
    }
    if (!email.includes("@")) {
        alert("Digite um e-mail válido.");
        return;
    }
    if (mensagem === "") {
        alert("Por favor, escreva uma mensagem.");
        return;
    }
    alert("Mensagem enviada! Agradeço o contato!");
    formulario.reset();
});