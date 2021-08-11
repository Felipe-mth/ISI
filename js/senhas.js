let senha = document.getElementById("input-senha").value;
let senha2 = document.getElementById("input-senha2").value;
let nome = document.getElementById("input-nome").value;
let user = document.getElementById("input-usuario").value;
function verifica_nome(){
    if(document.getElementById("input-nome").value == null || document.getElementById("input-nome").value == " " || document.getElementById("input-nome").value==""){
        alert("digite seu nome infeliz!!");
    }
    else{
        alert("cadastradas com sucesso nome");
    }
}
function verifica_usuario(){
    if(document.getElementById("input-usuario").value == null || document.getElementById("input-usuario").value == " " || document.getElementById("input-usuario").value==""){
        alert("digite seu usuario infeliz!!");
    }
    else{
        alert("cadastradas com sucesso user");
    }
}
function verifica_senha(){
    if(document.getElementById("input-senha").value !=  document.getElementById("input-senha2").value || document.getElementById("input-senha").value == ""){
        alert("senhas invalidas");
    }
    else{
        alert("cadastradas com sucesso senha");
    } 
}
