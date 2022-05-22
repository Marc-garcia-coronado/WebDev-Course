<?php 
declare(strict_types=1);
include 'includes/header.php';

function multiplicar(float $firstValue, float $secondValue) :float{
    return $firstValue * $secondValue;
};

$resultadoFromMultiplicar  = multiplicar(10.5, 3.0);

echo $resultadoFromMultiplicar;


include 'includes/footer.php';