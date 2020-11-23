<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'connect.php';


$stmt = $conn->prepare('SELECT * FROM artikli WHERE id = :id');
$stmt->bind_param(":id", $_GET['id']);
$data = $stmt->execute();
