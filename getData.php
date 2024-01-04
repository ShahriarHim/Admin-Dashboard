<?php
include 'dbConfig.php';
$sql = "SELECT * FROM environmental_data ORDER BY Timestamp DESC LIMIT 5"; // Adjust the query as needed
$result = $conn->query($sql);

$data = [];

if ($result) {
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $temperature = isset($row['temperature']) ? $row['temperature'] : null;
            $humidity = isset($row['humidity']) ? $row['humidity'] : null;
            $pressure = isset($row['pressure']) ? $row['pressure'] : null;

            $data[] = [
                'Temperature' => $temperature,
                'Humidity' => $humidity,
                'Pressure' => $pressure,
            ];
        }
    }
} else {
    // Handle query error
    die("Query failed: " . $conn->error);
}



// Close the database connection
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($data);
?>