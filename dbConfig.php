<?php
$serverName = "localhost";
$username = "root";
$password = "";
$dbname = "env_dashboard"; // Uncomment this line and provide your actual database name

$conn = mysqli_connect($serverName, $username, $password, $dbname);

if ($conn) {
    echo "Connection successful";
} else {
    die("Connection failed: " . mysqli_connect_error());
}
?>
