<?php

include 'connect.php';
session_start();
if (isset($_POST['submit'])) {

    $uname = $_POST['uname'];
    $pass = $_POST['password'];
    $_SESSION['login_user'] = $uname;
}

$sql = "Select * from korsinici where ime='" . $uname . "' AND sifra='" . $pass . "'";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {

    echo " You have loggied in succesfully";
    header("refresh:2;url=index2.html");
} else {

    echo "You have entered an incorrect password";

    exit();
}
