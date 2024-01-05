<?php
include 'dbConfig.php';

// Function to generate random environmental data
function generateDummyData()
{
    $temperature = rand(-30, 100);
    $humidity = rand(30, 110);
    $pressure = rand(900, 1500);
    $soil_moisture = rand(30, 150);
    $soil_nutrients = rand(10, 90);

    $data = [
        'temperature' => $temperature,
        'humidity' => $humidity,
        'pressure' => $pressure,
        'soil_moisture' => $soil_moisture,
        'soil_nutrients' => $soil_nutrients,
    ];

    return $data;
}

// Handle user input to start/stop data insertion
if (isset($_POST['action'])) {
    if ($_POST['action'] === 'start') {
        $message = 'Generating dummy data every 30s...';

        while (true) {
            if (isset($_POST['stopInsertion'])) {
                break;
            }

            $data = generateDummyData();
            $sql = "INSERT INTO environmental_data (temperature, humidity, pressure, soil_moisture, soil_nutrients) 
                    VALUES ('{$data['temperature']}', '{$data['humidity']}', '{$data['pressure']}', '{$data['soil_moisture']}', '{$data['soil_nutrients']}')";

            if ($conn->query($sql) === TRUE) {
                echo json_encode(['status' => 'success', 'message' => 'New record created successfully']);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'Error: ' . $sql . "\n" . $conn->error]);
            }

            // Sleep for 30 seconds
            sleep(30);
        }
    } elseif ($_POST['action'] === 'stop') {
        echo json_encode(['status' => 'stopped', 'message' => 'Data insertion stopped!']);
    }

    exit;
}

// Close the database connection
$conn->close();
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Start/Stop Data Insertion</title>
</head>

<body>

    <h1>Control Data Insertion</h1>

    <p><?php echo $message; ?></p>

    <form method="post">
        <button type="submit" name="startInsertion">Start Insertion</button>
        <button type="submit" name="stopInsertion">Stop Insertion</button>
    </form>

</body>

</html>