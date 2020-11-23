<?php

include 'connect.php';

$uname = $_POST["username"];
$password = $_POST["pass"];

$sql = "INSERT INTO korsinici(ime,sifra) VALUES ('$uname','$password')";

mysqli_query($conn, $sql);

header("refresh:5;url=index0.html");
