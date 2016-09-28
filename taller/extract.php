<?php
$string = $_GET['text'];
$position = $_GET['position'];
$len = $_GET['len'];
echo substr($string, $position, $len);