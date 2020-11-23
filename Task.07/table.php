<?php

include_once 'connect.php';

$data = $conn->query('SELECT * FROM artikli');

echo "<ul>";

foreach ($data as $row) {

    echo "<li><a href=detail.php?id=" . $row['id'] . ">$row[naziv]</a></li>";
}
echo "</ul>";
