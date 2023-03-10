// const ctx = document.getElementById("myChart").getContext("2d");

// let gradient = ctx.createLinearGradient(0, 0, 0, 400);
// gradient.addColorStop(0, "rgba(58, 123, 213, 1)");
// gradient.addColorStop(0, "rgba(0, 210, 255, 0.3)");

// const labels = [
//   "2012",
//   "2013",
//   "2014",
//   "2015",
//   "2016",
//   "2017",
//   "2018",
//   "2019",
//   "2020",
// ];

// const data = {
//   labels,
//   datasets: [
//     {
//       data: [211, 326, 165, 350, 420, 370, 500, 375, 415],
//       label: "Bueeeenas",
//       fill: true,
//       backgroundColor: gradient,
//       borderColor: "#fff",
//       pointBackgroundColor: "#fff",
//     },
//   ],
// };

// const config = {
//   type: "line",
//   data: data,
//   options: {
//     responsive: true,
//     scales: {
//       y: {
//         ticks: {
//           callback: function (value) {
//             return "$" + value + "m";
//           },
//         },
//       },
//     },
//   },
// };

// const myChart = new Chart(ctx, config);

const ctx = document.getElementById("myChart");
const names = ["Carlos", "Pedro", "Maria", "Rosa", "Juan"];
const age = [24, 10, 54, 51, 15];

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: names,
    datasets: [
      {
        label: "Edad",
        data: age,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderWidth: 1.5,
      },
    ],
  },
});
