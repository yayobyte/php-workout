<?php
	$num = rand(1,100);
	echo "el numero generado es ". $num . "<br>";
	if ($num<10){
		echo "el numero generado es de un digito";
	}else {
	    if ($num<100){
            echo "el numero generado es de dos digitos";
        }else {
            echo "el numero generado es de tres digitos";
        }
	}
?>