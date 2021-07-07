//Mascara no Telefone
$(document).ready(function(){
    $("#telefone").mask("(99) 99999-9999");
});


function validarCampos(){

    let ret = true;

    let form = document.forms["formContato"];


    //Limpar as Mensagens
    let msgErro = document.getElementById("msgErro");
    msgErro.innerHTML = "";


    //Validação do nome completo
    if (form.nomesobrenome.value.trim() == ""){
        msgErro.innerHTML = "Por favor preencha o campo Nome <br>";
        form.nomesobrenome.focus();
        ret = false;
    }


    //Validação do email
    if ((form.email.value.indexOf(".") == -1) || 
        (form.email.value.indexOf("@") == -1)){
            msgErro.innerHTML = msgErro.innerHTML + "Por favor preencha corretamente o campo Email <br>";
            form.email.focus();
            ret = false;
    }


    //Validação do Telefone
    if (form.telefone.value.trim() == ""){
        msgErro.innerHTML = msgErro.innerHTML + "Por favor preencha o campo Telefone <br>";
        form.telefone.focus();
        ret = false;
    }


    //Validação da Mensagem
    if (form.mensagens.value.trim() == ""){
        msgErro.innerHTML = msgErro.innerHTML + "Por favor preencha o campo Mensagem <br>";
        if(form.nomesobrenome.value.trim() == ""){
            form.nomesobrenome.focus();
        }
        else if(form.email.value.trim() == ""){
            form.email.focus();
        } else{
            form.mensagens.focus();
        }
        ret = false;
    }
    
    return ret;

}