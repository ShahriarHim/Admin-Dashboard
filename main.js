var ctxBarChart = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctxBarChart, {
    type: 'bar',
    data: {
        labels: ['Sample 1', 'Sample 2', 'Sample 3'],
        datasets: [{
            label: 'Temperature (°C)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [25.5, 26.8, 24.2]
        }, {
            label: 'Humidity (%)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [60.2, 58.5, 62.0]
        }, {
            label: 'Pressure (hPa)',
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgba(255, 205, 86, 1)',
            borderWidth: 1,
            data: [1013.5, 1014.2, 1012.8]
        }]
    }
});





var ctxGaugeChart = document.getElementById('gaugeChart').getContext('2d');
var gaugeChart = new Chart(ctxGaugeChart, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [40.0, 35.5, 42.3],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)'],
            borderWidth: 0
        }]
    },
    options: {
        cutoutPercentage: 70
    }
});
var ctxPieChart = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctxPieChart, {
    type: 'pie',
    data: {
        labels: ['Sample 1', 'Sample 2', 'Sample 3'],
        datasets: [{
            data: [25.0, 28.0, 22.5],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)'],
            borderWidth: 0
        }]
    }
});
// document.addEventListener("DOMContentLoaded", function () {
//     let temperatureValues = [];
//     let humidityValues = [];
//     let pressureValues = [];

//     // Function to fetch data from the server
//     function fetchData() {
//         $.ajax({
//             url: 'getData.php',
//             method: 'GET',
//             dataType: 'json',
//             success: function (response) {
//                 // Parse the JSON string into an object
//                 const data = JSON.parse(response);

//                 // Extract and convert values to numbers
//                 temperatureValues = data.map(entry => parseFloat(entry.Temperature));
//                 humidityValues = data.map(entry => parseFloat(entry.Humidity));
//                 pressureValues = data.map(entry => parseFloat(entry.Pressure));

//                 // Process the response data and update the chart
//                 updateChart();
//             },
//             error: function (error) {
//                 console.error('Error fetching data:', error);
//             }
//         });
//     }

//     // Function to update the chart with new data
//     function updateChart() {
//         // Bar chart configuration
//         var ctxBarChart = document.getElementById('barChart').getContext('2d');
//         var barChart = new Chart(ctxBarChart, {
//             type: 'bar',
//             data: {
//                 labels: ['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5'],
//                 datasets: [{
//                     label: 'Temperature (°C)',
//                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                     borderColor: 'rgba(75, 192, 192, 1)',
//                     borderWidth: 1,
//                     data: [temperatureValues,temperatureValues,temperatureValues]
//                 },
//                 {
//                     label: 'Humidity (%)',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [humidityValues,humidityValues,humidityValues]
//                 },
//                 {
//                     label: 'Pressure (hPa)',
//                     backgroundColor: 'rgba(255, 205, 86, 0.2)',
//                     borderColor: 'rgba(255, 205, 86, 1)',
//                     borderWidth: 1,
//                     data: [pressureValues,pressureValues,pressureValues]
//                 }]
//             },
//             options: {
//                 scales: {
//                     x: {
//                         stacked: true,
//                     },
//                     y: {
//                         stacked: true,
//                     },
//                 },
//             },
//         });
//     }

//     // Call the fetchData function to initially populate the chart
//     fetchData();

//     // Set up a timer to fetch data periodically (adjust the interval as needed)
//     setInterval(fetchData, 30000); // Fetch data every 30 seconds
// });
