<?php
    $n1 = $_POST['n1'];
    $n2 = $_POST['n2'];
    $operacion = $_POST['radioSuma'];
    $resultado = $operacion == "sumar" ? $n1 + $n2 : $n1 - $n2;
	echo 'Operacion: ' . $operacion . " Resultado = " . $resultado;
?>