<?php

$db = mysqli_connect("localhost", "root", "admin", "appsalon");

if(!$db) {
    echo "Error en la conexión";
    exit;
}