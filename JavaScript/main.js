const CHART = document.getElementById("lineChart");
console.log(CHART);

let lineChart = new Chart(CHART, {
     type: 'line',
     data:
     {
          labels: ["Matematyka", "Polski", "Angielski", "Fizyka", "Informatyka", "Chemia", "Biologia"],
          datasets:
          [
               {
                    label: "Wyniki Maturalne",
                    fill: false,
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "red",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [50,40,30,50,78,43.5,23.8],
                    spanGaps: false,
               },
               {
                    label: "II LO",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,240,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "red",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,240,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [80,60,50,80,45.7,20,32.1],
                    spanGaps: false,
               }
          ]
     },
     options:
     {
          scales:
          {
               yAxes:
               [
                    {
                         ticks:
                         {
                              beginAtZero: true
                         }
                    }
               ]
          }
     }
});
