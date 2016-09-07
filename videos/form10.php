<?php
    $n1 = $_POST['n1'];
    $n2 = $_POST['n2'];
    $sumar = $_POST['sumar'];
    $restar = $_POST['restar'];
    $text = '';
    if ($sumar) {
        $sum = $n1 + $n2;
        $text .= ' la suma es : ' . $sum ;
    }
    if ($restar) {
        $sub = $n1 - $n2;
        $text .= ' la resta es : ' . $sub ;
    }
    echo $text;
?>