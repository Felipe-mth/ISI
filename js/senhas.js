var senha = document.getElementById("input-senha").value;
var senha2 = document.getElementById("input-senha2").value;
var nome = document.getElementById("input-nome").value;
var user = document.getElementById("input-usuario").value;

function verifica_nome(){
    if(nome == null || nome == " " || nome==""){
        alert("digite seu nome infeliz!!");
    }
    else{
        alert("nome válido");
    }
}
function verifica_usuario(){
    if(user == null || user == " " || user==""){
        alert("digite seu usuario infeliz!!");
    }
    else{
        alert("usuario válido");
    }
}
function verifica_senha(){
    if(senha != senha2 || senha == ""){
        alert("senhas invalidas");
    }
    else{
        
        alert("senha aceita");
    }
}