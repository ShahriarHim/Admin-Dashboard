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
            data: [76, -10, 42]
        }, {
            label: 'Humidity (%)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [82, 105, 38]
        }, {
            label: 'Pressure (hPa)',
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgba(255, 205, 86, 1)',
            borderWidth: 1,
            data: [1175, 1059, 1272]
        }]
    }
});



var ctxLineChart = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctxLineChart, {
    type: 'line',
    data: {
        labels: ['Sample 1', 'Sample 2', 'Sample 3'],
        datasets: [{
            label: 'Temperature (°C)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [76, -10, 42]
        }, {
            label: 'Soil Moisture (%)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [36, 40, 71]
        }, {
            label: 'Soil Nutrients (%)',
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgba(255, 205, 86, 1)',
            borderWidth: 1,
            data: [41, 10, 72]
        }]
    }
});

var ctxPieChart = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctxPieChart, {
    type: 'pie',
    data: {
        labels: ['Temperature (°C)', 'Humidity (%)', 'Pressure (hPa)'],
        datasets: [{
            data: [76, 82, 1175],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)'],
            borderWidth: 0
        }]
    }
});


var ctxDoughnutChart = document.getElementById('doughnutChart').getContext('2d');
var doughnutChart = new Chart(ctxDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['Temperature (°C)', 'Soil Moisture (%)', 'Soil Nutrients (%)'],
        datasets: [{
            data: [1175, 36, 41],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)'],
            borderWidth: 0
        }]
    },
    options: {
        cutoutPercentage: 70
    }
});







// Assuming you have already included jQuery in your project

// Bar Chart
// var ctxBarChart = document.getElementById('barChart').getContext('2d');
// var barChart;

// // Function to update chart data
// function updateChartData(t_data, h_data, p_data) {
//     barChart.data.datasets[0].data = t_data;
//     barChart.data.datasets[1].data = h_data;
//     barChart.data.datasets[2].data = p_data;
//     barChart.update();
// }

// // AJAX request to fetch data from getData.php
// $.ajax({
//     url: 'getData.php',
//     method: 'GET',
//     dataType: 'json',
//     success: function (data) {
//         var t_data = data.t_data;
//         var h_data = data.h_data;
//         var p_data = data.p_data;

//         // Create Bar Chart
//         barChart = new Chart(ctxBarChart, {
//             type: 'bar',
//             data: {
//                 labels: ['Sample 1', 'Sample 2', 'Sample 3'],
//                 datasets: [{
//                     label: 'Temperature (°C)',
//                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                     borderColor: 'rgba(75, 192, 192, 1)',
//                     borderWidth: 1,
//                     data: t_data
//                 }, {
//                     label: 'Humidity (%)',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: h_data
//                 }, {
//                     label: 'Pressure (hPa)',
//                     backgroundColor: 'rgba(255, 205, 86, 0.2)',
//                     borderColor: 'rgba(255, 205, 86, 1)',
//                     borderWidth: 1,
//                     data: p_data
//                 }]
//             }
//         });
//     },
//     error: function (xhr, status, error) {
//         console.error('Error fetching data:', error);
//     }
// });

// Similar AJAX requests and chart creation can be done for other charts




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
