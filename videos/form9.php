<?php
    $nombre = $_POST['nombre'];
    $valor = $_POST['radioEstudios'];
    if ($valor == 1) {$texto = "no tiene estudios";}
    if ($valor == 2) {$texto = "tiene estudios primarios";}
    if ($valor == 3) {$texto = "tiene estudios secundarios";}
	echo $nombre . $texto;
?>