const CHART = document.getElementById("lineChart");
console.log(CHART);

let lineChart = new Chart(CHART, {
     type: 'line',
     data:    {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
        {
            label: "Miesięczne Wyniki",
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [100, 59, 80, 81, 0, 55, 40],
            spanGaps: false,
        }
    ]
    }
});
