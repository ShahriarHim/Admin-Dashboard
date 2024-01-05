<?php
include 'dbConfig.php';

// Fetch the last 3 records from the database
$sql = "SELECT * FROM environmental_data ORDER BY timestamp DESC LIMIT 3";
$result = $conn->query($sql);

$t_data = $h_data = $p_data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Populate arrays with data
        $t_data[] = $row['temperature'];
        $h_data[] = $row['humidity'];
        $p_data[] = $row['pressure'];
    }
}

// Close the database connection
$conn->close();

// Now $t_data, $h_data, and $p_data contain the last 3 records for temperature, humidity, and pressure respectively.
?>
