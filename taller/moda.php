<?php
function calculateMode ($valueArray)
{
    $values = array_count_values($valueArray);
    return array_search(max($values), $values);
}