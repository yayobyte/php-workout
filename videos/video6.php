<?php
	$num = rand(1,20);
	echo "el numero generado es ". $num . "<br>";
	if ($num<10){
		echo "el numero generado es de un digito";
	}else {
		echo "el numero generado es de dos digitos";
	}
?>