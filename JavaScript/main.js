const CHART = document.getElementById("lineChart");
console.log(CHART);

Chart.defaults.scale.ticks.beginAtZero = true;

var dataFirst = {
     labels: ["Polski", "Matematyka", "Angielski", "Fizyka", "Informatyka", "Biologia", "Chemia", "Geografia", "Historia"],
     datasets: [
          {
               label: "Średnia maturalna",
               fill: true,
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
               //backgroundColor: ["#EF626C","#679436","#064789","#FFBA08","#DB162F","#3F88C5","#7E1946","#FFC9B5","#9EE493"],
               data: [30,90,60,20,80,50,35,60,31],
               spanGaps: false,
          }
     ]
};

var myChart = new Chart(CHART,
     {
          type: "line",
          data: dataFirst
     });
