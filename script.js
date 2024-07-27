let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputMsg = document.getElementById("msg");
let btn = document.getElementById("btn");

btn.addEventListener("click", function enviar(){
    if (inputNome.value == ""){
        alert("Por favor, adicione o Nome")
    } else if (inputEmail.value == ""){
        alert("Por favor, adicione o Email")
    } else if (inputMsg.value == ""){
        alert("Por favor, adicione uma Mensagem")
    } else{
        alert("Mensagem enviada com sucesso!")
    }
})