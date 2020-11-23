<?php

$broj = $_POST["broj"];

$sum = 0;

for ($i = 1; $i <= $broj; $i++) {

    if ($i % 2 !== 0) {


        $sum = $sum + $i;
    }
}

echo $sum;



?>;