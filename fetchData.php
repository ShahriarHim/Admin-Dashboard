<?php
include 'dbConfig.php';

// Fetch data from the database
$sql = "SELECT * FROM environmental_data ORDER BY timestamp DESC LIMIT 1"; // Assuming you want the latest data
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $temperature = $row['temperature'];
    $humidity = $row['humidity'];
    $pressure = $row['pressure'];
    $soil_moisture = $row['soil_moisture'];
    $soil_nutrients = $row['soil_nutrients'];
    $timestamp = $row['timestamp'];
} else {
    // No data found
    $temperature = $humidity = $pressure = $soil_moisture = $soil_nutrients = $timestamp = "N/A";
}

// Close the database connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Environmental Dashboard</title>
</head>
<body>

<h1>Environmental Dashboard</h1>

<div>
    <h2>Latest Data</h2>
    <ul>
        <li>Temperature: <?php echo $temperature; ?></li>
        <li>Humidity: <?php echo $humidity; ?></li>
        <li>Pressure: <?php echo $pressure; ?></li>
        <li>Soil Moisture: <?php echo $soil_moisture; ?></li>
        <li>Soil Nutrients: <?php echo $soil_nutrients; ?></li>
        <li>Timestamp: <?php echo $timestamp; ?></li>
    </ul>
</div>

<!-- Add your visualization code here (e.g., using JustGauge, Chart.js, D3.js) -->

</body>
</html>
