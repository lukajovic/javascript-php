<?php

include_once 'connect.php';

$sql = "SELECT name,cena FROM artikli";
$result = $conn->query($sql);


if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {

        echo "<tr><br><td><br>" . $row["name"] . "</td><td> " . $row["cena"] . "</td></tr>";
    }

    echo "</table>";
} else {

    echo "0 results";
}

// $conn->close();
