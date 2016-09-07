<?php
	echo "El nombre ingresado es: ".$_POST['nombre'];
    $estado = $_POST['edad'] > 17 ? "es mayor de edad" : "es menor de edad";
    echo $estado;
?>