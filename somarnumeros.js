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