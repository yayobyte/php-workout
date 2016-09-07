<?php
	$num = rand(-5,5);
	echo "El n&uacute;mero generado es " . $num . ", en letras : ";
    $obj1 = ["Menos Cinco", "Menos Cuatro", "Menos tres", "Menos dos","Menos uno", "Cero", "Uno", "Dos", "Tres","Cuatro", "Cinco"];
    $obj2 = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
    $clave = array_search ($num,$obj2);
    echo $obj1[$clave];
?>