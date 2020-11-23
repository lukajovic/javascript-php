<?php

include 'connect.php';
session_start();

if (isset($_POST['submit'])) {

    $uname = $_POST['user'];
    $pass = $_POST['pass'];
    $_SESSION['user'] = $uname;
    $_SESSION['pass'] = $pass;
}

$sql = "SELECT * FROM users WHERE ime='" . $_SESSION['user'] . "' AND pass='" . $_SESSION['pass'] . "'";


$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {

    echo "You have logged in succesfully dear ";
    header("welcome.php");
} else {

    echo "You have entered an incorrect password";
    header("refresh:2;login.html");

    exit();
}
