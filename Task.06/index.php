<?php

include_once 'connect.php';

$artikal = $_POST["artikal"];
$cena = $_POST["cena"];

$sql = "INSERT INTO artikli(name,cena) VALUES ('$artikal','$cena')";



mysqli_query($conn, $sql);

header("refresh:1;url=tabela.php");
