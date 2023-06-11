<!DOCTYPE html>
<html>

<head>
<title>js</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta charset="utf-8"/>

<style type="text/css">
    body{
background-color: blueviolet;
font-size: medium;
align-items: center;
margin:auto;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
margin:auto;
    }

    div{

        padding:10%
    }

    form{
        border-width: 2px;
        border: black solid;
        width:300px ;
        height:300px ;
        text-align: center;
        padding:10 10 10 10;
        position:absolute;
        margin:auto;
        top:30%;
        left:35%;
        background-color:aquamarine;
    }

#somar{
background-color: black;
padding:5px 10px ;
color:#FFF;

}

#creditos{

    font-style: italic;
    text-align: right;
    color:black;
    font-size: small;

}

</style>

</head>

<body>

<form name="Formsoma" action="" autocomplete="off" method="post">
    <h3>Somar dois numeros inteiros</h3>
    <p>Inclua o primeiro numero:</p>
    <input type="number" name="j_primeironumero" id="j_primeironumero">
    <p>Inclua o segundo numero:</p>
    <input type="number" name="j_segundonumero" id="j_segundonumero">
    <br><br>
    <input type="button" name="somar" id="somar" Value="Somar" onclick="somarnumeros()">
    <br><br><div id="creditos">Renata Veras</div>
</form>


<!-- Definição do código JavaScript -->
<script language="javascript">
<!--
/* Objetivo: Capturar 2 números, e somá-los*/
/* Definição das Variáveis */
var js_primeironumero;
var js_segundonumero;
var js_soma;

function somarnumeros() {
/* Entrada de Dados */
js_primeironumero = parseInt(document.getElementById('j_primeironumero').value);
js_segundonumero = parseInt(document.getElementById('j_segundonumero').value);
/* Processamento de Dados */
js_soma= js_primeironumero + js_segundonumero;
/* Saída de Dados */
window.alert('Resultado da soma: ' + js_soma);
}
</script>
</body>
</html>
