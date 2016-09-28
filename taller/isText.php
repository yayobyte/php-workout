<?php
function isText ($testcase) {
    if (ctype_alpha($testcase)) {
        echo "The string $testcase consists of all letters.\n";
    } else {
        echo "The string $testcase does not consist of all letters.\n";
    }
}