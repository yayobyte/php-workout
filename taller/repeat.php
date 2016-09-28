<?php
function repeat ($text, $val) {
    $repeat = $val;
    $return = '';
    $c=0;
    while ($c<$repeat){
        $return .= $text;
        $c++;
    }
    return $return;
}