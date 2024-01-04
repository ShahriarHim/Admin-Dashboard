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
    <!-- Include Chart.js library -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- Include jQuery library -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./vendors/chart.js/Chart.min.js"></script>

    <script src="./js/off-canvas.js"></script>
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
    <script>
        // Fetch data from the server using AJAX
        $.ajax({
            url: 'getData.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Create barChart
                var ctxBarChart = document.getElementById('barChart').getContext('2d');
                var barChart = new Chart(ctxBarChart, {
                    type: 'bar',
                    data: {
                        labels: ['Temperature', 'Humidity', 'Pressure', 'Soil Moisture', 'Soil Nutrients'],
                        datasets: [{
                            label: 'Sensor Data',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            data: [<?php echo $temperature; ?>, <?php echo $humidity; ?>, <?php echo $pressure; ?>, <?php echo $soil_moisture; ?>, <?php echo $soil_nutrients; ?>],
                        }],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Environmental Sensor Data',
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Sensor Reading',
                                },
                            }],
                            xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Environmental Parameter',
                                },
                            }],
                        },
                    },
                });
            },
            error: function(error) {
                console.error(error);
            },
        });
    </script>
    <!-- Chart.js Bar Chart to visualize data -->
    <div class="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Scatter chart</h4>
                <canvas id="barChart"></canvas>
            </div>
        </div>
    </div>


</body>

</html>