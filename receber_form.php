<!-- Não conseguimos fazer essa transferência de dados -->
<?php
    if (isset($_POST["acao"])){
    echo "<script>alert('Formulário Foi enviado pelo método POST')</script>";
    }

    if (isset($_POST["acao"])){
        $nome=$_POST["nomesobrenome"];
        $telefone=$_POST["telefone"];
        $email=$_POST["email"];
        $msg=$_POST["mensagens"];
        $radio=$_POST["contato"];

        echo "<p>Olá, ".$nome."</p>";
        echo "<p>Seu email é: ".$email."</p>";
        echo "<p>Seu telefone é: ".$telefone."</p>";
        echo "<p>Sua mensagem é:<br/>".$msg."</p>";

        if ($radio=="email"){
            echo "<p>Você escolheu receber nossas novidades por email</p>";
        }elseif ($radio=="telefone") {
            echo "<p>Você escolheu receber nossas novidades por telefone</p>";
        }elseif ($radio=="whatsapp") {
            echo "<p>Você escolheu receber nossas novidades por whatsapp</p>";
        }
        
    }
?>