<?php

include_once 'connect.php';
session_start();

if (isset($_POST['Submitted'])) {

    $artikal = $_POST["artikal"];
    $vrednost = $_POST["vrednost"];
}


$sql = "INSERT INTO artikli (naziv,cena,korisnik) VALUES ('$artikal','$vrednost','{$_SESSION['login_user']}')";

mysqli_query($conn, $sql);

header("refresh:5;url=index0.html");
