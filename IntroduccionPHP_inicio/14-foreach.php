<?php include 'includes/header.php';

// For Each

$clientes = [
    "nombre" => "Marc",
    "saldo" => 200,
    "tipo" => "Premium"
];

foreach ($clientes as $key => $value) {
    echo $key . " -> " . $value . "<br>";
};


include 'includes/footer.php';