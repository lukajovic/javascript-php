<?php

include 'connect.php';

$uname = $_POST["user"];
$password = $_POST["pass"];

$sql = "INSERT INTO users(ime,pass) VALUES ('$uname','$password')";

mysqli_query($conn, $sql);

header("refresh:2;url=login.html");
